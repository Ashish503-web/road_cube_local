<template>
    <v-container fluid class="b-signin-container">
        <header class="py-12">
            <v-row no-gutters justify="center">
                <v-col cols="8">
                    <v-row no-gutters justify="space-between">
                        <v-col cols="auto">
                            <router-link :to="`/${lang}/`">
                                <img
                                    src="@/assets/home/logo.png"
                                    width="140"
                                    height="20"
                                    style="vertical-align: middle"
                                />
                            </router-link>
                        </v-col>

                        <v-col cols="auto">
                            <a href="#" class="b-nav-link">HOME</a>
                            <a href="#" class="b-nav-link">WHY ROADCUBE</a>
                            <a href="#" class="b-nav-link">ABOUT</a>
                            <a href="#" class="b-nav-link">FEATURES</a>
                            <a href="#" class="b-nav-link">QUOTE</a>
                            <a href="#" class="b-nav-link">CONTACT</a>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </header>

        <v-row no-gutters justify="center">
            <v-col cols="8">
                <v-row no-gutters justify="space-between">
                    <v-col cols="5" data-aos="fade-up">
                        <v-card flat dark style="background: transparent">
                            <v-card-title
                                class="text-h4 font-weight-medium pl-0"
                            >
                                Welcome
                            </v-card-title>
                            <v-card-subtitle
                                class="font-weight-medium white--text pl-0"
                                style="font-size: 1rem"
                                >enter your phone and password</v-card-subtitle
                            >

                            <v-form
                                v-model="valid"
                                class="pr-8"
                                @submit.prevent="signIn"
                            >
                                <v-text-field
                                    v-model="mobile"
                                    v-mask="'##########'"
                                    type="number"
                                    label="Mobile Phone"
                                    color="secondary"
                                    class="mt-5"
                                    light
                                    solo
                                    flat
                                    dense
                                    rounded
                                    clearable
                                    :success="success.mobile"
                                    :rules="rules.mobile"
                                ></v-text-field>

                                <v-text-field
                                    v-model="password"
                                    ref="password"
                                    :type="showPassword ? 'text' : 'password'"
                                    class="mt-1"
                                    label="Password"
                                    color="secondary"
                                    light
                                    solo
                                    flat
                                    dense
                                    rounded
                                    clearable
                                    hide-details="auto"
                                    :append-icon="icons.mdiEye"
                                    :success="success.password"
                                    :rules="rules.password"
                                    @click:append="showPassword = !showPassword"
                                >
                                </v-text-field>

                                <v-alert
                                    v-if="errorMessage"
                                    type="error"
                                    class="mt-5"
                                    >{{ errorMessage }}</v-alert
                                >

                                <div class="text-right">
                                    <a
                                        class="text-decoration-none white--text"
                                        style="font-size: 0.875rem"
                                        @click="forgotPassword()"
                                        >Forgot your password?</a
                                    >
                                </div>

                                <b-animating-btn
                                    type="submit"
                                    text="login user"
                                    icon="mdiArrowRight"
                                    class="mt-7"
                                    small
                                    :loading="loading"
                                    :disabled="disabled"
                                ></b-animating-btn>
                            </v-form>
                        </v-card>
                    </v-col>

                    <v-col
                        cols="5"
                        data-aos="fade-left"
                        style="position: relative"
                    >
                        <v-img
                            max-width="100%"
                            src="@/assets/home/video-bg-img.png"
                        ></v-img>

                        <div class="b-wrapper">
                            <div class="b-video-main">
                                <div class="b-promo-video">
                                    <div class="b-waves-block">
                                        <div class="b-waves b-wave-1"></div>
                                        <div class="b-waves b-wave-2"></div>
                                        <div class="b-waves b-wave-3"></div>
                                    </div>
                                </div>

                                <div class="text-center">
                                    <v-dialog
                                        v-model="dialog"
                                        :fullscreen="
                                            $vuetify.breakpoint.smAndDown
                                        "
                                        width="60%"
                                    >
                                        <template
                                            v-slot:activator="{ on, attrs }"
                                        >
                                            <a
                                                href="javascript:void(0);"
                                                id="play"
                                                v-bind="attrs"
                                                v-on="on"
                                                class="b-video b-video-popup mfp-iframe d-flex justify-center align-center"
                                                data-lity
                                            >
                                                <img
                                                    src="@/assets/home/play-button-arrowhead.svg"
                                                    class="play-btn"
                                                />
                                            </a>
                                        </template>
                                        <button id="close">Close</button>
                                        <v-icon
                                            class="b-video-close-btn"
                                            id="close-video-modal"
                                            @click="dialog = false"
                                            color="white"
                                            v-text="icons.mdiClose"
                                        ></v-icon>
                                        <v-card class="b-video-dialog">
                                            <iframe
                                                id="video"
                                                width="100%"
                                                height="100%"
                                                src="https://www.youtube.com/embed/VPgs9UVpJdM"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowfullscreen
                                            ></iframe>
                                        </v-card>
                                    </v-dialog>
                                </div>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mdiEye, mdiArrowRight } from "@mdi/js";
