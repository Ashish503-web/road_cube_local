<template>
    <v-app>
        <router-view name="header"></router-view>

        <v-main>
            <v-snackbar v-model="snackbar" color="green" multi-line>
                <v-icon class="mr-1" v-text="icons.mdiCheckCircle"></v-icon>
                <span class="subtitle-1 font-weight-bold">
                    {{ snackbarText }}
                </span>
                <template v-slot:action>
                    <v-btn icon @click="snackbar = false">
                        <v-icon v-text="icons.mdiClose"></v-icon>
                    </v-btn>
                </template>
            </v-snackbar>

            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
import { mdiCheckCircle, mdiClose } from "@mdi/js";
import { mapMutations } from "vuex";

export default {
    name: "App",

    data: () => ({
        icons: { mdiCheckCircle, mdiClose }
    }),

    computed: {
        snackbar: {
            get() {
                return this.$store.state.snackbar;
            },

            set(val) {
                this.setSnackbar(val);
            }
        },

        snackbarText() {
            return this.$store.state.snackbarText;
        }
    },

    methods: {
        ...mapMutations([
            "setStoreId",
            "setStoreToken",
            "setCompanyId",
            "setCompanyToken",
            "setSnackbar"
        ])
    },

    mounted() {
        let storeId = localStorage.getItem("storeId");
        let storeToken = localStorage.getItem("storeAccessToken");
        let companyId = localStorage.getItem("companyId");
        let companyToken = localStorage.getItem("companyAccessToken");

        this.setStoreId(storeId);
        this.setStoreToken(storeToken);
        this.setCompanyId(companyId);
        this.setCompanyToken(companyToken);
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
