<template>
    <v-card flat>
        <v-col v-if="loading">
            <v-skeleton-loader
                class="mx-auto"
                max-width="600"
                type="heading"
                tile
            ></v-skeleton-loader>
            <v-skeleton-loader
                class="mx-auto"
                max-width="600"
                type="heading"
                tile
            ></v-skeleton-loader>
            <v-skeleton-loader
                class="mx-auto mt-3"
                max-width="600"
                type="image"
            ></v-skeleton-loader>
            <v-skeleton-loader
                class="mx-auto"
                max-width="600"
                type="image"
            ></v-skeleton-loader>
            <v-skeleton-loader
                class="mx-auto"
                max-width="600"
                type="image"
            ></v-skeleton-loader>
        </v-col>

        <v-card v-else tile>
            <v-card-title>
                <v-icon
                    size="28"
                    class="mr-3 text--primary"
                    v-text="icons.mdiTextBoxOutline"
                ></v-icon>
                {{ translations.title[lang] }}
                <v-spacer></v-spacer>
                <v-btn icon @click="$emit('cancel')">
                    <v-icon size="28" v-text="icons.mdiClose"></v-icon>
                </v-btn>
            </v-card-title>

            <v-divider></v-divider>

            <v-card-text class="pt-4">
                <v-sheet
                    color="rgba(234, 237, 241, 0.57)"
                    outlined
                    class="pa-3 mb-3"
                >
                    {{ translations.userIdentity[lang] }}:
                    {{ transactionProfile.user_identity }}
                </v-sheet>

                <v-sheet
                    color="rgba(234, 237, 241, 0.57)"
                    outlined
                    class="pa-3 mb-3"
                >
                    {{ translations.date[lang] }}:
                    {{ transactionProfile.created_at }}
                </v-sheet>

                <v-sheet
                    color="rgba(234, 237, 241, 0.57)"
                    outlined
                    class="pa-3 mb-3"
                >
                    {{ translations.totalPrice[lang] }}:
                    {{
                        new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "EUR",
                            minimumFractionDigits: 2
                        }).format(transactionProfile.total_price)
                    }}
                </v-sheet>

                <v-sheet
                    color="rgba(234, 237, 241, 0.57)"
                    outlined
                    class="pa-3 mb-3"
                >
                    {{ translations.totalPoints[lang] }}:
                    {{ transactionProfile.total_points }}
                </v-sheet>

                <v-sheet
                    color="rgba(234, 237, 241, 0.57)"
                    outlined
                    class="pa-3 mb-3"
                >
                    {{ translations.receiptNumber[lang] }}:
                    {{ transactionProfile.receipt_number }}
                </v-sheet>

                <v-sheet
                    color="rgba(234, 237, 241, 0.57)"
                    outlined
                    class="pa-3 mb-3"
                >
                    {{ translations.type[lang] }}:
                    {{ transactionProfile.transaction_type_name }}
                </v-sheet>

                <v-sheet
                    color="rgba(234, 237, 241, 0.57)"
                    outlined
                    class="pa-3 mb-3"
                >
                    {{ translations.status[lang] }}:
                    {{ transactionProfile.transaction_status_name }}
                </v-sheet>

                <h3 class="subtitle-1 font-weight-bold mb-3">
                    {{ translations.transactionItems[lang] }}
                </h3>

                <v-data-table
                    :headers="headers"
                    :items="transactionProfile.transaction_items"
                    :footer-props="{
                        itemsPerPageOptions: [12],
                        showCurrentPage: true
                    }"
                    :server-items-length="
                        transactionProfile.transaction_items.length
                    "
                    disable-sort
                    class="b-outlined"
                ></v-data-table>
            </v-card-text>
        </v-card>
    </v-card>
</template>

<script>
import { mdiTextBoxOutline, mdiClose } from "@mdi/js";
import { mapActions } from "vuex";

import translations from "@/utils/translations/storePanel/transactions/transactionProfile";

export default {
    name: "TransactionProfile",

    props: {
        transactionId: [String, Number]
    },

    mixins: [translations],

    data: () => ({
        icons: { mdiTextBoxOutline, mdiClose }
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        headers() {
            return [
                {
                    text: this.translations.product[this.lang],
                    value: `product_name[${this.lang}]`
                },
                {
                    text: this.translations.quantity[this.lang],
                    value: "quantity"
                },
                { text: this.translations.price[this.lang], value: "price" },
                { text: this.translations.points[this.lang], value: "points" }
            ];
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

<style scoped>
.b-goback-btn {
    position: absolute;
    top: 12px;
    left: 12px;
}
</style>
