<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-card-title class="pl-0 blue--text text--darken-3">
                <v-tooltip color="secondary" top>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            icon
                            class="mr-1"
                            v-on="on"
                            to="/storePanel/contests"
                        >
                            <v-icon v-text="icons.mdiArrowLeft"></v-icon>
                        </v-btn>
                    </template>

                    <span class="font-weight-bold">Back</span>
                </v-tooltip>

                Add Contest
            </v-card-title>

            <hr />

            <v-row justify="space-around" no-gutters>
                <!-- <v-col cols="12" md="5">
                    <h3 class="subtitle-1 font-weight-bold mt-3">
                        Contest details
                    </h3>

                    <b-text-field type="text" label="Title"></b-text-field>

                    <b-textarea label="Description"></b-textarea>

                    <b-select label="Type"></b-select>

                    <div>
                        <v-file-input
                            color="secondary"
                            label="Image"
                            class="mt-3"
                            outlined
                            dense
                            hide-details="auto"
                        ></v-file-input>
                    </div>
                </v-col>

                <v-col cols="12" md="5">
                    <h3 class="subtitle-1 font-weight-bold mt-3">
                        Winners Details
                    </h3>

                    <v-menu v-model="menu" max-width="290" offset-y>
                        <template v-slot:activator="{ attrs }">
                            <b-text-field
                                v-model="startEndDate"
                                label="Start Date - End Date"
                                append-icon="mdiCalendarMonth"
                                :aria-expanded="attrs['aria-expanded']"
                                @click="menu = true"
                            ></b-text-field>
                        </template>

                        <v-date-picker
                            v-model="startEndDate"
                            color="secondary"
                        ></v-date-picker>
                    </v-menu>

                    <v-menu v-model="winMenu" max-width="290" offset-y>
                        <template v-slot:activator="{ attrs }">
                            <b-text-field
                                v-model="declarationDate"
                                label="Winning Declaration Date"
                                append-icon="mdiCalendarMonth"
                                :aria-expanded="attrs['aria-expanded']"
                                @click="winMenu = true"
                            ></b-text-field>
                        </template>

                        <v-date-picker
                            v-model="declarationDate"
                            color="secondary"
                        ></v-date-picker>
                    </v-menu>

                    <b-text-field
                        type="text"
                        label="No of Winner"
                    ></b-text-field>

                    <b-textarea label="1st Winning Text"></b-textarea>
                </v-col>

                <v-col cols="12" md="11">
                    <h3 class="subtitle-1 font-weight-bold mt-12">
                        Please select background color for your Contest
                    </h3>

                    <v-sheet max-width="340" outlined class="mt-3 pa-5">
                        <v-color-picker></v-color-picker>
                    </v-sheet>
                </v-col> -->

                <v-col cols="12" md="11" class="mt-7">
                    <v-card-title class="pl-0">
                        Choose what the users will see
                    </v-card-title>

                    <v-row no-gutters>
                        <v-col cols="9" class="pt-2">
                            <v-row no-gutters>
                                <v-col
                                    v-for="(element, i) in elements"
                                    :key="i"
                                    cols="10"
                                >
                                    <component
                                        v-if="hasMask(element)"
                                        :is="element.name"
                                        v-model="element.value"
                                        v-mask="createMask(element.maxLength)"
                                        v-bind="element"
                                        @move-up="moveElementUp(element, i)"
                                        @move-down="moveElementDown(element, i)"
                                        @update="openEditor(element, i)"
                                        @remove="elements.splice(i, 1)"
                                    ></component>

                                    <component
                                        v-else
                                        :is="element.name"
                                        v-model="element.value"
                                        v-bind="element"
                                        @move-up="moveElementUp(element, i)"
                                        @move-down="moveElementDown(element, i)"
                                        @update="openEditor(element, i)"
                                        @remove="elements.splice(i, 1)"
                                    ></component>
                                </v-col>
                            </v-row>
                        </v-col>

                        <v-col cols="3">
                            <v-list dense subheader>
                                <v-list-item
                                    v-for="element in elementTypes"
                                    :key="element.name"
                                    @click="addElement(element.value)"
                                >
                                    <v-list-item-icon class="mr-3">
                                        <v-icon v-text="element.icon"></v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-title
                                        v-text="element.name"
                                    ></v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <v-dialog v-model="dialog" max-width="800">
                <EditorMenu
                    :edit-element="selectedElement"
                    @cancel="dialog = false"
                    @submit="updateElement"
                />
            </v-dialog>
        </v-sheet>
    </v-container>
