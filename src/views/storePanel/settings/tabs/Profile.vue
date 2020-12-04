<template>
    <v-tab-item :value="$route.path">
        <v-row no-gutters class="pa-3 b-grey">
            <v-col cols="12" md="6" class="pr-3">
                <Logo />
            </v-col>
            <v-col cols="12" md="6" class="pl-3">
                <PinDisplay />
            </v-col>
            <v-col cols="12" class="mt-6">
                <BusinessInformation />
            </v-col>
            <v-col cols="12" class="mt-6">
                <OperationHours />
            </v-col>
            <v-col cols="12" md="6" class="pr-3 mt-6">
                <Invoicing />
            </v-col>
            <v-col cols="12" md="6" class="pl-3 mt-6">
                <FastPayment />
            </v-col>
            <v-col cols="12" md="6" class="pr-3 mt-6">
                <ShoppingCart />
            </v-col>
            <v-col cols="12" md="6" class="pl-3 mt-6">
                <ChangePassword />
            </v-col>
            <v-col cols="12" md="6" class="pr-3 mt-6">
                <RedemptionSettings />
            </v-col>
            <v-col cols="12" md="6" class="pl-3 mt-6">
                <ApiAuthentication />
            </v-col>
            <v-col cols="12" md="6" class="pr-3 mt-6">
                <ProductCategories />
            </v-col>
            <v-col cols="12" md="6" class="pl-3 mt-6">
                <DeliverySettings />
            </v-col>
        </v-row>
    </v-tab-item>
</template>

<script>
import { mapActions } from "vuex";

import Logo from "@/components/storePanel/settings/profile/Logo";
import PinDisplay from "@/components/storePanel/settings/profile/PinDisplay";
import BusinessInformation from "@/components/storePanel/settings/profile/BusinessInformation";
import OperationHours from "@/components/storePanel/settings/profile/OperationHours";
import Invoicing from "@/components/storePanel/settings/profile/Invoicing";
import FastPayment from "@/components/storePanel/settings/profile/FastPayment";
import ShoppingCart from "@/components/storePanel/settings/profile/ShoppingCart";
import ChangePassword from "@/components/storePanel/settings/profile/ChangePassword";
import RedemptionSettings from "@/components/storePanel/settings/profile/RedemptionSettings";
import ProductCategories from "@/components/storePanel/settings/profile/ProductCategories";
import ApiAuthentication from "@/components/storePanel/settings/profile/ApiAuthentication";
import DeliverySettings from "@/components/storePanel/settings/profile/DeliverySettings";

export default {
    name: "Profile",
    components: {
        Logo,
        PinDisplay,
        BusinessInformation,
        OperationHours,
        Invoicing,
        FastPayment,
        ShoppingCart,
        ChangePassword,
        RedemptionSettings,
        ProductCategories,
        ApiAuthentication,
        DeliverySettings,
    },

    methods: {
        ...mapActions("storePanel", ["getStore"]),
    },

    mounted() {
        this.getStore();
        this.$clearFocus();
    },
};
</script>
