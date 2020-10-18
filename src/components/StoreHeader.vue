<template>
    <header>
        <v-app-bar app flat color="white">
            <v-app-bar-nav-icon
                @click="
                    $vuetify.breakpoint.mdAndUp
                        ? (mini = !mini)
                        : (drawer = !drawer)
                "
            ></v-app-bar-nav-icon>

            <v-spacer></v-spacer>

            <b-lang-menu></b-lang-menu>

            <v-tooltip color="secondary" bottom>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                        <v-icon
                            size="28"
                            v-text="icons.mdiHelpCircleOutline"
                        ></v-icon>
                    </v-btn>
                </template>

                <span>Help</span>
            </v-tooltip>

            <v-menu offset-y transition="slide-y-transition">
                <template v-slot:activator="{ on }">
                    <v-btn class="text-capitalize" text v-on="on">
                        <v-avatar size="32" class="mr-2">
                            <v-img
                                src="../assets/avatars/avatar-1.jpg"
                            ></v-img> </v-avatar
                        >Henry
                        <v-icon v-text="icons.mdiChevronDown"></v-icon>
                    </v-btn>
                </template>

                <v-list dense>
                    <v-list-item-group color="secondary">
                        <v-list-item
                            v-for="link in profileLinks"
                            :key="link.title"
                        >
                            <v-list-item-icon class="mr-3">
                                <v-icon v-text="link.icon"></v-icon>
                            </v-list-item-icon>
                            <v-list-item-title
                                v-text="link.text"
                            ></v-list-item-title>
                        </v-list-item>

                        <v-divider class="my-1"></v-divider>

                        <v-list-item color="red">
                            <v-list-item-icon class="mr-3">
                                <v-icon
                                    color="red"
                                    v-text="icons.mdiLogout"
                                ></v-icon>
                            </v-list-item-icon>
                            <v-list-item-title class="red--text"
                                >Logout</v-list-item-title
                            >
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-menu>
        </v-app-bar>

        <v-navigation-drawer
            app
            color="secondary"
            v-model="drawer"
            :mini-variant="mini"
            mini-variant-width="80"
            :temporary="$vuetify.breakpoint.smAndDown"
            :permanent="$vuetify.breakpoint.mdAndUp"
            dark
        >
            <router-link to="/" class="d-block pa-3 home-link">
                <v-img
                    src="../assets/loyalty-logo.png"
                    class="mx-auto"
                    width="70%"
                    contain
                ></v-img>
            </router-link>

            <v-divider></v-divider>

            <v-row class="pt-4 pb-3" no-gutters justify="center">
                <v-sheet light class="pa-2 rounded-circle">
                    <v-img :src="logo" width="50"></v-img>
                </v-sheet>

                <v-col cols="12" class="text-center mt-3">
                    <h1 class="subtitle-1 white--text">{{ storeName }}</h1>
                </v-col>
            </v-row>

            <v-divider></v-divider>

            <v-container
                class="pa-0"
                :style="{ height: containerHeight, overflow: 'auto' }"
            >
                <v-list
                    v-for="navLink in navLinks"
                    :key="navLink.title"
                    dense
                    nav
                    :subheader="navLink.title !== 'MANAGE'"
                >
                    <v-subheader
                        class="text-caption"
                        :class="{ 'justify-center': mini }"
                        v-text="navLink.title"
                    ></v-subheader>

                    <div v-for="item in navLink.children" :key="item.title">
                        <v-tooltip v-if="mini" color="secondary" right>
                            <template v-slot:activator="{ on }">
                                <v-list-item :to="item.to" exact v-on="on">
                                    <v-list-item-icon>
                                        <v-icon v-text="item.icon"></v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-title
                                        v-text="item.title"
                                    ></v-list-item-title>
                                </v-list-item>
                            </template>

                            <span
                                class="font-weight-bold"
                                v-text="item.title"
                            ></span>
                        </v-tooltip>

                        <v-list-item v-else :to="item.to" exact>
                            <v-list-item-icon>
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon>
                            <v-list-item-title
                                v-text="item.title"
                            ></v-list-item-title>
                        </v-list-item>
                    </div>
                </v-list>
            </v-container>
        </v-navigation-drawer>
    </header>
</template>

<script>
import {
    mdiPower,
    mdiWeb,
    mdiHelpCircleOutline,
    mdiChartBar,
    mdiPlusThick,
    mdiCurrencyEur,
    mdiGift,
    mdiDatabaseSync,
    mdiTrophyVariant,
    mdiPackageVariantClosed,
    mdiTagMultiple,
    mdiCog,
    mdiMagnify,
    mdiChevronDown,
    mdiViewGridPlusOutline,
    mdiBellOutline,
    mdiClockOutline,
    mdiLogout,
    mdiCogOutline,
    mdiCartOutline,
    mdiCheckDecagram,
    mdiAccountOutline,
    mdiWalletOutline,
    mdiWrenchOutline,
    mdiLockOpenOutline
} from "@mdi/js";

import avatar3 from "@/assets/avatars/avatar-3.jpg";
import avatar4 from "@/assets/avatars/avatar-4.jpg";

export default {
    name: "StoreHeader",

    data() {
        return {
            icons: {
                mdiPower,
                mdiWeb,
                mdiHelpCircleOutline,
                mdiMagnify,
                mdiChevronDown,
                mdiViewGridPlusOutline,
                mdiBellOutline,
                mdiClockOutline,
                mdiLogout,
                mdiCogOutline
            },
            mini: false,
            drawer: false,
            navLinks: [
                {
                    title: "USE",
                    children: [
                        { icon: mdiChartBar, title: "Home", to: "/storePanel" },
                        {
                            icon: mdiPlusThick,
                            title: "New Transaction",
                            to: "/storePanel/new-transaction"
                        },
                        {
                            icon: mdiCurrencyEur,
                            title: "Transactions",
                            to: "/storePanel/transactions/pending"
                        },
                        {
                            icon: mdiGift,
                            title: "Redeem",
                            to: "/storePanel/redeem/redeem-voucher"
                        },
                        {
                            icon: mdiDatabaseSync,
                            title: "History",
                            to: "/storePanel/history/point-analysis"
                        },
                        {
                            icon: mdiTrophyVariant,
                            title: "Contests",
                            to: "/storePanel/contests"
                        }
                    ]
                },
                {
                    title: "SETTINGS",
                    children: [
                        {
                            icon: mdiPackageVariantClosed,
                            title: "Products",
                            to: "/storePanel/products"
                        },
                        {
                            icon: mdiTagMultiple,
                            title: "Coupons",
                            to: "/storePanel/coupons/with-transactions"
                        },
                        {
                            icon: mdiCog,
                            title: "Settings",
                            to: "/storePanel/settings/profile"
                        }
                    ]
                }
            ],

            profileLinks: [
                { icon: mdiAccountOutline, text: "Profile" },
                { icon: mdiWalletOutline, text: "My Wallet" },
                { icon: mdiWrenchOutline, text: "Settings" },
                { icon: mdiLockOpenOutline, text: "Lock Screen" }
            ]
        };
    },

    computed: {
        logo() {
            return this.$store.state.storePanel.store.logo;
        },

        storeName() {
            return this.$store.state.storePanel.store.name;
        },

        containerHeight() {
            return this.mini ? "calc(100vh - 194px)" : "calc(100vh - 184px)";
        }
    }
};
</script>

<style scoped>
.home-link:hover {
    background-color: #1bbae1 !important;
}

::-webkit-scrollbar {
    width: 4px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #555;
}
</style>
