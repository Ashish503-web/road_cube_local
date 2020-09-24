<template>
    <v-card outlined>
        <v-card-title class="grey lighten-3">
            <v-col cols="10" class="pa-0">
                Send points by card or phone number
                <br />
                <span class="font-weight-light">
                    {{ sendPoints ? "(Active)" : "(Inactive)" }}
                </span>
            </v-col>

            <v-col cols="2" class="pa-0">
                <v-switch
                    v-model="sendPoints"
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
                    You will be able to use the donation from the New
                    Transaction page

                    <h4 class="subtitle-2 mt-3">
                        How to notify a consumer of points
                    </h4>

                    <v-select
                        :items="[
                            'Sms 1/month',
                            'Sms every time',
                            'Push',
                            'Email'
                        ]"
                        menu-props="offsetY"
                        color="secondary"
                        item-color="secondary"
                        outlined
                        dense
                        hide-details
                    ></v-select>

                    <v-checkbox
                        color="secondary"
                        class="pt-0 mt-1"
                        hide-details
                    >
                        <template v-slot:label>
                            <h4 class="subtitle-2">
                                Ability to add a user to "Send points"
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
                                Ability to select products in "Send points"
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
                                Show receipt code in "Send points"
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
    name: "SendPoints",

    data: () => ({
        icons: {
            mdiInformation
        },
        sendPoints: true
    })
};
</script>
