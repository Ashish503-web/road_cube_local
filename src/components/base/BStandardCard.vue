<template>
    <v-card flat :height="height">
        <v-row no-gutters class="fill-height" align-content="space-between">
            <v-col cols="12">
                <v-card-title
                    v-if="activatable"
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

                <v-card-title v-else class="subtitle-1 font-weight-bold">
                    {{ title }}
                </v-card-title>
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12">
                <v-form @submit.prevent="$emit('submit')">
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

                <v-divider v-if="!hideDefaultFooter"></v-divider>

                <v-card-actions v-if="!hideDefaultFooter" class="pl-4">
                    <v-spacer></v-spacer>
                    <template>
                        <v-btn
                            v-if="cancelText"
                            color="red"
                            class="text-capitalize px-4"
                            dark
                            depressed
                            >{{ cancelText[lang] }}</v-btn
                        >
                    </template>
                    <v-btn
                        color="secondary"
                        class="text-capitalize px-5"
                        depressed
                        :loading="loading"
                        :disabled="disabled"
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
            default: "100%",
        },
        activatable: Boolean,
        switcher: Boolean,
        title: String,
        cancelText: Object,
        submitText: {
            type: Object,
            default: () => ({ el: "", en: "update details", it: "" }),
        },
        loading: Boolean,
        noBodyPadding: Boolean,
        hideDefaultFooter: Boolean,
        errorMessage: String,
        disabled: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        lang() {
            return this.$route.params.lang;
        },
    },
};
</script>

<style scoped>
.relative {
    position: relative;
}
</style>
