<template>
    <v-dialog v-model="deleteDialog" max-width="500" scrollable>
        <v-card>
            <v-card-title class="red white--text">
                Delete Company
                <v-spacer></v-spacer>
                <v-icon dark large v-text="icons.mdiDelete"></v-icon>
            </v-card-title>

            <v-divider></v-divider>

            <v-card-text class="pt-5 subtitle-1 font-weight-bold">
                <p>
                    Do you want to delete User with name
                    <span class="font-weight-bold text--primary font-italic"
                        >lefkothea.</span
                    >
                </p>

                Do you want to continue?
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn text @click="deleteDialog = false">cancel</v-btn>
                <v-btn color="red" dark class="px-5" depressed>
                    delete
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mdiDelete } from "@mdi/js";
import { mapMutations } from "vuex";

export default {
    name: "DeleteDialog",

    data: () => ({
        icons: { mdiDelete }
    }),

    computed: {
        deleteDialog: {
            get() {
                return this.$store.state.loyaltyPanel.userRights.deleteDialog;
            },

            set(val) {
                this.setDeleteDialog(val);
            }
        }
    },

    methods: {
        ...mapMutations("loyaltyPanel/userRights", ["setDeleteDialog"])
    }
};
</script>
