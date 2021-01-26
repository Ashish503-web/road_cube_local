<template>
    <v-tab-item v-if="permission" :value="$route.path" class="pa-3">
        <v-row v-if="loading" no-gutters justify="center" align="center">
            <v-progress-circular indeterminate></v-progress-circular>
        </v-row>

        <template v-else>
            <PaymentMessage />

            <v-card
                v-if="showPaymentMethods"
                outlined
                width="500"
                class="mx-auto"
            >
                <v-card-title
                    class="subtitle-1 font-weight-bold justify-center"
                    v-text="translations.paymentMethod[lang]"
                ></v-card-title>

                <v-divider></v-divider>

                <v-radio-group
                    v-model="store_payment_method_id"
                    class="ma-4 pt-0"
                    hide-details
                >
                    <v-radio
                        v-for="method in paymentMethods"
                        :key="method.store_payment_method_id"
                        :value="method.store_payment_method_id"
                        color="secondary"
                        class="b-outlined pa-3"
                    >
                        <template v-slot:label>
                            <v-row no-gutters>
                                <v-col
                                    cols="6"
                                    class="subtitle-2 text--primary text-center"
                                    v-text="
                                        method.system_payment_category.name[
                                            lang
                                        ]
                                    "
                                ></v-col>
                                <v-col
                                    cols="6"
                                    class="subtitle-2 text--primary text-center"
                                    v-text="
                                        method.system_payment_method.name[lang]
                                    "
                                ></v-col>
                            </v-row>
                        </template>
                    </v-radio>
                </v-radio-group>

                <v-alert v-if="errorMessage" type="error" class="mx-4">{{
                    errorMessage
                }}</v-alert>

                <div class="text-right pa-4 pt-0">
                    <v-btn
                        color="secondary"
                        class="text-capitalize px-5"
                        :disabled="!store_payment_method_id"
                        :loading="loading"
                        v-text="translations.save[lang]"
                        @click="
                            attachPaymentMethod({ store_payment_method_id })
                        "
                    ></v-btn>
                </div>
            </v-card>

            <template v-else>
                <v-row no-gutters align="center" class="pa-5 pl-0 pt-0">
                    <v-col cols="auto">
                        <v-img
                            src="@/assets/subscription.png"
                            width="60"
                            height="60"
                        ></v-img>
                    </v-col>

                    <v-col cols="9" class="pl-5">
                        <h4 v-text="translations.title[lang]"></h4>
                        <div
                            style="font-size: 0.875rem"
                            class="font-weight-medium"
                            v-text="translations.info[lang]"
                        ></div>
                    </v-col>
                </v-row>

                <h3
                    class="subtitle-1 font-weight-bold mt-5 mb-3 pl-1"
                    v-text="translations.subscriptionPlan[lang]"
                ></h3>

                <SubscriptionPlan />

                <h3
                    class="subtitle-1 font-weight-bold mt-12 mb-3 pl-1"
                    v-text="translations.paymentHistory[lang]"
                ></h3>

                <v-data-table
                    :headers="headers"
                    :items="billings"
                    :footer-props="{
                        itemsPerPageOptions: [12],
                        showCurrentPage: true
                    }"
                    :page.sync="page"
                    class="b-outlined"
                >
                    <template v-slot:item.total="{ item }">
                        {{
                            new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "EUR",
                                minimumFractionDigits: 2
                            }).format(item.total)
                        }}
                    </template>

                    <template v-slot:item.pending_payment="{ item }">
                        <v-alert
                            v-if="item.pending_payment"
                            type="warning"
                            class="ma-0"
                            text
                            dense
                            outlined
                        >
                            {{ translations.toBePaid[lang] }}
                        </v-alert>
                        <v-alert
                            v-else
                            type="success"
                            class="ma-0"
                            text
                            dense
                            outlined
                        >
                            {{ translations.paid[lang] }}
                        </v-alert>
                    </template>
                </v-data-table>
            </template>
        </template>
    </v-tab-item>
</template>

<script>
import subscription from "@/store/modules/storePanel/settings/subscription";

import { mapState, mapMutations, mapActions } from "vuex";

import PaymentMessage from "@/components/storePanel/settings/subscription/PaymentMessage.vue";
import SubscriptionPlan from "@/components/storePanel/settings/subscription/SubscriptionPlan.vue";
import translations from "@/utils/translations/storePanel/settings/subscription";

export default {
    name: "Subscription",

    components: { PaymentMessage, SubscriptionPlan },

    mixins: [translations],

    data() {
        return {
            page: +this.$route.query.page,
            store_payment_method_id: null
        };
    },

    computed: {
        ...mapState(["loading", "errorMessage", "serverItemsLength"]),
        ...mapState("storePanel/subscription", [
            "storeSubscription",
            "billings",
            "showAlert",
            "slug",
            "redirectForm",
            "showPaymentMethods",
            "paymentMethods"
        ]),

        lang() {
            return this.$route.params.lang;
        },

        permission() {
            return this.$store.state.permissions.settings
                ? this.$store.state.permissions.settings.subscriptions
                : null;
        },

        headers() {
            return [
                {
                    text: this.translations.total[this.lang],
                    value: "total",
                    width: "20%"
                },
                {
                    text: this.translations.paymentStatus[this.lang],
                    value: "pending_payment",
                    width: "50%"
                },
                {
                    text: this.translations.date[this.lang],
                    value: "updated_at",
                    width: "30%",
                    align: "center"
                }
            ];
        },

        subscriptionPlanType() {
            return this.storeSubscription.store_subscription_plan
                ? this.storeSubscription.store_subscription_plan.plan_type[
                      this.lang
                  ]
                : null;
        },

        subscriptionPlanAmount() {
            let planAmount = this.storeSubscription.store_subscription_plan
                ? this.storeSubscription.store_subscription_plan
                      .plan_recurring === 1
                    ? this.storeSubscription.store_subscription_plan.plan_price
                    : this.storeSubscription.billings[
                          this.storeSubscription.billings.length - 1
                      ].total
                : null;

            return new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "EUR",
                minimumFractionDigits: 2
            }).format(planAmount);
        }
    },

    methods: {
        ...mapActions("storePanel/subscription", [
            "getItem",
            "attachPaymentMethod"
        ])
    },

    watch: {
        permission: {
            immediate: true,
            handler(val) {
                if (!val) {
                    this.$router.replace(
                        `/${this.lang}/storePanel/forbidden-gateway`
                    );
                }
            }
        },

        $route(newVal, oldVal) {
            if (!newVal.query.page) {
                this.$router.replace({
                    query: {
                        page: 1,
                        ...this.$route.query
                    }
                });
            }

            if (newVal.query.page !== oldVal.query.page) {
                this.getItem(this.query);
            }
        },

        page(page) {
            this.$router.replace({ query: { ...this.$route.query, page } });
        }
    },

    beforeCreate() {
        if (!this.$store.state.storePanel.subscription) {
            this.$store.registerModule(
                ["storePanel", "subscription"],
                subscription
            );
        }

        if (!this.$route.query.page) {
            this.$router.replace({
                query: {
                    page: 1,
                    ...this.$route.query
                }
            });
        }
    },

    mounted() {
        this.getItem();
    }
};
</script>
