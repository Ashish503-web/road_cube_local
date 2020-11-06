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

        <v-card v-else>
            <v-card-title>
                <v-icon
                    size="28"
                    class="mr-3 text--primary"
                    v-text="icons.mdiTextBoxOutline"
                ></v-icon>
                Transaction
                <v-spacer></v-spacer>
                <v-btn icon @click="$emit('cancel')">
                    <v-icon v-text="icons.mdiClose"></v-icon>
                </v-btn>
            </v-card-title>

            <v-divider></v-divider>

            <v-card-text class="pt-4">
                <v-sheet
                    color="rgba(234, 237, 241, 0.57)"
                    outlined
                    class="pa-3 mb-3"
                >
                    User Identity: {{ transactionProfile.user_identity }}
                </v-sheet>

                <v-sheet
                    color="rgba(234, 237, 241, 0.57)"
                    outlined
                    class="pa-3 mb-3"
                >
                    Date: {{ transactionProfile.created_at }}
                </v-sheet>

                <v-sheet
                    color="rgba(234, 237, 241, 0.57)"
                    outlined
                    class="pa-3 mb-3"
                >
                    Total Price:
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
                    Total Points: {{ transactionProfile.total_points }}
                </v-sheet>

                <v-sheet
                    color="rgba(234, 237, 241, 0.57)"
                    outlined
                    class="pa-3 mb-3"
                >
                    Receipt Number: {{ transactionProfile.receipt_number }}
                </v-sheet>

                <v-sheet
                    color="rgba(234, 237, 241, 0.57)"
                    outlined
                    class="pa-3 mb-3"
                >
                    Type:
                    {{ transactionProfile.transaction_type_name }}
                </v-sheet>

                <v-sheet
                    color="rgba(234, 237, 241, 0.57)"
                    outlined
                    class="pa-3 mb-3"
                >
                    Status:
                    {{ transactionProfile.transaction_status_name }}
                </v-sheet>

                <h3 class="subtitle-1 font-weight-bold mb-3">
                    Transaction Items
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

export default {
    name: "TransactionProfile",

    props: {
        transactionId: [String, Number]
    },

    data: () => ({
        icons: { mdiTextBoxOutline, mdiClose },
        lang: "el"
    }),

    computed: {
        headers() {
            return [
                { text: "Product", value: `product_name[${this.lang}]` },
                { text: "Price", value: "price" },
                { text: "Points", value: "points" }
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
