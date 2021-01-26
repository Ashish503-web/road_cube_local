<template>
    <v-container fluid class="homePage">
        <HomeSection />
        <QuickFeatures />
        <Services />
    </v-container>
</template>

<script>
import HomeSection from "@/components/pointsPos/HomeSection.vue";
import QuickFeatures from "@/components/pointsPos/QuickFeatures.vue";
import Services from "@/components/pointsPos/Services.vue";

export default {
    name: "PointsPos",

    components: { HomeSection, QuickFeatures, Services }
};
</script>

<style scoped>
.homePage {
    scroll-behavior: smooth;
    padding: 0;
}
</style>
