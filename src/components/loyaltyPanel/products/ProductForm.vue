<template>
    <b-card :title="title" @cancel="$emit('cancel')">
        <v-row no-gutters>
            <v-col cols="12">
                <h4 class="subtitle-1 font-weight-bold">
                    Chooce how your product will be displayed:
                </h4>
                <v-radio-group
                    v-model="displayOption"
                    class="mt-3 pt-0"
                    hide-details
                >
                    <v-radio
                        v-for="option in displayOptions"
                        :key="option.text"
                        :value="option.value"
                        color="secondary"
                    >
                        <template v-slot:label>
                            <h4
                                class="secondary--text"
                                v-text="option.text"
                            ></h4>
                        </template>
                    </v-radio>
                </v-radio-group>
            </v-col>

            <v-col cols="6" class="mt-5 pr-2">
                <b-text-field label="Product Name"></b-text-field>

                <b-textarea label="Product Description"></b-textarea>

                <b-text-field label="Points" type="number"></b-text-field>

                <b-text-field label="Product Id" type="number"></b-text-field>

                <b-select
                    label="Percentage"
                    :items="['Liters', 'Piece', 'Per Transaction', 'Per Euro']"
                ></b-select>
            </v-col>

            <v-col cols="6" class="mt-5 pl-2">
                <template v-if="displayOption === 2">
                    <b-text-field
                        label="Target Price"
                        type="number"
                        append-icon="mdiCurrencyEur"
                    ></b-text-field>
                </template>

                <template v-else>
                    <b-text-field
                        label="Selling Price"
                        type="number"
                        append-icon="mdiCurrencyEur"
                    ></b-text-field>

                    <b-text-field
                        label="Wholesale Price"
                        type="number"
                        append-icon="mdiCurrencyEur"
                    ></b-text-field>

                    <v-checkbox
                        color="secondary"
                        class="mt-3 pt-0"
                        hide-details="auto"
                    >
                        <template v-slot:label>
                            <h4 class="secondary--text">Subsidized Points</h4>
                        </template>
                    </v-checkbox>
                </template>
            </v-col>
        </v-row>

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
                    <v-img></v-img>
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
            v-model="showDisplayDays"
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

        <v-checkbox color="secondary" class="pt-0 mt-3" hide-details="auto">
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

export default {
    name: "Product",
    props: {
        mode: Number
    },
    data: () => ({
        displayOption: 1,
        displayOptions: [
            {
                text: "The product and it's price will bevisible to the public",
                value: 1
            },
            {
                text:
                    "The product will be visible to the public but its price will not (the price will be defined at the sales register)",
                value: 2
            },
            {
                text:
                    "The product will be hidden (it will not be visible to the public)",
                value: 3
            }
        ],
        showImageUpload: false,
        showDisplayDays: false
    }),

    computed: {
        // ...mapState("storePanel/products", ["loading", "errorMessage"]),

        title() {
            return this.mode === 1
                ? "New Product or Service"
                : "Update Product or Service";
        }

        // product: {
        //     get() {
        //         return this.$store.state.storePanel.products.product;
        //     },

        //     set(val) {
        //         this.setProduct(val);
        //     }
        // }
    },

    methods: {
        // ...mapMutations("storePanel/products", ["setProduct"]),
        // ...mapActions("storePanel/products", ["create", "update"]),

        onFileSelected(event) {
            if (event) {
                this.imageFile = event;
                const reader = new FileReader();
                reader.readAsDataURL(this.imageFile);
                reader.onload = e => (this.product.image = e.target.result);
            }
        }
    },

    watch: {
        displayOption(val) {
            console.log(val);
        }
    }
};
</script>
