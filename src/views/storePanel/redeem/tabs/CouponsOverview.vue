<template>
    <v-tab-item :value="$route.path">
        <v-toolbar flat height="90">
            <v-menu offset-y right>
                <template v-slot:activator="{ on }">
                    <v-btn text v-on="on">
                        <v-icon
                            color="secondary"
                            v-text="icons.mdiFormatListCheckbox"
                        ></v-icon>
                    </v-btn>
                </template>

                <v-list dense>
                    <v-list-item
                        v-for="(link, i) in exportLinks"
                        :key="link.text['en']"
                        href="#"
                    >
                        <v-list-item-icon class="mr-3">
                            <v-icon
                                :color="
                                    i === 0 ? 'green darken-3' : 'blue darken-3'
                                "
                                v-text="link.icon"
                            ></v-icon>
                        </v-list-item-icon>
                        <v-list-item-title
                            v-text="link.text[lang]"
                        ></v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-spacer></v-spacer>

            <v-col cols="12" sm="4">
                <b-search-field></b-search-field>
            </v-col>
        </v-toolbar>

        <v-data-table
            :headers="headers"
            :items="coupons"
            :footer-props="{ itemsPerPageOptions }"
            class="b-outlined"
        >
            <template v-slot:no-data>
                <v-progress-circular
                    v-if="loading"
                    color="secondary"
                    indeterminate
                ></v-progress-circular>
                <span v-else v-text="translations.noData[lang]"></span>
            </template>

            <template v-slot:item.edit="{ item }">
                <v-tooltip color="secondary" top>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            color="yellow darken-3"
                            icon
                            v-on="on"
                            @click="myFunc(item)"
                        >
                            <v-icon v-text="icons.mdiPencilOutline"></v-icon>
                        </v-btn>
                    </template>

                    <span class="font-weight-bold">Update</span>
                </v-tooltip>
            </template>
        </v-data-table>
    </v-tab-item>
</template>

<script>
import {
    mdiFormatListCheckbox,
    mdiMicrosoftExcel,
    mdiFileDelimitedOutline,
    mdiPencilOutline,
} from "@mdi/js";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

import translations from "@/utils/translations/storePanel/couponsOverview";

export default {
    name: "CouponsOverview",

    mixins: [translations],

    data() {
        return {
            icons: {
                mdiFormatListCheckbox,
                mdiPencilOutline,
            },
            exportLinks: [
                {
                    text: { el: "", en: "Export to Excel", it: "" },
                    icon: mdiMicrosoftExcel,
                },
                {
                    text: { el: "", en: "Export to CSV", it: "" },
                    icon: mdiFileDelimitedOutline,
                },
            ],
            itemsPerPageOptions: [10, 25, 50, 100],
        };
    },

    mounted() {
        this.getItems();
    },

    computed: {
        ...mapState(["loading"]),
        ...mapGetters("storePanel/redeem/couponsOverview", [
            "coupons",
            "pagination",
        ]),

        lang() {
            return this.$route.params.lang;
        },

        headers() {
            return [
                { text: "Promo Type Name", value: "promo_type_name" },
                { text: "Code", value: "code" },
                { text: "Available", value: "available" },
                { text: "Points", value: "points" },
                { text: "Total Redeemed", value: "total_redeemed" },
                { text: "Created at", value: "created_at" },
            ];
        },
    },

    methods: {
        ...mapActions("storePanel/redeem/couponsOverview", ["getItems"]),
    },
};
</script>
