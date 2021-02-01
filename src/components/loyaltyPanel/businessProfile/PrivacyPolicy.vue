<template>
    <b-standard-card
        :title="translations.title[lang]"
        :cancel-text="{ el: '', en: 'delete', it: '' }"
        :submit-text="{ el: '', en: 'save', it: '' }"
        :loading="loading"
        :error-message="errorMessage"
        @submit="uploadPrivacyFile({
                type: 'privacy_policy_file',
                item: resultURL,
            })
           "
    >
        {{ translations.info[lang] }}

        <v-row no-gutters align="center" class="mt-3">
            <v-col cols="5" class="pr-2">
                <a
                    :href="privacy_policy_file"
                    >{{privacy_policy_file}}</a
                >
            </v-col>
            <v-col cols="7" class="pl-2">
                {{ translations.privacyPolicy[lang] }}
                <v-file-input
                    color="secondary"
                    class="mt-1"
                    outlined
                    dense
                    hide-details="auto"
                    :rules="rules"
                    :success="success"
                    v-model="fileInput"
                ></v-file-input>
            </v-col>
        </v-row>
    </b-standard-card>
</template>

<script>
import translations from "@/utils/translations/loyaltyPanel/businessProfile/privacyPolicy";
import {mapActions, mapMutations} from "vuex";

export default {
    name: "PrivacyPolicy",

    mixins: [translations],

    data() {
        return {
            privacy_policy_file: null,
            fileInput: null,
            imageUrl: null,
            resultURL: null,
            success: false,
            rules: [
                v => {
                    if (v) {
                        this.success = true;
                        return true;
                    } else {
                        return "To continue you must upload a new file";
                    }
                }
            ]
        }
    },
    computed: {
        lang() {
            return this.$route.params.lang;
        },
        loading() {
            return this.$store.state.loyaltyPanel.businessProfile.loading.privacy_policy_file;
        },

        errorMessage() {
            return this.$store.state.loyaltyPanel.businessProfile.errorMessage
                .privacy_policy_file;
        },
        resetSuccess() {
            return this.$store.state.loyaltyPanel.businessProfile.resetSuccess
                .privacy_policy_file;
        }

    },
    methods: {
        ...mapMutations("loyaltyPanel/businessProfile", ["setResetSuccess"]),
        ...mapActions("loyaltyPanel/businessProfile", [
            "getBussinessProfile",
            "uploadPrivacyFile"
        ]),

        onFileSelected(event) {
            this.resultURL = null;
            this.dialog = true;
            if (event) {
                this.resultURL = event;
            }

        },

    },
    watch: {
        ["$store.state.loyaltyPanel.businessProfile.businessProfileData"]: {
            immediate: true,
            handler(val) {
                this.privacy_policy_file = val.privacy_policy_file;
            }
        },

        fileInput(val) {
            if (val) this.onFileSelected(val);
        },
        success(val) {
            if (val) this.setResetSuccess({type: "privacy_policy_file", value: false});

        },
        resetSuccess(val) {
            if (val) this.success = false;
        }
    }
};
</script>
