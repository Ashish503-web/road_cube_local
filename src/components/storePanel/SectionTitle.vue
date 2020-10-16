<template>
    <v-toolbar flat outlined height="92">
        <v-tooltip v-if="showGoBack" top>
            <template v-slot:activator="{ on }">
                <v-btn
                    color="secondary"
                    icon
                    class="mr-3"
                    v-on="on"
                    @click="$router.go(-1)"
                >
                    <v-icon v-text="icons.mdiArrowLeft"></v-icon>
                </v-btn>
            </template>

            <span>Go Back</span>
        </v-tooltip>

        <v-toolbar-title class="text-h5 secondary--text">{{
            $route.name
        }}</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-icon color="secondary" size="60" v-text="icon"></v-icon>
    </v-toolbar>
</template>

<script>
import {
    mdiArrowLeft,
    mdiChartBar,
    mdiPlusThick,
    mdiCurrencyEur,
    mdiGift,
    mdiDatabaseSync,
    mdiTrophyVariant,
    mdiPackageVariantClosed,
    mdiTagMultiple,
    mdiCog
} from "@mdi/js";

export default {
    name: "SectionTitle",

    data: () => ({
        icons: {
            mdiArrowLeft,
            mdiChartBar,
            mdiPlusThick,
            mdiCurrencyEur,
            mdiGift,
            mdiDatabaseSync,
            mdiTrophyVariant,
            mdiPackageVariantClosed,
            mdiTagMultiple,
            mdiCog
        }
    }),

    computed: {
        icon() {
            let icon = "mdi";

            switch (this.$route.name) {
                case "Home":
                    icon += "ChartBar";
                    break;
                case "New Transaction":
                    icon += "PlusThick";
                    break;
                case "Transactions":
                    icon += "CurrencyEur";
                    break;
                case "Redeem":
                    icon += "Gift";
                    break;
                case "History":
                    icon += "DatabaseSync";
                    break;
                case "Contest & Survey":
                case "Add Contest":
                case "View Participants":
                case "View Participant Answer":
                    icon += "TrophyVariant";
                    break;
                case "Products":
                    icon += "PackageVariantClosed";
                    break;
                case "Voucher":
                    icon += "TagMultiple";
                    break;
                case "Settings":
                    icon += "Cog";
            }

            return this.icons[icon];
        },

        showGoBack() {
            switch (this.$route.name) {
                case "Add Contest":
                case "View Contest":
                case "View Participants":
                case "View Participant Answer":
                    return true;
                default:
                    return false;
            }
        }
    }
};
</script>
