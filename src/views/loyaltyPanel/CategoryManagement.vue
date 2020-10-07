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
                    >add category
                    </v-btn>

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

            <v-dialog v-model="dialog" :max-width="$vuetify.breakpoint.smAndDown ? '90%' : '40%'" scrollable>
                <CategoryForm @close="dialog = false" />
            </v-dialog>

            <DeleteDialog />
        </v-sheet>
    </v-container>
</template>

<script>
import { mdiMagnify, mdiPencilOutline, mdiClose } from "@mdi/js";
import CategoryForm from "../../components/loyaltyPanel/categoryManagement/CategoryForm.vue";
import DeleteDialog from "@/components/loyaltyPanel/userRights/DeleteDialog.vue";
import { mapMutations } from "vuex";

export default {
    name: "CategoryManagement",
    components: { CategoryForm, DeleteDialog },
    data: () => ({
        icons: {
            mdiMagnify,
            mdiPencilOutline,
            mdiClose
        },
        headers: [
            { text: "Category Name", value: "categoryName" },
            { text: "Font Color", value: "fontColor" },
            { text: "Background Color", value: "backgroundColor" },
            { text: "Image Category", value: "imageCategory" },
            { text: "English", value: "english" },
            { text: "Italian", value: "italian" },
            { text: "Actions", value: "actions" }
        ],
        items: [
            {
                categoryName: "Ένδυση, Υποδήματα, Αξεσουάρ",
                fontColor: "#000000",
                backgroundColor: "#ff0000",
                english: 3123,
                italian: 3123
            }
        ],
        itemsPerPageOptions: [10, 25, 50, 100],
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
