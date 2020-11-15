<template>
    <v-container fluid class="b-container">
        <v-sheet
            :outlined="tabsWithMargin"
            class="pa-3"
            :class="{ 'mx-3': tabsWithMargin }"
        >
            <v-tabs
                v-model="tab"
                color="secondary"
                :vertical="$vuetify.breakpoint.mdAndDown"
                show-arrows
            >
                <v-tab
                    v-for="tab in tabs"
                    :key="tab.name['en']"
                    class="text-capitalize text-left text-md-center justify-start justify-md-center px-3"
                    v-text="tab.name[lang]"
                    :to="tab.to"
                ></v-tab>
            </v-tabs>
        </v-sheet>

        <v-tabs-items v-model="tab">
            <router-view></router-view>
        </v-tabs-items>
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
                    name: { el: "", en: "profile", it: "" },
                    to: `/${this.lang}/storePanel/settings/profile`
                },
                {
                    name: { el: "", en: "reward", it: "" },
                    to: `/${this.lang}/storePanel/settings/reward`
                },
                {
                    name: { el: "", en: "product points", it: "" },
                    to: `/${this.lang}/storePanel/settings/product-points`
                },
                {
                    name: { el: "", en: "users", it: "" },
                    to: `/${this.lang}/storePanel/settings/users`
                },
                {
                    name: { el: "", en: "payment providers", it: "" },
                    to: `/${this.lang}/storePanel/settings/payment-providers`
                },
                {
                    name: { el: "", en: "payment processing", it: "" },
                    to: `/${this.lang}/storePanel/settings/payment-processing`
                },
                // {
                //     name: { el: "", en: "cards", it: "" },
                //     to: `/${this.lang}/storePanel/settings/cards`
                // },
                {
                    name: { el: "", en: "payment history", it: "" },
                    to: `/${this.lang}/storePanel/settings/payment-history`
                },
                {
                    name: { el: "", en: "payment methods", it: "" },
                    to: `/${this.lang}/storePanel/settings/payment-methods`
                }
            ];
        },

        tabsWithMargin() {
            return (
                this.$route.path ===
                    `/${this.lang}/storePanel/settings/profile` ||
                this.$route.path === `/${this.lang}/storePanel/settings/reward`
            );
        }
    },

    watch: {
        $route: {
            immediate: true,
            handler(val) {
                if (val.path === `/${this.lang}/storePanel/settings`) {
                    this.$router.push(
                        `/${this.lang}/storePanel/settings/profile?page=1`
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
