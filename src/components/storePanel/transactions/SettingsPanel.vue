<template>
    <v-card>
        <v-card-title>
            <v-col
                class="pa-0 text-center ml-6"
                v-text="translations.title[lang]"
            ></v-col>
            <v-btn color="secondary" icon @click="$emit('cancel')">
                <v-icon size="28" v-text="icons.mdiClose"></v-icon>
            </v-btn>
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text class="pt-4">
            <v-row no-gutters justify="space-around" align="center">
                <v-col cols="auto">
                    <v-img
                        src="@/assets/mobile.png"
                        width="70"
                        height="70"
                    ></v-img>
                </v-col>
                <v-col cols="7">
                    <div
                        class="subtitle-1 font-weight-bold text--primary"
                        v-text="translations.mobilePayments[lang]"
                    ></div>
                    {{ translations.mobilePaymentsInfo[lang] }}
                </v-col>
                <v-col cols="2" class="text-center">
                    <v-row no-gutters justify="center" class="mb-3">
                        <v-switch
                            v-model="online_payment_processing"
                            color="secondary"
                            class="mt-0 pt-0"
                            hide-details
                            :loading="mobileLoading"
                            @change="
                                updateMobilePayments({
                                    online_payment_processing
                                })
                            "
                        ></v-switch>
                    </v-row>

                    <span
                        :class="
                            online_payment_processing
                                ? 'success--text'
                                : 'red--text'
                        "
                        v-text="
                            online_payment_processing
                                ? translations.on[lang]
                                : translations.off[lang]
                        "
                    ></span>
                </v-col>
            </v-row>

            <v-row justify="space-around" class="mt-5" no-gutters>
                <v-col cols="auto">
                    <a
                        href="#"
                        class="text--primary"
                        @click="downloadAllTransactions"
                    >
                        {{ translations.allTransactions[lang] }}
                    </a>
                </v-col>

                <v-col cols="auto">
                    <a href="#" class="text--primary">
                        {{ translations.latestTransactions[lang] }}
                    </a>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
import { mdiClose } from "@mdi/js";
import { mapState, mapMutations, mapActions } from "vuex";
import axios from "axios";

import translations from "@/utils/translations/storePanel/transactions/settingsPanel";

export default {
    name: "SettingsPanel",

    mixins: [translations],

    data: () => ({
        icons: { mdiClose },
        online_payment_processing: null
    }),

    computed: {
        ...mapState("storePanel/transactions", ["mobileLoading"]),

        lang() {
            return this.$route.params.lang;
        }
    },

    methods: {
        ...mapActions("storePanel/transactions", ["updateMobilePayments"]),

        async downloadAllTransactions() {
            try {
                axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
                    "accessToken"
                )}`;

                // axios
                //     .get(
                //         `https://api.roadcube.tk/v1/stores/${localStorage.getItem(
                //             "storeId"
                //         )}/transactions/excel/generate`
                //     )
                //     .then(res => {
                //         console.log(res);
                //     });

                axios
                    .get(
                        `https://api.roadcube.tk/v1/stores/${localStorage.getItem(
                            "storeId"
                        )}/transactions/excel/status`
                    )
                    .then(res => console.log(res));

                // axios
                //     .get(
                //         `https://api.roadcube.tk/v1/stores/${localStorage.getItem(
                //             "storeId"
                //         )}/transactions/excel/download`,
                //         {
                //             responseType: "blob"
                //         }
                //     )
                //     .then(res => {
                //         console.log(res);
                //         const blob = res.data;
                //         const fileName = res.headers("fileName");
                //         const link = document.createElement("a");
                //         link.href = window.URL.createObjectURL(blob);
                //         link.download = fileName;
                //         link.click();
                //     });
            } catch (ex) {
                console.error(ex.response.data.message);
            }
        }

        // fundClosure() {
        //     axios.get(
        //         "https://api.roadcube.test/v1/stores/{{store_id}}/transactions/fund/close"
        //     );
        //     axios.get(
        //         "https://api.roadcube.test/v1/stores/{{store_id}}/transactions/fund/close)"
        //     );
        // }
    },

    watch: {
        ["$store.state.storePanel.store.flags.reward.online_payment_processing"]: {
            immediate: true,
            handler(val) {
                this.online_payment_processing = val;
            }
        }
    }
};
</script>
