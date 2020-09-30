<template>
    <v-card>
        <v-card-title class="secondary white--text">
            New Multiple Coupon
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
                    hide-details
                    class="mb-3"
                    outlined
                    dense
                    clearable
            ></v-text-field>

            <v-text-field
                    label="Description"
                    outlined
                    dense
                    clearable
                    color="secondary"
                    hide-details
                    class="mb-3"
            ></v-text-field>

            <v-text-field
                    label="Coupon Value"
                    outlined
                    dense
                    clearable
                    color="secondary"
                    hide-details
                    class="mb-3"
            ></v-text-field>

            <v-text-field
                    type="number"
                    label="Number of Coupons"
                    outlined
                    dense
                    clearable
                    color="secondary"
                    hide-details
                    class="mb-3"
            ></v-text-field>

            <v-text-field
                    type="number"
                    outlined
                    dense
                    clearable
                    color="secondary"
                    hide-details
                    class="mb-3"
            ></v-text-field>

            <v-row>
                <v-col cols="6">
                    <v-img :src="voucher.image"></v-img>
                </v-col>
                <v-col cols="6">
                    Upload Voucher Image:
                    <v-file-input
                            outlined
                            dense
                            @change="onFileSelected"
                            color="secondary"
                            hide-details
                            class="mb-3"
                    ></v-file-input>
                </v-col>
            </v-row>

            <v-checkbox
                    v-model="notificationViaEmail"
                    color="secondary"
                    class="pa-0"
            >
                <template v-slot:label>
                    <h4 class="subtitle-2">
                        Notification via Email
                    </h4>
                </template>
            </v-checkbox>

            <template v-if="notificationViaEmail">
                <v-text-field
                        label="Email1"
                        outlined
                        dense
                        clearable
                        color="secondary"
                        hide-details
                        class="mb-3"
                ></v-text-field>
                <v-text-field
                        label="Email2"
                        outlined
                        dense
                        clearable
                        color="secondary"
                        hide-details
                        class="mb-3"
                ></v-text-field>
                <v-text-field
                        type="number"
                        label="Update how many days to send email"
                        outlined
                        dense
                        clearable
                        color="secondary"
                        hide-details
                        class="mb-3"
                ></v-text-field>
            </template>

            <v-text-field
                    label="Κωδικός κουπονιού"
                    outlined
                    dense
                    clearable
                    color="secondary"
                    hide-details
                    class="mb-3"
            ></v-text-field>

            <v-row>
                <v-col cols="6" class="subitle-2 secondary--text"
                >Select stores to redeem
                </v-col
                >
                <v-col cols="6">
                    <v-checkbox
                            color="secondary"
                            class="mt-0"
                            hide-details
                    >
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
                            <h4
                                    class="subtitle-2"
                                    v-text="store"
                            ></h4>
                        </template>
                    </v-checkbox>
                </v-col>
            </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="$emit('close')"
            >cancel
            </v-btn
            >
            <v-btn color="secondary" width="80">save</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import { mdiPlus } from "@mdi/js";

    export default {
        name: "CreateForm",
        data: () => ({
            icons: { mdiPlus },
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

<style scoped>

</style>