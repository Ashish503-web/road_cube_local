<template>
    <v-card class="mt-5" outlined>
        <v-card-title class="grey lighten-3">
            <v-col cols="10" class="pa-0">
                Reward with presence in the store
                <br />
                <span class="font-weight-light">
                    {{ rewardWithPresence ? "(Active)" : "(Inactive)" }}
                </span>
            </v-col>

            <v-col cols="2" class="pa-0">
                <v-switch
                    v-model="rewardWithPresence"
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
                    Win points only with the presence of the customer in the
                    store.
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
import { mdiInformation } from "@mdi/js";

export default {
    name: "RewardWithPresence",

    data: () => ({
        icons: { mdiInformation },
        rewardWithPresence: true
    })
};
</script>
