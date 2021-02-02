<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3" color="rgba(234, 237, 241, 0.57)">
            <v-row no-gutters>
                <v-col cols="6" class="pr-3">
                    <Logo />
                </v-col>

                <v-col cols="6" class="pl-3">
                    <PinDisplay />
                </v-col>

                <v-col cols="6" class="pr-3 mt-6">
                    <UserManual />
                </v-col>

                <v-col cols="6" class="pl-3 mt-6">
                    <PointsRelation />
                </v-col>

                <v-col cols="6" class="pr-3 mt-6">
                    <TermsOfUse />
                </v-col>

                <v-col cols="6" class="pl-3 mt-6">
                    <PrivacyPolicy />
                </v-col>

                <v-col cols="6" class="pr-3 mt-6">
                    <InitialPoints />
                </v-col>

                <v-col cols="6" class="pl-3 mt-6">
<!--                    <InitialDigits />-->
                    <PointsReturn />
                    <PushNotifications />
                </v-col>

                <v-col cols="6" class="pr-3 mt-6">
                    <CampaignCredentials />
                </v-col>

                <v-col cols="6" class="pl-3 mt-6">

                    <CouponCreation />
<!--                    <ApiAuthentication />-->
                    <UserPointsInApp />
                </v-col>
            </v-row>
        </v-sheet>
    </v-container>
</template>

<script>
import Logo from "@/components/loyaltyPanel/businessProfile/Logo.vue";
import PinDisplay from "@/components/loyaltyPanel/businessProfile/PinDisplay.vue";
import UserManual from "@/components/loyaltyPanel/businessProfile/UserManual.vue";
import PointsRelation from "@/components/loyaltyPanel/businessProfile/PointsRelation.vue";
import TermsOfUse from "@/components/loyaltyPanel/businessProfile/TermsOfUse.vue";
import PrivacyPolicy from "@/components/loyaltyPanel/businessProfile/PrivacyPolicy.vue";
import InitialPoints from "@/components/loyaltyPanel/businessProfile/InitialPoints.vue";
// import InitialDigits from "@/components/loyaltyPanel/businessProfile/InitialDigits.vue";
import PushNotifications from "@/components/loyaltyPanel/businessProfile/PushNotifications.vue";
import CampaignCredentials from "@/components/loyaltyPanel/businessProfile/CampaignCredentials.vue";
import PointsReturn from "@/components/loyaltyPanel/businessProfile/PointsReturn.vue";
import CouponCreation from "@/components/loyaltyPanel/businessProfile/CouponCreation.vue";
import ApiAuthentication from "@/components/loyaltyPanel/businessProfile/ApiAuthentication.vue";
import UserPointsInApp from "@/components/loyaltyPanel/businessProfile/UserPointsInApp.vue";
import {mapActions} from "vuex";

export default {
    name: "BusinessProfile",

    components: {
        Logo,
        PinDisplay,
        UserManual,
        PointsRelation,
        TermsOfUse,
        PrivacyPolicy,
        InitialPoints,
        // InitialDigits,
        PushNotifications,
        CampaignCredentials,
        PointsReturn,
        CouponCreation,
        // ApiAuthentication,
        UserPointsInApp
    },

    data: () => ({}),



    mounted() {

        this.$clearFocus();
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
