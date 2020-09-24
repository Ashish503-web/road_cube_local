<template>
    <v-tab-item class="py-5">
        <v-row no-gutters>
            <v-col cols="6" class="pr-2">
                <Logo />
            </v-col>
            <v-col cols="6" class="pl-2">
                <PinDisplay />
            </v-col>
            <v-col cols="12">
                <BusinessInformation />
            </v-col>
            <v-col cols="12">
                <OperationHours />
            </v-col>
            <v-col cols="6" class="pr-2">
                <Invoicing />
            </v-col>
            <v-col cols="6" class="pl-2">
                <ReceiptInformation />
            </v-col>
            <v-col cols="6" class="pr-2">
                <FastPayment />
            </v-col>
            <v-col cols="6" class="pl-2">
                <Orders />
            </v-col>
            <v-col cols="6" class="pr-2">
                <ChangePassword />
            </v-col>
            <v-col cols="6" class="pl-2">
                <CompanyRedemption />
            </v-col>
            <v-col cols="6" class="pr-2">
                <ProductCategories />
            </v-col>
            <v-col cols="6" class="pl-2">
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
import ReceiptInformation from "@/components/storePanel/settings/profile/ReceiptInformation";
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
        ReceiptInformation,
        FastPayment,
        Orders,
        ChangePassword,
        CompanyRedemption,
        ProductCategories,
        ApiAuthentication
    }
};
</script>
