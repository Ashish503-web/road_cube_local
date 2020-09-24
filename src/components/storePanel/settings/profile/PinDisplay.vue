<template>
    <v-card class="rounded-lg" outlined>
        <v-card-title class="grey lighten-3">Pin Display</v-card-title>
        <v-row no-gutters justify="space-between" class="px-4 pt-1">
            <v-col cols="6">
                <v-card-text class="pa-0 relative">
                    Here you can change the display of the pin on the map:
                    <v-img
                        :src="mapPin.image ? bubbleNew : bubbleLogo"
                        width="84"
                    ></v-img>
                    <v-img
                        v-if="mapPin.image"
                        :src="mapPin.image"
                        class="map-new-pin"
                    ></v-img
                    >Press the following button to choose image:
                    <v-file-input
                        color="secondary"
                        class="mt-1"
                        outlined
                        dense
                        hide-details
                        @change="onFileSelected(mapPin, $event)"
                    ></v-file-input>
                </v-card-text>
            </v-col>
            <v-col cols="6" class=" relative">
                <v-img
                    src="@/assets/theMapLogo3.png"
                    width="260"
                    style="border: 2px solid gray"
                    class="rounded-circle"
                ></v-img>
            </v-col>
        </v-row>

        <v-card-actions class="pl-4 mt-1">
            <v-btn color="secondary" class="text-capitalize" depressed
                >update logo</v-btn
            >
        </v-card-actions>
    </v-card>
</template>

<script>
import bubbleLogo from "@/assets/the_on_bubble.png";
import bubbleNew from "@/assets/new_bubble_image.png";

export default {
    name: "PinDisplay",

    data: () => ({
        bubbleLogo,
        bubbleNew,
        mapPin: {
            image: "",
            imageFile: ""
        }
    })
};
</script>
