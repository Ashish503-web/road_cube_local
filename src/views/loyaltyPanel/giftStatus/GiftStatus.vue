<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-tabs v-model="tab" color="black">
                <v-tab
                    v-for="tab in tabs"
                    :key="tab.name"
                    v-text="tab.name"
                    :to="tab.to"
                    class="text-capitalize"
                ></v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
                <router-view></router-view>
            </v-tabs-items>
        </v-sheet>
    </v-container>
</template>

<script>
import {
    mdiFormatListCheckbox,
    mdiMicrosoftExcel,
    mdiFilePdf,
    mdiFileDelimitedOutline,
    mdiMagnify,
    mdiChevronDown
} from "@mdi/js";

export default {
    name: "GiftStatus",

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
                    to: `/${this.lang}/loyaltyPanel/gift-status/pending`,
                    name: "pending"
                },
                {
                    to: `/${this.lang}/loyaltyPanel/gift-status/paid`,
                    name: "paid"
                }
            ];
        }
    },

    watch: {
        $route: {
            immediate: true,
            handler(val) {
                if (val.path === `/${this.lang}/loyaltyPanel/gift-status`) {
                    this.$router.push(
                        `/${this.lang}/loyaltyPanel/gift-status/pending`
                    );
                }
            }
        }
    }
};
</script>
