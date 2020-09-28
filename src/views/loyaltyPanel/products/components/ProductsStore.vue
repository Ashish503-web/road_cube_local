<template>
    <v-card>
        <v-card-title>
            <v-col class="d-flex" cols="12" sm="2">
                <v-select
                    :items="pageItems"
                    outlined
                    v-model="pageItem"
                ></v-select>
            </v-col>
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                placeholder="Search"
                outlined
            ></v-text-field>
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="5"
            class="elevation-1"
        >
            <template v-slot:item="row">
                <tr>
                    <td>{{ row.item.name }}</td>
                    <td>
                        <v-checkbox v-model="row.item.market1"></v-checkbox>
                    </td>
                    <td>
                        <v-checkbox v-model="row.item.market2"></v-checkbox>
                    </td>
                    <td>
                        <v-checkbox v-model="row.item.market3"></v-checkbox>
                    </td>
                    <td>
                        <v-checkbox v-model="row.item.market4"></v-checkbox>
                    </td>
                    <td>
                        <v-checkbox v-model="row.item.market5"></v-checkbox>
                    </td>
                    <td>
                        <v-checkbox v-model="row.item.market6"></v-checkbox>
                    </td>
                    <td>
                        <v-checkbox v-model="row.item.market7"></v-checkbox>
                    </td>
                    <td>
                        <v-checkbox v-model="row.item.market8"></v-checkbox>
                    </td>
                    <td>
                        <v-checkbox v-model="row.item.market9"></v-checkbox>
                    </td>
                    <td>
                        <v-checkbox v-model="row.item.market10"></v-checkbox>
                    </td>
                    <td>
                        <v-checkbox v-model="row.item.market11"></v-checkbox>
                    </td>
                    <td>
                        <v-checkbox v-model="row.item.market12"></v-checkbox>
                    </td>
                </tr>
            </template>
        </v-data-table>
    </v-card>
</template>
<script>
import { mdiMagnify } from "@mdi/js";

export default {
    data: () => ({
        dense: false,
        fixedHeader: true,
        light: true,
        search: "",
        pageItems: [10, 20, 30, "All"],
        pageItem: 10,
        icons: {
            mdiMagnify
        },
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
            { text: "market12" }
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
                market12: 1
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
                market12: 0
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
                market12: 0
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
                market12: 0
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
                market12: 1
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
                market12: 1
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
                market12: 1
            }
        ]
    }),
    methods: {}
};
</script>
