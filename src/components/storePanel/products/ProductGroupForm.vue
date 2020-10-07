<template>
    <b-card
        :title="title"
        :loading="loading"
        :error-message="errorMessage"
        @cancel="$emit('cancel')"
        @submit="
            mode === 1
                ? create({ productGroup, image: imageFile })
                : update({ productGroup, image: imageFile })
        "
    >
        <b-text-field
            v-model="productGroup.name"
            label="Product Group Name"
            no-top-margin
        ></b-text-field>

        <b-textarea
            v-model="productGroup.description"
            label="Product Group Description"
        ></b-textarea>

        <b-text-field
            v-model="productGroup.average_price"
            type="number"
            label="Average Price"
            append-icon="mdiCurrencyEur"
        ></b-text-field>

        <b-select
            v-model="productGroup.product_category_id"
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
                <v-row>
                    <v-col v-for="(weekday, i) in weekdays" :key="weekday">
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
                    Published : {{ productGroup.published }}
                </h4>
            </template>
        </v-checkbox>
    </b-card>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    name: "ProductGroup",
    props: {
        mode: Number
    },
    data: () => ({
        categories: [{ text: "category", value: 1 }],
        showImageUpload: false,
        imageFile: null,
        showWeekdays: false,
        weekdays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ]
    }),

    computed: {
        ...mapState("storePanel/productGroups", ["loading", "errorMessage"]),

        title() {
            return this.mode === 1
                ? "New Product Group"
                : "Update Product Group";
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
        ...mapMutations("storePanel/productGroups", ["setItem"]),
        ...mapActions("storePanel/productGroups", ["create", "update"]),

        onFileSelected(event) {
            if (event) {
                this.imageFile = event;
                const reader = new FileReader();
                reader.readAsDataURL(this.imageFile);
                reader.onload = e =>
                    (this.productGroup.image = e.target.result);
            }
        }
    }
};
</script>
