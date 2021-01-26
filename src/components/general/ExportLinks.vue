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
            <template v-if="withPDF">
                <v-list-item
                    v-for="link in exportLinksWithPDF"
                    :key="link.text['en']"
                    href="#"
                >
                    <v-list-item-icon class="mr-3">
                        <v-icon :color="link.color" v-text="link.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-title
                        v-text="link.text[lang]"
                    ></v-list-item-title>
                </v-list-item>
            </template>

            <template v-else>
                <v-list-item
                    v-for="link in exportLinks"
                    :key="link.text['en']"
                    href="#"
                >
                    <v-list-item-icon class="mr-3">
                        <v-icon :color="link.color" v-text="link.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-title
                        v-text="link.text[lang]"
                    ></v-list-item-title>
                </v-list-item>
            </template>
        </v-list>
    </v-menu>
</template>

<script>
import {
    mdiFormatListCheckbox,
    mdiMicrosoftExcel,
    mdiFilePdf,
    mdiFileDelimitedOutline
} from "@mdi/js";

export default {
    name: "ExportLinks",

    props: {
        withPDF: Boolean
    },

    data: () => ({
        icons: { mdiFormatListCheckbox },
        exportLinks: [
            {
                icon: mdiMicrosoftExcel,
                text: { el: "", en: "Export to Excel", it: "" },
                color: "green darken-3"
            },
            {
                icon: mdiFileDelimitedOutline,
                text: { el: "", en: "Export to CSV", it: "" },
                color: "blue darken-3"
            }
        ],
        exportLinksWithPDF: [
            {
                icon: mdiMicrosoftExcel,
                text: { el: "", en: "Export to Excel", it: "" },
                color: "green darken-3"
            },
            {
                icon: mdiFilePdf,
                text: { el: "", en: "Export to PDF", it: "" },
                color: "red darken-4"
            },
            {
                icon: mdiFileDelimitedOutline,
                text: { el: "", en: "Export to CSV", it: "" },
                color: "blue darken-3"
            }
        ]
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        }
    }
};
</script>
