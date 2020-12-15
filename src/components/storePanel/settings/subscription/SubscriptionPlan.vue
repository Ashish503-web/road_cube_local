<template>
    <fragment>
        <v-alert
            v-if="showAlert"
            type="error"
            class="font-weight-bold my-4"
            outlined
        >
            {{ translations.alertText[lang] }}
        </v-alert>

        <v-sheet outlined>
            <v-row no-gutters class="b-bottom-outlined">
                <v-col
                    class="subtitle-2 pa-3"
                    v-text="translations.store[lang]"
                ></v-col>
                <v-col
                    class="subtitle-2 pa-3"
                    v-text="translations.type[lang]"
                ></v-col>
                <v-col
                    class="subtitle-2 pa-3"
                    v-text="translations.amount[lang]"
                ></v-col>
                <v-col
                    v-if="showAlert"
                    class="subtitle-2 pa-3"
                    v-text="translations.paymentInfo[lang]"
                ></v-col>
                <template v-else>
                    <v-col
                        class="subtitle-2 pa-3"
                        v-text="translations.paymentType[lang]"
                    ></v-col>
                    <v-col
                        class="subtitle-2 pa-3"
                        v-text="translations.action[lang]"
                    ></v-col>
                </template>
            </v-row>
            <v-row no-gutters align="center" style="font-size: 0.875rem">
                <v-col class="pa-3">
                    {{ $store.state.storePanel.store.app_name }}
                </v-col>
                <v-col class="pa-3">
                    {{ subscriptionPlanType }}
                </v-col>
                <v-col class="pa-3">
                    {{ subscriptionPlanAmount }}
                </v-col>
                <v-col v-if="showAlert" class="pa-3">
                    <v-btn class="ml-n2" icon @click="dialog = true">
                        <v-icon v-text="icons.mdiCreditCard"></v-icon>
                    </v-btn>
                </v-col>
                <template v-else>
                    <v-col class="pa-3">
                        {{
                            slug === "clearer"
                                ? translations.payWithCard[lang]
                                : translations.payWithWeb[lang]
                        }}
                    </v-col>
                    <v-col class="pa-3">
                        <form
                            :action="redirectForm.action"
                            :charset="redirectForm.charset"
                        >
                            <div
                                v-for="(value, prop) in redirectForm"
                                :key="prop"
                            >
                                <input
                                    v-if="
                                        prop !== 'action' && prop !== 'charset'
                                    "
                                    type="text"
                                    hidden
                                    :name="prop"
                                    :value="value"
                                />
                            </div>

                            <v-btn
                                type="submit"
                                color="success"
                                width="150"
                                depressed
                            >
                                <v-icon
                                    v-if="slug === 'clearer'"
                                    class="mr-1"
                                    v-text="icons.mdiCreditCard"
                                ></v-icon>
                                {{ translations.pay[lang] }}
                            </v-btn>
                        </form>
                    </v-col>
                </template>
            </v-row>
        </v-sheet>

        <v-dialog v-if="showAlert" v-model="dialog" max-width="600">
            <b-card :title="translations.title[lang]" @cancel="dialog = false">
                <v-sheet outlined>
                    <v-row no-gutters class="b-bottom-outlined">
                        <v-col
                            class="subtitle-2 pa-3"
                            v-text="translations.bank[lang]"
                        ></v-col>
                        <v-col
                            class="subtitle-2 pa-3"
                            v-text="translations.name[lang]"
                        ></v-col>
                        <v-col
                            class="subtitle-2 pa-3"
                            v-text="translations.iban[lang]"
                        ></v-col>
                    </v-row>
                    <v-row no-gutters style="font-size: 0.875rem">
                        <v-col
                            class="pa-3"
                            v-text="
                                storeSubscription.store_payment_method
                                    .store_payment_method[lang]
                            "
                        ></v-col>
                        <v-col
                            class="pa-3"
                            v-text="
                                storeSubscription.store_payment_method
                                    .parent_store_credentials.values.name
                            "
                        ></v-col>
                        <v-col
                            class="pa-3"
                            v-text="
                                storeSubscription.store_payment_method
                                    .parent_store_credentials.values.iban
                            "
                        ></v-col>
                    </v-row>
                </v-sheet>
            </b-card>
        </v-dialog>
    </fragment>
</template>

<script>
import { mdiCreditCard } from "@mdi/js";
import { mapState } from "vuex";

import { Fragment } from "vue-fragment";
import translations from "@/utils/translations/storePanel/settings/subscription/subscriptionPlan";

export default {
    name: "SubscriptionPlan",

    components: { Fragment },

    mixins: [translations],

    data: () => ({
        icons: { mdiCreditCard },
        dialog: false
    }),

    computed: {
        ...mapState("storePanel/subscription", [
            "storeSubscription",
            "showAlert",
            "slug",
            "redirectForm"
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
    }
};
</script>
