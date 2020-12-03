<template>
    <b-standard-card
        :title="translations.title[lang]"
        :loading="loading"
        :error-message="errorMessage"
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
            :rules="rules.password"
            @cancel-success="success.password = false"
            @click-append="show.password = !show.password"
        ></b-text-field>
        <b-text-field
            v-model="changePassword.new_password"
            :label="translations.newPassword[lang]"
            :type="show.newPassword ? 'text' : 'password'"
            prepend-inner-icon="mdiLock"
            append-icon="mdiEye"
            :success="success.newPassword"
            :rules="rules.newPassword"
            @cancel-success="success.newPassword = false"
            @click-append="show.newPassword = !show.newPassword"
        ></b-text-field>
        <b-text-field
            v-model="changePassword.new_password_confirm"
            :label="translations.confirmPassword[lang]"
            :type="show.confirmPassword ? 'text' : 'password'"
            prepend-inner-icon="mdiLockOutline"
            append-icon="mdiEye"
            :success="success.confirmPassword"
            :rules="rules.confirmPassword"
            @cancel-success="success.confirmPassword = false"
            @click-append="show.confirmPassword = !show.confirmPassword"
        ></b-text-field>
    </b-standard-card>
</template>

<script>
import { mapActions } from "vuex";
import translations from "@/utils/translations/storePanel/settings/profile/changePassword";
import validators from "./changePasswordValidators";

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
            return this.$store.state.storePanel.settings.profile.loading
                .changePassword;
        },

        errorMessage() {
            return this.$store.state.storePanel.settings.profile.errorMessage
                .changePassword;
        }
    },

    methods: {
        ...mapActions("storePanel/settings/profile", ["updatePassword"])
    }
};
</script>
