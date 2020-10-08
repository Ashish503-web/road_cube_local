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
                    v-bind:key="tab"
                    class="text-capitalize d-flex justify-md-center justify-start px-3"
                    v-text="tab"
                >
                </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
                <ProductsTab />

                <ProductsPerStore />

                <ProductSeries />
            </v-tabs-items>
        </v-sheet>
    </v-container>
</template>

<script>
import ProductsTab from "./tabs/ProductsTab";
import ProductsPerStore from "./tabs/ProductsPerStore";
import ProductSeries from "./tabs/ProductSeries";

export default {
    name: "Products",
    components: {
        ProductsTab,
        ProductsPerStore,
        ProductSeries
    },
    data: () => ({
        tab: 0,
        tabs: ["Products", "Products per Store", "Series of products"]
    })
};
</script>
