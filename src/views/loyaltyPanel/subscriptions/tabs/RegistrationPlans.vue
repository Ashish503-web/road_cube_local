<template>
    <v-tab-item :value="$route.path" class="pt-3">
        <v-toolbar flat height="90">
            <v-btn
                color="secondary"
                class="text-capitalize px-5"
                depressed
                v-text="translations.addRegistrationPlan[lang]"
            ></v-btn>

            <v-spacer></v-spacer>

            <v-col cols="12" sm="4" class="pa-0">
                <b-search-field></b-search-field>
            </v-col>
        </v-toolbar>

        <v-sheet outlined style="overflow: auto">
            <v-sheet min-width="1500">
                <v-data-table
                    :headers="headers"
                    :items="registrationPlans"
                    :footer-props="{ itemsPerPageOptions }"
                ></v-data-table>
            </v-sheet>
        </v-sheet>
    </v-tab-item>
</template>

<script>
import translations from "@/utils/translations/loyaltyPanel/subscriptions/registrationPlans";

export default {
    name: "Pending",

    mixins: [translations],

    data: () => ({
        registrationPlans: [
            {
                name: "Argyris Packet",
                type: "Monthly amount",
                description: "aaaaa",
                amountRate: "200 €",
                points: "100 Points per liter",
                checkPoints: "10",
                visible: false,
                paymentMethods: "...",
                companies: "..."
            }
        ],
        itemsPerPageOptions: [10, 20, 30, -1]
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        headers() {
            return [
                { text: this.translations.name[this.lang], value: "name" },
                { text: this.translations.type[this.lang], value: "type" },
                {
                    text: this.translations.description[this.lang],
                    value: "description"
                },
                {
                    text: this.translations.amountRate[this.lang],
                    value: "amountRate"
                },
                { text: this.translations.points[this.lang], value: "points" },
                {
                    text: this.translations.checkInPoints[this.lang],
                    value: "checkPoints"
                },
                {
                    text: this.translations.visible[this.lang],
                    value: "visible"
                },
                {
                    text: this.translations.paymentMethods[this.lang],
                    value: "paymentMethods"
                },
                {
                    text: this.translations.companies[this.lang],
                    value: "companies"
                },
                { text: this.translations.delete[this.lang], value: "delete" }
            ];
        }
    }
};
</script>
