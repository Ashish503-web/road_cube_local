<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-row no-gutters>
                <v-col cols="auto">
                    <v-tabs v-model="tab" color="black">
                        <v-tab class="text-capitalize">Stores</v-tab>
                        <v-tab class="text-capitalize">Registration plans</v-tab>
                        <v-tab class="text-capitalize">Payment methods</v-tab>
                    </v-tabs>
                </v-col>
                <v-col cols="12">
                    <v-tabs-items v-model="tab">
                        <Stores/>
                        <registration-plans/>
                        <payment-methods/>
                    </v-tabs-items>
                </v-col>
            </v-row>
        </v-sheet>
    </v-container>
</template>

<script>
    import Stores from './components/Stores'
    import PaymentMethods from './components/PaymentMethods'
    import RegistrationPlans from './components/RegistrationPlans'
    export default {
        name: "Subscriptions",
        data: () => ({
            tab: 2,
        }),
        components: {
            'Stores': Stores,
            'payment-methods': PaymentMethods,
            'registration-plans': RegistrationPlans,
        }
    };
</script>
