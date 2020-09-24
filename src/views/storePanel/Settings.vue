<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-tabs v-model="tab" color="black" show-arrows>
                <v-tab
                    v-for="tab in tabs"
                    :key="tab"
                    v-text="tab"
                    class="text-capitalize"
                ></v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
                <Profile />

                <Reward />

                <ProductPoints />

                <Users />

                <CleanerManagement />

                <PaymentsDirection />

                <Cards />

                <Subscription />
            </v-tabs-items>
        </v-sheet>
    </v-container>
</template>

<script>
import Profile from "./settings/Profile";
import Reward from "./settings/Reward";
import ProductPoints from "./settings/ProductPoints";
import Users from "./settings/Users";
import CleanerManagement from "./settings/CleanerManagement";
import PaymentsDirection from "./settings/PaymentsDirection";
import Cards from "./settings/Cards";
import Subscription from "./settings/Subscription";
import {
    mdiArrowRight,
    mdiClockOutline,
    mdiCurrencyEur,
    mdiPlus,
    mdiCloseThick,
    mdiInformation,
    mdiPercent,
    mdiPencilOutline,
    mdiClose,
    mdiMenuDown,
    mdiChevronUp,
    mdiChevronDown,
    mdiPound,
    mdiCart,
    mdiArrowLeft,
    mdiMagnify
} from "@mdi/js";

export default {
    name: "Settings",
    components: {
        Profile,
        Reward,
        Subscription,
        ProductPoints,
        Users,
        CleanerManagement,
        PaymentsDirection,
        Cards
    },
    data: () => ({
        icons: {
            mdiArrowRight,
            mdiClockOutline,
            mdiCurrencyEur,
            mdiPlus,
            mdiCloseThick,
            mdiInformation,
            mdiPercent,
            mdiPencilOutline,
            mdiClose,
            mdiMenuDown,
            mdiChevronUp,
            mdiChevronDown,
            mdiPound,
            mdiCart,
            mdiArrowLeft,
            mdiMagnify
        },
        tab: 7,
        tabs: [
            "profile",
            "reward",
            "product points",
            "users",
            "cleaner management",
            "direction of payments",
            "cards",
            "subscription"
        ],
        itemsPerPageOptions: [10, 20, 30, -1]
    }),

    methods: {
        onFileSelected(item, event) {
            item.imageFile = event;
            const reader = new FileReader();
            reader.readAsDataURL(item.imageFile);
            reader.onload = e => (item.image = e.target.result);
        }
    }
};
</script>

<style>
.dashed {
    border: 1px dashed grey;
    border-radius: 10px;
}

.relative {
    position: relative;
}

.map-new-pin {
    width: 50px;
    position: absolute;
    top: 37px;
    left: 14px;
}

.category-number {
    position: absolute;
    top: 7px;
    left: -5px;
}

.category-remove {
    position: absolute;
    top: -10px;
    right: -10px;
    cursor: pointer;
}
</style>
