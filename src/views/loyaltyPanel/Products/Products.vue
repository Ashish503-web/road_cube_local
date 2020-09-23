<template>
    <v-card class="pa-0" flat>
        <v-card flat>
            <v-row>
                <v-col cols="12" sm="auto">
                    <v-card-title>Products</v-card-title>
                </v-col>
                <v-col cols="12" sm="auto" class="ml-sm-auto ml-5">
                    <v-icon
                            v-text="icons.mdiTools"
                            size="56"
                            color="#eaedf1"
                            class="mr-sm-5"
                    >
                    </v-icon>
                </v-col>
            </v-row>
        </v-card>

        <v-row class="pa-5 pt-3 pb-3" style="background: #eaedf1">
            <v-col cols="12">
                <v-card flat tile>
                    <v-card tile flat color="#f9fafc" class="pa-1 pb-0">
                        <v-tabs
                                v-model="activeTab"
                                background-color="#f9fafc"
                        >
                            <v-tab class="text-capitalize">
                                Products
                            </v-tab>
                            <v-tab class="text-capitalize">Products per Store</v-tab>
                            <v-tab class="text-capitalize">Series of Products</v-tab>

                        </v-tabs>
                    </v-card>

                    <v-tabs-items v-model="activeTab">
                        <v-tab-item>
                            <tab-products></tab-products>
                        </v-tab-item>
                        <v-tab-item>
                            <products-store></products-store>
                        </v-tab-item>
                        <v-tab-item>
                            <products-series></products-series>
                        </v-tab-item>

                    </v-tabs-items>
                </v-card>
            </v-col>
        </v-row>
    </v-card>

</template>

<script>
    import {
        mdiTools,
        mdiMagnify,
        mdiSquareEditOutline,
        mdiNavigation,
        mdiBackspace,
        mdiPlusThick,
        mdiCheckCircleOutline
    } from "@mdi/js";
    import Products from './components/Products'
    import ProductsStore from './components/ProductsStore'
    import SeriesProducts from './components/SeriesProducts'
    export default {
        name: "Products",
        components:{
            'tab-products':Products,
            'products-store':ProductsStore,
            'products-series':SeriesProducts
        },
        data(){
            return{
                icons: {
                    mdiTools,
                    mdiMagnify,
                    mdiSquareEditOutline,
                    mdiNavigation,
                    mdiBackspace,
                    mdiPlusThick,
                    mdiCheckCircleOutline
                },
                activeTab:0,
            }
        }

    };
</script>
