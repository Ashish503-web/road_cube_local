<template>
    <v-card>
        <v-card-title class="grey lighten-3">
            New Tab
            <v-spacer></v-spacer>
            <v-icon
                    color="secondary"
                    large
                    v-text="icons.mdiPlus"
            ></v-icon>
        </v-card-title>

        <v-card-text class="pt-7">
            <v-text-field
                    v-model="tab.name"
                    label="New Tab"
                    outlined
                    dense
                    clearable
                    hide-details
            ></v-text-field>

            <v-row no-gutters class="mt-1" justify="center">
                <v-col cols="auto">
                    <v-checkbox
                            v-model="tab.defaultColumns"
                            :value="{
                                                text: 'Roadcodes',
                                                value: 'roadcodes'
                                            }"
                            color="secondary"
                            readonly
                            class="mt-0"
                            hide-details
                    >
                        <template v-slot:label>
                            <h4 class="subtitle-2">
                                Roadcodes
                            </h4>
                        </template>
                    </v-checkbox>

                    <v-checkbox
                            v-model="tab.defaultColumns"
                            :value="{
                                                text: 'Phone Number',
                                                value: 'phoneNumber'
                                            }"
                            color="secondary"
                            class="mt-0"
                            hide-details
                    >
                        <template v-slot:label>
                            <h4 class="subtitle-2">
                                Phone Number
                            </h4>
                        </template>
                    </v-checkbox>

                    <v-checkbox
                            v-model="tab.defaultColumns"
                            :value="{
                                                text: 'Promocodes Amount',
                                                value: 'promocodesAmount'
                                            }"
                            color="secondary"
                            class="mt-0"
                            hide-details
                    >
                        <template v-slot:label>
                            <h4 class="subtitle-2">
                                Promocodes Amount
                            </h4>
                        </template>
                    </v-checkbox>

                    <v-checkbox
                            v-model="tab.defaultColumns"
                            :value="{
                                                text: 'Available',
                                                value: 'available'
                                            }"
                            color="secondary"
                            class="mt-0"
                            hide-details
                    >
                        <template v-slot:label>
                            <h4 class="subtitle-2">
                                Available
                            </h4>
                        </template>
                    </v-checkbox>

                    <v-row
                            v-for="(column, i) in tab.columns"
                            :key="column.text"
                            no-gutters
                            justify="space-between"
                            align="center"
                    >
                                            <span
                                                    class="subtitle-2 text-capitalize"
                                                    v-text="column.text"
                                            ></span>
                        <v-tooltip right>
                            <template
                                    v-slot:activator="{ on }"
                            >
                                <v-btn
                                        color="red"
                                        icon
                                        v-on="on"
                                        @click="
                                                            tab.columns.splice(
                                                                i,
                                                                1
                                                            )
                                                        "
                                >
                                    <v-icon
                                            v-text="
                                                                icons.mdiClose
                                                            "
                                    ></v-icon>
                                </v-btn>
                            </template>

                            <span>Remove</span>
                        </v-tooltip>
                    </v-row>
                </v-col>
            </v-row>

            <v-row no-gutters>
                <v-col>
                    <v-text-field
                            v-model="column"
                            label="Add Column"
                            class="mt-2"
                            outlined
                            dense
                            clearable
                            hide-details
                    ></v-text-field>
                </v-col>
                <v-col cols="auto">
                    <v-btn
                            color="primary"
                            class="mt-1"
                            icon
                            large
                            @click="
                                                () => {
                                                    tab.columns.push({
                                                        text: column,
                                                        value: column
                                                    });
                                                    column = '';
                                                }
                                            "
                    >
                        <v-icon
                                v-text="icons.mdiPlus"
                                size="32"
                        ></v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="$emit('close')">cancel</v-btn>
            <v-btn
                    color="secondary"
                    width="80"
                    @click="
                                        () => {
                                            tabs.push(tab);
                                            $emit('close')
                                        }
                                    "
            >save
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import { mdiAutoFix, mdiPlus, mdiClose } from "@mdi/js";
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
        name: "AddNewTabDialog",
        data: () => ({
            icons: {
                mdiPlus,
                mdiAutoFix,
                mdiClose
            },
            tab: {},
            column: "",
            tabs: [],
            Tab
        })
    };
</script>

<style scoped>

</style>