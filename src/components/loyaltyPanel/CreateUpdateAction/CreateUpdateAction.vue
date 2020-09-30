<template>
    <v-card>
        <v-card-title class="secondary white--text">
            New Action
            <v-spacer></v-spacer>
            <v-icon
                    dark
                    large
                    v-text="icons.mdiPlus"
            ></v-icon>
        </v-card-title>

        <v-card-text class="pt-7">
            <v-radio-group v-model="type">
                <v-row no-gutters>
                    <v-col cols="6">
                        <v-radio value="action 1 + 1">
                            <template v-slot:label>
                                <h4 class="subtitle-2">
                                    action 1 + 1
                                </h4>
                            </template>
                        </v-radio>
                    </v-col>
                    <v-col cols="6">
                        <v-radio value="sampling">
                            <template v-slot:label>
                                <h4 class="subtitle-2">sampling</h4>
                            </template>
                        </v-radio>
                    </v-col>
                </v-row>
            </v-radio-group>
            {{ typeText }}
            <v-card outlined class="mt-5 py-7">
                <v-row no-gutters justify="space-around">
                    <v-col cols="5">
                        <v-select
                                menu-props="offsetY"
                                label="Product for Sale"
                                color="secondary"
                                hide-details
                                outlined
                                dense
                        ></v-select>
                    </v-col>
                    <v-col cols="5">
                        <v-select
                                menu-props="offsetY"
                                label="Product for Gift"
                                color="secondary"
                                hide-details
                                outlined
                                dense
                        ></v-select>
                    </v-col>
                </v-row>
            </v-card>

            <v-card outlined class="mt-5 py-7">
                <v-row no-gutters justify="center">
                    <v-col cols="11">
                        <v-text-field
                                type="number"
                                label="How many for each company?"
                                color="secondary"
                                hide-details
                                outlined
                                dense
                                clearable
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-card>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="$emit('close')">cancel</v-btn>
            <v-btn color="secondary" width="80">save</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import { mdiPlus } from "@mdi/js";

    export default {
        name: "CreateUpdateAction",
        data: () => ({
            icons: {
                mdiPlus
            },
            type: "action 1 + 1",
        }),
        computed: {
            typeText() {
                return this.type === "action 1 + 1"
                    ? "To create a 1 + 1 Campaign you must declare 1 product for Buy and one to give it Free.Define products from the lists below"
                    : "To create a Sampling / Free Campaign, you must declare 1 product to serve as a sample";
            }
        }
    };
</script>

<style scoped>

</style>