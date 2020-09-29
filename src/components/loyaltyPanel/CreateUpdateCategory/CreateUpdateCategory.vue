<template>
    <v-card>
        <v-card-title class="secondary white--text">
            New Category
            <v-spacer></v-spacer>
            <v-icon
                    large
                    dark
                    v-text="icons.mdiPlus"
            ></v-icon>
        </v-card-title>

        <v-card-text class="pt-7">
            <v-text-field
                    label="Category Name"
                    color="secondary"
                    outlined
                    dense
                    clearable
                    hide-details
                    class="mb-3"
            ></v-text-field>

            <v-text-field
                    label="Font Color"
                    color="secondary"
                    outlined
                    dense
                    clearable
                    class="mb-3"
                    hide-details
            ></v-text-field>

            <v-text-field
                    label="Background Color"
                    class="mb-3"
                    color="secondary"
                    outlined
                    dense
                    clearable
                    hide-details
            ></v-text-field>

            <v-row no-gutters>
                <v-col cols="6"></v-col>
                <v-col cols="6">
                    <v-file-input
                            label="Image Category"
                            color="secondary"
                            hide-details
                            dense
                            class="mb-3"
                    ></v-file-input>
                </v-col>
            </v-row>

            <v-text-field
                    label="English"
                    class="mb-3"
                    color="secondary"
                    outlined
                    dense
                    clearable
                    hide-details
            ></v-text-field>

            <v-text-field
                    label="Italian"
                    class="mb-3"
                    color="secondary"
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
        name: "CreateUpdateCategory",

        data: () => ({
            icons: {
                mdiPlus
            }
        })
    };
</script>

<style scoped>

</style>