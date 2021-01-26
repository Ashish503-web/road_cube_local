<template>
    <v-container v-if="permissions.read" fluid class="b-container">
        <v-sheet class="pa-3" :class="{ 'mx-3': tabsWithMargin }">
            <v-tabs
                v-model="tab"
                color="secondary"
                :vertical="$vuetify.breakpoint.mdAndDown"
                show-arrows
            >
                <v-tab
                    v-for="tab in tabs"
                    :key="tab.name['en']"
                    v-text="tab.name[lang]"
                    :to="tab.to"
                    class="text-capitalize text-left text-md-center justify-start justify-md-center px-3"
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
    name: "Settings",

    data() {
        return {
            tab: this.$route.path,
        };
    },

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        permissions() {
            return this.$store.state.permissions.settings
                ? this.$store.state.permissions.settings
                : { users: {} };
        },

        tabs() {
            let arr = [];

            if (this.permissions.profile) {
                arr.push({
                    name: { el: "", en: "profile", it: "" },
                    to: `/${this.lang}/storePanel/settings/profile`,
                });
            }

            if (this.permissions.reward) {
                arr.push({
                    name: { el: "", en: "reward", it: "" },
                    to: `/${this.lang}/storePanel/settings/reward`,
                });
            }

            if (this.permissions.product_points) {
                arr.push({
                    name: { el: "", en: "product points", it: "" },
                    to: `/${this.lang}/storePanel/settings/product-points?page=1`,
                });
            }

            if (this.permissions.users.read) {
                arr.push({
                    name: { el: "", en: "users", it: "" },
                    to: `/${this.lang}/storePanel/settings/users?page=1`,
                });
            }

            if (this.permissions.cleaners) {
                arr.push({
                    name: { el: "", en: "payment providers", it: "" },
                    to: `/${this.lang}/storePanel/settings/payment-providers`,
                });
            }

            if (this.permissions.payment_routing) {
                arr.push({
                    name: { el: "", en: "payment processing", it: "" },
                    to: `/${this.lang}/storePanel/settings/payment-processing`,
                });
            }

            if (this.permissions.subscriptions) {
                arr.push({
                    name: { el: "", en: "subscription", it: "" },
                    to: `/${this.lang}/storePanel/settings/subscription`,
                });
            }

            return arr;

            // {
            //     name: { el: "", en: "cards", it: "" },
            //     to: `/${this.lang}/storePanel/settings/cards`
            // },
            // {
            //     name: { el: "", en: "payment history", it: "" },
            //     to: `/${this.lang}/storePanel/settings/payment-history`
            // },
            // {
            //     name: { el: "", en: "payment methods", it: "" },
            //     to: `/${this.lang}/storePanel/settings/payment-methods`
            // }
        },

        tabsWithMargin() {
            return (
                this.$route.path === `/${this.lang}/storePanel/settings/profile`
            );
        },
    },

    watch: {
        tabs: {
            immediate: true,
            handler(val) {
                if (val.length) {
                    if (!this.permissions.read) {
                        this.$router.replace(
                            `/${this.lang}/storePanel/forbidden-gateway`
                        );
                    } else if (
                        this.$route.path === `/${this.lang}/storePanel/settings`
                    ) {
                        this.$router.replace(val[0].to);
                    }
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
