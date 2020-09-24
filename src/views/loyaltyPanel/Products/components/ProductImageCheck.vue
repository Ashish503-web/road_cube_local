<template>
    <v-col cols="12">
        <v-checkbox
                @input="checkHandler"
                v-model="formModal.productImageCheck.active"
                label=" I want the product to be displayed with an image in the application"></v-checkbox>
        <v-card class="dashed_border  mt-4" v-if="formModal.productImageCheck.active">
            <v-row>
                <v-col cols="6" class="pl-8">
                    <p>
                        Product Image (optional)

                    </p>
                    <img src="https://www.roadcube.com/images/no_image_icon.png" alt="">
                    <div class="my-2">
                        <v-btn text color="primary">
                            Delete
                        </v-btn>
                    </div>
                </v-col>
                <v-col cols="6">
                    <choose-file></choose-file>
                </v-col>
            </v-row>


        </v-card>
    </v-col>

</template>
<script>
    import ChooseFile from "../../BusinessProfile/components/ChooseFile";

    export default {
        props: ['formModal'],
        methods: {
            checkHandler() {
                this.formModal.productImageCheck.active = !this.formModal.productImageCheck.active
            }
        },
        components: {
            'choose-file': ChooseFile,
        }
    }
</script>
<style scoped>
    .dashed_border {
        border: 1px dashed grey;
        border-radius: 0;
        box-shadow: none;
    }
</style>