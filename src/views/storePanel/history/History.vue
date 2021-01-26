<template>
    <v-container v-if="permissions.read" fluid class="b-container">
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
import history from "@/store/modules/storePanel/history";

export default {
    name: "History",

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
            return this.$store.state.permissions.history
                ? this.$store.state.permissions.history
                : {};
        },

        tabs() {
            let arr = [];

            if (this.permissions.points_analysis) {
                arr.push({
                    name: { el: "", en: "Point Analysis", it: "" },
                    to: `/${this.lang}/storePanel/history/point-analysis?page=1`,
                });
            }

            if (this.permissions.monthly_points) {
                arr.push({
                    name: { el: "", en: "Monthly Points", it: "" },
                    to: `/${this.lang}/storePanel/history/monthly-points?page=1`,
                });
            }

            return arr;
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
                        this.$route.path === `/${this.lang}/storePanel/history`
                    ) {
                        this.$router.replace(val[0].to);
                    }
                }
            },
        },
    },

    beforeCreate() {
        if (!this.$store.state.storePanel.history) {
            this.$store.registerModule(["storePanel", "history"], history);
        }
    },
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
