<template>
    <v-card class="rounded-lg" outlined>
        <v-card-title class="grey lighten-3">
            <v-col cols="10" class="pa-0">
                Point Delivery
                <br />
                <span class="font-weight-light">
                    {{ pointDelivery ? "(Active)" : "(Inactive)" }}
                </span>
            </v-col>

            <v-col cols="2" class="pa-0">
                <v-switch
                    v-model="pointDelivery"
                    color="secondary"
                    class="pt-0 mb-2 mt-1"
                ></v-switch>
            </v-col>
        </v-card-title>

        <v-card-text class="pt-5">
            <v-row no-gutters>
                <v-col cols="auto">
                    <v-icon
                        color="secondary"
                        v-text="icons.mdiInformation"
                    ></v-icon>
                </v-col>

                <v-col cols="11" class="pl-1">
                    You will be able to use the Point Score via a Point Device
                    connected to your store.

                    <v-checkbox
                        color="secondary"
                        class="pt-0 mt-1"
                        hide-details
                    >
                        <template v-slot:label>
                            <h4 class="subtitle-2">
                                Show amount in POS
                            </h4>
                        </template>
                    </v-checkbox>

                    <v-checkbox
                        color="secondary"
                        class="pt-0 mt-1"
                        hide-details
                    >
                        <template v-slot:label>
                            <h4 class="subtitle-2">
                                Serial Shopping mode in POS
                            </h4>
                        </template>
                    </v-checkbox>
                </v-col>
            </v-row>
        </v-card-text>

        <v-card-actions class="pl-4">
            <v-btn color="secondary" class="text-capitalize" depressed
                >update details</v-btn
            >
        </v-card-actions>
    </v-card>
</template>

<script>
import { mdiInformation } from "@mdi/js";

export default {
    name: "PointDelivery",

    data: () => ({
        icons: { mdiInformation },
        pointDelivery: true
    })
};
</script>
