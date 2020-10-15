<template>
    <b-standard-card
        title="Choose redemption for the company"
        submit-text="verification"
        :loading="loading"
        :error-message="errorMessage"
        @submit="updateRedemption"
    >
        <v-radio-group v-model="redemption" class="mt-0">
            <v-radio
                label="Direct Redemption (redemption ON)"
                color="secondary"
                :value="1"
            ></v-radio>
            <v-radio
                label="Code (redemption OFF)"
                color="secondary"
                :value="2"
            ></v-radio>
        </v-radio-group>
    </b-standard-card>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
    name: "CompanyRedemption",

    computed: {
        loading() {
            return this.$store.state.storePanel.settings.profile.loading
                .redemption;
        },

        errorMessage() {
            return this.$store.state.storePanel.settings.profile.errorMessage
                .redemption;
        },

        redemption: {
            get() {
                return this.$store.state.storePanel.store.redemption_type_id;
            },

            set(val) {
                this.setRedemption(val);
            }
        }
    },

    methods: {
        ...mapMutations("storePanel", ["setRedemption"]),
        ...mapActions("storePanel/settings/profile", ["updateRedemption"])
    }
};
</script>
