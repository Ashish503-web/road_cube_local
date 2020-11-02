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

    data() {
        return {
            tab: this.$route.path
        };
    },

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        tabs() {
            return [
                {
                    to: `/${this.lang}/loyaltyPanel/subscriptions/stores`,
                    name: "stores"
                },
                {
                    to: `/${this.lang}/loyaltyPanel/subscriptions/registration-plans`,
                    name: "registration plans"
                },
                {
                    to: `/${this.lang}/loyaltyPanel/subscriptions/payment-methods`,
                    name: "payment methods"
                }
            ];
        }
    },

    watch: {
        $route: {
            immediate: true,
            handler(val) {
                if (val.path === `/${this.lang}/loyaltyPanel/subscriptions`) {
                    this.$router.push(
                        `/${this.lang}/loyaltyPanel/subscriptions/stores`
                    );
                }
            }
        }
    }
};
</script>
