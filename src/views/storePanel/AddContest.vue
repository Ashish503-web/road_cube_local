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

                <v-col cols="12" md="11">
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
                                        :is="element.name"
                                        v-model="element.value"
                                        v-mask="createMask(element.maxLength)"
                                        v-bind="element"
                                        @update="openMenu(element)"
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
                                        <v-icon
                                            v-text="icons[element.icon]"
                                        ></v-icon>
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
                    v-bind.sync="selectedElement"
                    @cancel="dialog = false"
                />
            </v-dialog>
        </v-sheet>
    </v-container>
</template>

<script>
import {
    mdiArrowLeft,
    mdiCheckBoxOutline,
    mdiCalendarMonth,
    mdiUploadOutline,
    mdiAlphaHBoxOutline,
    mdiPound,
    mdiRadioboxMarked,
    mdiFormSelect,
    mdiCardTextOutline,
    mdiStarOutline,
    mdiFaceOutline
} from "@mdi/js";

import EditorMenu from "@/components/editor/EditorMenu.vue";
import EditorTextField from "@/components/editor/EditorTextField.vue";

class EditorElement {
    constructor(el = {}) {
        this.name = el.name || "editor-text-field";
        this.required = el.required || true;
        this.label = el.label || "";
        this.helpText = el.helpText || "";
        this.access = el.access || [];
        this.value = el.value || "";
        this.type = el.type || "Text";
        this.maxLength = el.maxLength || null;
    }
}

export default {
    name: "AddContest",
    components: { EditorMenu, EditorTextField },
    data: () => ({
        icons: {
            mdiArrowLeft,
            mdiCheckBoxOutline,
            mdiCalendarMonth,
            mdiUploadOutline,
            mdiAlphaHBoxOutline,
            mdiPound,
            mdiRadioboxMarked,
            mdiFormSelect,
            mdiCardTextOutline,
            mdiStarOutline,
            mdiFaceOutline
        },
        menu: false,
        winMenu: false,
        startEndDate: "",
        declarationDate: "",
        elementTypes: [
            {
                icon: "mdiCheckBoxOutline",
                name: "Checkbox Group",
                value: "b-editor-checkbox"
            },
            { icon: "mdiCalendarMonth", name: "Date Field" },
            { icon: "mdiUploadOutline", name: "File Upload" },
            { icon: "mdiAlphaHBoxOutline", name: "Header" },
            { icon: "mdiPound", name: "Number" },
            { icon: "mdiRadioboxMarked", name: "Radio Group" },
            { icon: "mdiFormSelect", name: "Select" },
            {
                icon: "mdiCardTextOutline",
                name: "Text Field",
                value: {
                    name: "editor-text-field"
                }
            },
            { icon: "mdiStarOutline", name: "Star Rating" },
            { icon: "mdiFaceOutline", name: "User Details" }
        ],
        elements: [],
        dialog: false,
        selectedElement: {}
    }),

    methods: {
        addElement(element) {
            this.elements.push(new EditorElement(element));
        },

        openMenu(element) {
            this.selectedElement = element;
            this.dialog = true;
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
