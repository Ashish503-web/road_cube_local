<template>
    <v-tab-item :value="$route.path" class="pa-3">
        <h3
            class="text-h6 font-weight-bold text-center"
            v-text="translations.title[lang]"
        ></h3>

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
                                    ? translations.active[lang]
                                    : translations.inactive[lang]
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
                        <template v-if="paymentProvider.store_bank_provider_id">
                            <v-btn
                                color="secondary"
                                class="mr-3"
                                width="100"
                                height="50"
                                depressed
                                v-text="translations.edit[lang]"
                                @click="open(2, paymentProvider)"
                            ></v-btn>
                            <v-btn
                                color="secondary"
                                width="120"
                                height="50"
                                depressed
                                v-text="translations.disable[lang]"
                                @click="open(0, paymentProvider)"
                            ></v-btn>
                        </template>
                        <v-btn
                            v-else
                            color="secondary"
                            width="120"
                            height="50"
                            depressed
                            v-text="translations.enable[lang]"
                            @click="open(1, paymentProvider)"
                        ></v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-dialog v-model="dialog" max-width="500">
            <b-card
                :title="title"
                :loading="loading"
                :error-message="errorMessage"
                @cancel="dialog = false"
                @submit="mode === 1 ? create() : update()"
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
                :title="translations.disableProvider[lang]"
                :submit-text="{ el: '', en: 'disable', it: '' }"
                :loading="loading"
                :error-message="errorMessage"
                @cancel="deleteDialog = false"
                @submit="remove"
            >
                <div class="subtitle-1 font-weight-medium pl-2">
                    {{ translations.areYouSure[lang] }}
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
import { mdiPencilOutline, mdiClose, mdiMagnify } from "@mdi/js";
import { mapState, mapMutations, mapActions } from "vuex";
import translations from "@/utils/translations/storePanel/settings/paymentProviders";

export default {
    name: "PaymentProviders",

    mixins: [translations],

    data() {
        return {
            icons: { mdiPencilOutline, mdiClose, mdiMagnify },
            page: +this.$route.query.page,
            mode: 0
        };
    },

    computed: {
        ...mapState(["loading", "errorMessage", "resetValidation"]),
        ...mapState("storePanel/settings/paymentProviders", [
            "providersLoading",
            "paymentProviders"
        ]),

        lang() {
            return this.$route.params.lang;
        },

        title() {
            return this.mode === 1
                ? this.translations.createProvider[this.lang]
                : this.translations.updateProvider[this.lang];
        },

        dialog: {
            get() {
                return this.$store.state.dialog;
            },

            set(val) {
                this.setDialog(val);
            }
        },

        deleteDialog: {
            get() {
                return this.$store.state.deleteDialog;
            },

            set(val) {
                this.setDeleteDialog(val);
            }
        },

        paymentProvider: {
            get() {
                return this.$store.state.storePanel.settings.paymentProviders
                    .paymentProvider;
            },

            set(val) {
                this.setItem(val);
            }
        },

        query() {
            let query = "?";

            for (let key in this.$route.query) {
                query += `${key}=${this.$route.query[key]}&`;
            }

            return query.slice(0, query.length - 1);
        }
    },

    methods: {
        ...mapMutations(["setDialog", "setDeleteDialog", "setResetValidation"]),
        ...mapMutations("storePanel/settings/paymentProviders", ["setItem"]),
        ...mapActions("storePanel/settings/paymentProviders", [
            "getItems",
            "create",
            "update",
            "remove"
        ]),

        open(mode, item) {
            this.mode = mode;
            this.paymentProvider = item;
            if (mode === 0) {
                this.deleteDialog = true;
            } else {
                this.setResetValidation(true);
                this.dialog = true;
            }
        }
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
            this.$router.replace({
                query: {
                    page: 1,
                    ...this.$route.query
                }
            });
        }
    },

    mounted() {
        this.getItems(this.query);
    }
};
</script>
