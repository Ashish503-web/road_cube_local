<template>
    <v-container fluid class="px-3">
        <v-sheet color="#eaedf1" class="pa-3">
            <v-row no-gutters>
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
                        <v-tabs-items v-model="tab">
                            <v-tab-item>
                                <v-card class="mt-5 rounded-lg">
                                    <v-card-title class="grey lighten-3"
                                        >Logo</v-card-title
                                    >

                                    <v-card-text>
                                        You can upload here the logo of your
                                        business which will appear in the app
                                        and will be on the physical cards. If we
                                        think that it can be improved we will
                                        contact you before publishment.

                                        <v-row
                                            class="dashed mt-5"
                                            no-gutters
                                            align="center"
                                        >
                                            <v-col
                                                cols="auto"
                                                class="pa-5 ml-12"
                                            >
                                                <v-img
                                                    :src="logo.image"
                                                    width="64"
                                                ></v-img>
                                            </v-col>
                                            <v-col cols="auto" class="ml-12">
                                                Press the following button to
                                                choose image:
                                                <v-file-input
                                                    color="secondary"
                                                    class="mt-1"
                                                    outlined
                                                    dense
                                                    hide-details
                                                    @change="
                                                        onFileSelected(
                                                            logo,
                                                            $event
                                                        )
                                                    "
                                                ></v-file-input>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>

                                    <v-card-actions class="pl-4">
                                        <v-btn
                                            color="primary"
                                            class="text-capitalize"
                                            rounded
                                        >
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
                                            <v-card-title
                                                class="pl-0 text--secondary"
                                                >Pin Display</v-card-title
                                            >

                                            <v-card-text class="pa-0 relative">
                                                Here you can change the display
                                                of the pin on the map:
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
                                                Press the following button to
                                                choose image:
                                                <v-file-input
                                                    color="secondary"
                                                    class="mt-1"
                                                    outlined
                                                    dense
                                                    hide-details
                                                    @change="
                                                        onFileSelected(
                                                            mapPin,
                                                            $event
                                                        )
                                                    "
                                                ></v-file-input>
                                            </v-card-text>
                                        </v-col>
                                        <v-col
                                            cols="auto"
                                            class="mt-5 relative"
                                        >
                                            <v-img
                                                src="@/assets/theMapLogo3.png"
                                                width="260"
                                                style="border: 2px solid gray"
                                                class="rounded-circle"
                                            ></v-img>
                                        </v-col>
                                    </v-row>

                                    <v-card-actions class="pl-4">
                                        <v-btn
                                            color="primary"
                                            class="text-capitalize"
                                            rounded
                                        >
                                            update logo
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>

                                <v-card class="mt-12 rounded-lg">
                                    <v-card-title class="grey lighten-3"
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
                                                    menu-props="offsetY"
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

                                    <a href="#" class="ml-4"
                                        >View on Google Maps</a
                                    >

                                    <v-card-actions class="pl-4">
                                        <v-btn
                                            color="primary"
                                            class="text-capitalize"
                                            rounded
                                        >
                                            update logo
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>

                                <v-card class="mt-12 rounded-lg">
                                    <v-card-title class="grey lighten-3"
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
                                                    v-model="
                                                        weekday.operationHours
                                                    "
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
                                                        <v-col
                                                            cols="auto"
                                                            class="mx-1"
                                                        >
                                                            <v-radio
                                                                label="Split Hours"
                                                                value="Split Hours"
                                                                color="secondary"
                                                            ></v-radio>
                                                        </v-col>
                                                        <v-col
                                                            cols="auto"
                                                            class="mx-1"
                                                        >
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
                                                    weekday.operationHours ===
                                                        'Regular'
                                                "
                                                cols="12"
                                            >
                                                <v-row
                                                    no-gutters
                                                    justify="space-between"
                                                    class="py-5"
                                                >
                                                    <v-col
                                                        cols="6"
                                                        class="pa-3"
                                                    >
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
                                                                        weekday
                                                                            .regular
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
                                                                    v-model="
                                                                        timePicker
                                                                    "
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

                                                    <v-col
                                                        cols="6"
                                                        class="pa-3"
                                                    >
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
                                                                        weekday
                                                                            .regular
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
                                                                    v-model="
                                                                        timePicker
                                                                    "
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
                                                    <v-col
                                                        cols="3"
                                                        class="pa-3"
                                                    >
                                                        <v-menu
                                                            v-model="
                                                                weekday
                                                                    .splitHours
                                                                    .first
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
                                                                    v-model="
                                                                        timePicker
                                                                    "
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

                                                    <v-col
                                                        cols="3"
                                                        class="pa-3"
                                                    >
                                                        <v-menu
                                                            v-model="
                                                                weekday
                                                                    .splitHours
                                                                    .first
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
                                                                    v-model="
                                                                        timePicker
                                                                    "
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

                                                    <v-col
                                                        cols="3"
                                                        class="pa-3"
                                                    >
                                                        <v-menu
                                                            v-model="
                                                                weekday
                                                                    .splitHours
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
                                                                    v-model="
                                                                        timePicker
                                                                    "
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

                                                    <v-col
                                                        cols="3"
                                                        class="pa-3"
                                                    >
                                                        <v-menu
                                                            v-model="
                                                                weekday
                                                                    .splitHours
                                                                    .second
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
                                                                    v-model="
                                                                        timePicker
                                                                    "
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

                                    <v-card-actions class="pl-4 mt-3">
                                        <v-btn
                                            color="primary"
                                            class="text-capitalize"
                                            rounded
                                        >
                                            update details
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>

                                <v-card class="mt-12 rounded-lg">
                                    <v-card-title class="grey lighten-3">
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
                                                            menu-props="offsetY"
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
                                        <v-btn
                                            color="primary"
                                            class="text-capitalize"
                                            rounded
                                        >
                                            send invoice settings
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>

                                <v-card class="mt-12 rounded-lg">
                                    <v-card-title class="grey lighten-3">
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
                                                            outlined
                                                            dense
                                                            clearable
                                                        ></v-text-field>
                                                    </v-col>
                                                    <v-col cols="5">
                                                        <v-text-field
                                                            label="Tax Id"
                                                            outlined
                                                            dense
                                                            clearable
                                                        ></v-text-field>
                                                    </v-col>
                                                    <v-col cols="5">
                                                        <v-text-field
                                                            label="Business Address"
                                                            outlined
                                                            dense
                                                            clearable
                                                        ></v-text-field>
                                                    </v-col>
                                                    <v-col cols="5">
                                                        <v-text-field
                                                            label="Business Name"
                                                            outlined
                                                            dense
                                                            clearable
                                                        ></v-text-field>
                                                    </v-col>
                                                </v-row>
                                            </v-col>
                                        </v-row>
                                    </v-container>

                                    <v-card-actions>
                                        <v-btn
                                            color="primary"
                                            class="text-capitalize"
                                            rounded
                                        >
                                            update details
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>

                                <v-card class="mt-12 pb-8 rounded-lg">
                                    <v-card-title class="grey lighten-3">
                                        Fast Payment
                                    </v-card-title>

                                    <v-container class="mt-5">
                                        <v-row no-gutters align="center">
                                            <v-col
                                                cols="auto"
                                                class="subtitle-2 ml-12"
                                            >
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

                                <v-card class="mt-12 rounded-lg">
                                    <v-card-title class="grey lighten-3">
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
                                                    :disabled="
                                                        orderOption === 'Off'
                                                    "
                                                ></v-text-field>
                                            </v-col>

                                            <template
                                                v-if="orderOption === 'On'"
                                            >
                                                <v-col
                                                    cols="6"
                                                    class="subtitle-2"
                                                >
                                                    Validate minimum amount for
                                                    delivery after discount :
                                                    <v-switch
                                                        v-model="
                                                            validateMinAmount
                                                        "
                                                        :label="
                                                            validateMinAmount
                                                        "
                                                        color="secondary"
                                                        true-value="On"
                                                        false-value="Off"
                                                        class="mb-3 mt-5"
                                                    ></v-switch>
                                                </v-col>

                                                <v-col
                                                    cols="4"
                                                    class="subtitle-2"
                                                >
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

                                                <v-col
                                                    cols="4"
                                                    class="subtitle-2"
                                                >
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

                                                <v-col
                                                    cols="4"
                                                    class="subtitle-2"
                                                >
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

                                                <v-col
                                                    cols="4"
                                                    class="subtitle-2"
                                                >
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
                                        <v-btn
                                            color="primary"
                                            class="text-capitalize"
                                            rounded
                                        >
                                            update details
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>

                                <v-card class="mt-12 rounded-lg">
                                    <v-card-title class="grey lighten-3">
                                        Change Password
                                    </v-card-title>

                                    <v-card-text class="pb-0 pt-8">
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
                                        <v-btn
                                            color="primary"
                                            class="text-capitalize"
                                            rounded
                                            >verification</v-btn
                                        >
                                    </v-card-actions>
                                </v-card>

                                <v-card class="mt-12 rounded-lg">
                                    <v-card-title class="grey lighten-3">
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
                                        <v-btn
                                            color="primary"
                                            class="text-capitalize"
                                            rounded
                                            >verification</v-btn
                                        >
                                    </v-card-actions>
                                </v-card>

                                <v-card class="mt-12 rounded-lg">
                                    <v-card-title class="grey lighten-3">
                                        Product categories
                                    </v-card-title>

                                    <v-card-text class="pb-0 pt-8">
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
                                                            v-text="
                                                                icons.mdiPlus
                                                            "
                                                        ></v-icon>
                                                    </v-btn>
                                                </v-col>
                                            </v-row>
                                        </v-form>

                                        <v-row>
                                            <v-col
                                                v-for="(category,
                                                i) in categories"
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
                                                        @click="
                                                            removeCategory(i)
                                                        "
                                                    >
                                                        <v-icon
                                                            x-small
                                                            v-text="
                                                                icons.mdiCloseThick
                                                            "
                                                        ></v-icon>
                                                    </v-sheet>
                                                </v-card>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>

                                    <v-card-actions class="pl-4">
                                        <v-btn
                                            color="primary"
                                            class="text-capitalize"
                                            rounded
                                            >verification</v-btn
                                        >
                                    </v-card-actions>
                                </v-card>

                                <v-card class="mt-12 rounded-lg">
                                    <v-card-title class="grey lighten-3">
                                        API Authentication
                                    </v-card-title>

                                    <v-card-text class="pt-8">
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
                                                You can find detailed
                                                documentation
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
                                                    rounded
                                                    >get token</v-btn
                                                >
                                            </v-col>
                                            <v-col
                                                cols="auto"
                                                class="subtitle-2 mt-5"
                                            >
                                                Reset all previously created
                                                tokens:
                                            </v-col>

                                            <v-col class="pl-3">
                                                <v-switch
                                                    color="secondary"
                                                    hide-details
                                                ></v-switch>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>

                            <v-tab-item>
                                <v-row no-gutters>
                                    <v-col cols="9">
                                        <v-checkbox
                                            v-model="sendPoints"
                                            color="secondary"
                                            class="pa-0 pl-4 ma-0"
                                            hide-details
                                        >
                                            <template v-slot:label>
                                                <v-card-title
                                                    class="text--primary pl-0"
                                                >
                                                    Send points by card or phone
                                                    number
                                                    <span
                                                        class="font-weight-light"
                                                        >{{
                                                            sendPoints
                                                                ? "(Active)"
                                                                : "(Inactive)"
                                                        }}</span
                                                    >
                                                </v-card-title>
                                            </template>
                                        </v-checkbox>

                                        <v-card-text>
                                            <v-icon
                                                color="secondary"
                                                v-text="icons.mdiInformation"
                                            ></v-icon>
                                            <span class="text--secondary ml-2">
                                                You will be able to use the
                                                donation from the New
                                                Transaction page
                                            </span>

                                            <h4 class="subtitle-2 pl-9">
                                                How to notify a consumer of
                                                points
                                            </h4>
                                            <v-container>
                                                <v-row>
                                                    <v-col
                                                        cols="8"
                                                        class="px-8 py-0"
                                                    >
                                                        <v-select
                                                            :items="[
                                                                'Sms 1/month',
                                                                'Sms every time',
                                                                'Push',
                                                                'Email'
                                                            ]"
                                                            menu-props="offsetY"
                                                            color="secondary"
                                                            item-color="secondary"
                                                            outlined
                                                            dense
                                                            hide-details
                                                        ></v-select>

                                                        <v-checkbox
                                                            color="secondary"
                                                            hide-details
                                                        >
                                                            <template
                                                                v-slot:label
                                                            >
                                                                <h4
                                                                    class="subtitle-2"
                                                                >
                                                                    Ability to
                                                                    add a user
                                                                    to "Send
                                                                    points"
                                                                </h4>
                                                            </template>
                                                        </v-checkbox>

                                                        <v-checkbox
                                                            color="secondary"
                                                            hide-details
                                                        >
                                                            <template
                                                                v-slot:label
                                                            >
                                                                <h4
                                                                    class="subtitle-2"
                                                                >
                                                                    Ability to
                                                                    select
                                                                    products in
                                                                    "Send
                                                                    points"
                                                                </h4>
                                                            </template>
                                                        </v-checkbox>

                                                        <v-checkbox
                                                            color="secondary"
                                                            hide-details
                                                        >
                                                            <template
                                                                v-slot:label
                                                            >
                                                                <h4
                                                                    class="subtitle-2"
                                                                >
                                                                    Show receipt
                                                                    code in
                                                                    "Send
                                                                    points"
                                                                </h4>
                                                            </template>
                                                        </v-checkbox>

                                                        <v-btn
                                                            color="primary"
                                                            class="text-capitalize mt-5"
                                                            rounded
                                                            >update
                                                            details</v-btn
                                                        >
                                                    </v-col>
                                                </v-row>
                                            </v-container>
                                        </v-card-text>

                                        <hr class="ml-4" />

                                        <v-checkbox
                                            v-model="pointDelivery"
                                            color="secondary"
                                            class="pa-0 pl-4 ma-0"
                                            hide-details
                                        >
                                            <template v-slot:label>
                                                <v-card-title
                                                    class="text--primary pl-0"
                                                >
                                                    Point Delivery
                                                    <span
                                                        class="font-weight-light"
                                                        >{{
                                                            pointDelivery
                                                                ? "(Active)"
                                                                : "(Inactive)"
                                                        }}</span
                                                    >
                                                </v-card-title>
                                            </template>
                                        </v-checkbox>

                                        <v-card-text>
                                            <v-icon
                                                color="secondary"
                                                v-text="icons.mdiInformation"
                                            ></v-icon>
                                            <span class="text--secondary ml-2">
                                                You will be able to use the
                                                Point Score via a Point Device
                                                connected to your store.
                                            </span>

                                            <v-checkbox
                                                color="secondary"
                                                class="ml-8"
                                                hide-details
                                            >
                                                <template v-slot:label>
                                                    <h4 class="subtitle-2">
                                                        Show amount in POS
                                                    </h4>
                                                </template>
                                            </v-checkbox>

                                            <v-checkbox
                                                color="secondary"
                                                class="ml-8"
                                                hide-details
                                            >
                                                <template v-slot:label>
                                                    <h4 class="subtitle-2">
                                                        Serial Shopping mode in
                                                        POS
                                                    </h4>
                                                </template>
                                            </v-checkbox>

                                            <v-btn
                                                color="primary"
                                                class="text-capitalize mt-5 ml-8"
                                                rounded
                                                >update details</v-btn
                                            >
                                        </v-card-text>

                                        <hr class="ml-4" />

                                        <v-checkbox
                                            v-model="scanReceipt"
                                            color="secondary"
                                            class="pa-0 pl-4 ma-0"
                                            hide-details
                                        >
                                            <template v-slot:label>
                                                <v-card-title
                                                    class="text--primary pl-0"
                                                >
                                                    Scan Receipt
                                                    <span
                                                        class="font-weight-light"
                                                        >{{
                                                            scanReceipt
                                                                ? "(Active)"
                                                                : "(Inactive)"
                                                        }}</span
                                                    >
                                                </v-card-title>
                                            </template>
                                        </v-checkbox>

                                        <v-card-text>
                                            <v-icon
                                                color="secondary"
                                                v-text="icons.mdiInformation"
                                            ></v-icon>
                                            <span class="text--secondary ml-2">
                                                Once activated, your customers
                                                will be able to scan the
                                                receipts from your store.
                                            </span>

                                            <v-container>
                                                <v-row>
                                                    <v-col
                                                        cols="6"
                                                        class="pl-0"
                                                    >
                                                        <h4
                                                            class="pl-4 subtitle-2"
                                                        >
                                                            Business Telephone
                                                            Number
                                                        </h4>
                                                        <v-text-field
                                                            type="number"
                                                            color="secondary"
                                                            class="mt-3"
                                                            outlined
                                                            dense
                                                            clearable
                                                            hide-details
                                                        ></v-text-field>
                                                    </v-col>

                                                    <v-col
                                                        cols="6"
                                                        class="pr-0"
                                                    >
                                                        <h4
                                                            class="pl-4 subtitle-2"
                                                        >
                                                            Tax Id
                                                        </h4>
                                                        <v-text-field
                                                            type="number"
                                                            color="secondary"
                                                            class="mt-3"
                                                            outlined
                                                            dense
                                                            clearable
                                                            hide-details
                                                        ></v-text-field>
                                                    </v-col>

                                                    <v-col
                                                        cols="6"
                                                        class="pl-0"
                                                    >
                                                        <h4
                                                            class="pl-4 subtitle-2"
                                                        >
                                                            Business Address
                                                        </h4>
                                                        <v-text-field
                                                            color="secondary"
                                                            class="mt-3"
                                                            outlined
                                                            dense
                                                            clearable
                                                            hide-details
                                                        ></v-text-field>
                                                    </v-col>

                                                    <v-col
                                                        cols="6"
                                                        class="pr-0"
                                                    >
                                                        <h4
                                                            class="pl-4 subtitle-2"
                                                        >
                                                            Business name
                                                        </h4>
                                                        <v-text-field
                                                            color="secondary"
                                                            class="mt-3"
                                                            outlined
                                                            dense
                                                            clearable
                                                            hide-details
                                                        ></v-text-field>
                                                    </v-col>

                                                    <v-col
                                                        cols="6"
                                                        class="pl-0"
                                                    >
                                                        <h4
                                                            class="pl-4 subtitle-2"
                                                        >
                                                            VAT 1
                                                        </h4>
                                                        <v-text-field
                                                            type="number"
                                                            color="secondary"
                                                            class="mt-3"
                                                            outlined
                                                            dense
                                                            clearable
                                                            hide-details
                                                            :append-icon="
                                                                icons.mdiPercent
                                                            "
                                                        ></v-text-field>
                                                    </v-col>

                                                    <v-col
                                                        cols="6"
                                                        class="pr-0"
                                                    >
                                                        <h4
                                                            class="pl-4 subtitle-2"
                                                        >
                                                            VAT 2
                                                        </h4>
                                                        <v-text-field
                                                            type="number"
                                                            color="secondary"
                                                            class="mt-3"
                                                            outlined
                                                            dense
                                                            clearable
                                                            hide-details
                                                            :append-icon="
                                                                icons.mdiPercent
                                                            "
                                                        ></v-text-field>
                                                    </v-col>
                                                </v-row>
                                            </v-container>

                                            <v-btn
                                                color="primary"
                                                class="text-capitalize mt-5"
                                                rounded
                                                >update details</v-btn
                                            >
                                        </v-card-text>

                                        <hr class="ml-4" />

                                        <v-checkbox
                                            v-model="rewardWithPresence"
                                            color="secondary"
                                            class="pa-0 pl-4 ma-0"
                                            hide-details
                                        >
                                            <template v-slot:label>
                                                <v-card-title
                                                    class="text--primary pl-0"
                                                >
                                                    Reward with presence in the
                                                    store
                                                    <span
                                                        class="font-weight-light"
                                                        >{{
                                                            rewardWithPresence
                                                                ? "(Active)"
                                                                : "(Inactive)"
                                                        }}</span
                                                    >
                                                </v-card-title>
                                            </template>
                                        </v-checkbox>

                                        <v-card-text>
                                            <v-icon
                                                color="secondary"
                                                v-text="icons.mdiInformation"
                                            ></v-icon>
                                            <span class="text--secondary ml-2">
                                                Win points only with the
                                                presence of the customer in the
                                                store.
                                            </span>
                                        </v-card-text>

                                        <hr class="ml-4" />

                                        <v-checkbox
                                            v-model="mobilePayments"
                                            color="secondary"
                                            class="pa-0 pl-4 ma-0"
                                            hide-details
                                        >
                                            <template v-slot:label>
                                                <v-card-title
                                                    class="text--primary pl-0"
                                                >
                                                    Mobile payments
                                                    <span
                                                        class="font-weight-light"
                                                        >{{
                                                            mobilePayments
                                                                ? "(Active)"
                                                                : "(Inactive)"
                                                        }}</span
                                                    >
                                                </v-card-title>
                                            </template>
                                        </v-checkbox>

                                        <div class="pl-12 mt-3">
                                            <v-btn
                                                color="primary"
                                                class="text-capitalize"
                                                rounded
                                                >appoint cleaners</v-btn
                                            >
                                        </div>

                                        <div class="pl-12 mt-3">
                                            <v-btn
                                                color="primary"
                                                class="text-capitalize"
                                                rounded
                                                >set a payment direction</v-btn
                                            >
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-tab-item>

                            <v-tab-item>
                                <v-data-table
                                    :headers="productPointsHeaders"
                                    :items="productPoints"
                                    :footer-props="{ itemsPerPageOptions }"
                                >
                                    <template v-slot:item.points="{ item }">
                                        <v-sheet
                                            style="background: transparent"
                                            class="py-3"
                                        >
                                            <v-sheet class="rounded-xl">
                                                <v-text-field
                                                    v-model="item.points"
                                                    outlined
                                                    dense
                                                    clearable
                                                    hide-details
                                                ></v-text-field>
                                            </v-sheet>
                                        </v-sheet>
                                    </template>

                                    <template v-slot:item.type="{ item }">
                                        <v-sheet
                                            style="background: transparent"
                                            class="py-3"
                                        >
                                            <v-sheet class="rounded-xl">
                                                <v-select
                                                    v-model="item.type"
                                                    :items="[
                                                        'Per Transaction',
                                                        'Piece',
                                                        'Liters',
                                                        'Per Euro'
                                                    ]"
                                                    menu-props="offsetY"
                                                    outlined
                                                    dense
                                                    hide-details
                                                ></v-select>
                                            </v-sheet>
                                        </v-sheet>
                                    </template>

                                    <template
                                        v-slot:item.pointSubsidy="{ item }"
                                    >
                                        <v-checkbox
                                            v-model="item.pointSubsidy"
                                            label="Subsidized Points"
                                            color="secondary"
                                            class="ma-0"
                                            hide-details
                                        >
                                        </v-checkbox>
                                    </template>

                                    <template v-slot:item.save>
                                        <v-btn
                                            color="primary"
                                            class="text-capitalize"
                                            rounded
                                            >change</v-btn
                                        >
                                    </template>
                                </v-data-table>
                            </v-tab-item>

                            <v-tab-item>
                                <v-btn
                                    color="primary"
                                    class="text-capitalize"
                                    rounded
                                    @click="userDialog = true"
                                    >register user</v-btn
                                >
                                <v-sheet
                                    color="grey lighten-3"
                                    class="pa-5 pt-0 mt-5"
                                >
                                    <v-toolbar flat color="grey lighten-3">
                                        <v-toolbar-title
                                            >Users List:</v-toolbar-title
                                        >

                                        <v-spacer></v-spacer>

                                        <v-col cols="4">
                                            <v-sheet
                                                color="white"
                                                class="rounded-xl"
                                            >
                                                <v-text-field
                                                    label="Search"
                                                    rounded
                                                    outlined
                                                    dense
                                                    clearable
                                                    hide-details
                                                    :prepend-inner-icon="
                                                        icons.mdiMagnify
                                                    "
                                                ></v-text-field>
                                            </v-sheet>
                                        </v-col>
                                    </v-toolbar>

                                    <v-data-table
                                        :headers="userHeaders"
                                        :items="users"
                                        :footer-props="{
                                            itemsPerPageOptions: [
                                                10,
                                                25,
                                                50,
                                                100
                                            ]
                                        }"
                                    >
                                        <template
                                            v-slot:item.actions="{ item }"
                                        >
                                            <v-tooltip top>
                                                <template
                                                    v-slot:activator="{ on }"
                                                >
                                                    <v-btn
                                                        color="yellow darken-3"
                                                        icon
                                                        v-on="on"
                                                        @click="myFunc(item)"
                                                    >
                                                        <v-icon
                                                            v-text="
                                                                icons.mdiPencilOutline
                                                            "
                                                        ></v-icon>
                                                    </v-btn>
                                                </template>

                                                <span>Update</span>
                                            </v-tooltip>

                                            <v-tooltip top>
                                                <template
                                                    v-slot:activator="{ on }"
                                                >
                                                    <v-btn
                                                        color="red"
                                                        icon
                                                        v-on="on"
                                                        @click="myFunc(item)"
                                                    >
                                                        <v-icon
                                                            v-text="
                                                                icons.mdiClose
                                                            "
                                                        ></v-icon>
                                                    </v-btn>
                                                </template>

                                                <span>Delete</span>
                                            </v-tooltip>
                                        </template>
                                    </v-data-table>

                                    <v-dialog
                                        v-model="userDialog"
                                        max-width="50%"
                                        scrollable
                                    >
                                        <v-card>
                                            <v-card-title class="grey lighten-3"
                                                >Register User</v-card-title
                                            >

                                            <v-divider></v-divider>

                                            <v-card-text>
                                                <v-container>
                                                    <v-row>
                                                        <v-col cols="6">
                                                            <v-text-field
                                                                label="Username"
                                                                outlined
                                                                dense
                                                                clearable
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col cols="6">
                                                            <v-text-field
                                                                label="Password"
                                                                outlined
                                                                dense
                                                                clearable
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col
                                                            cols="12"
                                                            class="subtitle-1 text--primary py-0"
                                                            >Rights</v-col
                                                        >

                                                        <v-col cols="6">
                                                            <v-checkbox
                                                                v-for="right in rights"
                                                                :key="right"
                                                                color="secondary"
                                                                class="mt-0"
                                                                hide-details
                                                            >
                                                                <template
                                                                    v-slot:label
                                                                >
                                                                    <h4
                                                                        class="subtitle-2"
                                                                        v-text="
                                                                            right
                                                                        "
                                                                    ></h4>
                                                                </template>
                                                            </v-checkbox>
                                                        </v-col>
                                                        <v-col cols="6">
                                                            <v-checkbox
                                                                v-for="right in rights2"
                                                                :key="right"
                                                                color="secondary"
                                                                class="mt-0"
                                                                hide-details
                                                            >
                                                                <template
                                                                    v-slot:label
                                                                >
                                                                    <h4
                                                                        class="subtitle-2"
                                                                        v-text="
                                                                            right
                                                                        "
                                                                    ></h4>
                                                                </template>
                                                            </v-checkbox>
                                                        </v-col>
                                                    </v-row>
                                                </v-container>
                                            </v-card-text>

                                            <v-divider></v-divider>

                                            <v-card-actions class="px-8">
                                                <v-spacer></v-spacer>
                                                <v-btn
                                                    text
                                                    @click="userDialog = false"
                                                    >cancel</v-btn
                                                >
                                                <v-btn
                                                    color="primary"
                                                    width="80"
                                                    >add</v-btn
                                                >
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>
                                </v-sheet>
                            </v-tab-item>

                            <v-tab-item>
                                <v-card tile flat>
                                    <v-card-text>
                                        Set up one or more mobile payments for
                                        your business.
                                        <v-divider class="mt-5"></v-divider>
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>

                            <v-tab-item>
                                <v-card tile flat>
                                    <v-card-text>
                                        Choose how each card will be cleared in
                                        your store.

                                        <v-row>
                                            <v-col cols="6">
                                                <h4
                                                    class="secondary--text subtitle-2"
                                                >
                                                    Card From:
                                                </h4>
                                            </v-col>
                                            <v-col cols="6">
                                                <h4
                                                    class="secondary--text subtitle-2"
                                                >
                                                    Clearance From:
                                                </h4>
                                            </v-col>
                                        </v-row>

                                        <v-divider></v-divider>
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>

                            <v-tab-item>
                                <v-window v-model="step">
                                    <v-window-item :value="1">
                                        <v-img
                                            src="@/assets/card.png"
                                            width="400"
                                            class="rounded-xl"
                                        ></v-img>

                                        <v-card outlined class="mt-5">
                                            <v-card-text>
                                                <div
                                                    class="secondary--text subtitle-2"
                                                >
                                                    Upload Image
                                                </div>
                                                Upload an image for your card's
                                                background
                                                <v-sheet
                                                    width="70%"
                                                    class="py-3"
                                                >
                                                    <v-file-input
                                                        outlined
                                                        dense
                                                        hide-details
                                                    ></v-file-input>
                                                </v-sheet>

                                                <v-divider
                                                    class="my-3"
                                                ></v-divider>

                                                <div
                                                    class="secondary--text subtitle-2"
                                                >
                                                    Choose Color
                                                </div>
                                                <div>
                                                    Choose the color of the
                                                    card's background
                                                </div>

                                                <div class="mt-3">
                                                    <v-menu
                                                        v-model="
                                                            colorPickerMenu
                                                        "
                                                        offset-y
                                                        transition="scale-x-transition"
                                                        :close-on-content-click="
                                                            false
                                                        "
                                                    >
                                                        <template
                                                            v-slot:activator="{
                                                                on
                                                            }"
                                                        >
                                                            <v-btn
                                                                color="grey lighten-3"
                                                                class="px-0"
                                                                depressed
                                                                v-on="on"
                                                            >
                                                                <v-sheet
                                                                    :color="
                                                                        cardBackgroundColor
                                                                    "
                                                                    width="25"
                                                                    height="25"
                                                                    class="bb"
                                                                ></v-sheet>

                                                                <v-icon
                                                                    class="ml-1"
                                                                    v-text="
                                                                        icons.mdiMenuDown
                                                                    "
                                                                ></v-icon>
                                                            </v-btn>
                                                        </template>

                                                        <v-card>
                                                            <v-card-text>
                                                                <v-color-picker
                                                                    v-model="
                                                                        pickedColor
                                                                    "
                                                                    :show-swatches="
                                                                        showSwatches
                                                                    "
                                                                    hide-inputs
                                                                ></v-color-picker>
                                                            </v-card-text>

                                                            <v-card-actions>
                                                                <v-btn
                                                                    small
                                                                    text
                                                                    color="blue"
                                                                    @click="
                                                                        showSwatches = !showSwatches
                                                                    "
                                                                >
                                                                    show
                                                                    swatches
                                                                    <v-icon
                                                                        small
                                                                        v-text="
                                                                            showSwatches
                                                                                ? icons.mdiChevronDown
                                                                                : icons.mdiChevronUp
                                                                        "
                                                                    ></v-icon>
                                                                </v-btn>

                                                                <v-spacer></v-spacer>

                                                                <v-btn
                                                                    text
                                                                    small
                                                                    @click="
                                                                        colorPickerMenu = false
                                                                    "
                                                                    >cancel</v-btn
                                                                >
                                                                <v-btn
                                                                    color="primary"
                                                                    small
                                                                    @click="
                                                                        () => {
                                                                            cardBackgroundColor = pickedColor;
                                                                            colorPickerMenu = false;
                                                                        }
                                                                    "
                                                                    >choose</v-btn
                                                                >
                                                            </v-card-actions>
                                                        </v-card>
                                                    </v-menu>

                                                    <v-btn
                                                        color="primary"
                                                        class="text-capitalize ml-10"
                                                        rounded
                                                        >default image</v-btn
                                                    >
                                                </div>

                                                <v-divider
                                                    class="my-3"
                                                ></v-divider>

                                                <div
                                                    class="secondary--text subtitle-2"
                                                >
                                                    Change logo size
                                                </div>
                                                Change logo size in card

                                                <v-slider
                                                    thumb-label
                                                    hide-details
                                                ></v-slider>

                                                <v-divider
                                                    class="my-3"
                                                ></v-divider>

                                                <div
                                                    class="secondary--text subtitle-2"
                                                >
                                                    Card Amount
                                                </div>
                                                For the first card order (based
                                                on the annual subscription
                                                package) the cards are provided
                                                Free and you can not change the
                                                quantity. You can do the
                                                ordering process again and then
                                                you can order as many additional
                                                cards as you like.

                                                <v-sheet width="70%">
                                                    <v-text-field
                                                        class="mt-5"
                                                        type="number"
                                                        outlined
                                                        dense
                                                        clearable
                                                        :prepend-inner-icon="
                                                            icons.mdiPound
                                                        "
                                                    ></v-text-field>
                                                </v-sheet>
                                            </v-card-text>

                                            <v-divider></v-divider>

                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn
                                                    color="primary"
                                                    rounded
                                                    width="100"
                                                    @click="step++"
                                                >
                                                    next
                                                    <v-icon
                                                        v-text="
                                                            icons.mdiArrowRight
                                                        "
                                                    ></v-icon>
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-window-item>

                                    <v-window-item :value="2">
                                        <v-btn large icon @click="step--">
                                            <v-icon
                                                large
                                                v-text="icons.mdiArrowLeft"
                                            ></v-icon>
                                        </v-btn>
                                        <v-img
                                            src="@/assets/orderImageCheckout.png"
                                            width="128"
                                            class="mx-auto mt-10"
                                        ></v-img>

                                        <v-sheet
                                            width="400"
                                            class="text--secondary mx-auto text-center"
                                        >
                                            <v-card-title
                                                class="justify-center secondary--text"
                                                >Your order has been
                                                registered!</v-card-title
                                            >

                                            To complete the order you have to
                                            pay off your cards which they will
                                            be delivered in your business's
                                            address. If there is some
                                            modification you wish to make please
                                            contact us at info@roadcube.com
                                            after the payment.

                                            <v-btn
                                                color="primary"
                                                class="text-capitalize mt-5"
                                                rounded
                                                large
                                            >
                                                <v-icon
                                                    large
                                                    v-text="icons.mdiCart"
                                                ></v-icon>
                                                <span class="mx-3"
                                                    >complete order</span
                                                >
                                                <span class="text-h5"
                                                    >18.6 €</span
                                                >
                                            </v-btn>
                                        </v-sheet>
                                    </v-window-item>
                                </v-window>
                            </v-tab-item>

                            <v-tab-item>
                                <Subscription />
                            </v-tab-item>
                        </v-tabs-items>
                    </v-card>
                </v-col>
            </v-row>
        </v-sheet>
    </v-container>
