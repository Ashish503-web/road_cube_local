<template>
    <v-card class="mt-12" outlined>
        <v-card-title class="grey lighten-3">Invoicing</v-card-title>

        <v-card-text class="pt-4 pb-0">
            <v-row no-gutters>
                <v-col cols="6" class="pr-2">
                    <v-text-field
                        label="Legal Name"
                        color="secondary"
                        outlined
                        dense
                        clearable
                    ></v-text-field>
                </v-col>
                <v-col cols="6" class="pl-2">
                    <v-text-field
                        label="Tax Id"
                        color="secondary"
                        outlined
                        dense
                        clearable
                    ></v-text-field>
                </v-col>
                <v-col cols="6" class="pr-2">
                    <v-text-field
                        label="Business Address"
                        color="secondary"
                        outlined
                        dense
                        clearable
                    ></v-text-field>
                </v-col>
                <v-col cols="6" class="pl-2">
                    <v-text-field
                        label="Profession"
                        color="secondary"
                        outlined
                        dense
                        clearable
                    ></v-text-field>
                </v-col>
                <v-col cols="6" class="pr-2">
                    <v-text-field
                        label="Jurisdiction"
                        color="secondary"
                        outlined
                        dense
                        clearable
                    ></v-text-field>
                </v-col>
                <v-col cols="6" class="pl-2">
                    <v-select
                        :items="['Greece 24%', 'Italy 22%', 'USA 0%']"
                        menu-props="offsetY"
                        label="Invoice from"
                        color="secondary"
                        item-color="secondary"
                        outlined
                        dense
                    ></v-select>
                </v-col>
            </v-row>
        </v-card-text>

        <v-card-actions class="pl-4">
            <v-btn color="secondary" class="text-capitalize" depressed
                >send invoice settings</v-btn
            >
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "Invoicing",

    data: () => ({})
};
</script>
