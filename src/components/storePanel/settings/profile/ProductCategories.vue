<template>
    <v-card class="mt-12 rounded-lg" outlined>
        <v-card-title class="grey lighten-3">Product categories</v-card-title>

        <v-card-text class="pb-0 pt-8">
            <v-form @submit.prevent>
                <v-row no-gutters>
                    <v-col cols="4">
                        <v-text-field
                            v-model="category"
                            label="Enter Category"
                            color="secondary"
                            outlined
                            dense
                            clearable
                        ></v-text-field>
                    </v-col>
                    <v-col class="ml-3">
                        <v-btn
                            type="submit"
                            color="secondary"
                            class="text-capitalize"
                            depressed
                            @click="addCategory"
                            >add</v-btn
                        >
                    </v-col>
                </v-row>
            </v-form>

            <v-row>
                <v-col
                    v-for="(category, i) in categories"
                    :key="category"
                    cols="4"
                >
                    <v-card width="300" class="subtitle-2 py-3 px-5 relative">
                        <v-badge
                            class="category-number"
                            content="5"
                            color="#4286f4"
                        ></v-badge>
                        {{ category }}
                        <v-sheet
                            color="red"
                            width="20"
                            class="rounded-circle text-center category-remove"
                            dark
                            @click="removeCategory(i)"
                        >
                            <v-icon
                                x-small
                                v-text="icons.mdiCloseThick"
                            ></v-icon>
                        </v-sheet>
                    </v-card>
                </v-col>
            </v-row>
        </v-card-text>

        <v-card-actions class="pl-4">
            <v-btn color="secondary" class="text-capitalize" depressed
                >verification</v-btn
            >
        </v-card-actions>
    </v-card>
</template>

<script>
import {
    mdiArrowRight,
    mdiClockOutline,
    mdiCurrencyEur,
    mdiPlus,
    mdiCloseThick,
    mdiInformation,
    mdiPercent,
    mdiPencilOutline,
    mdiClose,
    mdiMenuDown,
    mdiChevronUp,
    mdiChevronDown,
    mdiPound,
    mdiCart,
    mdiArrowLeft,
    mdiMagnify
} from "@mdi/js";

export default {
    name: "ProductCategories",

    data: () => ({
        icons: {
            mdiArrowRight,
            mdiClockOutline,
            mdiCurrencyEur,
            mdiPlus,
            mdiCloseThick,
            mdiInformation,
            mdiPercent,
            mdiPencilOutline,
            mdiClose,
            mdiMenuDown,
            mdiChevronUp,
            mdiChevronDown,
            mdiPound,
            mdiCart,
            mdiArrowLeft,
            mdiMagnify
        },
        category: "",
        categories: []
    }),

    methods: {
        addCategory() {
            this.categories.push(this.category);
            this.category = "";
        },

        removeCategory(index) {
            this.categories.splice(index, 1);
        }
    }
};
</script>
