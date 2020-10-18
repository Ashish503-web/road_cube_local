<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-tabs
                v-model="tab"
                :vertical="$vuetify.breakpoint.mdAndDown"
                color="secondary"
            >
                <v-tab
                    v-for="tab in tabs"
                    :key="tab.name"
                    v-text="tab.name"
                    :to="tab.to"
                    class="text-capitalize d-flex justify-md-center justify-start px-3"
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
    name: "Subscriptions",

    data: () => ({
        tab: "loyaltyPanel/subscriptions/stores",
        tabs: [
            { to: "/loyaltyPanel/subscriptions/stores", name: "stores" },
            {
                to: "/loyaltyPanel/subscriptions/registration-plans",
                name: "registration plans"
            },
            {
                to: "/loyaltyPanel/subscriptions/payment-methods",
                name: "payment methods"
            }
        ]
    })
};
</script>
