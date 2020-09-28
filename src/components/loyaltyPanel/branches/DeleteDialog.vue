<template>
    <v-dialog v-model="deleteDialog" max-width="500">
        <v-card>
            <v-card-title class="red white--text">
                Delete Company
                <v-spacer></v-spacer>
                <v-icon dark large v-text="icons.mdiDelete"></v-icon>
            </v-card-title>

            <v-divider></v-divider>

            <v-card-text class="pt-5 subtitle-1 font-weight-bold">
                <p>
                    Are you sure you want to delete
                    <span class="font-weight-bold font-italic">dieuth.</span>
                </p>

                <v-checkbox color="secondary">
                    <template v-slot:label>
                        <h4 class="subtitle-1 font-weight-bold">
                            Do you want to totally delete Company?
                        </h4>
                    </template>
                </v-checkbox>
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
                return this.$store.state.loyaltyPanel.branches.deleteDialog;
            },

            set(val) {
                this.setDeleteDialog(val);
            }
        }
    },

    methods: {
        ...mapMutations("loyaltyPanel/branches", ["setDeleteDialog"])
    }
};
</script>
