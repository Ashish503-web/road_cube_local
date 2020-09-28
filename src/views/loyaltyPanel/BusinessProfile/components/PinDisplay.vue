<template>
    <v-card outlined>
        <v-card-title class="grey lighten-3">{{card.cardTitle}}</v-card-title>
        <v-row no-gutters justify="space-between" class="px-4 pt-1">
            <v-col cols="6">
                <v-card-text class="pa-0 relative">

                    {{card.cardDescription}}
                    <v-img
                        :src="card.img"
                        width="84"
                    ></v-img>
                    <v-img
                        v-if="mapPin.image"
                        :src="mapPin.image"
                        class="map-new-pin"
                    ></v-img
                    >
                    {{card.uploadDescription}}

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
                    src="https://www.roadcube.com/images/theMapLogo3.png"
                    width="260"
                    style="border: 2px solid gray"
                    class="rounded-circle"
                ></v-img>
            </v-col>
        </v-row>

        <v-card-actions class="pl-4 mt-3">
            <v-btn color="secondary" class="text-capitalize" depressed
                >
                <v-icon
                        v-text="icons.mdiArrowRight"
                ></v-icon>
                update logo</v-btn
            >
        </v-card-actions>
    </v-card>
</template>

<script>
import bubbleLogo from "@/assets/the_on_bubble.png";
import bubbleNew from "@/assets/new_bubble_image.png";
import {
    mdiArrowRight

} from "@mdi/js";
export default {
    name: "PinDisplay",

    data: () => ({
        bubbleLogo,
        bubbleNew,

        mapPin: {
            image: "",
            imageFile: ""
        },
        icons: {
            mdiArrowRight,
        }
    }),
    props: [
        "card"
    ],
};
</script>
