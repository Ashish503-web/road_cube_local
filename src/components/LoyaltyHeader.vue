<template>
    <header>
        <v-app-bar app flat color="white">
            <v-app-bar-nav-icon @click.stop="mini = !mini"></v-app-bar-nav-icon>
            <v-col cols="4">
                <v-text-field
                    placeholder="Search..."
                    color="white"
                    flat
                    rounded
                    solo-inverted
                    dense
                    hide-details
                    clearable
                    :prepend-inner-icon="icons.mdiMagnify"
                ></v-text-field>
            </v-col>
            <v-col cols="2" class="pl-3">
                <v-menu
                    offset-y
                    min-width="96vw"
                    nudge-bottom="2"
                    transition="slide-y-reverse-transition"
                    bottom
                    :close-on-content-click="false"
                >
                    <template v-slot:activator="{ on }">
                        <v-btn
                            class="text-capitalize font-weight-regular"
                            color="secondary"
                            text
                            v-on="on"
                        >
                            Mega Menu
                            <v-icon v-text="icons.mdiChevronDown"></v-icon>
                        </v-btn>
                    </template>

                    <v-card>
                        <v-row no-gutters>
                            <v-col cols="10">
                                <v-row no-gutters>
                                    <v-col
                                        v-for="item in megaMenuItems"
                                        :key="item.title"
                                        cols="3"
                                        class="pa-1"
                                    >
                                        <v-card-title
                                            v-text="item.title"
                                            class="subtitle-1"
                                        ></v-card-title>
                                        <v-list dense>
                                            <v-list-item-group color="primary">
                                                <v-list-item
                                                    v-for="subItem in item.items"
                                                    :key="subItem"
                                                >
                                                    <v-list-item-title
                                                        v-text="subItem"
                                                    ></v-list-item-title>
                                                </v-list-item>
                                            </v-list-item-group>
                                        </v-list>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="2">
                                <v-img
                                    src="../assets/megamenu-img.png"
                                    width="150"
                                    class="mt-12"
                                ></v-img>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-menu>
            </v-col>

            <v-spacer></v-spacer>

            <v-menu offset-y transition="slide-y-transition" bottom>
                <template v-slot:activator="{ on }">
                    <v-btn
                        class="text-capitalize font-weight-regular"
                        text
                        v-on="on"
                    >
                        <img :src="lang.img" width="25" class="mr-1" />
                        {{ lang.title }}
                        <v-icon v-text="icons.mdiChevronDown"></v-icon>
                    </v-btn>
                </template>

                <v-list dense>
                    <v-list-item-group v-model="lang" color="primary">
                        <v-list-item
                            v-for="lang in langs"
                            :key="lang.title"
                            :value="lang"
                        >
                            <v-list-item-action class="mr-1">
                                <img :src="lang.img" width="25" />
                            </v-list-item-action>
                            <v-list-item-title
                                v-text="lang.title"
                            ></v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-menu>

            <v-btn text>
                <v-icon v-text="icons.mdiViewGridPlusOutline"></v-icon>
            </v-btn>

            <v-menu offset-y transition="slide-y-transition" bottom>
                <template v-slot:activator="{ on }">
                    <v-btn text v-on="on">
                        <v-badge color="red" content="3">
                            <v-icon v-text="icons.mdiBellOutline"></v-icon>
                        </v-badge>
                    </v-btn>
                </template>

                <v-card width="400">
                    <v-card-title class="subtitle-1">
                        Notifications
                        <v-spacer></v-spacer>
                        <router-link class="text-caption" to="/loyaltypanel"
                            >View all</router-link
                        >
                    </v-card-title>

                    <v-divider></v-divider>

                    <v-list subheader>
                        <v-list-item-group>
                            <v-list-item
                                v-for="notification in notifications"
                                :key="notification.title"
                                three-line
                            >
                                <v-list-item-avatar
                                    :color="notification.color"
                                    size="32"
                                >
                                    <v-icon
                                        v-if="notification.icon"
                                        dark
                                        size="20"
                                        v-text="notification.icon"
                                    ></v-icon>
                                    <v-img
                                        v-else
                                        :src="notification.img"
                                    ></v-img>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title
                                        v-text="notification.title"
                                    ></v-list-item-title>
                                    <v-list-item-subtitle
                                        v-text="notification.text"
                                    ></v-list-item-subtitle>
                                    <small class="grey--text text--darken-1">
                                        <v-icon
                                            v-text="icons.mdiClockOutline"
                                            small
                                        ></v-icon>
                                        {{ notification.timestamp }}
                                    </small>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-card>
            </v-menu>

            <v-menu offset-y bottom transition="slide-y-transition">
                <template v-slot:activator="{ on }">
                    <v-btn
                        class="text-capitalize font-weight-regular ml-3"
                        text
                        v-on="on"
                    >
                        <v-avatar size="32" class="mr-2">
                            <v-img
                                src="../assets/avatars/avatar-1.jpg"
                            ></v-img> </v-avatar
                        >Henry
                        <v-icon v-text="icons.mdiChevronDown"></v-icon>
                    </v-btn>
                </template>

                <v-list dense>
                    <v-list-item-group color="primary">
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

            <v-btn text icon @click.stop="drawer = !drawer">
                <v-icon v-text="icons.mdiCogOutline"></v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer
            app
            color="secondary"
            :mini-variant="mini"
            mini-variant-width="80"
            permanent
            dark
        >
            <v-toolbar color="secondary" flat>
                <v-toolbar-title class="mx-auto">
                    <v-img src="../assets/logo-light.png" width="90"></v-img>
                </v-toolbar-title>
            </v-toolbar>

            <v-container
                class="pa-0"
                style="height: calc(100vh - 64px); overflow: auto"
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

                    <v-list-item
                        v-for="item in navLink.children"
                        :key="item.title"
                        :to="item.to"
                        exact
                    >
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-title
                            v-text="item.title"
                        ></v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-container>
        </v-navigation-drawer>

        <v-navigation-drawer v-model="drawer" app right temporary>
            <v-toolbar flat>
                <v-toolbar-title>Settings</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon @click.stop="drawer = !drawer">
                    <v-icon>{{ icons.mdiClose }}</v-icon>
                </v-btn>
            </v-toolbar>
            <v-divider></v-divider>
        </v-navigation-drawer>
    </header>
