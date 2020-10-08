<template>
    <v-menu v-model="menu" offset-y>
        <template v-slot:activator="{ attrs }">
            <v-text-field
                :label="
                    selectedSearchType === 'All Fields'
                        ? 'Search'
                        : selectedSearchType
                        ? 'Search by ' + selectedSearchType
                        : 'Search'
                "
                color="secondary"
                rounded
                outlined
                dense
                clearable
                hide-details
                :aria-expanded="attrs['aria-expanded']"
                :prepend-inner-icon="icons.mdiMagnify"
                :append-icon="searchTypes ? icons[icon] : ''"
                @click:append="menu = true"
            ></v-text-field>
        </template>

        <v-list dense>
            <v-list-item-group v-model="selectedSearchType" color="secondary">
                <v-list-item
                    v-for="searchType in searchTypes"
                    :key="searchType"
                    :value="searchType"
                >
                    <v-list-item-title v-text="searchType"></v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-menu>
</template>

<script>
import { mdiMagnify, mdiChevronUp, mdiChevronDown } from "@mdi/js";

export default {
    name: "BSearchField",

    props: {
        searchTypes: Array,
        selectedSearchType: String
    },

    data: () => ({
        menu: false,
        icons: {
            mdiMagnify,
            mdiChevronUp,
            mdiChevronDown
        }
    }),

    computed: {
        icon() {
            return this.menu ? "mdiChevronUp" : "mdiChevronDown";
        }
    }
};
</script>
