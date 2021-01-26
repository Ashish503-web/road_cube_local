<template>
    <div>
        <v-row no-gutters align="center">
            <v-toolbar-title class="subtitle-1">Checkbox Group</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tooltip color="secondary" top>
                <template v-slot:activator="{ on }">
                    <v-btn color="yellow darken-3" class="mr-1" icon v-on="on">
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

        <v-checkbox color="secondary" class="mt-1 pt-0">
            <template v-slot:label>
                <h4 class="subtitle-2">Checkbox Group</h4>
            </template>
        </v-checkbox>
    </div>
</template>

<script>
import { mdiPencilOutline, mdiClose } from "@mdi/js";

export default {
    name: "BEditorCheckbox",

    data: () => ({
        icons: { mdiPencilOutline, mdiClose }
    })
};
</script>
