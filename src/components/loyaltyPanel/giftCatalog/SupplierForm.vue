<template>
    <b-card title="New Supplier" @cancel="$emit('cancel')">
        <b-text-field label="Ονομα" no-top-margin></b-text-field>

        <b-text-field label="Email1" type="email"></b-text-field>

        <b-text-field label="Email2" type="email"></b-text-field>

        <b-text-field label="Κωδικός"></b-text-field>

        <b-text-field label="Τηλέφωνο" type="number"></b-text-field>
    </b-card>
</template>

<script>
import { mdiPlus } from "@mdi/js";

export default {
    name: "SupplierForm",
    data: () => ({
        icons: {
            mdiPlus
        }
    })
};
</script>
