<template>
    <b-card
        :title="title"
        :loading="loading"
        :error-message="errorMessage"
        @cancel="$emit('cancel')"
        @submit="
            mode === 1
                ? create({ product, image: imageFile })
                : update({ product, image: imageFile })
        "
    >
        <b-text-field
            v-model="product.name"
            label="Product Name"
            no-top-margin
        ></b-text-field>

        <b-textarea
            v-model="product.description"
            label="Product Description"
        ></b-textarea>

        <div class="b-border mt-3 pa-5 pt-2 rounded-sm">
            <b-text-field
                v-model="product.retail_price"
                type="number"
                label="Selling Price"
                append-outer-icon="mdiCurrencyEur"
            ></b-text-field>

            <b-text-field
                v-model="product.wholesale_price"
                type="number"
                label="Wholesale Price"
                append-outer-icon="mdiCurrencyEur"
            ></b-text-field>
        </div>

        <div class="b-border mt-3 pa-5 pt-2 rounded-sm">
            <b-text-field
                v-model="product.delivery_cost"
                type="number"
                label="Delivery Cost"
                append-outer-icon="mdiCurrencyEur"
            ></b-text-field>

            <b-text-field
                v-model="product.shipping_cost"
                type="number"
                label="Shipping Cost"
                append-outer-icon="mdiCurrencyEur"
            ></b-text-field>
        </div>

        <b-select
            v-model="product.product_category_id"
            :items="categories"
            label="Select Category"
        ></b-select>

        <v-checkbox
            v-model="showImageUpload"
            color="secondary"
            class="pt-0 mt-3"
            hide-details="auto"
        >
            <template v-slot:label>
                <h4 class="secondary--text">
                    I want the product to be displayed with an image in the
                    application
                </h4>
            </template>
        </v-checkbox>

        <v-card v-if="showImageUpload" outlined class="mt-3">
            <v-card-title class="subtitle-1 font-weight-medium">
                Product Image (optional)
            </v-card-title>
            <v-row no-gutters justify="space-between" class="pa-5">
                <v-col cols="6">
                    <v-img :src="product.image"></v-img>
                </v-col>
                <v-col cols="5" class="mr-3">
                    <v-file-input
                        color="secondary"
                        outlined
                        dense
                        hide-details
                        @change="onFileSelected"
                    ></v-file-input>
                </v-col>
            </v-row>
        </v-card>

        <v-checkbox
            v-model="product.published"
            color="secondary"
            class="pt-0 mt-3"
            hide-details="auto"
        >
            <template v-slot:label>
                <h4 class="secondary--text">
                    Published : {{ product.published }}
                </h4>
            </template>
        </v-checkbox>
    </b-card>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    name: "Product",
    props: {
        mode: Number
    },
    data: () => ({
        categories: [{ text: "category", value: 1 }],
        showImageUpload: false,
        imageFile: null
    }),

    computed: {
        ...mapState("storePanel/products", ["loading", "errorMessage"]),

        title() {
            return this.mode === 1
                ? "New Product or Service"
                : "Update Product or Service";
        },

        product: {
            get() {
                return this.$store.state.storePanel.products.product;
            },

            set(val) {
                this.setProduct(val);
            }
        }
    },

    methods: {
        ...mapMutations("storePanel/products", ["setProduct"]),
        ...mapActions("storePanel/products", ["create", "update"]),

        onFileSelected(event) {
            if (event) {
                this.imageFile = event;
                const reader = new FileReader();
                reader.readAsDataURL(this.imageFile);
                reader.onload = e => (this.product.image = e.target.result);
            }
        }
    }
};
</script>

<style scoped>
.b-border {
    border: 1px solid rgba(0, 0, 0, 0.4);
}
</style>
