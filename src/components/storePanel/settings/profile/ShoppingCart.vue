<template>
    <b-standard-card
        :title="translations.title[lang]"
        :loading="loading"
        :error-message="errorMessage"
        @submit="updateShoppingCart({ type: 'shoppingCart', shopping_cart })"
    >
        {{ translations.info[lang] }}

        <v-row no-gutters justify="center" align="center" class="mt-3">
            <v-col cols="auto" class="subtitle-2">
                {{ translations.toggle[lang] }}:
            </v-col>
            <v-col cols="auto" class="ml-3">
                <v-switch
                    v-model="shopping_cart"
                    :label="
                        shopping_cart
                            ? translations.on[lang]
                            : translations.off[lang]
                    "
                    :disabled="disabled"
                    color="secondary"
                    class="mt-0 pt-0"
                    hide-details="auto"
                ></v-switch>
            </v-col>
        </v-row>
    </b-standard-card>
</template>

<script>
import { mapActions } from "vuex";
import translations from "@/utils/translations/storePanel/settings/profile/shoppingCart";

export default {
    name: "ShoppingCart",

    mixins: [translations],

    data: () => ({
        shopping_cart: null,
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        loading() {
            return this.$store.state.storePanel.settings.profile.loading
                .shoppingCart;
        },

        errorMessage() {
            return this.$store.state.storePanel.settings.profile.errorMessage
                .shoppingCart;
        },

        disabled() {
            return !this.$store.state.storePanel.store.flags.reward
                .orders_allowed;
        },
    },

    methods: {
        ...mapActions("storePanel/settings/profile", ["updateShoppingCart"]),
    },

    watch: {
        ["$store.state.storePanel.store.shopping_cart"]: {
            immediate: true,
            handler(val) {
                this.shopping_cart = val;
            },
        },
    },
};
</script>
