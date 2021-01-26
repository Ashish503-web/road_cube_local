<template>
    <b-card
        title="Analytical Report"
        submit-text="Download Excel"
        @cancel="$emit('cancel')"
    >
        <v-row no-gutters>
            <v-col cols="6" class="pr-2">
                <b-text-field
                    v-model="pickedDates[0]"
                    label="Start Date"
                    no-top-margin
                    readonly
                    append-icon="mdiCalendarMonth"
                ></b-text-field>
            </v-col>

            <v-col cols="6" class="pl-2">
                <b-text-field
                    v-model="pickedDates[1]"
                    label="End Date"
                    no-top-margin
                    readonly
                    append-icon="mdiCalendarMonth"
                ></b-text-field>
            </v-col>
        </v-row>

        <v-date-picker
            v-model="pickedDates"
            color="secondary"
            class="b-outlined mt-3"
            range
            scrollable
            full-width
            no-title
            hide-details
        ></v-date-picker>
    </b-card>
</template>

<script>
export default {
    name: "AnaliticalReportForm",

    data: () => ({
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
