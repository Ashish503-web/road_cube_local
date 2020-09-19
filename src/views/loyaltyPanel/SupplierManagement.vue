<template>
    <v-container fluid style="background: #eaedf1">
        <v-sheet class="pa-3">
            <v-toolbar flat height="80">
                <v-btn color="primary" rounded @click="dialog = true"
                    >create supplier</v-btn
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
                        New Supplier
                        <v-spacer></v-spacer>
                        <v-icon
                            color="secondary"
                            large
                            v-text="icons.mdiPlus"
                        ></v-icon>
                    </v-card-title>

                    <v-card-text class="pt-7">
                        <v-text-field
                            label="Name"
                            rounded
                            outlined
                            dense
                            clearable
                        ></v-text-field>

                        <v-text-field
                            type="email"
                            label="Email1"
                            rounded
                            outlined
                            dense
                            clearable
                        ></v-text-field>

                        <v-text-field
                            type="email"
                            label="Email2"
                            rounded
                            outlined
                            dense
                            clearable
                        ></v-text-field>

                        <v-text-field
                            type="number"
                            label="Phone"
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
    name: "SupplierManagement",

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
    })
};
</script>

<style scoped>
.b-outlined {
    border: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
