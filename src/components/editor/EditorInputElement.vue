<template>
    <div class="mt-3">
        <v-row no-gutters align="center">
            <v-toolbar-title class="subtitle-1"
                >{{ this.type }} {{ this.required ? "*" : "" }}</v-toolbar-title
            >

            <v-tooltip v-if="helpText" color="secondary" top>
                <template v-slot:activator="{ on }">
                    <v-icon
                        style="cursor: pointer"
                        class="ml-1"
                        v-text="icons.mdiHelpCircleOutline"
                        v-on="on"
                    ></v-icon>
                </template>

                <span class="font-weight-bold" v-text="helpText"></span>
            </v-tooltip>

            <v-spacer></v-spacer>

            <v-tooltip color="secondary" top>
                <template v-slot:activator="{ on }">
                    <v-btn
                        color="secondary"
                        class="mr-1"
                        icon
                        v-on="on"
                        @click="$emit('move-up')"
                    >
                        <v-icon v-text="icons.mdiArrowUpBold"></v-icon>
                    </v-btn>
                </template>

                <span class="font-weight-bold">Move Up</span>
            </v-tooltip>

            <v-tooltip color="secondary" top>
                <template v-slot:activator="{ on }">
                    <v-btn
                        color="secondary"
                        class="mr-1"
                        icon
                        v-on="on"
                        @click="$emit('move-down')"
                    >
                        <v-icon v-text="icons.mdiArrowDownBold"></v-icon>
                    </v-btn>
                </template>

                <span class="font-weight-bold">Move Down</span>
            </v-tooltip>

            <v-tooltip color="secondary" top>
                <template v-slot:activator="{ on }">
                    <v-btn
                        color="yellow darken-3"
                        class="mr-1"
                        icon
                        v-on="on"
                        @click="$emit('update')"
                    >
                        <v-icon v-text="icons.mdiPencilOutline"></v-icon>
                    </v-btn>
                </template>

                <span class="font-weight-bold">Update Element</span>
            </v-tooltip>

            <v-tooltip color="secondary" top>
                <template v-slot:activator="{ on }">
                    <v-btn color="red" icon v-on="on" @click="$emit('remove')">
                        <v-icon v-text="icons.mdiClose"></v-icon>
                    </v-btn>
                </template>

                <span class="font-weight-bold">Remove Element</span>
            </v-tooltip>
        </v-row>

        <v-menu
            v-model="menu"
            :max-width="type === 'Date/Time Field' ? '584' : '290'"
            :close-on-content-click="false"
            offset-y
        >
            <template v-slot:activator="{ attrs }">
                <v-text-field
                    :value="value"
                    :label="required ? (label ? label + '*' : label) : label"
                    :type="inputType"
                    class="mt-1"
                    color="secondary"
                    outlined
                    dense
                    clearable
                    hide-details
                    :aria-expanded="attrs['aria-expanded']"
                    :readonly="readonly"
                    :append-icon="readonly ? appendIcon : ''"
                    @click:append="menu = true"
                    @input="$emit('input', $event)"
                ></v-text-field>
            </template>

            <v-card>
                <v-date-picker
                    v-if="type === 'Date Field' || type === 'Date/Time Field'"
                    v-model="date"
                    color="secondary"
                    scrollable
                ></v-date-picker>
                <v-time-picker
                    v-if="type === 'Time Field' || type === 'Date/Time Field'"
                    v-model="time"
                    color="secondary"
                    ampm-in-title
                    scrollable
                ></v-time-picker>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="menu = false">cancel</v-btn>
                    <v-btn
                        color="secondary"
                        class="px-5"
                        depressed
                        :disabled="disabled"
                        @click="
                            () => {
                                $emit('input', date + ', ' + time);
                                menu = false;
                            }
                        "
                        >save</v-btn
                    >
                </v-card-actions>
            </v-card>
        </v-menu>
    </div>
</template>

<script>
import {
    mdiArrowUpBold,
    mdiArrowDownBold,
    mdiHelpCircleOutline,
    mdiPencilOutline,
    mdiClose,
    mdiCalendarMonth,
    mdiClockOutline,
    mdiCalendarClock
} from "@mdi/js";

export default {
    name: "EditorInputElement",

    props: {
        name: String,
        type: String,
        required: Boolean,
        label: String,
        helpText: String,
        value: String
    },

    data: () => ({
        icons: {
            mdiArrowUpBold,
            mdiArrowDownBold,
            mdiHelpCircleOutline,
            mdiPencilOutline,
            mdiClose
        },
        menu: false,
        date: "",
        time: ""
    }),

    computed: {
        inputType() {
            let type = "";

            switch (this.type) {
                case "Number Field":
                    type = "number";
                    break;
                case "Password Field":
                    type = "password";
                    break;
                case "Email Field":
                    type = "email";
                    break;
                default:
                    type = "text";
            }

            return type;
        },

        readonly() {
            return (
                this.type === "Date Field" ||
                this.type === "Time Field" ||
                this.type === "Date/Time Field"
            );
        },

        appendIcon() {
            let icon;

            switch (this.type) {
                case "Date Field":
                    icon = mdiCalendarMonth;
                    break;
                case "Time Field":
                    icon = mdiClockOutline;
                    break;
                case "Date/Time Field":
                    icon = mdiCalendarClock;
                    break;
            }

            return icon;
        },

        disabled() {
            return !(this.date && this.time);
        }
    }
};
</script>
