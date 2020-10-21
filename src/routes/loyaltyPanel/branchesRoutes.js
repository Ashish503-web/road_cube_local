export default [
    {
        path: "branches-tab",
        name: "BranchesTab",
        component: () =>
            import(
                /* webpackChunkName: "branchesTab" */ "@/views/loyaltyPanel/branches/tabs/BranchesTab.vue"
            )
    },

    {
        path: "financial-data",
        name: "FinancialData",
        component: () =>
            import(
                /* webpackChunkName: "financialData" */ "@/views/loyaltyPanel/branches/tabs/FinancialData.vue"
            )
    },

    {
        path: "admin-panel-settings",
        name: "AdminPanelSettings",
        component: () =>
            import(
                /* webpackChunkName: "adminPanelSettings" */ "@/views/loyaltyPanel/branches/tabs/AdminPanelSettings.vue"
            )
    },

    {
        path: "application-settings",
        name: "ApplicationSettings",
        component: () =>
            import(
                /* webpackChunkName: "applicationSettings" */ "@/views/loyaltyPanel/branches/tabs/ApplicationSettings.vue"
            )
    },

    {
        path: "daily-transaction-limits",
        name: "DailyTransactionLimits",
        component: () =>
            import(
                /* webpackChunkName: "dailyTransactionLimits" */ "@/views/loyaltyPanel/branches/tabs/DailyTransactionLimits.vue"
            )
    }
];
