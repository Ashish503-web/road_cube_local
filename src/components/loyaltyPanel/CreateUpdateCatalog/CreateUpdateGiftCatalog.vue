<template>
    <v-card>
        <v-card-title class="secondary white--text">
            New Gift
            <v-spacer></v-spacer>
            <v-icon
                    large
                    dark
                    v-text="icons.mdiPlus"
            ></v-icon>
        </v-card-title>

        <v-card-text class="pt-7">
            <v-text-field
                    label="Gift Name of Discount"
                    color="secondary"
                    hide-details
                    outlined
                    dense
                    clearable
                    class="mb-3"
            ></v-text-field>

            <v-textarea
                    label="Description"
                    hide-details
                    outlined
                    dense
                    clearable
                    class="mb-3"
                    color="secondary"
            ></v-textarea>

            <v-text-field
                    label="ID Catalog"
                    hide-details
                    outlined
                    dense
                    clearable
                    class="mb-3"
                    color="secondary"
            ></v-text-field>

            <v-text-field
                    label="Gift Code"
                    hide-details
                    outlined
                    dense
                    clearable
                    class="mb-3"
                    color="secondary"
            ></v-text-field>

            <v-select
                    :items="categories"
                    menu-props="offsetY"
                    label="Gift Category"
                    hide-details
                    outlined
                    dense
                    class="mb-3"
                    color="secondary"
            ></v-select>

            <v-text-field
                    type="number"
                    label="Gift Price"
                    hide-details
                    outlined
                    dense
                    clearable
                    class="mb-3"
                    color="secondary"
            ></v-text-field>

            <v-select
                    :items="suppliers"
                    menu-props="offsetY"
                    label="Supplier"
                    hide-details
                    outlined
                    dense
                    class="mb-3"
                    color="secondary"
            ></v-select>

            <v-checkbox class="mt-0">
                <template v-slot:label>
                    <h4 class="subtitle-2">
                        Receipt from the store (! supplier must have
                        shop)
                    </h4>
                </template>
            </v-checkbox>

            <v-checkbox class="mt-0">
                <template v-slot:label>
                    <h4 class="subtitle-2">Appear in catalog</h4>
                </template>
            </v-checkbox>

            <v-checkbox class="mt-0">
                <template v-slot:label>
                    <h4 class="subtitle-2">
                        Appear and Redeem on Stores (Only if it is a
                        Gift Voucher)
                    </h4>
                </template>
            </v-checkbox>

            <v-text-field
                    type="number"
                    label="Points"
                    hide-details
                    outlined
                    dense
                    clearable
                    class="mb-3"
                    color="secondary"
            ></v-text-field>

            <h4 class="subtitle-2 secondary--text">Type</h4>

            <v-radio-group v-model="type">
                <v-row no-gutters>
                    <v-col cols="auto">
                        <v-radio value="Αγαθό">
                            <template v-slot:label>
                                <h4 class="subtitle-2">Αγαθό</h4>
                            </template>
                        </v-radio>
                    </v-col>
                    <v-col cols="auto" class="ml-3">
                        <v-radio value="Gift Voucher">
                            <template v-slot:label>
                                <h4 class="subtitle-2">
                                    Gift voucher
                                </h4>
                            </template>
                        </v-radio>
                    </v-col>
                </v-row>
            </v-radio-group>

            <v-row v-if="type === 'Gift Voucher'" no-gutters>
                <v-col cols="6">
                    <h3 class="subtitle-1 secondary--text">
                        Select stores to redeem
                    </h3>
                </v-col>

                <v-col cols="6">
                    <v-checkbox
                            v-model="selectedStores"
                            v-for="store in stores"
                            :key="store"
                            :value="store"
                            class="mt-0"
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

            <v-file-input
                    label="Send Gift"
                    class="mt-3 mb-3"
                    hide-details
                    outlined
                    dense
                    clearable
                    color="secondary"
            ></v-file-input>
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
    import {
        mdiPlus
    } from "@mdi/js";
    export default {
        name: "CreateUpdateGiftCatalog",
        data: () => ({
            icons: {
                mdiPlus
            },
            suppliers: ["YOU.GR", "PLAISIO", "PUBLIC", "COOKSHOP", "TESCOSMETICS"],
            categories: ["12344", "Auto - Moto", "toldTouRight"],
            type: "Αγαθό",
            stores: [
                "All",
                "Katerina",
                "Pelataki",
                "Kainouria",
                "Neo Meo",
                "Dimitris",
                "Larouti",
                "Nikniknik",
                "Arguris Epipla"
            ],
            selectedStores: [],

        })
    };
</script>

<style scoped>

</style>