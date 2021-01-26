<template>
    <b-card
        title="Update Text Field"
        @cancel="$emit('cancel')"
        @submit="$emit('submit', element)"
    >
        <v-row no-gutters align="center" class="px-3">
            <v-toolbar-title class="subtitle-1"
                >Text Field
                {{ this.element.required ? "*" : "" }}</v-toolbar-title
            >

            <v-tooltip v-if="element.helpText" color="secondary" top>
                <template v-slot:activator="{ on }">
                    <v-icon
                        class="ml-1"
                        v-text="icons.mdiHelpCircleOutline"
                        v-on="on"
                    ></v-icon>
                </template>

                <span class="font-weight-bold" v-text="element.helpText"></span>
            </v-tooltip>
        </v-row>

        <v-text-field
            v-model="element.value"
            v-mask="mask"
            :label="label"
            class="mt-1 mx-3"
            color="secondary"
            outlined
            dense
            clearable
            hide-details
        ></v-text-field>

        <hr class="mt-4 mx-3" />

        <v-row no-gutters class="px-5" align="center">
            <v-col cols="3" class="text-right">
                <h4 class="subtitle-2 secondary--text mt-3 mr-3">
                    Required
                </h4>
            </v-col>
            <v-col cols="9">
                <v-checkbox
                    v-model="element.required"
                    color="secondary"
                    class="mt-3 pt-0"
                    hide-details
                ></v-checkbox>
            </v-col>

            <v-col cols="3" class="text-right">
                <h4 class="subtitle-2 secondary--text mt-3 mr-3">
                    Label
                </h4>
            </v-col>
            <v-col cols="9">
                <b-text-field
                    v-model="element.label"
                    class="ml-1"
                ></b-text-field>
            </v-col>

            <v-col cols="3" class="text-right">
                <h4 class="subtitle-2 secondary--text mt-3 mr-3">
                    Help Text
                </h4>
            </v-col>
            <v-col cols="9">
                <b-text-field
                    v-model="element.helpText"
                    class="ml-1"
                ></b-text-field>
            </v-col>

            <v-col cols="3" class="text-right">
                <h4 class="subtitle-2 secondary--text mt-3 mr-3">
                    Access
                </h4>
            </v-col>
            <v-col cols="9">
                <v-checkbox
                    v-model="showRoles"
                    color="secondary"
                    class="mt-3 pt-0"
                    hide-details
                >
                    <template v-slot:label>
                        <h4 class="subtitle-2 secondary--text">
                            Limit access to one or more of the following roles:
                        </h4>
                    </template>
                </v-checkbox>
            </v-col>

            <v-col v-if="showRoles" cols="3"></v-col>
            <v-col v-if="showRoles" cols="9" class="mt-3">
                <v-checkbox
                    v-for="role in roles"
                    :key="role"
                    v-model="element.access"
                    :value="role"
                    color="secondary"
                    class="mt-0"
                    hide-details
                >
                    <template v-slot:label>
                        <h4
                            class="subtitle-2 secondary--text"
                            v-text="role"
                        ></h4>
                    </template>
                </v-checkbox>
            </v-col>

            <v-col cols="3" class="text-right">
                <h4 class="subtitle-2 secondary--text mt-3 mr-3">
                    Value
                </h4>
            </v-col>
            <v-col cols="9">
                <b-text-field
                    v-model="element.value"
                    v-mask="mask"
                    :type="element.type"
                    class="ml-1"
                ></b-text-field>
            </v-col>

            <v-col cols="3" class="text-right">
                <h4 class="subtitle-2 secondary--text mt-3 mr-3">
                    Max Length
                </h4>
            </v-col>
            <v-col cols="3">
                <b-text-field
                    v-model="element.maxLength"
                    type="number"
                    class="ml-1"
                ></b-text-field>
            </v-col>
        </v-row>
    </b-card>
</template>

<script>
import { mdiHelpCircleOutline, mdiCalendarMonth } from "@mdi/js";

export default {
    name: "EditorMenu",

    props: { editElement: Object },

    data() {
        return {
            icons: { mdiHelpCircleOutline, mdiCalendarMonth },
            element: {},
            showRoles: false,
            roles: ["Administrator"]
        };
    },

    computed: {
        label() {
            return this.element.required
                ? this.element.label
                    ? this.element.label + "*"
                    : this.element.label
                : this.element.label;
        },

        mask() {
            let str = "";

            for (let i = 0; i < this.element.maxLength; i++) {
                str += "X";
            }

            return str;
        },

        disabled() {
            return !(this.date && this.time);
        }
    },

    watch: {
        editElement: {
            immediate: true,
            handler(val) {
                this.element = { ...val };
            }
        }
    }
};
</script>
