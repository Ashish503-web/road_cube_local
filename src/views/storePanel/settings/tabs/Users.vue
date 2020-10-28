<template>
    <v-tab-item :value="$route.path" class="pt-5">
        <v-toolbar flat height="90">
            <v-row class="d-flex align-center">
                <v-btn
                    color="secondary"
                    class="text-capitalize ml-3 ml-sm-0"
                    depressed
                    @click="open(1, {})"
                    >register user</v-btn
                >

                <v-spacer></v-spacer>

                <v-col cols="12" sm="4" class="pb-0">
                    <b-search-field></b-search-field>
                </v-col>
            </v-row>
        </v-toolbar>

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
                <v-tooltip color="secondary" top>
                    <template v-slot:activator="{ on }">
                        <v-icon
                            :color="
                                item.permissions_enabled ? 'success' : 'red'
                            "
                            v-on="on"
                            v-text="
                                item.permissions_enabled
                                    ? icons.mdiCheckBold
                                    : icons.mdiMinusCircleOutline
                            "
                        ></v-icon>
                    </template>

                    <span
                        class="font-weight-bold"
                        v-text="
                            item.permissions_enabled ? 'Enabled' : 'Disabled'
                        "
                    ></span>
                </v-tooltip>
            </template>

            <template v-slot:item.actions="{ item }">
                <v-tooltip color="secondary" top>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            :color="item.permissions_enabled ? 'secondary' : ''"
                            icon
                            v-on="on"
                            @click="
                                () => {
                                    enablePermissions();
                                    item.permissions_enabled = !item.permissions_enabled;
                                }
                            "
                        >
                            <v-icon
                                v-text="
                                    item.permissions_enabled
                                        ? icons.mdiCheckBoxOutline
                                        : icons.mdiCheckboxBlankOutline
                                "
                            ></v-icon>
                        </v-btn>
                    </template>

                    <span
                        class="font-weight-bold"
                        v-text="
                            item.permissions_enabled
                                ? 'Disable Permissions'
                                : 'Enable Permissions'
                        "
                    ></span>
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

                <v-tooltip color="secondary" top>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            color="red"
                            icon
                            v-on="on"
                            @click="
                                () => {
                                    user = item;
                                    deleteDialog = true;
                                }
                            "
                        >
                            <v-icon v-text="icons.mdiClose"></v-icon>
                        </v-btn>
                    </template>

                    <span class="font-weight-bold">Delete</span>
                </v-tooltip>
            </template>
        </v-data-table>

        <v-dialog v-model="dialog" max-width="500">
            <UserForm :mode="mode" @cancel="dialog = false" />
        </v-dialog>
    </v-tab-item>
</template>

<script>
import {
    mdiCheckBold,
    mdiMinusCircleOutline,
    mdiCheckboxBlankOutline,
    mdiCheckBoxOutline,
    mdiPencilOutline,
    mdiClose
} from "@mdi/js";

import { mapState, mapMutations, mapActions } from "vuex";
import UserForm from "@/components/storePanel/settings/users/UserForm.vue";

export default {
    name: "Users",

    components: { UserForm },

    data() {
        return {
            icons: {
                mdiCheckBold,
                mdiMinusCircleOutline,
                mdiCheckboxBlankOutline,
                mdiCheckBoxOutline,
                mdiPencilOutline,
                mdiClose
            },
            headers: [
                { text: "User", value: "user" },
                { text: "Role", value: "role" },
                { text: "Date", value: "created_at" },
                {
                    text: "Permissions",
                    value: "permissions_enabled",
                    align: "center"
                },
                { text: "Actions", value: "actions" }
            ],
            lang: "el",
            page: +this.$route.query.page,
            mode: 0
        };
    },

    computed: {
        ...mapState(["loading", "errorMessage", "serverItemsLength"]),
        ...mapState("storePanel/settings/users", ["users"]),

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
            "getItems",
            "enablePermissions",
            "disablePermissions",
            "remove"
        ]),

        open(mode, item) {
            this.mode = mode;
            // this.user = item;
            // if (this.product.image) this.setShowImageUpload(true);
            // else this.setShowImageUpload(false);
            // if (this.product.availability_days.length)
            //     this.setShowWeekdays(true);
            // else this.setShowWeekdays(false);
            // setTimeout(() => this.setResetSuccess(true), 300);
            // this.setResetValidation(true);
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

<style>
.v-data-footer {
    padding: 12px 0;
}
</style>
