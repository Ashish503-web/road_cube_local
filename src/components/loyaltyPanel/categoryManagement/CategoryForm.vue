<template>
    <b-card title="New Category" @cancel="$emit('cancel')">
        <b-text-field label="Category Name" no-top-margin></b-text-field>

        <b-text-field label="Font Color"></b-text-field>

        <b-text-field label="Background Color"></b-text-field>

        <v-row no-gutters class="mt-3">
            <v-col cols="6"></v-col>
            <v-col cols="6">
                <v-file-input
                    label="Image Category"
                    color="secondary"
                    outlined
                    dense
                    hide-details
                ></v-file-input>
            </v-col>
        </v-row>

        <b-text-field label="English"></b-text-field>

        <b-text-field label="Italian"></b-text-field>
    </b-card>
</template>

<script>
export default {
    name: "CategoryForm",

    data: () => ({})
};
</script>

<style scoped></style>
