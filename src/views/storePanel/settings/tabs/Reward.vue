<template>
    <v-tab-item :value="$route.path" class="pt-5">
        <v-row no-gutters>
            <v-col cols="12" md="6" class="pr-0 pr-md-2 mb-3 mb-md-0">
                <SendPoints />
            </v-col>

            <v-col cols="12" md="6" class="pl-0 pl-md-2">
                <PointDelivery />
            </v-col>

            <v-col cols="12" md="6" class="pr-0 pr-md-2 mt-5">
                <ScanReceipt />
            </v-col>

            <v-col cols="12" md="6" class="pl-0 pl-md-2 mt-5">
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
