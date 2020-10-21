<template>
    <v-container fluid class="pa-0 homePage">

        <HomeSection />
        <Quickfeatures />
        <Products />
        <About />
        <Cta />
        <Features />
        <Quote />
        <SimplePricing />
        <Footer />

<!--        <v-row justify="center">-->
<!--            <v-col cols="4">-->
<!--                <v-btn color="primary" outlined block to="/loyaltyPanel"-->
<!--                >go to loyalty panel</v-btn-->
<!--                >-->
<!--                <v-btn-->
<!--                        color="primary"-->
<!--                        class="mt-3"-->
<!--                        outlined-->
<!--                        block-->
<!--                        to="/storePanel"-->
<!--                >go to store panel</v-btn-->
<!--                >-->
<!--                <v-btn-->
<!--                        id="features"-->
<!--                        color="primary"-->
<!--                        class="mt-3"-->
<!--                        outlined-->
<!--                        block-->
<!--                        to="/sign-in"-->
<!--                >-->
<!--                    sign in-->
<!--                    <v-icon class="ml-1" v-text="icons.mdiLogin"></v-icon>-->
<!--                </v-btn>-->
<!--            </v-col>-->
<!--        </v-row>-->
    </v-container>
</template>

<script>
import { mdiLogin } from "@mdi/js";
import HomeSection from "../components/home/HomeSection";
import Quickfeatures from "../components/home/Quickfeatures";
import Products from "../components/home/profucts/Products";
import About from "../components/home/About";
import Cta from "../components/home/Cta";
import Features from "../components/home/Features";
import Quote from "../components/home/Quote";
import SimplePricing from "../components/home/SimplePricing";
import Footer from "../components/home/Footer";

export default {
    name: "Home",
    components: { Footer, SimplePricing, Quote, Features, Cta, About, Products, Quickfeatures, HomeSection },
    data: () => ({
        icons: { mdiLogin }
    })
};

</script>
<style scoped>
    .homePage{
        scroll-behavior: smooth;
    }
</style>