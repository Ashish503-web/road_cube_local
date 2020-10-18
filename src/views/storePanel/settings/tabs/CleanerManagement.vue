<template>
    <v-tab-item :value="$route.path" class="pt-10 px-12">
        Set up one or more mobile payments for your business.

        <v-tabs
            v-model="tab"
            color="secondary"
            class="mt-7"
            height="70"
            show-arrows
        >
            <v-tab
                v-for="provider in bankProviders"
                :key="provider.store_bank_provider_id"
            >
                <v-img
                    :src="$store.state.storePanel.store.logo"
                    width="60"
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
                        <v-sheet width="70%">
                            <b-text-field
                                label="mid"
                                class="mt-5"
                            ></b-text-field>
                            <b-text-field
                                label="pass"
                                class="mt-5"
                            ></b-text-field>
                        </v-sheet>
                    </v-col>
                    <v-col cols="6">
                        <v-divider vertical></v-divider>
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
            tab: "",
            page: +this.$route.query.page,
            perPage: +this.$route.query.perPage
        };
    },

    computed: {
        ...mapState("storePanel/settings/cleanerManagement", ["bankProviders"]),

        query() {
            let query = "?";

            for (let key in this.$route.query) {
                query += `${key}=${this.$route.query[key]}&`;
            }

            return query.slice(0, query.length - 1);
        }
    },

    methods: {
        ...mapActions("storePanel/settings/cleanerManagement", ["getItems"])
    },

    watch: {
        $route() {
            this.getItems(this.query);
        },

        page(page) {
            this.$router.push({ query: { ...this.$route.query, page } });
        },

        perPage(perPage) {
            this.$router.push({ query: { ...this.$route.query, perPage } });
        }
    },

    beforeCreate() {
        if (!this.$route.query.perPage) {
            this.$router.push({
                query: {
                    perPage: 12,
                    ...this.$route.query
                }
            });
        }

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
        this.getItems(this.query);
    }
};
</script>
