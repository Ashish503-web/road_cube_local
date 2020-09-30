<template>
    <v-card>
        <v-card-title class="secondary white--text">
            <v-icon
                    v-text="icons.mdiAutoFix"
                    color="secondary"
                    large
                    class="mr-3"
            ></v-icon
            >
            New Promocode
            <v-spacer></v-spacer>
            <v-icon
                    color="secondary"
                    large
                    v-text="icons.mdiPlus"
            ></v-icon>
        </v-card-title>

        <v-card-text class="pt-7">
            <v-text-field
                    label="Promocode Code"
                    outlined
                    dense
                    clearable
                    hint="* This is the code that you can share in posters, documents and
                                    internet. We suggest you to type something similar to your company name."
                    persistent-hint
            ></v-text-field>

            <v-divider class="mt-3 mb-6"></v-divider>

            <v-text-field
                    label="Moves (RoadCube Points)"
                    outlined
                    dense
                    clearable
            ></v-text-field>

            <v-text-field
                    type="number"
                    label="Vouchers Amount"
                    outlined
                    dense
                    clearable
            ></v-text-field>

            <v-divider></v-divider>

            <v-row no-gutters class="mt-3">
                <v-col cols="4">
                    <h4 class="subtitle-2">
                        Select the tab you want to show:
                    </h4>
                </v-col>

                <v-col cols="8">
                    <v-radio-group
                            class="pa-0 mt-0"
                            hide-details
                    >
                        <v-row no-gutters>
                            <v-col cols="auto" class="pr-3">
                                <v-radio color="secondary">
                                    <template v-slot:label>
                                        <h4
                                                class="subtitle-2"
                                        >
                                            All
                                        </h4>
                                    </template>
                                </v-radio>
                            </v-col>

                            <v-col
                                    v-for="tab in tabs"
                                    :key="tab.name"
                                    cols="auto"
                                    class="pr-3"
                            >
                                <v-radio color="secondary">
                                    <template v-slot:label>
                                        <h4
                                                class="subtitle-2"
                                                v-text="
                                                                    tab.name
                                                                "
                                        ></h4>
                                    </template>
                                </v-radio>
                            </v-col>
                        </v-row>
                    </v-radio-group>
                </v-col>
            </v-row>

            <v-checkbox
                    v-model="createCoupon"
                    color="secondary"
                    class="font-italic"
                    label="Fill in the following Voucher form if you want to create
                                    and link a coupon to the promocode"
                    hide-details
            ></v-checkbox>

            <v-divider class="mt-3 mb-5"></v-divider>

            <template v-if="createCoupon">
                <v-text-field
                        label="Title"
                        outlined
                        dense
                        clearable
                ></v-text-field>

                <v-textarea
                        label="Description"
                        outlined
                        clearable
                ></v-textarea>

                <v-row no-gutters>
                    <v-col cols="6" class="subtitle-2"
                    >Select stores to redeem
                    </v-col
                    >
                    <v-col cols="6">
                        <v-checkbox
                                color="secondary"
                                class="mt-0"
                                hide-details
                        >
                            <template v-slot:label>
                                <h4 class="subtitle-2">
                                    All
                                </h4>
                            </template>
                        </v-checkbox>

                        <v-checkbox
                                v-for="store in stores"
                                :key="store"
                                color="secondary"
                                class="mt-0"
                                hide-details
                        >
                            <template v-slot:label>
                                <h4
                                        class="subtitle-2"
                                        v-text="store"
                                ></h4>
                            </template>
                        </v-checkbox>
                    </v-col>
                </v-row>

                <v-checkbox
                        v-model="voucherImage"
                        color="secondary"
                >
                    <template v-slot:label>
                        <h4
                                class="subtitle-2 secondary--text"
                        >
                            I want an image to be displayed
                            in voucher
                        </h4>
                    </template>
                </v-checkbox>

                <v-row v-if="voucherImage">
                    <v-col cols="6">
                        <v-img :src="voucher.image"></v-img>
                    </v-col>
                    <v-col cols="6">
                        Choose an Image:
                        <v-file-input
                                outlined
                                dense
                                hide-details
                                @change="onFileSelected"
                        ></v-file-input>
                    </v-col>
                </v-row>
            </template>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="$emit('close')">cancel</v-btn>
            <v-btn color="secondary" width="80">save</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import { mdiPlus, mdiAutoFix } from "@mdi/js";

    export default {
        name: "AddPromocodeDialog",
        data: () => ({
            icons: {
                mdiPlus,
                mdiAutoFix
            },
            voucher: {
                image: "",
                imageFile: null
            },
            voucherImage: false,
            stores: ["Katerina", "Pelataki", "Kainouria", "Neo Meo", "Dimitris"],
            createCoupon: false,
            tabs: [],
            tab: {},
        }),
        methods: {
            onFileSelected(event) {
                this.voucher.imageFile = event;
                const reader = new FileReader();
                reader.readAsDataURL(this.voucher.imageFile);
                reader.onload = e => (this.voucher.image = e.target.result);
            }
        }
    };
</script>

<style scoped>

</style>