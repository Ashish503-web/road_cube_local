<template>
    <v-tab-item :value="$route.path">
        <v-toolbar flat dense height="90">
            <v-btn
                color="secondary"
                class="text-capitalize px-5"
                depressed
                v-text="translations.addStore[lang]"
                @click="open(1, {})"
            ></v-btn>

            <v-spacer></v-spacer>

            <v-btn
                color="secondary"
                class="text-capitalize px-5"
                depressed
                v-text="translations.rights[lang]"
                @click="rightsDialog = true"
            ></v-btn>
        </v-toolbar>

        <v-row no-gutters justify="end" class="px-4 pb-3">
            <v-col cols="4">
                <b-search-field
                    v-model="search"
                    :search-types="searchTypes"
                    :selected-search-type="selectedSearchType"
                ></b-search-field>
            </v-col>
        </v-row>

        <v-data-table
            :headers="headers"
            :items="stores"
            :footer-props="{ itemsPerPageOptions: [12], showCurrentPage: true }"
            :page.sync="page"
            :server-items-length="serverItemsLength"
            disable-sort
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

            <template v-slot:item.view="{ item }">
                <v-tooltip color="secondary" top>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            icon
                            v-on="on"
                            @click="
                                () => {
                                    store = item;
                                    infoDialog = true;
                                }
                            "
                        >
                            <v-icon v-text="icons.mdiEye"></v-icon>
                        </v-btn>
                    </template>

                    <span
                        class="font-weight-bold"
                        v-text="translations.showAdditionalInfo[lang]"
                    ></span>
                </v-tooltip>
            </template>

            <template v-slot:item.actions="{ item }">
                <v-tooltip color="secondary" top>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            color="secondary"
                            icon
                            v-on="on"
                            @click="
                                () => {
                                    store = item;
                                    redirectDialog = true;
                                }
                            "
                        >
                            <v-icon v-text="icons.mdiOpenInNew"></v-icon>
                        </v-btn>
                    </template>

                    <span
                        class="font-weight-bold"
                        v-text="translations.redirect[lang]"
                    ></span>
                </v-tooltip>

                <v-tooltip color="secondary" top>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            color="yellow darken-3"
                            icon
                            v-on="on"
                            @click="open(2, item)"
                        >
                            <v-icon v-text="icons.mdiPencilOutline"></v-icon>
                        </v-btn>
                    </template>

                    <span
                        class="font-weight-bold"
                        v-text="translations.update[lang]"
                    ></span>
                </v-tooltip>

                <v-tooltip color="secondary" top>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            color="red"
                            icon
                            v-on="on"
                            @click="
                                () => {
                                    store = item;
                                    deleteDialog = true;
                                }
                            "
                        >
                            <v-icon v-text="icons.mdiClose"></v-icon>
                        </v-btn>
                    </template>

                    <span
                        class="font-weight-bold"
                        v-text="translations.delete[lang]"
                    ></span>
                </v-tooltip>
            </template>
        </v-data-table>

        <v-dialog v-model="dialog" max-width="600">
            <StoreForm :mode="mode" @cancel="dialog = false" />
        </v-dialog>

        <v-dialog v-model="rightsDialog" max-width="500">
            <RightsForm @cancel="rightsDialog = false" />
        </v-dialog>

        <v-dialog v-model="infoDialog" max-width="500">
            <AdditionalInfo @cancel="infoDialog = false" />
        </v-dialog>

        <v-dialog v-model="redirectDialog" max-width="500">
            <b-card
                title="Verification"
                :submit-text="{ el: '', en: 'Continue', it: '' }"
                @cancel="redirectDialog = false"
            >
                <div class="subtitle-1 font-weight-medium pl-2">
                    Want to go to your substitute on the road
                    <span class="font-weight-bold">{{ store.app_name }}</span
                    >?
                </div>

                <div class="subtitle-1 font-weight-medium pl-2">
                    Do you want to continue?
                </div>
            </b-card>
        </v-dialog>

        <v-dialog v-model="deleteDialog" max-width="500">
            <b-card
                type="delete"
                title="Delete Store"
                :loading="loading"
                :error-message="errorMessage"
                :submit-text="{ el: '', en: 'delete', it: '' }"
                @cancel="deleteDialog = false"
                @submit="remove"
            >
                <div class="subtitle-1 font-weight-medium pl-2">
                    Are you sure you want to delete
                    <span class="font-weight-bold text--primary">dieuth</span>?
                </div>

                <v-checkbox
                    color="secondary"
                    class="mt-3 ml-1 pt-0"
                    hide-details
                >
                    <template v-slot:label>
                        <h4 class="subtitle-2 text--primary">
                            Do you want to totally delete Store?
                        </h4>
                    </template>
                </v-checkbox>
            </b-card>
        </v-dialog>
    </v-tab-item>
