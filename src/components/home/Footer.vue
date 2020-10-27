<template>
    <section id="footer">
        <footer class="b-footer">
            <v-container class="py-0">
                <v-row class="py-0">
                    <v-col cols="12" sm="6" class="py-0 px-4">
                        <v-img src="../../assets/home/trustpilot-logo.png" max-width="180px" width="100%"
                               class="mb-4"></v-img>
                        <p
                                style="background-color: rgba( 255, 255, 255, .2); border-radius: 150px"
                                class="mb-4 py-3 px-8"
                        >4.5 out of 5 based on <span style="color: #142752">2450 reviews</span></p>
                    </v-col>
                    <v-col cols="12" sm="6" lg="2" class="py-0 px-3">
                        <h6 class="b-list-title mb-3">USA</h6>
                        <p>3511 Silverside Road Suite 105, Wilmington 19810 </p>
                    </v-col>
                    <v-col cols="12" sm="6" lg="2" class="py-0 px-3">
                        <h6 class="b-list-title mb-3">Greece</h6>
                        <p>Ποσειδώνος 18 Καλλιθέα 17674 </p>
                    </v-col>
                    <v-col cols="12" sm="6" lg="2" class="py-0 px-3">
                        <h6 class="b-list-title mb-3">Italy</h6>
                        <p>Via Monte di Pietà 21 20121 Milano </p>
                    </v-col>
                </v-row>
                <v-row class="pa-0" style="margin-top: 80px">
                    <v-col cols="12" sm="6" class="py-0">
                        <p>© copyright 2020. RoadCube Inc.</p>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-0">
                        <ul class="text-right b-social-list">
                            <li>
                                <a href="https://www.facebook.com/roadcube/">
                                    <v-icon class="b-social-icon" v-text="icons.mdiFacebook"></v-icon>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/roadcube">
                                    <v-icon class="b-social-icon" v-text="icons.mdiTwitter"></v-icon>
                                </a>
                            </li>
                            <li>
                                <a href="https://cl.linkedin.com/company/roadcubeinc">
                                    <v-icon class="b-social-icon" v-text="icons.mdiLinkedin"></v-icon>
                                </a>
                            </li>
                        </ul>
                    </v-col>
                </v-row>
            </v-container>
        </footer>
    </section>
</template>

<script>
    import { mdiFacebook, mdiTwitter, mdiLinkedin } from "@mdi/js";

    export default {
        name: "Footer",
        data: () => ({
            icons: {
                mdiFacebook,
                mdiTwitter,
                mdiLinkedin
            }
        })
    };
</script>

<style scoped>
    .b-footer {
        background-repeat: no-repeat;
        background-position: top center;
        background-color: #0089f3;
        padding: 150px 0 50px 0;
    }

    p {
        display: inline-block;
        font-size: 17px;
        color: #ffffff;
        line-height: 1.9;
    }

    .b-list-title {
        color: #fff;
        font-weight: 700;
        font-size: 17px;
    }

    .b-list-item {
        color: #fff;
    }

    .b-social-list {
        list-style-type: none;
        list-style-position: inside;
    }

    .b-social-list li {
        display: inline-block;
        list-style-type: none;
        background: none;
        color: #fff;
        padding: 0;
        margin: 0 2px;
        transition: all .3s ease;
    }

    .b-social-list li a .b-social-icon {
        color: rgba(255, 255, 255, .4);
        transition: all .3s ease;
    }

    .b-social-list li a {
        text-decoration: none;
        background-color: rgba(255, 255, 255, .2);
        color: rgba(255, 255, 255, .4);
        width: 50px;
        height: 50px;
        display: block;
        font-size: 16px;
        line-height: 48px;
        text-align: center;
        position: relative;
        border: 0;
        border-radius: 50%;
        transition: all .3s ease;
    }

    .b-social-list li a:hover {
        background-color: #142752;
        color: #fff;
    }

    .b-social-list li a:hover .b-social-icon {
        color: #fff;
    }
</style>