<template>
    <v-window-item :value="2" class="pa-0">
        <v-card-title class="pt-0 justify-center">
            Enter Mobile Code
        </v-card-title>
        <v-card-subtitle class="text-center font-weight-bold"
            >We have sent a 4 digit code to mobile number you
            entered</v-card-subtitle
        >

        <v-form class="px-5" @submit.prevent="verifyMobile">
            <v-alert type="info"
                >For development - {{ mobileVerificationCode }}, this will be
                removed</v-alert
            >
            <v-text-field
                v-model="code"
                v-mask="'####'"
                type="number"
                label="Mobile Code"
                color="secondary"
                outlined
                clearable
                :prepend-inner-icon="icons.mdiCellphoneIphone"
                :success="success"
                :error-messages="error"
                @focus="error = ''"
                @blur="validateCode"
            ></v-text-field>

            <v-alert v-if="errorMessage" type="error">{{
                errorMessage
            }}</v-alert>

            <v-card-actions class="px-0">
                Didn't receive code?
                <a
                    class="blue--text b-underline mx-1"
                    @click.prevent="resendCode"
                    >Resend</a
                >
                <v-spacer></v-spacer>
                <v-btn
                    type="submit"
                    color="secondary"
                    tile
                    class="px-5"
                    :loading="loading"
                    :disabled="!valid"
                    >verify</v-btn
                >
            </v-card-actions>
        </v-form>
    </v-window-item>
</template>

<script>
import { mdiCellphoneIphone } from "@mdi/js";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
    name: "VerifyMobile",

    data() {
        return {
            icons: { mdiCellphoneIphone },
            success: false,
            error: "",
            errorMessages: {
                codeRequired: {
                    el: "",
                    en: "Mobile Code is required",
                    it: ""
                },
                codeLength: {
                    el: "",
                    en: "Mobile Code must be 4 characters long",
                    it: ""
                }
            }
        };
    },

    computed: {
        ...mapState("register", ["loading", "errorMessage"]),

        lang() {
            return this.$route.params.lang;
        },

        mobileVerificationCode() {
            return this.$store.state.register.mobileVerificationCode;
        },

        code: {
            get() {
                return this.$store.state.register.code;
            },

            set(val) {
                this.setCode(val);
            }
        },

        valid() {
            return this.success;
        }
    },

    methods: {
        ...mapMutations("register", ["setCode"]),
        ...mapActions("register", ["resendCode", "verifyMobile"]),

        validateCode() {
            if (!this.code) {
                this.error = this.errorMessages.codeRequired[this.lang];
            } else if (this.code.length !== 4) {
                this.error = this.errorMessages.codeLength[this.lang];
            } else {
                this.error = "";
            }
        }
    },

    watch: {
        code(val) {
            if (val) {
                this.success = val.length === 4;
            } else {
                this.success = false;
            }
        }
    }
};
</script>

<style scoped>
.b-underline {
    text-decoration: underline;
}
</style>
