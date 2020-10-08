<template>
    <b-standard-card
        title="Points Return"
        title-color="white"
        height="auto"
        submit-text="save"
    >
        <h4 class="secondary--text">
            Do you want points to be returned to the user after using the
            coupon?
        </h4>
        <v-radio-group class="mt-3 pt-0" hide-details>
            <v-radio color="secondary">
                <template v-slot:label>
                    <h4 class="subtitle-2 secondary--text">Yes</h4>
                </template>
            </v-radio>
            <v-radio color="secondary">
                <template v-slot:label>
                    <h4 class="subtitle-2 secondary--text">No</h4>
                </template>
            </v-radio>
        </v-radio-group>
    </b-standard-card>
</template>

<script>
export default {
    name: "PointsReturn"
};
</script>
