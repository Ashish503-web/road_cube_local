export default [
    {
        path: "stores-tab",
        name: "StoresTab",
        component: () =>
            import(
                /* webpackChunkName: "storesTab" */ "@/views/loyaltyPanel/stores/tabs/StoresTab.vue"
            )
    },

    {
        path: "financial-data",
        name: "FinancialData",
        component: () =>
            import(
                /* webpackChunkName: "financialData" */ "@/views/loyaltyPanel/stores/tabs/FinancialData.vue"
            )
    },

    // {
    //     path: "admin-panel-settings",
    //     name: "AdminPanelSettings",
    //     component: () =>
    //         import(
    //             /* webpackChunkName: "adminPanelSettings" */ "@/views/loyaltyPanel/stores/tabs/AdminPanelSettings.vue"
    //         )
    // },

    // {
    //     path: "application-settings",
    //     name: "ApplicationSettings",
    //     component: () =>
    //         import(
    //             /* webpackChunkName: "applicationSettings" */ "@/views/loyaltyPanel/stores/tabs/ApplicationSettings.vue"
    //         )
    // },

    {
        path: "daily-transaction-limits",
        name: "DailyTransactionLimits",
        component: () =>
            import(
                /* webpackChunkName: "dailyTransactionLimits" */ "@/views/loyaltyPanel/stores/tabs/DailyTransactionLimits.vue"
            )
    }
];
