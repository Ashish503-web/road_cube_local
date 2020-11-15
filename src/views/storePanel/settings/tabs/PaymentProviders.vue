<template>
    <v-tab-item :value="$route.path" class="pa-3 px-12">
        Set up one or more mobile payments for your business.

        <v-tabs
            v-model="tab"
            color="secondary"
            class="mt-7"
            height="110"
            show-arrows
            optional
        >
            <v-tab
                v-for="provider in bankProviders"
                :key="provider.bank_provider_id"
                @click="openProviderPopup(provider)"
            >
                <div class="flex flex-wrap">
                    <v-img
                        :src="provider.logo"
                        class="mb-2 mx-auto"
                        width="80"
                        height="60"
                        contain
                    ></v-img>
                    <p>{{ provider.name[lang] }}</p>
                </div>
            </v-tab>
        </v-tabs>

        <v-divider class="mb-7"></v-divider>

        <v-data-table
            :headers="headers"
            :items="storeBankProviders"
            :footer-props="{ itemsPerPageOptions: [12], showCurrentPage: true }"
            :page.sync="page"
            class="b-outlined mt-6"
        >
            <template v-slot:no-data>
                <v-progress-circular
                    v-if="loading"
                    color="secondary"
                    indeterminate
                ></v-progress-circular>
                <span v-else>No data available</span>
            </template>

            <template v-slot:item.actions="{ item }">
                <v-tooltip color="secondary" top>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            color="yellow darken-3"
                            icon
                            v-on="on"
                            @click="open(item)"
                        >
                            <v-icon v-text="icons.mdiPencilOutline"></v-icon>
                        </v-btn>
                    </template>

                    <span class="font-weight-bold" v-text="'Update'"></span>
                </v-tooltip>

                <v-tooltip color="secondary" top>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            color="red"
                            icon
                            v-on="on"
                            @click="
                                () => {
                                    deleteProviderId =
                                        item.store_bank_provider_id;
                                    deleteDialog = true;
                                }
                            "
                        >
                            <v-icon v-text="icons.mdiClose"></v-icon>
                        </v-btn>
                    </template>

                    <span class="font-weight-bold" v-text="'Delete'"></span>
                </v-tooltip>
            </template>
        </v-data-table>

        <v-dialog v-model="dialog" max-width="500">
            <b-card
                type="create"
                title="Create Provider"
                submit-text="create"
                @cancel="dialog = false"
                @submit="create"
                :loading="loading"
            >
                <b-text-field
                    v-for="(field, index) in createProvider.fields"
                    :key="index"
                    v-model="credentials[field]"
                    :label="field"
                    class="mt-5"
                ></b-text-field>
            </b-card>
        </v-dialog>

        <v-dialog v-model="updateDialog" max-width="500">
            <b-card
                type="update"
                title="Update Provider"
                submit-text="update"
                @cancel="updateDialog = false"
                @submit="update"
                :loading="loading"
            >
                <b-text-field
                    v-for="(field, index) in editProvider.credentials
                        ? Object.keys(editProvider.credentials)
                        : []"
                    :key="index"
                    v-model="editProvider.credentials[field]"
                    :label="field"
                    class="mt-5"
                ></b-text-field>
            </b-card>
        </v-dialog>

        <v-dialog v-model="deleteDialog" max-width="500">
            <b-card
                type="delete"
                title="Delete Provider"
                submit-text="delete"
                @cancel="deleteDialog = false"
                @submit="deleteProvider"
                :loading="loading"
            >
                <p>Are you sure?</p>
            </b-card>
        </v-dialog>
    </v-tab-item>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import { mdiPencilOutline, mdiClose, mdiMagnify } from "@mdi/js";

export default {
    name: "PaymentProviders",

    data() {
        return {
            tab: null,
            lang: "en",
            page: +this.$route.query.page,
            credentials: {},
            icons: { mdiPencilOutline, mdiClose, mdiMagnify },
            headers: [
                {
                    text: "Bank Provider Name",
                    value: "bank_provider.name[en]"
                },
                {
                    text: "Created at",
                    value: "created_at"
                },
                {
                    text: "Actions",
                    value: "actions"
                }
            ],
            createProvider: {},
            editProvider: {},
            deleteProviderId: ""
        };
    },

    computed: {
        ...mapState(["loading", "errorMessage"]),
        ...mapGetters("storePanel/settings/paymentProviders", [
            "bankProviders",
            "storeBankProviders"
        ]),

        bankProvider: {
            get() {
                return this.$store.state.storePanel.settings.cleanerManagement
                    .bankProvider;
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
        },

        dialog: {
            get() {
                return this.$store.state.dialog;
            },

            set(val) {
                this.setDialog(val);
            }
        },

        updateDialog: {
            get() {
                return this.$store.state.updateDialog;
            },

            set(val) {
                this.setUpdateDialog(val);
            }
        },

        deleteDialog: {
            get() {
                return this.$store.state.deleteDialog;
            },

            set(val) {
                this.setDeleteDialog(val);
            }
        }
    },

    methods: {
        ...mapMutations(["setDialog", "setUpdateDialog", "setDeleteDialog"]),
        ...mapMutations("storePanel/settings/paymentProviders", ["setItem"]),
        ...mapActions("storePanel/settings/paymentProviders", [
            "getItems",
            "getBankProviders",
            "createItem",
            "updateProvider",
            "removeProvider"
        ]),

        create(index) {
            let formData = {
                bank_provider_id: this.createProvider.bank_provider_id,
                credentials: this.credentials
            };

            this.createItem(formData);
            this.credentials = {};
        },

        open(item) {
            this.editProvider = item;
            this.updateDialog = true;
        },

        openProviderPopup(item) {
            let storedIds = [];
            this.storeBankProviders.map(data => {
                storedIds.push(data.bank_provider.bank_provider_id);
            });
            if (!storedIds.includes(item.bank_provider_id)) {
                this.dialog = true;
                this.createProvider = item;
            } else {
                let result = this.storeBankProviders.filter(data => {
                    return (
                        data.bank_provider.bank_provider_id ==
                        item.bank_provider_id
                    );
                });
                this.editProvider = result[0];
                this.updateDialog = true;
            }
        },

        update() {
            let editForm = {
                store_bank_provider_id: this.editProvider
                    .store_bank_provider_id,
                credentials: this.editProvider.credentials
            };
            this.updateProvider(editForm);
        },

        deleteProvider() {
            this.removeProvider(this.deleteProviderId);
        }
    },

    mounted() {
        this.getItems();
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

    watch: {
        $route: {
            immediate: true,
            handler(val) {
                if (!val.query.page) {
                    this.$router.push({
                        query: {
                            page: 1,
                            ...this.$route.query
                        }
                    });
                }
                this.getBankProviders(this.query);
            }
        },

        page(page) {
            this.$router.push({ query: { ...this.$route.query, page } });
        },

        perPage(perPage) {
            this.$router.push({ query: { ...this.$route.query, perPage } });
        }
    }
};
</script>

<style scoped>
.b-border-left {
    border-left: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
