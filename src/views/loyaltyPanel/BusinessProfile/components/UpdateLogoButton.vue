<template>
   <v-btn
                    class="white--text mt-4 mb-3"
                    color="light-blue accent-1"
                >
                    <v-icon
                        v-text="icons.mdiArrowRight"
                    ></v-icon>
                    Update logo
                </v-btn>
</template>
<script>
import {
    mdiArrowRight

} from "@mdi/js";
export default {
    data() {
        return {
            icons: {
                mdiArrowRight,
            }
        };
    }
}
</script>