<template>
    <div>
        <router-view name="title"></router-view>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "StorePanel"
};
</script>

<style>
.b-container {
    background-color: rgba(234, 237, 241, 0.57);
    min-height: calc(100vh - 156px);
}
</style>
