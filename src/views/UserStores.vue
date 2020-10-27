<template>
    <v-container fluid style="height: 100%">
        <v-row class="fill-height" justify="center" align="center">
            <v-card outlined tile width="500">
                <v-col class="secondary py-5">
                    <router-link to="/">
                        <v-img
                            src="@/assets/loyalty-logo.png"
                            width="50%"
                            style="margin: auto"
                        ></v-img>
                    </router-link>
                </v-col>

                <v-card-title class="justify-center">
                    Select a store to connect to
                </v-card-title>

                <v-form v-model="valid" @submit.prevent="step++">
                    <v-card-text class="pb-7">
                        <v-row no-gutters>
                            <v-col class="pr-2">
                                <b-select
                                    v-model="store"
                                    :items="userStores"
                                    item-text="app_name"
                                    return-object
                                    label="Stores"
                                    no-top-margin
                                    :success="success"
                                    :rules="rules"
                                ></b-select>
                            </v-col>
                            <v-col cols="auto" class="pl-2">
                                <v-btn
                                    color="secondary"
                                    class="text-capitalize"
                                    style="margin-top: 2px"
                                    depressed
                                    :loading="loading"
                                    :disabled="disabled"
                                    @click="connect"
                                    >connect to store</v-btn
                                >
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <v-alert v-if="errorMessage" type="error">{{
                        errorMessage
                    }}</v-alert>
                </v-form>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
import axios from "axios";
import { mapMutations, mapState } from "vuex";

export default {
    name: "UserStores",

    data() {
        return {
            valid: false,
            disabled: true,
            loading: false,
            errorMessage: "",
            store: null,
            success: false,
            rules: [
                (v) => {
                    if (v) {
                        this.success = true;
                        return true;
                    } else {
                        return "Store is required";
                    }
                },
            ],
        };
    },

    computed: {
        ...mapState(["accessToken", "userStores"]),
    },

    methods: {
        ...mapMutations(["setUserStores", "setStoreId"]),

        async getUserStores() {
            try {
                axios.defaults.headers.Authorization = `Bearer ${this.accessToken}`;
                const { data } = await axios.get(
                    "https://api.roadcube.tk/v1/users/stores"
                );

                this.setUserStores(data.data.stores);
            } catch (ex) {
                console.error(ex.response.data);
            }
        },

        async connect() {
            try {
                this.loading = true;
                localStorage.setItem("storeId", this.store.store_id);
                this.setStoreId(this.store.store_id);

                if (this.store.role_id === 2 || this.store.role_id === 4) {
                    this.$router.push("/loyaltyPanel");
                } else {
                    this.$router.push("/storePanel");
                }
            } catch (ex) {
                this.loading = false;
                this.errorMessage = ex.response.data.message;
                setTimeout(() => (this.errorMessage = ""), 5000);
            }
        },
    },

    mounted() {
        this.getUserStores();
    },

    watch: {
        valid(val) {
            if (val) {
                this.disabled = false;
            } else {
                this.disabled = true;
            }
        },
    },
};
</script>