<template>
    <v-autocomplete
        v-model="place"
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
        @focus="$emit('focus')"
        @blur="$emit('blur')"
    ></v-autocomplete>
</template>

<script>
import { mdiMapMarker } from "@mdi/js";

export default {
    name: "Places",

    props: {
        value: String,
        label: String,
        outlined: Boolean,
        dense: Boolean,
        hideDetails: [String, Boolean],
        success: Boolean,
        errorMessages: String
    },

    data() {
        return {
            icons: { mdiMapMarker },
            location: "",
            searchResults: [],
            place: {}
        };
    },

    methods: {
        displaySuggestions(predictions, status) {
            if (status !== window.google.maps.places.PlacesServiceStatus.OK) {
                this.searchResults = [];
                return;
            }
            this.searchResults = predictions;
        }
    },

    watch: {
        ["$store.state.storePanel.store.address"]: {
            handler(val) {
                this.location = val;
                this.place = val;
            }
        },

        location(val) {
            if (val) {
                window.service.getPlacePredictions(
                    {
                        input: val,
                        types: ["address"]
                    },
                    this.displaySuggestions
                );
            }
        },

        place(val) {
            if (val) {
                if (val.place_id) {
                    window.placesService.getDetails(
                        {
                            placeId: val.place_id,
                            fields: ["address_component", "geometry"]
                        },
                        (place, status) => {
                            if (
                                status ==
                                window.google.maps.places.PlacesServiceStatus.OK
                            ) {
                                this.$emit("newAddress", {
                                    address: val.description,
                                    zip:
                                        place.address_components[
                                            place.address_components.length - 1
                                        ].long_name,
                                    lat: place.geometry.location.lat(),
                                    lon: place.geometry.location.lng()
                                });
                            }
                        }
                    );
                }
            }
        }
    },

    mounted() {
        if (this.$store.state.storePanel) {
            if (this.$store.state.storePanel.store.address) {
                this.location = this.$store.state.storePanel.store.address;
                this.place = this.$store.state.storePanel.store.address;
            }
        }
    }
};
</script>
