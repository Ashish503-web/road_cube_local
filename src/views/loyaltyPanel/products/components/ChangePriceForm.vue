<template>
    <v-card class="dashed_border mt-4">
        <v-col cols="12">
            <v-checkbox v-model="formModal.changePriceCheck" @click="handleChangePrice" label="I want to change price"></v-checkbox>
        </v-col>
        <v-col cols="12">
            <v-text-field
                    label="Product Name"
                    :value="formModal.sellingPrice"
                    :disabled="disabledInp"

                    outlined
            ></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-text-field
                    label="Product Name"
                    :value="formModal.wholesalePrice"
                    :disabled="disabledInp"
                    outlined
            ></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-checkbox v-model="formModal.subPoints" label="Subsidized points"></v-checkbox>
        </v-col>
    </v-card>
</template>

<script>
    export default {
        props:['formModal'],
        data () {
            return {
                disabledInp: true,
            }
        },
        methods:{
            handleChangePrice(){
                this.disabledInp = !this.disabledInp
                console.log(this.disabledInp)
            }
        }
    }
</script>
<style scoped>
    .dashed_border {
        border: 1px dashed grey;
        border-radius: 10px;
    }
</style>