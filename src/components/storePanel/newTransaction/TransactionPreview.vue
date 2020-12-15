<template>
    <v-sheet color="rgba(234, 237, 241, 0.57)" outlined class="subtitle-2 pa-3">
        <div>
            {{ translations.userPoints[lang] }}:
            {{ transactionPreview.current_user_points }}
        </div>
        <div>
            {{ translations.newUserPoints[lang] }}:
            {{ transactionPreview.new_user_points }}
        </div>
        <div>
            {{ translations.totalAmount[lang] }}:
            {{ transactionPreview.total_amount }}
        </div>
        <div>
            {{ translations.totalDiscount[lang] }}:
            {{ transactionPreview.total_discount }}
        </div>
        <div>
            {{ translations.wonPoints[lang] }}:
            {{ transactionPreview.won_points }}
        </div>
        <div>
            {{ translations.lostPoints[lang] }}:
            {{ transactionPreview.lost_points }}
        </div>
        <v-row no-gutters style="height: 20px" align="center">
            <v-progress-linear
                color="secondary"
                :indeterminate="previewLoading"
                :active="previewLoading"
                height="2"
            ></v-progress-linear>
        </v-row>
    </v-sheet>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import translations from "@/utils/translations/storePanel/newTransaction/transactionPreview";

export default {
    name: "TransactionPreview",

    mixins: [translations],

    computed: {
        ...mapState("storePanel/transactions", ["previewLoading"]),

        lang() {
            return this.$route.params.lang;
        },

        transactionPreview: {
            get() {
                return this.$store.state.storePanel.transactions
                    .transactionPreview;
            },

            set(val) {
                this.setTransactionPreview(val);
            },
        },
    },

    methods: {
        ...mapMutations("storePanel/transactions", ["setTransactionPreview"]),
    },

    beforeDestroy() {
        this.transactionPreview = {};
    },
};
</script>
