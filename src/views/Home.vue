<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="4">
                <v-img src="../assets/logo.png"></v-img>
                <v-btn color="primary" outlined block to="/loyaltyPanel"
                    >go to loyalty panel</v-btn
                >
                <v-btn
                    color="primary"
                    class="mt-3"
                    outlined
                    block
                    to="/storePanel"
                    >go to store panel</v-btn
                >
                <v-btn
                    color="primary"
                    class="mt-3"
                    outlined
                    block
                    to="/register"
                    >register</v-btn
                >
                <v-btn
                    color="primary"
                    class="mt-3"
                    outlined
                    block
                    to="/sign-in"
                >
                    sign in
                    <v-icon class="ml-1" v-text="icons.mdiLogin"></v-icon>
                </v-btn>
            </v-col>
            <v-col cols="10">
                <v-btn
                    color="primary"
                    x-large
                    outlined
                    block
                    to="/example-backend-request"
                >
                    backend request functions examples</v-btn
                >
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mdiLogin } from "@mdi/js";

export default {
    name: "Home",

    data: () => ({
        icons: { mdiLogin }
    })
};
</script>
