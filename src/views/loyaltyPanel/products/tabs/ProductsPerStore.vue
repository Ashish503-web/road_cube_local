<template>
    <v-tab-item :value="$route.path" class="pa-3">
        <v-toolbar flat height="90">
            <v-spacer></v-spacer>

            <v-col cols="4">
                <b-search-field></b-search-field>
            </v-col>
        </v-toolbar>
        <v-data-table
            :headers="headers"
            :items="desserts"
            :footer-props="{ itemsPerPageOptions: [12], showCurrentPage: true }"
            class="b-outlined"
        >
            <template v-slot:item="row">
                <tr>
                    <td>{{ row.item.name }}</td>
                    <td>
                        <v-checkbox
                            v-model="row.item.market1"
                            color="secondary"
                        ></v-checkbox>
                    </td>
                    <td>
                        <v-checkbox
                            v-model="row.item.market2"
                            color="secondary"
                        ></v-checkbox>
                    </td>
                    <td>
                        <v-checkbox
                            v-model="row.item.market3"
                            color="secondary"
                        ></v-checkbox>
                    </td>
                    <td>
                        <v-checkbox
                            v-model="row.item.market4"
                            color="secondary"
                        ></v-checkbox>
                    </td>
                    <td>
                        <v-checkbox
                            v-model="row.item.market5"
                            color="secondary"
                        ></v-checkbox>
                    </td>
                    <td>
                        <v-checkbox
                            v-model="row.item.market6"
                            color="secondary"
                        ></v-checkbox>
                    </td>
                    <td>
                        <v-checkbox
                            v-model="row.item.market7"
                            color="secondary"
                        ></v-checkbox>
                    </td>
                    <td>
                        <v-checkbox
                            v-model="row.item.market8"
                            color="secondary"
                        ></v-checkbox>
                    </td>
                    <td>
                        <v-checkbox
                            v-model="row.item.market9"
                            color="secondary"
                        ></v-checkbox>
                    </td>
                    <td>
                        <v-checkbox
                            v-model="row.item.market10"
                            color="secondary"
                        ></v-checkbox>
                    </td>
                    <td>
                        <v-checkbox
                            v-model="row.item.market11"
                            color="secondary"
                        ></v-checkbox>
                    </td>
                    <td>
                        <v-checkbox
                            v-model="row.item.market12"
                            color="secondary"
                        ></v-checkbox>
                    </td>
                </tr>
            </template>
        </v-data-table>
    </v-tab-item>
</template>

<script>
export default {
    name: "ProductsPerStore",

    data: () => ({
        headers: [
            { text: "Name" },
            { text: "market1" },
            { text: "market2" },
            { text: "market3" },
            { text: "market4" },
            { text: "market5" },
            { text: "market6" },
            { text: "market7" },
            { text: "market8" },
            { text: "market9" },
            { text: "market10" },
            { text: "market11" },
            { text: "market12" },
        ],
        desserts: [
            {
                id: 1,
                name: "Frozen Yogurt",
                market1: true,
                market2: 0,
                market3: 1,
                market4: 1,
                market5: 1,
                market6: 0,
                market7: 0,
                market8: 0,
                market9: 1,
                market10: 1,
                market11: 0,
                market12: 1,
            },
            {
                id: 2,
                name: "Arthoures",
                market1: true,
                market2: 1,
                market3: 0,
                market4: 0,
                market5: 0,
                market6: 1,
                market7: 1,
                market8: 1,
                market9: 0,
                market10: 0,
                market11: 1,
                market12: 0,
            },
            {
                id: 3,
                name: "Product 3",
                market1: true,
                market2: 1,
                market3: 0,
                market4: 0,
                market5: 0,
                market6: 1,
                market7: 1,
                market8: 1,
                market9: 0,
                market10: 0,
                market11: 1,
                market12: 0,
            },
            {
                id: 4,
                name: "Product 4",
                market1: true,
                market2: 0,
                market3: 1,
                market4: 1,
                market5: 0,
                market6: 1,
                market7: 0,
                market8: 1,
                market9: 0,
                market10: 0,
                market11: 1,
                market12: 0,
            },
            {
                id: 5,
                name: "Product 5",
                market1: true,
                market2: 0,
                market3: 0,
                market4: 0,
                market5: 0,
                market6: 0,
                market7: 1,
                market8: 1,
                market9: 1,
                market10: 1,
                market11: 1,
                market12: 1,
            },
            {
                id: 6,
                name: "Product 6",
                market1: true,
                market2: 0,
                market3: 0,
                market4: 0,
                market5: 0,
                market6: 0,
                market7: 1,
                market8: 1,
                market9: 1,
                market10: 1,
                market11: 1,
                market12: 1,
            },
            {
                id: 7,
                name: "Product 7",
                market1: true,
                market2: 1,
                market3: 1,
                market4: 1,
                market5: 1,
                market6: 1,
                market7: 1,
                market8: 1,
                market9: 1,
                market10: 1,
                market11: 1,
                market12: 1,
            },
        ],
    }),
    methods: {},
};
</script>
