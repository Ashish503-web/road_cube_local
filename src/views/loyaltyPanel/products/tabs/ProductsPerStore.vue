<template>
    <v-tab-item :value="$route.path" class="pa-3">
        <v-toolbar flat height="90">
            <v-spacer></v-spacer>

            <v-col cols="4">
                <b-search-field></b-search-field>
            </v-col>
        </v-toolbar>
        <v-data-table
            :headers="stores"
            :items="products"
            :footer-props="{ itemsPerPageOptions: [12], showCurrentPage: true }"
            class="b-outlined"
        >
            <template v-slot:item="row">
                <tr>
                    <td>{{ row.item.name }}</td>
                    <td v-for="(store,index) in stores" :key="index">
                        <v-checkbox
                            v-model="row.item[store.text]"
                            color="secondary"
                        ></v-checkbox>
                    </td>
                </tr>
            </template>
        </v-data-table>
    </v-tab-item>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    name: "ProductsPerStore",

    data: () => ({
        
    }),

    computed: {
        ...mapState("loyaltyPanel/productsPerStore", ["products","stores"]),
    },

    methods: {
        ...mapActions("loyaltyPanel/productsPerStore", ["getItems"]),
    },

    mounted(){
        this.getItems()
    }
};
</script>
