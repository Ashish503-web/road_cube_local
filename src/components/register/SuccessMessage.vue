<template>
    <v-stepper-content step="4" class="pa-0">
        <v-card>
            <v-card-title class="success white--text justify-center pb-0">
                Congratulations!
            </v-card-title>
            <v-row no-gutters justify="center" class="success">
                <v-col cols="auto">
                    <v-alert type="success" class="bb" dense>{{
                        successMessage
                    }}</v-alert>
                </v-col>
            </v-row>

            <div class="text-center py-5">
                <v-btn
                    color="secondary"
                    class="px-10"
                    outlined
                    tile
                    :to="mode === 'Company' ? '/loyaltyPanel' : '/storePanel'"
                    >go to {{ mode }}</v-btn
                >
            </div>
        </v-card>
    </v-stepper-content>
</template>

<script>
export default {
    name: "SuccessMessage",

    data: () => ({
        mode: "Company",
        successMessage: ""
    })
};
</script>
