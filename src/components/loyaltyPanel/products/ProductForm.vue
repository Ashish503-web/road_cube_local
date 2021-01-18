<template>
    <b-card
        :title="title"
        :loading="loading"
        :error-message="errorMessage"
        @cancel="$emit('cancel')"
        @submit="
            () => {
                mode === 1 ? create(imageFile) : update(imageFile);
                imageFile = null;
            }
        "
    >
        <b-select
            v-model="product.product_category_id"
            :items="categories"
            :item-text="`name[${lang}]`"
            item-value="product_category_id"
            label="Select Category"
            no-top-margin
            :success="success.category"
            :error-messages="error.category"
            @focus="error.category = ''"
            @blur="validateCategory"
        ></b-select>

        <b-select
            v-model="product.product_tag_id"
            :items="productsTags"
            item-text="name"
            item-value="product_tag_id"
            label="Select Product Tag"
            :success="success.tag"
            :error-messages="error.tag"
            @focus="error.tag = ''"
            @blur="validateTag"
        ></b-select>

        <b-text-field
            v-model="product.name[productLang]"
            label="Product Name"
            :success="productLang === 'el' ? success.name : false"
            :error-messages="error.name"
            @focus="error.name = ''"
            @blur="validateName"
        >
            <template v-slot:append>
                <b-lang-menu v-model="productLang" type="inner"></b-lang-menu>
            </template>
        </b-text-field>

        <b-textarea
            v-model="product.description[descriptionLang]"
            label="Product Description"
            :success="descriptionLang === 'el' ? success.description : false"
            :error-messages="error.description"
            @focus="error.description = ''"
            @blur="validateDescription"
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
                ></b-text-field>
            </v-col>
            <v-col cols="6" class="pl-2">
                <b-text-field
                    v-model="product.wholesale_price"
                    type="number"
                    label="Wholesale Price"
                    prepend-inner-icon="mdiCurrencyEur"
                ></b-text-field>
            </v-col>

            <v-col cols="12">
                <b-text-field
                    v-model="product.product_identifier"
                    label="Product Id"
                ></b-text-field>
            </v-col>

            <v-col cols="6" class="pr-2">
                <b-text-field
                    v-model="product.reward_points"
                    type="number"
                    label="Points"
                ></b-text-field>
            </v-col>

            <v-col cols="6" class="pl-2">
                <b-select
                    v-model="product.reward_type_id"
                    label="Percentage"
                    :items="rewardTypes"
                ></b-select>
            </v-col>
        </v-row>

        <v-checkbox
            v-model="product.reward_points_shared"
            color="secondary"
            class="mt-3 pt-0"
            hide-details="auto"
        >
            <template v-slot:label>
                <h4 class="secondary--text">Subsidized Points</h4>
            </template>
        </v-checkbox>

        <v-checkbox
            v-model="showImageUpload"
            color="secondary"
            class="mt-3 pt-0"
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
            class="mt-3 pt-0"
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
            class="mt-3 pt-0"
            hide-details="auto"
        >
            <template v-slot:label>
                <h4 class="secondary--text">Published</h4>
            </template>
        </v-checkbox>

        <v-checkbox
            v-model="product.group_product"
            color="secondary"
            class="mt-3 pt-0"
            hide-details="auto"
        >
            <template v-slot:label>
                <h4 class="secondary--text">Group Product</h4>
            </template>
        </v-checkbox>

        <v-checkbox
            v-model="product.add_to_stores"
            color="secondary"
            class="mt-3 pt-0"
            hide-details="auto"
        >
            <template v-slot:label>
                <h4 class="secondary--text">
                    Add new product to existing companies
                </h4>
            </template>
        </v-checkbox>
    </b-card>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

import validators from "@/utils/validators/loyaltyPanel/product";

export default {
    name: "Product",

    props: {
        mode: Number,
    },

    mixins: [validators],

    data: () => ({
        productLang: "el",
        descriptionLang: "el",
        rewardTypes: [
            { text: "Per Transaction", value: 1 },
            { text: "Per Euro", value: 2 },
            { text: "Piece", value: 3 },
            { text: "Liters", value: 4 },
        ],
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
    }),

    computed: {
        ...mapState([
            "loading",
            "errorMessage",
            "resetSuccess",
            "resetValidation",
        ]),
        ...mapState("loyaltyPanel/products", [
            "categories",
            "productsTags",
            "product",
        ]),

        lang() {
            return this.$route.params.lang;
        },

        title() {
            return this.mode === 1
                ? "New Product or Service"
                : "Update Product or Service";
        },

        showImageUpload: {
            get() {
                return this.$store.state.loyaltyPanel.products.showImageUpload;
            },

            set(val) {
                this.setShowImageUpload(val);
            },
        },

        showWeekdays: {
            get() {
                return this.$store.state.loyaltyPanel.products.showWeekdays;
            },

            set(val) {
                this.setShowWeekdays(val);
            },
        },
    },

    methods: {
        ...mapMutations(["setResetSuccess", "setResetValidation"]),
        ...mapMutations("loyaltyPanel/products", [
            "setShowImageUpload",
            "setShowWeekdays",
        ]),
        ...mapActions("loyaltyPanel/products", [
            "getCategories",
            "getProductsTags",
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

    mounted() {
        this.getCategories();
        this.getProductsTags();
    },
};
</script>
