<template>
    <v-dialog
            v-model="formModal.active"
            max-width="60%"
    >
        <v-card>
            <v-card-title class="headline">

                {{formModal.title}}
            </v-card-title>

            <v-card-text>
                <v-row>
                    <v-col row="12">
                        <v-radio-group v-model="formModal.productDisplay" row >

                            <v-radio label="Option 1" value="0"></v-radio>
                            <v-radio label="Option 2" value="1"></v-radio>
                            <v-radio label="Option 3" value="2"></v-radio>
                        </v-radio-group>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col row="7">
                        <v-col cols="12">
                            <v-text-field
                                    label="Product Name"
                                    :value="formModal.productName"
                                    outlined
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-textarea
                                    outlined
                                    name="input-7-4"
                                    label="Product Description"
                                    :value="formModal.productDescription"
                            ></v-textarea>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                    label="Points"
                                    :value="formModal.points"
                                    outlined
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                    label="Product Id"
                                    :value="formModal.productId"
                                    outlined
                            ></v-text-field>
                        </v-col>
                        <v-col class="d-flex" cols="12">
                            <v-select
                                    :items="items"
                                    v-model="formModal.percentage"
                                    label="Percentage"
                                    outlined
                            ></v-select>
                        </v-col>
                    </v-col>
                    <v-col row="5" class="">
                        <change-price-form :formModal="dataComponent" v-if="formModal.productDisplay==='0' || formModal.productDisplay==='2'">

                        </change-price-form>
                        <target-price-form :formModal="dataComponent" v-if="formModal.productDisplay==='1'">

                        </target-price-form>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col row="12">
                        <v-col  cols="12">
                            <product-image-check :formModal="dataComponent"></product-image-check>
                        </v-col>
                        <v-col  cols="12"  v-if="formModal.productDisplay!=='2'">
                            <product-display-days :formModal="dataComponent"></product-display-days>
                        </v-col>
                        <v-col  cols="12" >
                            <update-product-companies :formModal="dataComponent"></update-product-companies>
                        </v-col>
                    </v-col>
                </v-row>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                        @click="formModal.active = false"

                >
                    Close
                </v-btn>

                <v-btn
                        class="primary"

                        @click="formModal.active = false"
                >
                    Update
                </v-btn>


            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
    import {
        mdiPencil,
    } from "@mdi/js";
import ChangePriceForm from './ChangePriceForm'
import TargetPriceForm from './TargetPriceForm'
import ProductImageCheck from './ProductImageCheck'
import ProductDisplayDays from './ProductDisplayDays'
import UpdateProductCompanies from './UpdateProductCompanies'
    export default {
        data() {
            return {
                icons: {
                    mdiPencil,

                },
                checkbox: true,
                items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
                dataComponent:{}
            }
        },
        props: ['formModal'],
        components:{
            'change-price-form':ChangePriceForm,
            'target-price-form':TargetPriceForm,
            'product-image-check':ProductImageCheck,
            'product-display-days':ProductDisplayDays,
            'update-product-companies':UpdateProductCompanies,
        },
        created(){
            this.dataComponent=this.formModal;
            console.log(this.formModal)
        }
    }
</script>
