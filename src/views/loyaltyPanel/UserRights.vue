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
                <template v-slot:item.actions="{ item }">
                    <v-tooltip color="secondary" top>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                color="yellow darken-3"
                                icon
                                v-on="on"
                                @click="() => {open(2,item)}"
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
                </template>
            </v-data-table>

            <v-dialog v-model="dialog" max-width="600">
                <UserForm :mode="mode" @cancel="dialog = false" />
            </v-dialog>
        </v-sheet>
    </v-container>
</template>

<script>
import { mdiPencilOutline, mdiClose } from "@mdi/js";
import { mapState, mapMutations, mapActions } from "vuex";

import UserForm from "@/components/loyaltyPanel/userRights/UserForm.vue";
import translations from "@/utils/translations/loyaltyPanel/userRights";
import UIPermissions from "@/models/loyaltyPanel/UIPermissions";

export default {
    name: "UserRights",

    components: { UserForm },

    mixins: [translations],

    data: () => ({
        icons: { mdiPencilOutline, mdiClose },
        mode: 0,
        itemsPerPageOptions: [10, 20, 30, -1]
    }),

    computed: {
        ...mapState("loyaltyPanel/userRights", ["users"]),
        lang() {
            return this.$route.params.lang;
        },

        headers() {
            return [
                {
                    text: this.translations.user[this.lang],
                    value: "user"
                },
                {
                    text: this.translations.userRole[this.lang],
                    value: "role"
                },
                { text: this.translations.date[this.lang], value: "created_at" },
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
        },

        user: {
            get() {
                return this.$store.state.loyaltyPanel.users.user;
            },

            set(val) {
                this.setUser(val);
            },
        },

        query() {
            let query = "?";

            for (let key in this.$route.query) {
                query += `${key}=${this.$route.query[key]}&`;
            }

            return query.slice(0, query.length - 1);
        }
    },

    watch: {
        $route(val) {
            if (!val.query.page) {
                this.$router.replace({
                    query: {
                        page: 1,
                        ...this.$route.query,
                    },
                });
            }
            this.getUsers(this.query);
        },

        page(page) {
            this.$router.replace({ query: { ...this.$route.query, page } });
        }
    },

    methods: {
        ...mapMutations(["setDialog", "setDeleteDialog","setResetSuccess","setResetValidation"]),
        ...mapMutations("loyaltyPanel/userRights", ["setUser","setPermissions"]),
        ...mapActions("loyaltyPanel/userRights", ["getUsers","getUser"]),

        open(mode,item){
            item.permissions = new UIPermissions(item.permissions);
            this.user = item
            this.mode = mode
            this.dialog = true
        }
    },

    mounted(){
        this.getUsers(this.query)
    },

    beforeCreate() {
        if (!this.$route.query.page) {
            this.$router.replace({
                query: {
                    page: 1,
                    ...this.$route.query,
                },
            });
        }
    }
};
</script>
