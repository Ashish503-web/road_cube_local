<template>
    <v-container fluid style="background: #eaedf1">
        <v-sheet class="pa-3">
            <v-toolbar flat>
                <v-btn
                    color="secondary"
                    class="text-capitalize"
                    depressed
                    @click="multipleCouponDialog = true"
                >create</v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    color="secondary"
                    class="text-capitalize"
                    depressed
                    @click="analiticsDialog = true"
                >analitical report</v-btn>
            </v-toolbar>

            <v-toolbar flat>
                <v-spacer></v-spacer>
                <v-col cols="4">
                    <v-text-field
                        label="Search"
                        rounded
                        outlined
                        dense
                        clearable
                        hide-details
                        :prepend-inner-icon="icons.mdiMagnify"
                    ></v-text-field>
                </v-col>
            </v-toolbar>

            <v-data-table
                :headers="headers"
                :items="multipleCoupons"
                :footer-props="{ itemsPerPageOptions }"
            >
                <template v-slot:item.name="{ item }">
                    <router-link class="navLink" to="/loyaltyPanel/multiple-coupons">{{ item.name }}</router-link>
                </template>

                <template v-slot:item.actions>
                    <v-btn color="primary" class="text-capitalize mr-2" outlined depressed>
                        <a href="#" class="navLink">download excel</a>
                    </v-btn>

                    <v-tooltip top>
                        <template v-slot:activator="{ on }">
                            <v-btn color="red" icon v-on="on">
                                <v-icon v-text="icons.mdiClose"></v-icon>
                            </v-btn>
                        </template>

                        <span>Delete</span>
                    </v-tooltip>
                </template>
            </v-data-table>

            <v-dialog v-model="multipleCouponDialog" max-width="520" scrollable>
                <v-card>
                    <v-card-title class="grey lighten-3">
                        New Multiple Coupon
                        <v-spacer></v-spacer>
                        <v-icon color="secondary" large v-text="icons.mdiPlus"></v-icon>
                    </v-card-title>

                    <v-card-text class="pt-7">
                        <v-text-field label="Name" outlined dense clearable></v-text-field>

                        <v-text-field label="Description" outlined dense clearable></v-text-field>

                        <v-text-field label="Coupon Value" outlined dense clearable></v-text-field>

                        <v-text-field
                            type="number"
                            label="Number of Coupons"
                            outlined
                            dense
                            clearable
                        ></v-text-field>

                        <v-text-field type="number" outlined dense clearable></v-text-field>

                        <v-row>
                            <v-col cols="6">
                                <v-img :src="voucher.image"></v-img>
                            </v-col>
                            <v-col cols="6">
                                Upload Voucher Image:
                                <v-file-input outlined dense hide-details @change="onFileSelected"></v-file-input>
                            </v-col>
                        </v-row>

                        <v-checkbox v-model="notificationViaEmail" color="secondary" class="pa-0">
                            <template v-slot:label>
                                <h4 class="subtitle-2">Notification via Email</h4>
                            </template>
                        </v-checkbox>

                        <template v-if="notificationViaEmail">
                            <v-text-field label="Email1" outlined dense clearable></v-text-field>
                            <v-text-field label="Email2" outlined dense clearable></v-text-field>
                            <v-text-field
                                type="number"
                                label="Update how many days to send email"
                                outlined
                                dense
                                clearable
                            ></v-text-field>
                        </template>

                        <v-text-field label="Κωδικός κουπονιού" outlined dense clearable></v-text-field>

                        <v-row>
                            <v-col
                                cols="6"
                                class="subitle-2 secondary--text"
                            >Select stores to redeem</v-col>
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
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text @click="multipleCouponDialog = false">cancel</v-btn>
                        <v-btn color="primary" width="80">save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog v-model="analiticsDialog" max-width="400" scrollable>
                <v-card>
                    <v-card-title class="grey lighten-3">Analytical Report</v-card-title>

                    <v-card-text class="pt-7">
                        <v-row justify="space-between">
                            <v-col cols="6">
                                <v-text-field
                                    v-model="pickedDates[0]"
                                    label="Start Date"
                                    outlined
                                    dense
                                    readonly
                                    :append-icon="icons.mdiCalendarMonth"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="6">
                                <v-text-field
                                    v-model="pickedDates[1]"
                                    label="End Date"
                                    outlined
                                    dense
                                    readonly
                                    :append-icon="icons.mdiCalendarMonth"
                                ></v-text-field>
                            </v-col>
                        </v-row>

                        <v-date-picker
                            v-model="pickedDates"
                            class="b-outlined"
                            range
                            scrollable
                            full-width
                            no-title
                        ></v-date-picker>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text @click="analiticsDialog = false">cancel</v-btn>
                        <v-btn color="primary">download excel</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-sheet>
    </v-container>
</template>

<script>
import { mdiCalendarMonth, mdiClose, mdiPlus } from "@mdi/js";

export default {
    name: "MultipleCoupons",

    data: () => ({
        icons: { mdiCalendarMonth, mdiClose, mdiPlus },
        pickedDates: [],
        multipleCouponDialog: false,
        notificationViaEmail: false,
        stores: ["Katerina", "Pelataki", "Kainouria", "Neo Meo", "Dimitris"],
        analiticsDialog: false,
        voucher: {
            image: "",
            imageFile: "",
        },
        headers: [
            { text: "Name", value: "name" },
            { text: "Number of Coupons", value: "count" },
            { text: "Actions", value: "actions" },
        ],
        multipleCoupons: [
            { name: "vasso", count: 10 },
            { name: "testvasso", count: 1 },
        ],
        itemsPerPageOptions: [10, 20, 30, -1],
    }),

    methods: {
        onFileSelected(event) {
            this.voucher.imageFile = event;
            const reader = new FileReader();
            reader.readAsDataURL(this.voucher.imageFile);
            reader.onload = (e) => (this.voucher.image = e.target.result);
        },
    },

    watch: {
        pickedDates(val) {
            if (val[0] > val[1]) {
                let holder = val[0];
                val[0] = val[1];
                val[1] = holder;
            }
        },
    },
};
</script>

<style scoped>
.b-outlined {
    border: 1px solid rgba(0, 0, 0, 0.12);
}

.navLink {
    text-decoration: none;
}

.navLink:hover {
    text-decoration: underline;
}
</style>
