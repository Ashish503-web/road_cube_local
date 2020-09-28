<template>
    <v-col cols="12" md="6" sm="12">
        <v-card tile outlined min-height="200">
            <v-card tile flat>
                <v-card-title
                    class="subtitle-1 font-weight-bold py-2 grey lighten-3"
                    >Transactions</v-card-title
                >

                <v-sheet
                    class="v-sheet--offset mx-auto"
                    max-width="calc(100% - 32px)"
                >
                    <v-sparkline
                        :value="value"
                        :gradient="gradient"
                        :smooth="radius || false"
                        :padding="padding"
                        :line-width="width"
                        :stroke-linecap="lineCap"
                        :gradient-direction="gradientDirection"
                        :fill="fill"
                        :type="type"
                        :auto-line-width="autoLineWidth"
                        auto-draw
                    ></v-sparkline>
                </v-sheet>
            </v-card>
        </v-card>
    </v-col>
</template>

<script>
const gradients = [
    ["#222"],
    ["#42b3f4"],
    ["red", "orange", "yellow"],
    ["purple", "violet"],
    ["#00c6ff", "#F0F", "#FF0"],
    ["#f72047", "#ffd200", "#1feaea"]
];

export default {
    name: "TransactionsChart",

    data: () => ({
        width: 2,
        radius: 10,
        padding: 8,
        lineCap: "round",
        gradient: gradients[5],
        value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
        gradientDirection: "top",
        gradients,
        fill: false,
        type: "trend",
        autoLineWidth: false
    })
};
</script>
