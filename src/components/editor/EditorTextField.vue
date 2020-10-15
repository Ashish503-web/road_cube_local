<template>
    <div class="mt-3">
        <v-row no-gutters align="center">
            <v-toolbar-title class="subtitle-1"
                >Text Field {{ this.required ? "*" : "" }}</v-toolbar-title
            >

            <v-tooltip v-if="helpText" color="secondary" top>
                <template v-slot:activator="{ on }">
                    <v-icon
                        class="ml-1"
                        v-text="icons.mdiHelpCircleOutline"
                        v-on="on"
                    ></v-icon>
                </template>

                <span class="font-weight-bold">{{ this.helpText }}</span>
            </v-tooltip>

            <v-spacer></v-spacer>

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
            max-width="584"
            :close-on-content-click="false"
            offset-y
        >
            <template v-slot:activator="{ attrs }">
                <v-text-field
                    :value="value"
                    :label="required ? (label ? label + '*' : '') : label"
                    :type="type"
                    class="mt-1"
                    color="secondary"
                    outlined
                    dense
                    clearable
                    hide-details
                    :aria-expanded="attrs['aria-expanded']"
                    :append-icon="
                        type === 'Date/Time Local' ? icons.mdiCalendarMonth : ''
                    "
                    @click:append="menu = true"
                    @input="$emit('input', $event)"
                ></v-text-field>
            </template>

            <v-card>
                <v-date-picker
                    v-model="date"
                    color="secondary"
                    scrollable
                ></v-date-picker>
                <v-time-picker
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
    mdiPencilOutline,
    mdiClose,
    mdiHelpCircleOutline,
    mdiCalendarMonth
} from "@mdi/js";

export default {
    name: "EditorTextField",

    props: {
        required: Boolean,
        helpText: String,
        label: String,
        type: String,
        value: String
    },

    data: () => ({
        icons: {
            mdiPencilOutline,
            mdiClose,
            mdiHelpCircleOutline,
            mdiCalendarMonth
        },
        menu: false,
        date: "",
        time: ""
    })
};
</script>
