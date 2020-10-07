<template>
    <v-tab-item class="pt-5">
        <v-row no-gutters>
            <v-col cols="6" class="pr-2">
                <Logo />
            </v-col>
            <v-col cols="6" class="pl-2">
                <PinDisplay />
            </v-col>
            <v-col cols="12" class="mt-12">
                <BusinessInformation />
            </v-col>
            <v-col cols="12" class="mt-12">
                <OperationHours />
            </v-col>
            <v-col cols="6" class="pr-2 mt-12">
                <Invoicing />
            </v-col>
            <v-col cols="6" class="pl-2 mt-12">
                <FastPayment />
            </v-col>
            <v-col cols="6" class="pr-2 mt-12">
                <Orders />
            </v-col>
            <v-col cols="6" class="pl-2 mt-12">
                <ChangePassword />
            </v-col>
            <v-col cols="6" class="pr-2 mt-12">
                <CompanyRedemption />
            </v-col>
            <v-col cols="6" class="pl-2 mt-12">
                <ProductCategories />
            </v-col>
            <v-col cols="6" class="pr-2 mt-12">
                <ApiAuthentication />
            </v-col>
        </v-row>
    </v-tab-item>
</template>

<script>
import Logo from "@/components/storePanel/settings/profile/Logo";
import PinDisplay from "@/components/storePanel/settings/profile/PinDisplay";
import BusinessInformation from "@/components/storePanel/settings/profile/BusinessInformation";
import OperationHours from "@/components/storePanel/settings/profile/OperationHours";
import Invoicing from "@/components/storePanel/settings/profile/Invoicing";
import FastPayment from "@/components/storePanel/settings/profile/FastPayment";
import Orders from "@/components/storePanel/settings/profile/Orders";
import ChangePassword from "@/components/storePanel/settings/profile/ChangePassword";
import CompanyRedemption from "@/components/storePanel/settings/profile/CompanyRedemption";
import ProductCategories from "@/components/storePanel/settings/profile/ProductCategories";
import ApiAuthentication from "@/components/storePanel/settings/profile/ApiAuthentication";

export default {
    name: "Profile",
    components: {
        Logo,
        PinDisplay,
        BusinessInformation,
        OperationHours,
        Invoicing,
        FastPayment,
        Orders,
        ChangePassword,
        CompanyRedemption,
        ProductCategories,
        ApiAuthentication
    },

    mounted() {
        this.$clearFocus();
    }
};
</script>
