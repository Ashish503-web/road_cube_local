<template>
    <b-standard-card
        title="API Authentication"
        title-color="white"
        height="auto"
        class="mt-5"
    >
        <b-textarea no-top-margin></b-textarea>

        <v-row no-gutters justify="space-between" align="center">
            <v-col cols="6">
                <b-text-field type="password" label="Password"></b-text-field>
            </v-col>

            <v-col cols="auto">
                <v-btn color="secondary" class="text-capitalize mt-3" depressed
                    >get token</v-btn
                >
            </v-col>

            <v-col cols="12" class="secondary--text mt-3">
                You can find detailed documentation
                <a
                    class="secondary--text subtitle-2"
                    href="https://documenter.getpostman.com/view/5813491/SzKQxfkT?version=latest"
                    target="_blank"
                    >here</a
                >
            </v-col>

            <v-col cols="auto" class="subtitle-2 mt-3">
                Reset all previously created tokens:
            </v-col>

            <v-col class="pl-3">
                <v-switch
                    color="secondary"
                    class="mt-3 pt-0"
                    hide-details
                ></v-switch>
            </v-col>
        </v-row>
    </b-standard-card>
</template>

<script>
export default {
    name: "ApiAuthentication"
};
</script>
