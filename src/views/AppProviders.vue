<template>
    <v-container fluid class="b-container">
        <v-card-title class="text-h4 font-weight-bold justify-center"
            >Choose Plan</v-card-title
        >
        <v-card-subtitle
            class="subtitle-1 text-center font-weight-bold text--secondary"
            >Choose the synergy that suits your needs.</v-card-subtitle
        >
        <v-row justify="center">
            <v-col
                v-for="provider in appProviders"
                :key="provider.app_provider_id"
                cols="3"
            >
                <v-card outlined>
                    <v-card-title
                        class="text--secondary font-weight-medium justify-center"
                        v-text="provider.title"
                    ></v-card-title>

                    <div class="text-center">
                        <span class="b-cost">5%</span>
                        <span class="b-time">/month</span>
                    </div>

                    <div
                        class="subtitle-1 text--secondary font-weight-medium text-center my-5"
                    >
                        Ποσοστό από εξαργυρώσεις
                    </div>

                    <v-card-actions>
                        <v-btn
                            color="secondary"
                            class="text-capitalize"
                            depressed
                            block
                            large
                            style="font-size: 20px"
                            @click="setAppProvider(provider)"
                            >start now</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "AppProviders",

    data: () => ({}),

    computed: {
        appProviders() {
            return this.$store.state.register.appProviders;
        },
    },

    methods: {
        ...mapActions("register", ["getAppProviders"]),

        setAppProvider(provider) {
            localStorage.setItem("appProvider", provider.app_provider_id);
            localStorage.setItem("providerStoreId", provider.store_id);
            this.$router.push("/subscription-plans");
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
    background-image: linear-gradient(
        147deg,
        rgba(141, 141, 236, 0.17) 0%,
        rgba(84, 84, 212, 0) 100%
    );
}

.b-cost {
    font-size: 60px;
    font-weight: 700;
    line-height: 56px;
    color: #1d293f;
}

.b-time {
    color: #1d293f;
    font-size: 30px;
}
</style>