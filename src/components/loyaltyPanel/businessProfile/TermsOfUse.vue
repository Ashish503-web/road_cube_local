<template>
    <b-standard-card
        :title="translations.title[lang]"
        :cancel-text="{ el: '', en: 'delete', it: '' }"
        :submit-text="{ el: '', en: 'save', it: '' }"
        :loading="loading"
        :error-message="errorMessage"
        @submit="uploadTermsFile({
                type: 'terms_file',
                item: resultURL,
            })
           "
    >
        {{ translations.info[lang] }}

        <v-row no-gutters align="center" class="mt-3">
            <v-col cols="5" class="pr-2">
                <a
                    :href="terms_file"
                    >{{terms_file}}</a>

<!--                    https://www.roadcube.com/pdfManual/user_manual_64651.pdf-->

            </v-col>
            <v-col cols="7" class="pl-2">
                {{ translations.termsOfUse[lang] }}
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
import translations from "@/utils/translations/loyaltyPanel/businessProfile/termsOfUse";
import {mapActions, mapMutations} from "vuex";

export default {
    name: "TermsOfUse",

    mixins: [translations],

    data() {
        return {
            terms_file: null,
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
            return this.$store.state.loyaltyPanel.businessProfile.loading.terms_file;
        },

        errorMessage() {
            return this.$store.state.loyaltyPanel.businessProfile.errorMessage
                .terms_file;
        },
        resetSuccess() {
            return this.$store.state.loyaltyPanel.businessProfile.resetSuccess
                .terms_file;
        }

    },
    methods: {
        ...mapMutations("loyaltyPanel/businessProfile", ["setResetSuccess"]),
        ...mapActions("loyaltyPanel/businessProfile", [
            "getBussinessProfile",
            "uploadTermsFile"
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
                this.terms_file = val.terms_file;
            }
        },

        fileInput(val) {
            if (val) this.onFileSelected(val);
        },
        success(val) {
            if (val) this.setResetSuccess({type: "terms_file", value: false});

        },
        resetSuccess(val) {
            if (val) this.success = false;
        }
    }
};
</script>
