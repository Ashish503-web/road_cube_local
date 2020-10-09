<template>
    <b-standard-card
        title="Pin Display"
        submit-text="update logo"
        :loading="loading"
        :error-message="errorMessage"
        @submit="uploadMapLogo(imageFile)"
    >
        <v-row no-gutters justify="space-between" class="flex-wrap-reverse">
            <v-col cols="12" sm="6">
                Here you can change the display of the pin on the map:
                <v-sheet width="84" class="relative mx-auto mx-sm-0">
                    <v-img :src="bubble" width="84"></v-img>
                    <v-img :src="mapLogo" class="map-new-pin"></v-img>
                </v-sheet>
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
            <v-col cols="12" sm="6" class="mb-2">
                <v-img
                    src="@/assets/theMapLogo3.png"
                    width="260"
                    style="border: 2px solid gray"
                    class="rounded-circle"
                ></v-img>
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
            return this.$store.state.storePanel.settings.profile.loading
                .mapLogo;
        },

        errorMessage() {
            return this.$store.state.storePanel.settings.profile.errorMessage
                .mapLogo;
        },

        success: {
            get() {
                return this.$store.state.storePanel.settings.profile.success
                    .mapLogo;
            },

            set(val) {
                this.setSuccess({ value: val, type: "mapLogo" });
            }
        },

        mapLogo: {
            get() {
                return this.$store.state.storePanel.store.map_logo;
            },

            set(val) {
                this.setMapLogo(val);
            }
        }
    },

    methods: {
        ...mapMutations("storePanel", ["setMapLogo"]),
        ...mapMutations("storePanel/settings/profile", ["setSuccess"]),
        ...mapActions("storePanel/settings/profile", ["uploadMapLogo"]),

        onFileSelected(event) {
            this.imageFile = event;
            const reader = new FileReader();
            reader.readAsDataURL(this.imageFile);
            reader.onload = e => (this.mapLogo = e.target.result);
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
