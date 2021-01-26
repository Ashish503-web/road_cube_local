<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-row
                    no-gutters
                    justify="space-between"
                    align="center"
                    class="pr-4"
            >
                <v-col cols="auto">
                    <v-tabs
                            :vertical="$vuetify.breakpoint.smAndDown"
                            v-model="tabIndex"
                            color="black">
                        <v-tab class="text-capitalize text-left d-flex justify-start justify-sm-center px-3">All</v-tab>
                        <v-tab
                                v-for="tab in tabs"
                                :key="tab.name"
                                v-text="tab.name"
                                class="text-capitalize text-left d-flex justify-start justify-sm-center px-3"
                        ></v-tab>
                        <v-btn
                                color="black"
                                class="text-capitalize text-left d-flex justify-start justify-sm-center px-3"
                                text
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
                >add promocode
                </v-btn
                >
            </v-row>

            <v-tabs-items v-model="tabIndex">
                <v-tab-item>
                    <v-toolbar flat height="80">
                        <v-spacer></v-spacer>
                        <v-col cols="12" sm="4" class="pa-0">
                            <v-text-field
                                    label="Search"
                                    color="secondary"
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
                            class="b-outlined"
                    >
                        <template v-slot:item.edit="{ item }">
                            <v-tooltip
                                    v-if="item.status === 'finished'"
                                    color="secondary"
                                    top
                            >
                                <template v-slot:activator="{ on }">
                                    <v-icon
                                            color="success"
                                            v-text="icons.mdiCheck"
                                            v-on="on"
                                    ></v-icon>
                                </template>

                                <span class="font-weight-bold">Finished</span>
                            </v-tooltip>

                            <v-tooltip v-else color="secondary" top>
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

                                <span class="font-weight-bold">Update</span>
                            </v-tooltip>
                        </template>
                    </v-data-table>

                    <v-dialog v-model="tabDialog" :max-width="$vuetify.breakpoint.smAndDown ? '90%' : '30%'" scrollable>
                        <AddTabForm @close="tabDialog=false"/>
                    </v-dialog>

                    <v-dialog
                            v-model="promocodeDialog"
                            :max-width="$vuetify.breakpoint.smAndDown ? '90%' : '40%'"
                            scrollable
                    >
                        <PromocodeForm @close="promocodeDialog=false"/>
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
    import AddTabForm from "../../components/loyaltyPanel/roadcodes/AddTabForm";
    import PromocodeForm from "../../components/loyaltyPanel/roadcodes/PromocodeForm";

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
        components: { PromocodeForm, AddTabForm },
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
        })


    };
</script>
