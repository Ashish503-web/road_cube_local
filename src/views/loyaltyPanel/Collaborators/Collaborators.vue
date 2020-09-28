<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-toolbar flat height="80">
                <v-btn
                        color="secondary"
                        class="text-none"
                        depressed
                        to="/storePanel/add-contest"
                >Add Brand</v-btn
                >

                <v-spacer></v-spacer>

                <v-col cols="4">
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
            </v-toolbar>

            <v-data-table
                    :headers="headers"
                    :items="items"
                    :footer-props="{ itemsPerPageOptions }"
            >



            </v-data-table>
        </v-sheet>
    </v-container>
</template>

<script>
    import {
        mdiMagnify,
        mdiViewGrid,
        mdiEyeOutline,
        mdiHelp,
        mdiClose,
        mdiCloseThick
    } from "@mdi/js";

    export default {
        name: "Collaborators",

        data: () => ({
            icons: {
                mdiMagnify,
                mdiViewGrid,
                mdiEyeOutline,
                mdiHelp,
                mdiClose,
                mdiCloseThick
            },
            tab: 0,
            itemsPerPageOptions: [10, 20, 30, -1],
            headers: [
                { text: "Name", value: "name" },
                { text: "Email", value: "email" },
            ],
            items: [

            ]
        })
    };
</script>
