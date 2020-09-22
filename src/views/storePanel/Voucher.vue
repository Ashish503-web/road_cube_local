<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-row no-gutters>
                <v-col cols="auto">
                    <v-tabs v-model="tab" show-arrows>
                        <v-tab
                            v-for="tab in tabs"
                            :key="tab"
                            v-text="tab"
                            class="text-capitalize"
                        ></v-tab>
                    </v-tabs>
                </v-col>

                <v-col cols="12">
                    <v-tabs-items v-model="tab">
                        <v-tab-item>
                            <v-card tile flat>
                                <v-row no-gutters class="pl-12">
                                    <v-col cols="6" class="ml-12 mt-5">
                                        <v-card-title>
                                            <v-col class="pa-0">
                                                Coupons with transactions
                                            </v-col>
                                            <v-col cols="auto" class="pa-0">
                                                <v-tooltip right>
                                                    <template
                                                        v-slot:activator="{
                                                            on
                                                        }"
                                                    >
                                                        <v-btn
                                                            color="red"
                                                            icon
                                                            x-large
                                                            v-on="on"
                                                        >
                                                            <v-icon
                                                                v-text="
                                                                    icons.mdiClose
                                                                "
                                                                large
                                                            ></v-icon>
                                                        </v-btn>
                                                    </template>

                                                    <span>Delete</span>
                                                </v-tooltip>
                                            </v-col>
                                        </v-card-title>
                                        <v-card-subtitle style="width: 90%">
                                            <p class="ma-0">
                                                Reward every x transactions with
                                                a coupon.
                                            </p>
                                            <p>
                                                Consumers who meet the
                                                conditions automatically receive
                                                the coupon.
                                            </p>
                                        </v-card-subtitle>
                                        <v-img
                                            src="@/assets/serial_shopping.jpg"
                                            width="280"
                                        ></v-img>

                                        <v-text-field
                                            label="Reward user after"
                                            outlined
                                            dense
                                        ></v-text-field>
                                        <v-text-field
                                            label="Minimum transaction limit in euro"
                                            outlined
                                            dense
                                        ></v-text-field>
                                        <v-text-field
                                            label="Maximum time between visits: (Days)"
                                            outlined
                                            dense
                                        ></v-text-field>

                                        <v-card outlined class="pa-3">
                                            <v-row no-gutters align="center">
                                                <v-col cols="auto">
                                                    <v-img
                                                        src="@/assets/imageSerial.png"
                                                        width="35"
                                                    ></v-img>
                                                </v-col>
                                                <v-col cols="auto" class="ml-2"
                                                    >sada</v-col
                                                >
                                                <v-spacer></v-spacer>
                                                <v-col cols="auto"
                                                    >1231 voucher</v-col
                                                >
                                            </v-row>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-tab-item>

                        <v-tab-item>
                            <v-row
                                no-gutters
                                justify="space-between"
                                class="pt-8 pa-5"
                            >
                                <v-col cols="auto">
                                    <v-btn
                                        rounded
                                        color="primary"
                                        class="text-capitalize"
                                        @click="codeDialog = true"
                                        >add coupon</v-btn
                                    >
                                </v-col>

                                <v-col cols="auto">
                                    <v-alert
                                        type="info"
                                        dense
                                        class="rounded-xl"
                                    >
                                        You can either share the coupon codes on
                                        facebook or give them to users with an
                                        application.
                                    </v-alert>
                                </v-col>
                            </v-row>

                            <v-toolbar flat>
                                <v-spacer></v-spacer>
                                <v-col cols="4">
                                    <v-text-field
                                        label="Search"
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
                                    <v-tooltip top>
                                        <template v-slot:activator="{ on }">
                                            <v-btn
                                                color="yellow darken-3"
                                                icon
                                                v-on="on"
                                                @click="myFunc(item)"
                                            >
                                                <v-icon
                                                    v-text="
                                                        icons.mdiPencilOutline
                                                    "
                                                ></v-icon>
                                            </v-btn>
                                        </template>

                                        <span>Update</span>
                                    </v-tooltip>

                                    <v-tooltip top>
                                        <template v-slot:activator="{ on }">
                                            <v-btn
                                                color="red"
                                                icon
                                                v-on="on"
                                                @click="myFunc(item)"
                                            >
                                                <v-icon
                                                    v-text="icons.mdiClose"
                                                ></v-icon>
                                            </v-btn>
                                        </template>

                                        <span>Delete</span>
                                    </v-tooltip>
                                </template>

                                <template v-slot:item.social>
                                    <v-btn
                                        rounded
                                        color="blue darken-1"
                                        dark
                                        small
                                    >
                                        <v-icon
                                            class="mr-1"
                                            v-text="icons.mdiFacebook"
                                        ></v-icon
                                        >Share 0
                                    </v-btn>
                                </template>
                            </v-data-table>

                            <v-dialog
                                v-model="codeDialog"
                                scrollable
                                max-width="40%"
                            >
                                <v-card>
                                    <v-card-title
                                        class="secondary--text grey lighten-3"
                                    >
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

                                            <v-checkbox
                                                v-model="checkbox"
                                                color="secondary"
                                            >
                                                <template v-slot:label>
                                                    <p class="ma-0 font-italic">
                                                        Fill in the following
                                                        Voucher form if you want
                                                        to create and link a
                                                        coupon to the PromoCode.
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

                                                <v-checkbox
                                                    v-model="checkbox2"
                                                    color="secondary"
                                                >
                                                    <template v-slot:label>
                                                        <p
                                                            class="ma-0 subtitle-2"
                                                        >
                                                            I want an image to
                                                            be displayed in
                                                            voucher
                                                        </p>
                                                    </template>
                                                </v-checkbox>

                                                <v-card
                                                    v-if="checkbox2"
                                                    outlined
                                                >
                                                    <v-card-title
                                                        class="subtitle-1 font-weight-medium"
                                                    >
                                                        Product Image (optional)
                                                    </v-card-title>
                                                    <v-row
                                                        no-gutters
                                                        justify="space-between"
                                                    >
                                                        <v-col cols="6">
                                                            <v-img
                                                                :src="
                                                                    coupon.image
                                                                "
                                                            ></v-img>
                                                        </v-col>
                                                        <v-col cols="5">
                                                            <v-file-input
                                                                outlined
                                                                dense
                                                                hide-details
                                                                @change="
                                                                    onFileSelected
                                                                "
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
                                        <v-btn text @click="codeDialog = false"
                                            >close</v-btn
                                        >
                                        <v-btn color="primary" width="80"
                                            >save</v-btn
                                        >
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-tab-item>

                        <v-tab-item>
                            <v-toolbar flat height="100" class="pt-2 mb-3">
                                <v-btn
                                    rounded
                                    color="primary"
                                    class="text-capitalize"
                                    @click="productDialog = true"
                                    >add action</v-btn
                                >
                                <v-spacer></v-spacer>
                                <v-col cols="4">
                                    <v-text-field
                                        label="Search"
                                        rounded
                                        outlined
                                        dense
                                        clearable
                                        hide-details
                                        :prepend-inner-icon="icons.mdiMagnify"
                                    ></v-text-field>
                                </v-col>
                            </v-toolbar>

                            <v-data-table
                                :headers="couponsOnProductsHeaders"
                                :items="couponsOnProducts"
                                :footer-props="{ itemsPerPageOptions }"
                            >
                                <template v-slot:item.actions="{ item }">
                                    <v-tooltip top>
                                        <template v-slot:activator="{ on }">
                                            <v-btn
                                                color="yellow darken-3"
                                                icon
                                                v-on="on"
                                                @click="myFunc(item)"
                                            >
                                                <v-icon
                                                    v-text="
                                                        icons.mdiPencilOutline
                                                    "
                                                ></v-icon>
                                            </v-btn>
                                        </template>

                                        <span>Update</span>
                                    </v-tooltip>

                                    <v-tooltip top>
                                        <template v-slot:activator="{ on }">
                                            <v-btn
                                                color="red"
                                                icon
                                                v-on="on"
                                                @click="myFunc(item)"
                                            >
                                                <v-icon
                                                    v-text="icons.mdiClose"
                                                ></v-icon>
                                            </v-btn>
                                        </template>

                                        <span>Delete</span>
                                    </v-tooltip>
                                </template>

                                <template v-slot:item.social>
                                    <v-btn
                                        rounded
                                        color="blue darken-1"
                                        dark
                                        small
                                    >
                                        <v-icon
                                            class="mr-1"
                                            v-text="icons.mdiFacebook"
                                        ></v-icon
                                        >Share 0
                                    </v-btn>
                                </template>
                            </v-data-table>

                            <v-dialog
                                v-model="productDialog"
                                scrollable
                                max-width="40%"
                            >
                                <v-card>
                                    <v-card-title class="grey lighten-3"
                                        >Add Action</v-card-title
                                    >
                                    <v-divider></v-divider>
                                    <v-card-text class="py-5">
                                        <v-card outlined class="px-5 mb-3">
                                            <v-radio-group
                                                v-model="product.type"
                                            >
                                                <v-row no-gutters>
                                                    <v-col cols="6">
                                                        <v-radio
                                                            color="secondary"
                                                        >
                                                            <template
                                                                v-slot:label
                                                            >
                                                                <h4
                                                                    class="subtitle-2"
                                                                >
                                                                    action 1+1
                                                                </h4>
                                                            </template>
                                                        </v-radio>
                                                    </v-col>
                                                    <v-col cols="6">
                                                        <v-radio
                                                            color="secondary"
                                                        >
                                                            <template
                                                                v-slot:label
                                                            >
                                                                <h4
                                                                    class="subtitle-2"
                                                                >
                                                                    sampling
                                                                </h4>
                                                            </template>
                                                        </v-radio>
                                                    </v-col>
                                                </v-row>
                                            </v-radio-group> </v-card
                                        >To create a 1 + 1 Campaign you must
                                        declare 1 product for Buy and one to
                                        give it Free.Define products from the
                                        lists below
                                        <v-card outlined class="mt-3 py-5 px-2">
                                            <v-row no-gutters>
                                                <v-col cols="6" class="px-3">
                                                    <v-select
                                                        menu-props="offsetY"
                                                        label="Product for sale"
                                                        outlined
                                                        dense
                                                        hide-details
                                                    ></v-select>
                                                </v-col>
                                                <v-col cols="6" class="px-3">
                                                    <v-select
                                                        menu-props="offsetY"
                                                        label="Product for gift"
                                                        outlined
                                                        dense
                                                        hide-details
                                                    ></v-select>
                                                </v-col>
                                            </v-row>
                                        </v-card>

                                        <v-card outlined class="mt-3 pa-5">
                                            <v-text-field
                                                type="number"
                                                label="Quantity"
                                                outlined
                                                dense
                                                clearable
                                                hide-details
                                            ></v-text-field>
                                            <template></template>
                                        </v-card>
                                    </v-card-text>

                                    <v-divider></v-divider>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            text
                                            @click="productDialog = false"
                                            >close</v-btn
                                        >
                                        <v-btn color="primary" width="80"
                                            >save</v-btn
                                        >
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-tab-item>

                        <v-tab-item>
                            <v-card tile flat>
                                <v-row no-gutters class="pl-12">
                                    <v-col cols="6" class="ml-12 mt-5">
                                        <v-card-title
                                            >Coupons with visits</v-card-title
                                        >
                                        <v-card-subtitle style="width: 90%">
                                            Reward those who enter your store
                                            with a coupon. It only applies to
                                            users with an application and is
                                            recognized by GPS.
                                        </v-card-subtitle>
                                        <v-img
                                            src="@/assets/checkin_image.jpg"
                                            width="280"
                                        ></v-img>
                                    </v-col>

                                    <v-col cols="5" class="mt-10">
                                        <v-card outlined class="pb-10">
                                            <v-card-title
                                                class="justify-center subtitle-2"
                                                >Gift Card</v-card-title
                                            >

                                            <v-card-text>
                                                Set a voucher that the customer
                                                will win at checkin
                                                <v-row
                                                    no-gutters
                                                    align="center"
                                                    class="dashed pa-3 my-4"
                                                >
                                                    <v-col cols="7">
                                                        <img
                                                            src="@/assets/store-logo.png"
                                                            width="35"
                                                            style="vertical-align: middle"
                                                            class="mr-1"
                                                        />
                                                        Coffee
                                                    </v-col>
                                                    <v-col cols="5"
                                                        >10 voucher</v-col
                                                    >
                                                </v-row>

                                                <v-checkbox color="secondary">
                                                    <template v-slot:label>
                                                        <v-card-text
                                                            class="pa-0"
                                                        >
                                                            Reward with presence
                                                            in the store
                                                        </v-card-text>
                                                    </template>
                                                </v-checkbox>
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                </v-row>

                                <v-divider></v-divider>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary">accept</v-btn>
                                    <v-btn color="red" dark>delete</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-tab-item>

                        <v-tab-item>
                            <v-container class="pa-12 pb-3">
                                <v-card outlined tile>
                                    <v-data-table
                                        :headers="couponsWithDiscountHeaders"
                                        :items="couponsWithDiscount"
                                        outlined
                                    >
                                        <template
                                            v-slot:item.actions="{ item }"
                                        >
                                            <v-btn
                                                v-if="item.discount != '-'"
                                                color="red"
                                                rounded
                                                dark
                                                class="text-capitalize"
                                                depressed
                                                small
                                            >
                                                <v-icon
                                                    class="mr-1"
                                                    v-text="icons.mdiClose"
                                                ></v-icon
                                                >delete discount
                                            </v-btn>
                                            <v-btn
                                                v-else
                                                color="primary"
                                                rounded
                                                dark
                                                class="text-capitalize"
                                                depressed
                                                small
                                            >
                                                <v-icon
                                                    class="mr-1"
                                                    v-text="icons.mdiPlusThick"
                                                ></v-icon
                                                >add discount
                                            </v-btn>
                                        </template>
                                    </v-data-table>
                                </v-card>
                            </v-container>
                        </v-tab-item>
                    </v-tabs-items>
                </v-col>
            </v-row>
        </v-sheet>
    </v-container>
