<!--<template>
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
                    <v-btn class="primary ma-4" @click="addHandler"
                        >New Product Service</v-btn
                    >

                    <v-card tile flat color="#f9fafc" class="pa-1 pb-0">
                        <v-tabs v-model="activeTab" color="black">
                            <v-tab class="text-capitalize">
                                Products
                            </v-tab>
                            <v-tab class="text-capitalize"
                                >Products per Store</v-tab
                            >
                            <v-tab class="text-capitalize"
                                >Series of Products</v-tab
                            >
                        </v-tabs>
                    </v-card>

                    <v-tabs-items v-model="activeTab">
                        <v-tab-item>
                            <tab-products :formModal="formModal"></tab-products>
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
        <modal-form :formModal="formModal"></modal-form>
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
import Products from "./components/Products";
import ProductsStore from "./components/ProductsStore";
import SeriesProducts from "./components/SeriesProducts";
import Form from "./components/Form";

export default {
    name: "Products",
    components: {
        "tab-products": Products,
        "products-store": ProductsStore,
        "products-series": SeriesProducts,
        "modal-form": Form
    },
    data() {
        return {
            icons: {
                mdiTools,
                mdiMagnify,
                mdiSquareEditOutline,
                mdiNavigation,
                mdiBackspace,
                mdiPlusThick,
                mdiCheckCircleOutline
            },
            activeTab: 0,
            formModal: {
                active: false,
                title: "Create Product",
                productDisplay: "0",
                productName: "",
                productDescription: "",
                points: "",
                productId: null,
                percentage: 0,
                sellingPrice: "",
                wholesalePrice: "",
                changePriceCheck: 0,
                subPoints: 0,
                productImageCheck: {
                    active: false
                },
                productDisplayDays: {
                    active: false
                },
                updateProductCompanies: {
                    active: false
                }
            }
        };
    },
    methods: {
        addHandler() {
            this.formModal.active = true;
            this.formModal.title = "Create Product";
            this.formModal.productDisplay = "0";
            this.formModal.productName = "";
            this.formModal.productDescription = "";
            this.formModal.points = "";
            this.formModal.productId = null;
            this.formModal.percentage = 0;
            this.formModal.sellingPrice = "";
            this.formModal.wholesalePrice = "";
            this.formModal.changePriceCheck = 0;
            this.formModal.subPoints = 0;
            this.formModal.productImageCheck.active = false;
            this.formModal.productDisplayDays.active = false;
            this.formModal.updateProductCompanies.active = false;
        }
    }
};
</script>-->
<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-tabs
                    v-model="tab"
                    color="secondary"
                    :vertical="$vuetify.breakpoint.mdAndDown"
            >
                <v-tab
                        v-for="tab in tabs"
                        v-bind:key="tab"
                        class="text-capitalize"
                        v-text="tab"
                >
                </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
                <v-tab-item>
                    <tab-products :formModal="formModal"></tab-products>
                </v-tab-item>
                <v-tab-item>
                    <products-store></products-store>
                </v-tab-item>
                <v-tab-item>
                    <products-series></products-series>
                </v-tab-item>
            </v-tabs-items>



        </v-sheet>
    </v-container>
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
    import Products from "./components/Products";
    import ProductsStore from "./components/ProductsStore";
    import SeriesProducts from "./components/SeriesProducts";
    export default {
        name: "Branches",
        components: {
            "tab-products": Products,
            "products-store": ProductsStore,
            "products-series": SeriesProducts,

        },
        data: () => ({
            tab: 0,
            tabs: [
                "Products",
                "Products per Store",
                "Series of products",
            ],
            formModal: {
                active: false,
                title: "Create Product",
                productDisplay: "0",
                productName: "",
                productDescription: "",
                points: "",
                productId: null,
                percentage: 0,
                sellingPrice: "",
                wholesalePrice: "",
                changePriceCheck: 0,
                subPoints: 0,
                productImageCheck: {
                    active: false
                },
                productDisplayDays: {
                    active: false
                },
                updateProductCompanies: {
                    active: false
                }
            }
        })
    };
</script>
