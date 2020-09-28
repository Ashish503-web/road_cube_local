<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-tabs
                v-model="tab"
                color="secondary"
                :vertical="$vuetify.breakpoint.mdAndDown"
            >
                <v-tab
                    v-for="tab in tabs"
                    v-bind:key="tab"
                    class="text-capitalize"
                    v-text="tab"
                >
                </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
                <BranchesTab />
                <FinancialData />
                <AdminPanelSettings />
                <ApplicationSettings />
                <DailyTransactionLimits />
            </v-tabs-items>

            <ShopDialog />
            <RightsDialog />
        </v-sheet>
    </v-container>
</template>

<script>
import BranchesTab from "@/views/loyaltyPanel/branches/tabs/BranchesTab";
import FinancialData from "@/views/loyaltyPanel/branches/tabs/FinancialData";
import AdminPanelSettings from "@/views/loyaltyPanel/branches/tabs/AdminPanelSettings";
import ApplicationSettings from "@/views/loyaltyPanel/branches/tabs/ApplicationSettings";
import DailyTransactionLimits from "@/views/loyaltyPanel/branches/tabs/DailyTransactionLimits";
import ShopDialog from "@/components/loyaltyPanel/Branches/ShopDialog";
import RightsDialog from "@/components/loyaltyPanel/Branches/RightsDialog";

export default {
    name: "Branches",
    components: {
        BranchesTab,
        FinancialData,
        AdminPanelSettings,
        ApplicationSettings,
        DailyTransactionLimits,
        ShopDialog,
        RightsDialog
    },
    data: () => ({
        tab: 0,
        tabs: [
            "Branches",
            "Financial data",
            "Settings of Admin Panel",
            "Settings of Application",
            "Daily Transaction Limits"
        ]
    })
};
</script>
