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
                        /* webpackChunkName: "branchDebt" */ "@/views/loyaltyPanel/BranchDebt/BranchDebt.vue"
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
                        /* webpackChunkName: "products" */ "../views/loyaltyPanel/Products/Products.vue"
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
                        /* webpackChunkName: "businessProfile" */ "../views/loyaltyPanel/BusinessProfile/BusinessProfile.vue"
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
                    default: () =>
                        import(
                            /* webpackChunkName: "supplierManagement" */ "../views/loyaltyPanel/SupplierManagement.vue"
                        )
                }
            },
            {
                path: "sampling",
                name: "1 + 1 and Sampling",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "1+1sampling" */ "../views/loyaltyPanel/Sampling.vue"
                        )
                }
            },
            {
                path: "receipt-scanning",
                name: "Receipt Scanning",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "receiptScanning" */ "../views/loyaltyPanel/ReceiptScanning.vue"
                        )
                }
            },
            {
                path: "check-in",
                name: "Check In",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "checkin" */ "../views/loyaltyPanel/CheckIn.vue"
                        )
                }
            },
            {
                path: "serial-shopping",
                name: "Serial Shopping",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "serialShopping" */ "../views/loyaltyPanel/SerialShopping.vue"
                        )
                }
            },
            {
                path: "contest-survey",
                name: "Contest & Survey",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "contestSurvey" */ "../views/loyaltyPanel/ContestSurvey.vue"
                        )
                }
            },
            {
                path: "add-contest",
                name: "Add Contest",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "addContest" */ "../views/loyaltyPanel/AddContest.vue"
                        )
                }
            },
            {
                path: "view-contest",
                name: "View Contest",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "viewContest" */ "../views/loyaltyPanel/ViewContest.vue"
                        )
                }
            },
            {
                path: "view-participants",
                name: "View Participants",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "viewParticipants" */ "../views/loyaltyPanel/ViewParticipants.vue"
                        )
                }
            },
            {
                path: "view-participant-answer",
                name: "View Participant Answer",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "viewParticipantAnswer" */ "../views/loyaltyPanel/ViewParticipantAnswer.vue"
                        )
                }
            },
            {
                path: "roadcodes",
                name: "Roadcodes",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "roadcodes" */ "../views/loyaltyPanel/Roadcodes.vue"
                        )
                }
            },
            {
                path: "multiple-coupons",
                name: "Multiple Coupons",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "multipleCoupons" */ "../views/loyaltyPanel/MultipleCoupons.vue"
                        )
                }
            },
            {
                path: "view-campaigns",
                name: "Campaigns",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "viewCampaigns" */ "../views/loyaltyPanel/ViewCampaigns.vue"
                        )
                }
            },
            {
                path: "new-campaign",
                name: "New Campaign",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "newCampaign" */ "../views/loyaltyPanel/NewCampaign.vue"
                        )
                }
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
                name: "Home",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "storeHome" */ "../views/storePanel/Home.vue"
                        )
                }
            },
            {
                path: "new-transaction",
                name: "New Transaction",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "newTransaction" */ "../views/storePanel/NewTransaction.vue"
                        )
                }
            },
            {
                path: "transactions",
                name: "Transactions",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "transactions" */ "../views/storePanel//transactions/Transactions.vue"
                        )
                }
            },
            {
                path: "redeem",
                name: "Redeem",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "redeem" */ "../views/storePanel/redeem/Redeem.vue"
                        )
                }
            },
            {
                path: "history",
                name: "History",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "history" */ "../views/storePanel/history/History.vue"
                        )
                }
            },
            {
                path: "contests",
                name: "Contest & Survey",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "contests" */ "../views/storePanel/Contests.vue"
                        )
                }
            },
            {
                path: "add-contest",
                name: "Add Contest",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "viewContests" */ "../views/storePanel/AddContest.vue"
                        )
                }
            },
            {
                path: "view-contest",
                name: "View Contest",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "viewContests" */ "../views/storePanel/ViewContest.vue"
                        )
                }
            },
            {
                path: "view-participants",
                name: "View Participants",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "viewParticipants" */ "../views/storePanel/ViewParticipants.vue"
                        )
                }
            },
            {
                path: "view-participant-answer",
                name: "View Participant Answer",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "viewParticipantAnswer" */ "../views/storePanel/ViewParticipantAnswer.vue"
                        )
                }
            },
            {
                path: "products",
                name: "Products",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "products" */ "../views/storePanel/products/Products.vue"
                        )
                }
            },
            {
                path: "voucher",
                name: "Voucher",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "voucher" */ "../views/storePanel/Voucher.vue"
                        )
                }
            },
            {
                path: "settings",
                name: "Settings",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "settings" */ "../views/storePanel/Settings.vue"
                        )
                }
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
