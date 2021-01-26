<template>
    <section style="padding: 4rem 0">
        <v-container class="py-0">
            <v-row data-aos="fade-up">
                <v-col
                    v-for="feature in features"
                    :key="feature.title"
                    cols="12"
                    md="4"
                    class="text-center mx-auto py-0 px-2 px-md-4"
                >
                    <v-img
                        :src="feature.img"
                        alt="icon"
                        class="mb-6 mx-auto"
                        width="70px"
                    ></v-img>

                    <h5 class="b-title" v-text="feature.title"></h5>
                    <p class="b-text" v-text="feature.text"></p>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
import image1 from "@/assets/home/quickFeatures/feature-1.png";
import image2 from "@/assets/home/quickFeatures/feature-2.png";
import image3 from "@/assets/home/quickFeatures/feature-3.png";

export default {
    name: "QuickFeatures",

    data: () => ({
        features: [
            {
                img: image1,
                title: "Loyalty As A Service",
                text: `
                    Pay a simple monthly subscription for your software,
                    customer support and consultation from loyalty experts
                `
            },
            {
                img: image2,
                title: "Get More Registrations",
                text: `
                    Our IoT devices convert more clients to registered users
                    of your program.
                `
            },
            {
                img: image3,
                title: "Synergies",
                text: `
                    Our synergy tool helps you invite partners to your
                    loyalty scheme without development costs
                `
            }
        ]
    })
};
</script>

<style scoped>
.b-title {
    margin-bottom: 16px;
    font-size: 1.3em;
    line-height: 1.5em;
    color: #142752;
}

.b-text {
    color: rgba(20, 39, 82, 0.8);
    font-size: 17px;
    font-weight: 500;
    line-height: 1.9;
}
</style>
