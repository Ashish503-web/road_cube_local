<template>
    <v-app>
        <router-view name="header"></router-view>

        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";

export default {
    name: "App",

    data: () => ({
        //
    }),

    methods: {
        ...mapMutations(["setStoreId", "setStoreToken"])
    },

    mounted() {
        let id = localStorage.getItem("storeId");
        let token = localStorage.getItem("storeAccessToken");

        this.setStoreId(id);
        this.setStoreToken(token);
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
</style>