</template>

<script>
import {
    mdiClose,
    mdiAutoFix,
    mdiMagnify,
    mdiPencilOutline,
    mdiEmoticonSadOutline,
    mdiFacebook,
    mdiPlusThick
} from "@mdi/js";

export default {
    name: "Redeem",

    data: () => ({
        icons: {
            mdiClose,
            mdiAutoFix,
            mdiMagnify,
            mdiPencilOutline,
            mdiEmoticonSadOutline,
            mdiFacebook,
            mdiPlusThick
        },
        tab: 0,
        tabs: [
            "coupons with transactions",
            "coupons with code",
            "coupons on products",
            "coupons with visits",
            "coupons with discount"
        ],
        itemsPerPageOptions: [10, 20, 30, -1],
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
        codeDialog: false,
        coupon: {
            image: "",
            imageFile: ""
        },
        checkbox: false,
        checkbox2: false,
        couponsOnProductsHeaders: [
            { text: "Type", value: "type" },
            { text: "Product For Sale", value: "sale" },
            { text: "Product For Gift", value: "gift" },
            { text: "Quantity", value: "quantity" },
            { text: "Actions", value: "actions" },
            { text: "Social Media", value: "social" }
        ],
        couponsOnProducts: [
            {
                type: "1+1",
                sale: "discount product",
                gift: "discount product",
                quantity: 5
            }
        ],
        productDialog: false,
        product: {
            type: "",
            image: "",
            imageFile: ""
        },
        couponsWithDiscountHeaders: [
            { text: "Product Name", value: "name" },
            { text: "Discount", value: "discount" },
            { text: "Points", value: "points" },
            { text: "Actions", value: "actions" }
        ],
        couponsWithDiscount: [
            { name: "test lefko", discount: "-10%", points: "0 points" },
            { name: "CARWASH_ΕΞΩΤΕΡΙΚΟ", discount: "-", points: "-" }
        ]
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

<style scoped>
.dashed {
    border: 1px dashed grey;
    border-radius: 10px;
}
</style>
