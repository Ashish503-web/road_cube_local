<template>
    <b-card
        :title="title"
        :loading="loading"
        :error-message="errorMessage"
        :disabled="!valid"
        @cancel="$emit('cancel')"
        @submit="mode === 1 ? create() : update()"
    >
        <h4 class="subtitle-2">
            If you don't input english and italian name of category it will
            automatically take greek name
        </h4>

        <b-text-field
            v-model="productCategory.name.el"
            :label="translations.greekName[lang]"
            :success="success"
            :error-messages="error"
            @focus="error = ''"
            @blur="validate"
        >
            <template v-slot:prepend-inner>
                <img
                    src="@/assets/flags/Flag_of_Greece.svg"
                    width="25"
                    class="mt-1"
                />
            </template>
        </b-text-field>

        <b-text-field
            v-model="productCategory.name.en"
            :label="translations.englishName[lang]"
        >
            <template v-slot:prepend-inner>
                <img
                    src="@/assets/flags/US-flag.jpeg"
                    width="25"
                    class="mt-1"
                />
            </template>
        </b-text-field>

        <b-text-field
            v-model="productCategory.name.it"
            :label="translations.italianName[lang]"
        >
            <template v-slot:prepend-inner>
                <img
                    src="@/assets/flags/Flag_of_Italy.svg"
                    width="25"
                    class="mt-1"
                />
            </template>
        </b-text-field>
    </b-card>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import translations from "@/utils/translations/storePanel/products/productCategoryForm";

export default {
    name: "Product",

    props: {
        mode: Number,
    },

    data: () => ({
        valid: false,
        success: false,
        error: "",
        errorMessages: {
            el: "",
            en: "Greek Name is required",
            it: "",
        },
    }),

    mixins: [translations],

    computed: {
        ...mapState([
            "loading",
            "errorMessage",
            "resetSuccess",
            "resetValidation",
        ]),
        ...mapState("storePanel/productCategories", ["productCategory"]),

        lang() {
            return this.$route.params.lang;
        },

        title() {
            return this.mode === 1
                ? this.translations.createTitle[this.lang]
                : this.translations.updateTitle[this.lang];
        },
    },

    methods: {
        ...mapMutations(["setResetSuccess", "setResetValidation"]),
        ...mapActions("storePanel/productCategories", ["create", "update"]),

        validate() {
            if (!this.productCategory.name.el) {
                this.error = this.errorMessages[this.lang];
            } else {
                this.error = "";
            }
        },
    },

    watch: {
        ["productCategory.name.el"]: {
            immediate: true,
            handler(val) {
                this.valid = !!val;
                this.success = !!val;
            },
        },

        resetSuccess(val) {
            if (val) {
                this.success = false;
                this.setResetSuccess(false);
            }
        },

        resetValidation: {
            immediate: true,
            handler(val) {
                if (val) {
                    this.error = "";
                    this.setResetValidation(false);
                }
            },
        },
    },
};
</script>
