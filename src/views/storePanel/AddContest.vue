<template>
    <v-container fluid class="b-container pa-5">
        <v-sheet class="pa-10">
            <h4>Add Contest</h4>
            <hr class="mt-4">

            <v-row justify="space-between" class="pa-10">
                <v-col cols="12" md="5" class="pr-0 pr-md-2 mb-2 mb-md-0">
                    <h3 class="mb-5">Contest details</h3>
                    <div class="mb-6">
                        <label class="font-weight-bold subtitle-2">Title</label>
                        <b-text-field
                        type="text"
                        label="Title"
                        ></b-text-field>
                    </div>

                    <div>
                        <label class="font-weight-bold subtitle-2">Description</label>
                        <v-textarea
                        auto-grow
                        outlined
                        rows="1"
                        row-height="15"
                        label="Description"
                        class="mt-2"
                        ></v-textarea>
                    </div>

                    <div class="mb-1">
                        <label class="font-weight-bold subtitle-2">Type</label>
                        <v-select
                        :items="items"
                        outlined
                        label="Type"
                        class="mt-2"
                        ></v-select>
                    </div>

                    <div>
                        <label class="font-weight-bold subtitle-2">Image</label>
                        <v-file-input
                            accept="image/*"
                            label="Image"
                        ></v-file-input>
                    </div>
                    
                </v-col>
                <v-col cols="12" md="5" class="pr-0 pr-md-2 mb-2 mb-md-0">
                    <h3 class="mb-5">Winners Details</h3>
                    <div class="mb-8">
                        <label class="font-weight-bold subtitle-2">Start Date - End Date</label>
                        <b-text-field
                        type="date"
                        ></b-text-field>
                    </div>

                    <div class="mb-8">
                        <label class="font-weight-bold subtitle-2">Winning Declaration Date</label>
                        <b-text-field
                        type="date"
                        ></b-text-field>
                    </div>

                    <div class="mb-8">
                        <label class="font-weight-bold subtitle-2">No of Winner</label>
                        <b-text-field
                        type="text"
                        label="No of Winner"
                        ></b-text-field>
                    </div>

                    <div>
                        <label class="font-weight-bold subtitle-2">1st Winning Text</label>
                        <v-textarea
                        auto-grow
                        outlined
                        rows="1"
                        row-height="15"
                        label="1st Winning Text"
                        class="mt-2"
                        ></v-textarea>
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
import {
    mdiAlarm
} from "@mdi/js";
export default {
    name: "AddContest",

    data: () => ({
        icons: {
            mdiAlarm
        }
    })
};
</script>