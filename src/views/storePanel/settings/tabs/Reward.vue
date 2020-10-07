<template>
    <v-tab-item class="pt-5">
        <v-row no-gutters>
            <v-col cols="6" class="pr-2">
                <SendPoints />
            </v-col>

            <v-col cols="6" class="pl-2">
                <PointDelivery />
            </v-col>

            <v-col cols="6" class="pr-2 mt-5">
                <ScanReceipt />
            </v-col>

            <v-col cols="6" class="pl-2 mt-5">
                <RewardWithPresence />
                <MobilePayments
                    @appoint-cleaners="$emit('update:tab', 4)"
                    @payment-direction="$emit('update:tab', 5)"
                />
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
