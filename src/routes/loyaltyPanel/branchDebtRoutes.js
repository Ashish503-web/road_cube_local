export default [
    {
        path: "monthly-invoicing",
        name: "MonthlyInvoicing",
        component: () =>
            import(
                /* webpackChunkName: "monthlyInvoicing" */ "@/views/loyaltyPanel/branchDebt/tabs/MonthlyInvoicing.vue"
            )
    },

    {
        path: "redemption-invoice",
        name: "RedemptionInvoice",
        component: () =>
            import(
                /* webpackChunkName: "redemptionInvoice" */ "@/views/loyaltyPanel/branchDebt/tabs/RedemptionInvoice.vue"
            )
    }
];
