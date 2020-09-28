<template>
   <!-- <v-btn
        color="light-blue darken-1"
        class="ma-2 white&#45;&#45;text white&#45;&#45;text"
    >
        <v-icon
            v-text="icons.mdiCloudUpload"
            class="pr-1" color="white"></v-icon>
        <span>
                       Choose a file…
                    </span>
    </v-btn>-->
    <v-col cols="7">
        Press the following button to choose image:
        <v-file-input
                color="secondary"
                class="mt-1"
                outlined
                dense
                hide-details
                @change="onFileSelected(logo, $event)"
        ></v-file-input>
    </v-col>
</template>
<script>
import {
    mdiCloudUpload

} from "@mdi/js";
export default {
    data() {
        return {
            icons: {
                mdiCloudUpload,
            }
        };
    }
}
</script>
