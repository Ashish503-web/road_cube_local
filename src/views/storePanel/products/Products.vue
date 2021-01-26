<template>
    <v-container v-if="permissions.read" fluid class="b-container">
        <v-sheet class="pa-3">
            <v-tabs
                v-model="tab"
                :vertical="$vuetify.breakpoint.smAndDown"
                color="secondary"
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
    name: "StoreProducts",

    data() {
        return {
            tab: this.$route.path,
        };
    },

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        permissions() {
            return this.$store.state.permissions.products
                ? this.$store.state.permissions.products
                : {};
        },

        tabs() {
            let arr = [
                {
                    name: { el: "", en: "Products", it: "" },
                    to: `/${this.lang}/storePanel/products/products-tab?page=1`,
                },
            ];

            if (this.permissions.group.read) {
                arr.push({
                    name: { el: "", en: "Product Groups", it: "" },
                    to: `/${this.lang}/storePanel/products/product-groups?page=1`,
                });
            }

            if (this.permissions.categories.read) {
                arr.push({
                    name: { el: "", en: "Product Categories", it: "" },
                    to: `/${this.lang}/storePanel/products/product-categories?page=1`,
                });
            }

            return arr;
        },
    },

    watch: {
        ["permissions.read"]: {
            immediate: true,
            handler(val) {
                if (val !== null && val !== undefined) {
                    if (!val) {
                        this.$router.replace(
                            `/${this.lang}/storePanel/forbidden-gateway`
                        );
                    } else if (
                        this.$route.path === `/${this.lang}/storePanel/products`
                    ) {
                        this.$router.replace(
                            `/${this.lang}/storePanel/products/products-tab?page=1`
                        );
                    }
                }
            },
        },

        $route: {
            handler(val) {
                if (val.path === `/${this.lang}/storePanel/products`) {
                    this.$router.replace(
                        `/${this.lang}/storePanel/products/products-tab?page=1`
                    );
                }
            },
        },
    },
};
</script>
