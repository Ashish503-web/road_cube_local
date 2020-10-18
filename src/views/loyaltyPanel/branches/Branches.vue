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
                    :key="tab.name"
                    v-text="tab.name"
                    :to="tab.to"
                    class="text-capitalize d-flex justify-start justify-sm-center px-3"
                ></v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
                <router-view></router-view>
            </v-tabs-items>
        </v-sheet>
    </v-container>
</template>

<script>
export default {
    name: "Branches",

    data: () => ({
        tab: "loyaltyPanel/branches",
        tabs: [
            { to: "/loyaltyPanel/branches", name: "branches" },
            {
                to: "/loyaltyPanel/branches/financial-data",
                name: "financial data"
            },
            {
                to: "/loyaltyPanel/branches/admin-panel-settings",
                name: "Settings of Admin Panel"
            },
            {
                to: "/loyaltyPanel/branches/application-settings",
                name: "Settings of Application"
            },
            {
                to: "/loyaltyPanel/branches/daily-transaction-limits",
                name: "Daily Transaction Limits"
            }
        ]
    })
};
</script>
