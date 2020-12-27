<template>
    <section style="padding-bottom: 100px">
        <!-- v-if="$vuetify.breakpoint.mdAndUp" -->
        <v-row no-gutters justify="center" class="b-tabs">
            <v-col cols="auto" class="b-tab-item"
                >Loyalty Without Development</v-col
            >
            <v-divider vertical></v-divider>
            <v-col cols="auto" class="b-tab-item">Synergies Simplified</v-col>
            <v-divider vertical></v-divider>
            <v-col cols="auto" class="b-tab-item">
                More Client Registrations
            </v-col>
        </v-row>

        <div
            v-for="(service, i) in services"
            :key="service.title"
            style="padding-top: 100px"
        >
            <v-container v-if="i === 1">
                <v-row justify="center" align="center" class="px-2 px-md-4">
                    <v-col
                        data-aos="fade-left"
                        cols="12"
                        md="5"
                        class="py-0 px-2 px-md-4"
                    >
                        <v-img
                            :src="service.titleImage"
                            max-width="101px"
                            width="100%"
                            height="auto"
                            class="mb-6"
                        ></v-img>
                        <h2 class="b-title" v-text="service.title"></h2>
                        <p class="b-text" v-text="service.text"></p>
                        <b-animating-btn
                            :text="service.btnText"
                            icon="mdiArrowRight"
                        ></b-animating-btn>
                    </v-col>
                    <v-col
                        data-aos="fade-right"
                        cols="12"
                        md="7"
                        class="py-0 px-2 px-md-4 d-flex justify-md-end justify-center"
                    >
                        <v-img
                            :src="service.img"
                            max-width="505px"
                            width="100%"
                            height="auto"
                        ></v-img>
                    </v-col>
                </v-row>
            </v-container>

            <v-container v-else>
                <v-row justify="center" align="center" class="px-2 px-md-4">
                    <v-col
                        data-aos="fade-right"
                        cols="12"
                        md="7"
                        class="py-0 px-2 px-md-4"
                    >
                        <v-img
                            :src="service.img"
                            width="100%"
                            max-width="530px"
                            height="auto"
                        ></v-img>
                    </v-col>
                    <v-col
                        data-aos="fade-left"
                        cols="12"
                        md="5"
                        class="py-0 px-2 px-md-4"
                    >
                        <v-img
                            :src="service.titleImage"
                            max-width="101px"
                            width="100%"
                            height="auto"
                            class="mb-6"
                        ></v-img>
                        <h2 class="b-title" v-text="service.title"></h2>
                        <p class="b-text" v-text="service.text"></p>
                        <b-animating-btn
                            :text="service.btnText"
                            icon="mdiArrowRight"
                        ></b-animating-btn>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </section>
</template>

<script>
import loyaltyImage from "@/assets/home/img-healthins.png";
import sinergiesImage from "@/assets/home/img-travelins.png";
import sinergiesTitleImage from "@/assets/home/icon-plane.png";
import clientsImage from "@/assets/home/img-petins.png";
import clientsTitleImage from "@/assets/home/icon-pet.png";

export default {
    name: "Products",

    data: () => ({
        services: [
            {
                img: loyaltyImage,
                titleImage: null,
                title: "Loyalty Without Development",
                text: `
                    Customize your loyalty platform without the development
                    costs and delays of a software house. We make your
                    custom loyalty scheme with our special modules and you
                    just cover your monthly subscription.
                `,
                btnText: "Get a quote"
            },
            {
                img: sinergiesImage,
                titleImage: sinergiesTitleImage,
                title: "Synergies Simplified",
                text: `
                    Bring partners companies on your loyalty system with a 
                    simple e-mail invite and share common clients from both 
                    customer bases. Seting up a synergy takes 5 minutes without 
                    development costs and long delays.Let your competitors work 
                    for months to compete you.
                `,
                btnText: "Get a quote"
            },
            {
                img: clientsImage,
                titleImage: clientsTitleImage,
                title: "More Client Registrations",
                text: `
                    We revolutionize the client onboarding process using our IoT 
                    Devices. Enjoy the best market conversion rate. Common loyalty 
                    schemes convert 5-12% of business clients to registered users. 
                    RoadCube converts up to 80% thanks to our unique tech.
                `,
                btnText: "Order your POS"
            }
        ]
    })
};
</script>

<style scoped>
.b-tabs {
    border-top: 1px solid #e8eaee;
    border-bottom: 1px solid #e8eaee;
    background-color: white;
    padding: 20px 0;
    position: sticky;
    z-index: 100;
    top: 74px;
}

.b-tab-item {
    cursor: pointer;
    font-size: 17px;
    color: #142752;
    padding: 16px 36px;
    transition: all 0.3s ease-in-out;
}

.b-tab-item:hover {
    color: #007bff;
}

.b-title {
    color: #142752;
    font-size: 2.176em;
    line-height: 1.3em;
    margin-bottom: 24px;
}

.b-text {
    color: rgba(20, 39, 82, 0.8);
    font-size: 17px;
    line-height: 1.9em;
    margin-bottom: 48px;
}
</style>
