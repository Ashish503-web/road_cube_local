<template>
    <router-view></router-view>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "LoyaltyPanel",

    methods: {
        ...mapActions("loyaltyPanel", ["getCompany"])
    },

    mounted() {
        if (!this.$store.state.loyaltyPanel.company.store_id) this.getCompany();
    }
};
</script>

<style>
.b-container {
    background-color: rgba(234, 237, 241, 0.57);
    min-height: calc(100vh - 64px);
}

.b-outlined {
    border: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
