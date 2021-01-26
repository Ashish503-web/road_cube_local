<template>
    <b-card
        :title="translations.title[lang]"
        :loading="loading"
        :error-message="errorMessage"
        @cancel="$emit('cancel')"
        @submit="
            updateReward({
                item: pointDelivery,
                url: 'flags/reward',
                commitText: 'storePanel/setPointDelivery',
                successText: 'point delivery info'
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
                {{ translations.info[lang] }}

                <v-checkbox
                    v-model="pointDelivery.pos_display_amount"
                    color="secondary"
                    class="pt-0 mt-1"
                    hide-details
                >
                    <template v-slot:label>
                        <h4
                            class="subtitle-2"
                            v-text="translations.showAmount[lang]"
                        ></h4>
                    </template>
                </v-checkbox>

                <v-checkbox
                    v-model="pointDelivery.pos_goal_shopping"
                    color="secondary"
                    class="pt-0 mt-1"
                    hide-details
                >
                    <template v-slot:label>
                        <h4
                            class="subtitle-2"
                            v-text="translations.serialShopping[lang]"
                        ></h4>
                    </template>
                </v-checkbox>
            </v-col>
        </v-row>
    </b-card>
</template>

<script>
import { mdiInformation } from "@mdi/js";
import { mapState, mapActions } from "vuex";
import translations from "@/utils/translations/storePanel/settings/reward/pointDelivery";

export default {
    name: "PointDelivery",

    mixins: [translations],

    data: () => ({
        icons: { mdiInformation },
        pointDelivery: {}
    }),

    computed: {
        ...mapState(["loading", "errorMessage"]),

        lang() {
            return this.$route.params.lang;
        }
    },

    methods: {
        ...mapActions("storePanel/reward", ["updateReward"])
    },

    watch: {
        ["$store.state.storePanel.store.flags.reward"]: {
            immediate: true,
            handler(val) {
                this.pointDelivery = {
                    pos_display_amount: val.pos_display_amount,
                    pos_goal_shopping: val.pos_goal_shopping
                };
            }
        }
    }
};
</script>
