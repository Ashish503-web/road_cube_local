<template>
    <b-card
        :title="title"
        :loading="loading"
        :error-message="errorMessage"
        :reset-validation="resetValidation"
        @cancel="$emit('cancel')"
        @submit="
            mode === 1
                ? create({ productGroup, image: imageFile })
                : update({ productGroup, image: imageFile })
        "
    >
        <b-text-field
            v-model="productGroup.name[groupLang]"
            label="Product Group Name"
            no-top-margin
            :success="success.name"
            :rules="rules.name"
        >
            <template v-slot:append>
                <b-lang-menu v-model="groupLang" type="inner"></b-lang-menu>
            </template>
        </b-text-field>

        <b-textarea
            v-model="productGroup.description[descriptionLang]"
            label="Product Group Description"
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

        <b-text-field
            v-model="productGroup.average_price"
            type="number"
            label="Average Price"
            append-icon="mdiCurrencyEur"
            :success="success.averagePrice"
            :rules="rules.averagePrice"
        ></b-text-field>

        <b-select
            v-model="productGroup.product_category_id"
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
                    I want the product group to be displayed with an image in
                    the application
                </h4>
            </template>
        </v-checkbox>

        <v-card v-if="showImageUpload" outlined class="mt-3">
            <v-card-title class="subtitle-1 font-weight-medium">
                Product Image (optional)
            </v-card-title>
            <v-row no-gutters justify="space-between" class="pa-5">
                <v-col cols="6">
                    <v-img :src="productGroup.image"></v-img>
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
                    I want the product group to be displayed on specific days
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
                            v-model="productGroup.availability_days"
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
            v-model="productGroup.published"
            color="secondary"
            class="pt-0 mt-3"
            hide-details="auto"
        >
            <template v-slot:label>
                <h4 class="secondary--text">
                    {{ productGroup.published ? "Published" : "Unpublished" }}
                </h4>
            </template>
        </v-checkbox>
    </b-card>
</template>

<script>
import validators from "./productGroupValidators";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    name: "ProductGroup",
    props: {
        mode: Number
    },
    mixins: [validators],
    data() {
        return {
            lang: "el",
            groupLang: "el",
            descriptionLang: "el",
            imageFile: null,
            weekdays: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ]
        };
    },

    computed: {
        ...mapState("storePanel/productGroups", [
            "loading",
            "errorMessage",
            "resetSuccess",
            "resetValidation",
            "categories"
        ]),

        title() {
            return this.mode === 1
                ? "New Product Group"
                : "Update Product Group";
        },

        showImageUpload: {
            get() {
                return this.$store.state.storePanel.productGroups
                    .showImageUpload;
            },

            set(val) {
                this.setShowImageUpload(val);
            }
        },

        showWeekdays: {
            get() {
                return this.$store.state.storePanel.productGroups.showWeekdays;
            },

            set(val) {
                this.setShowWeekdays(val);
            }
        },

        productGroup: {
            get() {
                return this.$store.state.storePanel.productGroups.productGroup;
            },

            set(val) {
                this.setItem(val);
            }
        }
    },

    methods: {
        ...mapMutations("storePanel/productGroups", [
            "setShowImageUpload",
            "setShowWeekdays",
            "setItem"
        ]),
        ...mapActions("storePanel/productGroups", [
            "getCategories",
            "create",
            "update"
        ]),

        onFileSelected(event) {
            if (event) {
                this.imageFile = event;
                const reader = new FileReader();
                reader.readAsDataURL(this.imageFile);
                reader.onload = e =>
                    (this.productGroup.image = e.target.result);
            }
        }
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
                    category: false
                };
            }
        }
    },

    mounted() {
        this.getCategories();
    }
};
</script>
