<template>
    <v-card class="pa-0" flat>
        <v-card flat>
            <v-row>
                <PageTitle
                    v-bind:title="pageTitle"
                />
                <PageIcon
                    v-bind:icon="icons.mdiAccountBox"
                    v-bind:iconSize="iconSize"
                />
            </v-row>
        </v-card>

        <v-row class="pa-5 pt-3 pb-3" style="background: #eaedf1">
            <v-col cols="12">
                <v-card flat tile>
                    <Tab/>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import { mdiAccountBox, mdiMagnify, mdiPlus } from "@mdi/js";
import PageIcon from "@/components/loyaltyPanel/PageIcon";
import PageTitle from "@/components/loyaltyPanel/PageTitle";
import Tab from "@/components/loyaltyPanel/Customer/Tab";

export default {
  name: "Customer",
  components: {Tab, PageTitle, PageIcon},
  data: () => ({
        icons: {
            mdiAccountBox,
            mdiMagnify,
            mdiPlus
        },
        pageTitle: 'Customer',
        iconSize: '80',
        tab: 0,
        addCustomerDialog: false,
        userTabDialog: false,
        editDialog: false,
        addTabDialog: false,
    }),
    mounted() {
        this.customerData.forEach(item => {
            this.customerTotalData.transactions += item.transactions;
            this.customerTotalData.total += item.total;
            this.customerTotalData.redeemed += item.redeemed;
            this.customerTotalData.available += item.available;
        });
        this.customerData.push(this.customerTotalData);
    }
};
</script>
