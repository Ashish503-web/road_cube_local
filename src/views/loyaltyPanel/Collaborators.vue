<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-toolbar flat height="90">
                <v-btn
                    color="secondary"
                    class="text-capitalize px-5"
                    depressed
                    v-text="translations.addBrand[lang]"
                ></v-btn>

                <v-spacer></v-spacer>

                <v-col cols="12" sm="4" class="pa-0">
                    <b-search-field></b-search-field>
                </v-col>
            </v-toolbar>

            <v-data-table
                :headers="headers"
                :items="items"
                :footer-props="{ itemsPerPageOptions }"
                class="b-outlined"
            >
            </v-data-table>
        </v-sheet>
    </v-container>
</template>

<script>
import translations from "@/utils/translations/loyaltyPanel/collaborators";

export default {
    name: "Collaborators",

    mixins: [translations],

    data: () => ({
        tab: 0,
        itemsPerPageOptions: [10, 20, 30, -1],
        items: []
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        headers() {
            return [
                { text: this.translations.name[this.lang], value: "name" },
                { text: this.translations.email[this.lang], value: "email" }
            ];
        }
    }
};
</script>
