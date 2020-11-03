<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-tabs
                v-model="tab"
                :vertical="$vuetify.breakpoint.smAndDown"
                color="secondary"
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
    name: "StoreProducts",

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
                    to: `/${this.lang}/storePanel/products/products-tab`,
                    name: "Products"
                },
                {
                    to: `/${this.lang}/storePanel/products/product-groups`,
                    name: "Product Groups"
                }
            ];
        }
    },

    watch: {
        $route: {
            immediate: true,
            handler(val) {
                if (val.path === `/${this.lang}/storePanel/products`) {
                    this.$router.push(
                        `/${this.lang}/storePanel/products/products-tab`
                    );
                }
            }
        }
    }
};
</script>
