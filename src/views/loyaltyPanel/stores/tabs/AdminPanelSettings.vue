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

        <v-sheet outlined style="overflow: auto">
            <v-sheet width="1500">
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
                                <v-row
                                    v-if="i !== 0"
                                    no-gutters
                                    justify="center"
                                >
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
            </v-sheet>
        </v-sheet>
    </v-tab-item>
</template>

<script>
import translations from "@/utils/translations/loyaltyPanel/stores/adminPanelSettings";

export default {
    name: "AdminPanelSettings",

    mixins: [translations],

    data: () => ({
        items: [
            {
                name: "Vasilis"
            },
            {
                name: "Vasilis"
            },
            {
                name: "Vasilis"
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
                    width: "5%",
                    align: "center"
                },
                {
                    text: this.translations.openSettings[this.lang],
                    value: "open_settings",
                    width: "11%",
                    align: "center"
                },
                {
                    text: this.translations.openPromotional[this.lang],
                    value: "open_actions",
                    width: "12%",
                    align: "center"
                },
                {
                    text: this.translations.manualPoints[this.lang],
                    value: "manual_points_delivery",
                    width: "12%",
                    align: "center"
                },
                {
                    text: this.translations.bodyPricing[this.lang],
                    value: "body_pricing_file",
                    width: "11%",
                    align: "center"
                },
                {
                    text: this.translations.openAddCoupon[this.lang],
                    value: "open_add_coupon",
                    width: "11%",
                    align: "center"
                },
                {
                    text: this.translations.openRedeemMode[this.lang],
                    value: "open_selection",
                    width: "12%",
                    align: "center"
                },
                {
                    text: this.translations.openProductInsertion[this.lang],
                    value: "open_product",
                    width: "14%",
                    align: "center"
                },
                {
                    text: this.translations.openGeneralDiscount[this.lang],
                    value: "open_discount",
                    width: "12%",
                    align: "center"
                }
            ];
        }
    }
};
</script>
