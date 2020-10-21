<template>
    <v-window-item :value="2" class="pa-0">
        <v-card-title class="pt-0 justify-center">
            Enter Mobile Code
        </v-card-title>
        <v-card-subtitle class="text-center font-weight-bold"
            >We have sent a 4 digit code to mobile number you
            entered</v-card-subtitle
        >

        <v-form v-model="valid" class="px-5" @submit.prevent="verifyMobile">
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
                :rules="codeRules"
                :success="codeSuccess"
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
                    :disabled="disabled"
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
            valid: false,
            disabled: true,
            codeSuccess: false,
            codeRules: [
                v => {
                    if (v) {
                        this.codeSuccess = true;
                        return true;
                    } else {
                        return "Mobile Code is required";
                    }
                },
                v =>
                    (v || "").length === 4 ||
                    "Mobile Code must be 4 characters long"
            ]
        };
    },

    computed: {
        ...mapState("register", ["loading", "errorMessage"]),

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
        }
    },

    methods: {
        ...mapMutations("register", ["setCode"]),
        ...mapActions("register", ["resendCode", "verifyMobile"])
    },

    watch: {
        valid(val) {
            if (val) {
                this.disabled = false;
            } else {
                this.disabled = true;
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
