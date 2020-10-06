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
        this.getStore();
    }
};
</script>

<style>
.b-container {
    background-color: rgba(234, 237, 241, 0.57);
    min-height: calc(100vh - 64px);
}
</style>
