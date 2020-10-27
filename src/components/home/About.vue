<template>
    <section id="about" class="b-about">
        <v-container class="py-0">
            <v-row class="py-0 px-2 px-md-4">
                <v-col cols="12" md="6" class="py-0 px-2 px-md-4">
                    <p data-aos="fade-right" class="b-about-title">Upgrade your business . </p>
                    <p data-aos="fade-right" class="b-about-text mb-12">Get a clear advantage over your competitors. Build your loyalty fast and
                        beat them to market. Find parters and build synergies in 5 minutes when other businesses need
                        6-8 months of development. Don't worry about training and support because we do it for you. You
                        just see reports and focus on your business. </p>
                    <v-row data-aos="fade-right">
                        <v-col cols="auto" class="py-0 mr-6">
                            <h6>Dimitris</h6>
                            <p class="b-about-text">CEO, RoadCube Inc.</p>
                        </v-col>
                        <v-col cols="auto" class="py-0">
                            <v-img src="../../assets/home/sig.png" max-width="138px" width="100%"></v-img>
                        </v-col>
                    </v-row>
                    <v-img data-aos="fade-right" src="../../assets/home/img-abt2.jpg" max-width="535px" width="100%"
                           style="border-radius: 10px" class="mt-12 mb-5 mb-md-0 mx-auto"></v-img>
                </v-col>

                <v-col cols="12" md="6" class="py-0 px-2 px-md-4">
                    <v-img data-aos="fade-left" src="../../assets/home/img-abt1.jpg" max-width="535px" width="100%"
                           style="border-radius: 10px" class="mb-12 mx-auto"></v-img>
                    <p class="b-about-title" data-aos="fade-left">We are RoadCube</p>

                    <div data-aos="fade-left" class="b-collapse-tabs">
                        <v-expansion-panels flat>
                            <v-expansion-panel class="my-1" style="background-color: transparent">
                                <v-expansion-panel-header
                                        :expand-icon="icons.mdiChevronDoubleDown"
                                        style="background-color: white; border-radius: 30px"
                                >
                                    <h3> Who we are? </h3>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content
                                        class="pt-6 pb-3"
                                        style="background-color: white; margin-top: 10px; border-radius: 30px">
                                    <p class="b-about-text ma-0">
                                        RoadCube is a US based company specialized in digital loyalty and synergies for
                                        all sizes of businesses. We have presence in USA, Italy and Greece.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-1" style="background-color: transparent">
                                <v-expansion-panel-header
                                        :expand-icon="icons.mdiChevronDoubleDown"
                                        style="background-color: white; border-radius: 30px">
                                    <h3> What is our mission? </h3>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content
                                        class="pt-6 pb-3"
                                        style="background-color: white; margin-top: 10px; border-radius: 30px">
                                    <p class="b-about-text ma-0">
                                        Our mission is to change the way companies interact with their clients and fix
                                        what is broken from common software houses creating loyalty schemes.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="my-1" style="background-color: transparent">
                                <v-expansion-panel-header
                                        :expand-icon="icons.mdiChevronDoubleDown"
                                        style="background-color: white; border-radius: 30px">
                                    <h3> What we believe? </h3>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content
                                        class="pt-6 pb-3"
                                        style="background-color: white; margin-top: 10px; border-radius: 30px">
                                    <p class="b-about-text ma-0">
                                        We believe in simplicity and accuracy because this is the only way to achieve
                                        the perfect result.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
    import { mdiChevronDoubleDown } from "@mdi/js";

    export default {
        name: "About",
        data: () => ({
            icons: {
                mdiChevronDoubleDown
            }
        })
    };
</script>

<style scoped>
    .b-about {
        background-color: #c8f2fe;
        padding: 80px 0;
    }

    .b-about-title {
        margin-bottom: 1.5rem;
        font-size: 28px;
        line-height: 1.4em;
        font-weight: 400;
    }

    .b-about-text {
        font-size: 17px;
        line-height: 1.9;
        font-weight: 400;
    }

    .b-about h6 {
        font-size: 17px;
        font-weight: 700;
    }
</style>