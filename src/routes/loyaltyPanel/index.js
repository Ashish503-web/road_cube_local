import branchDebtRoutes from "./branchDebtRoutes";
import storesRoutes from "./storesRoutes";
import subscriptionsRoutes from "./subscriptionsRoutes";
import productsRoutes from "./productsRoutes";
import giftStatusRoutes from "./giftStatusRoutes";

export default [
    {
        path: "",
        name: "LoyaltyHome",
        component: () =>
            import(
                /* webpackChunkName: "loyaltyHome" */ "@/views/loyaltyPanel/Home.vue"
            )
    },

    {
        path: "branch-debt",
        name: "BranchDebt",
        component: () =>
            import(
                /* webpackChunkName: "branchDebt" */ "@/views/loyaltyPanel/branchDebt/BranchDebt.vue"
            ),
        children: branchDebtRoutes
    },

    {
        path: "stores",
        name: "CompanyStores",
        component: () =>
            import(
                /* webpackChunkName: "stores" */ "@/views/loyaltyPanel/stores/Stores.vue"
            ),
        children: storesRoutes
    },

    {
        path: "subscriptions",
        name: "Subscriptions",
        component: () =>
            import(
                /* webpackChunkName: "subscriptions" */ "@/views/loyaltyPanel/subscriptions/Subscriptions.vue"
            ),
        children: subscriptionsRoutes
    },

    {
        path: "collaborators",
        name: "Collaborators",
        component: () =>
            import(
                /* webpackChunkName: "collaborators" */ "@/views/loyaltyPanel/Collaborators.vue"
            )
    },

    {
        path: "products",
        name: "LoyaltyProducts",
        component: () =>
            import(
                /* webpackChunkName: "products" */ "@/views/loyaltyPanel/products/Products.vue"
            ),
        children: productsRoutes
    },

    {
        path: "customers",
        name: "Customers",
        component: () =>
            import(
                /* webpackChunkName: "customers" */ "@/views/loyaltyPanel/Customers.vue"
            )
    },

    {
        path: "user-rights",
        name: "UserRights",
        component: () =>
            import(
                /* webpackChunkName: "userRights" */ "@/views/loyaltyPanel/UserRights.vue"
            )
    },

    {
        path: "business-profile",
        name: "BusinessProfile",
        component: () =>
            import(
                /* webpackChunkName: "businessProfile" */ "@/views/loyaltyPanel/BusinessProfile.vue"
            )
    },

    {
        path: "business-statistics",
        name: "BusinessStatistics",
        component: () =>
            import(
                /* webpackChunkName: "businessStatistics" */ "@/views/loyaltyPanel/BusinessStatistics.vue"
            )
    },

    {
        path: "multiple-coupons",
        name: "Multiple Coupons",
        component: () =>
            import(
                /* webpackChunkName: "multipleCoupons" */ "@/views/loyaltyPanel/MultipleCoupons.vue"
            )
    },

    {
        path: "catalog-categories",
        name: "CatalogCategories",
        component: () =>
            import(
                /* webpackChunkName: "catalogCategories" */ "@/views/loyaltyPanel/CatalogCategories.vue"
            )
    },

    {
        path: "gift-status",
        name: "Gift Status",
        component: () =>
            import(
                /* webpackChunkName: "giftStatus" */ "@/views/loyaltyPanel/giftStatus/GiftStatus.vue"
            ),
        children: giftStatusRoutes
    },

    {
        path: "gift-catalog",
        name: "GiftCatalog",
        component: () =>
            import(
                /* webpackChunkName: "giftCatalog" */ "@/views/loyaltyPanel/GiftCatalog.vue"
            )
    },

    {
        path: "supplier-management",
        name: "Supplier Management",
        component: () =>
            import(
                /* webpackChunkName: "supplierManagement" */ "@/views/loyaltyPanel/SupplierManagement.vue"
            )
    },

    // {
    //     path: "sampling",
    //     name: "Sampling",
    //     component: () =>
    //         import(
    //             /* webpackChunkName: "1+1sampling" */ "@/views/loyaltyPanel/Sampling.vue"
    //         )
    // },

    // {
    //     path: "receipt-scanning",
    //     name: "Receipt Scanning",
    //     component: () =>
    //         import(
    //             /* webpackChunkName: "receiptScanning" */ "@/views/loyaltyPanel/ReceiptScanning.vue"
    //         )
    // },

    // {
    //     path: "check-in",
    //     name: "Check In",
    //     component: () =>
    //         import(
    //             /* webpackChunkName: "checkin" */ "@/views/loyaltyPanel/CheckIn.vue"
    //         )
    // },

    // {
    //     path: "serial-shopping",
    //     name: "Serial Shopping",
    //     component: () =>
    //         import(
    //             /* webpackChunkName: "serialShopping" */ "@/views/loyaltyPanel/SerialShopping.vue"
    //         )
    // },

    // {
    //     path: "contest-survey",
    //     name: "Contest & Survey",
    //     component: () =>
    //         import(
    //             /* webpackChunkName: "contestSurvey" */ "@/views/loyaltyPanel/ContestSurvey.vue"
    //         )
    // },

    // {
    //     path: "add-contest",
    //     name: "Add Contest",
    //     component: () =>
    //         import(
    //             /* webpackChunkName: "addContest" */ "@/views/loyaltyPanel/AddContest.vue"
    //         )
    // },

    // {
    //     path: "view-contest",
    //     name: "View Contest",
    //     component: () =>
    //         import(
    //             /* webpackChunkName: "viewContest" */ "@/views/loyaltyPanel/ViewContest.vue"
    //         )
    // },

    // {
    //     path: "view-participants",
    //     name: "View Participants",
    //     component: () =>
    //         import(
    //             /* webpackChunkName: "viewParticipants" */ "@/views/loyaltyPanel/ViewParticipants.vue"
    //         )
    // },

    // {
    //     path: "view-participant-answer",
    //     name: "View Participant Answer",
    //     component: () =>
    //         import(
    //             /* webpackChunkName: "viewParticipantAnswer" */ "@/views/loyaltyPanel/ViewParticipantAnswer.vue"
    //         )
    // },

    // {
    //     path: "roadcodes",
    //     name: "Roadcodes",
    //     component: () =>
    //         import(
    //             /* webpackChunkName: "roadcodes" */ "@/views/loyaltyPanel/Roadcodes.vue"
    //         )
    // },

    {
        path: "view-campaigns",
        name: "Campaigns",
        component: () =>
            import(
                /* webpackChunkName: "viewCampaigns" */ "@/views/loyaltyPanel/ViewCampaigns.vue"
            )
    },

    {
        path: "new-campaign",
        name: "New Campaign",
        component: () =>
            import(
                /* webpackChunkName: "newCampaign" */ "@/views/loyaltyPanel/NewCampaign.vue"
            )
    }
];
