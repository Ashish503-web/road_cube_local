<template>
    <v-container fluid style="background: #eaedf1">
        <v-sheet class="pa-3">
            <v-toolbar flat height="80">
                <v-btn color="primary" rounded @click="dialog = true"
                    >add category</v-btn
                >
                <v-spacer></v-spacer>

                <v-col cols="4">
                    <v-text-field
                        label="Search"
                        rounded
                        outlined
                        dense
                        clearable
                        hide-details
                        :prepend-inner-icon="icons.mdiMagnify"
                    ></v-text-field>
                </v-col>
            </v-toolbar>

            <v-data-table
                :headers="headers"
                :items="items"
                :footer-props="{ itemsPerPageOptions }"
                class="b-outlined"
            >
                <template v-slot:item.actions="{ item }">
                    <v-tooltip top>
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

                        <span>Update</span>
                    </v-tooltip>

                    <v-tooltip top>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                color="red"
                                icon
                                v-on="on"
                                @click="myFunc(item)"
                            >
                                <v-icon v-text="icons.mdiClose"></v-icon>
                            </v-btn>
                        </template>

                        <span>Delete</span>
                    </v-tooltip>
                </template>
            </v-data-table>

            <v-dialog v-model="dialog" max-width="40%" scrollable>
                <v-card>
                    <v-card-title class="grey lighten-3">
                        New Category
                        <v-spacer></v-spacer>
                        <v-icon
                            color="secondary"
                            large
                            v-text="icons.mdiPlus"
                        ></v-icon>
                    </v-card-title>

                    <v-card-text class="pt-7">
                        <v-text-field
                            label="Category Name"
                            rounded
                            outlined
                            dense
                            clearable
                        ></v-text-field>

                        <v-text-field
                            label="Font Color"
                            rounded
                            outlined
                            dense
                            clearable
                        ></v-text-field>

                        <v-text-field
                            label="Background Color"
                            rounded
                            outlined
                            dense
                            clearable
                        ></v-text-field>

                        <v-row no-gutters>
                            <v-col cols="6"></v-col>
                            <v-col cols="6">
                                <v-file-input
                                    label="Image Category"
                                ></v-file-input>
                            </v-col>
                        </v-row>

                        <v-text-field
                            label="English"
                            rounded
                            outlined
                            dense
                            clearable
                        ></v-text-field>

                        <v-text-field
                            label="Italian"
                            rounded
                            outlined
                            dense
                            clearable
                        ></v-text-field>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text @click="dialog = false">cancel</v-btn>
                        <v-btn color="primary" width="80">save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-sheet>
    </v-container>
</template>

<script>
import { mdiPencilOutline, mdiClose, mdiMagnify, mdiPlus } from "@mdi/js";

export default {
    name: "CategoryManagement",

    data: () => ({
        icons: {
            mdiPencilOutline,
            mdiClose,
            mdiMagnify,
            mdiPlus
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
    })
};
</script>

<style scoped>
.b-outlined {
    border: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
