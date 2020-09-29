<template>
    <v-tab-item>
        <v-toolbar flat height="80">
            <v-btn
                color="secondary"
                class="text-capitalize"
                depressed
                @click="
                    () => {
                        shopDialog = true;
                        mode = 1;
                    }
                "
                >add shop</v-btn
            >

            <v-spacer></v-spacer>

            <v-btn
                color="secondary"
                class="text-capitalize"
                depressed
                @click="rightsDialog = true"
                >Rights</v-btn
            >
        </v-toolbar>

        <SearchField
            :selectedSearchType="selectedSearchType"
            :searchTypes="searchTypes"
        />

        <v-sheet outlined style="overflow: auto">
            <v-sheet width="1400px">
                <v-data-table
                    :headers="headers"
                    :items="items"
                    :footer-props="{ itemsPerPageOptions }"
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
                                            shopDialog = true;
                                            mode = 2;
                                        }
                                    "
                                >
                                    <v-icon
                                        v-text="icons.mdiPencilOutline"
                                    ></v-icon>
                                </v-btn>
                            </template>

                            <span>Update</span>
                        </v-tooltip>

                        <v-tooltip color="secondary" top>
                            <template v-slot:activator="{ on }">
                                <v-btn
                                    color="secondary"
                                    icon
                                    v-on="on"
                                    @click="redirectDialog = true"
                                >
                                    <v-icon
                                        v-text="icons.mdiOpenInNew"
                                    ></v-icon>
                                </v-btn>
                            </template>

                            <span>Redirect</span>
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

                            <span>Delete</span>
                        </v-tooltip>
                    </template>
                </v-data-table>
            </v-sheet>
        </v-sheet>

        <RedirectDialog />
        <DeleteDialog />
    </v-tab-item>
</template>

<script>
import { mdiPencilOutline, mdiOpenInNew, mdiClose } from "@mdi/js";
import { mapMutations } from "vuex";
import RedirectDialog from "@/components/loyaltyPanel/branches/RedirectDialog.vue";
import DeleteDialog from "@/components/loyaltyPanel/branches/DeleteDialog.vue";
import SearchField from "@/components/loyaltyPanel/SearchField";

export default {
    name: "BranchesTab",
    components: { RedirectDialog, DeleteDialog, SearchField },
    data: () => ({
        icons: { mdiPencilOutline, mdiOpenInNew, mdiClose },
        searchTypes: [
            "All Fields",
            "Name",
            "Name of Shop(in app)",
            "Banks",
            "Address",
            "Phone",
            "Registration Date"
        ],
        selectedSearchType: "All Fields",
        headers: [
            { text: "Name", value: "name" },
            {
                text: "Name of Shop(in app)",
                value: "name_of_shop"
            },
            { text: "Map", value: "map" },
            { text: "Payments", value: "payments" },
            { text: "Z", value: "z" },
            { text: "Banks", value: "banks" },
            { text: "Address", value: "address" },
            { text: "Phone", value: "phone" },
            {
                text: "Registration Date",
                value: "registration_date"
            },
            { text: "Active", value: "active" },
            { text: "Actions", value: "actions" }
        ],
        items: [
            {
                name: "Vasilis",
                name_of_shop: "katerina1",
                map: "OFF",
                payments: "OFF",
                z: "ON",
                banks: "ethniki",
                address: "Agias Glikerias 10",
                phone: "545648989478",
                registration_date: "2019/06/27",
                active: "ON"
            },
            {
                name: "Vasilis",
                name_of_shop: "katerina1",
                map: "OFF",
                payments: "OFF",
                z: "ON",
                banks: "ethniki",
                address: "Agias Glikerias 10",
                phone: "545648989478",
                registration_date: "2019/06/27",
                active: "ON"
            },
            {
                name: "Vasilis",
                name_of_shop: "katerina1",
                map: "OFF",
                payments: "OFF",
                z: "ON",
                banks: "ethniki",
                address: "Agias Glikerias 10",
                phone: "545648989478",
                registration_date: "2019/06/27",
                active: "ON"
            }
        ],
        itemsPerPageOptions: [10, 20, 30, -1]
    }),

    computed: {
        mode: {
            get() {
                return this.$store.state.loyaltyPanel.branches.mode;
            },

            set(val) {
                this.setMode(val);
            }
        },

        shopDialog: {
            get() {
                return this.$store.state.loyaltyPanel.branches.addShopDialog;
            },

            set(val) {
                this.setShopDialog(val);
            }
        },

        rightsDialog: {
            get() {
                return this.$store.state.loyaltyPanel.branches.rightsDialog;
            },

            set(val) {
                this.setRightsDialog(val);
            }
        },

        redirectDialog: {
            get() {
                return this.$store.state.loyaltyPanel.branches.redirectDialog;
            },

            set(val) {
                this.setRedirectDialog(val);
            }
        },

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
        ...mapMutations("loyaltyPanel/branches", [
            "setMode",
            "setShopDialog",
            "setRightsDialog",
            "setRedirectDialog",
            "setDeleteDialog"
        ])
    }
};
</script>
