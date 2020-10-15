<template>
    <b-standard-card
        title="Logo"
        submit-text="update logo"
        :loading="loading"
        :error-message="errorMessage"
        @submit="uploadLogo(imageFile)"
    >
        <div style="height: 100px">
            You can upload here the logo of your business which will appear in
            the app and will be on the physical cards. If we think that it can
            be improved we will contact you before publishment.
        </div>

        <v-row no-gutters align="center" style="height: 120px">
            <v-col cols="12" sm="5" class="pr-2">
                <v-img :src="logo" width="64" class="mx-auto"></v-img>
            </v-col>
            <v-col cols="12" sm="7" class="pl-0 pl-sm-2">
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
            imageFile: "",
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
        loading() {
            return this.$store.state.storePanel.settings.profile.loading.logo;
        },

        errorMessage() {
            return this.$store.state.storePanel.settings.profile.errorMessage
                .logo;
        },

        success: {
            get() {
                return this.$store.state.storePanel.settings.profile.success
                    .logo;
            },

            set(val) {
                this.setSuccess({ value: val, type: "logo" });
            }
        },

        logo: {
            get() {
                return this.$store.state.storePanel.store.logo;
            },

            set(val) {
                this.setLogo(val);
            }
        }
    },

    methods: {
        ...mapMutations("storePanel", ["setLogo"]),
        ...mapMutations("storePanel/settings/profile", ["setSuccess"]),
        ...mapActions("storePanel/settings/profile", ["uploadLogo"]),

        onFileSelected(event) {
            this.imageFile = event;
            const reader = new FileReader();
            reader.readAsDataURL(this.imageFile);
            reader.onload = e => (this.logo = e.target.result);
        }
    }
};
</script>
