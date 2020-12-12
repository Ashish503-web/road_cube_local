<template>
    <b-card title="Refund Transaction" @cancel="$emit('cancel')">
        <v-row
            v-for="(product, i) in transactionProfile.transaction_items"
            :key="product.product_id"
            no-gutters
            align="center"
            class="b-outlined pa-3"
            :class="{ 'mt-3': i !== 0 }"
        >
            <v-col cols="6">
                {{ product.product_name[lang] }}
            </v-col>
            <v-col cols="6">
                <b-text-field label="Quantity" no-top-margin></b-text-field>
            </v-col>
        </v-row>
    </b-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "RefundTransaction",

    props: {
        transactionId: [String, Number]
    },

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        loading() {
            return this.$store.state.loading;
        },

        transactionProfile() {
            return this.$store.state.storePanel.transactions.transactionProfile;
        }
    },

    methods: {
        ...mapActions("storePanel/transactions", ["getItem"])
    },

    watch: {
        transactionId: {
            immediate: true,
            handler(val) {
                this.getItem(val);
            }
        }
    }
};
</script>
