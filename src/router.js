import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

import LoyaltyPanel from "./routes/loyaltyPanel/loyaltyPanelRoutes";
import BranchDebt from "./routes/loyaltyPanel/branchDebtRoutes";
import Branches from "./routes/loyaltyPanel/branchesRoutes";
import Subscriptions from "./routes/loyaltyPanel/subscriptionsRoutes";
import Collaborators from "./routes/loyaltyPanel/collaboratorsRoutes";
import LoyaltyProducts from "./routes/loyaltyPanel/loyaltyProductsRoutes";
import Customer from "./routes/loyaltyPanel/customerRoutes";
import UserRights from "./routes/loyaltyPanel/userRightsRoutes";
import BusinessProfile from "./routes/loyaltyPanel/businessProfileRoutes";
import BusinessStatistics from "./routes/loyaltyPanel/businessStatisticsRoutes";
import CategoryManagement from "./routes/loyaltyPanel/categoryManagementRoutes";
import GiftStatus from "./routes/loyaltyPanel/giftStatusRoutes";
import CatalogManagement from "./routes/loyaltyPanel/catalogManagementRoutes";
import SupplierManagement from "./routes/loyaltyPanel/supplierManagementRoutes";
import OneOneSampling from "./routes/loyaltyPanel/oneOneSamplingRoutes";
import ReceiptScanning from "./routes/loyaltyPanel/receiptScanningRoutes";
import CheckIn from "./routes/loyaltyPanel/checkInRoutes";
import SerialShopping from "./routes/loyaltyPanel/serialShoppingRoutes";
import ContestSurvey from "./routes/loyaltyPanel/contestSurveyRoutes";
import AddContest from "./routes/loyaltyPanel/addContestRoutes";
import ViewContest from "./routes/loyaltyPanel/viewContestRoutes";
import ViewParticipants from "./routes/loyaltyPanel/viewParticipantsRoutes";
import ViewParticipantAnswer from "./routes/loyaltyPanel/viewParticipantAnswerRoutes";
import Roadcodes from "./routes/loyaltyPanel/roadcodesRoutes";
import MultipleCoupons from "./routes/loyaltyPanel/multipleCouponsRoutes";
import Campaigns from "./routes/loyaltyPanel/campaignsRoutes";
import NewCampaign from "./routes/loyaltyPanel/newCampaignRoutes";
import HomeStorePanel from "./routes/storepanel/homeRoutes";
import NewTransactionStorePanel from "./routes/storepanel/newTransactionRoutes";
import TransactionStorePanel from "./routes/storepanel/transactionsRoutes";
import RedeemStorePanel from "./routes/storepanel/redeemRoutes";
import HistoryStorePanel from "./routes/storepanel/historyRoutes";
import ContestSurveyStorePanel from "./routes/storepanel/contestSurveyRoutes";
import AddContestStorePanel from "./routes/storepanel/addContestRoutes";
import ViewContestStorePanel from "./routes/storepanel/viewContestRoutes";
import ViewParticipantsStorePanel from "./routes/storepanel/viewParticipantsRoutes";
import ViewParticipantAnswerStorePanel from "./routes/storepanel/viewParticipantAnswerRoutes";
import Products from "./routes/storepanel/productsRoutes";
import Voucher from "./routes/storepanel/voucherRoutes";
import Settings from "./routes/storepanel/settingsRoutes";

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
            ViewParticipants,
            ViewParticipantAnswer,
            Roadcodes,
            MultipleCoupons,
            Campaigns,
            NewCampaign
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
            HomeStorePanel,
            NewTransactionStorePanel,
            TransactionStorePanel,
            RedeemStorePanel,
            HistoryStorePanel,
            ContestSurveyStorePanel,
            AddContestStorePanel,
            ViewContestStorePanel,
            ViewParticipantsStorePanel,
            ViewParticipantAnswerStorePanel,
            Products,
            Voucher,
            Settings
        ]
    },
    {
        path: "/register",
        name: "Register",
        component: () =>
            import(/* webpackChunkName: "register" */ "@/views/Register.vue")
    },
    {
        path: "/sign-in",
        name: "SignIn",
        component: () =>
            import(/* webpackChunkName: "signIn" */ "@/views/SignIn.vue")
    },
    {
        path: "/example-backend-request",
        name: "backendExample",
        component: () =>
            import(
                /* webpackChunkName: "ExampleBackendRequest" */ "@/views/ExampleBackendRequest.vue"
            )
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
