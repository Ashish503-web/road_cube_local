<template>
    <v-container class="px-4">
        <v-sheet color="#eaedf1" class="pa-4">
            <v-row class="mt-12" no-gutters>
                <v-col cols="auto">
                    <v-tabs v-model="tab" show-arrows>
                        <v-tab
                            v-for="tab in tabs"
                            :key="tab"
                            v-text="tab"
                            class="text-capitalize"
                        ></v-tab>
                    </v-tabs>
                </v-col>

                <v-col cols="12">
                    <v-card tile flat class="py-5 px-12">
                        <v-card class="mt-5">
                            <v-card-title class="text--secondary"
                                >Logo</v-card-title
                            >

                            <v-card-text>
                                You can upload here the logo of your business
                                which will appear in the app and will be on the
                                physical cards. If we think that it can be
                                improved we will contact you before publishment.

                                <v-row
                                    class="dashed mt-5"
                                    no-gutters
                                    align="center"
                                >
                                    <v-col cols="auto" class="pa-5 ml-12">
                                        <v-img
                                            :src="logo.image"
                                            width="64"
                                        ></v-img>
                                    </v-col>
                                    <v-col cols="auto" class="ml-12">
                                        Press the following button to choose
                                        image:
                                        <v-file-input
                                            color="secondary"
                                            class="mt-1"
                                            outlined
                                            dense
                                            hide-details
                                            @change="
                                                onFileSelected(logo, $event)
                                            "
                                        ></v-file-input>
                                    </v-col>
                                </v-row>
                            </v-card-text>

                            <v-card-actions class="pl-4">
                                <v-btn color="primary" class="text-capitalize">
                                    <v-icon
                                        v-text="icons.mdiArrowRight"
                                    ></v-icon>
                                    update logo
                                </v-btn>
                            </v-card-actions>
                        </v-card>

                        <v-card class="mt-12">
                            <v-row
                                no-gutters
                                justify="space-between"
                                class="px-3"
                            >
                                <v-col cols="5">
                                    <v-card-title class="pl-0 text--secondary"
                                        >Pin Display</v-card-title
                                    >

                                    <v-card-text class="pa-0 relative">
                                        Here you can change the display of the
                                        pin on the map:
                                        <v-img
                                            :src="
                                                mapPin.image
                                                    ? bubbleNew
                                                    : bubbleLogo
                                            "
                                            width="84"
                                        ></v-img>
                                        <v-img
                                            v-if="mapPin.image"
                                            :src="mapPin.image"
                                            class="map-new-pin"
                                        ></v-img>
                                        Press the following button to choose
                                        image:
                                        <v-file-input
                                            color="secondary"
                                            class="mt-1"
                                            outlined
                                            dense
                                            hide-details
                                            @change="
                                                onFileSelected(mapPin, $event)
                                            "
                                        ></v-file-input>
                                    </v-card-text>
                                </v-col>
                                <v-col cols="auto" class="mt-5 relative">
                                    <v-img
                                        src="@/assets/theMapLogo3.png"
                                        width="260"
                                        style="border: 2px solid gray"
                                        class="rounded-circle"
                                    ></v-img>
                                </v-col>
                            </v-row>

                            <v-card-actions class="pl-4">
                                <v-btn color="primary" class="text-capitalize">
                                    <v-icon
                                        v-text="icons.mdiArrowRight"
                                    ></v-icon>
                                    update logo
                                </v-btn>
                            </v-card-actions>
                        </v-card>

                        <v-card class="mt-12">
                            <v-card-title class="text--secondary"
                                >Business Information</v-card-title
                            >
                            <v-container>
                                <v-row justify="space-around">
                                    <v-col cols="5">
                                        <v-text-field
                                            label="Business Name"
                                            color="secondary"
                                            outlined
                                            dense
                                            clearable
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="5">
                                        <v-text-field
                                            label="Business Address"
                                            color="secondary"
                                            outlined
                                            dense
                                            clearable
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="5">
                                        <v-select
                                            label="Basic Business Category"
                                            color="secondary"
                                            outlined
                                            dense
                                        ></v-select>
                                    </v-col>
                                    <v-col cols="5">
                                        <v-text-field
                                            label="Business Activity"
                                            color="secondary"
                                            outlined
                                            dense
                                            clearable
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="5">
                                        <v-autocomplete
                                            label="Country"
                                            color="secondary"
                                            outlined
                                            dense
                                            clearable
                                        ></v-autocomplete>
                                    </v-col>
                                    <v-col cols="5">
                                        <v-text-field
                                            type="number"
                                            label="Business Telephone Number"
                                            color="secondary"
                                            outlined
                                            dense
                                            clearable
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="5">
                                        <v-text-field
                                            type="number"
                                            label="Business Telephone Number 2"
                                            color="secondary"
                                            outlined
                                            dense
                                            clearable
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="5">
                                        <v-text-field
                                            type="number"
                                            label="Owner's Mobile Phone"
                                            color="secondary"
                                            outlined
                                            dense
                                            clearable
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="5">
                                        <v-text-field
                                            label="Owner's Fullname"
                                            color="secondary"
                                            outlined
                                            dense
                                            clearable
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="5">
                                        <v-text-field
                                            type="email"
                                            label="Email"
                                            color="secondary"
                                            outlined
                                            dense
                                            clearable
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>

                            <a href="#" class="ml-4">View on Google Maps</a>

                            <v-card-actions class="pl-4">
                                <v-btn color="primary" class="text-capitalize">
                                    <v-icon
                                        v-text="icons.mdiArrowRight"
                                    ></v-icon>
                                    update logo
                                </v-btn>
                            </v-card-actions>
                        </v-card>

                        <v-card class="mt-12">
                            <v-card-title class="text--secondary"
                                >Hours of Operations</v-card-title
                            >

                            <v-container
                                v-for="weekday in weekdays"
                                :key="weekday.name"
                                class="px-4"
                            >
                                <v-row
                                    no-gutters
                                    justify="space-between"
                                    align="center"
                                >
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

                                    <v-col
                                        v-if="
                                            weekday.operationHours === 'Regular'
                                        "
                                        cols="12"
                                    >
                                        <v-row
                                            no-gutters
                                            justify="space-between"
                                            class="py-5"
                                        >
                                            <v-col cols="6" class="pa-3">
                                                <v-menu
                                                    v-model="
                                                        weekday.regular
                                                            .startClockMenu
                                                    "
                                                    max-width="290"
                                                    offset-y
                                                    :close-on-content-click="
                                                        false
                                                    "
                                                >
                                                    <template
                                                        v-slot:activator="{
                                                            on
                                                        }"
                                                    >
                                                        <v-text-field
                                                            v-model="
                                                                weekday.regular
                                                                    .startTime
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
                                                                :disabled="
                                                                    !timePicker
                                                                "
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
                                                    v-model="
                                                        weekday.regular
                                                            .endClockMenu
                                                    "
                                                    max-width="290"
                                                    offset-y
                                                    :close-on-content-click="
                                                        false
                                                    "
                                                >
                                                    <template
                                                        v-slot:activator="{
                                                            on
                                                        }"
                                                    >
                                                        <v-text-field
                                                            v-model="
                                                                weekday.regular
                                                                    .endTime
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
                                                                :disabled="
                                                                    !timePicker
                                                                "
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
                                        v-if="
                                            weekday.operationHours ===
                                                'Split Hours'
                                        "
                                        cols="12"
                                    >
                                        <v-row
                                            no-gutters
                                            justify="space-between"
                                            class="py-5"
                                        >
                                            <v-col cols="3" class="pa-3">
                                                <v-menu
                                                    v-model="
                                                        weekday.splitHours.first
                                                            .startClockMenu
                                                    "
                                                    max-width="290"
                                                    offset-y
                                                    origin="center center"
                                                    transition="scale-transition"
                                                    :close-on-content-click="
                                                        false
                                                    "
                                                >
                                                    <template
                                                        v-slot:activator="{
                                                            on
                                                        }"
                                                    >
                                                        <v-text-field
                                                            v-model="
                                                                weekday
                                                                    .splitHours
                                                                    .first
                                                                    .startTime
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
                                                                :disabled="
                                                                    !timePicker
                                                                "
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
                                                    v-model="
                                                        weekday.splitHours.first
                                                            .endClockMenu
                                                    "
                                                    max-width="290"
                                                    offset-y
                                                    origin="center center"
                                                    transition="scale-transition"
                                                    :close-on-content-click="
                                                        false
                                                    "
                                                >
                                                    <template
                                                        v-slot:activator="{
                                                            on
                                                        }"
                                                    >
                                                        <v-text-field
                                                            v-model="
                                                                weekday
                                                                    .splitHours
                                                                    .first
                                                                    .endTime
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
                                                                :disabled="
                                                                    !timePicker
                                                                "
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
                                                        weekday.splitHours
                                                            .second
                                                            .startClockMenu
                                                    "
                                                    max-width="290"
                                                    offset-y
                                                    origin="center center"
                                                    transition="scale-transition"
                                                    :close-on-content-click="
                                                        false
                                                    "
                                                >
                                                    <template
                                                        v-slot:activator="{
                                                            on
                                                        }"
                                                    >
                                                        <v-text-field
                                                            v-model="
                                                                weekday
                                                                    .splitHours
                                                                    .second
                                                                    .startTime
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
                                                                :disabled="
                                                                    !timePicker
                                                                "
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
                                                    v-model="
                                                        weekday.splitHours
                                                            .second.endClockMenu
                                                    "
                                                    max-width="290"
                                                    offset-y
                                                    origin="center center"
                                                    transition="scale-transition"
                                                    :close-on-content-click="
                                                        false
                                                    "
                                                >
                                                    <template
                                                        v-slot:activator="{
                                                            on
                                                        }"
                                                    >
                                                        <v-text-field
                                                            v-model="
                                                                weekday
                                                                    .splitHours
                                                                    .second
                                                                    .endTime
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
                                                                :disabled="
                                                                    !timePicker
                                                                "
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
                        </v-card>

                        <v-card class="mt-12">
                            <v-card-title class="text--secondary">
                                Invoicing
                            </v-card-title>

                            <v-container class="pt-4 pb-0">
                                <v-row>
                                    <v-col cols="8" class="pa-0">
                                        <v-row
                                            no-gutters
                                            justify="space-around"
                                        >
                                            <v-col cols="5">
                                                <v-text-field
                                                    label="Legal Name"
                                                    color="secondary"
                                                    outlined
                                                    dense
                                                    clearable
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="5">
                                                <v-text-field
                                                    label="Tax Id"
                                                    color="secondary"
                                                    outlined
                                                    dense
                                                    clearable
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="5">
                                                <v-text-field
                                                    label="Business Address"
                                                    color="secondary"
                                                    outlined
                                                    dense
                                                    clearable
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="5">
                                                <v-text-field
                                                    label="Profession"
                                                    color="secondary"
                                                    outlined
                                                    dense
                                                    clearable
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="5">
                                                <v-text-field
                                                    label="Jurisdiction"
                                                    color="secondary"
                                                    outlined
                                                    dense
                                                    clearable
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="5">
                                                <v-select
                                                    :items="[
                                                        'Greece 24%',
                                                        'Italy 22%',
                                                        'USA 0%'
                                                    ]"
                                                    label="Invoice from"
                                                    color="secondary"
                                                    item-color="secondary"
                                                    outlined
                                                    dense
                                                ></v-select>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-container>

                            <v-card-actions class="pl-4">
                                <v-btn color="primary" class="text-capitalize">
                                    <v-icon
                                        v-text="icons.mdiArrowRight"
                                    ></v-icon>
                                    send invoice settings
                                </v-btn>
                            </v-card-actions>
                        </v-card>

                        <v-card class="mt-12">
                            <v-card-title class="text--secondary">
                                Receipt Information
                            </v-card-title>

                            <v-container class="pt-4 pb-0">
                                <v-row>
                                    <v-col cols="8" class="pa-0">
                                        <v-row
                                            no-gutters
                                            justify="space-around"
                                        >
                                            <v-col cols="5">
                                                <v-text-field
                                                    label="Business Telephone Number"
                                                    color="secondary"
                                                    outlined
                                                    dense
                                                    clearable
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="5">
                                                <v-text-field
                                                    label="Tax Id"
                                                    color="secondary"
                                                    outlined
                                                    dense
                                                    clearable
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="5">
                                                <v-text-field
                                                    label="Business Address"
                                                    color="secondary"
                                                    outlined
                                                    dense
                                                    clearable
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="5">
                                                <v-text-field
                                                    label="Business Name"
                                                    color="secondary"
                                                    outlined
                                                    dense
                                                    clearable
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-container>

                            <v-card-actions class="pl-4">
                                <v-btn color="primary" class="text-capitalize">
                                    <v-icon
                                        v-text="icons.mdiArrowRight"
                                    ></v-icon>
                                    update details
                                </v-btn>
                            </v-card-actions>
                        </v-card>

                        <v-card class="mt-12 pb-8">
                            <v-card-title class="text--secondary">
                                Fast Payment
                            </v-card-title>

                            <v-container>
                                <v-row no-gutters align="center">
                                    <v-col cols="auto" class="subtitle-2 ml-12">
                                        Toogle Fast Payment option:
                                    </v-col>
                                    <v-col cols="auto" class="ml-3">
                                        <v-switch
                                            v-model="fastPayment"
                                            :label="fastPayment"
                                            color="secondary"
                                            true-value="On"
                                            false-value="Off"
                                            hide-details
                                            class="ma-0"
                                        ></v-switch>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card>

                        <v-card class="mt-12">
                            <v-card-title class="text--secondary">
                                Orders
                            </v-card-title>

                            <v-container>
                                <v-row
                                    no-gutters
                                    justify="space-between"
                                    align="center"
                                    class="px-4"
                                >
                                    <v-col cols="4" class="subtitle-2">
                                        Toogle Order option:
                                        <v-switch
                                            v-model="orderOption"
                                            :label="orderOption"
                                            color="secondary"
                                            true-value="On"
                                            false-value="Off"
                                            class="mb-3 mt-5"
                                        ></v-switch>
                                    </v-col>

                                    <v-col cols="4" class="subtitle-2">
                                        Limit:
                                        <v-text-field
                                            label="Radius m2"
                                            color="secondary"
                                            class="mt-4"
                                            outlined
                                            dense
                                            clearable
                                            :disabled="orderOption === 'Off'"
                                        ></v-text-field>
                                    </v-col>

                                    <template v-if="orderOption === 'On'">
                                        <v-col cols="6" class="subtitle-2">
                                            Validate minimum amount for delivery
                                            after discount :
                                            <v-switch
                                                v-model="validateMinAmount"
                                                :label="validateMinAmount"
                                                color="secondary"
                                                true-value="On"
                                                false-value="Off"
                                                class="mb-3 mt-5"
                                            ></v-switch>
                                        </v-col>

                                        <v-col cols="4" class="subtitle-2">
                                            Minimum Amount for Delivery:
                                            <v-text-field
                                                type="number"
                                                label="Amount"
                                                color="secondary"
                                                class="mt-4"
                                                outlined
                                                dense
                                                clearable
                                                :append-outer-icon="
                                                    icons.mdiCurrencyEur
                                                "
                                            ></v-text-field>
                                        </v-col>

                                        <v-col cols="4" class="subtitle-2">
                                            Card payments:
                                            <v-switch
                                                v-model="cardPayment"
                                                :label="cardPayment"
                                                color="secondary"
                                                true-value="On"
                                                false-value="Off"
                                                class="mb-4"
                                            ></v-switch>
                                        </v-col>

                                        <v-col cols="4" class="subtitle-2">
                                            Cash payments:
                                            <v-switch
                                                v-model="cashPayment"
                                                :label="cashPayment"
                                                color="secondary"
                                                true-value="On"
                                                false-value="Off"
                                                class="mb-4"
                                            ></v-switch>
                                        </v-col>

                                        <v-col cols="4" class="subtitle-2">
                                            Cash on delivery Fee:
                                            <v-text-field
                                                type="number"
                                                label="Amount"
                                                color="secondary"
                                                class="mt-4"
                                                outlined
                                                dense
                                                clearable
                                                :append-outer-icon="
                                                    icons.mdiCurrencyEur
                                                "
                                            ></v-text-field>
                                        </v-col>
                                    </template>
                                </v-row>
                            </v-container>

                            <v-card-actions class="pl-4">
                                <v-btn color="primary" class="text-capitalize">
                                    <v-icon
                                        v-text="icons.mdiArrowRight"
                                    ></v-icon>
                                    update details
                                </v-btn>
                            </v-card-actions>
                        </v-card>

                        <v-card class="mt-12">
                            <v-card-title class="text--secondary">
                                Change Password
                            </v-card-title>

                            <v-card-text class="pb-0">
                                <v-text-field
                                    type="password"
                                    label="Password"
                                    color="secondary"
                                    outlined
                                    dense
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    type="password"
                                    label="New Password"
                                    color="secondary"
                                    outlined
                                    dense
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    type="password"
                                    label="Confirm Password"
                                    color="secondary"
                                    outlined
                                    dense
                                    clearable
                                ></v-text-field>
                            </v-card-text>

                            <v-card-actions class="pl-4">
                                <v-btn color="primary" class="text-capitalize"
                                    >verification</v-btn
                                >
                            </v-card-actions>
                        </v-card>

                        <v-card class="mt-12">
                            <v-card-title class="text--secondary">
                                Choose redemption for the company
                            </v-card-title>

                            <v-card-text class="pb-0">
                                <v-radio-group>
                                    <v-radio
                                        label="Direct Redemption (redemption ON)"
                                        color="secondary"
                                    ></v-radio>
                                    <v-radio
                                        label="Code (redemption OFF)"
                                        color="secondary"
                                    ></v-radio>
                                </v-radio-group>
                            </v-card-text>

                            <v-card-actions class="pl-4">
                                <v-btn color="primary" class="text-capitalize"
                                    >verification</v-btn
                                >
                            </v-card-actions>
                        </v-card>

                        <v-card class="mt-12">
                            <v-card-title class="text--secondary">
                                Product categories
                            </v-card-title>

                            <v-card-text class="pb-0">
                                <v-form @submit.prevent>
                                    <v-row no-gutters>
                                        <v-col cols="4">
                                            <v-text-field
                                                v-model="category"
                                                label="Enter Category"
                                                color="secondary"
                                                outlined
                                                dense
                                                clearable
                                            ></v-text-field>
                                        </v-col>
                                        <v-col class="ml-3">
                                            <v-btn
                                                type="submit"
                                                fab
                                                dark
                                                color="secondary"
                                                small
                                                @click="addCategory"
                                            >
                                                <v-icon
                                                    size="30"
                                                    v-text="icons.mdiPlus"
                                                ></v-icon>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-form>

                                <v-row>
                                    <v-col
                                        v-for="(category, i) in categories"
                                        :key="category"
                                        cols="4"
                                    >
                                        <v-card
                                            width="300"
                                            class="subtitle-2 py-3 px-5 relative"
                                        >
                                            <v-badge
                                                class="category-number"
                                                content="5"
                                                color="#4286f4"
                                            >
                                            </v-badge>
                                            {{ category }}
                                            <v-sheet
                                                color="red"
                                                width="20"
                                                class="rounded-circle text-center category-remove"
                                                dark
                                                @click="removeCategory(i)"
                                            >
                                                <v-icon
                                                    x-small
                                                    v-text="icons.mdiCloseThick"
                                                ></v-icon>
                                            </v-sheet>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-card-text>

                            <v-card-actions class="pl-4">
                                <v-btn color="primary" class="text-capitalize"
                                    >verification</v-btn
                                >
                            </v-card-actions>
                        </v-card>

                        <v-card class="mt-12">
                            <v-card-title class="text--secondary">
                                API Authentication
                            </v-card-title>

                            <v-card-text>
                                <v-textarea
                                    color="secondary"
                                    outlined
                                    clearable
                                ></v-textarea>

                                <v-row
                                    no-gutters
                                    justify="space-between"
                                    align="center"
                                >
                                    <v-col cols="3">
                                        <v-text-field
                                            label="Password"
                                            color="secondary"
                                            outlined
                                            dense
                                            clearable
                                            hide-details
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="6"
                                        class="text-center secondary--text"
                                    >
                                        You can find detailed documentation
                                        <a
                                            class="secondary--text subtitle-2"
                                            href="https://documenter.getpostman.com/view/5813491/SzKQxfkT?version=latest"
                                            target="_blank"
                                            >here</a
                                        >
                                    </v-col>
                                    <v-col cols="auto">
                                        <v-btn
                                            color="primary"
                                            class="text-capitalize"
                                            >get token</v-btn
                                        >
                                    </v-col>
                                    <v-col cols="auto" class="subtitle-2 mt-5">
                                        Reset all previously created tokens:
                                    </v-col>

                                    <v-col class="pl-3">
                                        <v-switch
                                            color="secondary"
                                            inset
                                            hide-details
                                        ></v-switch>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-card>
                </v-col>
            </v-row>
        </v-sheet>
    </v-container>
