<template>
    <v-card>
        <v-card-title
            class="white--text"
            :class="type === 'delete' ? 'red' : 'secondary'"
        >
            {{ title }}
            <v-spacer></v-spacer>
            <v-icon dark large>{{ icons[`${icon}`] }}</v-icon>
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text class="pt-5">
            <v-form @submit.prevent="$emit('submit')">
                <slot></slot>
                <button type="submit" hidden></button>
            </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="$emit('cancel')">{{ cancelText }}</v-btn>
            <v-btn
                type="submit"
                :color="type === 'delete' ? 'red' : 'secondary'"
                class="px-5"
                dark
                depressed
                @click="$emit('submit')"
                >{{ submitText }}</v-btn
            >
        </v-card-actions>
    </v-card>
</template>

<script>
import {
    mdiPlus,
    mdiPencilOutline,
    mdiAccountTie,
    mdiBankTransfer,
    mdiDelete
} from "@mdi/js";

export default {
    name: "BCard",
    props: {
        type: {
            type: String,
            default: "default"
        },
        title: String,
        icon: String,
        "cancel-text": {
            type: String,
            default: "cancel"
        },
        "submit-text": {
            type: String,
            default: "save"
        }
    },

    data: () => ({
        icons: {
            mdiPlus,
            mdiPencilOutline,
            mdiAccountTie,
            mdiBankTransfer,
            mdiDelete
        }
    })
};
</script>
