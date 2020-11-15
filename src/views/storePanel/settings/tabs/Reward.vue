<template>
    <v-tab-item :value="$route.path">
        <v-row no-gutters class="pa-3 pt-6 b-grey">
            <v-col cols="12" md="6" class="pr-3">
                <SendPoints />
            </v-col>

            <v-col cols="12" md="6" class="pl-3">
                <PointDelivery />
            </v-col>

            <v-col cols="12" md="6" class="pr-3 mt-6">
                <ScanReceipt />
            </v-col>

            <v-col cols="12" md="6" class="pl-3 mt-6">
                <RewardWithPresence />
                <MobilePayments />
            </v-col>
        </v-row>
    </v-tab-item>
</template>

<script>
import SendPoints from "@/components/storePanel/settings/reward/SendPoints";
import PointDelivery from "@/components/storePanel/settings/reward/PointDelivery";
import ScanReceipt from "@/components/storePanel/settings/reward/ScanReceipt";
import RewardWithPresence from "@/components/storePanel/settings/reward/RewardWithPresence";
import MobilePayments from "@/components/storePanel/settings/reward/MobilePayments";

export default {
    name: "Reward",
    components: {
        SendPoints,
        PointDelivery,
        ScanReceipt,
        RewardWithPresence,
        MobilePayments
    },

    data: () => ({})
};
</script>
