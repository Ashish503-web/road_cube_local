<template>
    <v-btn
        color="light-blue darken-1"
        class="ma-2 white&#45;&#45;text white--text"
    >
        <v-icon
            v-text="icons.mdiCloudUpload"
            class="pr-1" color="white"></v-icon>
        <span>
                       Choose a file…
                    </span>
    </v-btn>
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
