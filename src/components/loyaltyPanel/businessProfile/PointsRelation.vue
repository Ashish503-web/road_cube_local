<template>
    <b-standard-card
        title="Offline-Online Points Relation"
        title-color="white"
        submit-text="save"
    >
        Please specify the Offline-Online relation for points that will be given
        to the user (eg: If you select 30%, if the online points are 100, then
        the offline points will be 30).

        <v-row no-gutters align="baseline" class="mt-3">
            <v-col cols="auto" class="pr-2 subtitle-1 font-weight-bold"
                >Relation:</v-col
            >
            <v-col cols="4" class="pl-2">
                <b-select
                    v-model="selectedPercent"
                    :items="percents"
                    append-outer-icon="mdiPercent"
                    no-clear-icon
                ></b-select>
            </v-col>
        </v-row>
    </b-standard-card>
</template>

<script>
export default {
    name: "PointsRelation",

    data: () => ({
        selectedPercent: 50
    }),

    computed: {
        percents() {
            let arr = [];

            for (let i = 1; i < 101; i++) {
                arr.push(i);
            }

            return arr;
        }
    }
};
</script>
