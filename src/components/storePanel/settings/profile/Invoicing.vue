<template>
    <b-standard-card
        :title="translations.title[lang]"
        :submit-text="{ el: '', en: 'send invoice settings', it: '' }"
        :loading="loading"
        :error-message="errorMessage"
        @submit="
            updateInvoicing({
                type: 'invoicing',
                item: invoicing
            })
        "
    >
        <v-row no-gutters>
            <v-col cols="12" sm="6" class="pr-0 pr-sm-2">
                <b-text-field
                    v-model="invoicing.comp_name"
                    :label="translations.name[lang]"
                    no-top-margin
                ></b-text-field>
            </v-col>
            <v-col cols="12" sm="6" class="pl-0 pl-sm-2">
                <b-text-field
                    v-model="invoicing.vat_number"
                    :label="translations.taxId[lang]"
                    no-top-margin
                ></b-text-field>
            </v-col>
            <v-col cols="12" sm="6" class="pr-0 pr-sm-2">
                <b-text-field
                    v-model="invoicing.city"
                    :label="translations.address[lang]"
                ></b-text-field>
            </v-col>
            <v-col cols="12" sm="6" class="pl-0 pl-sm-2">
                <b-text-field
                    v-model="invoicing.occupation"
                    :label="translations.profession[lang]"
                ></b-text-field>
            </v-col>
            <v-col cols="12" sm="6" class="pr-0 pr-sm-2">
                <b-text-field
                    v-model="invoicing.tax_office"
                    :label="translations.jurisdiction[lang]"
                ></b-text-field>
            </v-col>
            <v-col cols="12" sm="6" class="pl-0 pl-sm-2">
                <b-select
                    v-model="invoicing.country_id"
                    :items="countries"
                    :label="translations.invoice[lang]"
                ></b-select>
            </v-col>
        </v-row>
    </b-standard-card>
</template>

<script>
import { mapActions } from "vuex";
import translations from "@/utils/translations/storePanel/settings/profile/invoicing";

export default {
    name: "Invoicing",

    mixins: [translations],

    data: () => ({
        countries: [{ text: "Greece 24%", value: 1 }],
        invoicing: {}
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        loading() {
            return this.$store.state.storePanel.settings.profile.loading
                .invoicing;
        },

        errorMessage() {
            return this.$store.state.storePanel.settings.profile.errorMessage
                .invoicing;
        }
    },

    methods: {
        ...mapActions("storePanel/settings/profile", ["updateInvoicing"])
    },

    watch: {
        ["$store.state.storePanel.store"]: {
            immediate: true,
            handler(val) {
                this.invoicing = {
                    comp_name: val.billing_details.comp_name,

                    vat_number: val.billing_details.vat_number,

                    city: val.billing_details.city,

                    occupation: val.billing_details.occupation,

                    tax_office: val.billing_details.tax_office,

                    country_id: val.billing_details.country_id
                };
            }
        }
    }
};
</script>
