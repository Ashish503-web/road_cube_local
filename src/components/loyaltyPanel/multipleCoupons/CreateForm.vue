<template>
    <b-card title="New Multiple Coupon" @cancel="$emit('cancel')">
        <b-text-field label="Name" no-top-margin></b-text-field>

        <b-text-field label="Description"></b-text-field>

        <b-text-field label="Coupon Value"></b-text-field>

        <b-text-field label="Number of Coupons" type="number"></b-text-field>

        <b-text-field type="number"></b-text-field>

        <v-row no-gutters class="mt-3">
            <v-col cols="6">
                <v-img :src="voucher.image"></v-img>
            </v-col>
            <v-col cols="6">
                Upload Voucher Image:
                <v-file-input
                    color="secondary"
                    class="mt-1"
                    outlined
                    dense
                    hide-details
                    @change="onFileSelected"
                ></v-file-input>
            </v-col>
        </v-row>

        <v-checkbox
            v-model="notificationViaEmail"
            color="secondary"
            hide-details
            class="pt-0 mt-3"
        >
            <template v-slot:label>
                <h4 class="subtitle-2">
                    Notification via Email
                </h4>
            </template>
        </v-checkbox>

        <template v-if="notificationViaEmail">
            <b-text-field label="Email1"></b-text-field>
            <b-text-field label="Email2"></b-text-field>
            <b-text-field
                label="Update how many days to send email"
                type="number"
            ></b-text-field>
        </template>

        <b-text-field label="Κωδικός κουπονιού"></b-text-field>

        <v-row no-gutters class="mt-3">
            <v-col cols="6" class="subtitle-2 text--secondary"
                >Select stores to redeem
            </v-col>
            <v-col cols="6">
                <v-checkbox color="secondary" class="mt-0" hide-details>
                    <template v-slot:label>
                        <h4 class="subtitle-2">All</h4>
                    </template>
                </v-checkbox>

                <v-checkbox
                    v-for="store in stores"
                    :key="store"
                    color="secondary"
                    class="mt-0"
                    hide-details
                >
                    <template v-slot:label>
                        <h4 class="subtitle-2" v-text="store"></h4>
                    </template>
                </v-checkbox>
            </v-col>
        </v-row>
    </b-card>
</template>

<script>
export default {
    name: "CreateForm",
    data: () => ({
        stores: ["Katerina", "Pelataki", "Kainouria", "Neo Meo", "Dimitris"],
        voucher: {
            image: "",
            imageFile: ""
        },
        notificationViaEmail: false
    }),
    methods: {
        onFileSelected(event) {
            this.voucher.imageFile = event;
            const reader = new FileReader();
            reader.readAsDataURL(this.voucher.imageFile);
            reader.onload = e => (this.voucher.image = e.target.result);
        }
    }
};
</script>

<style scoped></style>
