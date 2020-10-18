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
                    class="text-capitalize d-flex justify-md-center justify-start px-3"
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

    data: () => ({
        tab: "loyaltyPanel/products",
        tabs: [
            { to: "/loyaltyPanel/products", name: "products" },
            {
                to: "/loyaltyPanel/products/products-per-store",
                name: "products per store"
            },
            {
                to: "/loyaltyPanel/products/products-series",
                name: "series of products"
            }
        ]
    })
};
</script>
