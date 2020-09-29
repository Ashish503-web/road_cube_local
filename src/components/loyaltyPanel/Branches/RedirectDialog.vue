<template>
    <v-dialog v-model="redirectDialog" max-width="500">
        <v-card>
            <v-card-title class="grey lighten-3">
                Verification
                <v-spacer></v-spacer>
                <v-icon
                    color="secondary"
                    large
                    v-text="icons.mdiCheckCircleOutline"
                ></v-icon>
            </v-card-title>

            <v-divider></v-divider>

            <v-card-text class="pt-5 subtitle-1 font-weight-bold">
                <p>
                    Want to go to your substitute on the road
                    <span class="text--primary font-italic">dieuth.</span>
                </p>

                Do you want to continue?
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn text @click="redirectDialog = false">cancel</v-btn>
                <v-btn color="secondary" class="px-5" depressed>
                    verify
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mdiCheckCircleOutline } from "@mdi/js";
import { mapMutations } from "vuex";

export default {
    name: "RedirectDialog",

    data: () => ({
        icons: { mdiCheckCircleOutline }
    }),

    computed: {
        redirectDialog: {
            get() {
                return this.$store.state.loyaltyPanel.branches.redirectDialog;
            },

            set(val) {
                this.setRedirectDialog(val);
            }
        }
    },

    methods: {
        ...mapMutations("loyaltyPanel/branches", ["setRedirectDialog"])
    }
};
</script>
