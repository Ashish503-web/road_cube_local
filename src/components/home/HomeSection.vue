<template>
    <section id="home" class="b-home-section">
        <v-container class="py-0 px-2 px-md-4">
            <v-row class="d-flex align-center justify-center px-2 px-md-4">
                <v-col
                    data-aos="fade-up"
                    cols="12"
                    md="6"
                    class="py-0 px-2 px-md-4"
                >
                    <h1 class="mb-6 white--text">
                        Loyalty & Synergies Made Right
                    </h1>
                    <p
                        class="white--text mb-12"
                        style="line-height: 1.9em; font-size: 17px; width: 75%"
                    >
                        Increase your customer retention with the most advanced
                        loyalty platform and reduce your customer acquisition
                        cost with our synergy tool.
                    </p>
                    <v-btn
                        class="text-capitalize pr-1 pl-0 b-btn-hover"
                        height="auto"
                        rounded
                        href="#products"
                    >
                        <p
                            class="ma-0"
                            style="
                                padding: 15px 70px 15px 20px;
                                font-size: 17px;
                                line-height: normal;
                                text-transform: none;
                            "
                        >
                            Learn More
                        </p>
                        <v-avatar size="38" class="b-icon-hover">
                            <v-icon
                                size="24"
                                color="#fff"
                                v-text="icons.mdiArrowRight"
                                class="b-right-icon"
                            ></v-icon>
                            <v-icon
                                size="24"
                                color="#001266"
                                v-text="icons.mdiArrowRight"
                                class="b-right-icon"
                            ></v-icon>
                        </v-avatar>
                    </v-btn>
                </v-col>
                <v-col
                    data-aos="fade-left"
                    cols="12"
                    md="6"
                    class="px-4 px-md-8 py-0 mt-5 mt-md-0"
                    style="position: relative"
                >
                    <v-img
                        max-width="100%"
                        style="vertical-align: middle; border-style: none"
                        src="../../assets/home/video-bg-img.png"
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
                                    :fullscreen="$vuetify.breakpoint.smAndDown"
                                    width="60%"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <a
                                            href="javascript:void(0);"
                                            id="play"
                                            v-bind="attrs"
                                            v-on="on"
                                            class="b-video b-video-popup mfp-iframe d-flex justify-center align-center"
                                            data-lity
                                        >
                                            <img
                                                src="../../assets/home/play-button-arrowhead.svg"
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
        </v-container>
    </section>
</template>

<script>
import {
    mdiArrowRight,
    mdiCheckCircleOutline,
    mdiClockOutline,
    mdiPlay,
    mdiClose
} from "@mdi/js";

export default {
    name: "HomeSection",
    data() {
        return {
            icons: {
                mdiCheckCircleOutline,
                mdiArrowRight,
                mdiClockOutline,
                mdiPlay,
                mdiClose
            },
            dialog: false
        };
    }
};

setTimeout(() => {
    let playBtn = document.querySelector("#play");

    playBtn.addEventListener("click", function() {
        let video = document.querySelector("#video");
        let closeBtn = document.querySelector("#close-video-modal");

        closeBtn.addEventListener("click", function() {
            video.setAttribute("src", "");
        });

        video.setAttribute("src", "https://www.youtube.com/embed/VPgs9UVpJdM");
    });
}, 0);
</script>

<style scoped>
h1 {
    font-size: 2.8em;
    line-height: 1.3em;
}

.b-home-section {
    padding: 160px 0;
    background-color: #0089f3;
    background-image: url("../../assets/home/hero-trans.png"),
        url("../../assets/home/hero-bottom.png");
    background-repeat: no-repeat no-repeat;
    background-position: center top, center bottom;
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

/*Hovered btn*/

.b-btn-hover {
    font-size: 1em;
    background-color: white !important;
    border-radius: 150px;
    transition: all 0.3s ease;
    overflow: hidden;
    box-shadow: none;
    border: 1px solid #e8eaee;
}

.b-btn-hover:hover {
    border: 1px solid #142752;
    background-color: #142752 !important;
}

.b-icon-hover {
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

.b-icon-hover .b-right-icon {
    width: 40px !important;
}

.b-btn-hover:hover .b-icon-hover .b-right-icon {
    transform: translateX(100%);
}

.b-btn-hover:hover .b-icon-hover {
    background-color: #0089f3 !important;
}

.b-btn-hover:hover p {
    color: white;
}

/*Hovered btn*/
</style>
