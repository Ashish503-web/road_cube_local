import {
    mdiChartBar,
    mdiPlusThick,
    mdiCurrencyEur,
    mdiGift,
    mdiDatabaseSync,
    mdiTrophyVariant,
    mdiPackageVariantClosed,
    mdiTagMultiple,
    mdiCog
} from "@mdi/js";

export default {
    computed: {
        navLinks() {
            return [
                {
                    title: {
                        el: "",
                        en: "USE",
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
                            to: `/${this.lang}/storePanel`,
                            exact: true
                        },
                        {
                            icon: mdiPlusThick,
                            title: {
                                el: "",
                                en: "New Transaction",
                                it: ""
                            },
                            to: `/${this.lang}/storePanel/new-transaction`
                        },
                        {
                            icon: mdiCurrencyEur,
                            title: {
                                el: "",
                                en: "Transactions",
                                it: ""
                            },
                            to: `/${this.lang}/storePanel/transactions`
                        },
                        {
                            icon: mdiGift,
                            title: {
                                el: "",
                                en: "Redeem",
                                it: ""
                            },
                            to: `/${this.lang}/storePanel/redeem`
                        },
                        {
                            icon: mdiDatabaseSync,
                            title: {
                                el: "",
                                en: "History",
                                it: ""
                            },
                            to: `/${this.lang}/storePanel/history`
                        }
                        // {
                        //     icon: mdiTrophyVariant,
                        //     title: {
                        //         el: "",
                        //         en: "Contests",
                        //         it: ""
                        //     },
                        //     to: `/${this.lang}/storePanel/contests`
                        // }
                    ]
                },
                {
                    title: "SETTINGS",
                    children: [
                        {
                            icon: mdiPackageVariantClosed,
                            title: {
                                el: "",
                                en: "Products",
                                it: ""
                            },
                            to: `/${this.lang}/storePanel/products`
                        },
                        {
                            icon: mdiTagMultiple,
                            title: {
                                el: "",
                                en: "Coupons",
                                it: ""
                            },
                            to: `/${this.lang}/storePanel/coupons`
                        },
                        {
                            icon: mdiCog,
                            title: {
                                el: "",
                                en: "Settings",
                                it: ""
                            },
                            to: `/${this.lang}/storePanel/settings`
                        }
                    ]
                }
            ];
        }
    }
};
