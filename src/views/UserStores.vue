<template>
    <v-container fluid class="b-signin-container">
        <v-row no-gutters justify="center" class="pt-10">
            <v-col cols="2">
                <router-link :to="`/${lang}/`">
                    <v-img
                        src="@/assets/home/logo.png"
                        width="140"
                        height="20"
                        class="mx-auto"
                    ></v-img>
                </router-link>
            </v-col>
        </v-row>

        <h1
            class="text-h4 font-weight-medium text-center white--text mt-12 pa-5"
        >
            Welcome, {{ $store.state.user.full_name }}
        </h1>

        <v-card
            color="blue"
            flat
            dark
            width="520"
            class="mt-6 mx-auto rounded-xl"
        >
            <h3 class="subtitle-1 font-weight-bold text-center py-8">
                Here is a list of the stores and companies you have access:
            </h3>

            <v-form v-model="valid" @submit.prevent="connect" class="px-8">
                <v-select
                    v-model="store"
                    :items="userStores"
                    item-text="app_name"
                    return-object
                    menu-props="offsetY"
                    color="blue"
                    item-color="blue"
                    label="Please select a store or company"
                    no-top-margin
                    light
                    solo
                    flat
                    rounded
                    dense
                    :success="success"
                    :rules="rules"
                ></v-select>

                <div class="text-right pb-10">
                    <b-animating-btn
                        type="submit"
                        text="connect"
                        icon="mdiArrowRight"
                        small
                        :loading="loading"
                        :disabled="disabled"
                    ></b-animating-btn>
                </div>

                <v-alert v-if="errorMessage" type="error">{{
                    errorMessage
                }}</v-alert>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
import { mdiArrowRight } from "@mdi/js";
import { mapMutations, mapState } from "vuex";
import axios from "axios";

export default {
    name: "UserStores",

    data() {
        return {
            icons: { mdiArrowRight },
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

        lang() {
            return this.$route.params.lang;
        },
    },

    methods: {
        ...mapMutations(["setUserStores", "setStoreId"]),

        async getUserStores() {
            try {
                axios.defaults.headers.Authorization = `Bearer ${this.accessToken}`;
                const { data } = await axios.get(
                    `${process.env.VUE_APP_DEFAULT_API_URL}/users/stores`
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
                    this.$router.push(`/${this.lang}/loyaltyPanel`);
                } else {
                    this.$router.push(`/${this.lang}/storePanel`);
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

<style>
.v-label {
    font-size: 0.885rem;
    font-weight: 500;
}
</style>

<style scoped>
.b-signin-container {
    height: 100%;
    padding: 0;
    background-color: #0089f3;
    background-image: url("../assets/home/hero-trans.png"),
        url("../assets/home/hero-bottom.png");
    background-repeat: no-repeat no-repeat;
    background-position: center top, center bottom;
}
</style>
