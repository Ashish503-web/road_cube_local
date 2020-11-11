import redeemRoutes from "./redeemRoutes";
import historyRoutes from "./historyRoutes";
import productsRoutes from "./productsRoutes";
import couponsRoutes from "./couponsRoutes";
import settingsRoutes from "./settingsRoutes";

export default [
    {
        path: "",
        name: "StoreHome",
        component: () =>
            import(
                /* webpackChunkName: "storeHome" */ "@/views/storePanel/Home.vue"
            )
    },

    {
        path: "new-transaction",
        name: "NewTransaction",
        component: () =>
            import(
                /* webpackChunkName: "newTransaction" */ "@/views/storePanel/NewTransaction.vue"
            )
    },

    {
        path: "transactions",
        name: "Transactions",
        component: () =>
            import(
                /* webpackChunkName: "transactions" */ "@/views/storePanel/Transactions.vue"
            )
    },

    {
        path: "redeem",
        name: "Redeem",
        component: () =>
            import(
                /* webpackChunkName: "redeem" */ "@/views/storePanel/redeem/Redeem.vue"
            ),
        children: redeemRoutes
    },

    {
        path: "history",
        name: "History",
        component: () =>
            import(
                /* webpackChunkName: "history" */ "@/views/storePanel/history/History.vue"
            ),
        children: historyRoutes
    },

    // {
    //     path: "contests",
    //     name: "StoreContestAndSurvey",
    //     component: () =>
    //         import(
    //             /* webpackChunkName: "contests" */ "@/views/storePanel/Contests.vue"
    //         )
    // },

    // {
    //     path: "add-contest",
    //     name: "AddContest",
    //     component: () =>
    //         import(
    //             /* webpackChunkName: "viewContests" */ "@/views/storePanel/AddContest.vue"
    //         )
    // },

    // {
    //     path: "view-contest",
    //     name: "StoreViewContest",
    //     component: () =>
    //         import(
    //             /* webpackChunkName: "viewContests" */ "@/views/storePanel/ViewContest.vue"
    //         )
    // },

    // {
    //     path: "view-participants",
    //     name: "StoreViewParticipants",
    //     component: () =>
    //         import(
    //             /* webpackChunkName: "viewParticipants" */ "@/views/storePanel/ViewParticipants.vue"
    //         )
    // },

    // {
    //     path: "view-participant-answer",
    //     name: "StoreViewParticipantAnswer",
    //     component: () =>
    //         import(
    //             /* webpackChunkName: "viewParticipantAnswer" */ "@/views/storePanel/ViewParticipantAnswer.vue"
    //         )
    // },

    {
        path: "products",
        name: "Products",
        component: () =>
            import(
                /* webpackChunkName: "products" */ "@/views/storePanel/products/Products.vue"
            ),
        children: productsRoutes
    },

    {
        path: "coupons",
        name: "Coupons",
        component: () =>
            import(
                /* webpackChunkName: "coupons" */ "@/views/storePanel/coupons/Coupons.vue"
            ),
        children: couponsRoutes
    },

    {
        path: "settings",
        name: "Settings",
        components: {
            default: () =>
                import(
                    /* webpackChunkName: "settings" */ "@/views/storePanel/settings/Settings.vue"
                )
        },
        children: settingsRoutes
    }
];
