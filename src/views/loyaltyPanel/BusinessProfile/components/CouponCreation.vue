<template>
    <v-card
        class="mx-auto mt-4"
        outlined
    >
        <v-card-title>Coupon Creation</v-card-title>
        <div class="dashed_border  mt-6 mr-4 ml-4 mb-4">
            <v-radio-group
                class=" ml-4 "
                :disabled="disabled"
                :readonly="readonly"
                :mandatory="mandatory"
                :multiple="multiple"
                :error="error"
                :success="success"
                :row="row"
                :color="color"
                v-model="defaultAnswer"
            >
                <v-row class="font-weight-medium">
                    <v-col cols="4">
                        <img src="https://www.roadcube.com/images/roadcube_qr.png" alt="" width="150">
                        <v-radio label="Numeric QR Code" value="0" ></v-radio>
                    </v-col>
                    <v-col cols="4">
                        <img src="https://www.roadcube.com/images/roadcube_qr.png" alt="" width="150">
                        <v-radio label="Alphanumeric QR Code" value="1"></v-radio>
                    </v-col>
                    <v-col cols="4">
                        <img src="https://www.roadcube.com/images/roadcube_barcode2.png" alt="" width="150">
                        <v-radio label="Numeric Barcode" value="2"></v-radio>
                    </v-col>
                </v-row>
            </v-radio-group>
        </div>
        <v-card-actions>

            <v-btn
                color="light-blue accent-1"
                class="white--text"
            >
                Save
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    data: () => ({
        defaultAnswer:'0',
        disabled: false,
        readonly: false,
        loading: false,
        flat: false,
        inset: false,
        error: false,
        success: false,
        mandatory: false,
        multiple: false,
        row: true,
        indeterminate: false,
        color: "accent",
        colors: [
            "accent",
            "teal",
            "blue",
            "error",
            "success"
        ]
    })
};
</script>
<style scoped>
.dashed_border {
    border: 1px dashed grey;
    border-radius: 10px;
}
</style>