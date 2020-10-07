<template>
    <v-card outlined>
        <v-card-title class="grey lighten-3">{{card.cardTitle}}</v-card-title>
        <v-row no-gutters justify="space-between" class="flex-wrap-reverse px-4 pt-1">
            <v-col cols="12" sm="6">
                <v-card-text class="pa-0 relative">

                    {{card.cardDescription}}
                    <v-img
                        :src="card.img"
                        width="84"
                        class="mx-auto mx-sm-0"
                        style="position: relative"
                    >
                        <v-img
                                v-if="mapPin.image"
                                :src="mapPin.image"
                                class="map-new-pin second-image"
                        ></v-img>
                    </v-img>

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
            <v-col cols="12" sm="6" class=" relative">
                <v-img
                    src="https://www.roadcube.com/images/theMapLogo3.png"
                    width="260"
                    style="border: 2px solid gray"
                    class="rounded-circle mx-auto"
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
    methods: {
        onFileSelected(item, event) {
            item.imageFile = event;
            const reader = new FileReader();
            reader.readAsDataURL(item.imageFile);
            reader.onload = e => (item.image = e.target.result);
        }
    }
};
</script>
<style scoped>
    .second-image{
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>