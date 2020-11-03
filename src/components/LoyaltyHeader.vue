<template>
    <header>
        <v-app-bar app flat color="white">
            <v-app-bar-nav-icon
                @click.stop="
                    $vuetify.breakpoint.mdAndUp
                        ? (mini = !mini)
                        : (leftDrawer = !leftDrawer)
                "
            ></v-app-bar-nav-icon>

            <v-spacer></v-spacer>

            <b-lang-menu v-model="lang"></b-lang-menu>

            <v-menu offset-y bottom transition="slide-y-transition">
                <template v-slot:activator="{ on }">
                    <v-btn
                        class="text-capitalize secondary--text"
                        text
                        v-on="on"
                    >
                        <v-avatar size="32" class="mr-2">
                            <v-img :src="user.avatar"></v-img>
                        </v-avatar>
                        {{ user.full_name }}
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

            <v-btn text icon @click.stop="rightDrawer = !rightDrawer">
                <v-icon v-text="icons.mdiCogOutline"></v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer
            app
            color="secondary"
            v-model="leftDrawer"
            :mini-variant="mini"
            :mini-variant-width="80"
            :temporary="$vuetify.breakpoint.smAndDown"
            :permanent="$vuetify.breakpoint.mdAndUp"
            dark
        >
            <router-link :to="`/${lang}/`" class="d-block pa-3 home-link">
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
                    <v-skeleton-loader
                        :loading="loading"
                        type="image"
                        width="50"
                        height="50"
                        class="rounded-circle"
                    >
                        <v-img
                            :src="logo"
                            width="50"
                            height="50"
                            contain
                        ></v-img>
                    </v-skeleton-loader>
                </v-sheet>

                <v-col cols="12" class="text-center mt-3">
                    <v-skeleton-loader
                        v-if="loading"
                        type="heading"
                        class="mx-5"
                    ></v-skeleton-loader>
                    <h1 v-else class="subtitle-1 white--text">
                        {{ companyName }}
                    </h1>
                </v-col>
            </v-row>

            <v-divider></v-divider>

            <v-container
                class="pa-0"
                :style="{ height: containerHeight, overflow: 'auto' }"
            >
                <v-list
                    v-for="navLink in navLinks"
                    :key="navLink.title['en']"
                    dense
                    nav
                    :subheader="navLink.title['en'] !== 'MANAGE'"
                >
                    <v-subheader
                        class="text-caption"
                        :class="{ 'justify-center': mini }"
                        v-text="navLink.title[lang]"
                    ></v-subheader>

                    <div
                        v-for="item in navLink.children"
                        :key="item.title['en']"
                    >
                        <v-tooltip v-if="mini" color="secondary" right>
                            <template v-slot:activator="{ on }">
                                <v-list-item
                                    :to="item.to"
                                    :exact="item.exact"
                                    v-on="on"
                                >
                                    <v-list-item-icon>
                                        <v-icon v-text="item.icon"></v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-title
                                        v-text="item.title[lang]"
                                    ></v-list-item-title>
                                </v-list-item>
                            </template>

                            <span
                                class="font-weight-bold"
                                v-text="item.title[lang]"
                            ></span>
                        </v-tooltip>

                        <v-list-item v-else :to="item.to" :exact="item.exact">
                            <v-list-item-icon>
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon>
                            <v-list-item-title
                                v-text="item.title[lang]"
                            ></v-list-item-title>
                        </v-list-item>
                    </div>
                </v-list>
            </v-container>
        </v-navigation-drawer>

        <v-navigation-drawer v-model="rightDrawer" app right temporary>
            <v-toolbar flat>
                <v-toolbar-title>Settings</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon @click.stop="rightDrawer = !rightDrawer">
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
    mdiAccount,
    mdiAccountOutline,
    mdiWalletOutline,
    mdiWrenchOutline,
    mdiLockOpenOutline
} from "@mdi/js";

import navLinks from "@/utils/loyaltyPanel/navLinks";

export default {
    name: "LoyaltyHeader",

    mixins: [navLinks],

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
            leftDrawer: false,
            rightDrawer: false,
            profileLinks: [
                { icon: mdiAccountOutline, text: "Profile" },
                { icon: mdiWrenchOutline, text: "Settings" }
            ]
        };
    },

    computed: {
        lang: {
            get() {
                return this.$route.params.lang;
            },

            set(val) {
                if (val !== this.$route.params.lang)
                    this.$router.push(
                        `/${val}/` + this.$route.fullPath.slice(4)
                    );
            }
        },

        loading() {
            return this.$store.state.loyaltyPanel.loading;
        },

        user() {
            return this.$store.state.user;
        },

        logo() {
            return this.$store.state.loyaltyPanel.company.logo;
        },

        companyName() {
            return this.$store.state.loyaltyPanel.company.name;
        },

        containerHeight() {
            return this.mini ? "calc(100vh - 223px)" : "calc(100vh - 213px)";
        }
    }
};
</script>

<style>
.v-skeleton-loader__heading {
    width: 100% !important;
}
</style>

<style scoped>
.home-link:hover {
    background-color: #1bbae1 !important;
}

::-webkit-scrollbar {
    width: 4px;
}

::-webkit-scrollbar-track {
    background: #2a3042;
}

::-webkit-scrollbar-thumb {
    background: grey;
}
</style>
