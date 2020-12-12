<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-tabs
                v-model="tab"
                color="secondary"
                :vertical="$vuetify.breakpoint.smAndDown"
                show-arrows
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
    name: "Coupons",

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
            return this.$store.state.permissions.coupons
                ? this.$store.state.permissions.coupons
                : { goal: {}, voucher: {}, product: {}, discount: {} };
        },

        tabs() {
            let arr = [];

            if (this.permissions.goal.read) {
                arr.push({
                    name: { el: "", en: "coupons with transactions", it: "" },
                    to: `/${this.lang}/storePanel/coupons/with-transactions`
                });
            }

            if (this.permissions.voucher.read) {
                arr.push({
                    name: { el: "", en: "coupons with code", it: "" },
                    to: `/${this.lang}/storePanel/coupons/with-code`
                });
            }

            if (this.permissions.product.read) {
                arr.push({
                    name: { el: "", en: "coupons on products", it: "" },
                    to: `/${this.lang}/storePanel/coupons/on-products`
                });
            }

            if (this.permissions.discount.read) {
                arr.push({
                    name: { el: "", en: "coupons with discount", it: "" },
                    to: `/${this.lang}/storePanel/coupons/with-discount`
                });
            }

            return arr;

            // {
            //     name: { el: "", en: "coupons with visits", it: "" },
            //     to: `/${this.lang}/storePanel/coupons/with-visits`
            // },
        }
    },

    watch: {
        tabs: {
            immediate: true,
            handler(val) {
                if (val.length) {
                    if (
                        this.$route.path === `/${this.lang}/storePanel/coupons`
                    ) {
                        if (val[0].name.en === "coupons with transactions") {
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

<style scoped>
.dashed {
    border: 1px dashed grey;
    border-radius: 10px;
}
</style>
