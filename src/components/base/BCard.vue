<template>
    <v-card>
        <v-card-title
            :class="{
                red: type === 'delete',
                'white--text': type === 'delete'
            }"
        >
            {{ title }}
            <v-spacer></v-spacer>
            <v-btn icon :dark="type === 'delete'" @click="$emit('cancel')">
                <v-icon size="28" v-text="icons.mdiClose"></v-icon>
            </v-btn>
        </v-card-title>

        <v-divider></v-divider>

        <v-form v-model="valid" :ref="title" @submit.prevent="$emit('submit')">
            <v-card-text class="pt-4">
                <slot></slot>
            </v-card-text>

            <v-alert v-if="errorMessage" type="error">{{
                errorMessage
            }}</v-alert>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="$emit('cancel')">{{ cancelText }}</v-btn>
                <v-btn
                    type="submit"
                    :color="type === 'delete' ? 'red' : 'secondary'"
                    class="px-5"
                    :dark="type === 'delete'"
                    depressed
                    :loading="loading"
                    :disabled="disabled"
                    >{{ submitText }}</v-btn
                >
            </v-card-actions>
        </v-form>
    </v-card>
</template>

<script>
import { mdiClose } from "@mdi/js";

export default {
    name: "BCard",
    props: {
        type: {
            type: String,
            default: "default"
        },
        title: String,
        cancelText: {
            type: String,
            default: "cancel"
        },
        submitText: {
            type: String,
            default: "save"
        },
        loading: Boolean,
        errorMessage: String,
        resetValidation: Boolean
    },

    data: () => ({
        icons: {
            mdiClose
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
        },

        resetValidation(val) {
            if (val) this.$refs[this.title].resetValidation();
        }
    },

    mounted() {
        this.$clearFocus();
        this.$refs[this.title].resetValidation();
    }
};
</script>
