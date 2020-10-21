<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-tabs
                v-model="tab"
                color="secondary"
                :vertical="$vuetify.breakpoint.mdAndDown"
                show-arrows
            >
                <v-tab
                    v-for="tab in tabs"
                    :key="tab.name"
                    class="text-capitalize text-left text-md-center justify-start justify-md-center px-3"
                    v-text="tab.name"
                    :to="tab.to"
                ></v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
                <router-view></router-view>
            </v-tabs-items>
        </v-sheet>
    </v-container>
</template>

<script>
export default {
    name: "Settings",

    data: () => ({
        tab: "/storePanel/settings/profile",
        tabs: [
            { to: "/storePanel/settings/profile", name: "profile" },
            { to: "/storePanel/settings/reward", name: "reward" },
            {
                to: "/storePanel/settings/product-points",
                name: "product points",
            },
            { to: "/storePanel/settings/users", name: "users" },
            {
                to: "/storePanel/settings/cleaner-management",
                name: "cleaner management",
            },
            {
                to: "/storePanel/settings/payments-direction",
                name: "direction of payments",
            },
            { to: "/storePanel/settings/cards", name: "cards" },
            {
                to: "/storePanel/settings/payment-history",
                name: "payment history",
            },
            {
                to: "/storePanel/settings/payment-methods",
                name: "payment methods",
            },
        ],
    }),

    watch: {
        $route: {
            immediate: true,
            handler(val) {
                if (val.path === "/storePanel/settings") {
                    this.$router.push("/storePanel/settings/profile");
                }
            },
        },
    },
};
</script>

<style>
.dashed {
    border: 1px dashed grey;
    border-radius: 10px;
}

.relative {
    position: relative;
}
</style>
