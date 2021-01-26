<template>
    <v-card>
        <v-card-title class="secondary white--text">
            <v-icon
                    v-text="icons.mdiAutoFix"
                    dark
                    large
                    class="mr-3"
            ></v-icon
            >New Voucher
            <v-spacer></v-spacer>
            <v-icon
                    dark
                    large
                    v-text="icons.mdiPlus"
            ></v-icon>
        </v-card-title>

        <v-card-text class="pt-7">
            <v-text-field
                    label="Title"
                    color="secondary"
                    class="mb-3"
                    hide-details
                    outlined
                    dense
                    clearable
            ></v-text-field>

            <v-textarea
                    label="Description"
                    color="secondary"
                    class="mb-3"
                    hide-details
                    outlined
                    clearable
            ></v-textarea>

            <v-text-field
                    type="number"
                    label="Number of Vouchers"
                    color="secondary"
                    class="mb-3"
                    hide-details
                    outlined
                    dense
                    clearable
            ></v-text-field>

            <v-file-input
                    label="Upload Voucher Image"
                    color="secondary"
                    class="mb-3"
                    hide-details
                    outlined
                    dense
            ></v-file-input>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="$emit('close')">cancel</v-btn>
            <v-btn color="secondary" width="80">save</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import { mdiAutoFix, mdiPlus } from "@mdi/js";

    export default {
        name: "CreateUpdateVoucher",
        data: () => ({
            icons: {
                mdiAutoFix,
                mdiPlus,
            }
        })
    };
</script>

<style scoped>

</style>