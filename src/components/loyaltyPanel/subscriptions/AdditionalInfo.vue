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
            <v-row no-gutters justify="center">
                <v-col cols="4" class="pl-2 flex justify-center">
                    <img
                        :src="'https://www.roadcube.com/images/payments/' + paymentMethodAdditionalInfo.system_payment_method.image"
                        alt=""
                        width="120"
                        height="50"
                    />
                </v-col>
            </v-row>
            
            

            <v-sheet
                color="rgba(234, 237, 241, 0.57)"
                outlined
                class="pa-3 mb-3"
            >
                {{ translations.name[lang] + ": " }}
                {{ paymentMethodAdditionalInfo.system_payment_method.name[lang] }}
            </v-sheet>

            <v-sheet
                color="rgba(234, 237, 241, 0.57)"
                outlined
                class="pa-3 mb-3"
            >
                {{ translations.description[lang] + ": " }}
                {{ paymentMethodAdditionalInfo.system_payment_method.description[lang] }}
            </v-sheet>

            <v-sheet
                color="rgba(234, 237, 241, 0.57)"
                outlined
                class="pa-3 mb-3"
            >
                <div style="display: flex">
                    {{ translations.color[lang] + ": " }}
                    {{ paymentMethodAdditionalInfo.system_payment_method.color }}
                </div>
            </v-sheet>

            <h3
                class="subtitle-1 font-weight-bold"
                v-text="translations.fields[lang]"
            ></h3>

            <div v-if="paymentMethodAdditionalInfo.system_payment_method.fields.length" class="mt-3">
                <div
                    v-for="(field,index) in paymentMethodAdditionalInfo.system_payment_method.fields"
                    :key="index"
                    class="b-outlined pa-3 mb-3"
                >
                    <h4
                        class="text--primary subtitle-2"
                        v-text="field"
                    ></h4>
                </div>
            </div>

            
        </v-card-text>
    </v-card>
</template>

<script>
import { mdiClose } from "@mdi/js";

import translations from "@/utils/translations/loyaltyPanel/subscriptions/paymentMethods";

export default {
    name: "AdditionalInfo",

    mixins: [translations],

    data: () => ({
        icons: { mdiClose },
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        paymentMethodAdditionalInfo() {
            return this.$store.state.loyaltyPanel.subscriptions.paymentMethodAdditionalInfo;
        },
    },
};
</script>
