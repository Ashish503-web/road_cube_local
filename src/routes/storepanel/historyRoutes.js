export default [
    {
        path: "point-analysis",
        name: "PointAnalysis",
        component: () =>
            import(
                /* webpackChunkName: "pointAnalysis" */ "@/views/storePanel/history/tabs/PointAnalysis.vue"
            )
    },

    {
        path: "monthly-points",
        name: "MonthlyPoints",
        component: () =>
            import(
                /* webpackChunkName: "monthlyPoints" */ "@/views/storePanel/history/tabs/MonthlyPoints.vue"
            )
    }
];