</template>

<script>
import {
    mdiArrowRight,
    mdiClockOutline,
    mdiCurrencyEur,
    mdiPlus,
    mdiCloseThick
} from "@mdi/js";
import storeLogo from "@/assets/store-logo.png";
import bubbleLogo from "@/assets/the_on_bubble.png";
import bubbleNew from "@/assets/new_bubble_image.png";

export default {
    name: "Settings",

    data: () => ({
        icons: {
            mdiArrowRight,
            mdiClockOutline,
            mdiCurrencyEur,
            mdiPlus,
            mdiCloseThick
        },
        tab: 0,
        tabs: [
            "profile",
            "reward",
            "product points",
            "users",
            "cleaner management",
            "direction of payments",
            "cards",
            "subscription"
        ],
        logo: {
            image: storeLogo,
            imageFile: ""
        },
        bubbleLogo,
        bubbleNew,
        mapPin: {
            image: "",
            imageFile: ""
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
        timePicker: "",
        fastPayment: "Off",
        orderOption: "Off",
        validateMinAmount: "Off",
        cardPayment: "On",
        cashPayment: "On",
        category: "",
        categories: []
    }),

    methods: {
        onFileSelected(item, event) {
            item.imageFile = event;
            const reader = new FileReader();
            reader.readAsDataURL(item.imageFile);
            reader.onload = e => (item.image = e.target.result);
        },

        addCategory() {
            this.categories.push(this.category);
            this.category = "";
        },

        removeCategory(index) {
            this.categories.splice(index, 1);
        }
    }
};
</script>

<style scoped>
.dashed {
    border: 1px dashed grey;
    border-radius: 10px;
}

.relative {
    position: relative;
}

.map-new-pin {
    width: 50px;
    position: absolute;
    top: 37px;
    left: 14px;
}

.category-number {
    position: absolute;
    top: 7px;
    left: -5px;
}

.category-remove {
    position: absolute;
    top: -10px;
    right: -10px;
    cursor: pointer;
}
</style>
