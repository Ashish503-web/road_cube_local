<template>
    <div>

        <v-toolbar flat height="80">
            <v-btn
                    color="secondary"
                    class="text-capitalize"
                    depressed
                    @click="addHandler"
            >New Product or Service</v-btn
            >

            <v-spacer></v-spacer>


        </v-toolbar>
        <SearchField
                :selectedSearchType="selectedSearchType"
                :searchTypes="searchTypes"
        />

        <v-sheet outlined style="overflow: auto">
            <v-sheet width="1400px">
                <v-data-table
                        :headers="headers"
                        :items="items"
                        :footer-props="{ itemsPerPageOptions }"
                >
                   <!-- <template v-slot:item.actions>
                        <v-tooltip color="secondary" top>
                            <template v-slot:activator="{ on }">
                                <v-btn
                                        color="yellow darken-3"
                                        icon
                                        v-on="on"
                                        @click="editHandler(formModal)"
                                >
                                    <v-icon
                                            v-text="icons.mdiPencilOutline"
                                    ></v-icon>
                                </v-btn>
                            </template>

                            <span>Update</span>
                        </v-tooltip>


                        <v-tooltip color="secondary" top>
                            <template v-slot:activator="{ on }">
                                <v-btn
                                        color="red"
                                        icon
                                        v-on="on"
                                        @click="deleteHandler(formModal)"
                                >
                                    <v-icon v-text="icons.mdiClose"></v-icon>
                                </v-btn>
                            </template>

                            <span>Delete</span>
                        </v-tooltip>
                    </template>-->

                    <template v-slot:item="row">
                        <tr>
                            <td>{{row.item.name}}</td>
                            <td>{{row.item.description}}</td>
                            <td>{{row.item.selling}}</td>
                            <td>{{row.item.wholesale}}</td>
                            <td width="30%">
                                <div>
                                    <v-btn @click="editHandler(row.item)"  color="yellow darken-3"
                                           icon
                                           >
                                        <v-icon
                                            v-text="icons.mdiPencilOutline"
                                    ></v-icon></v-btn>

                                    <v-btn @click="deleteHandler(row.item)"   color="red"
                                           icon
                                           >   <v-icon v-text="icons.mdiClose"></v-icon></v-btn>
                                </div>


                            </td>

                        </tr>
                    </template>
                </v-data-table>
            </v-sheet>
        </v-sheet>
        <delete-item :deleteModal="deleteModal"></delete-item>
        <modal-form :formModal="formModal"></modal-form>

    </div>
</template>

<script>
    import { mdiPencilOutline, mdiOpenInNew, mdiClose } from "@mdi/js";
    import { mapMutations } from "vuex";
    import SearchField from "@/components/loyaltyPanel/SearchField";
    import DeleteItem from "@/components/loyaltyPanel/DeleteItem";
    import Form from "./Form";

    export default {
        name: "Products",
        components: {
            "modal-form": Form,
            "delete-item": DeleteItem,
            SearchField },
       // props:['formModal'],
        data: () => ({
            icons: { mdiPencilOutline, mdiOpenInNew, mdiClose },
            searchTypes: [
                "Product Name",
                "Product Description",
                "Selling Price",
                "Wholesale Price",
            ],
            deleteModal:{
                active:false,
                title:'Delete',
                subTitle:' Are you sure you want to delete',
                description:' Do you want to totally delete Product?',

            },
            selectedSearchType: "All Fields",
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
            },
            headers: [
                {
                    text: 'Product Name',
                    align: 'start',
                    sortable: true,
                    value: 'name',
                    action: false
                },
                {text: 'Product Description', value: 'description', action: false},
                {text: 'Selling Price', value: 'selling', action: false},
                {text: 'Wholesale Price', value: 'wholesale', action: false},
                {text: 'Actions', value: 'actions', sortable: false, action: true},
            ],
            items: [
                {
                    name: 'Selling Price',
                    description: 159,
                    selling: 6.0,
                    wholesale: 24,
                    id: 1,
                },
                {
                    name: 'Ice cream sandwich',
                    description: 237,
                    selling: 9.0,
                    wholesale: 37,
                    id: 0,
                },
            ],
            itemsPerPageOptions: [10, 20, 30, -1]
        }),

        computed: {

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
            },
            editHandler(product) {
                this.formModal.active = true;
                this.formModal.title = 'Edit Product';
                this.formModal.productName = product.name;
                this.formModal.productDescription = product.description;
                this.formModal.id = product.id;
                this.formModal.sellingPrice = product.selling;
                this.formModal.wholesalePrice = product.wholesale;

            },
            deleteHandler(product){
                this.deleteModal.active=true;
            }
        }
    };
</script>
