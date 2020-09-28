<template>
    <v-tab-item>
        <v-toolbar flat height="80" class="pt-2">
            <v-btn
                color="secondary"
                class="text-capitalize"
                depressed
                @click="productGroupDialog = true"
                >add product group</v-btn
            >
        </v-toolbar>

        <v-data-table
            :headers="headers"
            :footer-props="{ itemsPerPageOptions }"
        ></v-data-table>

        <ProductGroupDialog />
    </v-tab-item>
</template>

<script>
import { mapMutations } from "vuex";
import ProductGroupDialog from "@/components/storePanel/products/ProductGroupDialog.vue";

export default {
    name: "ProductGroup",
    components: { ProductGroupDialog },

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
    }),

    computed: {
        productGroupDialog: {
            get() {
                return this.$store.state.storePanel.products.productGroupDialog;
            },

            set(val) {
                this.setProductGroupDialog(val);
            }
        }
    },

    methods: {
        ...mapMutations("storePanel/products", ["setProductGroupDialog"])
    }
};
</script>
