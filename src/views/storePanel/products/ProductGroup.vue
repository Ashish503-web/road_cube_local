<template>
    <v-tab-item>
        <v-toolbar flat height="80" class="pt-2">
            <v-btn
                rounded
                color="primary"
                class="text-capitalize"
                @click="productGroupDialog = true"
                >add product group</v-btn
            >
        </v-toolbar>

        <v-data-table
            :headers="headers"
            :footer-props="{ itemsPerPageOptions }"
        ></v-data-table>
    </v-tab-item>
</template>

<script>
export default {
    name: "ProductGroup",

    data: () => ({
        headers: [
            { text: "Product Name", value: "name" },
            { text: "Product Description", value: "description" },
            { text: "Coupon", value: "coupon" },
            { text: "Actions", value: "actions" }
        ],
        productGroup: {
            image: "",
            imageFile: ""
        },
        itemsPerPageOptions: [10, 20, 30, -1]
    })
};
</script>
