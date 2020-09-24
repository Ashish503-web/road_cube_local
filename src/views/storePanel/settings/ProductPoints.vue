<template>
    <v-tab-item class="pt-5">
        <v-data-table
            :headers="productPointsHeaders"
            :items="productPoints"
            :footer-props="{ itemsPerPageOptions }"
        >
            <template v-slot:item.points="{ item }">
                <v-sheet style="background: transparent" class="py-3">
                    <v-sheet>
                        <v-text-field
                            v-model="item.points"
                            outlined
                            dense
                            clearable
                            hide-details
                        ></v-text-field>
                    </v-sheet>
                </v-sheet>
            </template>

            <template v-slot:item.type="{ item }">
                <v-sheet style="background: transparent" class="py-3">
                    <v-sheet>
                        <v-select
                            v-model="item.type"
                            :items="[
                                'Per Transaction',
                                'Piece',
                                'Liters',
                                'Per Euro'
                            ]"
                            menu-props="offsetY"
                            outlined
                            dense
                            hide-details
                        ></v-select>
                    </v-sheet>
                </v-sheet>
            </template>

            <template v-slot:item.pointSubsidy="{ item }">
                <v-checkbox
                    v-model="item.pointSubsidy"
                    label="Subsidized Points"
                    color="secondary"
                    class="ma-0"
                    hide-details
                ></v-checkbox>
            </template>

            <template v-slot:item.save>
                <v-btn color="secondary" class="text-capitalize" depressed
                    >change</v-btn
                >
            </template>
        </v-data-table>
    </v-tab-item>
</template>

<script>
export default {
    name: "ProductPoints",

    data: () => ({
        productPointsHeaders: [
            { text: "Product Name", value: "name" },
            { text: "Points", value: "points" },
            { text: "Type", value: "type" },
            { text: "Point Subsidy", value: "pointSubsidy" },
            { text: "Save", value: "save" }
        ],
        productPoints: [
            {
                name: "Maroudas Optika's unnamed API product 58526",
                points: 0,
                type: "Per Transaction",
                pointSubsidy: true
            },
            {
                name: "Maroudas Optika's unnamed API product 58534",
                points: 4,
                type: "Per Transaction",
                pointSubsidy: true
            },
            {
                name: "stest_stest",
                points: 0,
                type: "Liters",
                pointSubsidy: false
            }
        ],
        itemsPerPageOptions: [10, 20, 30, -1]
    })
};
</script>