import axios from "axios";
import { mapMutations } from "vuex";

export default {
    name: "SignIn",

    // beforeRouteEnter(to, from, next) {
    //     next(vm => {
    //         setTimeout(() => {
    //             if (vm.$store.state.auth.user._id) {
    //                 vm.$router.push("/");
    //             }
    //         }, 300);
    //     });
    // },

    data() {
        return {
            icons: { mdiEye, mdiArrowRight },
            valid: false,
            disabled: true,
            loading: false,
            errorMessage: "",
            mobile: "6904242444",
            password: "secret",
            showPassword: false,
            success: {
                mobile: false,
                password: false,
            },
            rules: {
                mobile: [
                    (v) => {
                        if (v) {
                            this.success.mobile = true;
                            return true;
                        } else {
                            return "Mobile Phone is required";
                        }
                    },
                    (v) =>
                        (v || "").length === 10 ||
                        "Mobile Phone must be 10 characters long",
                ],
                password: [
                    (v) => {
                        if (v) {
                            this.success.password = true;
                            return true;
                        } else {
                            return "Password is required";
                        }
                    },
                    (v) =>
                        (v || "").length >= 5 ||
                        "Password must be 6 characters long",
                ],
            },
            dialog: false,
        };
    },

    computed: {
        lang() {
            return this.$route.params.lang;
        },
    },

    methods: {
        ...mapMutations(["setAccessToken", "setUser"]),

        async signIn() {
            try {
                this.loading = true;

                const { data } = await axios.post(
                    `${process.env.VUE_APP_DEFAULT_API_URL}/users/login`,
                    {
                        app_provider_id: 1,
                        mobile: this.mobile,
                        password: this.password,
                    }
                );

                console.log(data);

                localStorage.setItem("accessToken", data.access_token);
                this.setAccessToken(data.access_token);
                this.setUser(data.extra_data.user);
                this.$router.push(`/${this.lang}/user-stores`);
            } catch (ex) {
                this.loading = false;
                this.errorMessage = ex.response.data.message;
                setTimeout(() => (this.errorMessage = ""), 5000);
            }
        },

        forgotPassword() {
            this.$router.push("/password-recovery");
        },
    },

    watch: {
        valid(val) {
            if (val) {
                this.disabled = false;
            } else {
                this.disabled = true;
            }
        },
    },
};
</script>

<style>
.v-label {
    font-size: 0.885rem;
    font-weight: 500;
}
</style>

<style scoped>
.b-signin-container {
    height: 100%;
    padding: 0;
    background-color: #0089f3;
    background-image: url("../assets/home/hero-trans.png"),
        url("../assets/home/hero-bottom.png");
    background-repeat: no-repeat no-repeat;
    background-position: center top, center bottom;
}

.b-nav-link {
    padding: 0 16px;
    color: white;
    text-decoration: none;
    opacity: 0.5;
    font-size: 14px;
    font-weight: 600;
}

.b-nav-link:hover {
    opacity: 1;
}

.b-wrapper {
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.b-video-main {
    position: relative;
    display: inline-block;
}

.b-video {
    height: 100px;
    width: 100px;
    line-height: 95px;
    text-align: center;
    border-radius: 100%;
    color: #fff;
    display: inline-block;
    background: #001266;
    z-index: 999;
}

.play-btn {
    width: 32px;
}

@keyframes waves {
    0% {
        -webkit-transform: scale(0.2, 0.2);
        transform: scale(0.2, 0.2);
        opacity: 0;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    }
    50% {
        opacity: 0.9;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=90)";
    }
    100% {
        -webkit-transform: scale(0.9, 0.9);
        transform: scale(0.9, 0.9);
        opacity: 0;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    }
}

.fa-play:before {
    content: "\f04b";
}

.b-waves {
    position: absolute;
    width: 200px;
    height: 200px;
    background: rgba(71, 61, 95, 0.7);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    border-radius: 100%;
    top: -50px;
    left: -50px;
    z-index: -1;
    -webkit-animation: waves-data-v-5de664c6 3s ease-in-out infinite;
    animation: waves-data-v-5de664c6 3s ease-in-out infinite;
}

.b-wave-1 {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
}

.b-wave-2 {
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
}

.b-wave-3 {
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
}

.b-video-dialog {
    max-width: 960px;
    margin: 0 auto;
    height: calc(100vw / 2.96);
}

.b-video-close-btn {
    width: auto;
    background-color: transparent;
    position: absolute;
    top: 20px;
    right: 20px;
}

.b-video-close-btn::before {
    background-color: transparent !important;
}
</style>
