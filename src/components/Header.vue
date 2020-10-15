<template>
    <div>
        <v-app-bar app flat color="white">
            <v-toolbar-title class="ml-12">
                <v-img src="@/assets/logo-black.png" width="140"></v-img>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn text href="#features">home</v-btn>
            <v-btn text>why roadcube</v-btn>
            <v-btn text>about</v-btn>
            <v-btn text>features</v-btn>
            <v-btn text>quote</v-btn>
            <v-btn text>contact</v-btn>
            <v-btn
                class="text-capitalize pr-1 mr-12"
                height="50"
                outlined
                rounded
                style="font-size: 1.1rem"
            >
                merchant login
                <v-avatar color="#25ccf740" class="ml-3" size="38">
                    <v-icon
                        size="24"
                        color="#001266"
                        v-text="icons.mdiArrowRight"
                    ></v-icon>
                </v-avatar>
            </v-btn>
        </v-app-bar>
    </div>
</template>

<script>
import { mdiArrowRight } from "@mdi/js";

export default {
    name: "Header",
    data: () => ({
        icons: { mdiArrowRight },
    }),
};
</script>

<style scoped>
.theme--light.v-btn:hover {
    color: #007bff;
}

.theme--light.v-btn:hover::before {
    opacity: 0 !important;
}
</style>
