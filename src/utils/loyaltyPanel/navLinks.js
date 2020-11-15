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
                                en: "Home",
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
                                en: "Stores",
                                it: ""
                            },
                            to: `/${this.lang}/loyaltyPanel/stores`
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
                            to: `/${this.lang}/loyaltyPanel/collaborators?page=1`
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
                            to: `/${this.lang}/loyaltyPanel/customers?page=1`
                        },
                        {
                            icon: mdiAccount,
                            title: {
                                el: "",
                                en: "User Rights",
                                it: ""
                            },
                            to: `/${this.lang}/loyaltyPanel/user-rights?page=1`
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
                            to: `/${this.lang}/loyaltyPanel/business-statistics?page=1`
                        },
                        {
                            icon: mdiCreditCardOutline,
                            title: {
                                el: "",
                                en: "Multiple Coupons",
                                it: ""
                            },
                            to: `/${this.lang}/loyaltyPanel/multiple-coupons?page=1`
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
                            to: `/${this.lang}/loyaltyPanel/category-management?page=1`
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
                            to: `/${this.lang}/loyaltyPanel/catalog-management?page=1`
                        },
                        {
                            icon: mdiPackageVariantClosed,
                            title: {
                                el: "",
                                en: "Supplier Management",
                                it: ""
                            },
                            to: `/${this.lang}/loyaltyPanel/supplier-management?page=1`
                        }
                    ]
                },
                // {
                //     title: {
                //         el: "",
                //         en: "PROMO ACTIONS",
                //         it: ""
                //     },
                //     children: [
                //         {
                //             icon: mdiHelpCircle,
                //             title: {
                //                 el: "",
                //                 en: "1+1 / Sampling",
                //                 it: ""
                //             },
                //             to: `/${this.lang}/loyaltyPanel/sampling`
                //         },
                //         {
                //             icon: mdiReceipt,
                //             title: {
                //                 el: "",
                //                 en: "Receipt Scanning",
                //                 it: ""
                //             },
                //             to: `/${this.lang}/loyaltyPanel/receipt-scanning`
                //         },
                //         {
                //             icon: mdiMapMarker,
                //             title: {
                //                 el: "",
                //                 en: "Check In",
                //                 it: ""
                //             },
                //             to: `/${this.lang}/loyaltyPanel/check-in`
                //         },
                //         {
                //             icon: mdiStore,
                //             title: {
                //                 el: "",
                //                 en: "Serial Shopping",
                //                 it: ""
                //             },
                //             to: `/${this.lang}/loyaltyPanel/serial-shopping`
                //         },
                //         {
                //             icon: mdiTrophyVariant,
                //             title: {
                //                 el: "",
                //                 en: "Contest & Survey",
                //                 it: ""
                //             },
                //             to: `/${this.lang}/loyaltyPanel/contest-survey`
                //         },
                //         {
                //             icon: mdiFire,
                //             title: {
                //                 el: "",
                //                 en: "Roadcodes",
                //                 it: ""
                //             },
                //             to: `/${this.lang}/loyaltyPanel/roadcodes`
                //         }
                //     ]
                // },
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
                            to: `/${this.lang}/loyaltyPanel/view-campaigns?page=1`
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
