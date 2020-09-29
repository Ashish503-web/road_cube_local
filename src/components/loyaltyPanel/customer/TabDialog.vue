<template>
    <v-dialog v-model="tabDialog" max-width="600" scrollable>
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
                            label="New Tab Title"
                            color="secondary"
                            outlined
                            dense
                            clearable
                            hide-details
                        ></v-text-field>
                    </v-col>
                    <v-col cols="6" class="pl-2">
                        <v-text-field
                            label="User Filters"
                            color="secondary"
                            outlined
                            dense
                            clearable
                            hide-details
                        ></v-text-field>
                    </v-col>

                    <v-col cols="6" class="pr-2">
                        <v-select
                            :items="operators"
                            menu-props="offsetY"
                            label="Operator"
                            color="secondary"
                            item-color="secondary"
                            class="mt-3"
                            outlined
                            dense
                            hide-details
                        ></v-select>
                    </v-col>

                    <v-col cols="6" class="pl-2">
                        <v-menu offset-y>
                            <template v-slot:activator="{ on }">
                                <v-text-field
                                    v-model="registrationDate"
                                    label="Registration Date"
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
                                v-model="registrationDate"
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
                        <v-select
                            :items="operators"
                            menu-props="offsetY"
                            label="Operator"
                            color="secondary"
                            item-color="secondary"
                            class="mt-3"
                            outlined
                            dense
                            hide-details
                        ></v-select>
                    </v-col>

                    <v-col cols="6" class="pl-2">
                        <v-text-field
                            label="Transactions Filters"
                            color="secondary"
                            class="mt-3"
                            outlined
                            dense
                            clearable
                            hide-details
                        ></v-text-field>
                    </v-col>

                    <v-col cols="6" class="pr-2">
                        <v-select
                            :items="operators"
                            menu-props="offsetY"
                            label="Operator"
                            color="secondary"
                            item-color="secondary"
                            class="mt-3"
                            outlined
                            dense
                            hide-details
                        ></v-select>
                    </v-col>

                    <v-col cols="6" class="pl-2">
                        <v-text-field
                            label="Total Transaction Amount"
                            color="secondary"
                            class="mt-3"
                            outlined
                            dense
                            clearable
                            hide-details
                        ></v-text-field>
                    </v-col>

                    <v-col cols="6" class="pr-2">
                        <v-select
                            :items="operators"
                            menu-props="offsetY"
                            label="Operator"
                            color="secondary"
                            item-color="secondary"
                            class="mt-3"
                            outlined
                            dense
                            hide-details
                        ></v-select>
                    </v-col>

                    <v-col cols="6" class="pl-2">
                        <v-text-field
                            label="Point Filters"
                            color="secondary"
                            class="mt-3"
                            outlined
                            dense
                            clearable
                            hide-details
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                        <v-divider class="mt-3"></v-divider>
                        <h4 class="mt-3">
                            Choose columns you want to be visible:
                        </h4>

                        <v-row no-gutters>
                            <v-col
                                v-for="column in columns"
                                :key="column"
                                cols="4"
                            >
                                <v-checkbox
                                    color="secondary"
                                    class="mt-1 pa-0"
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

                <v-btn text @click="tabDialog = false">cancel</v-btn>
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
        operators: [
            "Greater Than",
            "Less Than",
            "Greater or Equal",
            "Less or Equal",
            "Equal"
        ],
        registrationDate: "",
        genders: ["Male", "Female", "Both"],
        columns: [
            "ID",
            "Phone Number",
            "Registration Date",
            "Transactions Number",
            "Amount Transaction",
            "Gender",
            "Points"
        ]
    }),

    computed: {
        title() {
            return this.mode === 1 ? "New Tab" : "Update Tab";
        },

        mode: {
            get() {
                return this.$store.state.loyaltyPanel.customer.mode;
            },

            set(val) {
                this.setMode(val);
            }
        },

        tabDialog: {
            get() {
                return this.$store.state.loyaltyPanel.customer.tabDialog;
            },

            set(val) {
                this.setTabDialog(val);
            }
        }
    },

    methods: {
        ...mapMutations("loyaltyPanel/customer", ["setMode", "setTabDialog"])
    }
};
</script>
