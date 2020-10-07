<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-toolbar flat height="90">
                <v-row class="d-flex justify-space-between align-center flex-wrap" style="width: 100%">
                    <v-btn
                            color="secondary"
                            class="text-capitalize d-flex mx-auto mx-sm-0"
                            depressed
                            @click="dialog = true"
                    >create supplier</v-btn
                    >

                    <v-col cols="12" sm="4" class="px-0 mx-auto mx-sm-0">
                        <v-text-field
                                label="Search"
                                color="secondary"
                                rounded
                                outlined
                                dense
                                clearable
                                hide-details
                                :prepend-inner-icon="icons.mdiMagnify"
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-toolbar>

            <v-data-table
                :headers="headers"
                :items="items"
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
                                @click="myFunc(item)"
                            >
                                <v-icon
                                    v-text="icons.mdiPencilOutline"
                                ></v-icon>
                            </v-btn>
                        </template>

                        <span class="font-weight-bold">Update</span>
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

                        <span class="font-weight-bold">Delete</span>
                    </v-tooltip>
                </template>
            </v-data-table>

            <v-dialog v-model="dialog" :max-width="$vuetify.breakpoint.smAndDown ? '90%' : '40%'" scrollable>
               <CreateUpdateSupplier @close="dialog=false"/>
            </v-dialog>
        </v-sheet>

        <DeleteDialog />
    </v-container>
</template>

<script>
import { mdiPencilOutline, mdiClose, mdiMagnify, mdiPlus } from "@mdi/js";
import CreateUpdateSupplier from "../../components/loyaltyPanel/suppliermanagement/SupplierForm";
import DeleteDialog from "@/components/loyaltyPanel/userRights/DeleteDialog.vue";
import { mapMutations } from "vuex";

export default {
    name: "SupplierManagement",
    components: { CreateUpdateSupplier, DeleteDialog },
    data: () => ({
        icons: {
            mdiPencilOutline,
            mdiClose,
            mdiMagnify,
            mdiPlus
        },
        headers: [
            { text: "Name", value: "name" },
            { text: "Email", value: "email" },
            { text: "Actions", value: "actions" }
        ],
        items: [
            { name: "Vasso", email: "vasso.fitrou@gmail.com" },
            { name: "Test Lefko", email: "lefkothea@roadcube.com" },
            { name: "Papadakis Mixail", email: "info@roadcube.com" }
        ],
        itemsPerPageOptions: [10, 20, 30, -1],
        dialog: false
    }),
    computed: {
        deleteDialog: {
            get() {
                return this.$store.state.loyaltyPanel.userRights.deleteDialog;
            },

            set(val) {
                this.setDeleteDialog(val);
            }
        },
    },
    methods: {
        ...mapMutations("loyaltyPanel/userRights", [
            "setDeleteDialog"
        ])
    }
};
</script>

<style scoped>
.b-outlined {
    border: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
