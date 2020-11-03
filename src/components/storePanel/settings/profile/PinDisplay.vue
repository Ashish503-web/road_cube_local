<template>
    <b-standard-card
        title="Pin Display"
        submit-text="update logo"
        :loading="loading"
        :error-message="errorMessage"
        @submit="uploadMapLogo({ type: 'mapLogo', imageFile })"
    >
        <div style="height: 100px">
            Here you can change the display of the pin on the map:
        </div>

        <v-row no-gutters align="center" style="height: 120px">
            <v-col cols="12" sm="5" class="pr-2">
                <v-sheet width="84" class="relative mx-auto">
                    <v-img :src="bubble" width="84"></v-img>
                    <v-img :src="mapLogo" class="map-new-pin"></v-img>
                </v-sheet>
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
import bubble from "@/assets/new_bubble_image.png";
import { mapMutations, mapActions } from "vuex";

export default {
    name: "PinDisplay",

    data() {
        return {
            bubble,
            mapLogo: "",
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
        loading() {
            return this.$store.state.storePanel.settings.profile.loading
                .mapLogo;
        },

        errorMessage() {
            return this.$store.state.storePanel.settings.profile.errorMessage
                .mapLogo;
        },

        resetSuccess() {
            return this.$store.state.storePanel.settings.profile.resetSuccess
                .mapLogo;
        }
    },

    methods: {
        ...mapMutations("storePanel/settings/profile", ["setResetSuccess"]),
        ...mapActions("storePanel/settings/profile", ["uploadMapLogo"]),

        onFileSelected(event) {
            this.imageFile = event;
            const reader = new FileReader();
            reader.readAsDataURL(this.imageFile);
            reader.onload = e => (this.mapLogo = e.target.result);
        }
    },

    watch: {
        ["$store.state.storePanel.store"]: {
            immediate: true,
            handler(val) {
                this.mapLogo = val.map_logo;
            }
        },

        success(val) {
            if (val) this.setResetSuccess({ type: "mapLogo", value: false });
        },

        resetSuccess(val) {
            if (val) this.success = false;
        }
    }
};
</script>

<style scoped>
.map-new-pin {
    width: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
