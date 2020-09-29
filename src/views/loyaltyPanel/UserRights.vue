<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-toolbar flat height="80">
                <v-btn
                    color="secondary"
                    class="text-capitalize"
                    depressed
                    @click="
                        () => {
                            mode = 1;
                            userDialog = true;
                        }
                    "
                    >Register User</v-btn
                >

                <v-spacer></v-spacer>

                <v-col cols="10" sm="8" md="6" lg="4" class="pa-3">
                    <v-text-field
                        label="Search"
                        color="secondary"
                        outlined
                        dense
                        clearable
                        rounded
                        hide-details
                        :prepend-inner-icon="icons.mdiMagnify"
                    ></v-text-field>
                </v-col>
            </v-toolbar>

            <v-data-table
                :headers="headers"
                :items="users"
                :footer-props="{ itemsPerPageOptions }"
                class="b-outlined"
            >
                <template v-slot:item.edit>
                    <v-tooltip color="secondary" top>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                color="yellow darken-3"
                                icon
                                v-on="on"
                                @click="
                                    () => {
                                        mode = 2;
                                        userDialog = true;
                                    }
                                "
                            >
                                <v-icon
                                    v-text="icons.mdiPencilOutline"
                                ></v-icon>
                            </v-btn>
                        </template>

                        <span style="font-weight: 600">Update</span>
                    </v-tooltip>

                    <v-tooltip color="secondary" top>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                color="red"
                                icon
                                v-on="on"
                                @click="deleteDialog = true"
                            >
                                <v-icon v-text="icons.mdiClose"></v-icon>
                            </v-btn>
                        </template>

                        <span style="font-weight: 600">Delete</span>
                    </v-tooltip>
                </template>
            </v-data-table>

            <UserDialog />
            <DeleteDialog />
        </v-sheet>
    </v-container>
</template>

<script>
import { mdiMagnify, mdiPencilOutline, mdiClose } from "@mdi/js";
import { mapMutations } from "vuex";
import UserDialog from "@/components/loyaltyPanel/userRights/UserDialog.vue";
import DeleteDialog from "@/components/loyaltyPanel/userRights/DeleteDialog.vue";

export default {
    name: "UserRights",
    components: { UserDialog, DeleteDialog },
    data: () => ({
        icons: {
            mdiMagnify,
            mdiPencilOutline,
            mdiClose
        },
        headers: [
            { text: "Username", value: "username", align: "center" },
            { text: "User Password", value: "password", align: "center" },
            { text: "Rights", value: "rights", align: "center" },
            { text: "Edit", value: "edit", align: "center" }
        ],
        users: [
            {
                username: "katerinanikos",
                password: "pass1",
                rights: "Press edit..."
            },
            {
                username: "katerinanikos",
                password: "pass2",
                rights: "Press edit..."
            },
            {
                username: "katerinanikos",
                password: "pass3",
                rights: "Press edit..."
            }
        ],
        itemsPerPageOptions: [10, 20, 30, -1]
    }),

    computed: {
        mode: {
            get() {
                return this.$store.state.loyaltyPanel.userRights.mode;
            },

            set(val) {
                this.setMode(val);
            }
        },

        userDialog: {
            get() {
                return this.$store.state.loyaltyPanel.userRights.userDialog;
            },

            set(val) {
                this.setUserDialog(val);
            }
        },

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
        ...mapMutations("loyaltyPanel/userRights", [
            "setMode",
            "setUserDialog",
            "setDeleteDialog"
        ])
    }
};
</script>
