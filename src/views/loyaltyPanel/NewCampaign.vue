<template>
    <v-container fluid style="background: #eaedf1">
        <v-sheet class="pa-3">
            <v-progress-linear :color="progressColor" :value="progress" height="20" stream striped></v-progress-linear>

            <v-window v-model="step">
                <v-window-item :value="1">
                    <v-card outlined max-width="500" class="mx-auto mt-3">
                        <v-card-title class="subtitle-2" style="word-break: normal">
                            <v-sheet class="border-grey rounded-circle">
                                <v-icon class="ma-1" size="60" v-text="icons.mdiBullhorn"></v-icon>
                            </v-sheet>
                            <v-col>
                                Select in order of priority what means you will
                                contact the user. In case of failure of the
                                first option, the second and third or third ones
                                will be used.
                            </v-col>
                        </v-card-title>

                        <v-card-text>
                            <v-row
                                v-for="selection in selections"
                                :key="selection.title"
                                no-gutters
                                class="b-outlined pa-3 mb-3"
                            >
                                <v-col cols="4" class="subtitle-2" v-text="selection.title"></v-col>
                                <v-col cols="8">
                                    <v-radio-group class="mt-0 pt-0" hide-details>
                                        <v-row no-gutters>
                                            <v-col
                                                v-for="contactMean in selection.contactMeans"
                                                :key="contactMean"
                                                cols="auto"
                                                class="pr-3"
                                            >
                                                <v-radio color="secondary">
                                                    <template v-slot:label>
                                                        <h4 class="subtitle-2" v-text="contactMean"></h4>
                                                    </template>
                                                </v-radio>
                                            </v-col>
                                        </v-row>
                                    </v-radio-group>
                                </v-col>
                            </v-row>
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                            <v-btn color="brown" class="text-capitalize" depressed disabled>
                                <v-icon size="20" v-text="icons.mdiArrowLeft"></v-icon>back
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="secondary"
                                class="text-capitalize"
                                depressed
                                @click="step++"
                            >
                                next
                                <v-icon size="20" v-text="icons.mdiArrowRight"></v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-window-item>

                <v-window-item :value="2">
                    <v-card outlined max-width="500" class="mx-auto mt-3">
                        <v-row no-gutters align="center">
                            <v-col cols="8">
                                <v-card-title class="subtitle-2 pr-0" style="word-break: normal">
                                    Select how many times you want your campaign
                                    to appear
                                </v-card-title>
                            </v-col>
                            <v-col cols="4" class="pr-4">
                                <v-select
                                    v-model="campaignAppearType"
                                    :items="['Only Once', 'Recursively']"
                                    menu-props="offsetY"
                                    outlined
                                    dense
                                    hide-details
                                ></v-select>
                            </v-col>
                        </v-row>

                        <v-divider></v-divider>

                        <v-card-text
                            v-if="campaignAppearType === 'Only Once'"
                            class="text--primary pt-5"
                        >
                            Set the campaign's start date and time in the fields
                            below. Caution! After that date and time, your
                            campaign will be terminated.
                            <v-row>
                                <v-col cols="6">
                                    <v-menu offset-y>
                                        <template v-slot:activator="{ on }">
                                            <v-text-field
                                                v-model="startDate"
                                                outlined
                                                dense
                                                readonly
                                                hide-details
                                                :prepend-inner-icon="
                                                    icons.mdiCalendarMonth
                                                "
                                                v-on="on"
                                            ></v-text-field>
                                        </template>

                                        <v-date-picker v-model="startDate"></v-date-picker>
                                    </v-menu>
                                </v-col>
                                <v-col cols="6">
                                    <v-menu
                                        v-model="timePicker"
                                        offset-y
                                        :close-on-content-click="false"
                                    >
                                        <template v-slot:activator="{ on }">
                                            <v-text-field
                                                v-model="startTime"
                                                outlined
                                                dense
                                                readonly
                                                hide-details
                                                :prepend-inner-icon="
                                                    icons.mdiClockOutline
                                                "
                                                v-on="on"
                                            ></v-text-field>
                                        </template>

                                        <v-card>
                                            <v-time-picker v-model="pickedTime" ampm-in-title></v-time-picker>

                                            <v-divider></v-divider>

                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn text @click="timePicker = false">cancel</v-btn>
                                                <v-btn
                                                    color="primary"
                                                    :disabled="!pickedTime"
                                                    @click="
                                                        () => {
                                                            startTime = pickedTime;
                                                            timePicker = false;
                                                        }
                                                    "
                                                >accept</v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-menu>
                                </v-col>
                            </v-row>
                        </v-card-text>

                        <v-card-text v-else class="text--primary pt-5">
                            Choose the days and time you want to run your
                            campaign and next define how to termniate it
                            <v-row class="py-3">
                                <v-col
                                    v-for="weekday in weekdays"
                                    :key="weekday.name"
                                    cols="6"
                                    class="py-0"
                                >
                                    <v-row no-gutters align="end">
                                        <v-col cols="12">
                                            <h4 class="subtitle-2" v-text="weekday.name"></h4>
                                        </v-col>
                                        <v-col cols="auto">
                                            <v-checkbox
                                                v-model="weekday.checked"
                                                color="secondary"
                                                class="mt-1"
                                                style="padding: 7px 4px 8px 0"
                                                hide-details
                                            ></v-checkbox>
                                        </v-col>

                                        <v-col v-if="weekday.checked">
                                            <v-menu
                                                v-model="weekday.timePicker"
                                                :close-on-content-click="false"
                                            >
                                                <template v-slot:activator="{ on }">
                                                    <v-text-field
                                                        v-model="
                                                            weekday.startTime
                                                        "
                                                        outlined
                                                        dense
                                                        hide-details
                                                        readonly
                                                        :prepend-inner-icon="
                                                            icons.mdiClockOutline
                                                        "
                                                        v-on="on"
                                                    ></v-text-field>
                                                </template>

                                                <v-card>
                                                    <v-time-picker
                                                        v-model="pickedTime"
                                                        ampm-in-title
                                                    ></v-time-picker>

                                                    <v-divider></v-divider>

                                                    <v-card-actions>
                                                        <v-spacer></v-spacer>
                                                        <v-btn
                                                            text
                                                            @click="
                                                                weekday.timePicker = false
                                                            "
                                                        >cancel</v-btn>
                                                        <v-btn
                                                            color="primary"
                                                            :disabled="
                                                                !pickedTime
                                                            "
                                                            @click="
                                                                () => {
                                                                    weekday.startTime = pickedTime;
                                                                    weekday.timePicker = false;
                                                                }
                                                            "
                                                        >accept</v-btn>
                                                    </v-card-actions>
                                                </v-card>
                                            </v-menu>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>

                            <v-divider class="mb-3"></v-divider>How to End a Repeat Campaign
                            <v-radio-group v-model="campaignEndType" class="pt-0">
                                <v-row no-gutters>
                                    <v-col cols="6">
                                        <v-radio color="secondary" value="Ending Date">
                                            <template v-slot:label>
                                                <h4 class="subtitle-2 secondary--text">Ending Date</h4>
                                            </template>
                                        </v-radio>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-radio color="secondary" value="Number of Repetitions">
                                            <template v-slot:label>
                                                <h4
                                                    class="subtitle-2 secondary--text"
                                                >Number of Repetitions</h4>
                                            </template>
                                        </v-radio>
                                    </v-col>
                                </v-row>
                            </v-radio-group>

                            <template v-if="campaignEndType === 'Ending Date'">
                                Choose day and time you want your campaign to
                                terminate
                                <v-row>
                                    <v-col cols="6">
                                        <v-menu offset-y>
                                            <template v-slot:activator="{ on }">
                                                <v-text-field
                                                    v-model="startDate"
                                                    outlined
                                                    dense
                                                    readonly
                                                    hide-details
                                                    :prepend-inner-icon="
                                                        icons.mdiCalendarMonth
                                                    "
                                                    v-on="on"
                                                ></v-text-field>
                                            </template>

                                            <v-date-picker v-model="startDate"></v-date-picker>
                                        </v-menu>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-menu
                                            v-model="timePicker"
                                            offset-y
                                            :close-on-content-click="false"
                                        >
                                            <template v-slot:activator="{ on }">
                                                <v-text-field
                                                    v-model="startTime"
                                                    outlined
                                                    dense
                                                    readonly
                                                    hide-details
                                                    :prepend-inner-icon="
                                                        icons.mdiClockOutline
                                                    "
                                                    v-on="on"
                                                ></v-text-field>
                                            </template>

                                            <v-card>
                                                <v-time-picker v-model="pickedTime" ampm-in-title></v-time-picker>

                                                <v-divider></v-divider>

                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn
                                                        text
                                                        @click="
                                                            timePicker = false
                                                        "
                                                    >cancel</v-btn>
                                                    <v-btn
                                                        color="primary"
                                                        :disabled="!pickedTime"
                                                        @click="
                                                            () => {
                                                                startTime = pickedTime;
                                                                timePicker = false;
                                                            }
                                                        "
                                                    >accept</v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-menu>
                                    </v-col>
                                </v-row>
                            </template>

                            <template v-else>
                                <h4
                                    class="subtitle-2 secondary--text"
                                >Your campaign will terminate after:</h4>
                                <v-sheet width="50%">
                                    <v-text-field type="number" outlined dense clearable></v-text-field>
                                </v-sheet>
                            </template>
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                            <v-btn
                                color="brown"
                                class="text-capitalize"
                                depressed
                                dark
                                @click="step--"
                            >
                                <v-icon size="20" v-text="icons.mdiArrowLeft"></v-icon>back
                            </v-btn>
                            <v-spacer></v-spacer>

                            <v-btn
                                color="secondary"
                                class="text-capitalize"
                                depressed
                                @click="step++"
                            >
                                next
                                <v-icon size="20" v-text="icons.mdiArrowRight"></v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-window-item>

                <v-window-item :value="3">
                    <v-card outlined max-width="500" class="mx-auto mt-3">
                        <v-card-title>Location Filter</v-card-title>

                        <v-card-text>
                            <v-radio-group class="mt-0 pa-0" hide-details>
                                <v-radio color="secondary">
                                    <template v-slot:label>
                                        <h4 class="subtitle-2">Επιλογή όλων των πελατών</h4>
                                    </template>
                                </v-radio>
                                <v-radio color="secondary">
                                    <template v-slot:label>
                                        <h4 class="subtitle-2">
                                            Επιλογή πελατών με βάση την περιοχή
                                            για όσους χρήστες έχουν κατεβάσει
                                            την εφαρμογή
                                        </h4>
                                    </template>
                                </v-radio>
                                <v-radio color="secondary">
                                    <template v-slot:label>
                                        <h4 class="subtitle-2">
                                            Επιλογή πελατών με βάση τις εταιρίες
                                            που έχουν κάνει έστω και μία
                                            συναλλαγή
                                        </h4>
                                    </template>
                                </v-radio>
                            </v-radio-group>
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                            <v-btn
                                color="brown"
                                class="text-capitalize"
                                depressed
                                dark
                                @click="step--"
                            >
                                <v-icon size="20" v-text="icons.mdiArrowLeft"></v-icon>back
                            </v-btn>
                            <v-spacer></v-spacer>

                            <v-btn
                                color="secondary"
                                class="text-capitalize"
                                depressed
                                @click="step++"
                            >
                                next
                                <v-icon size="20" v-text="icons.mdiArrowRight"></v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-window-item>

                <v-window-item :value="4">
                    <v-card outlined max-width="500" class="mx-auto mt-3">
                        <v-card-title>Gender Filter</v-card-title>

                        <v-card-subtitle>
                            Choose whether you want your campaign to target
                            only men or women, or if you want to reach both
                            sexes.
                        </v-card-subtitle>

                        <v-card-text>
                            <h4 class="subtitle-2">Gender</h4>
                            <v-radio-group class="mt-2 pt-0" hide-details>
                                <v-row no-gutters>
                                    <v-col
                                        v-for="gender in genders"
                                        :key="gender.text"
                                        cols="auto"
                                        class="pr-3"
                                    >
                                        <v-radio color="secondary">
                                            <template v-slot:label>
                                                <v-icon v-text="gender.icon"></v-icon>
                                                <h4 class="subtitle-2" v-text="gender.text"></h4>
                                            </template>
                                        </v-radio>
                                    </v-col>
                                </v-row>
                            </v-radio-group>
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-title>Points Filter</v-card-title>
                        <v-card-subtitle>
                            Select the minimum and maximum number of user
                            points that you want your campaign to
                            target
                        </v-card-subtitle>

                        <v-card-text class="py-0">
                            <v-sheet width="70%">
                                <v-text-field
                                    type="number"
                                    label="Minimum Points"
                                    outlined
                                    dense
                                    clearable
                                    :prepend-inner-icon="icons.mdiChevronLeft"
                                ></v-text-field>
                                <v-text-field
                                    type="number"
                                    label="Maximum Points"
                                    outlined
                                    dense
                                    clearable
                                    :prepend-inner-icon="icons.mdiChevronRight"
                                ></v-text-field>
                            </v-sheet>
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-title>Φίλτρο Αριθμού Συναλλαγών</v-card-title>
                        <v-card-subtitle>
                            Select the minimum and maximum number of user
                            transactions that you want your campaign to
                            target
                        </v-card-subtitle>

                        <v-card-text class="py-0">
                            <v-sheet width="70%">
                                <v-text-field
                                    type="number"
                                    label="Minimum Transactions"
                                    outlined
                                    dense
                                    clearable
                                    :prepend-inner-icon="icons.mdiChevronLeft"
                                ></v-text-field>
                                <v-text-field
                                    type="number"
                                    label="Maximum Transactions"
                                    outlined
                                    dense
                                    clearable
                                    :prepend-inner-icon="icons.mdiChevronRight"
                                ></v-text-field>
                            </v-sheet>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn
                                color="brown"
                                class="text-capitalize"
                                depressed
                                dark
                                @click="step--"
                            >
                                <v-icon size="20" v-text="icons.mdiArrowLeft"></v-icon>back
                            </v-btn>
                            <v-spacer></v-spacer>

                            <v-btn
                                color="secondary"
                                class="text-capitalize"
                                depressed
                                @click="step++"
                            >
                                next
                                <v-icon size="20" v-text="icons.mdiArrowRight"></v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-window-item>

                <v-window-item :value="5">
                    <v-card flat max-width="500" class="mx-auto mt-3">
                        <v-card-title class="justify-center">Τίτλος Καμπάνιας</v-card-title>

                        <v-card-text>
                            <v-text-field
                                label="Τίτλος Καμπάνιας"
                                outlined
                                dense
                                clearable
                                hide-details
                            ></v-text-field>
                            <v-divider class="my-3"></v-divider>
                        </v-card-text>

                        <v-card outlined>
                            <v-toolbar flat color="grey lighten-3">
                                <v-toolbar-title>SMS</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn color="secondary" class="text-capitalize" depressed>new sms</v-btn>
                            </v-toolbar>

                            <v-card-text>
                                <v-textarea
                                    v-model="smsText"
                                    label="Text"
                                    outlined
                                    clearable
                                    no-resize
                                    hide-details
                                ></v-textarea>
                                {{ smsText ? smsText.length : 0 }}
                                characters, 1 sms,
                                {{ 1071 - (smsText ? smsText.length : 0) }}
                                remaining
                            </v-card-text>
                        </v-card>

                        <v-card outlined class="mt-5">
                            <v-toolbar flat color="grey lighten-3">
                                <v-toolbar-title>Push</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn color="secondary" class="text-capitalize" depressed>new push</v-btn>
                            </v-toolbar>

                            <v-card-text>
                                <v-row no-gutters>
                                    <v-col cols="6">
                                        <h4
                                            class="pt-1 pb-3 text-center subtitle-1 text--primary font-weight-medium"
                                        >Text</h4>
                                        <v-textarea
                                            label="Ελληνικά"
                                            height="160"
                                            outlined
                                            clearable
                                            no-resize
                                        ></v-textarea>
                                        <v-textarea
                                            label="Αγγλικά"
                                            height="160"
                                            outlined
                                            clearable
                                            no-resize
                                            hide-details
                                        ></v-textarea>
                                    </v-col>
                                    <v-col cols="6" class="pl-3">
                                        <v-card-title
                                            class="text--primary pt-0 justify-center"
                                        >Upload Media</v-card-title>Enter the desired link and send it to
                                        the users.
                                        <v-text-field
                                            label="Link to Page"
                                            class="mt-2"
                                            outlined
                                            dense
                                            clearable
                                            :prepend-inner-icon="
                                                icons.mdiLinkVariant
                                            "
                                        ></v-text-field>Upload the desired image and send it to
                                        the users
                                        <h4 class="subtitle-2">Image Upload (.png or .jpeg)</h4>

                                        <v-file-input class="mt-2" outlined dense></v-file-input>

                                        <h4 class="subtitle-2">Επέλεξε συγκεκριμένο κατάστημα</h4>

                                        <v-select
                                            menu-props="offsetY"
                                            label="Select Company"
                                            class="mt-1"
                                            outlined
                                            dense
                                            hide-details
                                        ></v-select>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>

                        <v-card outlined class="mt-5">
                            <v-toolbar flat color="grey lighten-3">
                                <v-toolbar-title>Email</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn color="secondary" class="text-capitalize" depressed>new email</v-btn>
                            </v-toolbar>

                            <v-card-text>
                                <v-row no-gutters>
                                    <v-col cols="6">
                                        <v-text-field
                                            label="Title"
                                            outlined
                                            dense
                                            clearable
                                            :prepend-inner-icon="
                                                icons.mdiMenuRight
                                            "
                                        ></v-text-field>

                                        <v-textarea
                                            v-model="smsText"
                                            label="Text"
                                            height="213"
                                            outlined
                                            clearable
                                            no-resize
                                            hide-details
                                        ></v-textarea>
                                    </v-col>
                                    <v-col cols="6" class="pl-3">
                                        <v-card-title
                                            class="text--primary pt-0 justify-center"
                                        >Upload Media</v-card-title>Enter the desired link and send it to
                                        the users.
                                        <v-text-field
                                            label="Link to Page"
                                            class="mt-2"
                                            outlined
                                            dense
                                            clearable
                                            :prepend-inner-icon="
                                                icons.mdiLinkVariant
                                            "
                                        ></v-text-field>Upload the desired image and send it to
                                        the users
                                        <h4 class="subtitle-2">Image Upload (.png or .jpeg)</h4>

                                        <v-file-input class="mt-2" outlined dense hide-details></v-file-input>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>

                        <v-card-actions>
                            <v-btn
                                color="brown"
                                class="text-capitalize"
                                depressed
                                dark
                                @click="step--"
                            >
                                <v-icon size="20" v-text="icons.mdiArrowLeft"></v-icon>back
                            </v-btn>
                            <v-spacer></v-spacer>

                            <v-btn color="secondary" class="text-capitalize" depressed>submit</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-window-item>
            </v-window>
        </v-sheet>
    </v-container>
