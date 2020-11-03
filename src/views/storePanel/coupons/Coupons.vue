<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-tabs
                v-model="tab"
                :vertical="$vuetify.breakpoint.smAndDown"
                color="secondary"
                show-arrows
            >
                <v-tab
                    v-for="tab in tabs"
                    :key="tab.name['en']"
                    v-text="tab.name[lang]"
                    class="text-capitalize text-left text-sm-center d-flex justify-start justify-sm-center px-3"
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
    name: "Coupons",

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
                    name: { el: "", en: "coupons with transactions", it: "" },
                    to: `/${this.lang}/storePanel/coupons/with-transactions`,
                },

                {
                    name: { el: "", en: "coupons with code", it: "" },
                    to: `/${this.lang}/storePanel/coupons/with-code`,
                },

                {
                    name: { el: "", en: "coupons on products", it: "" },
                    to: `/${this.lang}/storePanel/coupons/on-products`,
                },

                {
                    name: { el: "", en: "coupons with visits", it: "" },
                    to: `/${this.lang}/storePanel/coupons/with-visits`,
                },

                {
                    name: { el: "", en: "coupons with discount", it: "" },
                    to: `/${this.lang}/storePanel/coupons/with-discount`,
                },
            ];
        },
    },

    watch: {
        $route: {
            immediate: true,
            handler(val) {
                if (val.path === `/${this.lang}/storePanel/coupons`) {
                    this.$router.push(
                        `/${this.lang}/storePanel/coupons/with-transactions`
                    );
                }
            },
        },
    },
};
</script>

<style scoped>
.dashed {
    border: 1px dashed grey;
    border-radius: 10px;
}
</style>
