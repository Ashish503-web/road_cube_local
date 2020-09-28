<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-tabs v-model="tab" color="black">
                <v-tab class="text-capitalize">Stores</v-tab>
                <v-tab class="text-capitalize">Registration plans</v-tab>
                <v-tab class="text-capitalize">Payment methods</v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
                <Stores />
                <RegistrationPlans />
                <PaymentMethods />
            </v-tabs-items>
        </v-sheet>
    </v-container>
</template>

<script>
import Stores from "./tabs/Stores";
import PaymentMethods from "./tabs/PaymentMethods";
import RegistrationPlans from "./tabs/RegistrationPlans";

export default {
    name: "Subscriptions",
    components: {
        Stores,
        RegistrationPlans,
        PaymentMethods
    },
    data: () => ({
        tab: 0
    })
};
</script>
