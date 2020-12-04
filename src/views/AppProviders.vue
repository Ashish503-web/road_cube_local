<template>
    <v-container fluid class="b-container">
        <v-row no-gutters justify="center" class="fill-height">
            <v-col cols="8">
                <v-card
                    color="blue darken-2"
                    class="rounded-tl-lg rounded-tr-lg pt-12"
                    style="padding-bottom: 120px"
                    tile
                    flat
                    dark
                >
                    <v-card-title
                        class="justify-center text-h5 font-weight-bold"
                        >Flexible Plans & Pricing</v-card-title
                    >
                    <v-card-subtitle class="text-center mt-n1"
                        >Choose the synergy that suits your
                        needs.</v-card-subtitle
                    >
                </v-card>

                <v-row no-gutters justify="center" class="px-12">
                    <v-col
                        v-for="provider in appProviders"
                        :key="provider.app_provider_id"
                        cols="4"
                        class="b-floating"
                    >
                        <v-card class="mt-5 pa-4">
                            <div
                                class="text-button font-weight-bold blue--text text--darken-2 text-center"
                                v-text="provider.title"
                            ></div>
                            <div class="d-flex justify-center mt-2">
                                <v-sheet
                                    color="blue lighten-2"
                                    class="rounded-circle d-flex justify-center align-center"
                                    width="65"
                                    height="65"
                                    dark
                                >
                                    <v-icon
                                        x-large
                                        v-text="
                                            icons.mdiFileDocumentEditOutline
                                        "
                                    ></v-icon>
                                </v-sheet>
                            </div>

                            <div class="text-center mt-2">
                                <span class="text-h5 font-weight-bold">5%</span>
                                <span
                                    class="font-weight-medium ml-1 text--secondary"
                                    >/ month</span
                                >
                            </div>

                            <v-divider class="mt-3"></v-divider>

                            <v-list class="pa-0 py-3" dense>
                                <v-list-item class="pa-0">
                                    <v-list-item-icon class="mr-2">
                                        <v-icon
                                            v-text="icons.mdiCheckCircleOutline"
                                        ></v-icon>
                                    </v-list-item-icon>

                                    <v-list-item-title>
                                        Standard Dummy Text:
                                        <span class="text--secondary"
                                            >Text</span
                                        >
                                    </v-list-item-title>
                                </v-list-item>
                                <v-list-item class="pa-0">
                                    <v-list-item-icon class="mr-2">
                                        <v-icon
                                            v-text="icons.mdiCheckCircleOutline"
                                        ></v-icon>
                                    </v-list-item-icon>

                                    <v-list-item-title>
                                        Randomised Words:
                                        <span class="text--secondary"
                                            >Text</span
                                        >
                                    </v-list-item-title>
                                </v-list-item>
                                <v-list-item class="pa-0">
                                    <v-list-item-icon class="mr-2">
                                        <v-icon
                                            v-text="icons.mdiCheckCircleOutline"
                                        ></v-icon>
                                    </v-list-item-icon>

                                    <v-list-item-title>
                                        Free Event Passes
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>

                            <v-btn
                                color="blue darken-2"
                                class="b-btn"
                                outlined
                                block
                                style="font-size: 0.8rem; letter-spacing: 0.5px"
                                @click="setAppProvider(provider)"
                                >subscribe</v-btn
                            >
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mdiFileDocumentEditOutline, mdiCheckCircleOutline } from "@mdi/js";
import { mapActions } from "vuex";

export default {
    name: "AppProviders",

    data: () => ({
        icons: { mdiFileDocumentEditOutline, mdiCheckCircleOutline },
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        appProviders() {
            return this.$store.state.register.appProviders;
        },
    },

    methods: {
        ...mapActions("register", ["getAppProviders"]),

        setAppProvider(provider) {
            localStorage.setItem("appProvider", provider.app_provider_id);
            localStorage.setItem("providerStoreId", provider.store_id);
            this.$router.push(`/${this.lang}/subscription-plans`);
        },
    },

    mounted() {
        this.getAppProviders();
    },
};
</script>

<style scoped>
.b-container {
    height: 100%;
    padding: 0;
    background-image: linear-gradient(
        147deg,
        rgba(141, 141, 236, 0.17) 0%,
        rgba(84, 84, 212, 0) 100%
    );
}

.b-floating {
    padding: 0 15px;
    transform: translateY(-28%);
}

.b-btn:hover {
    background-color: #1976d2 !important;
    color: white !important;
}
</style>
