<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-tabs
                    :vertical="$vuetify.breakpoint.mdAndDown"
                    v-model="tab"
                    color="black">
                <v-tab class="text-capitalize d-flex justify-md-center justify-start px-3">Stores</v-tab>
                <v-tab class="text-capitalize d-flex justify-md-center justify-start px-3">Registration plans</v-tab>
                <v-tab class="text-capitalize d-flex justify-md-center justify-start px-3">Payment methods</v-tab>
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