</template>

<script>
import { mdiEye, mdiPencilOutline, mdiOpenInNew, mdiClose } from "@mdi/js";
import { mapState, mapMutations, mapActions } from "vuex";
import debounce from "lodash/debounce";

import StoreForm from "@/components/loyaltyPanel/stores/StoreForm.vue";
import RightsForm from "@/components/loyaltyPanel/stores/RightsForm.vue";
import AdditionalInfo from "@/components/loyaltyPanel/stores/AdditionalInfo.vue";
import translations from "@/utils/translations/loyaltyPanel/stores/storesTab";

export default {
    name: "StoresTab",

    components: { StoreForm, RightsForm, AdditionalInfo },

    mixins: [translations],

    data() {
        return {
            icons: { mdiEye, mdiPencilOutline, mdiOpenInNew, mdiClose },
            searchTypes: [
                "All Fields",
                "Name",
                "Name of Store(in app)",
                "Banks",
                "Address",
                "Phone",
                "Registration Date"
            ],
            selectedSearchType: "All Fields",
            page: +this.$route.query.page,
            mode: 0,
            search: "",
            infoDialog: false,
            rightsDialog: false,
            redirectDialog: false
        };
    },

    computed: {
        ...mapState(["loading", "errorMessage", "serverItemsLength"]),
        ...mapState("loyaltyPanel/stores/storesTab", ["stores"]),

        lang() {
            return this.$route.params.lang;
        },

        headers() {
            return [
                {
                    text: this.translations.name[this.lang],
                    value: "name",
                    width: 200
                },
                {
                    text: this.translations.storeName[this.lang],
                    value: "app_name",
                    width: 200
                },
                { text: this.translations.map[this.lang], value: "map" },
                {
                    text: this.translations.payments[this.lang],
                    value: "online_payment"
                },
                {
                    text: this.translations.view[this.lang],
                    value: "view"
                },
                { text: this.translations.active[this.lang], value: "active" },
                { text: this.translations.actions[this.lang], value: "actions" }
            ];
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

        store: {
            get() {
                return this.$store.state.loyaltyPanel.stores.storesTab.store;
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
        ...mapMutations([
            "setDialog",
            "setDeleteDialog",
            "setResetSuccess",
            "setResetValidation"
        ]),
        ...mapMutations("loyaltyPanel/stores/storesTab", ["setItem"]),
        ...mapActions("loyaltyPanel/stores/storesTab", ["getItems", "remove"]),

        open(mode, item) {
            this.mode = mode;
            this.store = item;
            setTimeout(() => this.setResetSuccess(true), 300);
            this.setResetValidation(true);
            this.dialog = true;
        },

        handleSearch() {
            this.getItems(`?q=${this.search}`);
        }
    },

    watch: {
        dialog(val) {
            if (!val) {
                this.setResetSuccess(false);
                this.setResetValidation(false);
            }
        },

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
        },

        search(val) {
            if (val == null) {
                this.getItems(this.query);
            } else {
                this.debouncedSearch();
            }
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

    created() {
        this.debouncedSearch = debounce(this.handleSearch, 500);
    },

    mounted() {
        this.getItems(this.query);
    }
};
</script>
