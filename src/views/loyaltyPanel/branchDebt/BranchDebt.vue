<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-tabs
                v-model="tab"
                :vertical="$vuetify.breakpoint.smAndDown"
                color="secondary"
            >
                <v-tab
                    v-for="tab in tabs"
                    :key="tab.name"
                    v-text="tab.name"
                    :to="tab.to"
                    class="text-capitalize d-flex justify-sm-start justify-center px-3"
                    >Monthly invoicing</v-tab
                >
            </v-tabs>

            <v-tabs-items v-model="tab">
                <router-view></router-view>
            </v-tabs-items>
        </v-sheet>
    </v-container>
</template>

<script>
export default {
    name: "BranchDebt",

    data: () => ({
        tab: "loyaltyPanel/branch-debt/monthly-invoicing",
        tabs: [
            {
                to: "/loyaltyPanel/branch-debt/monthly-invoicing",
                name: "Monthly Invoicing"
            },
            {
                to: "/loyaltyPanel/branch-debt/redemption-invoice",
                name: "Redemption Invoice"
            }
        ],
        page: 1,
        itemsPerPage: 10,
        perPage: [10, 20, 30]
    })
};
</script>

<style scoped></style>
