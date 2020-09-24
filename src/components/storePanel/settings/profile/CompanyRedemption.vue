<template>
    <v-card class="mt-12 rounded-lg" outlined>
        <v-card-title class="grey lighten-3">
            Choose redemption for the company
        </v-card-title>

        <v-card-text class="pb-0">
            <v-radio-group>
                <v-radio
                    label="Direct Redemption (redemption ON)"
                    color="secondary"
                ></v-radio>
                <v-radio
                    label="Code (redemption OFF)"
                    color="secondary"
                ></v-radio>
            </v-radio-group>
        </v-card-text>

        <v-card-actions class="pl-4">
            <v-btn color="secondary" class="text-capitalize" depressed
                >verification</v-btn
            >
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "CompanyRedemption"
};
</script>
