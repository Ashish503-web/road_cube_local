import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/loyaltypanel",
        components: {
            header: () =>
                import(
                    /* webpackChunkName: "loyaltyHeader" */ "../components/LoyaltyHeader.vue"
                ),
            default: () =>
                import(
                    /* webpackChunkName: "loyaltyPanel" */ "../views/loyaltyPanel/LoyaltyPanel.vue"
                )
        },
        children: [
            {
                path: "",
                name: "LoyaltyPanel",
                component: () =>
                    import(
                        /* webpackChunkName: "defaultDashboard" */ "../views/loyaltyPanel/DefaultDashboard.vue"
                    )
            },
            {
                path: "dashboard/saas",
                component: () =>
                    import(
                        /* webpackChunkName: "saasDashboard" */ "../views/loyaltyPanel/SaasDashboard.vue"
                    )
            },
            {
                path: "dashboard/crypto",
                component: () =>
                    import(
                        /* webpackChunkName: "cryptoDashboard" */ "../views/loyaltyPanel/CryptoDashboard.vue"
                    )
            }
        ]
    },
    {
        path: "/storepanel",
        components: {
            header: () =>
                import(
                    /* webpackChunkName: "storeHeader" */ "../components/StoreHeader.vue"
                ),
            default: () =>
                import(
                    /* webpackChunkName: "storePanel" */ "../views/storePanel/StorePanel.vue"
                )
        },
        children: [
            {
                path: "",
                name: "StorePanel",
                component: () =>
                    import(
                        /* webpackChunkName: "storeHome" */ "../views/storePanel/Home.vue"
                    )
            },
            {
                path: "new-transaction",
                name: "NewTransaction",
                component: () =>
                    import(
                        /* webpackChunkName: "newTransaction" */ "../views/storePanel/NewTransaction.vue"
                    )
            },
            {
                path: "transactions",
                name: "Transactions",
                component: () =>
                    import(
                        /* webpackChunkName: "transactions" */ "../views/storePanel/Transactions.vue"
                    )
            },
            {
                path: "redeem",
                name: "Redeem",
                component: () =>
                    import(
                        /* webpackChunkName: "redeem" */ "../views/storePanel/Redeem.vue"
                    )
            },
            {
                path: "history",
                name: "History",
                component: () =>
                    import(
                        /* webpackChunkName: "history" */ "../views/storePanel/History.vue"
                    )
            },
            {
                path: "contests",
                name: "Contests",
                component: () =>
                    import(
                        /* webpackChunkName: "contests" */ "../views/storePanel/Contests.vue"
                    )
            },
            {
                path: "view-participants",
                name: "ViewParticipants",
                component: () =>
                    import(
                        /* webpackChunkName: "viewParticipants" */ "../views/storePanel/ViewParticipants.vue"
                    )
            },
            {
                path: "view-participant-answer",
                name: "ViewParticipantAnswer",
                component: () =>
                    import(
                        /* webpackChunkName: "viewParticipantAnswer" */ "../views/storePanel/ViewParticipantAnswer.vue"
                    )
            },
            {
                path: "view-contest",
                name: "ViewContest",
                component: () =>
                    import(
                        /* webpackChunkName: "viewContests" */ "../views/storePanel/ViewContest.vue"
                    )
            },
            {
                path: "products",
                name: "Products",
                component: () =>
                    import(
                        /* webpackChunkName: "products" */ "../views/storePanel/Products.vue"
                    )
            },
            {
                path: "voucher",
                name: "Voucher",
                component: () =>
                    import(
                        /* webpackChunkName: "voucher" */ "../views/storePanel/Voucher.vue"
                    )
            },
            {
                path: "settings",
                name: "Settings",
                component: () =>
                    import(
                        /* webpackChunkName: "settings" */ "../views/storePanel/Settings.vue"
                    )
            }
        ]
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
