<template>
    <v-dialog v-model="customerDialog" max-width="600" scrollable>
        <v-card>
            <v-card-title class="secondary white--text">
                {{ title }}
                <v-spacer></v-spacer>
                <v-icon
                    dark
                    large
                    v-text="mode === 1 ? icons.mdiPlus : icons.mdiPencilOutline"
                ></v-icon>
            </v-card-title>

            <v-divider></v-divider>

            <v-card-text class="pt-5">
                <v-row no-gutters>
                    <v-col cols="6" class="pr-2">
                        <v-text-field
                            label="Card Number"
                            color="secondary"
                            outlined
                            dense
                            clearable
                            hide-details
                        ></v-text-field>
                    </v-col>
                    <v-col cols="6" class="pl-2">
                        <v-autocomplete
                            menu-props="offsetY"
                            label="Company Name"
                            color="secondary"
                            outlined
                            dense
                            clearable
                            open-on-clear
                            hide-details
                        ></v-autocomplete>
                    </v-col>

                    <v-col cols="6" class="pr-2">
                        <v-text-field
                            label="Name"
                            color="secondary"
                            class="mt-3"
                            outlined
                            dense
                            clearable
                            hide-details
                        ></v-text-field>
                    </v-col>

                    <v-col cols="6" class="pl-2">
                        <v-text-field
                            label="Surname"
                            color="secondary"
                            class="mt-3"
                            outlined
                            dense
                            clearable
                            hide-details
                        ></v-text-field>
                    </v-col>

                    <v-col cols="6" class="pr-2">
                        <v-menu offset-y>
                            <template v-slot:activator="{ on }">
                                <v-text-field
                                    v-model="birthday"
                                    label="Date of Birth"
                                    color="secondary"
                                    class="mt-3"
                                    outlined
                                    dense
                                    hide-details
                                    :append-icon="icons.mdiCalendarMonth"
                                    v-on="on"
                                ></v-text-field>
                            </template>

                            <v-date-picker
                                v-model="birthday"
                                color="secondary"
                            ></v-date-picker>
                        </v-menu>
                    </v-col>

                    <v-col cols="12">
                        <v-divider class="mt-3"></v-divider>

                        <h4 class="mt-3">Gender</h4>

                        <v-radio-group class="mt-1 pa-0" hide-details>
                            <v-row no-gutters>
                                <v-col
                                    v-for="gender in genders"
                                    :key="gender"
                                    cols="auto"
                                    class="pr-3"
                                >
                                    <v-radio color="secondary">
                                        <template v-slot:label>
                                            <h4
                                                class="subtitle-2"
                                                v-text="gender"
                                            ></h4>
                                        </template>
                                    </v-radio>
                                </v-col>
                            </v-row>
                        </v-radio-group>

                        <v-divider class="mt-3"></v-divider>
                    </v-col>

                    <v-col cols="6" class="pr-2">
                        <v-autocomplete
                            menu-props="offsetY"
                            label="Address"
                            color="secondary"
                            class="mt-3"
                            outlined
                            dense
                            clearable
                            open-on-clear
                            hide-details
                        ></v-autocomplete>
                    </v-col>

                    <v-col cols="6" class="pl-2">
                        <v-text-field
                            type="number"
                            label="T.K"
                            color="secondary"
                            class="mt-3"
                            outlined
                            dense
                            clearable
                            hide-details
                        ></v-text-field>
                    </v-col>

                    <v-col cols="6" class="pr-2">
                        <v-autocomplete
                            menu-props="offsetY"
                            label="Area / City"
                            color="secondary"
                            class="mt-3"
                            outlined
                            dense
                            clearable
                            open-on-clear
                            hide-details
                        ></v-autocomplete>
                    </v-col>

                    <v-col cols="6" class="pl-2">
                        <v-text-field
                            type="number"
                            label="Country Code"
                            color="secondary"
                            class="mt-3"
                            outlined
                            dense
                            clearable
                            hide-details
                        ></v-text-field>
                    </v-col>

                    <v-col cols="6" class="pr-2">
                        <v-text-field
                            type="number"
                            label="Cellphone Number"
                            color="secondary"
                            class="mt-3"
                            outlined
                            dense
                            clearable
                            hide-details
                        ></v-text-field>
                    </v-col>

                    <v-col cols="6" class="pl-2">
                        <v-text-field
                            type="number"
                            label="Telephone Number"
                            color="secondary"
                            class="mt-3"
                            outlined
                            dense
                            clearable
                            hide-details
                        ></v-text-field>
                    </v-col>

                    <v-col cols="6" class="pr-2">
                        <v-text-field
                            type="email"
                            label="Email"
                            color="secondary"
                            class="mt-3"
                            outlined
                            dense
                            clearable
                            hide-details
                        ></v-text-field>
                    </v-col>

                    <v-col cols="6" class="pl-2">
                        <v-menu offset-y>
                            <template v-slot:activator="{ on }">
                                <v-text-field
                                    v-model="applicationDate"
                                    label="Application Date"
                                    color="secondary"
                                    class="mt-3"
                                    outlined
                                    dense
                                    hide-details
                                    :append-icon="icons.mdiCalendarMonth"
                                    v-on="on"
                                ></v-text-field>
                            </template>

                            <v-date-picker
                                v-model="applicationDate"
                                color="secondary"
                            ></v-date-picker>
                        </v-menu>
                    </v-col>

                    <v-col cols="12">
                        <v-divider class="mt-3"></v-divider>

                        <v-checkbox
                            v-model="receiveNews"
                            color="secondary"
                            class="mt-3 pa-0"
                            hide-details
                        >
                            <template v-slot:label>
                                <h4 class="subtitle-2">
                                    I wish to receive news & offers from
                                    katerina
                                </h4>
                            </template>
                        </v-checkbox>

                        <v-row no-gutters>
                            <v-col
                                v-for="column in columns"
                                :key="column"
                                cols="auto"
                                class="pr-3"
                            >
                                <v-checkbox
                                    color="secondary"
                                    class="mt-1 pa-0"
                                    :class="{ 'not-allowed': !receiveNews }"
                                    :readonly="!receiveNews"
                                    hide-details
                                >
                                    <template v-slot:label>
                                        <h4
                                            class="subtitle-2"
                                            v-text="column"
                                        ></h4>
                                    </template>
                                </v-checkbox>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn text @click="customerDialog = false">cancel</v-btn>
                <v-btn color="secondary" class="px-5" depressed>
                    save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mdiPlus, mdiPencilOutline, mdiCalendarMonth } from "@mdi/js";
import { mapMutations } from "vuex";

export default {
    name: "TabDialog",

    data: () => ({
        icons: { mdiPlus, mdiPencilOutline, mdiCalendarMonth },
        birthday: "",
        applicationDate: "",
        genders: ["Male", "Female"],
        columns: ["SMS", "Mail", "Push", "Viber"],
        receiveNews: false
    }),

    computed: {
        title() {
            return this.mode === 1 ? "New Customer" : "Update Customer";
        },

        mode: {
            get() {
                return this.$store.state.loyaltyPanel.customer.mode;
            },

            set(val) {
                this.setMode(val);
            }
        },

        customerDialog: {
            get() {
                return this.$store.state.loyaltyPanel.customer.customerDialog;
            },

            set(val) {
                this.setCustomerDialog(val);
            }
        }
    },

    methods: {
        ...mapMutations("loyaltyPanel/customer", [
            "setMode",
            "setCustomerDialog"
        ])
    }
};
</script>

<style>
.not-allowed input {
    cursor: not-allowed;
}

.not-allowed .v-input--selection-controls__ripple {
    cursor: not-allowed;
}
</style>
