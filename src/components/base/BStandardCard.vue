<template>
    <v-card outlined :height="height">
        <v-row no-gutters class="fill-height" align-content="space-between">
            <v-col cols="12">
                <v-card-title
                    v-if="activatable"
                    :class="titleColor"
                    class="subtitle-1 font-weight-bold"
                >
                    <v-col class="pa-0">
                        {{ title }}
                    </v-col>

                    <v-col cols="auto" class="pa-0">
                        <v-switch
                            :input-value="switcher"
                            color="secondary"
                            class="pt-0 mt-0"
                            :true-value="true"
                            :false-value="false"
                            hide-details
                            @change="$emit('update:switcher', $event)"
                        ></v-switch>
                    </v-col>

                    <v-col cols="12" class="pa-0 font-weight-medium">
                        {{ switcher ? "(Active)" : "(Inactive)" }}
                    </v-col>
                </v-card-title>

                <v-card-title
                    v-else
                    :class="titleColor"
                    class="subtitle-1 font-weight-bold"
                >
                    {{ title }}
                </v-card-title>
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12">
                <v-form v-model="valid" @submit.prevent="$emit('submit')">
                    <v-card-text
                        class="pt-4 text--secondary relative"
                        :class="{ 'px-0': noBodyPadding }"
                    >
                        <slot></slot>
                    </v-card-text>
                    <button type="submit" hidden></button>
                </v-form>
            </v-col>

            <v-col cols="12">
                <v-alert v-if="errorMessage" type="error">{{
                    errorMessage
                }}</v-alert>

                <v-divider></v-divider>

                <v-card-actions class="pl-4">
                    <v-spacer></v-spacer>
                    <template>
                        <v-btn
                            v-if="cancelText"
                            color="red"
                            class="text-capitalize px-4"
                            dark
                            depressed
                            >{{ cancelText }}</v-btn
                        >
                    </template>
                    <v-btn
                        color="secondary"
                        class="text-capitalize px-5"
                        depressed
                        :disabled="disabled"
                        :loading="loading"
                        @click="$emit('submit')"
                        >{{ submitText[lang] }}</v-btn
                    >
                </v-card-actions>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
export default {
    name: "BStandardCard",
    props: {
        height: {
            type: String,
            default: "100%"
        },
        activatable: Boolean,
        switcher: Boolean,
        title: String,
        titleColor: {
            type: String,
            default: "grey lighten-3"
        },
        cancelText: String,
        submitText: {
            type: Object,
            default: () => ({ el: "", en: "update details", it: "" })
        },
        loading: Boolean,
        errorMessage: String,
        noBodyPadding: Boolean
    },

    data: () => ({
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
        }
    }
};
</script>

<style scoped>
.relative {
    position: relative;
}
</style>
