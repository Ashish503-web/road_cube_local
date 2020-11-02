<template>
    <v-app>
        <router-view name="header"></router-view>

        <v-main :class="{ 'pa-0': $route.path === '/' }">
            <Notification />
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import Notification from "@/components/Notification.vue";

export default {
    name: "App",
    components: { Notification },
    data: () => ({
        //
    }),

    methods: {
        ...mapMutations(["setStoreId", "setAccessToken"]),
        ...mapActions(["getUser"])
    },

    mounted() {
        const accessToken = localStorage.getItem("accessToken");
        const storeId = localStorage.getItem("storeId");

        if (accessToken) {
            this.setAccessToken(accessToken);
            this.getUser();
        }

        if (storeId) {
            this.setStoreId(storeId);
        }
    }
};
</script>

<style>
.bb {
    border: 1px solid black !important;
}

.bw {
    border: 1px solid white !important;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type="number"] {
    -moz-appearance: textfield;
}

html,
body {
    scroll-behavior: smooth !important;
}
</style>
