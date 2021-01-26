<template>
    <b-card
        :title="title"
        :loading="loading"
        :error-message="errorMessage"
        @cancel="$emit('cancel')"
        @submit="mode === 1 ? create() : update()"
    >
        <b-text-field
            v-model="networkRegion.name"
            label="Network Region"
            no-top-margin
        ></b-text-field>
    </b-card>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    name: "StoreForm",

    props: {
        mode: Number,
    },

    data: () => ({}),

    computed: {
        ...mapState([
            "loading",
            "errorMessage",
            "resetSuccess",
            "resetValidation",
        ]),
        ...mapState("loyaltyPanel/stores/networkRegions", ["networkRegion"]),

        lang() {
            return this.$route.params.lang;
        },

        title() {
            return this.mode === 1
                ? "New Network Region"
                : "Update Network Region";
        },
    },

    methods: {
        ...mapMutations(["setResetSuccess", "setResetValidation"]),
        ...mapActions("loyaltyPanel/stores/networkRegions", [
            "create",
            "update",
        ]),
    },
};
</script>
