<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-tabs
                v-model="tab"
                :vertical="$vuetify.breakpoint.smAndDown"
                color="secondary"
            >
                <v-tab
                    v-for="tab in tabs"
                    :key="tab.name['en']"
                    v-text="tab.name[lang]"
                    :to="tab.to"
                    class="text-capitalize d-flex justify-sm-start justify-center px-3"
                    >Monthly invoicing</v-tab
                >
            </v-tabs>
        </v-sheet>

        <v-tabs-items v-model="tab" class="mt-3">
            <router-view></router-view>
        </v-tabs-items>
    </v-container>
</template>

<script>
export default {
    name: "BranchDebt",

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
                    name: { el: "", en: "Monthly Invoicing", it: "" },
                    to: `/${this.lang}/loyaltyPanel/branch-debt/monthly-invoicing`,
                },
                {
                    name: { el: "", en: "Redemption Invoice", it: "" },
                    to: `/${this.lang}/loyaltyPanel/branch-debt/redemption-invoice`,
                },
            ];
        },
    },

    watch: {
        $route: {
            immediate: true,
            handler(val) {
                if (val.path === `/${this.lang}/loyaltyPanel/branch-debt`) {
                    this.$router.push(
                        `/${this.lang}/loyaltyPanel/branch-debt/monthly-invoicing?page=1`
                    );
                }
            },
        },
    },
};
</script>

<style scoped></style>
