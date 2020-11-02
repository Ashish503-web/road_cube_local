<template>
    <v-window-item :value="4" class="pa-0">
        <v-card>
            <v-card-title class="success white--text justify-center pb-0">
                Congratulations!
            </v-card-title>
            <v-row no-gutters justify="center" class="success">
                <v-col cols="auto">
                    <v-alert type="success" class="bb" dense>{{
                        successMessage
                    }}</v-alert>
                </v-col>
            </v-row>

            <div class="text-center py-5">
                <v-btn
                    color="secondary"
                    class="px-10"
                    outlined
                    tile
                    :to="
                        mode === 'company'
                            ? `/${lang}/loyaltyPanel`
                            : `/${lang}/storePanel`
                    "
                    @click="setStep(1)"
                >
                    continue to {{ mode }}
                    <v-icon
                        class="ml-1"
                        size="20"
                        v-text="icons.mdiArrowRight"
                    ></v-icon>
                </v-btn>
            </div>
        </v-card>
    </v-window-item>
</template>

<script>
import { mdiArrowRight } from "@mdi/js";
import { mapMutations } from "vuex";

export default {
    name: "SuccessMessage",

    data: () => ({
        icons: { mdiArrowRight }
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        successMessage() {
            return this.$store.state.register.successMessage;
        },

        mode() {
            let arr = this.successMessage.split(" ");
            return arr[arr.length - 1];
        }
    },

    methods: {
        ...mapMutations("register", ["setStep"])
    }
};
</script>
