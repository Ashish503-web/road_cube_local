import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);
import LoyaltyPanel from './routes/loyaltyPanelRoutes'
import BranchDebt from './routes/branchDebtRoutes'
import Branches from './routes/branchesRoutes'
import Subscriptions from './routes/subscriptionsRoutes'
import Collaborators from './routes/collaboratorsRoutes'
import LoyaltyProducts from './routes/loyaltyProductsRoutes'
import Customer from './routes/customerRoutes'
import UserRights from './routes/userRightsRoutes'
import BusinessProfile from './routes/businessProfileRoutes'
import BusinessStatistics from './routes/businessStatisticsRoutes'
import CategoryManagement from './routes/categoryManagementRoutes'
import GiftStatus from './routes/giftStatusRoutes'
import CatalogManagement from './routes/catalogManagementRoutes'
import SupplierManagement from './routes/supplierManagementRoutes'
import OneOneSampling from './routes/oneOneSamplingRoutes'
import ReceiptScanning from './routes/receiptScanningRoutes'
import CheckIn from './routes/checkInRoutes'
import SerialShopping from './routes/serialShoppingRoutes'
import ContestSurvey from './routes/contestSurveyRoutes'
import AddContest from './routes/addContestRoutes'
import ViewContest from './routes/viewContestRoutes'
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
                    /* webpackChunkName: "loyaltyHeader" */ "@/components/LoyaltyHeader.vue"
                    ),
            default: () =>
                import(
                    /* webpackChunkName: "loyaltyPanel" */ "@/views/loyaltyPanel/LoyaltyPanel.vue"
                    )
        },
        children: [
            LoyaltyPanel,
            BranchDebt,
            Branches,
            Subscriptions,
            Collaborators,
            LoyaltyProducts,
            Customer,
            UserRights,
            BusinessProfile,
            BusinessStatistics,
            CategoryManagement,
            GiftStatus,
            CatalogManagement,
            SupplierManagement,
            OneOneSampling,
            ReceiptScanning,
            CheckIn,
            SerialShopping,
            ContestSurvey,
            AddContest,
            ViewContest,
            {
                path: "view-participants",
                name: "View Participants",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "viewParticipants" */ "@/views/loyaltyPanel/ViewParticipants.vue"
                            )
                }
            },
            {
                path: "view-participant-answer",
                name: "View Participant Answer",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "viewParticipantAnswer" */ "@/views/loyaltyPanel/ViewParticipantAnswer.vue"
                            )
                }
            },
            {
                path: "roadcodes",
                name: "Roadcodes",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "roadcodes" */ "@/views/loyaltyPanel/Roadcodes.vue"
                            )
                }
            },
            {
                path: "multiple-coupons",
                name: "Multiple Coupons",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "multipleCoupons" */ "@/views/loyaltyPanel/MultipleCoupons.vue"
                            )
                }
            },
            {
                path: "view-campaigns",
                name: "Campaigns",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "viewCampaigns" */ "@/views/loyaltyPanel/ViewCampaigns.vue"
                            )
                }
            },
            {
                path: "new-campaign",
                name: "New Campaign",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "newCampaign" */ "@/views/loyaltyPanel/NewCampaign.vue"
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
                    /* webpackChunkName: "storeHeader" */ "@/components/StoreHeader.vue"
                    ),
            default: () =>
                import(
                    /* webpackChunkName: "storePanel" */ "@/views/storePanel/StorePanel.vue"
                    )
        },
        children: [
            {
                path: "",
                name: "Home",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "storeHome" */ "@/views/storePanel/Home.vue"
                            )
                }
            },
            {
                path: "new-transaction",
                name: "New Transaction",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "newTransaction" */ "@/views/storePanel/NewTransaction.vue"
                            )
                }
            },
            {
                path: "transactions",
                name: "Transactions",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "transactions" */ "@/views/storePanel//transactions/Transactions.vue"
                            )
                }
            },
            {
                path: "redeem",
                name: "Redeem",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "redeem" */ "@/views/storePanel/redeem/Redeem.vue"
                            )
                }
            },
            {
                path: "history",
                name: "History",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "history" */ "@/views/storePanel/history/History.vue"
                            )
                }
            },
            {
                path: "contests",
                name: "Contest & Survey",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "contests" */ "@/views/storePanel/Contests.vue"
                            )
                }
            },
            {
                path: "add-contest",
                name: "Add Contest",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "viewContests" */ "@/views/storePanel/AddContest.vue"
                            )
                }
            },
            {
                path: "view-contest",
                name: "View Contest",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "viewContests" */ "@/views/storePanel/ViewContest.vue"
                            )
                }
            },
            {
                path: "view-participants",
                name: "View Participants",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "viewParticipants" */ "@/views/storePanel/ViewParticipants.vue"
                            )
                }
            },
            {
                path: "view-participant-answer",
                name: "View Participant Answer",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "viewParticipantAnswer" */ "@/views/storePanel/ViewParticipantAnswer.vue"
                            )
                }
            },
            {
                path: "products",
                name: "Products",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "products" */ "@/views/storePanel/products/Products.vue"
                            )
                }
            },
            {
                path: "voucher",
                name: "Voucher",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "voucher" */ "@/views/storePanel/Voucher.vue"
                            )
                }
            },
            {
                path: "settings",
                name: "Settings",
                components: {
                    default: () =>
                        import(
                            /* webpackChunkName: "settings" */ "@/views/storePanel/settings/Settings.vue"
                            )
                }
            }
        ]
    },
    {
        path: "/example-backend-request",
        name: "backendExample",
        component: () =>
            import(
                /* webpackChunkName: "ExampleBackendRequest" */ "@/views/ExampleBackendRequest.vue"
                )
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
