<template>
    <v-tab-item :value="$route.path" class="pa-3">
        <h3 class="text-h6 font-weight-bold text-center">
            Set up one or more mobile payments for your business.
        </h3>

        <v-row
            v-if="providersLoading"
            no-gutters
            justify="center"
            align="center"
            style="height: 300px"
        >
            <v-progress-circular indeterminate></v-progress-circular>
        </v-row>

        <v-row v-else no-gutters justify="center" class="mt-5">
            <v-col cols="8">
                <v-row
                    v-for="paymentProvider in paymentProviders"
                    :key="paymentProvider.bank_provider_id"
                    no-gutters
                    align="center"
                    class="b-grey mb-3 px-5 pb-5"
                >
                    <v-col cols="12" class="mb-5">
                        <v-sheet
                            :color="
                                paymentProvider.store_bank_provider_id
                                    ? 'green'
                                    : 'grey lighten-1'
                            "
                            class="text-center text-button font-weight-bold"
                            dark
                            width="100"
                            v-text="
                                paymentProvider.store_bank_provider_id
                                    ? 'active'
                                    : 'inactive'
                            "
                        ></v-sheet>
                    </v-col>
                    <v-col cols="auto">
                        <v-img :src="paymentProvider.logo" width="100"></v-img>
                    </v-col>

                    <v-col class="px-5">
                        <h3
                            class="subtitle-1 font-weight-bold"
                            v-text="paymentProvider.name[lang]"
                        ></h3>
                        <h4
                            class="text--secondary font-weight-medium"
                            style="font-size: 0.875rem"
                            v-text="paymentProvider.description[lang]"
                        ></h4>
                    </v-col>

                    <v-col cols="auto">
                        <v-btn
                            large
                            color="secondary"
                            width="120"
                            height="50"
                            depressed
                            v-text="
                                paymentProvider.store_bank_provider_id
                                    ? 'disable'
                                    : 'enable'
                            "
                            @click="open(paymentProvider)"
                        ></v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-dialog v-model="dialog" max-width="500">
            <b-card
                title="Create Provider"
                :loading="loading"
                :error-message="errorMessage"
                @cancel="dialog = false"
                @submit="create"
            >
                <b-text-field
                    v-for="(field, i) in paymentProvider.fields"
                    :key="i"
                    v-model="paymentProvider.credentials[field]"
                    :label="field"
                    :no-top-margin="i === 0"
                    class="mx-2 text-capitalize"
                ></b-text-field>
            </b-card>
        </v-dialog>

        <v-dialog v-model="deleteDialog" max-width="500">
            <b-card
                type="delete"
                title="Delete Provider"
                :submit-text="{ el: '', en: 'delete', it: '' }"
                :loading="loading"
                :error-message="errorMessage"
                @cancel="deleteDialog = false"
                @submit="remove"
            >
                <div class="subtitle-1 font-weight-medium pl-2">
                    Are you sure you want to delete
                    <span class="font-weight-bold text--primary">{{
                        paymentProvider.name[lang]
                    }}</span
                    >?
                </div>
            </b-card>
        </v-dialog>
    </v-tab-item>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { mdiPencilOutline, mdiClose, mdiMagnify } from "@mdi/js";

export default {
    name: "PaymentProviders",

    data() {
        return {
            icons: { mdiPencilOutline, mdiClose, mdiMagnify },
            page: +this.$route.query.page,
        };
    },

    computed: {
        ...mapState(["loading", "errorMessage", "resetValidation"]),
        ...mapState("storePanel/settings/paymentProviders", [
            "providersLoading",
            "paymentProviders",
        ]),

        lang() {
            return this.$route.params.lang;
        },

        dialog: {
            get() {
                return this.$store.state.dialog;
            },

            set(val) {
                this.setDialog(val);
            },
        },

        deleteDialog: {
            get() {
                return this.$store.state.deleteDialog;
            },

            set(val) {
                this.setDeleteDialog(val);
            },
        },

        paymentProvider: {
            get() {
                return this.$store.state.storePanel.settings.paymentProviders
                    .paymentProvider;
            },

            set(val) {
                this.setItem(val);
            },
        },

        query() {
            let query = "?";

            for (let key in this.$route.query) {
                query += `${key}=${this.$route.query[key]}&`;
            }

            return query.slice(0, query.length - 1);
        },
    },

    methods: {
        ...mapMutations(["setDialog", "setDeleteDialog", "setResetValidation"]),
        ...mapMutations("storePanel/settings/paymentProviders", ["setItem"]),
        ...mapActions("storePanel/settings/paymentProviders", [
            "getItems",
            "create",
            "update",
            "remove",
        ]),

        open(item) {
            this.paymentProvider = item;
            if (item.store_bank_provider_id) {
                this.deleteDialog = true;
            } else {
                this.setResetValidation(true);
                this.dialog = true;
            }
        },
    },

    watch: {
        $route(val) {
            if (!val.query.page) {
                this.$router.push({
                    query: {
                        page: 1,
                        ...this.$route.query,
                    },
                });
            }

            this.getItems(this.query);
        },

        page(page) {
            this.$router.push({ query: { ...this.$route.query, page } });
        },
    },

    beforeCreate() {
        if (!this.$route.query.page) {
            this.$router.replace({
                query: {
                    page: 1,
                    ...this.$route.query,
                },
            });
        }
    },

    mounted() {
        this.getItems(this.query);
    },
};
</script>
