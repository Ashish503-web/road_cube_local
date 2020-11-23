<template>
    <v-tab-item :value="$route.path" class="pa-3">
        <v-toolbar flat height="90">
            <v-spacer></v-spacer>

            <v-col cols="12" sm="4">
                <v-text-field
                    label="Search"
                    color="secondary"
                    rounded
                    outlined
                    dense
                    clearable
                    hide-details
                    :prepend-inner-icon="icons.mdiMagnify"
                ></v-text-field>
            </v-col>
        </v-toolbar>

        <v-data-table
            :headers="headers"
            :items="multipleCoupons"
            :footer-props="{ itemsPerPageOptions: [12], showCurrentPage: true }"
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
        </v-data-table>
    </v-tab-item>
</template>

<script>
import { mdiMagnify } from "@mdi/js";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import translations from "@/utils/translations/storePanel/couponsOverview";

export default {
    name: "MultipleCoupons",

    mixins: [translations],

    data: () => ({
        icons: { mdiMagnify },
    }),

    computed: {
        ...mapState(["loading"]),
        ...mapGetters("storePanel/redeem/multipleCoupons", ["multipleCoupons"]),

        lang() {
            return this.$route.params.lang;
        },

        headers() {
            return [
                {
                    text: this.translations.promoType[this.lang],
                    value: "promo_type_name",
                },
                { text: this.translations.code[this.lang], value: "code" },
                {
                    text: this.translations.available[this.lang],
                    value: "available",
                },
                { text: this.translations.points[this.lang], value: "points" },
                {
                    text: this.translations.totalRedeemed[this.lang],
                    value: "total_redeemed",
                },
                {
                    text: this.translations.date[this.lang],
                    value: "created_at",
                },
            ];
        },
    },

    methods: {
        ...mapActions("storePanel/redeem/multipleCoupons", ["getItems"]),
    },

    mounted() {
        this.getItems();
    },
};
</script>
