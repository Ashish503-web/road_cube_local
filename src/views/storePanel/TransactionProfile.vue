<template>
    <v-sheet class="pa-6" height="100%" color="rgba(234, 237, 241, 0.57)">
        <v-row class="fill-height" align="center">
            <v-tooltip color="secondary" top>
                <template v-slot:activator="{ on }">
                    <v-btn
                        class="b-goback-btn"
                        icon
                        v-on="on"
                        to="/storePanel/transactions"
                    >
                        <v-icon v-text="icons.mdiArrowLeft"></v-icon>
                    </v-btn>
                </template>

                <span class="font-weight-bold">Go Back</span>
            </v-tooltip>

            <v-col v-if="loading">
                <v-skeleton-loader
                    class="mx-auto"
                    max-width="500"
                    type="image"
                ></v-skeleton-loader>
                <v-skeleton-loader
                    class="mx-auto"
                    max-width="500"
                    type="image"
                ></v-skeleton-loader>
                <v-skeleton-loader
                    class="mx-auto"
                    max-width="500"
                    type="image"
                ></v-skeleton-loader>
            </v-col>

            <v-card v-else width="500" class="mx-auto" outlined>
                <v-card-title>
                    <v-icon
                        size="28"
                        class="mr-3 text--primary"
                        v-text="icons.mdiTextBoxOutline"
                    ></v-icon>
                    Transaction
                </v-card-title>

                <v-divider></v-divider>

                <v-card-text>
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
                                minimumFractionDigits: 2,
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
                </v-card-text>
            </v-card>
        </v-row>
    </v-sheet>
</template>

<script>
import { mdiArrowLeft, mdiTextBoxOutline } from "@mdi/js";
import { mapActions } from "vuex";

export default {
    name: "TransactionProfile",

    data: () => ({
        icons: { mdiArrowLeft, mdiTextBoxOutline },
    }),

    computed: {
        loading() {
            return this.$store.state.loading;
        },

        transactionProfile() {
            return this.$store.state.storePanel.transactions.transactionProfile;
        },
    },

    methods: {
        ...mapActions("storePanel/transactions", ["getItem"]),
    },

    mounted() {
        this.getItem(this.$route.params.id);
    },
};
</script>

<style scoped>
.b-goback-btn {
    position: absolute;
    top: 12px;
    left: 12px;
}
</style>