<template>
    <v-tab-item>
        <v-toolbar flat height="80">
            <v-btn
                color="secondary"
                class="text-capitalize"
                depressed
                @click="
                    () => {
                        mode = 1;
                        limitsDialog = true;
                    }
                "
                >general limits</v-btn
            >

            <v-spacer></v-spacer>

            <v-col cols="4">
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

        <LimitsDialog />
    </v-tab-item>
</template>

<script>
import { mdiMagnify } from "@mdi/js";
import { mapMutations } from "vuex";
import LimitsDialog from "@/components/loyaltyPanel/Branches/LimitsDialog.vue";

export default {
    name: "DailyTransactionLimits",
    components: { LimitsDialog },
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
        itemsPerPageOptions: [10, 20, 30, -1]
    }),

    computed: {
        mode: {
            get() {
                return this.$store.state.loyaltyPanel.branches.mode;
            },

            set(val) {
                this.setMode(val);
            }
        },

        limitsDialog: {
            get() {
                return this.$store.state.loyaltyPanel.branches.limitsDialog;
            },

            set(val) {
                this.setLimitsDialog(val);
            }
        }
    },

    methods: {
        ...mapMutations("loyaltyPanel/branches", ["setMode", "setLimitsDialog"])
    }
};
</script>
