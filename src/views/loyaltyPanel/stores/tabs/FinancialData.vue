<template>
    <v-tab-item :value="$route.path">
        <v-toolbar flat height="90">
            <v-btn
                color="secondary"
                class="text-capitalize px-5"
                depressed
                v-text="translations.addStore[lang]"
                @click="
                    () => {
                        mode = 1;
                        shopDialog = true;
                    }
                "
            ></v-btn>

            <v-spacer></v-spacer>

            <v-btn
                color="secondary"
                class="text-capitalize px-5"
                depressed
                v-text="translations.rights[lang]"
                @click="rightsDialog = true"
            ></v-btn>
        </v-toolbar>

        <v-row no-gutters justify="end" class="px-4 pb-3">
            <v-col cols="4">
                <b-search-field
                    :selectedSearchType="selectedSearchType"
                    :searchTypes="searchTypes"
                ></b-search-field>
            </v-col>
        </v-row>

        <v-data-table
            :headers="headers"
            :items="items"
            :footer-props="{ itemsPerPageOptions }"
            class="b-outlined"
        ></v-data-table>

        <v-dialog v-model="shopDialog" max-width="600" scrollable>
            <StoreForm
                :mode="mode"
                @cancel="shopDialog = false"
                @submit="myFunc"
            />
        </v-dialog>

        <v-dialog v-model="rightsDialog" max-width="500" scrollable>
            <RightsForm
                :mode="mode"
                @cancel="rightsDialog = false"
                @submit="myFunc"
            />
        </v-dialog>
    </v-tab-item>
</template>

<script>
import { mapMutations } from "vuex";

import StoreForm from "@/components/loyaltyPanel/stores/StoreForm";
import RightsForm from "@/components/loyaltyPanel/stores/RightsForm";
import translations from "@/utils/translations/loyaltyPanel/stores/financialData";

export default {
    name: "FinancialData",

    components: { StoreForm, RightsForm },

    mixins: [translations],

    data: () => ({
        searchTypes: [
            "All Fields",
            "Name",
            "Name of Shop(in app)",
            "Customer",
            "Transaction",
            "Total",
            "Points"
        ],
        selectedSearchType: "All Fields",
        items: [
            {
                name: "Vasilis",
                name_of_shop: "katerina1",
                customer: "20",
                transaction: "34",
                total: "1905.18",
                points: "3836"
            },
            {
                name: "Vasilis",
                name_of_shop: "katerina1",
                customer: "20",
                transaction: "34",
                total: "1905.18",
                points: "3836"
            },
            {
                name: "Vasilis",
                name_of_shop: "katerina1",
                customer: "20",
                transaction: "34",
                total: "1905.18",
                points: "3836"
            }
        ],
        itemsPerPageOptions: [10, 20, 30, -1],
        mode: 0,
        shopDialog: false,
        rightsDialog: false
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        headers() {
            return [
                {
                    text: this.translations.name[this.lang],
                    value: "name"
                },
                {
                    text: this.translations.storeName[this.lang],
                    value: "name_of_shop"
                },
                {
                    text: this.translations.customer[this.lang],
                    value: "customer"
                },
                {
                    text: this.translations.transaction[this.lang],
                    value: "transaction"
                },
                { text: this.translations.total[this.lang], value: "total" },
                { text: this.translations.points[this.lang], value: "points" }
            ];
        }
    },

    methods: {
        ...mapMutations("loyaltyPanel/branches", []),

        myFunc() {
            alert(5);
        }
    }
};
</script>
