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
                    :key="tab.name['en']"
                    v-text="tab.name[lang]"
                    :to="tab.to"
                    class="text-capitalize d-flex justify-md-center justify-start px-3"
                ></v-tab>
            </v-tabs>
        </v-sheet>

        <v-tabs-items v-model="tab" class="mt-3">
            <router-view></router-view>
        </v-tabs-items>
    </v-container>
</template>

<script>
export default {
    name: "Subscriptions",

    data() {
        return {
            tab: this.$route.path,
        };
    },

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        tabs() {
            return [
                {
                    name: { el: "", en: "stores", it: "" },
                    to: `/${this.lang}/loyaltyPanel/subscriptions/stores`,
                },
                {
                    name: { el: "", en: "registration plans", it: "" },
                    to: `/${this.lang}/loyaltyPanel/subscriptions/registration-plans`,
                },
                {
                    name: { el: "", en: "payment methods", it: "" },
                    to: `/${this.lang}/loyaltyPanel/subscriptions/payment-methods`,
                },
            ];
        },
    },

    watch: {
        $route: {
            immediate: true,
            handler(val) {
                if (val.path === `/${this.lang}/loyaltyPanel/subscriptions`) {
                    this.$router.push(
                        `/${this.lang}/loyaltyPanel/subscriptions/stores?page=1`
                    );
                }
            },
        },
    },
};
</script>
