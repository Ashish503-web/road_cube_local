<template>
    <v-tab-item v-if="permission" :value="$route.path" class="pa-3">
        <v-row no-gutters align="center" class="pa-4 pt-1 pb-8">
            <v-col cols="auto">
                <v-img
                    src="@/assets/credit-card.png"
                    width="60"
                    height="60"
                ></v-img>
            </v-col>

            <v-col cols="7" class="pl-3">
                <h4 v-text="translations.title[lang]"></h4>
                <div
                    style="font-size: 0.875rem"
                    class="font-weight-medium"
                    v-text="translations.info[lang]"
                ></div>
            </v-col>
        </v-row>

        <v-data-table
            :headers="headers"
            :items="paymentProcessings"
            :footer-props="{ itemsPerPageOptions: [12], showCurrentPage: true }"
            disable-sort
            hide-default-footer
            class="b-outlined"
        >
            <template v-slot:no-data>
                <v-progress-circular
                    v-if="loading"
                    color="secondary"
                    indeterminate
                ></v-progress-circular>
                <span v-else v-text="translations.noData[lang]"></span>
            </template>

            <template v-slot:item.bank_provider="{ item }">
                <img
                    :src="item.bank_provider.logo"
                    width="100"
                    class="mr-2"
                    style="vertical-align: middle"
                />
                <span v-text="item.bank_provider.name[lang]"></span>
            </template>

            <template v-slot:item.bank_clearer="{ item }">
                <img
                    :src="item.bank_clearer.logo"
                    width="100"
                    class="mr-2"
                    style="vertical-align: middle"
                />
                <span
                    style="text-decoration: underline; cursor: pointer"
                    v-text="item.bank_clearer.name[lang]"
                    @click="open(item)"
                ></span>
            </template>
        </v-data-table>

        <v-dialog v-model="dialog" max-width="500">
            <b-card
                :title="translations.chooseBank[lang]"
                :loading="loading"
                :error-message="errorMessage"
                @cancel="dialog = false"
                @submit="update"
            >
                <v-radio-group
                    v-model="paymentProcessing.bank_clearer.bank_provider_id"
                    class="mt-0 pt-0"
                    hide-details
                >
                    <v-radio
                        v-for="provider in storeBankProviders"
                        :key="provider.store_bank_provider_id"
                        color="secondary"
                        class="b-outlined pa-3"
                        :value="provider.bank_provider_id"
                    >
                        <template v-slot:label>
                            <img :src="provider.logo" width="60" class="mr-3" />
                            <h4
                                class="text--primary subtitle-2"
                                v-text="provider.name[lang]"
                            ></h4>
                        </template>
                    </v-radio>
                </v-radio-group>
            </b-card>
        </v-dialog>
    </v-tab-item>
</template>

<script>
import paymentProcessing from "@/store/modules/storePanel/settings/paymentProcessing";

import { mdiMenuUp, mdiMenuDown } from "@mdi/js";
import { mapState, mapActions, mapMutations } from "vuex";
import translations from "@/utils/translations/storePanel/settings/paymentProcessing";

export default {
    name: "PaymentProcessing",

    mixins: [translations],

    data() {
        return {
            icons: { mdiMenuUp, mdiMenuDown },
        };
    },

    computed: {
        ...mapState(["loading", "errorMessage"]),
        ...mapState("storePanel/paymentProcessing", [
            "storeBankProviders",
            "paymentProcessings",
        ]),

        lang() {
            return this.$route.params.lang;
        },

        permission() {
            return this.$store.state.permissions.settings
                ? this.$store.state.permissions.settings.payment_routing
                : null;
        },

        headers() {
            return [
                {
                    text: this.translations.cardIssued[this.lang],
                    value: "bank_provider",
                },
                {
                    text: this.translations.processPayment[this.lang],
                    value: "bank_clearer",
                },
            ];
        },

        dialog: {
            get() {
                return this.$store.state.dialog;
            },

            set(val) {
                this.setDialog(val);
            },
        },

        paymentProcessing: {
            get() {
                return this.$store.state.storePanel.paymentProcessing
                    .paymentProcessing;
            },

            set(val) {
                this.setItem(val);
            },
        },
    },

    methods: {
        ...mapMutations(["setDialog"]),
        ...mapMutations("storePanel/paymentProcessing", ["setItem"]),
        ...mapActions("storePanel/paymentProcessing", [
            "getStoreBankProviders",
            "getItems",
            "update",
        ]),

        open(item) {
            this.paymentProcessing = item;
            this.dialog = true;
        },
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
            },
        },
    },

    beforeCreate() {
        if (!this.$store.state.storePanel.paymentProcessing) {
            this.$store.registerModule(
                ["storePanel", "paymentProcessing"],
                paymentProcessing
            );
        }
    },

    mounted() {
        this.getItems();
        this.getStoreBankProviders();
    },
};
</script>

<style scoped>
.b-outlined-bottom:last-child {
    border-bottom: none;
}
</style>
