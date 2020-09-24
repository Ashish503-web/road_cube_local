<template>
    <v-container fluid style="background: #eaedf1">
        <v-sheet class="pa-3">
            <v-row no-gutters justify="space-between" align="center">
                <v-col cols="auto">
                    <v-tabs v-model="tabIndex" color="black">
                        <v-tab class="text-capitalize">All</v-tab>
                        <v-tab
                            v-for="tab in tabs"
                            :key="tab.name"
                            v-text="tab.name"
                            class="text-capitalize"
                        ></v-tab>
                        <v-btn
                            color="black"
                            text
                            height="48"
                            tile
                            @click="
                                () => {
                                    tab = new Tab();
                                    tabDialog = true;
                                }
                            "
                        >
                            <v-icon v-text="icons.mdiPlus"></v-icon>
                        </v-btn>
                    </v-tabs>
                </v-col>

                <v-btn
                    color="secondary"
                    class="text-capitalize mt-1"
                    depressed
                    @click="promocodeDialog = true"
                    >add promocode</v-btn
                >
            </v-row>

            <v-tabs-items v-model="tabIndex">
                <v-tab-item>
                    <v-toolbar flat height="80">
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
                        :headers="headers"
                        :items="items"
                        :footer-props="{ itemsPerPageOptions }"
                    >
                        <template v-slot:item.edit="{ item }">
                            <v-tooltip v-if="item.status === 'finished'" top>
                                <template v-slot:activator="{ on }">
                                    <v-icon
                                        color="success"
                                        v-text="icons.mdiCheck"
                                        v-on="on"
                                    ></v-icon>
                                </template>

                                <span>Finished</span>
                            </v-tooltip>

                            <v-tooltip v-else top>
                                <template v-slot:activator="{ on }">
                                    <v-btn
                                        color="yellow darken-3"
                                        icon
                                        v-on="on"
                                    >
                                        <v-icon
                                            v-text="icons.mdiPencilOutline"
                                        ></v-icon>
                                    </v-btn>
                                </template>

                                <span>Update</span>
                            </v-tooltip>
                        </template>
                    </v-data-table>

                    <v-dialog v-model="tabDialog" max-width="30%" scrollable>
                        <v-card>
                            <v-card-title class="grey lighten-3">
                                New Tab
                                <v-spacer></v-spacer>
                                <v-icon
                                    color="secondary"
                                    large
                                    v-text="icons.mdiPlus"
                                ></v-icon>
                            </v-card-title>

                            <v-card-text class="pt-7">
                                <v-text-field
                                    v-model="tab.name"
                                    label="New Tab"
                                    outlined
                                    dense
                                    clearable
                                    hide-details
                                ></v-text-field>

                                <v-row no-gutters class="mt-1" justify="center">
                                    <v-col cols="auto">
                                        <v-checkbox
                                            v-model="tab.defaultColumns"
                                            :value="{
                                                text: 'Roadcodes',
                                                value: 'roadcodes'
                                            }"
                                            color="secondary"
                                            readonly
                                            class="mt-0"
                                            hide-details
                                        >
                                            <template v-slot:label>
                                                <h4 class="subtitle-2">
                                                    Roadcodes
                                                </h4>
                                            </template>
                                        </v-checkbox>

                                        <v-checkbox
                                            v-model="tab.defaultColumns"
                                            :value="{
                                                text: 'Phone Number',
                                                value: 'phoneNumber'
                                            }"
                                            color="secondary"
                                            class="mt-0"
                                            hide-details
                                        >
                                            <template v-slot:label>
                                                <h4 class="subtitle-2">
                                                    Phone Number
                                                </h4>
                                            </template>
                                        </v-checkbox>

                                        <v-checkbox
                                            v-model="tab.defaultColumns"
                                            :value="{
                                                text: 'Promocodes Amount',
                                                value: 'promocodesAmount'
                                            }"
                                            color="secondary"
                                            class="mt-0"
                                            hide-details
                                        >
                                            <template v-slot:label>
                                                <h4 class="subtitle-2">
                                                    Promocodes Amount
                                                </h4>
                                            </template>
                                        </v-checkbox>

                                        <v-checkbox
                                            v-model="tab.defaultColumns"
                                            :value="{
                                                text: 'Available',
                                                value: 'available'
                                            }"
                                            color="secondary"
                                            class="mt-0"
                                            hide-details
                                        >
                                            <template v-slot:label>
                                                <h4 class="subtitle-2">
                                                    Available
                                                </h4>
                                            </template>
                                        </v-checkbox>

                                        <v-row
                                            v-for="(column, i) in tab.columns"
                                            :key="column.text"
                                            no-gutters
                                            justify="space-between"
                                            align="center"
                                        >
                                            <span
                                                class="subtitle-2 text-capitalize"
                                                v-text="column.text"
                                            ></span>
                                            <v-tooltip right>
                                                <template
                                                    v-slot:activator="{ on }"
                                                >
                                                    <v-btn
                                                        color="red"
                                                        icon
                                                        v-on="on"
                                                        @click="
                                                            tab.columns.splice(
                                                                i,
                                                                1
                                                            )
                                                        "
                                                    >
                                                        <v-icon
                                                            v-text="
                                                                icons.mdiClose
                                                            "
                                                        ></v-icon>
                                                    </v-btn>
                                                </template>

                                                <span>Remove</span>
                                            </v-tooltip>
                                        </v-row>
                                    </v-col>
                                </v-row>

                                <v-row no-gutters>
                                    <v-col>
                                        <v-text-field
                                            v-model="column"
                                            label="Add Column"
                                            class="mt-2"
                                            outlined
                                            dense
                                            clearable
                                            hide-details
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="auto">
                                        <v-btn
                                            color="primary"
                                            class="mt-1"
                                            icon
                                            large
                                            @click="
                                                () => {
                                                    tab.columns.push({
                                                        text: column,
                                                        value: column
                                                    });
                                                    column = '';
                                                }
                                            "
                                        >
                                            <v-icon
                                                v-text="icons.mdiPlus"
                                                size="32"
                                            ></v-icon>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-card-text>

                            <v-divider></v-divider>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn text @click="tabDialog = false"
                                    >cancel</v-btn
                                >
                                <v-btn
                                    color="primary"
                                    width="80"
                                    @click="
                                        () => {
                                            tabs.push(tab);
                                            tabDialog = false;
                                        }
                                    "
                                    >save</v-btn
                                >
                            </v-card-actions>
                        </v-card>
                    </v-dialog>

                    <v-dialog
                        v-model="promocodeDialog"
                        max-width="40%"
                        scrollable
                    >
                        <v-card>
                            <v-card-title class="grey lighten-3">
                                <v-icon
                                    v-text="icons.mdiAutoFix"
                                    color="secondary"
                                    large
                                    class="mr-3"
                                ></v-icon
                                >New Promocode
                                <v-spacer></v-spacer>
                                <v-icon
                                    color="secondary"
                                    large
                                    v-text="icons.mdiPlus"
                                ></v-icon>
                            </v-card-title>

                            <v-card-text class="pt-7">
                                <v-text-field
                                    label="Promocode Code"
                                    outlined
                                    dense
                                    clearable
                                    hint="* This is the code that you can share in posters, documents and 
                                    internet. We suggest you to type something similar to your company name."
                                    persistent-hint
                                ></v-text-field>

                                <v-divider class="mt-3 mb-6"></v-divider>

                                <v-text-field
                                    label="Moves (RoadCube Points)"
                                    outlined
                                    dense
                                    clearable
                                ></v-text-field>

                                <v-text-field
                                    type="number"
                                    label="Vouchers Amount"
                                    outlined
                                    dense
                                    clearable
                                ></v-text-field>

                                <v-divider></v-divider>

                                <v-row no-gutters class="mt-3">
                                    <v-col cols="4">
                                        <h4 class="subtitle-2">
                                            Select the tab you want to show:
                                        </h4>
                                    </v-col>

                                    <v-col cols="8">
                                        <v-radio-group
                                            class="pa-0 mt-0"
                                            hide-details
                                        >
                                            <v-row no-gutters>
                                                <v-col cols="auto" class="pr-3">
                                                    <v-radio color="secondary">
                                                        <template v-slot:label>
                                                            <h4
                                                                class="subtitle-2"
                                                            >
                                                                All
                                                            </h4>
                                                        </template>
                                                    </v-radio>
                                                </v-col>

                                                <v-col
                                                    v-for="tab in tabs"
                                                    :key="tab.name"
                                                    cols="auto"
                                                    class="pr-3"
                                                >
                                                    <v-radio color="secondary">
                                                        <template v-slot:label>
                                                            <h4
                                                                class="subtitle-2"
                                                                v-text="
                                                                    tab.name
                                                                "
                                                            ></h4>
                                                        </template>
                                                    </v-radio>
                                                </v-col>
                                            </v-row>
                                        </v-radio-group>
                                    </v-col>
                                </v-row>

                                <v-checkbox
                                    v-model="createCoupon"
                                    color="secondary"
                                    class="font-italic"
                                    label="Fill in the following Voucher form if you want to create 
                                    and link a coupon to the promocode"
                                    hide-details
                                ></v-checkbox>

                                <v-divider class="mt-3 mb-5"></v-divider>

                                <template v-if="createCoupon">
                                    <v-text-field
                                        label="Title"
                                        outlined
                                        dense
                                        clearable
                                    ></v-text-field>

                                    <v-textarea
                                        label="Description"
                                        outlined
                                        clearable
                                    ></v-textarea>

                                    <v-row no-gutters>
                                        <v-col cols="6" class="subtitle-2"
                                            >Select stores to redeem</v-col
                                        >
                                        <v-col cols="6">
                                            <v-checkbox
                                                color="secondary"
                                                class="mt-0"
                                                hide-details
                                            >
                                                <template v-slot:label>
                                                    <h4 class="subtitle-2">
                                                        All
                                                    </h4>
                                                </template>
                                            </v-checkbox>

                                            <v-checkbox
                                                v-for="store in stores"
                                                :key="store"
                                                color="secondary"
                                                class="mt-0"
                                                hide-details
                                            >
                                                <template v-slot:label>
                                                    <h4
                                                        class="subtitle-2"
                                                        v-text="store"
                                                    ></h4>
                                                </template>
                                            </v-checkbox>
                                        </v-col>
                                    </v-row>

                                    <v-checkbox
                                        v-model="voucherImage"
                                        color="secondary"
                                    >
                                        <template v-slot:label>
                                            <h4
                                                class="subtitle-2 secondary--text"
                                            >
                                                I want an image to be displayed
                                                in voucher
                                            </h4>
                                        </template>
                                    </v-checkbox>

                                    <v-row v-if="voucherImage">
                                        <v-col cols="6">
                                            <v-img :src="voucher.image"></v-img>
                                        </v-col>
                                        <v-col cols="6">
                                            Choose an Image:
                                            <v-file-input
                                                outlined
                                                dense
                                                hide-details
                                                @change="onFileSelected"
                                            ></v-file-input>
                                        </v-col>
                                    </v-row>
                                </template>
                            </v-card-text>

                            <v-divider></v-divider>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn text @click="promocodeDialog = false"
                                    >cancel</v-btn
                                >
                                <v-btn color="primary" width="80">save</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-tab-item>

                <v-tab-item v-for="tab in tabs" :key="tab.name">
                    <v-data-table
                        :headers="tab.defaultColumns.concat(tab.columns)"
                    ></v-data-table>
                </v-tab-item>
            </v-tabs-items>
        </v-sheet>
    </v-container>
