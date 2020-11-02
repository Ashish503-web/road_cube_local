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
                    :key="tab.name"
                    class="text-capitalize text-left text-sm-center d-flex justify-start justify-sm-center px-3"
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

        tabs() {
            return [
                {
                    to: `/${this.lang}/storePanel/history/point-analysis`,
                    name: "Point Analysis"
                },
                {
                    to: `/${this.lang}/storePanel/history/monthly-points`,
                    name: "Monthly Points"
                }
            ];
        }
    },

    watch: {
        $route: {
            immediate: true,
            handler(val) {
                if (val.path === `/${this.lang}/storePanel/history`) {
                    this.$router.push(
                        `/${this.lang}/storePanel/history/point-analysis`
                    );
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
