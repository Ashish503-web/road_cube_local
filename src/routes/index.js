import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import loyaltyPanelRoutes from "./loyaltyPanel";
import storePanelRoutes from "./storepanel";

const routes = [
    {
        path: "/",
        components: {
            header: () =>
                import(
                    /* webpackChunkName: "header" */ "@/components/Header.vue"
                ),
            default: () =>
                import(/* webpackChunkName: "home" */ "@/views/Home.vue")
        }
    },
    {
        path: "/:lang",
        name: "Home",
        components: {
            header: () =>
                import(
                    /* webpackChunkName: "header" */ "@/components/Header.vue"
                ),
            default: () =>
                import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
            footer: () =>
                import(
                    /* webpackChunkName: "footer" */ "@/components/Footer.vue"
                )
        }
    },
    {
        path: "/:lang/points-pos",
        name: "PointsPos",
        components: {
            header: () =>
                import(
                    /* webpackChunkName: "posHeader" */ "@/components/PosHeader.vue"
                ),
            default: () =>
                import(
                    /* webpackChunkName: "pointsPos" */ "@/views/PointsPos.vue"
                ),
            footer: () =>
                import(
                    /* webpackChunkName: "footer" */ "@/components/Footer.vue"
                )
        }
    },
    {
        path: "/:lang/loyaltyPanel",
        components: {
            header: () =>
                import(
                    /* webpackChunkName: "loyaltyHeader" */ "@/components/LoyaltyHeader.vue"
                ),
            default: () =>
                import(
                    /* webpackChunkName: "loyaltyPanel" */ "@/views/loyaltyPanel/LoyaltyPanel.vue"
                )
        },
        children: loyaltyPanelRoutes
    },
    {
        path: "/:lang/storePanel",
        components: {
            header: () =>
                import(
                    /* webpackChunkName: "storeHeader" */ "@/components/StoreHeader.vue"
                ),
            default: () =>
                import(
                    /* webpackChunkName: "storePanel" */ "@/views/storePanel/StorePanel.vue"
                )
        },
        children: storePanelRoutes
    },
    {
        path: "/:lang/app-providers",
        name: "AppProviders",
        components: {
            header: () =>
                import(
                    /* webpackChunkName: "appProvidersHeader" */ "@/components/AppProvidersHeader.vue"
                ),
            default: () =>
                import(
                    /* webpackChunkName: "appProviders" */ "@/views/AppProviders.vue"
                )
        }
    },
    {
        path: "/:lang/subscription-plans",
        name: "SubscriptionPlans",
        components: {
            header: () =>
                import(
                    /* webpackChunkName: "appProvidersHeader" */ "@/components/AppProvidersHeader.vue"
                ),
            default: () =>
                import(
                    /* webpackChunkName: "appProviders" */ "@/views/SubscriptionPlans.vue"
                )
        }
    },
    {
        path: "/:lang/create-account",
        name: "CreateAccount",
        components: {
            default: () =>
                import(
                    /* webpackChunkName: "appProviders" */ "@/views/Register.vue"
                )
        }
    },
    {
        path: "/:lang/sign-in",
        name: "SignIn",
        component: () =>
            import(/* webpackChunkName: "signIn" */ "@/views/SignIn.vue")
    },
    {
        path: "/:lang/password-recovery",
        name: "PasswordRecovery",
        component: () =>
            import(
                /* webpackChunkName: "passwordRecovery" */ "@/views/PasswordRecovery.vue"
            )
    },
    {
        path: "/:lang/user-stores",
        name: "UserStores",
        component: () =>
            import(
                /* webpackChunkName: "userStores" */ "@/views/UserStores.vue"
            )
    },
    {
        path: "*",
        name: "NotFound",
        component: () =>
            import(/* webpackChunkName: "notFound" */ "@/views/NotFound.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    }
});

export default router;
