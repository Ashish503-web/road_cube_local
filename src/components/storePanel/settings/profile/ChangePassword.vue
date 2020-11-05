<template>
    <b-standard-card
        :title="translations.title[lang]"
        :submit-text="{ el: '', en: 'verification', it: '' }"
    >
        <b-text-field
            type="password"
            :label="translations.password[lang]"
            no-top-margin
        ></b-text-field>
        <b-text-field
            type="password"
            :label="translations.newPassword[lang]"
        ></b-text-field>
        <b-text-field
            type="password"
            :label="translations.confirmPassword[lang]"
        ></b-text-field>
    </b-standard-card>
</template>

<script>
import translations from "@/utils/translations/storePanel/settings/changePassword";

export default {
    name: "ChangePassword",

    mixins: [translations],

    computed: {
        lang() {
            return this.$route.params.lang;
        }
    }
};
</script>
