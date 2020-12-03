<template>
    <v-tab-item :value="$route.path" class="pa-3">
        <v-row
            no-gutters
            justify="space-between"
            align="center"
            class="px-4 pb-6"
        >
            <v-btn
                color="secondary"
                class="text-capitalize ml-3 ml-sm-0"
                depressed
                @click="open(1, {})"
                >register user</v-btn
            >

            <v-col cols="12" sm="4" class="pa-0">
                <b-search-field></b-search-field>
            </v-col>
        </v-row>

        <v-data-table
            :headers="headers"
            :items="users"
            :footer-props="{ itemsPerPageOptions: [12], showCurrentPage: true }"
            :page.sync="page"
            :server-items-length="serverItemsLength"
            disable-sort
            class="b-outlined"
        >
            <template v-slot:no-data>
                <v-progress-circular
                    v-if="loading"
                    color="secondary"
                    indeterminate
                ></v-progress-circular>
                <span v-else>No data available</span>
            </template>

            <template v-slot:item.permissions_enabled="{ item }">
                <span v-if="item.permissions_enabled" class="green--text"
                    >Yes</span
                >
                <span v-else class="red--text">No</span>
            </template>

            <template v-slot:item.actions="{ item }">
                <v-tooltip color="secondary" top>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            icon
                            v-on="on"
                            @click="
                                () => {
                                    userId = item.user_id;
                                    profileDialog = true;
                                }
                            "
                        >
                            <v-icon
                                v-text="icons.mdiAccountSearchOutline"
                            ></v-icon>
                        </v-btn>
                    </template>

                    <span class="font-weight-bold">User Profile</span>
                </v-tooltip>

                <v-tooltip color="secondary" top>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            color="yellow darken-3"
                            icon
                            v-on="on"
                            @click="open(2, item)"
                        >
                            <v-icon v-text="icons.mdiPencilOutline"></v-icon>
                        </v-btn>
                    </template>

                    <span class="font-weight-bold">Update Permissions</span>
                </v-tooltip>
            </template>
        </v-data-table>

        <v-dialog v-model="dialog" max-width="500">
            <UserForm :mode="mode" @cancel="dialog = false" />
        </v-dialog>

        <v-dialog v-model="profileDialog" max-width="500">
            <UserProfile :user-id="userId" @cancel="profileDialog = false" />
        </v-dialog>
    </v-tab-item>
</template>

<script>
import {
    mdiCheckboxBlankOutline,
    mdiCheckBoxOutline,
    mdiCheckCircleOutline,
    mdiMinusCircleOutline,
    mdiAccountSearchOutline,
    mdiPencilOutline
} from "@mdi/js";

import UIPermissions from "@/models/storePanel/settings/UIPermissions";

import { mapState, mapMutations, mapActions } from "vuex";
import UserForm from "@/components/storePanel/settings/users/UserForm.vue";
import UserProfile from "@/components/storePanel/settings/users/UserProfile.vue";

export default {
    name: "Users",

    components: { UserForm, UserProfile },

    data() {
        return {
            icons: {
                mdiCheckboxBlankOutline,
                mdiCheckBoxOutline,
                mdiCheckCircleOutline,
                mdiMinusCircleOutline,
                mdiAccountSearchOutline,
                mdiPencilOutline
            },
            headers: [
                { text: "User", value: "user" },
                { text: "Role", value: "role" },
                { text: "Date", value: "created_at" },
                {
                    text: "Enabled",
                    value: "permissions_enabled"
                },
                { text: "Actions", value: "actions" }
            ],
            lang: "el",
            page: +this.$route.query.page,
            mode: 0,
            userId: null,
            profileDialog: false
        };
    },

    computed: {
        ...mapState(["loading", "errorMessage", "serverItemsLength"]),
        ...mapState("storePanel/settings/users", [
            "moderatorPermissions",
            "users"
        ]),

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
                return this.$store.state.storePanel.settings.users.user;
            },

            set(val) {
                this.setItem(val);
            }
        },

        query() {
            let query = "?";

            for (let key in this.$route.query) {
                query += `${key}=${this.$route.query[key]}&`;
            }

            return query.slice(0, query.length - 1);
        }
    },

    methods: {
        ...mapMutations([
            "setDialog",
            "setDeleteDialog",
            "setResetSuccess",
            "setResetValidation"
        ]),
        ...mapMutations("storePanel/settings/users", ["setItem"]),
        ...mapActions("storePanel/settings/users", [
            "getModeratorPermissions",
            "getItems"
        ]),

        open(mode, item) {
            this.mode = mode;
            if (mode === 1) {
                item.permissions = new UIPermissions(this.moderatorPermissions);
            } else {
                item.permissions = new UIPermissions(item.permissions);
            }
            this.user = item;
            setTimeout(() => this.setResetSuccess(true), 300);
            this.setResetValidation(true);
            this.dialog = true;
        }
    },

    watch: {
        dialog(val) {
            if (!val) {
                this.setResetSuccess(false);
                this.setResetValidation(false);
            }
        },

        $route(val) {
            if (!val.query.page) {
                this.$router.push({
                    query: {
                        page: 1,
                        ...this.$route.query
                    }
                });
            }
            this.getItems(this.query);
        },

        page(page) {
            this.$router.push({ query: { ...this.$route.query, page } });
        }
    },

    beforeCreate() {
        if (!this.$route.query.page) {
            this.$router.push({
                query: {
                    page: 1,
                    ...this.$route.query
                }
            });
        }
    },

    mounted() {
        this.getItems(this.query);
        this.getModeratorPermissions();
    }
};
</script>
