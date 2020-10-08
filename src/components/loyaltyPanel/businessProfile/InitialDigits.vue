<template>
    <b-standard-card
        title="Set initial digits in new customer form"
        title-color="white"
        submit-text="save"
        height="autp"
    >
        You can set the first digits of the mobile phone when adding new
        customers from the Customers page. These digits will be automatically
        filled in the "Add new customer" form on the cellphone field every time
        you add a new one. This setting is optional.
        <v-row no-gutters>
            <v-col cols="6">
                <b-text-field type="number" label="Enter Number"></b-text-field>
            </v-col>
        </v-row>
    </b-standard-card>
</template>

<script>
export default {
    name: "InitialDigits"
};
</script>
