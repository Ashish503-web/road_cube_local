<template>
    <v-col cols="12">
        <v-checkbox v-model="formModal.updateProductCompanies.active" label="Update product to all existing companies"></v-checkbox>
    </v-col>
</template>
<script>
    export default {
        props:['formModal'],

    }
</script>