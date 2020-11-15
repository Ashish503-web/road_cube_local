<template>
    <v-tab-item :value="$route.path">
        <v-row no-gutters class="pa-3 pt-6 b-grey">
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
                <Orders />
            </v-col>
            <v-col cols="12" md="6" class="pl-3 mt-6">
                <ChangePassword />
            </v-col>
            <v-col cols="12" md="6" class="pr-3 mt-6">
                <CompanyRedemption />
            </v-col>
            <v-col cols="12" md="6" class="pl-3 mt-6">
                <ApiAuthentication />
            </v-col>
            <v-col cols="12" md="6" class="pr-3 mt-6">
                <ProductCategories />
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