</template>

<script>
import {
    mdiArrowLeft,
    mdiArrowRight,
    mdiBullhorn,
    mdiCalendarMonth,
    mdiClockOutline,
    mdiGenderMale,
    mdiGenderFemale,
    mdiGenderMaleFemale,
    mdiChevronLeft,
    mdiChevronRight,
    mdiLinkVariant,
    mdiMenuRight,
} from "@mdi/js";

export default {
    name: "NewCampaign.vue",

    data: () => ({
        icons: {
            mdiArrowLeft,
            mdiArrowRight,
            mdiBullhorn,
            mdiCalendarMonth,
            mdiClockOutline,
            mdiChevronLeft,
            mdiChevronRight,
            mdiLinkVariant,
            mdiMenuRight,
        },
        step: 1,
        selections: [
            { title: "First Selection", contactMeans: ["sms", "push", "mail"] },
            {
                title: "Second Selection",
                contactMeans: ["sms", "push", "mail", "none"],
            },
            {
                title: "Third Selection",
                contactMeans: ["sms", "push", "mail", "none"],
            },
        ],
        campaignAppearType: "Only Once",
        startDate: new Date().toISOString().substr(0, 10),
        timePicker: false,
        startTime: new Date().getHours() + ":" + new Date().getMinutes(),
        pickedTime: "",
        weekdays: [
            {
                name: "Monday",
                checked: false,
                timePicker: false,
                startTime: "",
            },
            {
                name: "Tuesday",
                checked: false,
                timePicker: false,
                startTime: "",
            },
            {
                name: "Wednesday",
                checked: false,
                timePicker: false,
                startTime: "",
            },
            {
                name: "Thursday",
                checked: false,
                timePicker: false,
                startTime: "",
            },
            {
                name: "Friday",
                checked: false,
                timePicker: false,
                startTime: "",
            },
            {
                name: "Saturday",
                checked: false,
                timePicker: false,
                startTime: "",
            },
            {
                name: "Sunday",
                checked: false,
                timePicker: false,
                startTime: "",
            },
        ],
        campaignEndType: "Number of Repetitions",
        genders: [
            { text: "Male", icon: mdiGenderMale },
            { text: "Female", icon: mdiGenderFemale },
            { text: "Both", icon: mdiGenderMaleFemale },
        ],
        smsText: "",
    }),

    computed: {
        progress() {
            let progress;

            switch (this.step) {
                case 1:
                    progress = 20;
                    break;
                case 2:
                    progress = 40;
                    break;
                case 3:
                    progress = 60;
                    break;
                case 4:
                    progress = 80;
                    break;
                case 5:
                    progress = 100;
            }

            return progress;
        },

        progressColor() {
            let color;

            switch (this.progress) {
                case 20:
                    color = "red";
                    break;
                case 40:
                case 60:
                case 80:
                    color = "orange";
                    break;
                case 100:
                    color = "green";
            }

            return color;
        },
    },
};
</script>

<style scoped>
.border-grey {
    border: 2px solid grey;
}

.b-outlined {
    border: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
