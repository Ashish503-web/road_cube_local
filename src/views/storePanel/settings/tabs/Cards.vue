<template>
    <v-tab-item :value="$route.path" class="pt-5">
        <v-window v-model="step">
            <v-window-item :value="1">
                <v-row no-gutters>
                    <v-col
                        cols="12"
                        md="5"
                        class="mr-0 mr-md-2 mb-3 mb-md-0 d-flex justify-center"
                    >
                        <v-img
                            src="@/assets/card.png"
                            width="100%"
                            max-width="400"
                            class="rounded-xl"
                            contain
                        ></v-img>
                    </v-col>

                    <v-col cols="12" md="6">
                        <v-card class="rounded-lg" outlined>
                            <v-card-text>
                                <div class="secondary--text subtitle-2">
                                    Upload Image
                                </div>
                                Upload an image for your card's background
                                <v-sheet width="70%" class="py-1">
                                    <v-file-input
                                        outlined
                                        dense
                                        hide-details
                                    ></v-file-input>
                                </v-sheet>

                                <v-divider class="my-1"></v-divider>

                                <div class="secondary--text subtitle-2">
                                    Choose Color
                                </div>

                                <div>
                                    Choose the color of the card's background
                                </div>

                                <div class="mt-3">
                                    <v-menu
                                        v-model="colorPickerMenu"
                                        offset-y
                                        transition="scale-transition"
                                        :close-on-content-click="false"
                                    >
                                        <template
                                            v-slot:activator="{
                                                on
                                            }"
                                        >
                                            <v-btn
                                                color="grey lighten-3"
                                                class="px-0"
                                                depressed
                                                v-on="on"
                                            >
                                                <v-sheet
                                                    :color="cardBackgroundColor"
                                                    width="25"
                                                    height="25"
                                                    class="bb"
                                                ></v-sheet>

                                                <v-icon
                                                    class="ml-1"
                                                    v-text="icons.mdiMenuDown"
                                                ></v-icon>
                                            </v-btn>
                                        </template>

                                        <v-card>
                                            <v-card-text>
                                                <v-color-picker
                                                    v-model="pickedColor"
                                                    :show-swatches="
                                                        showSwatches
                                                    "
                                                    hide-inputs
                                                ></v-color-picker>
                                            </v-card-text>

                                            <v-card-actions>
                                                <v-btn
                                                    small
                                                    text
                                                    color="blue"
                                                    @click="
                                                        showSwatches = !showSwatches
                                                    "
                                                >
                                                    show swatches
                                                    <v-icon
                                                        small
                                                        v-text="
                                                            showSwatches
                                                                ? icons.mdiChevronDown
                                                                : icons.mdiChevronUp
                                                        "
                                                    ></v-icon>
                                                </v-btn>

                                                <v-spacer></v-spacer>

                                                <v-btn
                                                    text
                                                    small
                                                    @click="
                                                        colorPickerMenu = false
                                                    "
                                                    >cancel</v-btn
                                                >
                                                <v-btn
                                                    color="secondary"
                                                    small
                                                    @click="
                                                        () => {
                                                            cardBackgroundColor = pickedColor;
                                                            colorPickerMenu = false;
                                                        }
                                                    "
                                                    >choose</v-btn
                                                >
                                            </v-card-actions>
                                        </v-card>
                                    </v-menu>

                                    <v-btn
                                        color="secondary"
                                        class="text-capitalize ml-10"
                                        depressed
                                        >default image</v-btn
                                    >
                                </div>

                                <v-divider class="my-2"></v-divider>

                                <div class="secondary--text subtitle-2">
                                    Change logo size
                                </div>
                                Change logo size in card
                                <v-slider
                                    color="secondary"
                                    thumb-label
                                    hide-details
                                    track-color="secondary"
                                ></v-slider>

                                <v-divider class="my-3"></v-divider>

                                <div class="secondary--text subtitle-2">
                                    Card Amount
                                </div>
                                For the first card order (based on the annual
                                subscription package) the cards are provided
                                Free and you can not change the quantity. You
                                can do the ordering process again and then you
                                can order as many additional cards as you like.
                                <v-sheet width="70%">
                                    <v-text-field
                                        class="mt-5"
                                        type="number"
                                        color="secondary"
                                        outlined
                                        dense
                                        clearable
                                        hide-details
                                        :prepend-inner-icon="icons.mdiPound"
                                    ></v-text-field>
                                </v-sheet>
                            </v-card-text>

                            <v-divider></v-divider>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="secondary"
                                    class="pl-3"
                                    depressed
                                    @click="step++"
                                >
                                    next
                                    <v-icon
                                        size="20"
                                        v-text="icons.mdiArrowRight"
                                    ></v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-window-item>

            <v-window-item :value="2">
                <v-btn icon @click="step--">
                    <v-icon v-text="icons.mdiArrowLeft"></v-icon>
                </v-btn>
                <v-img
                    src="@/assets/orderImageCheckout.png"
                    width="128"
                    class="mx-auto"
                ></v-img>

                <v-sheet
                    width="400"
                    class="text--secondary mx-auto text-center"
                >
                    <v-card-title class="justify-center secondary--text"
                        >Your order has been registered!</v-card-title
                    >To complete the order you have to pay off your cards which
                    they will be delivered in your business's address. If there
                    is some modification you wish to make please contact us at
                    info@roadcube.com after the payment.
                    <br />
                    <v-btn
                        color="secondary"
                        class="text-capitalize mt-5"
                        depressed
                        large
                    >
                        <v-icon large v-text="icons.mdiCart"></v-icon>
                        <span class="mx-3">complete order</span>
                        <span class="text-h5">18.6 €</span>
                    </v-btn>
                </v-sheet>
            </v-window-item>
        </v-window>
    </v-tab-item>
</template>

<script>
import {
    mdiMenuDown,
    mdiChevronUp,
    mdiChevronDown,
    mdiPound,
    mdiArrowRight,
    mdiArrowLeft
} from "@mdi/js";

export default {
    name: "Cards",

    data: () => ({
        icons: {
            mdiMenuDown,
            mdiChevronUp,
            mdiChevronDown,
            mdiPound,
            mdiArrowRight,
            mdiArrowLeft
        },
        step: 1,
        colorPickerMenu: false,
        showSwatches: false,
        pickedColor: "#ffffff",
        cardBackgroundColor: "#ffffff"
    })
};
</script>
