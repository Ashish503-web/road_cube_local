<template>
    <div>
        <v-autocomplete
            :search-input.sync="location"
            label="Address"
            color="secondary"
            clearable
            :prepend-inner-icon="icons.mdiMapMarker"
            :outlined="outlined"
            :dense="dense"
        ></v-autocomplete>

        <ul>
            <li v-for="(result, i) in searchResults" :key="i">
                {{ result }} // list of all places
            </li>
        </ul>
    </div>
</template>

<script>
import { mdiMapMarker } from "@mdi/js";

export default {
    name: "Places",

    metaInfo() {
        return {
            script: [
                {
                    src: `https://maps.googleapis.com/maps/api/js?key=AIzaSyDKQwGY35TQ-jjbdZtrzZHAkVb5eZTkaVE&libraries=places`,
                    async: true,
                    defer: true,
                    callback: () => this.MapsInit()
                }
            ]
        };
    },

    props: {
        outlined: Boolean,
        dense: Boolean
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
                        types: ["(cities)"]
                    },
                    this.displaySuggestions
                );
            }
        }
    }
};
</script>
