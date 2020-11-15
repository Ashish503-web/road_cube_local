<template>
    <v-tab-item :value="$route.path">
        <v-toolbar flat height="90">
            <v-spacer></v-spacer>
            <v-col cols="4" class="pa-0">
                <b-search-field
                    :selectedSearchType="selectedSearchType"
                    :searchTypes="searchTypes"
                ></b-search-field>
            </v-col>
        </v-toolbar>

        <v-data-table
            :headers="headers"
            :items="items"
            :footer-props="{ itemsPerPageOptions }"
            disable-sort
            class="b-outlined"
        >
            <template v-slot:body.prepend="{ headers }">
                <tr>
                    <td
                        v-for="(header, i) in headers"
                        :key="header.text"
                        class="py-2"
                    >
                        <v-row v-if="i !== 0" no-gutters justify="center">
                            <v-col
                                cols="12"
                                class="text-center subtitle-2 text--secondary"
                                v-text="translations.updateAll[lang]"
                            ></v-col>
                            <v-checkbox
                                color="secondary"
                                class="mt-0"
                                hide-details
                            ></v-checkbox>
                        </v-row>
                    </td>
                </tr>
            </template>

            <template v-slot:item="{ headers, item }">
                <tr>
                    <td v-for="header in headers" :key="header.text">
                        <div
                            v-if="header.text === 'Name'"
                            class="text-center"
                            v-text="item.name"
                        ></div>
                        <v-row v-else justify="center">
                            <v-checkbox
                                color="secondary"
                                class="pt-0 mt-0"
                                hide-details
                            ></v-checkbox>
                        </v-row>
                    </td>
                </tr>
            </template>
        </v-data-table>
    </v-tab-item>
</template>

<script>
import translations from "@/utils/translations/loyaltyPanel/stores/applicationSettings";

export default {
    name: "ApplicationSettings",

    mixins: [translations],

    data: () => ({
        items: [
            {
                name: "Vasilisa"
            },
            {
                name: "Vasilisb"
            },
            {
                name: "Vasilisc"
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
                {
                    text: this.translations.name[this.lang],
                    value: "name",
                    align: "center"
                },
                {
                    text: this.translations.openStore[this.lang],
                    value: "open_shop",
                    align: "center"
                },
                {
                    text: this.translations.openCheckin[this.lang],
                    value: "open_checkin",
                    align: "center"
                },
                {
                    text: this.translations.openReceipt[this.lang],
                    value: "open_scanning",
                    align: "center"
                }
            ];
        }
    }
};
</script>
