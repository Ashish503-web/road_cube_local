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
    </v-container>
</template>

<script>
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
    components: {
        Footer,
        SimplePricing,
        Quote,
        Features,
        Cta,
        About,
        Products,
        Quickfeatures,
        HomeSection
    },
    data: () => ({})
};
</script>
<style scoped>
.homePage {
    scroll-behavior: smooth;
}
</style>
