<template>
    <v-card>
        <v-card-title class="secondary white--text">
            New Supplier
            <v-spacer></v-spacer>
            <v-icon
                    dark
                    large
                    v-text="icons.mdiPlus"
            ></v-icon>
        </v-card-title>

        <v-card-text class="pt-7">
            <v-text-field
                    label="Name"
                    color="secondary"
                    class="mb-3"
                    hide-details
                    outlined
                    dense
                    clearable
            ></v-text-field>

            <v-text-field
                    type="email"
                    label="Email1"
                    color="secondary"
                    class="mb-3"
                    hide-details
                    outlined
                    dense
                    clearable
            ></v-text-field>

            <v-text-field
                    type="email"
                    label="Email2"
                    color="secondary"
                    class="mb-3"
                    hide-details
                    outlined
                    dense
                    clearable
            ></v-text-field>

            <v-text-field
                    type="number"
                    label="Phone"
                    color="secondary"
                    class="mb-3"
                    hide-details
                    outlined
                    dense
                    clearable
            ></v-text-field>
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
    import { mdiPlus } from "@mdi/js";

    export default {
        name: "CreateUpdateSupplier",
        data: () => ({
            icons: {
                mdiPlus
            }
        })
    };
</script>

<style scoped>

</style>