<template>
    <v-card outlined width="500" class="mx-auto">
        <v-card-title class="secondary white--text">
            {{ title }}
            <v-spacer></v-spacer>
            <v-icon dark large>{{ icons[`${icon}`] }}</v-icon>
        </v-card-title>

        <v-divider></v-divider>

        <v-form>
            <v-card-text class="pt-5">
                <slot></slot>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="$emit('cancel')">{{ cancelText }}</v-btn>
                <v-btn
                    color="secondary"
                    class="px-5"
                    depressed
                    @click="$emit('approve')"
                    >{{ approveText }}</v-btn
                >
            </v-card-actions>
        </v-form>
    </v-card>
</template>

<script>
import { mdiPlus, mdiPencilOutline } from "@mdi/js";

export default {
    name: "BCard",
    props: {
        mode: {
            type: String,
            default: "1"
        },
        title: {
            type: String
        },
        "cancel-text": {
            type: String,
            default: "cancel"
        },
        "approve-text": {
            type: String,
            default: "save"
        }
    },

    data: () => ({
        icons: { mdiPlus, mdiPencilOutline }
    }),

    computed: {
        icon() {
            let icon = "mdi";

            switch (this.mode) {
                case "1":
                    icon += "Plus";
                    break;
                case "2":
                    icon += "PencilOutline";
                    break;
            }

            return icon;
        }
    }
};
</script>
