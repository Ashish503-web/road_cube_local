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
            tab: this.$route.path
        };
    },

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        permissions() {
            return this.$store.state.permissions.products
                ? this.$store.state.permissions.products.group
                : {};
        },

        tabs() {
            let arr = [
                {
                    name: { el: "", en: "Products", it: "" },
                    to: `/${this.lang}/storePanel/products/products-tab`
                }
            ];

            if (this.permissions.read) {
                arr.push({
                    name: { el: "", en: "Product Groups", it: "" },
                    to: `/${this.lang}/storePanel/products/product-groups`
                });
            }

            return arr;
        }
    },

    watch: {
        $route: {
            immediate: true,
            handler(val) {
                if (val.path === `/${this.lang}/storePanel/products`) {
                    this.$router.push(
                        `/${this.lang}/storePanel/products/products-tab?page=1`
                    );
                }
            }
        }
    }
};
</script>
