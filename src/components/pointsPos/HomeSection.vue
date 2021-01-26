<template>
    <section class="b-home-section">
        <v-container class="py-0 px-2 px-md-4">
            <v-row justify="center" align="center" class="px-2 px-md-4">
                <v-col
                    data-aos="fade-up"
                    cols="12"
                    md="6"
                    class="py-0 px-2 px-md-4"
                >
                    <h1 class="b-title">
                        Upgrade your store with a point system !
                    </h1>
                    <h3 class="b-subtitle">
                        Create your own point system for your store and increase
                        sales with the only proven way.
                    </h3>

                    <v-list color="transparent" dense>
                        <v-list-item
                            class="px-0 py-1"
                            v-for="benefit in benefits"
                            :key="benefit"
                        >
                            <v-list-item-icon class="mr-5">
                                <v-icon
                                    color="rgba(255, 255, 255, 0.7)"
                                    size="25"
                                    v-text="
                                        icons.mdiCheckboxMarkedCircleOutline
                                    "
                                ></v-icon>
                            </v-list-item-icon>
                            <v-list-item-title
                                class="b-list-item"
                                v-text="benefit"
                            ></v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-col>
                <v-col
                    data-aos="fade-left"
                    cols="12"
                    md="6"
                    class="px-2 px-md-4"
                    style="position: relative"
                >
                    <v-card flat style="border-radius: 10px">
                        <v-card-title class="b-card-title"
                            >Want to learn more?</v-card-title
                        >

                        <v-form class="pt-10 px-12 pb-12">
                            <div class="px-10">
                                <h3
                                    class="subtitle-1 font-weight-bold mb-3"
                                    style="font-size: 1.05rem !important"
                                >
                                    Enter your info and we will contact you soon
                                </h3>
                                <v-text-field
                                    color="secondary"
                                    label="Name"
                                ></v-text-field>
                                <v-text-field
                                    color="secondary"
                                    label="Phone"
                                ></v-text-field>
                                <v-text-field
                                    color="secondary"
                                    label="Email"
                                ></v-text-field>

                                <div class="text-center pt-5">
                                    <v-btn
                                        class="b-floating-btn"
                                        color="#0FAAEE"
                                        fab
                                        dark
                                        width="80"
                                        height="80"
                                    >
                                        <v-icon
                                            class="ml-1"
                                            large
                                            v-text="icons.mdiSend"
                                        ></v-icon>
                                    </v-btn>
                                </div>
                            </div>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
import { mdiCheckboxMarkedCircleOutline, mdiSend } from "@mdi/js";

export default {
    name: "HomeSection",
    data() {
        return {
            icons: { mdiCheckboxMarkedCircleOutline, mdiSend },
            benefits: [
                "Up to 20% increase in sales the first 3 months",
                "Make your customers loyal with the only proven way",
                "Make your customers happy from day 1"
            ]
        };
    }
};
</script>

<style>
.v-label {
    font-size: 0.885rem;
    font-weight: 500;
}
</style>

<style scoped>
.b-home-section {
    padding: 160px 0;
    background-color: #0089f3;
    background-image: url("../../assets/home/hero-trans.png"),
        url("../../assets/home/hero-bottom.png");
    background-repeat: no-repeat no-repeat;
    background-position: center top, center bottom;
}

.b-title {
    color: white;
    font-size: 2.8em;
    line-height: 1.3em;
    margin-bottom: 1.5rem;
}

.b-subtitle {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.25em;
    font-weight: 400;
    line-height: 1.7em;
    margin-bottom: 1rem;
}

.b-list-item {
    color: rgba(255, 255, 255, 0.7) !important;
    font-size: 1.2em !important;
    line-height: 1.5em !important;
    white-space: normal;
}

.b-card-title {
    background-color: #f1f0f6;
    color: #142752;
    font-size: 1.471em;
    font-weight: 700;
    justify-content: center;
    padding: 20px 50px;
}

.b-floating-btn:hover {
    transform: scale(1.1);
}
</style>
