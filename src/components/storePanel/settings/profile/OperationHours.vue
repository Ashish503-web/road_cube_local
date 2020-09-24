<template>
    <v-card class="mt-12 rounded-lg" outlined>
        <v-card-title class="grey lighten-3">Hours of Operations</v-card-title>

        <v-container
            v-for="weekday in weekdays"
            :key="weekday.name"
            class="px-4"
        >
            <v-row no-gutters justify="space-between" align="center">
                <v-col
                    cols="5"
                    class="subtitle-2"
                    v-text="weekday.name"
                ></v-col>

                <v-col cols="auto">
                    <v-radio-group
                        v-model="weekday.operationHours"
                        class="ma-0"
                        hide-details
                    >
                        <v-row no-gutters>
                            <v-col cols="auto">
                                <v-radio
                                    label="Regular"
                                    value="Regular"
                                    color="secondary"
                                ></v-radio>
                            </v-col>
                            <v-col cols="auto" class="mx-1">
                                <v-radio
                                    label="Split Hours"
                                    value="Split Hours"
                                    color="secondary"
                                ></v-radio>
                            </v-col>
                            <v-col cols="auto" class="mx-1">
                                <v-radio
                                    label="24 Hours"
                                    value="24 Hours"
                                    color="secondary"
                                ></v-radio>
                            </v-col>
                            <v-col cols="auto">
                                <v-radio
                                    label="Closed"
                                    value="Closed"
                                    color="red"
                                ></v-radio>
                            </v-col>
                        </v-row>
                    </v-radio-group>
                </v-col>

                <v-col v-if="weekday.operationHours === 'Regular'" cols="12">
                    <v-row no-gutters justify="space-between" class="py-5">
                        <v-col cols="6" class="pa-3">
                            <v-menu
                                v-model="weekday.regular.startClockMenu"
                                max-width="290"
                                offset-y
                                :close-on-content-click="false"
                            >
                                <template
                                    v-slot:activator="{
                                        on
                                    }"
                                >
                                    <v-text-field
                                        v-model="weekday.regular.startTime"
                                        label="Start Time"
                                        outlined
                                        dense
                                        clearable
                                        readonly
                                        hide-details
                                        v-on="on"
                                        :prepend-inner-icon="
                                            icons.mdiClockOutline
                                        "
                                        @click:clear="
                                            weekday.regular.startClockMenu = true
                                        "
                                    ></v-text-field>
                                </template>

                                <v-card>
                                    <v-time-picker
                                        v-model="timePicker"
                                        ampm-in-title
                                        scrollable
                                    ></v-time-picker>

                                    <v-divider></v-divider>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            text
                                            @click="
                                                weekday.regular.startClockMenu = false
                                            "
                                            >cancel</v-btn
                                        >
                                        <v-btn
                                            color="primary"
                                            :disabled="!timePicker"
                                            @click="
                                                () => {
                                                    weekday.regular.startTime = timePicker;
                                                    weekday.regular.startClockMenu = false;
                                                }
                                            "
                                            >accept</v-btn
                                        >
                                    </v-card-actions>
                                </v-card>
                            </v-menu>
                        </v-col>

                        <v-col cols="6" class="pa-3">
                            <v-menu
                                v-model="weekday.regular.endClockMenu"
                                max-width="290"
                                offset-y
                                :close-on-content-click="false"
                            >
                                <template
                                    v-slot:activator="{
                                        on
                                    }"
                                >
                                    <v-text-field
                                        v-model="weekday.regular.endTime"
                                        label="End Time"
                                        outlined
                                        dense
                                        clearable
                                        readonly
                                        hide-details
                                        v-on="on"
                                        :prepend-inner-icon="
                                            icons.mdiClockOutline
                                        "
                                        @click:clear="
                                            weekday.regular.endClockMenu = true
                                        "
                                    ></v-text-field>
                                </template>

                                <v-card>
                                    <v-time-picker
                                        v-model="timePicker"
                                        ampm-in-title
                                        scrollable
                                    ></v-time-picker>

                                    <v-divider></v-divider>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            text
                                            @click="
                                                weekday.regular.endClockMenu = false
                                            "
                                            >cancel</v-btn
                                        >
                                        <v-btn
                                            color="primary"
                                            :disabled="!timePicker"
                                            @click="
                                                () => {
                                                    weekday.regular.endTime = timePicker;
                                                    weekday.regular.endClockMenu = false;
                                                }
                                            "
                                            >accept</v-btn
                                        >
                                    </v-card-actions>
                                </v-card>
                            </v-menu>
                        </v-col>
                    </v-row>
                </v-col>

                <v-col
                    v-if="weekday.operationHours === 'Split Hours'"
                    cols="12"
                >
                    <v-row no-gutters justify="space-between" class="py-5">
                        <v-col cols="3" class="pa-3">
                            <v-menu
                                v-model="
                                    weekday.splitHours.first.startClockMenu
                                "
                                max-width="290"
                                offset-y
                                origin="center center"
                                transition="scale-transition"
                                :close-on-content-click="false"
                            >
                                <template
                                    v-slot:activator="{
                                        on
                                    }"
                                >
                                    <v-text-field
                                        v-model="
                                            weekday.splitHours.first.startTime
                                        "
                                        label="Start Time"
                                        outlined
                                        dense
                                        clearable
                                        readonly
                                        hide-details
                                        v-on="on"
                                        :prepend-inner-icon="
                                            icons.mdiClockOutline
                                        "
                                        @click:clear="
                                            weekday.splitHours.first.startClockMenu = true
                                        "
                                    ></v-text-field>
                                </template>

                                <v-card>
                                    <v-time-picker
                                        v-model="timePicker"
                                        ampm-in-title
                                        scrollable
                                    ></v-time-picker>

                                    <v-divider></v-divider>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            text
                                            @click="
                                                weekday.splitHours.first.startClockMenu = false
                                            "
                                            >cancel</v-btn
                                        >
                                        <v-btn
                                            color="primary"
                                            :disabled="!timePicker"
                                            @click="
                                                () => {
                                                    weekday.splitHours.first.startTime = timePicker;
                                                    weekday.splitHours.first.startClockMenu = false;
                                                }
                                            "
                                            >accept</v-btn
                                        >
                                    </v-card-actions>
                                </v-card>
                            </v-menu>
                        </v-col>

                        <v-col cols="3" class="pa-3">
                            <v-menu
                                v-model="weekday.splitHours.first.endClockMenu"
                                max-width="290"
                                offset-y
                                origin="center center"
                                transition="scale-transition"
                                :close-on-content-click="false"
                            >
                                <template
                                    v-slot:activator="{
                                        on
                                    }"
                                >
                                    <v-text-field
                                        v-model="
                                            weekday.splitHours.first.endTime
                                        "
                                        label="End Time"
                                        outlined
                                        dense
                                        clearable
                                        readonly
                                        hide-details
                                        v-on="on"
                                        :prepend-inner-icon="
                                            icons.mdiClockOutline
                                        "
                                        @click:clear="
                                            weekday.splitHours.first.endClockMenu = true
                                        "
                                    ></v-text-field>
                                </template>

                                <v-card>
                                    <v-time-picker
                                        v-model="timePicker"
                                        ampm-in-title
                                        scrollable
                                    ></v-time-picker>

                                    <v-divider></v-divider>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            text
                                            @click="
                                                weekday.splitHours.first.endClockMenu = false
                                            "
                                            >cancel</v-btn
                                        >
                                        <v-btn
                                            color="primary"
                                            :disabled="!timePicker"
                                            @click="
                                                () => {
                                                    weekday.splitHours.first.endTime = timePicker;
                                                    weekday.splitHours.first.endClockMenu = false;
                                                }
                                            "
                                            >accept</v-btn
                                        >
                                    </v-card-actions>
                                </v-card>
                            </v-menu>
                        </v-col>

                        <v-col cols="3" class="pa-3">
                            <v-menu
                                v-model="
                                    weekday.splitHours.second.startClockMenu
                                "
                                max-width="290"
                                offset-y
                                origin="center center"
                                transition="scale-transition"
                                :close-on-content-click="false"
                            >
                                <template
                                    v-slot:activator="{
                                        on
                                    }"
                                >
                                    <v-text-field
                                        v-model="
                                            weekday.splitHours.second.startTime
                                        "
                                        label="Start Time"
                                        outlined
                                        dense
                                        clearable
                                        readonly
                                        hide-details
                                        v-on="on"
                                        :prepend-inner-icon="
                                            icons.mdiClockOutline
                                        "
                                        @click:clear="
                                            weekday.splitHours.second.startClockMenu = true
                                        "
                                    ></v-text-field>
                                </template>

                                <v-card>
                                    <v-time-picker
                                        v-model="timePicker"
                                        ampm-in-title
                                        scrollable
                                    ></v-time-picker>

                                    <v-divider></v-divider>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            text
                                            @click="
                                                weekday.splitHours.second.startClockMenu = false
                                            "
                                            >cancel</v-btn
                                        >
                                        <v-btn
                                            color="primary"
                                            :disabled="!timePicker"
                                            @click="
                                                () => {
                                                    weekday.splitHours.second.startTime = timePicker;
                                                    weekday.splitHours.second.startClockMenu = false;
                                                }
                                            "
                                            >accept</v-btn
                                        >
                                    </v-card-actions>
                                </v-card>
                            </v-menu>
                        </v-col>

                        <v-col cols="3" class="pa-3">
                            <v-menu
                                v-model="weekday.splitHours.second.endClockMenu"
                                max-width="290"
                                offset-y
                                origin="center center"
                                transition="scale-transition"
                                :close-on-content-click="false"
                            >
                                <template
                                    v-slot:activator="{
                                        on
                                    }"
                                >
                                    <v-text-field
                                        v-model="
                                            weekday.splitHours.second.endTime
                                        "
                                        label="End Time"
                                        outlined
                                        dense
                                        clearable
                                        readonly
                                        hide-details
                                        v-on="on"
                                        :prepend-inner-icon="
                                            icons.mdiClockOutline
                                        "
                                        @click:clear="
                                            weekday.splitHours.second.endClockMenu = true
                                        "
                                    ></v-text-field>
                                </template>

                                <v-card>
                                    <v-time-picker
                                        v-model="timePicker"
                                        ampm-in-title
                                        scrollable
                                    ></v-time-picker>

                                    <v-divider></v-divider>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            text
                                            @click="
                                                weekday.splitHours.second.endClockMenu = false
                                            "
                                            >cancel</v-btn
                                        >
                                        <v-btn
                                            color="primary"
                                            :disabled="!timePicker"
                                            @click="
                                                () => {
                                                    weekday.splitHours.second.endTime = timePicker;
                                                    weekday.splitHours.second.endClockMenu = false;
                                                }
                                            "
                                            >accept</v-btn
                                        >
                                    </v-card-actions>
                                </v-card>
                            </v-menu>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-divider></v-divider>
        </v-container>

        <v-card-actions class="pl-4 mt-3">
            <v-btn color="secondary" class="text-capitalize" depressed
                >update details</v-btn
            >
        </v-card-actions>
    </v-card>
