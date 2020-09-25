export  default  {
    path: "business-statistics",
    name: "BusinessStatistics",
    component: () =>
        import(
            /* webpackChunkName: "businessStatistics" */ "@/views/loyaltyPanel/BusinessStatistics.vue"
            )
}