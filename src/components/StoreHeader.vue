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

            <b-lang-menu v-model="lang"></b-lang-menu>

            <v-tooltip color="secondary" bottom>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                        <v-icon v-text="icons.mdiHelpCircleOutline"></v-icon>
                    </v-btn>
                </template>

                <span class="font-weight-bold">Help</span>
            </v-tooltip>

            <AppNotifications />

            <v-menu offset-y transition="slide-y-transition" nudge-bottom="2">
                <template v-slot:activator="{ on }">
                    <v-btn class="text-capitalize" height="50" text v-on="on">
                        <v-row no-gutters align="center">
                            <v-col cols="auto">
                                <v-avatar size="32" class="mr-2">
                                    <v-img :src="user.avatar"></v-img>
                                </v-avatar>
                            </v-col>

                            <v-col cols="auto" class="ml-1 mr-4">
                                <div>
                                    {{ user.full_name }}
                                </div>
                                <small class="green--text">{{
                                    user.role
                                }}</small>
                            </v-col>

                            <v-col cols="auto">
                                <v-icon v-text="icons.mdiChevronDown"></v-icon>
                            </v-col>
                        </v-row>
                    </v-btn>
                </template>

                <v-list dense>
                    <v-list-item color="red" @click="logout">
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
                            class="rounded-circle"
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
                        {{ storeName }}
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
                                    v-if="!item.hide"
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

                        <v-list-item
                            v-else-if="!item.hide"
                            :to="item.to"
                            :exact="item.exact"
                        >
                            <v-list-item-icon>
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon>

                            <v-list-item-title v-text="item.title[lang]">
                            </v-list-item-title>
                        </v-list-item>
                    </div>
                </v-list>
            </v-container>
        </v-navigation-drawer>
    </header>
</template>

<script>
import {
    mdiHelpCircleOutline,
    mdiChevronDown,
    mdiBellOutline,
    mdiLogout
} from "@mdi/js";

import AppNotifications from "@/components/general/AppNotifications.vue";
import navLinks from "@/utils/storePanel/navLinks";
import axios from "axios";

export default {
    name: "StoreHeader",

    components: { AppNotifications },

    mixins: [navLinks],

    data() {
        return {
            icons: {
                mdiHelpCircleOutline,
                mdiChevronDown,
                mdiBellOutline,
                mdiLogout
            },
            mini: false,
            drawer: false
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
            return this.$store.state.storePanel.loading;
        },

        user() {
            return this.$store.state.user;
        },

        logo() {
            return this.$store.state.storePanel.store.logo;
        },

        storeName() {
            return this.$store.state.storePanel.store.name;
        },

        containerHeight() {
            return this.mini ? "calc(100vh - 194px)" : "calc(100vh - 184px)";
        }
    },

    methods: {
        async logout() {
            try {
                const { data } = await axios.post(
                    "https://api.roadcube.tk/v1/users/logout"
                );

                localStorage.removeItem("storeId");
                localStorage.removeItem("companyId");
                localStorage.removeItem("accessToken");
                this.$router.push(`/${this.lang}/`);
            } catch (ex) {
                this.$router.push(`/${this.lang}/`);
                console.log(ex.response.data);
            }
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
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #555;
}
</style>
