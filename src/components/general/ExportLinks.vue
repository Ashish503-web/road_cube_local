<template>
    <v-menu offset-y right>
        <template v-slot:activator="{ on }">
            <v-btn text v-on="on">
                <v-icon
                    color="secondary"
                    v-text="icons.mdiFormatListCheckbox"
                ></v-icon>
            </v-btn>
        </template>

        <v-list dense>
            <v-list-item
                v-for="(link, i) in exportLinks"
                :key="link.text['en']"
                href="#"
            >
                <v-list-item-icon class="mr-3">
                    <v-icon
                        :color="i === 0 ? 'green darken-3' : 'blue darken-3'"
                        v-text="link.icon"
                    ></v-icon>
                </v-list-item-icon>
                <v-list-item-title v-text="link.text[lang]"></v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
import {
    mdiFormatListCheckbox,
    mdiMicrosoftExcel,
    mdiFileDelimitedOutline,
} from "@mdi/js";

export default {
    name: "ExportLinks",

    data: () => ({
        icons: { mdiFormatListCheckbox },
        exportLinks: [
            {
                text: { el: "", en: "Export to Excel", it: "" },
                icon: mdiMicrosoftExcel,
            },
            {
                text: { el: "", en: "Export to CSV", it: "" },
                icon: mdiFileDelimitedOutline,
            },
        ],
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },
    },
};
</script>