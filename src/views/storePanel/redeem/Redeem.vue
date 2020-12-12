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
                    class="text-capitalize px-3"
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
            tab: this.$route.path
        };
    },

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        permissions() {
            return this.$store.state.permissions.redemption
                ? this.$store.state.permissions.redemption
                : {};
        },

        tabs() {
            let arr = [];

            if (this.permissions.redeem_voucher) {
                arr.push({
                    to: `/${this.lang}/storePanel/redeem/redeem-voucher-code`,
                    name: {
                        el: "",
                        en: "Redeem Voucher Code",
                        it: ""
                    }
                });
            }

            if (this.permissions.coupons_overview) {
                arr.push({
                    to: `/${this.lang}/storePanel/redeem/coupons-overview`,
                    name: {
                        el: "",
                        en: "Coupons Overview",
                        it: ""
                    }
                });
            }

            if (this.permissions.multiple_coupons) {
                arr.push({
                    to: `/${this.lang}/storePanel/redeem/multiple-coupons`,
                    name: {
                        el: "",
                        en: "Multiple Coupons",
                        it: ""
                    },
                    show: this.permissions.multiple_coupons
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
                        this.$route.path === `/${this.lang}/storePanel/redeem`
                    ) {
                        if (val[0].name.en === "Redeem Voucher Code") {
                            this.$router.push(val[0].to);
                        } else {
                            this.$router.push(val[0].to + "?page=1");
                        }
                    }
                }
            }
        }
    }
};
</script>
