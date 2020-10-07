<template>
    <v-col cols="12" class="pa-0">
        <v-checkbox
                class="mb-2"
                hide-details
                v-model="formModal.updateProductCompanies.active"
                label="Update product to all existing companies"></v-checkbox>
    </v-col>
</template>
<script>
    export default {
        props:['formModal'],

    }
</script>