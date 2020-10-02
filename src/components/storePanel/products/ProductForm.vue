<template>
    <b-card
        :title="title"
        :icon="icon"
        :loading="loading"
        :error-message="errorMessage"
        @cancel="$emit('cancel')"
        @submit="mode === 1 ? createProduct(product) : updateProduct(product)"
    >
        <h3 class="secondary--text">
            Chooce how your product will be displayed:
        </h3>
        <v-radio-group v-model="product.published">
            <v-row no-gutters>
                <v-col cols="6">
                    <v-radio color="secondary" :value="true">
                        <template v-slot:label>
                            <h4 class="secondary--text">
                                The product and it's price will be visible to
                                the public
                            </h4>
                        </template>
                    </v-radio>
                </v-col>
                <v-col cols="6">
                    <v-radio color="secondary" :value="false">
                        <template v-slot:label>
                            <h4 class="secondary--text">
                                The product will be hidden (it will not be
                                visible to the public)
                            </h4>
                        </template>
                    </v-radio>
                </v-col>
            </v-row>
        </v-radio-group>

        <b-text-field
            v-model="product.name"
            label="Product Name"
        ></b-text-field>

        <v-textarea
            v-model="product.description"
            label="Product Description"
            color="secondary"
            class="mt-3"
            outlined
            clearable
            hide-details
        ></v-textarea>

        <div class="b-dashed mt-3 pa-5 rounded-sm">
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
                class="mt-3"
                append-outer-icon="mdiCurrencyEur"
            ></b-text-field>
        </div>

        <div class="b-dashed mt-3 pa-5 rounded-sm">
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
                class="mt-3"
                append-outer-icon="mdiCurrencyEur"
            ></b-text-field>
        </div>

        <!-- <v-sheet color="grey lighten-3" class="mt-3 pa-4">
                <h3 class="secondary--text mb-2">
                    Define the discount for your product
                </h3>
                When the user will gather X ammount of point moves he will win
                the following discount:
                <v-row no-gutters align="center" class="mt-5">
                    <v-col cols="5"></v-col>
                    <v-col cols="7">
                        <h3
                            class="secondary--text ml-3 mb-2"
                            v-text="
                                discountType === 'Percentage'
                                    ? 'Percentage'
                                    : 'Euro'
                            "
                        ></h3>
                    </v-col>
                    <v-col cols="5">
                        <b-select
                            v-model="discountType"
                            :items="discountTypes"
                            label="Discount Type"
                        ></b-select>
                    </v-col>
                    <v-col cols="2" class="ml-3">
                        <b-text-field type="number"></b-text-field>
                    </v-col>
                    <v-col cols="auto">
                        <v-sheet width="30" color="grey lighten-3">
                            <v-btn
                                icon
                                x-small
                                @click="product.discountAmount += 0.01"
                            >
                                <v-icon v-text="icons.mdiMenuUp"></v-icon>
                            </v-btn>
                            <v-btn
                                icon
                                x-small
                                :disabled="product.discountAmount < 0.01"
                                @click="product.discountAmount -= 0.01"
                            >
                                <v-icon v-text="icons.mdiMenuDown"></v-icon>
                            </v-btn>
                        </v-sheet>
                    </v-col>
                    <v-col cols="1">
                        <v-icon
                            v-text="
                                discountType === 'Percentage'
                                    ? icons.mdiPercent
                                    : icons.mdiCurrencyEur
                            "
                        ></v-icon>
                    </v-col>
                </v-row>
            </v-sheet> -->

        <!-- <v-checkbox v-model="showImageUpload" color="secondary">
                <template v-slot:label>
                    <h4 class="secondary--text">
                        I want the product to be displayed with an image in the
                        application
                    </h4>
                </template>
            </v-checkbox>

            <v-card v-if="showImageUpload" outlined>
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
                            @change="onFileSelected($event)"
                        ></v-file-input>
                    </v-col>
                </v-row>
            </v-card> -->

        <!-- <v-checkbox v-model="showDisplayDays" color="secondary">
                    <template v-slot:label>
                        <h4 class="secondary--text">
                            I want the product to be displayed on specific days
                        </h4>
                    </template>
                </v-checkbox>

                <v-card v-if="showDisplayDays" outlined>
                    <v-card-title
                        class="subtitle-1 font-weight-medium"
                        style="word-break: normal"
                    >
                        Choose the days you want the product to be displayed in
                        public
                    </v-card-title>
                    <v-container>
                        <v-row>
                            <v-col
                                v-for="(weekday, i) in weekdays"
                                :key="weekday"
                            >
                                <v-checkbox
                                    v-model="selectedWeekdays[i]"
                                    class="mt-0"
                                    :label="weekday"
                                    :value="weekday"
                                    hide-details
                                ></v-checkbox>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card> -->

        <v-checkbox v-model="showCategories" color="secondary">
            <template v-slot:label>
                <h4 class="secondary--text">
                    I want my product to be part of a category
                </h4>
            </template>
        </v-checkbox>

        <b-select
            v-if="showCategories"
            v-model="product.product_category_id"
            :items="categories"
            label="Select Category"
            class="mt-1"
        ></b-select>
    </b-card>
</template>

<script>
import { mdiPercent, mdiCurrencyEur, mdiMenuUp, mdiMenuDown } from "@mdi/js";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    name: "ProductsTabDialog",
    props: {
        mode: Number
    },
    data: () => ({
        icons: { mdiPercent, mdiCurrencyEur, mdiMenuUp, mdiMenuDown },
        discountType: "Percentage",
        discountTypes: ["Percentage", "Euro"],
        showImageUpload: false,
        showDisplayDays: false,
        showCategories: false,
        categories: [{ text: "category", value: 1 }],
        weekdays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ],
        selectedWeekdays: []
    }),

    computed: {
        ...mapState("storePanel/products", ["loading", "errorMessage"]),

        title() {
            return this.mode === 1
                ? "New Product or Service"
                : "Update Product or Service";
        },

        icon() {
            return this.mode === 1 ? "mdiPlus" : "mdiPencilOutline";
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
        ...mapActions("storePanel/products", [
            "createProduct",
            "updateProduct"
        ]),

        onFileSelected(event) {
            this.product.imageFile = event;
            const reader = new FileReader();
            reader.readAsDataURL(this.product.imageFile);
            reader.onload = e => (this.product.image = e.target.result);
        }
    }
};
</script>

<style scoped>
.b-dashed {
    border: 1px dashed black;
}
</style>
