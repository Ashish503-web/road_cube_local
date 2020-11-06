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
                    :key="tab.name['en']"
                    class="text-capitalize text-left text-md-center justify-start justify-md-center px-3"
                    v-text="tab.name[lang]"
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
                    name: { el: "", en: "cleaner management", it: "" },
                    to: `/${this.lang}/storePanel/settings/cleaner-management`
                },
                {
                    name: { el: "", en: "direction of payments", it: "" },
                    to: `/${this.lang}/storePanel/settings/payments-direction`
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
