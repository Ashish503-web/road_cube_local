<template>
    <v-card class="rounded-lg mt-5" outlined>
        <v-card-title class="grey lighten-3">
            <v-col cols="10" class="pa-0">
                Mobile payments
                <br />
                <span class="font-weight-light">
                    {{ mobilePayments ? "(Active)" : "(Inactive)" }}
                </span>
            </v-col>

            <v-col cols="2" class="pa-0">
                <v-switch
                    v-model="mobilePayments"
                    color="secondary"
                    class="pt-0 mb-2 mt-1"
                ></v-switch>
            </v-col>
        </v-card-title>

        <v-card-actions class="pl-4">
            <v-row no-gutters>
                <v-col cols="12" class="mt-3">
                    <v-btn color="secondary" class="text-capitalize" depressed
                        >appoint cleaners</v-btn
                    >
                </v-col>

                <v-col cols="12" class="mt-3">
                    <v-btn color="secondary" class="text-capitalize" depressed
                        >set a payment direction</v-btn
                    >
                </v-col>
            </v-row>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "MobilePayments",

    data: () => ({
        mobilePayments: true
    })
};
</script>
