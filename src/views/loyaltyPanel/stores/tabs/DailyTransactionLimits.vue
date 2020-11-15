<template>
    <v-tab-item :value="$route.path">
        <v-toolbar flat height="90">
            <v-btn
                color="secondary"
                class="text-capitalize mb-2 mx-auto mx-sm-0"
                depressed
                v-text="translations.generalLimits[lang]"
                @click="
                    () => {
                        mode = 1;
                        limitsDialog = true;
                    }
                "
            ></v-btn>

            <v-spacer></v-spacer>

            <v-col cols="12" sm="4" class="pa-0">
                <b-search-field></b-search-field>
            </v-col>
        </v-toolbar>

        <v-data-table
            :headers="headers"
            :items="items"
            :footer-props="{ itemsPerPageOptions }"
            disable-sort
            class="b-outlined"
        >
            <template v-slot:item.offline_limits>
                <v-btn
                    color="secondary"
                    class="px-7"
                    small
                    depressed
                    @click="
                        () => {
                            mode = 2;
                            limitsDialog = true;
                        }
                    "
                >
                    20
                </v-btn>
            </template>
        </v-data-table>

        <v-dialog v-model="limitsDialog" max-width="600" scrollable>
            <LimitsForm
                :mode="mode"
                @cancel="limitsDialog = false"
                @submit="myFunc"
            />
        </v-dialog>
    </v-tab-item>
</template>

<script>
import { mdiMagnify } from "@mdi/js";
import { mapMutations } from "vuex";
import LimitsForm from "@/components/loyaltyPanel/stores/LimitsForm.vue";
import translations from "@/utils/translations/loyaltyPanel/stores/dailyTransactionLimits";

export default {
    name: "DailyTransactionLimits",

    components: { LimitsForm },

    mixins: [translations],

    data: () => ({
        icons: { mdiMagnify },

        items: [
            {
                name: "Vasilis"
            },
            {
                name: "Vasilis"
            },
            {
                name: "Vasilis"
            }
        ],
        itemsPerPageOptions: [10, 20, 30, -1],
        mode: 0,
        limitsDialog: false
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        headers() {
            return [
                {
                    text: this.translations.name[this.lang],
                    value: "name",
                    width: "50%"
                },
                {
                    text: this.translations.offlineTransactions[this.lang],
                    value: "offline_limits",
                    width: "50%"
                }
            ];
        }
    },

    methods: {
        ...mapMutations("loyaltyPanel/branches", []),

        myFunc() {
            alert(5);
        }
    }
};
</script>
