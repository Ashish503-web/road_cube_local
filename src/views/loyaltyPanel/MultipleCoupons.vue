<template>
    <v-container fluid style="background: #eaedf1">
        <v-sheet class="pa-3">
            <v-toolbar flat>
                <v-btn
                    color="secondary"
                    class="text-capitalize"
                    depressed
                    @click="multipleCouponDialog = true"
                    >create</v-btn
                >
                <v-spacer></v-spacer>
                <v-btn
                    color="secondary"
                    class="text-capitalize"
                    depressed
                    @click="analiticsDialog = true"
                    >analitical report</v-btn
                >
            </v-toolbar>

            <v-toolbar flat>
                <v-spacer></v-spacer>
                <v-col cols="12" sm="4" class="pa-0">
                    <v-text-field
                        label="Search"
                        color="secondary"
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
                class="b-outlined"
            >
                <template v-slot:item.name="{ item }">
                    <router-link
                        class="navLink"
                        to="/loyaltyPanel/multiple-coupons"
                        >{{ item.name }}</router-link
                    >
                </template>

                <template v-slot:item.actions>
                    <v-btn
                        color="primary"
                        class="text-capitalize mr-2"
                        outlined
                        depressed
                    >
                        <a href="#" class="navLink">download excel</a>
                    </v-btn>

                    <v-tooltip color="secondary" top>
                        <template v-slot:activator="{ on }">
                            <v-btn color="red" icon v-on="on">
                                <v-icon v-text="icons.mdiClose"></v-icon>
                            </v-btn>
                        </template>

                        <span class="font-weight-bold">Delete</span>
                    </v-tooltip>
                </template>
            </v-data-table>

            <v-dialog v-model="multipleCouponDialog" max-width="520" scrollable>
                <CreateForm  @close="multipleCouponDialog=false"/>
            </v-dialog>

            <v-dialog v-model="analiticsDialog" max-width="400" scrollable>
                <AnaliticalReportForm @close="analiticsDialog=false"/>
            </v-dialog>
        </v-sheet>
    </v-container>
</template>

<script>
import { mdiCalendarMonth, mdiMagnify, mdiPlus, mdiClose } from "@mdi/js";
import CreateForm from "../../components/loyaltyPanel/multipleCoupons/CreateForm";
import AnaliticalReportForm from "../../components/loyaltyPanel/multipleCoupons/AnaliticalReportForm";

export default {
    name: "MultipleCoupons",
    components: { AnaliticalReportForm, CreateForm },
    data: () => ({
        icons: { mdiCalendarMonth, mdiMagnify, mdiPlus, mdiClose },
        pickedDates: [],
        multipleCouponDialog: false,
        notificationViaEmail: false,
        stores: ["Katerina", "Pelataki", "Kainouria", "Neo Meo", "Dimitris"],
        analiticsDialog: false,
        voucher: {
            image: "",
            imageFile: ""
        },
        headers: [
            { text: "Name", value: "name" },
            { text: "Number of Coupons", value: "count" },
            { text: "Actions", value: "actions" }
        ],
        multipleCoupons: [
            { name: "vasso", count: 10 },
            { name: "testvasso", count: 1 }
        ],
        itemsPerPageOptions: [10, 20, 30, -1]
    }),

    methods: {
        onFileSelected(event) {
            this.voucher.imageFile = event;
            const reader = new FileReader();
            reader.readAsDataURL(this.voucher.imageFile);
            reader.onload = e => (this.voucher.image = e.target.result);
        }
    },

    watch: {
        pickedDates(val) {
            if (val[0] > val[1]) {
                let holder = val[0];
                val[0] = val[1];
                val[1] = holder;
            }
        }
    }
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
