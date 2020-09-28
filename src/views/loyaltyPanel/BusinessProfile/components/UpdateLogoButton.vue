<template>
   <v-btn
           color="secondary" class="text-capitalize" depressed
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