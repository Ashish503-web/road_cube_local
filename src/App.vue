<template>
    <v-app>
        <router-view name="header"></router-view>

        <v-main>
            <Notification />
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
import { mapMutations } from "vuex";
import Notification from "@/components/Notification.vue";

export default {
    name: "App",
    components: { Notification },
    data: () => ({
        //
    }),

    methods: {
        ...mapMutations([
            "setStoreId",
            "setStoreToken",
            "setCompanyId",
            "setCompanyToken",
        ]),
    },

    mounted() {
        let storeId = localStorage.getItem("storeId");
        let storeToken = localStorage.getItem("storeToken");
        let companyId = localStorage.getItem("companyId");
        let companyToken = localStorage.getItem("companyToken");

        this.setStoreId(storeId);
        this.setStoreToken(storeToken);
        this.setCompanyId(companyId);
        this.setCompanyToken(companyToken);
    },
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
