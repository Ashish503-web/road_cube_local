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
    data: () => ({
        tab: "loyaltyPanel/gift-status/pending",
        tabs: [
            { to: "/loyaltyPanel/gift-status/pending", name: "pending" },
            { to: "/loyaltyPanel/gift-status/paid", name: "paid" }
        ]
    })
};
</script>