</template>

<script>
import {
    mdiMagnify,
    mdiChevronDown,
    mdiViewGridPlusOutline,
    mdiBellOutline,
    mdiClockOutline,
    mdiLogout,
    mdiCogOutline,
    mdiClose,
    mdiCartOutline,
    mdiCheckDecagram,
    // mdiHome,
    // mdiHomeOutline,
    // mdiCalendarMonth,
    // mdiForumOutline,
    // mdiStorefrontOutline,
    // mdiCurrencyBtc,
    // mdiEmailOutline,
    // mdiFileDocumentOutline,
    // mdiWalletTravel,
    // mdiCalendarCheck,
    // mdiAccountDetails,
    mdiAccountOutline,
    mdiWalletOutline,
    mdiWrenchOutline,
    mdiLockOpenOutline
} from "@mdi/js";

import USFlag from "../assets/flags/US-flag.jpeg";
import FranceFlag from "../assets/flags/France-flag.jpeg";
import SpainFlag from "../assets/flags/Spain-flag.jpeg";
import ChinaFlag from "../assets/flags/China-flag.png";
import ArabicFlag from "../assets/flags/Arabic-flag.png";
import avatar3 from "../assets/avatars/avatar-3.jpg";
import avatar4 from "../assets/avatars/avatar-4.jpg";

