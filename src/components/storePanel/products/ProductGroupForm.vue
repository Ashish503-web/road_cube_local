<template>
    <b-card
        :title="title"
        :loading="loading"
        :error-message="errorMessage"
        :disabled="!formValid"
        @cancel="$emit('cancel')"
        @submit="
            () => {
                mode === 1 ? create(imageFile) : update(imageFile);
                imageFile = null;
            }
        "
    >
        <b-text-field
            v-model="productGroup.name[groupLang]"
            :label="translations.productGroupName[lang]"
            no-top-margin
            :success="groupLang === 'el' ? success.name : false"
            :error-messages="error.name"
            @focus="error.name = ''"
            @blur="validateName"
        >
            <template v-slot:append>
                <b-lang-menu v-model="groupLang" type="inner"></b-lang-menu>
            </template>
        </b-text-field>

        <b-textarea
            v-model="productGroup.description[descriptionLang]"
            :label="translations.productGroupDescription[lang]"
            :success="success.description"
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

        <b-text-field
            v-model="productGroup.average_price"
            :label="translations.averagePrice[lang]"
            type="number"
            prepend-inner-icon="mdiCurrencyEur"
            :success="success.averagePrice"
            :error-messages="error.averagePrice"
            @focus="error.averagePrice = ''"
            @blur="validateAveragePrice"
        ></b-text-field>

        <b-select
            v-model="productGroup.product_category_id"
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
                            v-model="productGroup.availability_days"
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
            v-model="productGroup.published"
            color="secondary"
            class="pt-0 mt-3"
            hide-details="auto"
        >
            <template v-slot:label>
                <h4
                    class="secondary--text"
                    v-text="translations.published[lang]"
                ></h4>
            </template>
        </v-checkbox>
    </b-card>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

import translations from "@/utils/translations/storePanel/products/productGroupForm";
import validators from "@/utils/validators/storePanel/productGroup";

export default {
    name: "ProductGroup",

    props: {
        mode: Number
    },

    mixins: [translations, validators],

    data() {
        return {
            groupLang: "el",
            descriptionLang: "el",
            imageFile: null,
            weekdays: [
                { el: "", en: "Monday", it: "" },
                { el: "", en: "Tuesday", it: "" },
                { el: "", en: "Wednesday", it: "" },
                { el: "", en: "Thursday", it: "" },
                { el: "", en: "Friday", it: "" },
                { el: "", en: "Saturday", it: "" },
                { el: "", en: "Sunday", it: "" }
            ]
        };
    },

    computed: {
        ...mapState([
            "loading",
            "errorMessage",
            "resetSuccess",
            "resetValidation"
        ]),
        ...mapState("storePanel/productGroups", ["categories"]),

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

        productGroup() {
            return this.$store.state.storePanel.productGroups.productGroup;
        }
    },

    methods: {
        ...mapMutations(["setResetSuccess", "setResetValidation"]),
        ...mapMutations("storePanel/productGroups", [
            "setShowImageUpload",
            "setShowWeekdays"
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

    mounted() {
        this.getCategories();
    }
};
</script>
