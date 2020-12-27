<template>
    <v-app>
        <router-view name="header"></router-view>

        <v-main :class="{ 'pa-0': noPadding }">
            <router-view></router-view>
            <Notification />
            <PermissionDialog />
        </v-main>

        <router-view name="footer"></router-view>
    </v-app>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import Notification from "@/components/general/Notification.vue";
import PermissionDialog from "@/components/general/PermissionDialog.vue";

export default {
    name: "App",

    components: { Notification, PermissionDialog },

    data: () => ({
        //
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        noPadding() {
            return (
                this.$route.path === `/${this.lang}/` ||
                this.$route.path === `/${this.lang}` ||
                this.$route.path === `/${this.lang}/points-pos` ||
                this.$route.path === `/${this.lang}/points-pos/`
            );
        }
    },

    methods: {
        ...mapMutations(["setStoreId", "setAccessToken"]),
        ...mapActions(["getUser"])
    },

    // async beforeCreate() {
    //     console.log(caches);
    //     if (Object.keys(caches).length) {
    //         const names = await caches.keys();
    //         await Promise.all(names.map((name) => caches.delete(name)));
    //         window.location.reload();
    //     }
    // },

    mounted() {
        const accessToken = localStorage.getItem("accessToken");
        const storeId = localStorage.getItem("storeId");

        if (accessToken) {
            this.setAccessToken(accessToken);
            this.getUser();
        }

        if (storeId) {
            this.setStoreId(storeId);
        }
    }
};
</script>

<style>
.bb {
    border: 1px solid black !important;
}

.bw {
    border: 1px solid white !important;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type="number"] {
    -moz-appearance: textfield;
}

html,
body {
    scroll-behavior: smooth !important;
}

.vuejs-clipper-basic__zoom-area {
    border-radius: 50%;
}
</style>
