<template>
    <v-card tile>
        <v-card-title
            class="subtitle-1 font-weight-bold"
            :class="{
                red: type === 'delete',
                'white--text': type === 'delete'
            }"
        >
            {{ title }}
            <v-spacer></v-spacer>
            <v-btn icon :dark="type === 'delete'" @click="$emit('cancel')">
                <v-icon v-text="icons.mdiClose"></v-icon>
            </v-btn>
        </v-card-title>

        <v-divider></v-divider>

        <v-form v-model="valid" ref="form" @submit.prevent="$emit('submit')">
            <v-card-text class="pt-4">
                <slot></slot>
            </v-card-text>

            <v-alert v-if="errorMessage" type="error">{{
                errorMessage
            }}</v-alert>

            <v-divider></v-divider>

            <v-card-actions v-if="!hideDefaultFooter">
                <v-spacer></v-spacer>
                <v-btn
                    text
                    class="text-capitalize"
                    style="font-size: 0.9rem"
                    @click="$emit('cancel')"
                    >{{ cancelText[lang] }}</v-btn
                >
                <v-btn
                    type="submit"
                    :color="type === 'delete' ? 'red' : 'secondary'"
                    class="text-capitalize px-5"
                    style="font-size: 0.9rem"
                    :dark="type === 'delete'"
                    depressed
                    :loading="loading"
                    :disabled="disabled"
                    >{{ submitText[lang] }}</v-btn
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
            type: Object,
            default: () => ({ el: "", en: "cancel", it: "" })
        },
        submitText: {
            type: Object,
            default: () => ({ el: "", en: "save", it: "" })
        },
        hideDefaultFooter: Boolean,
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

    computed: {
        lang() {
            return this.$route.params.lang;
        }
    },

    watch: {
        valid(val) {
            if (val) {
                this.disabled = false;
            } else {
                this.disabled = true;
            }
        },

        resetValidation(val) {
            if (val) this.$refs.form.resetValidation();
        }
    },

    mounted() {
        this.$clearFocus();
        this.$refs.form.resetValidation();
    }
};
</script>
