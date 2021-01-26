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
        initialAddress: String,
        label: String,
        outlined: Boolean,
        dense: Boolean,
        hideDetails: [String, Boolean],
        success: Boolean,
        errorMessages: String,
    },

    data() {
        return {
            icons: { mdiMapMarker },
            location: "",
            searchResults: [],
            place: {},
        };
    },

    methods: {
        displaySuggestions(predictions, status) {
            if (status !== window.google.maps.places.PlacesServiceStatus.OK) {
                this.searchResults = [];
                return;
            }
            this.searchResults = predictions;
        },
    },

    watch: {
        location(val) {
            if (val) {
                window.service.getPlacePredictions(
                    {
                        input: val,
                        componentRestrictions: {
                            country: ["gr"],
                        },
                        types: ["address"],
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
                            fields: ["address_component", "geometry"],
                        },
                        (place, status) => {
                            if (
                                status ==
                                window.google.maps.places.PlacesServiceStatus.OK
                            ) {
                                const isAddress = !!place.address_components[
                                    place.address_components.length - 1
                                ].types.find((type) => type === "postal_code");

                                this.$emit("newAddress", {
                                    address: val.description,
                                    zip:
                                        place.address_components[
                                            place.address_components.length - 1
                                        ].long_name,
                                    lat: place.geometry.location.lat(),
                                    lon: place.geometry.location.lng(),
                                    isAddress,
                                });
                            }
                        }
                    );
                }
            }
        },
    },

    mounted() {
        this.location = this.initialAddress;
        this.place = this.initialAddress;
    },
};
</script>
