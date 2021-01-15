<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-tabs
                v-model="tab"
                color="secondary"
                :vertical="$vuetify.breakpoint.mdAndDown"
            >
                <v-tab
                    v-for="tab in tabs"
                    :key="tab.name['en']"
                    v-text="tab.name[lang]"
                    :to="tab.to"
                    class="text-capitalize d-flex justify-start justify-md-center px-3"
                ></v-tab>
            </v-tabs>
        </v-sheet>

        <v-tabs-items v-model="tab" class="mt-3">
            <router-view></router-view>
        </v-tabs-items>
    </v-container>
</template>

<script>
export default {
    name: "Products",

    data() {
        return {
            tab: this.$route.path,
        };
    },

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        tabs() {
            return [
                {
                    name: { el: "", en: "products", it: "" },
                    to: `/${this.lang}/loyaltyPanel/products/products-tab`,
                },
                {
                    name: { el: "", en: "products per store", it: "" },
                    to: `/${this.lang}/loyaltyPanel/products/products-per-store`,
                },
                {
                    name: { el: "", en: "series of products", it: "" },
                    to: `/${this.lang}/loyaltyPanel/products/products-series`,
                },
                {
                    name: { el: "", en: "products tags", it: "" },
                    to: `/${this.lang}/loyaltyPanel/products/products-tags`,
                },
            ];
        },
    },

    watch: {
        $route: {
            immediate: true,
            handler(val) {
                if (val.path === `/${this.lang}/loyaltyPanel/products`) {
                    this.$router.push(
                        `/${this.lang}/loyaltyPanel/products/products-tab?page=1`
                    );
                }
            },
        },
    },
};
</script>
