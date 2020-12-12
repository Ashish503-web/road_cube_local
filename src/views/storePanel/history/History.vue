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
                    class="text-capitalize text-left text-sm-center d-flex justify-start justify-sm-center px-3"
                    v-text="tab.name[lang]"
                    :to="tab.to"
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
    name: "History",

    data() {
        return {
            tab: this.$route.path
        };
    },

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        permissions() {
            return this.$store.state.permissions.history
                ? this.$store.state.permissions.history
                : {};
        },

        tabs() {
            let arr = [];

            if (this.permissions.points_analysis) {
                arr.push({
                    name: { el: "", en: "Point Analysis", it: "" },
                    to: `/${this.lang}/storePanel/history/point-analysis`
                });
            }

            if (this.permissions.monthly_points) {
                arr.push({
                    name: { el: "", en: "Monthly Points", it: "" },
                    to: `/${this.lang}/storePanel/history/monthly-points`
                });
            }

            return arr;
        }
    },

    watch: {
        tabs: {
            immediate: true,
            handler(val) {
                if (val.length) {
                    if (
                        this.$route.path === `/${this.lang}/storePanel/history`
                    ) {
                        this.$router.push(val[0].to + "?page=1");
                    }
                }
            }
        }
    }
};
</script>

<style scoped>
.export-link {
    text-decoration: none;
}

.export-link:hover {
    text-decoration: underline;
}
</style>
