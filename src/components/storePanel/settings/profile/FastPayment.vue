<template>
    <v-card class="mt-12 pb-8 rounded-lg" outlined>
        <v-card-title class="grey lighten-3">Fast Payment</v-card-title>

        <v-container class="mt-5">
            <v-row no-gutters align="center">
                <v-col cols="auto" class="subtitle-2 ml-12">
                    Toogle Fast Payment option:
                </v-col>
                <v-col cols="auto" class="ml-3">
                    <v-switch
                        v-model="fastPayment"
                        :label="fastPayment"
                        color="secondary"
                        true-value="On"
                        false-value="Off"
                        hide-details
                        class="ma-0"
                    ></v-switch>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
export default {
    name: "FastPayment",

    data: () => ({
        fastPayment: "Off"
    })
};
</script>
