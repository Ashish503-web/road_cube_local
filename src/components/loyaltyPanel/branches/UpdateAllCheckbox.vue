<template>
    <v-sheet>
        <h4 class="subtitle-2 text--secondary font-weight-bold">
            {{ headerText }}
        </h4>
        <v-checkbox
            color="secondary"
            class="ma-0 pa-0"
            hide-details
        ></v-checkbox>
    </v-sheet>
</template>

<script>
export default {
    props: ["headerText"],
    name: "UpdateAllCheckbox"
};
</script>

<style scoped></style>
