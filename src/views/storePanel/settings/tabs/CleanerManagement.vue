<template>
    <v-tab-item :value="$route.path" class="pt-10 px-12">
        Set up one or more mobile payments for your business.

        <v-tabs
            v-model="tab"
            color="secondary"
            class="mt-7"
            height="90"
            show-arrows
            optional
        >
            <v-tab
                v-for="provider in bankProviders"
                :key="provider.bank_provider_id"
                @click="bankProvider = provider"
            >
                <div class="flex flex-wrap">
                    <v-img
                    :src="$store.state.storePanel.store.logo"
                    class="mb-2 mx-auto"
                    width="70"
                    ></v-img>
                    <p>{{ provider.name[lang] }}</p>
                </div>
                
            </v-tab>
        </v-tabs>

        <v-divider class="mb-7"></v-divider>

        <v-tabs-items v-model="tab">
            <v-tab-item
                v-for="(provider,ind) in bankProviders"
                :key="provider.bank_provider_id"
            >
                <v-row no-gutters>
                    <v-col cols="6">
                        Fill in here the production details you will receive
                        after activation:
                        <br />
                        <v-card flat width="70%">
                            <b-text-field
                                v-for="(field,index) in provider.fields"
                                :key="index"
                                v-model="credentials[ind][field]"
                                :label="field"
                                class="mt-5"
                            ></b-text-field>
                            <!-- <b-text-field
                                v-model="bankProvider.credentials.key"
                                label="pass"
                                class="mt-5"
                            ></b-text-field> -->

                            <v-alert v-if="errorMessage" type="error">{{
                                errorMessage
                            }}</v-alert>

                            <v-card-actions class="pt-5 px-0">
                                <v-btn
                                    color="secondary"
                                    class="text-capitalize px-5"
                                    depressed
                                    :loading="loading"
                                    @click="create(ind)"
                                    >create</v-btn
                                >
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="grey lighten-2"
                                    class="text-capitalize px-5"
                                    depressed
                                    @click="tab = null"
                                    >cancel</v-btn
                                >
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col cols="6" class="b-border-left">
                        <v-sheet class="px-5">
                            <v-img
                                :src="$store.state.storePanel.store.logo"
                                width="70"
                            ></v-img>

                            <h2
                                class="subtitle-1"
                                v-text="bankProvider.bank_provider.name[lang]"
                            ></h2>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-tab-item>
        </v-tabs-items>

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
                <span v-else>No Data</span>
            </template>

            <template v-slot:item.actions="{ item }">
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
                        v-text="'Update'"
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
                                    deleteProviderId = item.bank_provider.bank_provider_id;
                                    deleteDialog = true;
                                }
                            "
                        >
                            <v-icon v-text="icons.mdiClose"></v-icon>
                        </v-btn>
                    </template>

                    <span
                        class="font-weight-bold"
                        v-text="'Delete'"
                    ></span>
                </v-tooltip>
            </template>
        </v-data-table>

        <v-dialog v-model="deleteDialog" max-width="500">
            <b-card
                type="delete"
                title="Delete Provider"
                submit-text="delete"
                @cancel="deleteDialog = false"
                @submit="deleteProvider"
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
    name: "CleanerManagement",

    data() {
        return {
            tab: null,
            lang: "en",
            page: +this.$route.query.page,
            credentials: [],
            icons: { mdiPencilOutline, mdiClose, mdiMagnify },
            headers: [
                {
                    text: 'Bank Provider Name',
                    value: 'bank_provider[name][en]'
                },
                {
                    text: 'Created at',
                    value: 'created_at'
                },
                {
                    text: 'Actions',
                    value: 'actions'
                }
            ],
            deleteProviderId: '',
            deleteDialog: false
        };
    },

    computed: {
        ...mapState(["loading", "errorMessage"]),
        ...mapGetters("storePanel/settings/cleanerManagement", [
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
        ...mapMutations("storePanel/settings/cleanerManagement", ["setItem"]),
        ...mapActions("storePanel/settings/cleanerManagement", [
            "getItems",
            "getBankProviders",
            "createItem",
            "removeProvider"
            ]),

        create(index){
            let formData = {
                "bank_provider_id": this.bankProviders[index].bank_provider_id,
                "credentials": this.credentials[index]
            }

            this.createItem(formData)
        },

        deleteProvider(){
            this.removeProvider(this.deleteProviderId)
            this.deleteDialog = false
        }
    },

    mounted(){
        this.getItems()
    },

    watch: {
        $route: {
            immediate: true,
            handler(val) {
                if (!val.query.page) {
                    this.$router.push({
                        query: {
                            page: 1,
                            ...this.$route.query,
                        },
                    });
                }
                this.getBankProviders(this.query);
            },
        },

        bankProviders: function(val){
            val.map(data => {
                let fields = {}
                if(data.fields && data.fields.length > 0){
                    data.fields.map(item => {
                        fields[item] = ""
                    })
                }
                this.credentials.push(fields)
            })
        },

        page(page) {
            this.$router.push({ query: { ...this.$route.query, page } });
        },

        perPage(perPage) {
            this.$router.push({ query: { ...this.$route.query, perPage } });
        },
    },
};
</script>

<style scoped>
.b-border-left {
    border-left: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
