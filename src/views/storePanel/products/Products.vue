<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-row no-gutters>
                <v-col cols="auto">
                    <v-tabs v-model="tab" color="black">
                        <v-tab class="text-capitalize">products</v-tab>
                        <v-tab class="text-capitalize">product group</v-tab>
                    </v-tabs>
                </v-col>
                <v-col cols="12">
                    <v-tabs-items v-model="tab">
                        <ProductsTab />
                        <ProductGroup />
                    </v-tabs-items>
                </v-col>
            </v-row>
        </v-sheet>
    </v-container>
</template>

<script>
import { mdiPercent, mdiMenuUp, mdiMenuDown } from "@mdi/js";
import ProductsTab from "./tabs/ProductsTab";
import ProductGroup from "./tabs/ProductGroup";

export default {
    name: "StoreProducts",
    components: { ProductsTab, ProductGroup },
    data: () => ({
        icons: {
            mdiPercent,
            mdiMenuUp,
            mdiMenuDown
        },
        tab: 0,
        productDialog: false,
        product: {
            display: "",
            discountAmount: 0,
            image: "",
            imageFile: ""
        },
        discountType: "Percentage",
        discountTypes: ["Percentage", "Euro"],
        selectedWeekdays: [],
        productGroupDialog: false
    }),

    methods: {
        onFileSelected(item, event) {
            item.imageFile = event;
            const reader = new FileReader();
            reader.readAsDataURL(item.imageFile);
            reader.onload = e => (item.image = e.target.result);
        }
    }
};
</script>
