<template>
    <b-standard-card
        title="Invoicing"
        submit-text="send invoice settings"
        :loading="loading"
        :error-message="errorMessage"
        @submit="updateInvoicing"
    >
        <v-row no-gutters>
            <v-col cols="6" class="pr-2">
                <b-text-field
                    v-model="invoicing.comp_name"
                    label="Legal Name"
                    no-top-margin
                ></b-text-field>
            </v-col>
            <v-col cols="6" class="pl-2">
                <b-text-field
                    v-model="invoicing.vat_number"
                    label="Tax Id"
                    no-top-margin
                ></b-text-field>
            </v-col>
            <v-col cols="6" class="pr-2">
                <b-text-field
                    v-model="invoicing.city"
                    label="Business Address"
                ></b-text-field>
            </v-col>
            <v-col cols="6" class="pl-2">
                <b-text-field
                    v-model="invoicing.occupation"
                    label="Profession"
                ></b-text-field>
            </v-col>
            <v-col cols="6" class="pr-2">
                <b-text-field
                    v-model="invoicing.tax_office"
                    label="Jurisdiction"
                ></b-text-field>
            </v-col>
            <v-col cols="6" class="pl-2">
                <b-text-field
                    v-model="invoicing.receipt_comp_name"
                    label="Receipt Company Name"
                ></b-text-field>
            </v-col>
            <v-col cols="6" class="pr-2">
                <b-select
                    v-model="invoicing.country_id"
                    :items="countries"
                    label="Invoice from"
                ></b-select>
            </v-col>
        </v-row>
    </b-standard-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "Invoicing",

    data: () => ({
        countries: [{ text: "Greece 24%", value: 1 }],
    }),

    computed: {
        loading() {
            return this.$store.state.storePanel.settings.profile.loading
                .invoicing;
        },

        errorMessage() {
            return this.$store.state.storePanel.settings.profile.errorMessage
                .invoicing;
        },

        invoicing() {
            return this.$store.state.storePanel.store.billing_details;
        },
    },

    methods: {
        ...mapActions("storePanel/settings/profile", ["updateInvoicing"]),
    },
};
</script>
