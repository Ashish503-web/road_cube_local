<template>
    <v-app-bar app flat color="white" class="b-background">
        <v-toolbar-title class="ml-12">
            <v-img src="@/assets/logo-black.png" width="140"></v-img>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <router-link to="/sign-in" class="b-signin-link"
            >Merchant Sign In</router-link
        >
    </v-app-bar>
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

.b-background {
    background-image: linear-gradient(
        147deg,
        rgba(141, 141, 236, 0.17) 0%,
        rgba(84, 84, 212, 0) 100%
    );
}

.b-signin-link {
    color: rgba(0, 0, 0, 0.87);
    margin-right: 48px;
    font-weight: 600;
    text-decoration: none;
}

.b-signin-link:hover {
    text-decoration: underline;
}
</style>
