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

                <v-card>
                    <v-card-title class="justify-center">
                        Forgot your password?
                    </v-card-title>

                    <v-col cols="12">
                        <h3 class="subtitle-1 font-weight-bold mt-3">
                            Step 1 - Request verification code
                        </h3>
                        <b-text-field type="text" label="Please enter mobile phone"></b-text-field>
                        <v-btn
                                type="submit"
                                color="secondary"
                                tile
                                class="px-5 mt-3"
                                >Send me SMS</v-btn
                            >
                        
                        <h3 class="subtitle-1 font-weight-bold mt-5">
                            Step 2 - Change password with sms code
                        </h3>
                        <b-text-field type="text" label="Please enter mobile phone"></b-text-field>
                        <b-text-field type="text" label="Please enter new password"></b-text-field>
                        <b-text-field type="text" label="Please repeat new password"></b-text-field>
                        <v-btn
                                type="submit"
                                color="secondary"
                                tile
                                class="px-5 mt-3"
                                >Change password</v-btn
                            >
                    </v-col>

                    
                </v-card>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
import { mdiEye } from "@mdi/js";
import axios from "axios";
import { mapMutations } from "vuex";

export default {
    name: "PasswordRecovery",

    data() {
        return {
            
        };
    },

    methods: {
        
    },

    watch: {
        
    },
};
</script>
