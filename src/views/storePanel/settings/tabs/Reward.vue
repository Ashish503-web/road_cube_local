<template>
    <v-tab-item :value="$route.path" class="pa-3">
        <v-row no-gutters align="center" class="pa-5 pt-0">
            <v-col cols="auto">
                <v-img src="@/assets/reward.png" width="60" height="60"></v-img>
            </v-col>

            <v-col cols="8" class="pl-5">
                <h4 v-text="translations.title[lang]"></h4>
                <div
                    style="font-size: 0.875rem"
                    class="font-weight-medium mt-1"
                    v-text="translations.info[lang]"
                ></div>
            </v-col>
        </v-row>

        <v-sheet outlined class="mt-5">
            <v-row
                no-gutters
                class="b-bottom-outlined pa-3 subtitle-2 text--secondary"
            >
                <v-col
                    v-for="(header, i) in headers"
                    :key="header"
                    v-text="header"
                    cols="3"
                    :class="{ 'text-center': i === 2 || i === 3 }"
                ></v-col>
            </v-row>

            <v-row
                v-for="method in rewardMethods"
                :key="method.name['en']"
                no-gutters
                class="b-bottom-outlined pa-3"
                align="center"
            >
                <v-col
                    cols="3"
                    class="subtitle-2"
                    v-text="method.name[lang]"
                ></v-col>
                <v-col
                    cols="3"
                    style="font-size: 0.875rem"
                    v-text="method.description[lang]"
                ></v-col>
                <v-col cols="3">
                    <v-sheet width="40" class="mx-auto">
                        <v-skeleton-loader
                            v-if="loading"
                            type="button"
                            height="20"
                        ></v-skeleton-loader>
                        <v-switch
                            v-else
                            v-model="method.active"
                            :loading="method.loading"
                            color="secondary"
                            class="mt-0 pt-0"
                            hide-details
                            @change="updateActivator(method)"
                        ></v-switch>
                    </v-sheet>
                </v-col>
                <v-col cols="3" class="text-center">
                    <v-skeleton-loader
                        v-if="loading"
                        type="image"
                        height="36"
                        width="150"
                        class="mx-auto"
                    ></v-skeleton-loader>

                    <v-btn
                        v-else
                        color="secondary"
                        class="text-capitalize px-5"
                        depressed
                        :disabled="!method.active"
                        v-text="translations.changeSettings[lang]"
                        @click="
                            () => {
                                currentComponent = method.component;
                                dialog = true;
                            }
                        "
                    ></v-btn>
                </v-col>
            </v-row>
        </v-sheet>

        <v-dialog v-model="dialog" max-width="500">
            <component
                :is="currentComponent"
                @cancel="dialog = false"
            ></component>
        </v-dialog>
    </v-tab-item>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

import SendPoints from "@/components/storePanel/settings/reward/SendPoints";
import PointDelivery from "@/components/storePanel/settings/reward/PointDelivery";
import ScanReceipt from "@/components/storePanel/settings/reward/ScanReceipt";
import RewardWithPresence from "@/components/storePanel/settings/reward/RewardWithPresence";
import MobilePayments from "@/components/storePanel/settings/reward/MobilePayments";
import rewardMethods from "@/utils/storePanel/rewardMethods";
import translations from "@/utils/translations/storePanel/settings/reward";

export default {
    name: "Reward",

    components: {
        SendPoints,
        PointDelivery,
        MobilePayments,
        ScanReceipt,
        RewardWithPresence
    },

    mixins: [rewardMethods, translations],

    data: () => ({
        currentComponent: ""
    }),

    computed: {
        ...mapState("storePanel", ["loading"]),

        lang() {
            return this.$route.params.lang;
        },

        headers() {
            return [
                this.translations.method[this.lang],
                this.translations.description[this.lang],
                this.translations.activation[this.lang],
                this.translations.settings[this.lang]
            ];
        },

        dialog: {
            get() {
                return this.$store.state.dialog;
            },

            set(val) {
                this.setDialog(val);
            }
        }
    },

    methods: {
        ...mapMutations(["setDialog"]),
        ...mapActions("storePanel/settings/reward", ["updateActivator"])
    },

    watch: {
        ["$store.state.storePanel.store"]: {
            immediate: true,
            handler(val) {
                this.rewardMethods[0].active =
                    val.flags.reward.send_points_by_card_or_phone;
                this.rewardMethods[1].active =
                    val.flags.reward.pos_points_delivery;
                this.rewardMethods[2].active = val.flags.reward.online_payments;
                this.rewardMethods[3].active = val.flags.reward.scan_receipt;
                this.rewardMethods[4].active = val.flags.reward.open_checkin;
            }
        }
    }
};
</script>
