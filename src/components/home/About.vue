<template>
    <section class="b-about-container">
        <v-container class="py-0">
            <v-row no-gutters class="px-4">
                <v-col cols="12" md="6" class="px-4">
                    <h2 data-aos="fade-right" class="b-about-title">
                        Upgrade your business .
                    </h2>
                    <p data-aos="fade-right" class="b-about-text mb-12">
                        Get a clear advantage over your competitors. Build your
                        loyalty fast and beat them to market. Find parters and
                        build synergies in 5 minutes when other businesses need
                        6-8 months of development. Don't worry about training
                        and support because we do it for you. You just see
                        reports and focus on your business.
                    </p>
                    <v-row data-aos="fade-right" no-gutters>
                        <v-col cols="auto" class="mr-6">
                            <h6 class="b-subtitle">Dimitris</h6>
                            <p class="b-about-text">
                                CEO, RoadCube Inc.
                            </p>
                        </v-col>
                        <v-col cols="auto">
                            <v-img
                                src="../../assets/home/sig.png"
                                max-width="138px"
                                width="100%"
                            ></v-img>
                        </v-col>
                    </v-row>
                    <v-img
                        data-aos="fade-right"
                        src="../../assets/home/img-abt2.jpg"
                        max-width="535px"
                        width="100%"
                        style="border-radius: 10px"
                        class="mt-12 mb-5 mb-md-0 mx-auto"
                    ></v-img>
                </v-col>

                <v-col cols="12" md="6" class="py-0 px-2 px-md-4">
                    <v-img
                        data-aos="fade-left"
                        src="../../assets/home/img-abt1.jpg"
                        max-width="535px"
                        width="100%"
                        style="border-radius: 10px"
                        class="mb-12 mx-auto"
                    ></v-img>
                    <h2 data-aos="fade-left" class="b-about-title">
                        We are RoadCube
                    </h2>

                    <v-expansion-panels data-aos="fade-left" flat>
                        <v-expansion-panel
                            v-for="faq in faqs"
                            :key="faq.title"
                            class="my-1"
                            style="background-color: transparent"
                        >
                            <v-expansion-panel-header
                                class="b-expansion-title"
                                :expand-icon="icons.mdiChevronDoubleDown"
                            >
                                <h3 v-text="faq.title"></h3>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content
                                class="b-expansion-content"
                            >
                                <p
                                    class="b-about-text ma-0"
                                    v-text="faq.text"
                                ></p>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
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
        },
        faqs: [
            {
                title: "Who we are?",
                text: `
                    RoadCube is a US based company specialized
                    in digital loyalty and synergies for all
                    sizes of businesses. We have presence in
                    USA, Italy and Greece.
                `
            },
            {
                title: "What is our mission?",
                text: `
                    Our mission is to change the way companies
                    interact with their clients and fix what is
                    broken from common software houses creating
                    loyalty schemes.
                `
            },
            {
                title: "What we believe?",
                text: `
                    We believe in simplicity and accuracy
                    because this is the only way to achieve the
                    perfect result.
                `
            }
        ]
    })
};
</script>

<style scoped>
.b-about-container {
    background-color: #c8f2fe;
    padding: 80px 0;
}

.b-about-title {
    color: rgba(20, 39, 82, 0.8);
    margin-bottom: 1.5rem;
    font-size: 28px;
    line-height: 1.4em;
    font-weight: 400;
}

.b-about-text {
    color: rgba(20, 39, 82, 0.8);
    font-size: 17px;
    line-height: 1.9;
    font-weight: 400;
}

.b-subtitle {
    color: #142752;
    font-size: 17px;
    font-weight: 700;
}

.b-expansion-title {
    background-color: white;
    border-radius: 30px;
}

.b-expansion-content {
    background-color: white;
    margin-top: 10px;
    border-radius: 30px;
    padding: 24px 0 12px;
}
</style>
