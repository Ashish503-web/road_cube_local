<template>
    <v-autocomplete
        :value="value"
        :search-input.sync="location"
        :items="searchResults"
        :label="label"
        color="secondary"
        item-color="secondary"
        clearable
        :outlined="outlined"
        :dense="dense"
        :hide-details="hideDetails"
        :success="success"
        :error-messages="errorMessages"
        :prepend-inner-icon="icons.mdiMapMarker"
        @focus="$emit('focus')"
        @blur="$emit('blur')"
        @input="$emit('input', $event)"
    ></v-autocomplete>
</template>

<script>
import { mdiMapMarker } from "@mdi/js";

export default {
    name: "Places",

    metaInfo() {
        return {
            script: [
                {
                    src: `https://maps.googleapis.com/maps/api/js?key=AIzaSyBO7NVvj3D2unctftPpj-O0n3aoS0MbUEQ&libraries=places`,
                    async: true,
                    defer: true,
                    callback: () => this.MapsInit()
                }
            ]
        };
    },

    props: {
        value: String,
        label: String,
        outlined: Boolean,
        dense: Boolean,
        hideDetails: [String, Boolean],
        success: Boolean,
        errorMessages: String
    },

    data: () => ({
        icons: { mdiMapMarker },
        location: "",
        searchResults: [],
        service: null
    }),

    methods: {
        MapsInit() {
            this.service = new window.google.maps.places.AutocompleteService();
        },

        displaySuggestions(predictions, status) {
            if (status !== window.google.maps.places.PlacesServiceStatus.OK) {
                this.searchResults = [];
                return;
            }
            this.searchResults = predictions.map(
                prediction => prediction.description
            );
        }
    },

    watch: {
        location(newValue) {
            if (newValue) {
                this.service.getPlacePredictions(
                    {
                        input: this.location,
                        types: []
                    },
                    this.displaySuggestions
                );
            }
        }
    }
};
</script>
