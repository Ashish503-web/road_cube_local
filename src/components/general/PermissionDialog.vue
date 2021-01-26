<template>
    <v-dialog v-model="permissionDialog" max-width="450">
        <v-card>
            <v-card-title class="red--text">
                Forbidden Action
                <v-spacer></v-spacer>
                <v-btn icon @click="permissionDialog = false">
                    <v-icon size="28" v-text="icons.mdiClose"></v-icon>
                </v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text class="pt-4">
                <div class="subtitle-1 font-weight-bold text--primary">
                    You don’t have the rights to perform this action. <br />
                    Please contact a service admin.
                </div>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import { mdiClose } from "@mdi/js";
import { mapMutations } from "vuex";

export default {
    name: "PermissionDialog",

    data: () => ({
        icons: { mdiClose }
    }),

    computed: {
        permissionDialog: {
            get() {
                return this.$store.state.permissionDialog;
            },

            set(val) {
                this.setPermissionDialog(val);
            }
        }
    },

    methods: {
        ...mapMutations(["setPermissionDialog"])
    }
};
</script>
