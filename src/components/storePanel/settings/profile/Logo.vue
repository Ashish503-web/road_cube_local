<template>
    <b-standard-card
        :title="translations.title[lang]"
        :submit-text="{ el: '', en: 'Update Logo', it: '' }"
        :loading="loading"
        :error-message="errorMessage"
        @submit="uploadLogo({ type: 'logo', imageFile })"
    >
        <div style="height: 100px" v-text="translations.info[lang]"></div>

        <v-row no-gutters align="center" style="height: 120px">
            <v-col cols="12" sm="5" class="pr-2">
                <v-img :src="logo" width="64" class="mx-auto"></v-img>
            </v-col>
            <v-col cols="12" sm="7" class="pl-0 pl-sm-2">
                {{ translations.uploadText[lang] }}
                <v-file-input
                    color="secondary"
                    class="mt-1"
                    outlined
                    dense
                    hide-details="auto"
                    :rules="rules"
                    :success="success"
                    @change="onFileSelected"
                ></v-file-input>
            </v-col>
        </v-row>
    </b-standard-card>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import translations from "@/utils/translations/storePanel/settings/logo";

export default {
    name: "Logo",

    mixins: [translations],

    data() {
        return {
            logo: "",
            imageFile: "",
            success: false,
            rules: [
                v => {
                    if (v) {
                        this.success = true;
                        return true;
                    } else {
                        return "To continue you must upload a new image";
                    }
                }
            ]
        };
    },

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        loading() {
            return this.$store.state.storePanel.settings.profile.loading.logo;
        },

        errorMessage() {
            return this.$store.state.storePanel.settings.profile.errorMessage
                .logo;
        },

        resetSuccess() {
            return this.$store.state.storePanel.settings.profile.resetSuccess
                .logo;
        }
    },

    methods: {
        ...mapMutations("storePanel/settings/profile", ["setResetSuccess"]),
        ...mapActions("storePanel/settings/profile", ["uploadLogo"]),

        onFileSelected(event) {
            if (event) {
                this.imageFile = event;
                const reader = new FileReader();
                reader.readAsDataURL(this.imageFile);
                reader.onload = e => (this.logo = e.target.result);
            }
        }
    },

    watch: {
        ["$store.state.storePanel.store"]: {
            immediate: true,
            handler(val) {
                this.logo = val.logo;
            }
        },

        success(val) {
            if (val) this.setResetSuccess({ type: "logo", value: false });
        },

        resetSuccess(val) {
            if (val) this.success = false;
        }
    }
};
</script>
