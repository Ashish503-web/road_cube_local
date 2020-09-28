<template>
    <v-card tile outlined>
        <v-row class="pb-3">
            <v-col sm="12" md="12" lg="4" class="d-none d-sm-block">
                <v-card-title>Dashboard</v-card-title>
            </v-col>

            <v-col
                v-for="box in boxes"
                :key="box.label"
                cols="12"
                sm="12"
                md="3"
                lg="2"
            >
                <v-card-title class="pb-0 justify-center">
                    {{ box.title }}
                </v-card-title>
                <v-card-title
                    class="pa-0 font-weight-light justify-center text--secondary"
                >
                    <v-icon v-text="box.icon" class="mr-1"></v-icon>
                    {{ box.label }}
                </v-card-title>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import {
    mdiAccountGroup,
    mdiDatabase,
    mdiCurrencyEur,
    mdiTrophyVariant
} from "@mdi/js";

export default {
    name: "Title",

    data: () => ({
        icons: {
            mdiAccountGroup,
            mdiDatabase,
            mdiCurrencyEur,
            mdiTrophyVariant
        },
        boxes: [
            {
                title: 0,
                icon: mdiAccountGroup,
                label: "Customer"
            },
            {
                title: 0,
                icon: mdiDatabase,
                label: "Transactions"
            },
            {
                title: "0,00",
                icon: mdiCurrencyEur,
                label: "Total"
            },
            {
                title: 0,
                icon: mdiTrophyVariant,
                label: "username"
            }
        ]
    })
};
</script>
