<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-tabs v-model="tab" color="black">
                <v-tab class="text-capitalize">products</v-tab>
                <v-tab class="text-capitalize">product groups</v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
                <ProductsTab />
                <ProductGroups />
            </v-tabs-items>
        </v-sheet>
    </v-container>
</template>

<script>
import { mdiPercent, mdiMenuUp, mdiMenuDown } from "@mdi/js";
import ProductsTab from "./tabs/ProductsTab";
import ProductGroups from "./tabs/ProductGroups";

export default {
    name: "StoreProducts",
    components: { ProductsTab, ProductGroups },
    data: () => ({
        icons: {
            mdiPercent,
            mdiMenuUp,
            mdiMenuDown
        },
        tab: 0
    })
};
</script>
