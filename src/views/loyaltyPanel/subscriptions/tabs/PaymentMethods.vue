<template>
    <v-tab-item>
        <v-container>
            <v-row class="mb-6 " no-gutters>
                <v-col cols="12" class="pb-4 mb-3">
                    <v-btn color="secondary" class="text-capitalize" depressed
                        >Add payment method
                    </v-btn>
                </v-col>
                <v-col cols="12">
                    <hr />
                </v-col>
                <v-col class="border_top_payments_title  mt-3" cols="12">
                    <v-card
                        class="pa-2 grey lighten-5 text-center "
                        outlined
                        tile
                    >
                        <h3>IBAN</h3>
                        <img
                            src="https://www.roadcube.com//images/payments/iban.png"
                            alt=""
                            width="100"
                        />
                    </v-card>
                </v-col>
            </v-row>
            <v-row class="mb-6 " no-gutters>
                <v-col cols="12" lg="2" md="3" sm="6" class="border_top_payment">
                    <v-card
                        class="pa-2 grey lighten-5 text-center"
                        outlined
                        tile
                    >
                        <v-icon
                            v-text="icons.mdiOfficeBuildingOutline"
                            size="14"
                            color="#eaedf1"
                            class="mr-sm-5 build_icon"
                        ></v-icon>
                        <v-icon
                            v-text="icons.mdiClose"
                            size="14"
                            color="#eaedf1"
                            class="mr-sm-5 close_icon"
                        ></v-icon>
                        <img
                            src="https://www.roadcube.com/images/payments/peiraeus.png"
                            alt=""
                            width="120"
                        />
                        <v-card-subtitle>Πειραιώς</v-card-subtitle>
                        <v-card-text>
                            <div class="text-decoration-underline">
                                ΟΝΟΜΑ AAA
                            </div>
                            <div class="text-decoration-underline">IBAN EE</div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-tab-item>
</template>

<script>
import { mdiMagnify, mdiOfficeBuildingOutline, mdiClose } from "@mdi/js";

export default {
    name: "Pending",
    data: () => ({
        icons: {
            mdiMagnify,
            mdiOfficeBuildingOutline,
            mdiClose
        },
        headers: [
            { text: "Name", value: "name" },
            { text: "Type", value: "type" },
            { text: "Description", value: "description" },
            { text: "Amount/Rate", value: "amountRate" },
            { text: "Points", value: "points" },
            { text: "Check in points", value: "checkPoints" },
            { text: "Visible", value: "visible" },
            { text: "Payment Methods", value: "paymentMethods" },
            { text: "Companies", value: "companies" },
            { text: "Delete", value: "delete" }
        ],
        itemsPerPageOptions: [10, 20, 30, -1]
    })
};
</script>
<style scoped>
.border_top_payments_title {
    border-top: 2px solid #018f6742;
}

.border_top_payment {
    border-top: 3px solid #ffee05;
}

.build_icon {
    position: absolute;
    left: 0;
    top: 0;
    color: black !important;
}
.close_icon {
    position: absolute;
    right: -15px;
    top: 0;
    color: black !important;
}
</style>
