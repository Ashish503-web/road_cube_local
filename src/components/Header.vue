<template>
    <div id="header">
        <v-app-bar
            app
            height="134"
            elevate-on-scroll
            shrink-on-scroll
            class="b-header"
            :class="scrolled ? 'b-bg-white' : 'b-bg-transparent'"
        >
            <v-container class="pa-0" style="min-height: 66px; height: 100%;">
                <v-row
                    no-gutters
                    justify="space-between"
                    align="center"
                    style="height: 100%"
                    class="px-10"
                >
                    <v-col cols="auto">
                        <v-toolbar-title class="pa-0">
                            <router-link :to="`/${lang}/`">
                                <v-img
                                    :src="scrolled ? blackLogo : whiteLogo"
                                    width="140"
                                    height="20"
                                ></v-img>
                            </router-link>
                        </v-toolbar-title>
                    </v-col>

                    <v-col cols="auto" :hidden="$vuetify.breakpoint.smAndDown">
                        <a
                            v-for="link in navLinks"
                            :key="link.href"
                            :href="link.href"
                            v-text="link.text"
                            class="b-nav-link"
                            :class="[
                                scrolled
                                    ? 'b-nav-link--dark'
                                    : 'b-nav-link--light',
                                { 'b-active': link.href === $route.hash }
                            ]"
                        ></a>

                        <b-animating-btn
                            text="merchant login"
                            icon="mdiArrowRight"
                            class="ml-6"
                            :to="`/${lang}/sign-in`"
                        ></b-animating-btn>
                    </v-col>

                    <v-col cols="auto" :hidden="$vuetify.breakpoint.mdAndUp">
                        <v-dialog
                            v-model="dialog"
                            fullscreen
                            hide-overlay
                            transition="scale-transition"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn dark icon v-bind="attrs" v-on="on">
                                    <v-icon
                                        size="28"
                                        v-text="icons.mdiMenu"
                                    ></v-icon>
                                </v-btn>
                            </template>

                            <v-card>
                                <v-toolbar flat>
                                    <v-toolbar-title>Roadcube</v-toolbar-title>
                                    <v-spacer></v-spacer>
                                    <v-btn icon @click="dialog = false">
                                        <v-icon
                                            v-text="icons.mdiClose"
                                        ></v-icon>
                                    </v-btn>
                                </v-toolbar>

                                <v-list>
                                    <v-divider></v-divider>
                                    <v-list-item
                                        v-for="link in navLinks"
                                        :key="link.href"
                                        class="b-bottom-outlined"
                                    >
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                <a
                                                    :href="link.href"
                                                    v-text="link.text"
                                                    @click="dialog = false"
                                                ></a>
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-card>
                        </v-dialog>
                    </v-col>
                </v-row>
            </v-container>
        </v-app-bar>
    </div>
</template>

<script>
import { mdiClose, mdiMenu } from "@mdi/js";
import whiteLogo from "@/assets/home/logo.png";
import blackLogo from "@/assets/home/logo-sticky.png";

export default {
    name: "Header",

    data: () => ({
        icons: { mdiClose, mdiMenu },
        whiteLogo,
        blackLogo,
        navLinks: [
            { href: "#home", text: "home" },
            { href: "#products", text: "why roadcube" },
            { href: "#about", text: "about" },
            { href: "#featuress", text: "features" },
            { href: "#quote", text: "quote" },
            { href: "#cta", text: "contact" }
        ],
        dialog: false,
        scrolled: false
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        }
    },

    methods: {
        hasScroll() {
            return (
                document.body.scrollTop > 10 ||
                document.documentElement.scrollTop > 10
            );
        },

        scrollFunction() {
            if (document.getElementById("header") !== null) {
                if (this.hasScroll()) {
                    this.scrolled = true;
                } else {
                    this.scrolled = false;
                }
            }
        }
    },

    watch: {
        $route(val) {
            console.log(val);
        }
    },

    mounted() {
        window.onscroll = this.scrollFunction;
    }
};
</script>

<style scoped>
.b-header {
    min-height: 74px;
    transition: all 200ms linear;
}

.b-bg-transparent {
    background-color: transparent !important;
}

.b-bg-white {
    background-color: white !important;
}

.b-bottom-outlined {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.b-nav-link {
    padding: 0 16px;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
}

.b-nav-link--light {
    color: white;
    opacity: 0.5;
}

.b-nav-link--light:hover {
    opacity: 1;
}

.b-nav-link--light.b-active {
    opacity: 1;
}

.b-nav-link--dark {
    color: black;
    opacity: 1;
}

.b-nav-link--dark:hover {
    color: #007bff;
}

.b-nav-link--dark.b-active {
    color: #007bff;
}
</style>
