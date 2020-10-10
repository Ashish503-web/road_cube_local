<template>
    <v-container fluid class="b-container pa-5">
        <v-sheet class="pa-10">
            <h4>Add Contest</h4>
            <hr class="mt-4">

            <v-row justify="space-between" class="pa-10">
                <v-col cols="12" md="5" class="pr-0 pr-md-2 mb-2 mb-md-0">
                    <h3 class="mb-5">Contest details</h3>
                    <div class="mb-8">
                        <b-text-field
                        type="text"
                        label="Title"
                        ></b-text-field>
                    </div>

                    <div>
                        <b-textarea
                        auto-grow
                        outlined
                        rows="1"
                        row-height="15"
                        label="Description"
                        class="mt-2"
                        ></b-textarea>
                    </div>

                    <div class="mb-8 mt-8">
                        <b-select
                        :items="items"
                        outlined
                        label="Type"
                        class="mt-2"
                        dense
                        ></b-select>
                    </div>

                    <div>
                        <v-file-input
                            color="secondary"
                            class="mt-1"
                            label="Image"
                            outlined
                            dense
                            hide-details="auto"
                        ></v-file-input>
                    </div>
                    
                </v-col>
                <v-col cols="12" md="5" class="pr-0 pr-md-2 mb-2 mb-md-0">
                    <h3 class="mb-5">Winners Details</h3>
                    <div class="mb-8">
                        <v-menu offset-y>
                            <template v-slot:activator="{ on }">
                                <v-text-field
                                    v-model="startEndDate"
                                    label="Start Date - End Date"
                                    color="secondary"
                                    class="mt-0 mt-sm-3"
                                    outlined
                                    dense
                                    hide-details
                                    :append-icon="icons.mdiCalendarMonth"
                                    v-on="on"
                                ></v-text-field>
                            </template>

                            <v-date-picker
                                v-model="startEndDate"
                                color="secondary"
                            ></v-date-picker>
                        </v-menu>
                    </div>

                    <div class="mb-8">
                        <v-menu offset-y>
                            <template v-slot:activator="{ on }">
                                <v-text-field
                                    v-model="declarationDate"
                                    label="Winning Declaration Date"
                                    color="secondary"
                                    class="mt-0 mt-sm-3"
                                    outlined
                                    dense
                                    hide-details
                                    :append-icon="icons.mdiCalendarMonth"
                                    v-on="on"
                                ></v-text-field>
                            </template>

                            <v-date-picker
                                v-model="declarationDate"
                                color="secondary"
                            ></v-date-picker>
                        </v-menu>
                    </div>

                    <div class="mb-8">
                        <b-text-field
                        type="text"
                        label="No of Winner"
                        ></b-text-field>
                    </div>

                    <div>
                        <b-textarea
                        auto-grow
                        outlined
                        rows="1"
                        row-height="15"
                        label="1st Winning Text"
                        class="mt-2"
                        ></b-textarea>
                    </div>
                </v-col>

                <v-col cols="12" md="6" class="pr-0 pr-md-2 mb-2 mb-md-0">
                    <label class="font-weight-bold subtitle-2">
                        Please select background color for your Contest
                    </label>

                    <v-color-picker
                    dot-size="25"
                    swatches-max-height="200"
                    class="mt-4"
                    ></v-color-picker>
                </v-col>
                
            </v-row>
        </v-sheet>
    </v-container>
</template>

<script>
import { mdiCalendarMonth } from "@mdi/js";
export default {
    name: "AddContest",

    data: () => ({
        icons: { mdiCalendarMonth },
        startEndDate: '',
        declarationDate: ''
    })
};
</script>