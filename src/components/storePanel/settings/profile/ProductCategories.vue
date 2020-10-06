<template>
    <b-standard-card title="Product categories">
        <v-form @submit.prevent>
            <v-row no-gutters align="center">
                <v-col cols="8">
                    <b-text-field
                        v-model="category"
                        label="Enter Category"
                        no-top-margin
                    ></b-text-field>
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
            <v-col v-for="(category, i) in categories" :key="category" cols="4">
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
                        <v-icon x-small v-text="icons.mdiCloseThick"></v-icon>
                    </v-sheet>
                </v-card>
            </v-col>
        </v-row>
    </b-standard-card>
</template>

<script>
import { mdiCloseThick } from "@mdi/js";

export default {
    name: "ProductCategories",

    data: () => ({
        icons: {
            mdiCloseThick
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