export default {
    name: "LoyaltyHeader",

    data() {
        return {
            icons: {
                mdiMagnify,
                mdiChevronDown,
                mdiViewGridPlusOutline,
                mdiBellOutline,
                mdiClockOutline,
                mdiLogout,
                mdiCogOutline,
                mdiClose
            },
            mini: false,
            drawer: false,
            navLinks: [
                {
                    title: "MANAGE",
                    children: [
                        { icon: "", title: "Dashboard", to: "/loyaltyPanel" },
                        {
                            icon: "",
                            title: "Branch Debt",
                            to: "/loyaltyPanel/branch-debt"
                        },
                        {
                            icon: "",
                            title: "Branches",
                            to: "/loyaltyPanel/branches"
                        },
                        {
                            icon: "",
                            title: "Subscriptions",
                            to: "/loyaltyPanel/subscriptions"
                        },
                        {
                            icon: "",
                            title: "Collaborators",
                            to: "/loyaltyPanel/collaborators"
                        },
                        {
                            icon: "",
                            title: "Products",
                            to: "/loyaltyPanel/products"
                        },
                        {
                            icon: "",
                            title: "Customer",
                            to: "/loyaltyPanel/customer"
                        },
                        {
                            icon: "",
                            title: "User Rights",
                            to: "/loyaltyPanel/user-rights"
                        },
                        {
                            icon: "",
                            title: "Business Profile",
                            to: "/loyaltyPanel/business-profile"
                        },
                        {
                            icon: "",
                            title: "Business Statistics",
                            to: "/loyaltyPanel/business-statistics"
                        }
                    ]
                },
                {
                    title: "GIFT LIST",
                    children: [
                        {
                            icon: "",
                            title: "Category Management",
                            to: "/loyaltyPanel/category-management"
                        },
                        {
                            icon: "",
                            title: "Gift Status",
                            to: "/loyaltyPanel/gift-status"
                        },
                        {
                            icon: "",
                            title: "Catalog Management",
                            to: "/loyaltyPanel/catalog-management"
                        },
                        {
                            icon: "",
                            title: "Supplier Management",
                            to: "/loyaltyPanel/supplier-management"
                        }
                    ]
                },
                {
                    title: "PROMO ACTIONS",
                    children: [
                        {
                            icon: "",
                            title: "1+1 / Sampling",
                            to: "/loyaltyPanel/sampling"
                        },
                        {
                            icon: "",
                            title: "Receipt Scanning",
                            to: "/loyaltyPanel/receipt-scanning"
                        },
                        {
                            icon: "",
                            title: "Check In",
                            to: "/loyaltyPanel/check-in"
                        },
                        {
                            icon: "",
                            title: "Serial Shopping",
                            to: "/loyaltyPanel/serial-shopping"
                        },
                        {
                            icon: "",
                            title: "Contest & Survey",
                            to: "/loyaltyPanel/contest-survey"
                        },
                        {
                            icon: "",
                            title: "Roadcodes",
                            to: "/loyaltyPanel/roadcodes"
                        },
                        {
                            icon: "",
                            title: "Multiple Coupons",
                            to: "/loyaltyPanel/multiple-coupons"
                        }
                    ]
                },
                {
                    title: "ATTRACT CUSTOMERS",
                    children: [
                        {
                            icon: "",
                            title: "View Campaigns",
                            to: "/loyaltyPanel/view-campaigns"
                        },
                        {
                            icon: "",
                            title: "New Campaign",
                            to: "/loyaltyPanel/new-campaign"
                        }
                    ]
                }
            ],

            megaMenuItems: [
                {
                    title: "UI Components",
                    items: [
                        "Lightbox",
                        "Range Slider",
                        "Sweet Alert",
                        "Rating",
                        "Forms",
                        "Tables",
                        "Charts"
                    ]
                },
                {
                    title: "Applications",
                    items: [
                        "Ecommerce",
                        "Calendar",
                        "Email",
                        "Projects",
                        "Tasks",
                        "Contacts"
                    ]
                },
                {
                    title: "Extra Pages",
                    items: [
                        "Light Sidebar",
                        "Compact Sidebar",
                        "Horizontal Layout",
                        "Maintenance",
                        "Coming Soon",
                        "Timeline",
                        "FAQs"
                    ]
                },
                {
                    title: "UI Components 2",
                    items: [
                        "Lightbox",
                        "Range Slider",
                        "Sweet Alert",
                        "Rating",
                        "Forms",
                        "Tables",
                        "Charts"
                    ]
                }
            ],
            lang: {
                img: USFlag,
                title: "English",
                urlTitle: "en"
            },
            langs: [
                { img: USFlag, title: "English", urlTitle: "en" },
                { img: FranceFlag, title: "French", urlTitle: "fr" },
                { img: SpainFlag, title: "Spanish", urlTitle: "sp" },
                { img: ChinaFlag, title: "Chinese", urlTitle: "ch" },
                { img: ArabicFlag, title: "Arabic", urlTitle: "ar" }
            ],
            notifications: [
                {
                    img: "",
                    icon: mdiCartOutline,
                    color: "blue",
                    title: "Your order is placed",
                    text: "If several languages coalesce the grammar",
                    timestamp: "3 min ago"
                },
                {
                    img: avatar3,
                    icon: "",
                    title: "James Lemire",
                    text: "It will seem like simplified English.",
                    timestamp: "1 hours ago"
                },
                {
                    img: "",
                    icon: mdiCheckDecagram,
                    color: "green",
                    title: "Your item is shipped",
                    text: "If several languages coalesce the grammar",
                    timestamp: "3 min ago"
                },
                {
                    img: avatar4,
                    icon: "",
                    title: "Salena Layfield",
                    text: "As a skeptical Cambridge friend of mine occidental.",
                    timestamp: "1 hours ago"
                }
            ],
            profileLinks: [
                { icon: mdiAccountOutline, text: "Profile" },
                { icon: mdiWalletOutline, text: "My Wallet" },
                { icon: mdiWrenchOutline, text: "Settings" },
                { icon: mdiLockOpenOutline, text: "Lock Screen" }
            ]
        };
    }
};
</script>

<style scoped>
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
