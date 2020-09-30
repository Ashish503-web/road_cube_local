<template>
    <v-card>
        <v-card-title class="secondary white--text">
            New Supplier
            <v-spacer></v-spacer>
            <v-icon large dark v-text="icons.mdiPlus"></v-icon>
        </v-card-title>

        <v-card-text class="pt-5">
            <v-text-field
                label="Ονομα"
                color="secondary"
                outlined
                dense
                clearable
                hide-details
            ></v-text-field>

            <v-text-field
                type="email"
                label="Email1"
                color="secondary"
                class="mt-3"
                outlined
                dense
                clearable
                hide-details
            ></v-text-field>

            <v-text-field
                type="email"
                label="Email2"
                color="secondary"
                class="mt-3"
                outlined
                dense
                clearable
                hide-details
            ></v-text-field>

            <v-text-field
                label="Κωδικός"
                color="secondary"
                class="mt-3"
                outlined
                dense
                clearable
                hide-details
            ></v-text-field>

            <v-text-field
                type="number"
                label="Τηλέφωνο"
                color="secondary"
                class="mt-3"
                outlined
                dense
                clearable
                hide-details
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
    name: "SupplierForm",
    data: () => ({
        icons: {
            mdiPlus
        }
    })
};
</script>

<style scoped></style>
