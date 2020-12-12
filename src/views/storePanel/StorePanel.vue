<template>
    <router-view></router-view>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "StorePanel",

    methods: {
        ...mapActions("storePanel", ["getStore"])
    },

    mounted() {
        if (!this.$store.state.storePanel.store.store_id) this.getStore();
    }
};
</script>

<style>
.v-label {
    font-size: 0.885rem;
    font-weight: 500;
}

.b-container {
    background-color: rgba(234, 237, 241, 0.57);
    min-height: calc(100vh - 64px);
}

.b-outlined {
    border: 1px solid rgba(0, 0, 0, 0.12);
}

.b-bottom-outlined {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.b-grey {
    background-color: rgba(234, 237, 241, 0.57);
}

.v-data-footer {
    padding: 12px 0;
}
</style>
