<template>
    <section class="b-quickfeatures">
        <v-container class="py-0 px-2 px-md-4">
            <v-row no-gutters class="px-2 px-md-4">
                <v-col
                    v-for="feature in quickFeatures"
                    :key="feature.title"
                    cols="12"
                    md="4"
                    class="px-4 text-center"
                >
                    <img
                        :src="feature.img"
                        width="50"
                        height="50"
                        class="mb-6"
                    />
                    <h2 class="b-title" v-text="feature.title"></h2>
                    <h3 class="b-subtitle" v-text="feature.subtitle"></h3>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
import coinImage from "@/assets/pointsPos/quickFeatures/coin.png";
import noCardImage from "@/assets/pointsPos/quickFeatures/no-card.png";
import happyImage from "@/assets/pointsPos/quickFeatures/happy.png";

export default {
    name: "QuickFeatures",

    data: () => ({
        quickFeatures: [
            {
                img: coinImage,
                title: "Create your point system",
                subtitle: "Create your point system and engage your cients."
            },
            {
                img: noCardImage,
                title: "No cards",
                subtitle: "You need to buy cards and spend time scanning them"
            },
            {
                img: happyImage,
                title: "Easy to Use",
                subtitle: "Consumers can use it from day 1 without training"
            }
        ]
    })
};
</script>

<style scoped>
.b-quickfeatures {
    padding: 4rem 0;
}

.b-title {
    color: #142752;
    font-size: 1.3em;
    line-height: 1.5em;
    margin-bottom: 16px;
}

.b-subtitle {
    color: rgba(20, 39, 82, 0.8);
    font-size: 17px;
    font-weight: 500;
    line-height: 1.9em;
    margin-bottom: 16px;
}
</style>
