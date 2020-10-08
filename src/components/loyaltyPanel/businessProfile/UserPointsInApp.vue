<template>
    <b-standard-card
        title="User Points"
        title-color="white"
        height="auto"
        submit-text="save"
        class="mt-5"
    >
        <h4 class="secondary--text">
            Show user points in the app
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
    name: "UserPointsInApp"
};
</script>
