<template>
    <v-container fluid class="homePage">
        <HomeSection />
        <QuickFeatures />
        <Products />
        <About />
        <Cta />
        <Features />
        <Quote />
        <SimplePricing />
    </v-container>
</template>

<script>
import HomeSection from "../components/home/HomeSection.vue";
import QuickFeatures from "../components/home/QuickFeatures.vue";
import Products from "../components/home/Products.vue";
import About from "../components/home/About.vue";
import Cta from "../components/home/Cta.vue";
import Features from "../components/home/Features.vue";
import Quote from "../components/home/Quote.vue";
import SimplePricing from "../components/home/SimplePricing.vue";

export default {
    name: "Home",

    components: {
        HomeSection,
        QuickFeatures,
        SimplePricing,
        Quote,
        Features,
        Cta,
        About,
        Products
    },

    data: () => ({}),

    beforeCreate() {
        if (
            this.$route.params.lang !== "el" &&
            this.$route.params.lang !== "en" &&
            this.$route.params.lang !== "it"
        ) {
            this.$router.push("/en" + this.$route.fullPath);
        }
    }
};
</script>

<style scoped>
.homePage {
    scroll-behavior: smooth;
    padding: 0;
}
</style>
