<template>
    <v-menu v-model="menu" offset-y transition="slide-y-transition">
        <template v-slot:activator="{ on }">
            <v-btn class="text-capitalize" text v-on="on">
                <img :src="lang.img" width="25" class="mr-1" />
                {{ lang.title }}
                <v-icon
                    v-text="menu ? icons.mdiChevronUp : icons.mdiChevronDown"
                ></v-icon>
            </v-btn>
        </template>

        <v-list dense>
            <v-list-item-group v-model="lang" color="secondary">
                <v-list-item
                    v-for="lang in langs"
                    :key="lang.title"
                    :value="lang"
                >
                    <v-list-item-action class="mr-1">
                        <img :src="lang.img" width="25" />
                    </v-list-item-action>
                    <v-list-item-title v-text="lang.title"></v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-menu>
</template>

<script>
import { mdiChevronUp, mdiChevronDown } from "@mdi/js";

import greeceFlag from "@/assets/flags/Flag_of_Greece.svg";
import USFlag from "@/assets/flags/US-flag.jpeg";
import italyFlag from "@/assets/flags/Flag_of_Italy.svg";

export default {
    name: "BLangMenu",
    props: {
        value: {
            type: String,
            default: "el"
        }
    },
    data: () => ({
        icons: { mdiChevronUp, mdiChevronDown },
        menu: false,
        lang: {
            img: greeceFlag,
            title: "Greek",
            urlTitle: "el"
        },

        langs: [
            { img: greeceFlag, title: "Greek", urlTitle: "el" },
            { img: USFlag, title: "English", urlTitle: "en" },
            { img: italyFlag, title: "Italian", urlTitle: "it" }
        ]
    }),

    watch: {
        lang(val) {
            this.$emit("input", val.urlTitle);
        },

        value: {
            immediate: true,
            handler(val) {
                this.lang = this.langs.find(lang => lang.urlTitle === val);
            }
        }
    }
};
</script>
