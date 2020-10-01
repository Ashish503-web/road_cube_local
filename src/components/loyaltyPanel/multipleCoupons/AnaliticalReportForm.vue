<template>
    <v-card>
        <v-card-title class="secondary white--text"
        >Analytical Report
        </v-card-title
        >

        <v-card-text class="pt-7">
            <v-row justify="space-between">
                <v-col cols="6">
                    <v-text-field
                            v-model="pickedDates[0]"
                            label="Start Date"
                            outlined
                            dense
                            color="secondary"
                            hide-details
                            class="mb-3"
                            readonly
                            :append-icon="icons.mdiCalendarMonth"
                    ></v-text-field>
                </v-col>

                <v-col cols="6">
                    <v-text-field
                            v-model="pickedDates[1]"
                            label="End Date"
                            outlined
                            dense
                            color="secondary"
                            hide-details
                            class="mb-3"
                            readonly
                            :append-icon="icons.mdiCalendarMonth"
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-date-picker
                    v-model="pickedDates"
                    class="b-outlined"
                    range
                    scrollable
                    full-width
                    no-title
                    color="secondary"
                    hide-details
            ></v-date-picker>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="$emit('close')"
            >cancel
            </v-btn
            >
            <v-btn color="secondary">download excel</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import { mdiCalendarMonth } from "@mdi/js";

    export default {
        name: "AnaliticalReportForm",
        data: () => ({
            icons: { mdiCalendarMonth },
            pickedDates: []
        }),
        methods: {
            onFileSelected(event) {
                this.voucher.imageFile = event;
                const reader = new FileReader();
                reader.readAsDataURL(this.voucher.imageFile);
                reader.onload = e => (this.voucher.image = e.target.result);
            }
        },
        watch: {
            pickedDates(val) {
                if (val[0] > val[1]) {
                    let holder = val[0];
                    val[0] = val[1];
                    val[1] = holder;
                }
            }
        }
    };
</script>

<style scoped>

</style>