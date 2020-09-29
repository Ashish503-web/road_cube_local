<template>
    <v-dialog v-model="limitsDialog" max-width="600">
        <v-card>
            <v-card-title class="grey lighten-3">
                {{ title }}
                <v-spacer></v-spacer>
                <v-icon
                    color="secondary"
                    large
                    v-text="icons.mdiBankTransfer"
                ></v-icon>
            </v-card-title>

            <v-divider></v-divider>

            <v-card-text class="py-10">
                <v-row no-gutters>
                    <v-col cols="3" class="pr-1">
                        <v-select
                            v-model="status"
                            :items="['Offline']"
                            menu-props="offsetY"
                            color="secondary"
                            item-color="secondary"
                            outlined
                            dense
                            hide-details
                        ></v-select>
                    </v-col>
                    <v-col cols="6" class="px-1">
                        <v-text-field
                            label="Daily Transaction Limits"
                            color="secondary"
                            outlined
                            dense
                            clearable
                            hide-details
                        ></v-text-field>
                    </v-col>
                    <v-col cols="3" class="pl-1">
                        <v-select
                            v-model="currency"
                            :items="['Euro', 'Points']"
                            menu-props="offsetY"
                            color="secondary"
                            item-color="secondary"
                            outlined
                            dense
                            hide-details
                        ></v-select>
                    </v-col>
                </v-row>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn text @click="limitsDialog = false">cancel</v-btn>
                <v-btn color="secondary" dark class="px-5" depressed>
                    save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mdiBankTransfer } from "@mdi/js";
import { mapMutations } from "vuex";

export default {
    name: "LimitsDialog",
    data: () => ({
        icons: { mdiBankTransfer },
        status: "Offline",
        currency: "Euro",
        company: {
            name: "Vasilis"
        }
    }),

    computed: {
        title() {
            return this.mode === 1
                ? `Change Transaction Limits For All Companies`
                : `Change Transaction Limits For Company ${this.company.name}`;
        },

        mode() {
            return this.$store.state.loyaltyPanel.branches.mode;
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
        ...mapMutations("loyaltyPanel/branches", ["setLimitsDialog"])
    }
};
</script>
