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
            <v-form v-model="valid" @submit.prevent="$emit('submit')">
                <slot></slot>
                <button type="submit" hidden></button>
            </v-form>
        </v-card-text>

        <v-alert v-if="errorMessage" type="error">{{ errorMessage }}</v-alert>

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
                :loading="loading"
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
        cancelText: {
            type: String,
            default: "cancel"
        },
        submitText: {
            type: String,
            default: "save"
        },
        loading: Boolean,
        errorMessage: String
    },

    data: () => ({
        icons: {
            mdiPlus,
            mdiPencilOutline,
            mdiAccountTie,
            mdiBankTransfer,
            mdiDelete
        },
        valid: false,
        disabled: true
    }),

    watch: {
        valid(val) {
            if (val) {
                this.disabled = false;
            } else {
                this.disabled = true;
            }
        }
    }
};
</script>
