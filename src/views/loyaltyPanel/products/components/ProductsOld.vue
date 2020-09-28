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
                :items="products"
                :search="search"
        >

            <template v-slot:header="{ props: { headers } }">
                <thead>
                <tr>
                    <th v-for="h in headers" :key="h.text">
                        <v-text-field
                                v-if="!h.action"
                                v-model="search"
                                :append-icon="icons.mdiMagnify"
                                placeholder="Search"
                                outlined
                        ></v-text-field>
                    </th>
                </tr>
                </thead>
            </template>
            <template v-slot:item="row">
                <tr>
                    <td>{{row.item.name}}</td>
                    <td>{{row.item.description}}</td>
                    <td>{{row.item.selling}}</td>
                    <td>{{row.item.wholesale}}</td>
                    <td width="30%">
                        <div>
                            <v-btn @click="deleteHandler(row.item)" class="ma-2" small color="error">Delete</v-btn>
                            <v-btn @click="editHandler(row.item)" class="ma-2" small color="primary">Edit</v-btn>
                        </div>


                    </td>

                </tr>
            </template>
        </v-data-table>
        <modal-delete :dialog="dialog"></modal-delete>
    </v-card>
</template>
<script>
    import {
        mdiMagnify,
    } from "@mdi/js";
    import Modal from './Modal'
    import Vue from 'vue'

    export default {
        props:['formModal'],
        data() {
            return {
                icons: {
                    mdiMagnify,

                },
                search: '',
                dialog: false,
                pageItems: [
                    10,
                    20,
                    30,
                    'All'
                ],
                pageItem: 10,
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
                    {text: 'Edit', value: 'edit', sortable: false, action: true},
                ],
                products: [
                    {
                        name: 'Selling Price',
                        description: 159,
                        selling: 6.0,
                        wholesale: 24,
                        id: 0,
                    },
                    {
                        name: 'Ice cream sandwich',
                        description: 237,
                        selling: 9.0,
                        wholesale: 37,
                        id: 0,
                    },
                ],
            }
        },
        methods: {
            deleteHandler: function (product) {
                this.dialog = true;
            },
            editHandler(product) {
                this.formModal.active = true;
                this.formModal.title = 'Edit Product';
                this.formModal.productName = product.name;
                this.formModal.productDescription = product.description;
                this.formModal.id = product.id;
                this.formModal.sellingPrice = product.selling;
                this.formModal.wholesalePrice = product.wholesale;

            }
        },
        components: {
            'modal-delete': Modal,
        }
    }
</script>