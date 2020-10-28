<template>
    <b-card
        :title="title"
        :loading="loading"
        :error-message="errorMessage"
        :reset-validation="resetValidation"
        @cancel="$emit('cancel')"
        @submit="
            () => {
                mode === 1 ? create(imageFile) : update(imageFile);
                imageFile = null;
            }
        "
    >
        <b-text-field
            v-model="product.name[productLang]"
            label="Product Name"
            no-top-margin
            :success="success.name"
            :rules="rules.name"
        >
            <template v-slot:append>
                <b-lang-menu v-model="productLang" type="inner"></b-lang-menu>
            </template>
        </b-text-field>

        <b-textarea
            v-model="product.description[descriptionLang]"
            label="Product Description"
            :success="success.description"
            :rules="rules.description"
        >
            <template v-slot:append>
                <b-lang-menu
                    v-model="descriptionLang"
                    type="inner"
                ></b-lang-menu>
            </template>
        </b-textarea>

        <v-row no-gutters>
            <v-col cols="12">
                <h4 class="secondary--text mt-3">Prices</h4>
            </v-col>
            <v-col cols="6" class="pr-2">
                <b-text-field
                    v-model="product.retail_price"
                    type="number"
                    label="Selling Price"
                    prepend-inner-icon="mdiCurrencyEur"
                    :success="success.sellingPrice"
                    :rules="rules.sellingPrice"
                ></b-text-field>
            </v-col>
            <v-col cols="6" class="pl-2">
                <b-text-field
                    v-model="product.wholesale_price"
                    type="number"
                    label="Wholesale Price"
                    prepend-inner-icon="mdiCurrencyEur"
                    :success="success.wholesalePrice"
                    :rules="rules.wholesalePrice"
                ></b-text-field>
            </v-col>
            <v-col cols="12">
                <h4 class="secondary--text mt-3">Costs</h4>
            </v-col>
            <v-col cols="6" class="pr-2">
                <b-text-field
                    v-model="product.delivery_cost"
                    type="number"
                    label="Delivery Cost"
                    prepend-inner-icon="mdiCurrencyEur"
                    :success="success.deliveryCost"
                    :rules="rules.deliveryCost"
                ></b-text-field>
            </v-col>
            <v-col cols="6" class="pl-2">
                <b-text-field
                    v-model="product.shipping_cost"
                    type="number"
                    label="Shipping Cost"
                    prepend-inner-icon="mdiCurrencyEur"
                    :success="success.shippingCost"
                    :rules="rules.shippingCost"
                ></b-text-field>
            </v-col>
        </v-row>

        <b-select
            v-model="product.product_category_id"
            :items="categories"
            :item-text="`name[${lang}]`"
            item-value="product_category_id"
            label="Select Category"
            :success="success.category"
            :rules="rules.category"
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
            v-model="showWeekdays"
            color="secondary"
            class="pt-0 mt-3"
            hide-details="auto"
        >
            <template v-slot:label>
                <h4 class="secondary--text">
                    I want the product to be displayed on specific days
                </h4>
            </template>
        </v-checkbox>

        <v-card v-if="showWeekdays" outlined class="mt-3">
            <v-card-title
                class="subtitle-1 font-weight-medium"
                style="word-break: normal"
            >
                Choose the days you want the product group to be displayed in
                public
            </v-card-title>
            <v-container>
                <v-row no-gutters>
                    <v-col
                        v-for="(weekday, i) in weekdays"
                        :key="weekday"
                        cols="3"
                        class="pr-2"
                    >
                        <v-checkbox
                            v-model="product.availability_days"
                            color="secondary"
                            class="mt-0"
                            :label="weekday"
                            :value="i"
                            hide-details
                        >
                            <template v-slot:label>
                                <h4
                                    class="secondary--text"
                                    v-text="weekday"
                                ></h4>
                            </template>
                        </v-checkbox>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>

        <v-checkbox
            v-model="product.published"
            color="secondary"
            class="pt-0 mt-3"
            hide-details="auto"
        >
            <template v-slot:label>
                <h4 class="secondary--text">
                    {{ product.published ? "Published" : "Unpublished" }}
                </h4>
            </template>
        </v-checkbox>
    </b-card>
</template>

<script>
import validators from "./productValidators";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    name: "Product",
    props: {
        mode: Number,
    },
    mixins: [validators],
    data() {
        return {
            lang: "el",
            productLang: "el",
            descriptionLang: "el",
            imageFile: null,
            weekdays: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
            ],
        };
    },

    computed: {
        ...mapState([
            "loading",
            "errorMessage",
            "resetSuccess",
            "resetValidation",
        ]),
        ...mapState("storePanel/products", ["categories"]),

        title() {
            return this.mode === 1
                ? "New Product or Service"
                : "Update Product or Service";
        },

        showImageUpload: {
            get() {
                return this.$store.state.storePanel.products.showImageUpload;
            },

            set(val) {
                this.setShowImageUpload(val);
            },
        },

        showWeekdays: {
            get() {
                return this.$store.state.storePanel.products.showWeekdays;
            },

            set(val) {
                this.setShowWeekdays(val);
            },
        },

        product() {
            return this.$store.state.storePanel.products.product;
        },
    },

    methods: {
        ...mapMutations("storePanel/products", [
            "setShowImageUpload",
            "setShowWeekdays",
        ]),
        ...mapActions("storePanel/products", [
            "getCategories",
            "create",
            "update",
        ]),

        onFileSelected(event) {
            if (event) {
                this.imageFile = event;
                const reader = new FileReader();
                reader.readAsDataURL(this.imageFile);
                reader.onload = (e) => (this.product.image = e.target.result);
            }
        },
    },

    watch: {
        resetSuccess(val) {
            if (val) {
                this.success = {
                    name: false,
                    description: false,
                    sellingPrice: false,
                    wholesalePrice: false,
                    deliveryCost: false,
                    shippingCost: false,
                    category: false,
                };
            }
        },
    },

    mounted() {
        this.getCategories();
    },
};
</script>
