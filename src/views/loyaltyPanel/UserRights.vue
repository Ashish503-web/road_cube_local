<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-toolbar flat height="90">
                <v-btn
                    color="secondary"
                    class="text-capitalize px-5"
                    depressed
                    v-text="translations.registerUser[lang]"
                    @click="
                        () => {
                            mode = 1;
                            dialog = true;
                        }
                    "
                ></v-btn>

                <v-spacer></v-spacer>

                <v-col cols="4" class="pa-0">
                    <b-search-field></b-search-field>
                </v-col>
            </v-toolbar>

            <v-data-table
                :headers="headers"
                :items="users"
                :footer-props="{ itemsPerPageOptions }"
                class="b-outlined"
            >
                <template v-slot:item.actions>
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

                        <span
                            class="font-weight-bold"
                            v-text="translations.update[lang]"
                        ></span>
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

                        <span
                            class="font-weight-bold"
                            v-text="translations.delete[lang]"
                        ></span>
                    </v-tooltip>
                </template>
            </v-data-table>

            <v-dialog v-model="dialog" max-width="600">
                <UserForm :mode="mode" @cancel="dialog = false" />
            </v-dialog>

            <v-dialog v-model="deleteDialog" max-width="500">
                <b-card
                    type="delete"
                    title="Delete Product"
                    submit-text="delete"
                    @cancel="deleteDialog = false"
                >
                    <div class="pl-2">
                        Are you sure you want to delete User with name
                        <span class="font-weight-bold text--primary">Edgar</span
                        >?
                    </div>
                </b-card>
            </v-dialog>
        </v-sheet>
    </v-container>
</template>

<script>
import { mdiPencilOutline, mdiClose } from "@mdi/js";
import { mapMutations } from "vuex";

import UserForm from "@/components/loyaltyPanel/userRights/UserForm.vue";
import translations from "@/utils/translations/loyaltyPanel/userRights";

export default {
    name: "UserRights",

    components: { UserForm },

    mixins: [translations],

    data: () => ({
        icons: { mdiPencilOutline, mdiClose },
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
        mode: 0,
        itemsPerPageOptions: [10, 20, 30, -1]
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        headers() {
            return [
                {
                    text: this.translations.userName[this.lang],
                    value: "username"
                },
                {
                    text: this.translations.userPassword[this.lang],
                    value: "password"
                },
                { text: this.translations.rights[this.lang], value: "rights" },
                { text: this.translations.actions[this.lang], value: "actions" }
            ];
        },

        dialog: {
            get() {
                return this.$store.state.dialog;
            },

            set(val) {
                this.setDialog(val);
            }
        },

        deleteDialog: {
            get() {
                return this.$store.state.deleteDialog;
            },

            set(val) {
                this.setDeleteDialog(val);
            }
        }
    },

    methods: {
        ...mapMutations(["setDialog", "setDeleteDialog"])
    }
};
</script>
