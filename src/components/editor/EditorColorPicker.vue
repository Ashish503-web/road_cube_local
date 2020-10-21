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
            max-width="290"
            :close-on-content-click="false"
            offset-y
        >
            <template v-slot:activator="{ attrs }">
                <v-row no-gutters :aria-expanded="attrs['aria-expanded']">
                    <v-col class="b-outlined">
                        <v-sheet :color="value"></v-sheet>
                    </v-col>
                    <v-btn icon @click="menu = !menu">
                        <v-icon v-text="icons.mdiPaletteOutline"></v-icon>
                    </v-btn>
                </v-row>
            </template>

            <v-card>
                <v-color-picker v-model="picker"></v-color-picker>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="menu = false">cancel</v-btn>
                    <v-btn
                        color="secondary"
                        class="px-5"
                        depressed
                        @click="
                            $event => {
                                $emit('input', $event.target.value);
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
    mdiHelpCircleOutline,
    mdiArrowUpBold,
    mdiArrowDownBold,
    mdiPencilOutline,
    mdiClose,
    mdiPaletteOutline
} from "@mdi/js";

export default {
    name: "EditorColorPicker",

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
            mdiHelpCircleOutline,
            mdiArrowUpBold,
            mdiArrowDownBold,
            mdiPencilOutline,
            mdiClose,
            mdiPaletteOutline
        },
        menu: false,
        picker: ""
    }),

    watch: {
        picker(val) {
            if (val) this.$emit("input", val);
            console.log(val);
        }
    }
};
</script>
