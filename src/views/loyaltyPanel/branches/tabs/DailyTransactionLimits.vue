<template>
    <v-tab-item :value="$route.path">
        <v-toolbar flat height="80" class="my-3">
            <v-row class="d-flex justify-space-between align-center flex-wrap">
                <v-btn
                    color="secondary"
                    class="text-capitalize mb-2 mx-auto mx-sm-0"
                    depressed
                    @click="
                        () => {
                            mode = 1;
                            limitsDialog = true;
                        }
                    "
                    >general limits</v-btn
                >
                <v-col cols="12" sm="4" class="pa-0">
                    <b-search-field></b-search-field>
                </v-col>
            </v-row>
        </v-toolbar>

        <v-data-table
            :headers="headers"
            :items="items"
            :footer-props="{ itemsPerPageOptions }"
            class="b-outlined"
        >
            <template v-slot:item.offline_limits>
                <v-btn
                    color="secondary"
                    class="px-7"
                    small
                    depressed
                    @click="
                        () => {
                            mode = 2;
                            limitsDialog = true;
                        }
                    "
                >
                    20
                </v-btn>
            </template>
        </v-data-table>

        <v-dialog v-model="limitsDialog" max-width="600" scrollable>
            <LimitsForm
                :mode="mode"
                @cancel="limitsDialog = false"
                @submit="myFunc"
            />
        </v-dialog>
    </v-tab-item>
</template>

<script>
import { mdiMagnify } from "@mdi/js";
import { mapMutations } from "vuex";
import LimitsForm from "@/components/loyaltyPanel/branches/LimitsForm.vue";

export default {
    name: "DailyTransactionLimits",
    components: { LimitsForm },
    data: () => ({
        icons: { mdiMagnify },
        headers: [
            { text: "Name", value: "name" },
            {
                text: "Offline Transaction Limits",
                value: "offline_limits",
                align: "center"
            }
        ],
        items: [
            {
                name: "Vasilis"
            },
            {
                name: "Vasilis"
            },
            {
                name: "Vasilis"
            }
        ],
        itemsPerPageOptions: [10, 20, 30, -1],
        mode: 0,
        limitsDialog: false
    }),

    methods: {
        ...mapMutations("loyaltyPanel/branches", []),

        myFunc() {
            alert(5);
        }
    }
};
</script>
