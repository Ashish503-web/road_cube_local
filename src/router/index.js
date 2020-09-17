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
                        /* webpackChunkName: "dashboard" */ "../views/loyaltyPanel/Dashboard.vue"
                    )
            },
            {
                path: "branch-debt",
                name: "BranchDebt",
                component: () =>
                    import(
                        /* webpackChunkName: "branchDebt" */ "../views/loyaltyPanel/BranchDebt.vue"
                    )
            },
            {
                path: "branches",
                name: "Branches",
                component: () =>
                    import(
                        /* webpackChunkName: "branches" */ "../views/loyaltyPanel/Branches.vue"
                    )
            },
            {
                path: "subscriptions",
                name: "Subscriptions",
                component: () =>
                    import(
                        /* webpackChunkName: "subscriptions" */ "../views/loyaltyPanel/Subscriptions.vue"
                    )
            },
            {
                path: "collaborators",
                name: "Collaborators",
                component: () =>
                    import(
                        /* webpackChunkName: "collaborators" */ "../views/loyaltyPanel/Collaborators.vue"
                    )
            },
            {
                path: "products",
                name: "LoyaltyProducts",
                component: () =>
                    import(
                        /* webpackChunkName: "products" */ "../views/loyaltyPanel/Products.vue"
                    )
            },
            {
                path: "customer",
                name: "Customer",
                component: () =>
                    import(
                        /* webpackChunkName: "customer" */ "../views/loyaltyPanel/Customer.vue"
                    )
            },
            {
                path: "user-rights",
                name: "UserRights",
                component: () =>
                    import(
                        /* webpackChunkName: "userRights" */ "../views/loyaltyPanel/UserRights.vue"
                    )
            },
            {
                path: "business-profile",
                name: "BusinessProfile",
                component: () =>
                    import(
                        /* webpackChunkName: "businessProfile" */ "../views/loyaltyPanel/BusinessProfile.vue"
                    )
            },
            {
                path: "business-statistics",
                name: "BusinessStatistics",
                component: () =>
                    import(
                        /* webpackChunkName: "businessStatistics" */ "../views/loyaltyPanel/BusinessStatistics.vue"
                    )
            },
            {
                path: "category-management",
                name: "Category Management",
                components: {
                    title: () =>
                        import(
                            /* webpackChunkName: "sectionTitle" */ "../components/SectionTitle.vue"
                        ),
                    default: () =>
                        import(
                            /* webpackChunkName: "categoryManagement" */ "../views/loyaltyPanel/CategoryManagement.vue"
                        )
                }
            },
            {
                path: "gift-status",
                name: "Gift Status",
                components: {
                    title: () =>
                        import(
                            /* webpackChunkName: "sectionTitle" */ "../components/SectionTitle.vue"
                        ),
                    default: () =>
                        import(
                            /* webpackChunkName: "giftStatus" */ "../views/loyaltyPanel/GiftStatus.vue"
                        )
                }
            },
            {
                path: "catalog-management",
                name: "Catalog Management",
                components: {
                    title: () =>
                        import(
                            /* webpackChunkName: "sectionTitle" */ "../components/SectionTitle.vue"
                        ),
                    default: () =>
                        import(
                            /* webpackChunkName: "catalogManagement" */ "../views/loyaltyPanel/CatalogManagement.vue"
                        )
                }
            },
            {
                path: "supplier-management",
                name: "Supplier Management",
                components: {
                    title: () =>
                        import(
                            /* webpackChunkName: "sectionTitle" */ "../components/SectionTitle.vue"
                        ),
                    default: () =>
                        import(
                            /* webpackChunkName: "supplierManagement" */ "../views/loyaltyPanel/SupplierManagement.vue"
                        )
                }
            },
            {
                path: "sampling",
                name: "Sampling",
                component: () =>
                    import(
                        /* webpackChunkName: "sampling" */ "../views/loyaltyPanel/Sampling.vue"
                    )
            },
            {
                path: "receipt-scanning",
                name: "ReceiptScanning",
                component: () =>
                    import(
                        /* webpackChunkName: "receiptScanning" */ "../views/loyaltyPanel/ReceiptScanning.vue"
                    )
            },
            {
                path: "check-in",
                name: "CheckIn",
                component: () =>
                    import(
                        /* webpackChunkName: "checkin" */ "../views/loyaltyPanel/CheckIn.vue"
                    )
            },
            {
                path: "serial-shopping",
                name: "SerialShopping",
                component: () =>
                    import(
                        /* webpackChunkName: "serialShopping" */ "../views/loyaltyPanel/SerialShopping.vue"
                    )
            },
            {
                path: "contest-survey",
                name: "ContestSurvey",
                component: () =>
                    import(
                        /* webpackChunkName: "contestSurvey" */ "../views/loyaltyPanel/ContestSurvey.vue"
                    )
            },
            {
                path: "roadcodes",
                name: "Roadcodes",
                component: () =>
                    import(
                        /* webpackChunkName: "roadcodes" */ "../views/loyaltyPanel/Roadcodes.vue"
                    )
            },
            {
                path: "multiple-coupons",
                name: "MultipleCoupons",
                component: () =>
                    import(
                        /* webpackChunkName: "multipleCoupons" */ "../views/loyaltyPanel/MultipleCoupons.vue"
                    )
            },
            {
                path: "view-campaigns",
                name: "ViewCampaigns",
                component: () =>
                    import(
                        /* webpackChunkName: "viewCampaigns" */ "../views/loyaltyPanel/ViewCampaigns.vue"
                    )
            },
            {
                path: "new-campaign",
                name: "NewCampaign",
                component: () =>
                    import(
                        /* webpackChunkName: "newCampaign" */ "../views/loyaltyPanel/NewCampaign.vue"
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
                name: "StoreProducts",
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
