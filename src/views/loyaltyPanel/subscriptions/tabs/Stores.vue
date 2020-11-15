<template>
    <v-tab-item :value="$route.path" class="pt-3">
        <v-toolbar flat height="80">
            <v-spacer></v-spacer>

            <v-col cols="12" sm="4" class="pa-0">
                <b-search-field></b-search-field>
            </v-col>
        </v-toolbar>

        <v-sheet outlined style="overflow: auto">
            <v-sheet width="1550">
                <v-data-table
                    :headers="headers"
                    :footer-props="{ itemsPerPageOptions }"
                    class="b-bottom-outlined"
                ></v-data-table>
            </v-sheet>
        </v-sheet>
    </v-tab-item>
</template>

<script>
import translations from "@/utils/translations/loyaltyPanel/subscriptions/stores";

export default {
    name: "Pending",

    mixins: [translations],

    data: () => ({
        itemsPerPageOptions: [10, 20, 30, -1]
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        headers() {
            return [
                { text: this.translations.name[this.lang], value: "name" },
                {
                    text: this.translations.storeName[this.lang],
                    value: "nameShop"
                },
                { text: this.translations.map[this.lang], value: "map" },
                { text: this.translations.active[this.lang], value: "active" },
                {
                    text: this.translations.address[this.lang],
                    value: "address"
                },
                {
                    text: this.translations.phone[this.lang],
                    value: "mobilePhone"
                },
                { text: this.translations.plan[this.lang], value: "plan" },
                {
                    text: this.translations.paymentMethod[this.lang],
                    value: "paymentMethod"
                },
                {
                    text: this.translations.onlineOffline[this.lang],
                    value: "onOff"
                },
                {
                    text: this.translations.payment[this.lang],
                    value: "payment"
                },
                {
                    text: this.translations.nextPayment[this.lang],
                    value: "paymentDate"
                },
                { text: this.translations.amount[this.lang], value: "amount" },
                { text: this.translations.options[this.lang], value: "options" }
            ];
        }
    }
};
</script>
