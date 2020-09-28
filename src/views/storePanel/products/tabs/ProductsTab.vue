<template>
    <v-tab-item>
        <v-toolbar flat height="80" class="pt-2">
            <v-btn
                color="secondary"
                class="text-capitalize"
                depressed
                @click="productDialog = true"
                >add product</v-btn
            >
        </v-toolbar>

        <v-data-table
            :headers="headers"
            :items="products"
            :footer-props="{ itemsPerPageOptions }"
            class="mt-4 coupon-table"
        >
            <template v-slot:item.actions="{ item }">
                <v-tooltip top>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            color="yellow darken-3"
                            icon
                            v-on="on"
                            @click="myFunc(item)"
                        >
                            <v-icon v-text="icons.mdiPencilOutline"></v-icon>
                        </v-btn>
                    </template>

                    <span>Update</span>
                </v-tooltip>

                <v-tooltip top>
                    <template v-slot:activator="{ on }">
                        <v-btn color="red" icon v-on="on" @click="myFunc(item)">
                            <v-icon v-text="icons.mdiClose"></v-icon>
                        </v-btn>
                    </template>

                    <span>Delete</span>
                </v-tooltip>
            </template>
        </v-data-table>

        <ProductDialog />
    </v-tab-item>
</template>

<script>
import { mdiPencilOutline, mdiClose } from "@mdi/js";
import { mapMutations } from "vuex";
import ProductDialog from "@/components/storePanel/products/ProductDialog.vue";

export default {
    name: "ProductsTab",
    components: { ProductDialog },
    data: () => ({
        icons: { mdiPencilOutline, mdiClose },
        headers: [
            { text: "Product Name", value: "name" },
            { text: "Product Description", value: "description" },
            { text: "Selling Price", value: "price" },
            { text: "Coupon", value: "coupon" },
            { text: "Actions", value: "actions" }
        ],
        products: [
            {
                name: "test lefko",
                description: "test lefko",
                price: "0.01€",
                coupon: "-10%"
            }
        ],
        itemsPerPageOptions: [10, 20, 30, -1]
    }),

    computed: {
        productDialog: {
            get() {
                return this.$store.state.storePanel.products.productDialog;
            },

            set(val) {
                this.setProductDialog(val);
            }
        }
    },

    methods: {
        ...mapMutations("storePanel/products", ["setProductDialog"])
    }
};
</script>