</template>

<script>
import {
    mdiArrowLeft,
    mdiCardTextOutline,
    mdiPound,
    mdiLockOutline,
    mdiEmailOutline,
    mdiPaletteOutline,
    mdiCalendarMonth,
    mdiClockOutline,
    mdiCalendarClock,
    mdiCheckBoxOutline,
    mdiUploadOutline,
    mdiAlphaHBoxOutline,
    mdiRadioboxMarked,
    mdiFormSelect,
    mdiStarOutline,
    mdiFaceOutline,
    mdiLock
} from "@mdi/js";

import EditorMenu from "@/components/editor/EditorMenu.vue";
import EditorInputElement from "@/components/editor/EditorInputElement.vue";
import EditorColorPicker from "@/components/editor/EditorColorPicker.vue";

class EditorElement {
    constructor(el = {}) {
        this.name = el.name || "";
        this.type = el.type || "";
        this.required = el.required || false;
        this.label = el.label || "";
        this.helpText = el.helpText || "";
        this.access = el.access || [];
        this.value = el.value || "";
        this.maxLength = el.maxLength || null;
    }
}

export default {
    name: "AddContest",
    components: { EditorMenu, EditorInputElement, EditorColorPicker },
    data: () => ({
        icons: {
            mdiArrowLeft,
            mdiCalendarMonth
        },
        menu: false,
        winMenu: false,
        startEndDate: "",
        declarationDate: "",
        elementTypes: [
            {
                icon: mdiCardTextOutline,
                name: "Text Field",
                value: { name: "editor-input-element", type: "Text Field" }
            },
            {
                icon: mdiPound,
                name: "Number Field",
                value: { name: "editor-input-element", type: "Number Field" }
            },
            {
                icon: mdiLockOutline,
                name: "Password Field",
                value: { name: "editor-input-element", type: "Password Field" }
            },
            {
                icon: mdiEmailOutline,
                name: "Email Field",
                value: { name: "editor-input-element", type: "Email Field" }
            },
            {
                icon: mdiCalendarMonth,
                name: "Date Field",
                value: { name: "editor-input-element", type: "Date Field" }
            },
            {
                icon: mdiClockOutline,
                name: "Time Field",
                value: { name: "editor-input-element", type: "Time Field" }
            },
            {
                icon: mdiCalendarClock,
                name: "Date/Time Field",
                value: { name: "editor-input-element", type: "Date/Time Field" }
            },
            {
                icon: mdiPaletteOutline,
                name: "Color Picker",
                value: { name: "editor-color-picker", type: "Color Picker" }
            },
            {
                icon: mdiCheckBoxOutline,
                name: "Checkbox Group",
                value: { name: "editor-checkbox" }
            },
            { icon: mdiUploadOutline, name: "File Upload" },
            { icon: mdiAlphaHBoxOutline, name: "Header" },
            { icon: mdiRadioboxMarked, name: "Radio Group" },
            { icon: mdiFormSelect, name: "Select" },
            { icon: mdiStarOutline, name: "Star Rating" },
            { icon: mdiFaceOutline, name: "User Details" }
        ],
        elements: [],
        dialog: false,
        selectedElement: {},
        index: null
    }),

    methods: {
        addElement(element) {
            this.elements.push(new EditorElement(element));
        },

        moveElementUp(element, i) {
            if (i === 0) {
                this.elements.splice(i, 1);
                this.elements.push(element);
            } else {
                this.elements.splice(i, 1);
                this.elements.splice(i - 1, 0, element);
            }
        },

        moveElementDown(element, i) {
            if (i === this.elements.length - 1) {
                this.elements.splice(i, 1);
                this.elements.unshift(element);
            } else {
                this.elements.splice(i, 1);
                this.elements.splice(i + 1, 0, element);
            }
        },

        openEditor(element, i) {
            this.selectedElement = element;
            this.index = i;
            this.dialog = true;
        },

        updateElement(element) {
            this.elements.splice(this.index, 1, element);
            this.dialog = false;
        },

        hasMask(element) {
            if (
                element.type === "Text Field" ||
                element.type === "Number Field" ||
                element.type === "Password Field" ||
                element.type === "Email Field"
            ) {
                return true;
            }
            return false;
        },

        createMask(length) {
            let str = "";

            for (let i = 0; i < length; i++) {
                str += "X";
            }

            return str;
        }
    }
};
</script>
