<template>
    <div id="header">
        <v-app-bar app height="auto" elevate-on-scroll class="header">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-row
                no-gutters
                class="d-flex justify-space-between align-center container mx-auto py-0 px-0 px-sm-4 px-md-6 px-lg-10"
            >
                <v-col cols="auto">
                    <v-toolbar-title>
                        <v-img
                            class="white-logo"
                            src="@/assets/home/logo.png"
                            width="140"
                            height="20"
                        ></v-img>
                        <v-img
                            class="black-logo"
                            style="display: none"
                            src="@/assets/home/logo-sticky.png"
                            width="140"
                            height="23"
                        ></v-img>
                    </v-toolbar-title>
                </v-col>
                <v-col cols="auto" :hidden="$vuetify.breakpoint.smAndDown">
                    <v-toolbar-items class="d-flex align-center justify-center navigation">
                        <a href="#home" class="light-theme px-4 nav-link">home</a>
                        <a href="#products" class="light-theme px-4 nav-link"
                            >why roadcube</a
                        >
                        <a href="#about" class="light-theme px-4 nav-link">about</a>
                        <a href="#featuress" class="light-theme px-4 nav-link"
                            >features</a
                        >
                        <a href="#quote" class="light-theme px-4 nav-link">quote</a>
                        <a href="#cta" class="light-theme px-4 nav-link">contact</a>
                        <v-btn
                                class="text-capitalize pr-1 pl-0 ml-6 btn-hover"
                                height="auto"
                                rounded
                                to="/sign-in"
                        >
                            <p
                                    class="ma-0"
                                    style="
                                    padding: 15px 70px 15px 20px;
                                    font-size: 17px;
                                "
                            >
                                merchant login
                            </p>
                            <v-avatar size="38" class="icon-hover">
                                <v-icon
                                        size="24"
                                        color="#fff"
                                        v-text="icons.mdiArrowRight"
                                        class="right-icon"
                                ></v-icon>
                                <v-icon
                                        size="24"
                                        color="#001266"
                                        v-text="icons.mdiArrowRight"
                                        class="right-icon"
                                ></v-icon>
                            </v-avatar>
                        </v-btn>
                    </v-toolbar-items>
                </v-col>
                <v-col cols="auto" :hidden="$vuetify.breakpoint.mdAndUp">
                    <v-dialog
                        v-model="dialog"
                        fullscreen
                        hide-overlay
                        transition="scale-transition"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                color="transparent"
                                fab
                                depressed
                                small
                                v-bind="attrs"
                                v-on="on"
                            >
                                <v-icon v-text="icons.mdiMenu" x-large></v-icon>
                            </v-btn>
                        </template>
                        <v-card>
                            <v-toolbar light>
                                <v-toolbar-title>Roadcube</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-toolbar-items>
                                    <v-btn
                                        color="secondary"
                                        dark
                                        text
                                        @click="dialog = false"
                                    >
                                        <v-icon
                                            v-text="icons.mdiClose"
                                        ></v-icon>
                                    </v-btn>
                                </v-toolbar-items>
                            </v-toolbar>
                            <v-list>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            <a href="#home" @click="dialog = false">Home</a>
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-divider></v-divider>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            <a href="#products" @click="dialog = false">Why RoadCube</a>
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-divider></v-divider>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            <a href="#about" @click="dialog = false">About</a>
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-divider></v-divider>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            <a href="#featuress" @click="dialog = false">Features</a>
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-divider></v-divider>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            <a href="#quote" @click="dialog = false">Quote</a>
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-divider></v-divider>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            <a href="#cta" @click="dialog = false">Contact</a>
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-card>
                    </v-dialog>
                </v-col>
            </v-row>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" app>
            <v-list nav dense>
                <v-list-item to="/loyaltyPanel">
                    <v-list-item-title>Loyalty Panel</v-list-item-title>
                </v-list-item>
                <v-list-item to="/storePanel">
                    <v-list-item-title>Store Panel</v-list-item-title>
                </v-list-item>
                <v-list-item to="/sign-in">
                    <v-list-item-title>
                        sign in
                        <v-icon v-text="icons.mdiLogin"></v-icon>
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
import { mdiLogin, mdiArrowRight, mdiClose, mdiMenu } from "@mdi/js";

export default {
    name: "Header",
    data: () => ({
        drawer: false,
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        icons: { mdiLogin, mdiArrowRight, mdiClose, mdiMenu },
    }),
};


window.onscroll = function () {
    if(document.getElementById('header') !== null) {
        scrollFunction();
    }
};


function scrollFunction() {
    let btns = document.querySelectorAll(".light-theme");

    if (
        document.body.scrollTop > 10 ||
        document.documentElement.scrollTop > 10
    ) {
        document.querySelector(".header").classList.add("white-bg");
        document.querySelector(".black-logo").style.display = "block";
        document.querySelector(".white-logo").style.display = "none";
        for (let i = 0; i < btns.length; i++) {
            btns[i].classList.add("dark-theme");
        }
    } else {
        document.querySelector(".header").classList.remove("white-bg");
        document.querySelector(".black-logo").style.display = "none";
        document.querySelector(".white-logo").style.display = "block";
        for (let i = 0; i < btns.length; i++) {
            btns[i].classList.remove("dark-theme");
        }
    }
}

</script>

<style scoped>
a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
}

.theme--light.v-btn:hover::before {
    opacity: 0 !important;
}

.header {
    background-color: transparent !important;
    padding: 36px 0;
    transition: all 100ms ease-in-out;
}

.white-bg {
    background-color: white !important;
    padding: 6px 0;
}

.light-theme {
    color: white;
    opacity: 0.5;
}

.light-theme:hover {
    opacity: 1;
}

.light-theme.active {
    opacity: 1;
}

.dark-theme {
    color: black;
    opacity: 1;
}

.dark-theme:hover {
    color: #007bff;
}

.dark-theme.active {
    color: #007bff;
}

/*Hovered btn*/
.btn-hover {
    font-size: 1em;
    background-color: white !important;
    border-radius: 150px;
    transition: all 0.3s ease;
    overflow: hidden;
    box-shadow: none;
    border: 1px solid #e8eaee;
}

.btn-hover:hover {
    border: 1px solid #142752;
    background-color: #142752 !important;
}

.icon-hover {
    position: absolute;
    right: 0;
    display: flex;
    width: 40px !important;
    height: 40px !important;
    background-color: #c8f2fd !important;
    transition: all 0.3s ease;
    justify-items: center;
    justify-content: flex-end;
}

.icon-hover .right-icon {
    width: 40px !important;
}

.btn-hover:hover .icon-hover .right-icon {
    transform: translateX(100%);
}

.btn-hover:hover .icon-hover {
    background-color: #0089f3 !important;
}

.btn-hover:hover p {
    color: white;
}

/*Hovered btn*/
</style>
