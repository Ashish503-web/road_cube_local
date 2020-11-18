<template>
    <v-card tile>
        <v-card-title class="subtitle-1 font-weight-bold px-6">
            {{ translations.additionalInfo[lang] }}
            <v-spacer></v-spacer>
            <v-btn icon @click="$emit('cancel')">
                <v-icon v-text="icons.mdiClose"></v-icon>
            </v-btn>
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text class="pt-4 pb-1">
            <v-sheet
                color="rgba(234, 237, 241, 0.57)"
                outlined
                class="pa-3 mb-3"
            >
                {{ translations.address[lang] }}:
                {{ store.address }}
            </v-sheet>

            <v-sheet
                color="rgba(234, 237, 241, 0.57)"
                outlined
                class="pa-3 mb-3"
            >
                {{ translations.phone[this.lang] }}:
                {{ store.primary_phone }}
            </v-sheet>

            <v-sheet
                color="rgba(234, 237, 241, 0.57)"
                outlined
                class="pa-3 mb-3"
            >
                {{ translations.registrationDate[lang] }}:
                {{ store.registration_date }}
            </v-sheet>

            <h3
                class="subtitle-1 font-weight-bold"
                v-text="translations.availableBanks[lang]"
            ></h3>

            <div v-if="store.bank_providers.length" class="mt-3">
                <div
                    v-for="bank in store.bank_providers"
                    :key="bank['en']"
                    class="b-outlined pa-3 mb-3"
                >
                    <h4
                        class="text--primary subtitle-2"
                        v-text="bank[lang]"
                    ></h4>
                </div>
            </div>

            <div v-else class="b-outlined pa-3 my-3">
                No Banks Available
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
import { mdiClose } from "@mdi/js";

import translations from "@/utils/translations/loyaltyPanel/stores/storesTab/additionalInfo";

export default {
    name: "AdditionalInfo",

    mixins: [translations],

    data: () => ({
        icons: { mdiClose }
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        store() {
            return this.$store.state.loyaltyPanel.stores.storesTab.store;
        }
    }
};
</script>
