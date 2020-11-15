<template>
    <b-card title="New Gift" @cancel="$emit('cancel')">
        <b-text-field
            label="Gift Name of Discount"
            no-top-margin
        ></b-text-field>

        <b-textarea label="Description"></b-textarea>

        <b-text-field label="ID Catalog"></b-text-field>

        <b-text-field label="Gift Code"></b-text-field>

        <b-select :items="categories" label="Gift Category"></b-select>

        <b-text-field label="Gift Price" type="number"></b-text-field>

        <b-select :items="suppliers" label="Supplier"></b-select>

        <v-checkbox color="secondary" class="mt-3 pt-0" hide-details>
            <template v-slot:label>
                <h4 class="subtitle-2">
                    Receipt from the store (! supplier must have shop)
                </h4>
            </template>
        </v-checkbox>

        <v-checkbox color="secondary" class="mt-3 pt-0" hide-details>
            <template v-slot:label>
                <h4 class="subtitle-2">Appear in catalog</h4>
            </template>
        </v-checkbox>

        <v-checkbox color="secondary" class="mt-3 pt-0" hide-details>
            <template v-slot:label>
                <h4 class="subtitle-2">
                    Appear and Redeem on Stores (Only if it is a Gift Voucher)
                </h4>
            </template>
        </v-checkbox>

        <b-text-field label="Points" type="number"></b-text-field>

        <h4 class="subtitle-2 mt-3">Type</h4>

        <v-radio-group v-model="type" class="mt-3 pt-0" hide-details>
            <v-row no-gutters>
                <v-col cols="auto">
                    <v-radio color="secondary" value="Αγαθό">
                        <template v-slot:label>
                            <h4 class="subtitle-2">Αγαθό</h4>
                        </template>
                    </v-radio>
                </v-col>
                <v-col cols="auto" class="ml-3">
                    <v-radio color="secondary" value="Gift Voucher">
                        <template v-slot:label>
                            <h4 class="subtitle-2">
                                Gift voucher
                            </h4>
                        </template>
                    </v-radio>
                </v-col>
            </v-row>
        </v-radio-group>

        <v-row v-if="type === 'Gift Voucher'" no-gutters class="mt-3">
            <v-col cols="6">
                <h4 class="subtitle-2">
                    Select stores to redeem
                </h4>
            </v-col>

            <v-col cols="6">
                <v-checkbox
                    v-model="selectedStores"
                    v-for="store in stores"
                    :key="store"
                    :value="store"
                    hide-details
                    class="mt-0"
                >
                    <template v-slot:label>
                        <h4 class="subtitle-2" v-text="store"></h4>
                    </template>
                </v-checkbox>
            </v-col>
        </v-row>

        <v-file-input
            label="Send Gift"
            class="mt-3"
            outlined
            dense
            hide-details
            color="secondary"
        ></v-file-input>
    </b-card>
</template>

<script>
import { mdiPlus } from "@mdi/js";

export default {
    name: "GiftForm",
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
        selectedStores: []
    })
};
</script>

<style scoped></style>
