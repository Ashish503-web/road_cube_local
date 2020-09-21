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

        <v-toolbar-title class="text-h5 secondary--text">
            {{ $route.name }}
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-icon color="secondary" size="60" v-text="icon"></v-icon>
    </v-toolbar>
</template>

<script>
import {
    mdiArrowLeft,
    mdiViewList,
    mdiGift,
    mdiTrophyVariant,
    mdiPlus,
    mdiPackageVariantClosed,
    mdiHelpCircle,
    mdiReceipt,
    mdiMapMarker,
    mdiStore,
    mdiFire,
    mdiCreditCardOutline,
    mdiBullhorn
} from "@mdi/js";

export default {
    name: "SectionTitle",

    data: () => ({
        icons: {
            mdiArrowLeft,
            mdiViewList,
            mdiGift,
            mdiTrophyVariant,
            mdiPlus,
            mdiPackageVariantClosed,
            mdiHelpCircle,
            mdiReceipt,
            mdiMapMarker,
            mdiStore,
            mdiFire,
            mdiCreditCardOutline,
            mdiBullhorn
        }
    }),

    computed: {
        icon() {
            let icon = "mdi";

            switch (this.$route.name) {
                case "Category Management":
                    icon += "ViewList";
                    break;
                case "Gift Status":
                    icon += "Gift";
                    break;
                case "Catalog Management":
                    icon += "TrophyVariant";
                    break;
                case "Supplier Management":
                    icon += "PackageVariantClosed";
                    break;
                case "1 + 1 and Sampling":
                    icon += "HelpCircle";
                    break;
                case "Receipt Scanning":
                    icon += "Receipt";
                    break;
                case "Check In":
                    icon += "MapMarker";
                    break;
                case "Serial Shopping":
                    icon += "Store";
                    break;
                case "Contest & Survey":
                case "View Participants":
                case "View Answer":
                    icon += "TrophyVariant";
                    break;
                case "Add Contest":
                    icon += "Plus";
                    break;
                case "Roadcodes":
                    icon += "Fire";
                    break;
                case "Multiple Coupons":
                    icon += "CreditCardOutline";
                    break;
                case "Campaigns":
                case "New Campaign":
                    icon += "Bullhorn";
            }

            return this.icons[icon];
        },

        showGoBack() {
            switch (this.$route.name) {
                case "Add Contest":
                case "View Contest":
                case "View Participants":
                case "View Answer":
                    return true;
                default:
                    return false;
            }
        }
    }
};
</script>
