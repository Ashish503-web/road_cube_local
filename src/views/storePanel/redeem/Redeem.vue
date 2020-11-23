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
                    class="text-capitalize text-left text-sm-center d-flex justify-start justify-sm-center px-3"
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
    name: "Redeem",

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
                    to: `/${this.lang}/storePanel/redeem/redeem-voucher-code`,
                    name: {
                        el: "",
                        en: "Redeem Voucher Code",
                        it: "",
                    },
                },
                {
                    to: `/${this.lang}/storePanel/redeem/coupons-overview`,
                    name: {
                        el: "",
                        en: "Coupons Overview",
                        it: "",
                    },
                },
                {
                    to: `/${this.lang}/storePanel/redeem/multiple-coupons`,
                    name: {
                        el: "",
                        en: "Multiple Coupons",
                        it: "",
                    },
                },
            ];
        },
    },

    watch: {
        $route: {
            immediate: true,
            handler(val) {
                if (val.path === `/${this.lang}/storePanel/redeem`) {
                    this.$router.push(
                        `/${this.lang}/storePanel/redeem/redeem-voucher-code?page=1`
                    );
                }
            },
        },
    },
};
</script>
