<template>
    <v-tab-item :value="$route.path" class="pa-3">
        <v-row v-if="loading" no-gutters justify="center" align="center">
            <v-progress-circular indeterminate></v-progress-circular>
        </v-row>

        <template v-else>
            <v-card
                v-if="showPaymentMethods"
                outlined
                width="500"
                class="mx-auto"
            >
                <v-card-title class="subtitle-1 font-weight-bold justify-center"
                    >Please Choose Payment Method</v-card-title
                >

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
                        @click="
                            attachPaymentMethod({ store_payment_method_id })
                        "
                        >save</v-btn
                    >
                </div>
            </v-card>

            <template v-else>
                <v-card outlined width="500" class="mx-auto mt-5">
                    <v-card-title class="justify-space-between grey lighten-3">
                        Plan
                        <v-icon
                            color="secondary"
                            x-large
                            v-text="icons.mdiCashMultiple"
                        ></v-icon>
                    </v-card-title>

                    <v-divider></v-divider>

                    <v-card-text>
                        <v-row no-gutters class="b-outlined">
                            <v-col cols="6">
                                <h3
                                    class="text-center subtitle-1 font-weight-bold pa-3 b-bottom-outlined"
                                >
                                    Type
                                </h3>

                                <div class="text-center pa-4">
                                    {{ subscriptionPlanType }}
                                </div>
                            </v-col>
                            <v-col cols="6">
                                <h3
                                    class="text-center subtitle-1 font-weight-bold pa-3 b-bottom-outlined"
                                >
                                    Amount
                                </h3>

                                <div class="text-center pa-4">
                                    {{ subscriptionPlanAmount }}
                                </div>
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <template v-if="openPayment">
                        <template v-if="showAlert">
                            <v-alert type="error" class="font-weight-bold mx-4">
                                Due day has passed, you have to make offline
                                payment.
                            </v-alert>

                            <v-card-text class="pt-1">
                                <v-row no-gutters class="b-outlined">
                                    <v-col cols="4">
                                        <h3
                                            class="text-center text-uppercase subtitle-2 pa-4 b-bottom-outlined"
                                        >
                                            Bank
                                        </h3>

                                        <div
                                            class="text-center pa-4"
                                            v-text="
                                                storeSubscription
                                                    .store_payment_method
                                                    .store_payment_method[lang]
                                            "
                                        ></div>
                                    </v-col>
                                    <v-col cols="4">
                                        <h3
                                            class="text-center text-uppercase subtitle-2 pa-4 b-bottom-outlined"
                                        >
                                            Name
                                        </h3>

                                        <div
                                            class="text-center pa-4"
                                            v-text="
                                                storeSubscription
                                                    .store_payment_method
                                                    .parent_store_credentials
                                                    .values.name
                                            "
                                        ></div>
                                    </v-col>
                                    <v-col cols="4">
                                        <h3
                                            class="text-center text-uppercase subtitle-2 pa-4 b-bottom-outlined"
                                        >
                                            Iban
                                        </h3>

                                        <div
                                            class="text-center pa-4"
                                            v-text="
                                                storeSubscription
                                                    .store_payment_method
                                                    .parent_store_credentials
                                                    .values.iban
                                            "
                                        ></div>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </template>

                        <form
                            v-else
                            :action="redirectForm.action"
                            :charset="redirectForm.charset"
                            class="pa-4 pt-0"
                        >
                            <v-row
                                no-gutters
                                justify="space-between"
                                align="center"
                            >
                                <v-col cols="auto">
                                    {{
                                        slug === "clearer"
                                            ? "Pay with Debit/Credit Card"
                                            : "Pay with web banking"
                                    }}
                                </v-col>
                                <v-col cols="auto">
                                    <div
                                        v-for="(value, prop) in redirectForm"
                                        :key="prop"
                                    >
                                        <input
                                            v-if="
                                                prop !== 'action' &&
                                                    prop !== 'charset'
                                            "
                                            type="text"
                                            hidden
                                            :name="prop"
                                            :value="value"
                                        />
                                    </div>

                                    <v-btn
                                        type="submit"
                                        color="secondary"
                                        width="150"
                                        outlined
                                    >
                                        <v-icon
                                            v-if="slug === 'clearer'"
                                            class="mr-1"
                                            v-text="icons.mdiCreditCard"
                                        ></v-icon>
                                        pay
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </form>
                    </template>
                </v-card>

                <v-toolbar-title class="mt-10 pa-5"
                    >Payment History</v-toolbar-title
                >

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
                    <template v-slot:no-data>
                        <v-progress-circular
                            v-if="loading"
                            color="secondary"
                            indeterminate
                        ></v-progress-circular>
                        <span v-else>No data available</span>
                    </template>

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
                            >to be paid</v-alert
                        >
                        <v-alert
                            v-else
                            type="success"
                            class="ma-0"
                            text
                            dense
                            outlined
                            >paid</v-alert
                        >
                    </template>
                </v-data-table>
            </template>
        </template>
    </v-tab-item>
</template>

<script>
import { mdiCashMultiple, mdiCreditCard } from "@mdi/js";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    name: "Subscription",

    data() {
        return {
            icons: { mdiCashMultiple, mdiCreditCard },
            headers: [
                { text: "Total", value: "total", width: "20%" },
                {
                    text: "Payment Status",
                    value: "pending_payment",
                    width: "50%"
                },
                {
                    text: "Date",
                    value: "updated_at",
                    width: "30%",
                    align: "center"
                }
            ],
            page: +this.$route.query.page,
            store_payment_method_id: null
        };
    },

    computed: {
        ...mapState(["loading", "errorMessage", "serverItemsLength"]),
        ...mapState("storePanel/settings/subscription", [
            "storeSubscription",
            "billings",
            "openPayment",
            "showAlert",
            "slug",
            "redirectForm",
            "showPaymentMethods",
            "paymentMethods"
        ]),

        lang() {
            return this.$route.params.lang;
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
        ...mapActions("storePanel/settings/subscription", [
            "getItem",
            "attachPaymentMethod"
        ])
    },

    watch: {
        $route(val) {
            if (!val.query.page) {
                this.$router.push({
                    query: {
                        page: 1,
                        ...this.$route.query
                    }
                });
            }
            this.getItems(this.query);
        },

        page(page) {
            this.$router.push({ query: { ...this.$route.query, page } });
        }
    },

    beforeCreate() {
        if (!this.$route.query.page) {
            this.$router.push({
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
