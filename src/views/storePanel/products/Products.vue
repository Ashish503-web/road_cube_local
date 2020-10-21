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
                    class="text-capitalize text-capitalize text-left text-sm-center d-flex justify-start justify-sm-center px-3"
                    v-text="tab.name"
                    :to="tab.to"
                    >products</v-tab
                >
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

    data: () => ({
        tab: "storePanel/products",
        tabs: [
            { to: "/storePanel/products/products-tab", name: "Products" },
            {
                to: "/storePanel/products/product-groups",
                name: "Product Groups",
            },
        ],
    }),

    watch: {
        $route: {
            immediate: true,
            handler(val) {
                if (val.path === "/storePanel/products") {
                    this.$router.push("/storePanel/products/products-tab");
                }
            },
        },
    },
};
</script>
