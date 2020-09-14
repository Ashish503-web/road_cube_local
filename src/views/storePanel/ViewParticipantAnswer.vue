<template>
    <v-container class="px-4">
        <v-toolbar flat>
            <v-tooltip top>
                <template v-slot:activator="{ on }">
                    <v-btn class="mr-3" icon v-on="on" @click="$router.go(-1)">
                        <v-icon v-text="icons.mdiArrowLeft"></v-icon>
                    </v-btn>
                </template>

                <span>Back</span>
            </v-tooltip>

            <v-toolbar-title>View Answer</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-icon x-large color="grey" v-text="icons.mdiViewGrid"></v-icon>
        </v-toolbar>

        <v-sheet color="#eaedf1" class="pa-4">
            <v-card tile>
                <v-card-title class="subtitle-1">User Details</v-card-title>

                <v-divider></v-divider>

                <v-card-text class="px-7">
                    <v-text-field
                        v-model="user.gender"
                        class="not-allowed"
                        label="Gender"
                        outlined
                        dense
                        readonly
                    ></v-text-field>
                    <v-text-field
                        v-model="user.email"
                        class="not-allowed"
                        label="User Email"
                        outlined
                        dense
                        readonly
                    ></v-text-field>
                    <v-text-field
                        v-model="user.phone"
                        class="not-allowed"
                        label="Mobile Phone"
                        outlined
                        dense
                        readonly
                        hide-details
                    ></v-text-field>
                </v-card-text>

                <v-card-title class="subtitle-1">Questions</v-card-title>

                <v-divider></v-divider>

                <v-card-text class="px-7 pt-0">
                    <h4 class="secondary--text">Checkbox Group</h4>
                    <v-checkbox v-model="checkbox" label="Option 1" class="not-allowed" readonly></v-checkbox>

                    <h4 class="secondary--text">File Upload</h4>
                    <v-img src="@/assets/file-upload.png" width="100"></v-img>

                    <v-text-field
                        v-model="question.date"
                        class="not-allowed mt-7"
                        label="Date Field"
                        outlined
                        dense
                        readonly
                    ></v-text-field>

                    <v-text-field
                        v-model="question.number"
                        class="not-allowed"
                        label="Number"
                        outlined
                        dense
                        readonly
                    ></v-text-field>

                    <h4 class="secondary--text">Radio Group</h4>
                    <v-radio-group v-model="radioGroup" class="not-allowed" readonly>
                        <v-radio v-for="n in 3" :key="n" :label="`Option ${n}`" :value="n"></v-radio>
                    </v-radio-group>
                </v-card-text>
            </v-card>
        </v-sheet>
    </v-container>
</template>

<script>
import { mdiArrowLeft, mdiViewGrid } from "@mdi/js";

export default {
    name: "ViewParticipantAnswer",

    data: () => ({
        icons: {
            mdiArrowLeft,
            mdiViewGrid,
        },
        user: {
            gender: "Female",
            email: "Email",
            phone: "Phone",
        },
        checkbox: true,
        question: {
            date: "05-02-2020",
            number: 2,
        },
        radioGroup: 3,
    }),
};
</script>

<style>
.not-allowed input {
    cursor: not-allowed;
}

.not-allowed .v-input--selection-controls__ripple {
    cursor: not-allowed;
}
</style>
