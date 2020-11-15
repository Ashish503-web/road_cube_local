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
                    :key="tab.name['en']"
                    v-text="tab.name[lang]"
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
    name: "Stores",

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
                    name: { el: "", en: "stores", it: "" },
                    to: `/${this.lang}/loyaltyPanel/stores/stores-tab`
                },
                {
                    name: { el: "", en: "financial data", it: "" },
                    to: `/${this.lang}/loyaltyPanel/stores/financial-data`
                },
                {
                    name: { el: "", en: "Settings of Admin Panel", it: "" },
                    to: `/${this.lang}/loyaltyPanel/stores/admin-panel-settings`
                },
                {
                    name: { el: "", en: "Settings of Application", it: "" },
                    to: `/${this.lang}/loyaltyPanel/stores/application-settings`
                },
                {
                    name: { el: "", en: "Daily Transaction Limits", it: "" },
                    to: `/${this.lang}/loyaltyPanel/stores/daily-transaction-limits`
                }
            ];
        }
    },

    watch: {
        $route: {
            immediate: true,
            handler(val) {
                if (val.path === `/${this.lang}/loyaltyPanel/stores`) {
                    this.$router.push(
                        `/${this.lang}/loyaltyPanel/stores/stores-tab?page=1`
                    );
                }
            }
        }
    }
};
</script>
