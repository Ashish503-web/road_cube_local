<template>
    <v-tab-item :value="$route.path" class="pt-10 px-12">
        Set up one or more mobile payments for your business.

        <v-tabs
            v-model="tab"
            color="secondary"
            class="mt-7"
            height="70"
            show-arrows
            optional
        >
            <v-tab
                v-for="provider in bankProviders"
                :key="provider.store_bank_provider_id"
                @click="bankProvider = provider"
            >
                <v-img
                    :src="$store.state.storePanel.store.logo"
                    width="70"
                ></v-img>
            </v-tab>
        </v-tabs>

        <v-divider class="mb-7"></v-divider>

        <v-tabs-items v-model="tab">
            <v-tab-item
                v-for="provider in bankProviders"
                :key="provider.store_bank_provider_id"
            >
                <v-row no-gutters>
                    <v-col cols="6">
                        Fill in here the production details you will receive
                        after activation:
                        <br />
                        <v-card flat width="70%">
                            <b-text-field
                                v-model="bankProvider.credentials.mid"
                                label="mid"
                                class="mt-5"
                            ></b-text-field>
                            <b-text-field
                                v-model="bankProvider.credentials.key"
                                label="pass"
                                class="mt-5"
                            ></b-text-field>

                            <v-alert v-if="errorMessage" type="error">{{
                                errorMessage
                            }}</v-alert>

                            <v-card-actions class="pt-5 px-0">
                                <v-btn
                                    color="secondary"
                                    class="text-capitalize px-5"
                                    depressed
                                    :loading="loading"
                                    @click="create"
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
    </v-tab-item>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    name: "CleanerManagement",

    data() {
        return {
            tab: null,
            lang: "en",
            page: +this.$route.query.page,
        };
    },

    computed: {
        ...mapState(["loading", "errorMessage"]),
        ...mapState("storePanel/settings/cleanerManagement", ["bankProviders"]),

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
        ...mapActions("storePanel/settings/cleanerManagement", ["getItems"]),
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
                this.getItems(this.query);
            },
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
