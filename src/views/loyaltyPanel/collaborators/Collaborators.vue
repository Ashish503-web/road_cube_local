<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-toolbar flat height="80">
                <v-row class="d-flex justify-space-between align-center flex-wrap mt-4" style="width: 100%">
                    <v-btn
                            color="secondary"
                            class="text-none d-flex mx-auto mx-sm-0"
                            depressed
                    >Add Brand</v-btn
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
