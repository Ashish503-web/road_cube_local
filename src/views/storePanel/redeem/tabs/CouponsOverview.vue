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

import { mapState } from "vuex";
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
            coupons: [{ user: "Edgar" }],
            itemsPerPageOptions: [10, 25, 50, 100],
        };
    },

    computed: {
        ...mapState(["loading"]),

        lang() {
            return this.$route.params.lang;
        },

        headers() {
            return [
                {
                    text: this.translations.voucherAction[this.lang],
                    value: "user",
                },
                { text: this.translations.voucher[this.lang], value: "amount" },
                { text: this.translations.points[this.lang], value: "product" },
                {
                    text: this.translations.acquired[this.lang],
                    value: "address",
                },
                {
                    text: this.translations.redeemed[this.lang],
                    value: "information",
                },
                {
                    text: this.translations.available[this.lang],
                    value: "actions",
                },
                { text: this.translations.edit[this.lang], value: "edit" },
                {
                    text: this.translations.actions[this.lang],
                    value: "actions",
                },
            ];
        },
    },
};
</script>

<style scoped>
.export-link {
    text-decoration: none;
}

.export-link:hover {
    text-decoration: underline;
}
</style>
