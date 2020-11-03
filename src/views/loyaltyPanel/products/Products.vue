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
                    :key="tab.name"
                    v-text="tab.name"
                    :to="tab.to"
                    class="text-capitalize d-flex justify-start justify-md-center px-3"
                ></v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
                <router-view></router-view>
            </v-tabs-items>
        </v-sheet>
    </v-container>
</template>

<script>
export default {
    name: "Products",

    data() {
        return {
            tab: this.$route.path
        };
    },

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        tabs() {
            return [
                {
                    to: `/${this.lang}/loyaltyPanel/products/products-tab`,
                    name: "products"
                },
                {
                    to: `/${this.lang}/loyaltyPanel/products/products-per-store`,
                    name: "products per store"
                },
                {
                    to: `/${this.lang}/loyaltyPanel/products/products-series`,
                    name: "series of products"
                }
            ];
        }
    },

    watch: {
        $route: {
            immediate: true,
            handler(val) {
                if (val.path === `/${this.lang}/loyaltyPanel/products`) {
                    this.$router.push(
                        `/${this.lang}/loyaltyPanel/products/products-tab`
                    );
                }
            }
        }
    }
};
</script>