</template>

<script>
import Subscription from "./settings/Subscription";
import {
    mdiArrowRight,
    mdiClockOutline,
    mdiCurrencyEur,
    mdiPlus,
    mdiCloseThick,
    mdiInformation,
    mdiPercent,
    mdiPencilOutline,
    mdiClose,
    mdiMenuDown,
    mdiChevronUp,
    mdiChevronDown,
    mdiPound,
    mdiCart,
    mdiArrowLeft
} from "@mdi/js";

import storeLogo from "@/assets/store-logo.png";
import bubbleLogo from "@/assets/the_on_bubble.png";
import bubbleNew from "@/assets/new_bubble_image.png";

export default {
    name: "Settings",
    components: { Subscription },
    data: () => ({
        icons: {
            mdiArrowRight,
            mdiClockOutline,
            mdiCurrencyEur,
            mdiPlus,
            mdiCloseThick,
            mdiInformation,
            mdiPercent,
            mdiPencilOutline,
            mdiClose,
            mdiMenuDown,
            mdiChevronUp,
            mdiChevronDown,
            mdiPound,
            mdiCart,
            mdiArrowLeft
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
        categories: [],
        sendPoints: true,
        pointDelivery: true,
        scanReceipt: true,
        rewardWithPresence: true,
        mobilePayments: true,
        itemsPerPageOptions: [10, 20, 30, -1],
        productPointsHeaders: [
            { text: "Product Name", value: "name" },
            { text: "Points", value: "points" },
            { text: "Type", value: "type" },
            { text: "Point Subsidy", value: "pointSubsidy" },
            { text: "Save", value: "save" }
        ],
        productPoints: [
            {
                name: "Maroudas Optika's unnamed API product 58526",
                points: 0,
                type: "Per Transaction",
                pointSubsidy: true
            },
            {
                name: "Maroudas Optika's unnamed API product 58534",
                points: 4,
                type: "Per Transaction",
                pointSubsidy: true
            },
            {
                name: "stest_stest",
                points: 0,
                type: "Liters",
                pointSubsidy: false
            }
        ],
        userDialog: false,
        userHeaders: [
            { text: "Username", value: "username" },
            { text: "User Password", value: "password" },
            { text: "Rights", value: "rights" },
            { text: "Actions", value: "actions" }
        ],
        users: [
            { username: "Lefko", password: "Dia12345", rights: "Press edit..." }
        ],
        rights: ["Dashboard", "Sales", "Points", "Redeem Vouchers", "Settings"],
        rights2: [
            "Products & Services",
            "Point Management",
            "Creating Coupons",
            "Contest & Survey"
        ],
        cardBackgroundColor: "#ffffff",
        pickedColor: "#ffffff",
        colorPickerMenu: false,
        showSwatches: false,
        step: 1
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
