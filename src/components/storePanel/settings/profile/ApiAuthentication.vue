<template>
    <b-standard-card title="API Authentication">
        <b-textarea></b-textarea>

        <v-row no-gutters justify="space-between" align="center">
            <v-col cols="3">
                <v-text-field
                    label="Password"
                    color="secondary"
                    outlined
                    dense
                    clearable
                    hide-details
                ></v-text-field>
            </v-col>
            <v-col cols="6" class="text-center secondary--text">
                You can find detailed documentation
                <a
                    class="secondary--text subtitle-2"
                    href="https://documenter.getpostman.com/view/5813491/SzKQxfkT?version=latest"
                    target="_blank"
                    >here</a
                >
            </v-col>
            <v-col cols="auto">
                <v-btn color="secondary" class="text-capitalize" depressed
                    >get token</v-btn
                >
            </v-col>
            <v-col cols="auto" class="subtitle-2 mt-5">
                Reset all previously created tokens:
            </v-col>

            <v-col class="pl-3">
                <v-switch color="secondary" hide-details></v-switch>
            </v-col>
        </v-row>
    </b-standard-card>
</template>

<script>
export default {
    name: "ApiAuthentication"
};
</script>
