import {
    mdiChartBar,
    mdiCashMultiple,
    mdiSourceBranch,
    mdiFileDocument,
    mdiCreditCardOutline,
    mdiPackageVariantClosed,
    mdiAccountBox,
    mdiAccount,
    mdiOfficeBuilding,
    mdiFinance,
    mdiViewList,
    mdiGift,
    mdiTrophyVariant,
    mdiHelpCircle,
    mdiReceipt,
    mdiMapMarker,
    mdiStore,
    mdiFire,
    mdiBullhorn
} from "@mdi/js";

export default {
    computed: {
        navLinks() {
            return [
                {
                    title: {
                        el: "",
                        en: "MANAGE",
                        it: ""
                    },
                    children: [
                        {
                            icon: mdiChartBar,
                            title: {
                                el: "",
                                en: "Dashboard",
                                it: ""
                            },
                            to: `/${this.lang}/loyaltyPanel`,
                            exact: true
                        },
                        {
                            icon: mdiCashMultiple,
                            title: {
                                el: "",
                                en: "Branch Debt",
                                it: ""
                            },
                            to: `/${this.lang}/loyaltyPanel/branch-debt`
                        },
                        {
                            icon: mdiSourceBranch,
                            title: {
                                el: "",
                                en: "Branches",
                                it: ""
                            },
                            to: `/${this.lang}/loyaltyPanel/branches`
                        },
                        {
                            icon: mdiFileDocument,
                            title: {
                                el: "",
                                en: "Subscriptions",
                                it: ""
                            },
                            to: `/${this.lang}/loyaltyPanel/subscriptions`
                        },
                        {
                            icon: mdiCreditCardOutline,
                            title: {
                                el: "",
                                en: "Collaborators",
                                it: ""
                            },
                            to: `/${this.lang}/loyaltyPanel/collaborators`
                        },
                        {
                            icon: mdiPackageVariantClosed,
                            title: {
                                el: "",
                                en: "Products",
                                it: ""
                            },
                            to: `/${this.lang}/loyaltyPanel/products`
                        },
                        {
                            icon: mdiAccountBox,
                            title: {
                                el: "",
                                en: "Customers",
                                it: ""
                            },
                            to: `/${this.lang}/loyaltyPanel/customers`
                        },
                        {
                            icon: mdiAccount,
                            title: {
                                el: "",
                                en: "User Rights",
                                it: ""
                            },
                            to: `/${this.lang}/loyaltyPanel/user-rights`
                        },
                        {
                            icon: mdiOfficeBuilding,
                            title: {
                                el: "",
                                en: "Business Profile",
                                it: ""
                            },
                            to: `/${this.lang}/loyaltyPanel/business-profile`
                        },
                        {
                            icon: mdiFinance,
                            title: {
                                el: "",
                                en: "Business Statistics",
                                it: ""
                            },
                            to: `/${this.lang}/loyaltyPanel/business-statistics`
                        }
                    ]
                },
                {
                    title: {
                        el: "",
                        en: "GIFT LIST",
                        it: ""
                    },
                    children: [
                        {
                            icon: mdiViewList,
                            title: {
                                el: "",
                                en: "Category Management",
                                it: ""
                            },
                            to: `/${this.lang}/loyaltyPanel/category-management`
                        },
                        {
                            icon: mdiGift,
                            title: {
                                el: "",
                                en: "Gift Status",
                                it: ""
                            },
                            to: `/${this.lang}/loyaltyPanel/gift-status`
                        },
                        {
                            icon: mdiTrophyVariant,
                            title: {
                                el: "",
                                en: "Catalog Management",
                                it: ""
                            },
                            to: `/${this.lang}/loyaltyPanel/catalog-management`
                        },
                        {
                            icon: mdiPackageVariantClosed,
                            title: {
                                el: "",
                                en: "Supplier Management",
                                it: ""
                            },
                            to: `/${this.lang}/loyaltyPanel/supplier-management`
                        }
                    ]
                },
                {
                    title: {
                        el: "",
                        en: "PROMO ACTIONS",
                        it: ""
                    },
                    children: [
                        {
                            icon: mdiHelpCircle,
                            title: {
                                el: "",
                                en: "1+1 / Sampling",
                                it: ""
                            },
                            to: `/${this.lang}/loyaltyPanel/sampling`
                        },
                        {
                            icon: mdiReceipt,
                            title: {
                                el: "",
                                en: "Receipt Scanning",
                                it: ""
                            },
                            to: `/${this.lang}/loyaltyPanel/receipt-scanning`
                        },
                        {
                            icon: mdiMapMarker,
                            title: {
                                el: "",
                                en: "Check In",
                                it: ""
                            },
                            to: `/${this.lang}/loyaltyPanel/check-in`
                        },
                        {
                            icon: mdiStore,
                            title: {
                                el: "",
                                en: "Serial Shopping",
                                it: ""
                            },
                            to: `/${this.lang}/loyaltyPanel/serial-shopping`
                        },
                        {
                            icon: mdiTrophyVariant,
                            title: {
                                el: "",
                                en: "Contest & Survey",
                                it: ""
                            },
                            to: `/${this.lang}/loyaltyPanel/contest-survey`
                        },
                        {
                            icon: mdiFire,
                            title: {
                                el: "",
                                en: "Roadcodes",
                                it: ""
                            },
                            to: `/${this.lang}/loyaltyPanel/roadcodes`
                        },
                        {
                            icon: mdiCreditCardOutline,
                            title: {
                                el: "",
                                en: "Multiple Coupons",
                                it: ""
                            },
                            to: `/${this.lang}/loyaltyPanel/multiple-coupons`
                        }
                    ]
                },
                {
                    title: {
                        el: "",
                        en: "ATTRACT CUSTOMERS",
                        it: ""
                    },
                    children: [
                        {
                            icon: mdiBullhorn,
                            title: {
                                el: "",
                                en: "View Campaigns",
                                it: ""
                            },
                            to: `/${this.lang}/loyaltyPanel/view-campaigns`
                        },
                        {
                            icon: mdiBullhorn,
                            title: {
                                el: "",
                                en: "New Campaign",
                                it: ""
                            },
                            to: `/${this.lang}/loyaltyPanel/new-campaign`
                        }
                    ]
                }
            ];
        }
    }
};
