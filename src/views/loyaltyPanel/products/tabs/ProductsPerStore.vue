<template>
    <v-tab-item :value="$route.path" class="pa-3">
        <v-toolbar flat height="90">
            <v-spacer></v-spacer>

            <v-col cols="4">
                <b-search-field></b-search-field>
            </v-col>
        </v-toolbar>
        <v-data-table
            :headers="stores"
            :items="products"
            :footer-props="{ itemsPerPageOptions: [12], showCurrentPage: true }"
            :page.sync="page"
            :server-items-length="serverItemsLength"
            class="b-outlined"
        >
            <template v-slot:item="row">
                <tr>
                    <td>{{ row.item.name }}</td>
                    <td v-for="(store,index) in stores" :key="index">
                        <v-checkbox
                            v-model="row.item[store.text]"
                            color="secondary"
                        ></v-checkbox>
                    </td>
                </tr>
            </template>
        </v-data-table>
    </v-tab-item>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    name: "ProductsPerStore",

    data() {
        return {
            page: +this.$route.query.page
        };
    },

    computed: {
        ...mapState("loyaltyPanel/productsPerStore", ["products","stores","serverItemsLength"]),

        lang() {
            return this.$route.params.lang;
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
        ...mapActions("loyaltyPanel/productsPerStore", ["getItems"]),
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

    mounted(){
        let props = {
            lang: this.lang,
            query: this.query
        }
        this.getItems(props)
    },

    watch: {
        page(page) {
            this.$router.replace({ query: { ...this.$route.query, page } });
            let props = {
                lang: this.lang,
                query: this.query
            }

            this.getItems(props);
        }
    }
};
</script>
