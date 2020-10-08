<template>
    <b-standard-card
        title="Coupon Creation"
        title-color="white"
        height="auto"
        submit-text="save"
        class="mt-5"
    >
        <v-row no-gutters>
            <v-col>
                <img
                    src="https://www.roadcube.com/images/roadcube_qr.png"
                    width="100%"
                />
            </v-col>

            <v-col>
                <img
                    src="https://www.roadcube.com/images/roadcube_qr.png"
                    width="100%"
                />
            </v-col>

            <v-col>
                <img
                    src="https://www.roadcube.com/images/roadcube_barcode2.png"
                    width="100%"
                />
            </v-col>
        </v-row>
        <v-radio-group class="mt-0 pt-0" hide-details>
            <v-row no-gutters class="font-weight-medium">
                <v-col cols="4">
                    <v-radio color="secondary" class="justify-center" value="0">
                    </v-radio>
                    <h4
                        class="subtitle-1 font-weight-bold text-center secondary--text"
                    >
                        Numeric QR Code
                    </h4>
                </v-col>
                <v-col cols="4">
                    <v-radio
                        color="secondary"
                        class="justify-center"
                        value="1"
                    ></v-radio>
                    <h4
                        class="subtitle-1 font-weight-bold text-center secondary--text"
                    >
                        Alphanumeric QR Code
                    </h4>
                </v-col>
                <v-col cols="4">
                    <v-radio
                        color="secondary"
                        class="justify-center"
                        value="2"
                    ></v-radio>
                    <h4
                        class="subtitle-1 font-weight-bold text-center secondary--text"
                    >
                        Numeric Barcode
                    </h4>
                </v-col>
            </v-row>
        </v-radio-group>
    </b-standard-card>
</template>

<script>
export default {
    name: "CouponCreation"
};
</script>
