<template>
    <b-standard-card
        title="Scan Receipt"
        activatable
        :switcher.sync="scanReceipt"
        :loading="loading"
        :error-message="errorMessage"
        @submit="
            updateReward({
                type: 'scanReceipt',
                item: {
                    scan_receipt: scanReceipt,
                    receipt_phone: billingDetails.receipt_phone,
                    receipt_vat_number: billingDetails.receipt_vat_number,
                    receipt_address: billingDetails.receipt_address,
                    receipt_comp_name: billingDetails.receipt_comp_name
                }
            })
        "
    >
        <v-row no-gutters>
            <v-col cols="auto">
                <v-icon
                    color="secondary"
                    v-text="icons.mdiInformation"
                ></v-icon>
            </v-col>
            <v-col cols="11" class="pl-1">
                Once activated, your customers will be able to scan the receipts
                from your store.
            </v-col>

            <v-col cols="6" class="pr-1">
                <b-text-field
                    v-model="billingDetails.receipt_phone"
                    :readonly="!scanReceipt"
                    type="number"
                    label="Business Telephone Number"
                ></b-text-field>
            </v-col>

            <v-col cols="6" class="pl-1">
                <b-text-field
                    v-model="billingDetails.receipt_vat_number"
                    :readonly="!scanReceipt"
                    type="number"
                    label="Vat Number"
                ></b-text-field>
            </v-col>

            <v-col cols="6" class="pr-1">
                <b-text-field
                    v-model="billingDetails.receipt_address"
                    :readonly="!scanReceipt"
                    label="Business Address"
                ></b-text-field>
            </v-col>

            <v-col cols="6" class="pl-1">
                <b-text-field
                    v-model="billingDetails.receipt_comp_name"
                    :readonly="!scanReceipt"
                    label="Business name"
                ></b-text-field>
            </v-col>
        </v-row>
    </b-standard-card>
</template>

<script>
import { mdiInformation } from "@mdi/js";
import { mapActions, mapMutations } from "vuex";

export default {
    name: "ScanReceipt",

    data: () => ({
        icons: { mdiInformation }
    }),

    computed: {
        loading() {
            return this.$store.state.storePanel.settings.reward.loading
                .scanReceipt;
        },

        errorMessage() {
            return this.$store.state.storePanel.settings.reward.errorMessage
                .scanReceipt;
        },

        scanReceipt: {
            get() {
                return this.$store.state.storePanel.store.flags.reward
                    .scan_receipt;
            },

            set(val) {
                this.setScanReceipt(val);
            }
        },

        billingDetails() {
            return this.$store.state.storePanel.store.billing_details;
        }
    },

    methods: {
        ...mapMutations("storePanel", ["setScanReceipt"]),
        ...mapActions("storePanel/settings/reward", ["updateReward"])
    }
};
</script>
