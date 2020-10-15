<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col cols="4">
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
                    id="features"
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
        </v-row>

        <SimplePricing />
    </v-container>
</template>

<script>
import { mdiLogin } from "@mdi/js";
import SimplePricing from "@/components/home/SimplePricing.vue";

export default {
    name: "Home",
    components: { SimplePricing },
    data: () => ({
        icons: { mdiLogin }
    })
};
</script>
