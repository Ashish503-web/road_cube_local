<template>
    <v-tab-item>
        <v-toolbar flat height="80">
            <v-btn
                color="secondary"
                class="text-capitalize"
                depressed
                @click="
                    () => {
                        mode = 1;
                        shopDialog = true;
                    }
                "
                >add shop</v-btn
            >

            <v-spacer></v-spacer>

            <v-btn
                color="secondary"
                class="text-capitalize"
                depressed
                @click="rightsDialog = true"
                >Rights</v-btn
            >
        </v-toolbar>

        <SearchField
            :selectedSearchType="selectedSearchType"
            :searchTypes="searchTypes"
        />

        <v-data-table
            :headers="headers"
            :items="items"
            :footer-props="{ itemsPerPageOptions }"
            class="b-outlined"
        >
        </v-data-table>
    </v-tab-item>
</template>

<script>
import { mapMutations } from "vuex";
import SearchField from "@/components/loyaltyPanel/SearchField";

export default {
    name: "FinancialData",
    components: { SearchField },
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
        headers: [
            { text: "Name", value: "name", align: "center" },
            {
                text: "Name of Shop(in app)",
                value: "name_of_shop",
                align: "center"
            },
            { text: "Customer", value: "customer", align: "center" },
            { text: "Transaction", value: "transaction", align: "center" },
            { text: "Total", value: "total", align: "center" },
            { text: "Points", value: "points", align: "center" }
        ],
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
        itemsPerPageOptions: [10, 20, 30, -1]
    }),

    computed: {
        mode: {
            get() {
                return this.$store.state.loyaltyPanel.branches.mode;
            },

            set(val) {
                this.updateMode(val);
            }
        },

        shopDialog: {
            get() {
                return this.$store.state.loyaltyPanel.branches.addShopDialog;
            },

            set(val) {
                this.updateShopDialog(val);
            }
        },

        rightsDialog: {
            get() {
                return this.$store.state.loyaltyPanel.branches.rightsDialog;
            },

            set(val) {
                this.updateRightsDialog(val);
            }
        }
    },

    methods: {
        ...mapMutations("loyaltyPanel/branches", [
            "updateMode",
            "updateShopDialog",
            "updateRightsDialog"
        ])
    }
};
</script>
