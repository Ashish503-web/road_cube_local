<template>
    <v-card class="dashed_border  mt-4">

        <v-col cols="12 mt5">
            <v-text-field
                    label="Target Price"
                    :value="targetPrice"


                    outlined
            ></v-text-field>
        </v-col>

    </v-card>
</template>

<script>
    export default {
        data () {
            return {
                targetPrice: 0,
            }
        },
        methods:{

        }
    }
</script>
<style scoped>
    .dashed_border {
        border: 1px dashed grey;
        border-radius: 10px;
    }
</style>