<template>
    <div>

    <v-row
            no-gutters
            justify="space-between"
            align="center"
            class="table-search px-3 pt-3 pb-1"
    >
        <v-col cols="1">
            <v-select
                    :items="perPage"
                    :value="itemsPerPage"
                    @input="itemsPerPage = parseInt($event, 10)"
                    dense
                    solo
                    flat
                    hide-details
                    outlined
                    rounded
                    class="pa-0"
            ></v-select>
        </v-col>
        <v-col cols="2">
            <v-text-field
                    v-model="search"
                    :append-icon="icons.mdiMagnify"
                    label="Search"
                    single-line
                    hide-details
                    dense
                    rounded
                    outlined
                    class="px-4"
            ></v-text-field>
        </v-col>
    </v-row>
    <v-data-table
            :headers="tableheader2"
            :items="tablebody2"
            :search="search"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            @page-count="pageCount = $event"
            class="branch-table rounded-0 pa-3"
            hide-default-footer
    >
    </v-data-table>
    <div>
        <v-row
                no-gutters
                justify="space-between"
                align="center"
                class="px-3 py-1 pagination"
        >
            <p class="ma-0">{{ itemsPerPage }}</p>
            <v-pagination
                    v-model="page"
                    :length="pageCount"
                    circle
                    color="#1bbae1"
            ></v-pagination>
        </v-row>
    </div>
    </div>
</template>
<script>
    import { mdiCalendar, mdiMagnify } from "@mdi/js";

    export default {
        name: "BranchDebt",
        data: () => ({
            icons: {
                mdiCalendar,
                mdiMagnify
            },
            tableheader2: [
                { text: "Date", value: "date" },
                { text: "Name of Shop", value: "name_of_shop" },
                { text: "Points", value: "points" },
                { text: "Redeemed Coupons", value: "redeemed_coupons" }
            ],
            tablebody2: [
                {
                    date: "14.09.2020",
                    name_of_shop: "Bill",
                    points: "Moskovyan 14",
                    redeemed_coupons: "Phone"
                }
            ],
            search: "",
            tab: 0,
            page: 1,
            pageCount: 0,
            itemsPerPage: 10,
            perPage: [10, 20, 30]
        }),

    };
</script>
