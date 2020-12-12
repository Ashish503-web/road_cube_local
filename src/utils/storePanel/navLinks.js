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

import isEmpty from "lodash/isEmpty";

export default {
    computed: {
        navLinks() {
            const { permissions } = this.$store.state;
            const hideNewTransaction = this.$store.state.storePanel.store.flags
                .reward.offline_transaction;

            if (!isEmpty(permissions)) {
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
                                exact: true,
                                hide: !permissions.homepage.read
                            },
                            {
                                icon: mdiPlusThick,
                                title: {
                                    el: "",
                                    en: "New Transaction",
                                    it: ""
                                },
                                to: `/${this.lang}/storePanel/new-transaction`,
                                hide:
                                    !permissions.transactions.create ||
                                    !hideNewTransaction
                            },
                            {
                                icon: mdiCurrencyEur,
                                title: {
                                    el: "",
                                    en: "Transactions",
                                    it: ""
                                },
                                to: `/${this.lang}/storePanel/transactions?page=1`,
                                hide: !permissions.transactions.read
                            },
                            {
                                icon: mdiGift,
                                title: {
                                    el: "",
                                    en: "Redeem",
                                    it: ""
                                },
                                to: `/${this.lang}/storePanel/redeem`,
                                hide: !permissions.redemption.read
                            },
                            {
                                icon: mdiDatabaseSync,
                                title: {
                                    el: "",
                                    en: "History",
                                    it: ""
                                },
                                to: `/${this.lang}/storePanel/history`,
                                hide: !permissions.history.read
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
                        title: { el: "", en: "SETTINGS", it: "" },
                        children: [
                            {
                                icon: mdiPackageVariantClosed,
                                title: {
                                    el: "",
                                    en: "Products",
                                    it: ""
                                },
                                to: `/${this.lang}/storePanel/products`,
                                hide: !permissions.products.read
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
                                to: `/${this.lang}/storePanel/settings`,
                                hide: !permissions.settings.read
                            }
                        ]
                    }
                ];
            }
        }
    }
};
