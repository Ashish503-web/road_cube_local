<template>
    <v-autocomplete
        :value="value"
        :search-input.sync="location"
        :items="searchResults"
        :label="label"
        item-text="description"
        return-object
        color="secondary"
        item-color="secondary"
        clearable
        autocomplete="new-password"
        :outlined="outlined"
        :dense="dense"
        :hide-details="hideDetails"
        :success="success"
        :error-messages="errorMessages"
        :prepend-inner-icon="icons.mdiMapMarker"
        @change="$emit('change', $event.place_id)"
        @focus="$emit('focus')"
        @blur="$emit('blur')"
        @input="$emit('input', $event.description)"
    ></v-autocomplete>
</template>

<script>
import { mdiMapMarker } from "@mdi/js";

export default {
    name: "Places",

    props: {
        value: String,
        initialLocation: String,
        label: String,
        outlined: Boolean,
        dense: Boolean,
        hideDetails: [String, Boolean],
        success: Boolean,
        errorMessages: String,
    },

    data: () => ({
        icons: { mdiMapMarker },
        location: "",
        searchResults: [],
        placeService: null,
    }),

    methods: {
        displaySuggestions(predictions, status) {
            if (status !== window.google.maps.places.PlacesServiceStatus.OK) {
                this.searchResults = [];
                return;
            }

            this.searchResults = predictions;
            // this.searchResults = predictions.map(
            //     (prediction) => prediction.description
            // );
        },
    },

    watch: {
        initialLocation(val) {
            if (val) setTimeout(() => (this.location = val), 1000);
        },

        location(val) {
            if (val) {
                window.service.getPlacePredictions(
                    {
                        input: val,
                        types: [],
                    },
                    this.displaySuggestions
                );
            }
        },
    },
};
</script>
