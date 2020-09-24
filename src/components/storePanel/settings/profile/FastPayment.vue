<template>
    <v-card class="mt-12 pb-8" outlined height="246">
        <v-card-title class="grey lighten-3">Fast Payment</v-card-title>

        <v-sheet height="85%">
            <v-row no-gutters align="center fill-height">
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
        </v-sheet>
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
