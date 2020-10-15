<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-tabs
                v-model="tab"
                :vertical="$vuetify.breakpoint.smAndDown"
                color="black"
            >
                <v-tab
                    class="text-capitalize text-capitalize text-left text-sm-center d-flex justify-start justify-sm-center px-3"
                    >products</v-tab
                >
                <v-tab
                    class="text-capitalize text-capitalize text-left text-sm-center d-flex justify-start justify-sm-center px-3"
                    >product groups</v-tab
                >
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
            mdiMenuDown,
        },
        tab: 0,
    }),
};
</script>
