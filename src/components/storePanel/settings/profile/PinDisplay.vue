<template>
    <b-standard-card
        :title="translations.title[lang]"
        :submit-text="{ el: '', en: 'Update Logo', it: '' }"
        :loading="loading"
        :error-message="errorMessage"
        @submit="uploadMapLogo({ type: 'mapLogo', imageFile })"
    >
        <div style="height: 100px" v-text="translations.info[lang]"></div>

        <v-row no-gutters align="center" style="height: 120px">
            <v-col cols="12" sm="5" class="pr-2">
                <v-sheet width="84" class="relative mx-auto">
                    <v-img :src="bubble" width="84" height="84"></v-img>
                    <v-img :src="mapLogo" class="map-new-pin"></v-img>
                </v-sheet>
            </v-col>

            <v-col cols="12" sm="7" class="pl-0 pl-sm-2">
                {{ translations.uploadText[lang] }}
                <v-file-input
                    v-model="fileInput"
                    color="secondary"
                    class="mt-1"
                    outlined
                    dense
                    hide-details="auto"
                    :rules="rules"
                    :success="success"
                ></v-file-input>
            </v-col>
        </v-row>

        <v-dialog v-model="dialog" max-width="800" persistent>
            <v-card>
                <v-row no-gutters align="center">
                    <v-col cols="6">
                        <clipper-basic
                            :src="imageUrl"
                            ref="clipper"
                            :min-height="2"
                        ></clipper-basic>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="secondary"
                                class="text-capitalize px-5"
                                style="font-size: 0.9rem"
                                @click="getClippedResult"
                                >clip image</v-btn
                            >
                        </v-card-actions>
                    </v-col>
                    <v-col cols="6">
                        <v-card-title class="justify-center"
                            >Result</v-card-title
                        >
                        <v-card-subtitle class="text-center"
                            >This is the final result that will be displayed as
                            your store logo</v-card-subtitle
                        >
                        <v-divider></v-divider>

                        <v-card-text class="text-center">
                            <v-sheet height="258">
                                <img
                                    :src="resultURL"
                                    width="250"
                                    height="250"
                                    class="rounded-circle"
                                    :class="{ 'b-image-border': resultURL }"
                                />
                            </v-sheet>
                        </v-card-text>

                        <v-divider></v-divider>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                class="text-capitalize"
                                style="font-size: 0.9rem"
                                text
                                @click="
                                    () => {
                                        fileInput = null;
                                        dialog = false;
                                    }
                                "
                                >cancel</v-btn
                            >
                            <v-btn
                                color="secondary"
                                class="text-capitalize px-5"
                                style="font-size: 0.9rem"
                                :disabled="!resultURL"
                                @click="changeImage"
                                >save</v-btn
                            >
                        </v-card-actions>
                    </v-col>
                </v-row>
            </v-card>
        </v-dialog>
    </b-standard-card>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import translations from "@/utils/translations/storePanel/settings/pinDisplay";
import bubble from "@/assets/new_bubble_image.png";

export default {
    name: "PinDisplay",

    mixins: [translations],

    data() {
        return {
            dialog: false,
            fileInput: null,
            imageUrl: null,
            resultURL: null,
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
        lang() {
            return this.$route.params.lang;
        },

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
            this.resultURL = null;
            this.dialog = true;
            if (event) {
                if (this.imageUrl) URL.revokeObjectURL(this.imageUrl);
                this.imageUrl = URL.createObjectURL(event);
            }
        },

        getClippedResult() {
            const canvas = this.$refs.clipper.clip();
            this.resultURL = canvas.toDataURL("image/jpeg", 1);
        },

        changeImage() {
            this.mapLogo = this.resultURL;
            let blobBin = atob(this.resultURL.split(",")[1]);
            let arr = [];

            for (let i = 0; i < blobBin.length; i++) {
                arr.push(blobBin.charCodeAt(i));
            }

            this.imageFile = new Blob([new Uint8Array(arr)], {
                type: "image/png"
            });

            this.dialog = false;
        }
    },

    watch: {
        ["$store.state.storePanel.store"]: {
            immediate: true,
            handler(val) {
                this.mapLogo = val.map_logo;
            }
        },

        fileInput(val) {
            if (val) this.onFileSelected(val);
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
    border-radius: 50%;
    width: 50px;
    height: 50px;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.b-image-border {
    border: 1px solid rgba(0, 0, 0, 0.26);
}
</style>