</template>

<script>
import {
    mdiPlus,
    mdiClose,
    mdiAutoFix,
    mdiMagnify,
    mdiPencilOutline,
    mdiCheck
} from "@mdi/js";

class Tab {
    constructor(tab = {}) {
        this.name = tab.name || "";
        this.defaultColumns = tab.defaultColumns || [
            { text: "Roadcodes", value: "roadcodes" }
        ];
        this.columns = tab.columns || [];
    }
}

export default {
    name: "Roadcodes",

    data: () => ({
        icons: {
            mdiPlus,
            mdiClose,
            mdiAutoFix,
            mdiMagnify,
            mdiPencilOutline,
            mdiCheck
        },
        tabIndex: 0,
        tabs: [],
        tabDialog: false,
        Tab,
        tab: {},
        column: "",
        promocodeDialog: false,
        createCoupon: false,
        voucherImage: false,
        voucher: {
            image: "",
            imageFile: null
        },
        stores: ["Katerina", "Pelataki", "Kainouria", "Neo Meo", "Dimitris"],
        headers: [
            { text: "Payment Code", value: "paymentCode" },
            { text: "Promocodes Ammount", value: "promocodesAmount" },
            { text: "Available", value: "available" },
            { text: "KAT", value: "kat" },
            { text: "Edit Promocode", value: "edit" }
        ],
        items: [
            {
                paymentCode: "testnikosa",
                promocodesAmount: "2",
                available: "2",
                kat: "10",
                status: "finished"
            },
            {
                paymentCode: "testnikosa",
                promocodesAmount: "2",
                available: "2",
                kat: "10",
                status: "ongoing"
            }
        ],
        itemsPerPageOptions: [10, 20, 30, -1]
    }),

    methods: {
        onFileSelected(event) {
            this.voucher.imageFile = event;
            const reader = new FileReader();
            reader.readAsDataURL(this.voucher.imageFile);
            reader.onload = e => (this.voucher.image = e.target.result);
        }
    }
};
</script>
