<template>
    <v-app>
        <router-view name="header"></router-view>

        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: "App",

    data: () => ({
        //
    })
};
</script>

<style>
.bb {
    border: 1px solid black !important;
}

.bw {
    border: 1px solid white !important;
}
</style>
