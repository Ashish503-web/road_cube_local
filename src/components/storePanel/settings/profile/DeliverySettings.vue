<template>
    <b-standard-card
        :title="translations.title[lang]"
        :loading="loading"
        :error-message="errorMessage"
        @submit="
            updateDeliverySettings({
                type: 'deliverySettings',
                item: deliverySettings
            })
        "
    >
        <v-row no-gutters class="subtitle-2">
            <v-col cols="6" class="my-5">
                <v-row no-gutters justify="center">
                    <v-col cols="auto">{{ translations.pickUp[lang] }}:</v-col>
                    <v-col cols="auto" class="ml-3">
                        <v-switch
                            v-model="deliverySettings.pick_up"
                            color="secondary"
                            class="mt-0 pt-0"
                            hide-details="auto"
                        ></v-switch>
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="6" class="my-5">
                <v-row no-gutters justify="center">
                    <v-col cols="auto"
                        >{{ translations.delivery[lang] }}:</v-col
                    >
                    <v-col cols="auto" class="ml-3">
                        <v-switch
                            v-model="deliverySettings.delivery"
                            color="secondary"
                            class="mt-0 pt-0"
                            hide-details="auto"
                        ></v-switch>
                    </v-col>
                </v-row>
            </v-col>

            <template v-if="deliverySettings.delivery">
                <v-col cols="6" class="pr-2 mt-1">
                    <b-text-field
                        v-model="deliverySettings.delivery_distance"
                        :label="translations.deliveryDistance[lang]"
                        type="number"
                    ></b-text-field>
                </v-col>
                <v-col cols="6" class="pl-2 mt-1">
                    <b-text-field
                        v-model="deliverySettings.delivery_min_amount"
                        :label="translations.minimumDelivery[lang]"
                        type="number"
                    ></b-text-field>
                </v-col>
                <v-col cols="6" class="pr-2 mt-1">
                    <b-text-field
                        v-model="deliverySettings.delivery_fee"
                        :label="translations.deliveryFee[lang]"
                        type="number"
                    ></b-text-field>
                </v-col>

                <v-col cols="12" class="subtitle-2">
                    <v-checkbox
                        v-model="deliverySettings.delivery_include_discount"
                        color="secondary"
                        class="mt-3 pt-0"
                        hide-details="auto"
                    >
                        <template v-slot:label>
                            <h4>
                                {{ translations.includeDiscount[lang] }}

                                <v-tooltip
                                    color="secondary"
                                    top
                                    max-width="300"
                                >
                                    <template v-slot:activator="{ on }">
                                        <v-icon
                                            color="secondary"
                                            v-text="icons.mdiInformation"
                                            v-on="on"
                                        ></v-icon>
                                    </template>

                                    <span
                                        class="font-weight-bold"
                                        v-text="translations.tooltip[lang]"
                                    ></span>
                                </v-tooltip>
                            </h4>
                        </template>
                    </v-checkbox>
                    <v-checkbox
                        v-model="deliverySettings.global_delivery"
                        color="secondary"
                        class="mt-3 pt-0"
                        hide-details="auto"
                    >
                        <template v-slot:label>
                            <h4 v-text="translations.globalDelivery[lang]"></h4>
                        </template>
                    </v-checkbox>
                </v-col>
            </template>
        </v-row>
    </b-standard-card>
</template>

<script>
import { mdiInformation } from "@mdi/js";
import { mapActions } from "vuex";
import translations from "@/utils/translations/storePanel/settings/profile/deliverySettings";

export default {
    name: "DeliverySettings",

    mixins: [translations],

    data: () => ({
        icons: { mdiInformation },
        deliverySettings: {}
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        loading() {
            return this.$store.state.storePanel.profile.loading
                .deliverySettings;
        },

        errorMessage() {
            return this.$store.state.storePanel.profile.errorMessage
                .deliverySettings;
        }
    },

    methods: {
        ...mapActions("storePanel/profile", ["updateDeliverySettings"])
    },

    watch: {
        ["$store.state.storePanel.store.delivery_settings"]: {
            immediate: true,
            handler(val) {
                this.deliverySettings = { ...val };
            }
        }
    }
};
</script>
