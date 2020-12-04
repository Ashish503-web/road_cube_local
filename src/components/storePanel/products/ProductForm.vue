<template>
    <b-card
        :title="title"
        :loading="loading"
        :error-message="errorMessage"
        :reset-validation="resetValidation"
        :disabled="!valid"
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
            :label="translations.productName[lang]"
            no-top-margin
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
            :label="translations.productDescription[lang]"
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
                <h4
                    class="secondary--text mt-3"
                    v-text="translations.prices[lang]"
                ></h4>
            </v-col>
            <v-col cols="6" class="pr-2">
                <b-text-field
                    v-model="product.retail_price"
                    :label="translations.sellingPrice[lang]"
                    type="number"
                    prepend-inner-icon="mdiCurrencyEur"
                    :success="success.sellingPrice"
                    :error-messages="error.sellingPrice"
                    @focus="error.sellingPrice = ''"
                    @blur="validateSellingPrice"
                ></b-text-field>
            </v-col>
            <v-col cols="6" class="pl-2">
                <b-text-field
                    v-model="product.wholesale_price"
                    :label="translations.wholesalePrice[lang]"
                    type="number"
                    prepend-inner-icon="mdiCurrencyEur"
                    :success="success.wholesalePrice"
                    :error-messages="error.wholesalePrice"
                    @focus="error.wholesalePrice = ''"
                    @blur="validateWholesalePrice"
                ></b-text-field>
            </v-col>
            <v-col cols="12">
                <h4
                    class="secondary--text mt-3"
                    v-text="translations.costs[lang]"
                ></h4>
            </v-col>
            <v-col cols="6" class="pr-2">
                <b-text-field
                    v-model="product.delivery_cost"
                    :label="translations.deliveryCost[lang]"
                    type="number"
                    prepend-inner-icon="mdiCurrencyEur"
                    :success="success.deliveryCost"
                    :error-messages="error.deliveryCost"
                    @focus="error.deliveryCost = ''"
                    @blur="validateDeliveryCost"
                ></b-text-field>
            </v-col>
            <v-col cols="6" class="pl-2">
                <b-text-field
                    v-model="product.shipping_cost"
                    :label="translations.shippingCost[lang]"
                    type="number"
                    prepend-inner-icon="mdiCurrencyEur"
                    :success="success.shippingCost"
                    :error-messages="error.shippingCost"
                    @focus="error.shippingCost = ''"
                    @blur="validateShippingCost"
                ></b-text-field>
            </v-col>
        </v-row>

        <b-select
            v-model="product.product_category_id"
            :items="categories"
            :item-text="`name[${lang}]`"
            item-value="product_category_id"
            :label="translations.selectCategory[lang]"
            :success="success.category"
            :error-messages="error.category"
            @focus="error.category = ''"
            @blur="validateCategory"
        ></b-select>

        <v-checkbox
            v-model="showImageUpload"
            color="secondary"
            class="pt-0 mt-3"
            hide-details="auto"
        >
            <template v-slot:label>
                <h4
                    class="secondary--text"
                    v-text="translations.imageCheckbox[lang]"
                ></h4>
            </template>
        </v-checkbox>

        <v-card v-if="showImageUpload" outlined class="mt-3">
            <v-card-title
                class="subtitle-1 font-weight-medium"
                v-text="translations.imageTitle[lang]"
            ></v-card-title>
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
                <h4
                    class="secondary--text"
                    v-text="translations.daysCheckbox[lang]"
                ></h4>
            </template>
        </v-checkbox>

        <v-card v-if="showWeekdays" outlined class="mt-3">
            <v-card-title
                class="subtitle-1 font-weight-medium"
                style="word-break: normal"
                v-text="translations.daysInfo[lang]"
            ></v-card-title>
            <v-container>
                <v-row no-gutters>
                    <v-col
                        v-for="(weekday, i) in weekdays"
                        :key="weekday['en']"
                        cols="3"
                        class="pr-2"
                    >
                        <v-checkbox
                            v-model="product.availability_days"
                            color="secondary"
                            class="mt-0"
                            :value="i"
                            hide-details
                        >
                            <template v-slot:label>
                                <h4
                                    class="secondary--text"
                                    v-text="weekday[lang]"
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
                    {{
                        product.published
                            ? translations.published[lang]
                            : translations.unpublished[lang]
                    }}
                </h4>
            </template>
        </v-checkbox>
    </b-card>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

import translations from "@/utils/translations/storePanel/products/productForm";
import validators from "./productValidators";

export default {
    name: "Product",

    props: {
        mode: Number,
    },

    mixins: [translations, validators],

    data() {
        return {
            productLang: "el",
            descriptionLang: "el",
            imageFile: null,
            weekdays: [
                { el: "", en: "Monday", it: "" },
                { el: "", en: "Tuesday", it: "" },
                { el: "", en: "Wednesday", it: "" },
                { el: "", en: "Thursday", it: "" },
                { el: "", en: "Friday", it: "" },
                { el: "", en: "Saturday", it: "" },
                { el: "", en: "Sunday", it: "" },
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

        lang() {
            return this.$route.params.lang;
        },

        title() {
            return this.mode === 1
                ? this.translations.createTitle[this.lang]
                : this.translations.updateTitle[this.lang];
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

    mounted() {
        this.getCategories();
    },
};
</script>
