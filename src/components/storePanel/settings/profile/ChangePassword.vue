<template>
    <b-standard-card
        :title="translations.title[lang]"
        :loading="loading"
        :error-message="errorMessage"
        :disabled="!formValid"
        @submit="
            updatePassword({
                type: 'changePassword',
                item: changePassword
            })
        "
    >
        <b-text-field
            v-model="changePassword.current_password"
            :label="translations.password[lang]"
            :type="show.password ? 'text' : 'password'"
            no-top-margin
            prepend-inner-icon="mdiLock"
            append-icon="mdiEye"
            :success="success.password"
            :error-messages="error.password"
            @focus="error.password = ''"
            @blur="validatePassword"
            @click-append="show.password = !show.password"
        ></b-text-field>
        <b-text-field
            v-model="changePassword.new_password"
            :label="translations.newPassword[lang]"
            :type="show.newPassword ? 'text' : 'password'"
            prepend-inner-icon="mdiLock"
            append-icon="mdiEye"
            :success="success.newPassword"
            :error-messages="error.newPassword"
            @focus="error.newPassword = ''"
            @blur="validateNewPassword"
            @click-append="show.newPassword = !show.newPassword"
        ></b-text-field>
        <b-text-field
            v-model="changePassword.new_password_confirm"
            :label="translations.confirmPassword[lang]"
            :type="show.confirmPassword ? 'text' : 'password'"
            prepend-inner-icon="mdiLockOutline"
            append-icon="mdiEye"
            :success="success.confirmPassword"
            :error-messages="error.confirmPassword"
            @focus="error.confirmPassword = ''"
            @blur="validateConfirmPassword"
            @click-append="show.confirmPassword = !show.confirmPassword"
        ></b-text-field>
    </b-standard-card>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import translations from "@/utils/translations/storePanel/settings/profile/changePassword";
import validators from "@/utils/validators/storePanel/changePassword";

export default {
    name: "ChangePassword",

    mixins: [translations, validators],

    data: () => ({
        show: {
            password: false,
            newPassword: false,
            confirmPassword: false
        },
        changePassword: {
            current_password: "",
            new_password: "",
            new_password_confirm: ""
        }
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        loading() {
            return this.$store.state.storePanel.profile.loading.changePassword;
        },

        errorMessage() {
            return this.$store.state.storePanel.profile.errorMessage
                .changePassword;
        },

        resetSuccess() {
            return this.$store.state.storePanel.profile.resetSuccess
                .changePassword;
        }
    },

    methods: {
        ...mapMutations("storePanel/profile", ["setResetSuccess"]),
        ...mapActions("storePanel/profile", ["updatePassword"])
    }
};
</script>
