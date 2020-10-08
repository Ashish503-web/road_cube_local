<template>
    <b-standard-card
        title="Reward with presence in the store"
        activatable
        height="auto"
        :switcher.sync="rewardWithPresence"
        :loading="loading"
        :error-message="errorMessage"
        @submit="
            updateReward({
                type: 'rewardWithPresence',
                item: {
                    open_checkin: rewardWithPresence
                }
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
                Win points only with the presence of the customer in the store.
            </v-col>
        </v-row>
    </b-standard-card>
</template>

<script>
import { mdiInformation } from "@mdi/js";
import { mapActions, mapMutations } from "vuex";

export default {
    name: "RewardWithPresence",

    data: () => ({
        icons: { mdiInformation }
    }),

    computed: {
        loading() {
            return this.$store.state.storePanel.settings.reward.loading
                .rewardWithPresence;
        },

        errorMessage() {
            return this.$store.state.storePanel.settings.reward.errorMessage
                .rewardWithPresence;
        },

        rewardWithPresence: {
            get() {
                return this.$store.state.storePanel.store.flags.reward
                    .open_checkin;
            },

            set(val) {
                this.setRewardWithPresence(val);
            }
        }
    },

    methods: {
        ...mapMutations("storePanel", ["setRewardWithPresence"]),
        ...mapActions("storePanel/settings/reward", ["updateReward"])
    }
};
</script>
