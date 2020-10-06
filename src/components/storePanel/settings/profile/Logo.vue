<template>
    <b-standard-card
        title="Logo"
        submit-text="update logo"
        :loading="loading"
        :error-message="errorMessage"
        @submit="uploadLogo"
    >
        You can upload here the logo of your business which will appear in the
        app and will be on the physical cards. If we think that it can be
        improved we will contact you before publishment.
        <v-row class="dashed mt-3 pa-5" no-gutters align="center">
            <v-col cols="5">
                <v-img :src="logo.image" width="64" class="mx-auto"></v-img>
            </v-col>
            <v-col cols="7">
                Press the following button to choose image:
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

export default {
    name: "Logo",

    data() {
        return {
            success: false,
            rules: [
                (v) => {
                    if (v) {
                        this.success = true;
                        return true;
                    } else {
                        return "To continue you must upload a new image";
                    }
                },
            ],
        };
    },

    computed: {
        loading() {
            return this.$store.state.storePanel.settings.profile.loading.logo;
        },

        errorMessage() {
            return this.$store.state.storePanel.settings.profile.errorMessage
                .logo;
        },

        logo: {
            get() {
                return this.$store.state.storePanel.settings.profile.logo;
            },

            set(val) {
                this.setLogo(val);
            },
        },
    },

    methods: {
        ...mapMutations("storePanel/settings/profile", ["setLogo"]),
        ...mapActions("storePanel/settings/profile", ["uploadLogo"]),

        onFileSelected(event) {
            this.logo.imageFile = event;
            const reader = new FileReader();
            reader.readAsDataURL(this.logo.imageFile);
            reader.onload = (e) => (this.logo.image = e.target.result);
        },
    },
};
</script>