</template>

<script>
import { mdiClockOutline } from "@mdi/js";

export default {
    name: "OperationHours",

    data: () => ({
        icons: {
            mdiClockOutline
        },
        weekdays: [
            {
                name: "Monday",
                operationHours: "24 Hours",
                regular: {
                    startClockMenu: false,
                    endClockMenu: false,
                    startTime: "",
                    endTime: ""
                },
                splitHours: {
                    first: {
                        startClockMenu: false,
                        endClockMenu: false,
                        startTime: "",
                        endTime: ""
                    },
                    second: {
                        startClockMenu: false,
                        endClockMenu: false,
                        startTime: "",
                        endTime: ""
                    }
                }
            },
            {
                name: "Tuesday",
                operationHours: "24 Hours",
                regular: {
                    startClockMenu: false,
                    endClockMenu: false,
                    startTime: "",
                    endTime: ""
                },
                splitHours: {
                    first: {
                        startClockMenu: false,
                        endClockMenu: false,
                        startTime: "",
                        endTime: ""
                    },
                    second: {
                        startClockMenu: false,
                        endClockMenu: false,
                        startTime: "",
                        endTime: ""
                    }
                }
            },
            {
                name: "Wednesday",
                operationHours: "24 Hours",
                regular: {
                    startClockMenu: false,
                    endClockMenu: false,
                    startTime: "",
                    endTime: ""
                },
                splitHours: {
                    first: {
                        startClockMenu: false,
                        endClockMenu: false,
                        startTime: "",
                        endTime: ""
                    },
                    second: {
                        startClockMenu: false,
                        endClockMenu: false,
                        startTime: "",
                        endTime: ""
                    }
                }
            },
            {
                name: "Thursday",
                operationHours: "24 Hours",
                regular: {
                    startClockMenu: false,
                    endClockMenu: false,
                    startTime: "",
                    endTime: ""
                },
                splitHours: {
                    first: {
                        startClockMenu: false,
                        endClockMenu: false,
                        startTime: "",
                        endTime: ""
                    },
                    second: {
                        startClockMenu: false,
                        endClockMenu: false,
                        startTime: "",
                        endTime: ""
                    }
                }
            },
            {
                name: "Friday",
                operationHours: "24 Hours",
                regular: {
                    startClockMenu: false,
                    endClockMenu: false,
                    startTime: "",
                    endTime: ""
                },
                splitHours: {
                    first: {
                        startClockMenu: false,
                        endClockMenu: false,
                        startTime: "",
                        endTime: ""
                    },
                    second: {
                        startClockMenu: false,
                        endClockMenu: false,
                        startTime: "",
                        endTime: ""
                    }
                }
            },
            {
                name: "Saturday",
                operationHours: "24 Hours",
                regular: {
                    startClockMenu: false,
                    endClockMenu: false,
                    startTime: "",
                    endTime: ""
                },
                splitHours: {
                    first: {
                        startClockMenu: false,
                        endClockMenu: false,
                        startTime: "",
                        endTime: ""
                    },
                    second: {
                        startClockMenu: false,
                        endClockMenu: false,
                        startTime: "",
                        endTime: ""
                    }
                }
            },
            {
                name: "Sunday",
                operationHours: "24 Hours",
                regular: {
                    startClockMenu: false,
                    endClockMenu: false,
                    startTime: "",
                    endTime: ""
                },
                splitHours: {
                    first: {
                        startClockMenu: false,
                        endClockMenu: false,
                        startTime: "",
                        endTime: ""
                    },
                    second: {
                        startClockMenu: false,
                        endClockMenu: false,
                        startTime: "",
                        endTime: ""
                    }
                }
            }
        ],
        timePicker: ""
    })
};
</script>
