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
                    /* webpackChunkName: "appHeader" */ "../components/AppHeader.vue"
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
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
