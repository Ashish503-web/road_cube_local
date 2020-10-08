<template>
    <v-tab-item>
        <v-row no-gutters justify="space-between" class="pt-8 pa-5">
            <v-col cols="auto">
                <v-btn
                    color="secondary"
                    class="text-capitalize mb-2 mb-md-0"
                    depressed
                    @click="dialog = true"
                    >add coupon</v-btn
                >
            </v-col>

            <v-col cols="auto">
                <v-alert type="info" dense>
                    You can either share the coupon codes on facebook or give
                    them to users with an application.
                </v-alert>
            </v-col>
        </v-row>

        <v-toolbar flat>
            <v-spacer></v-spacer>
            <v-col cols="12" sm="4">
                <v-text-field
                    label="Search"
                    color="secondary"
                    rounded
                    outlined
                    dense
                    clearable
                    :prepend-inner-icon="icons.mdiMagnify"
                ></v-text-field>
            </v-col>
        </v-toolbar>

        <v-data-table
            :headers="couponsWithCodeHeaders"
            :items="couponsWithCode"
            :footer-props="{ itemsPerPageOptions }"
        >
            <template v-slot:item.actions="{ item }">
                <v-tooltip color="secondary" top>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            color="yellow darken-3"
                            icon
                            v-on="on"
                            @click="myFunc(item)"
                        >
                            <v-icon v-text="icons.mdiPencilOutline"></v-icon>
                        </v-btn>
                    </template>

                    <span>Update</span>
                </v-tooltip>

                <v-tooltip color="secondary" top>
                    <template v-slot:activator="{ on }">
                        <v-btn color="red" icon v-on="on" @click="myFunc(item)">
                            <v-icon v-text="icons.mdiClose"></v-icon>
                        </v-btn>
                    </template>

                    <span>Delete</span>
                </v-tooltip>
            </template>

            <template v-slot:item.social>
                <v-btn color="blue darken-1" depressed dark small>
                    <v-icon class="mr-1" v-text="icons.mdiFacebook"></v-icon
                    >Share 0
                </v-btn>
            </template>
        </v-data-table>

        <v-dialog v-model="dialog" scrollable max-width="40%">
            <v-card>
                <v-card-title class="secondary--text grey lighten-3">
                    <v-icon
                        class="mr-2"
                        large
                        v-text="icons.mdiAutoFix"
                    ></v-icon
                    >Create Coupon
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text class="py-5">
                    <v-card outlined class="pa-5">
                        <h4>Coupon Code</h4>
                        <v-text-field
                            class="mt-2"
                            placeholder="e.g. Maroudas Optika"
                            outlined
                            dense
                            clearable
                            hint="* This is the code that you can share in posters, documents and internet. We suggest you to type something similar to your company name."
                            persistent-hint
                        ></v-text-field>

                        <h4 class="mt-5">
                            Moves (RoadCube Points)
                        </h4>
                        <v-text-field
                            type="number"
                            class="mt-2"
                            outlined
                            dense
                            clearable
                        ></v-text-field>

                        <h4 class="mt-3">
                            Vouchers Ammount
                        </h4>
                        <v-text-field
                            type="number"
                            class="mt-2"
                            outlined
                            dense
                            clearable
                        ></v-text-field>

                        <v-checkbox v-model="checkbox" color="secondary">
                            <template v-slot:label>
                                <p class="ma-0 font-italic">
                                    Fill in the following Voucher form if you
                                    want to create and link a coupon to the
                                    PromoCode.
                                </p>
                            </template>
                        </v-checkbox>

                        <v-card v-if="checkbox" flat>
                            <template>
                                <v-text-field
                                    label="Title"
                                    class="mt-2"
                                    outlined
                                    dense
                                    clearable
                                ></v-text-field>

                                <v-textarea
                                    label="Description"
                                    outlined
                                    clearable
                                ></v-textarea>
                            </template>

                            <v-checkbox v-model="checkbox2" color="secondary">
                                <template v-slot:label>
                                    <p class="ma-0 subtitle-2">
                                        I want an image to be displayed in
                                        voucher
                                    </p>
                                </template>
                            </v-checkbox>

                            <v-card v-if="checkbox2" outlined>
                                <v-card-title
                                    class="subtitle-1 font-weight-medium"
                                    >Product Image (optional)</v-card-title
                                >
                                <v-row no-gutters justify="space-between">
                                    <v-col cols="6">
                                        <v-img :src="coupon.image"></v-img>
                                    </v-col>
                                    <v-col cols="5">
                                        <v-file-input
                                            outlined
                                            dense
                                            hide-details
                                            @change="onFileSelected"
                                        ></v-file-input>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-card>
                    </v-card>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="dialog = false">close</v-btn>
                    <v-btn color="primary" width="80">save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-tab-item>
</template>

<script>
import {
    mdiClose,
    mdiAutoFix,
    mdiMagnify,
    mdiPencilOutline,
    mdiFacebook
} from "@mdi/js";

export default {
    name: "CouponsWithCode",
    data: () => ({
        icons: {
            mdiClose,
            mdiAutoFix,
            mdiMagnify,
            mdiPencilOutline
        },
        couponsWithCodeHeaders: [
            { text: "Code", value: "code" },
            { text: "Voucher", value: "voucher" },
            { text: "Points", value: "points" },
            { text: "Acquired", value: "acquired" },
            { text: "Redeemed", value: "redeemed" },
            { text: "Available", value: "available" },
            { text: "Actions", value: "actions" },
            { text: "Social Media", value: "social" }
        ],
        couponsWithCode: [
            {
                code: "643941414167",
                voucher: "No coupon found.",
                points: 0,
                acquired: 4,
                redeemed: 3,
                available: 2
            }
        ],
        itemsPerPageOptions: [10, 20, 30, -1],
        coupon: {
            image: "",
            imageFile: ""
        },
        dialog: false,
        checkbox: false,
        checkbox2: false
    }),

    methods: {
        onFileSelected(event) {
            this.coupon.imageFile = event;
            const reader = new FileReader();
            reader.readAsDataURL(this.coupon.imageFile);
            reader.onload = e => (this.coupon.image = e.target.result);
        }
    }
};
</script>
