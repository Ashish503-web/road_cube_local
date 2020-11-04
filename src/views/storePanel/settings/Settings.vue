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
                    to: `/${this.lang}/storePanel/settings/profile`,
                    name: "profile"
                },
                {
                    to: `/${this.lang}/storePanel/settings/reward`,
                    name: "reward"
                },
                {
                    to: `/${this.lang}/storePanel/settings/product-points`,
                    name: "product points"
                },
                {
                    to: `/${this.lang}/storePanel/settings/users`,
                    name: "users"
                },
                {
                    to: `/${this.lang}/storePanel/settings/cleaner-management`,
                    name: "cleaner management"
                },
                {
                    to: `/${this.lang}/storePanel/settings/payments-direction`,
                    name: "direction of payments"
                },
                // {
                //     to: `/${this.lang}/storePanel/settings/cards`,
                //     name: "cards"
                // },
                {
                    to: `/${this.lang}/storePanel/settings/payment-history`,
                    name: "payment history"
                },
                {
                    to: `/${this.lang}/storePanel/settings/payment-methods`,
                    name: "payment methods"
                }
            ];
        }
    },

    watch: {
        $route: {
            immediate: true,
            handler(val) {
                if (val.path === `/${this.lang}/storePanel/settings`) {
                    this.$router.push(
                        `/${this.lang}/storePanel/settings/profile`
                    );
                }
            }
        }
    }
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
