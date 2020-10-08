<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-row no-gutters>
                <v-col cols="auto">
                    <v-tabs v-model="tab" :vertical="$vuetify.breakpoint.smAndDown" color="black">
                        <v-tab class="text-capitalize text-left text-sm-center d-flex justify-start justify-sm-center px-3">point analysis</v-tab>
                        <v-tab class="text-capitalize text-left text-sm-center d-flex justify-start justify-sm-center px-3">monthly points</v-tab>
                    </v-tabs>
                </v-col>
            </v-row>
            <v-tabs-items v-model="tab">
                <PointAnalysis />
                <MonthlyPoints />
            </v-tabs-items>
        </v-sheet>
    </v-container>
</template>

<script>
import PointAnalysis from "./PointAnalysis";
import MonthlyPoints from "./MonthlyPoints";

export default {
    name: "History",
    components: { PointAnalysis, MonthlyPoints },
    data: () => ({
        tab: 0
    })
};
</script>

<style scoped>
.export-link {
    text-decoration: none;
}

.export-link:hover {
    text-decoration: underline;
}
</style>
