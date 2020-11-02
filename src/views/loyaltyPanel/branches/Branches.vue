<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-tabs
                v-model="tab"
                color="secondary"
                :vertical="$vuetify.breakpoint.mdAndDown"
            >
                <v-tab
                    v-for="tab in tabs"
                    :key="tab.name"
                    v-text="tab.name"
                    :to="tab.to"
                    class="text-capitalize d-flex justify-start justify-sm-center px-3"
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
    name: "Branches",

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
                    to: `/${this.lang}/loyaltyPanel/branches/branches-tab`,
                    name: "branches"
                },
                {
                    to: `/${this.lang}/loyaltyPanel/branches/financial-data`,
                    name: "financial data"
                },
                {
                    to: `/${this.lang}/loyaltyPanel/branches/admin-panel-settings`,
                    name: "Settings of Admin Panel"
                },
                {
                    to: `/${this.lang}/loyaltyPanel/branches/application-settings`,
                    name: "Settings of Application"
                },
                {
                    to: `/${this.lang}/loyaltyPanel/branches/daily-transaction-limits`,
                    name: "Daily Transaction Limits"
                }
            ];
        }
    },

    watch: {
        $route: {
            immediate: true,
            handler(val) {
                if (val.path === `/${this.lang}/loyaltyPanel/branches`) {
                    this.$router.push(
                        `/${this.lang}/loyaltyPanel/branches/branches-tab`
                    );
                }
            }
        }
    }
};
</script>
