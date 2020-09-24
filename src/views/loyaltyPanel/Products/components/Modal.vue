
<template>
    <v-dialog
            v-model="dialog"
            max-width="40%"
    >
        <v-card>
            <v-card-title class="headline">
                <v-icon v-text="icons.mdiPencil"></v-icon>

                Delete Product
            </v-card-title>

            <v-card-text>
                <v-checkbox
                        v-model="checkbox"
               label=" Delete product from  all existing companies"
                class="d-inline-block"></v-checkbox>

            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                        color="red   darken-1"

                        @click="dialog = false"
                >
                    Delete
                </v-btn>
                <v-btn
                        @click="dialog = false"
                >
                    Close
                </v-btn>


            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
    import {
        mdiPencil,
    } from "@mdi/js";
    export default {
        data(){
            return{
                icons: {
                    mdiPencil,

                },
                checkbox:true
            }
        },
        props:['dialog'],
    }
</script>