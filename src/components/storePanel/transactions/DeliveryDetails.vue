<template>
    <v-card>
        <v-card-title>
            <v-icon
                size="28"
                class="mr-3 text--primary"
                v-text="icons.mdiMapMarker"
            ></v-icon>
            {{ translations.title[lang] }}
            <v-spacer></v-spacer>
            <v-btn icon @click="$emit('cancel')">
                <v-icon size="28" v-text="icons.mdiClose"></v-icon>
            </v-btn>
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text class="pt-4">
            <v-sheet
                color="rgba(234, 237, 241, 0.57)"
                outlined
                class="pa-3 mb-3"
            >
                {{ translations.region[lang] }}:
                {{ deliveryDetails.region }}
            </v-sheet>

            <v-sheet
                color="rgba(234, 237, 241, 0.57)"
                outlined
                class="pa-3 mb-3"
            >
                {{ translations.address[lang] }}:
                {{ deliveryDetails.address }}
            </v-sheet>

            <v-sheet
                color="rgba(234, 237, 241, 0.57)"
                outlined
                class="pa-3 mb-3"
            >
                {{ translations.bellName[lang] }}:
                {{ deliveryDetails.bell_name }}
            </v-sheet>

            <v-sheet
                color="rgba(234, 237, 241, 0.57)"
                outlined
                class="pa-3 mb-3"
            >
                {{ translations.floor[lang] }}:
                {{ deliveryDetails.floor }}
            </v-sheet>

            <v-sheet
                color="rgba(234, 237, 241, 0.57)"
                outlined
                class="pa-3 mb-3"
            >
                {{ translations.notes[lang] }}:
                {{ deliveryDetails.notes }}
            </v-sheet>
        </v-card-text>
    </v-card>
</template>

<script>
import { mdiMapMarker, mdiClose } from "@mdi/js";
import translations from "@/utils/translations/storePanel/transactions/deliveryDetails";

export default {
    name: "DeliveryDetails",

    props: {
        deliveryDetails: Object
    },

    mixins: [translations],

    data: () => ({
        icons: { mdiMapMarker, mdiClose }
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        }
    }
};
</script>
