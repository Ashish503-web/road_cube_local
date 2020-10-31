<template>
    <v-tab-item :value="$route.path">
        <v-toolbar flat height="80">
            <v-spacer></v-spacer>

            <v-col cols="12" sm="4">
                <v-text-field
                    label="Search"
                    color="secondary"
                    rounded
                    outlined
                    dense
                    clearable
                    hide-details
                    :prepend-inner-icon="icons.mdiMagnify"
                ></v-text-field>
            </v-col>
        </v-toolbar>

        <v-data-table
            :headers="headers"
            :items="multipleCoupons"
            :footer-props="{ itemsPerPageOptions }"
        ></v-data-table>
    </v-tab-item>
</template>

<script>
import { mdiMagnify } from "@mdi/js";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
    name: "MultipleCoupons",

    data: () => ({
        icons: { mdiMagnify },
        headers: [
            { text: "Code", value: "code" },
            { text: "Gift Title", value: "gift_title" },
            { text: "Gift Description", value: "gift_description" },
            { text: "Maximum", value: "maximum" },
            { text: "Price", value: "price" },
            { text: "Expiration Date", value: "expiration_date" },
        ],
        itemsPerPageOptions: [10, 25, 50, 100]
    }),

    computed: {
        ...mapGetters("storePanel/redeem/multipleCoupons", [
            "multipleCoupons"
        ])
    },

    methods: {
        ...mapActions("storePanel/redeem/multipleCoupons", [
            "getItems"
        ])
    },

    mounted(){
        this.getItems()
    }
    
};
</script>
