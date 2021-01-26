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
            <v-col cols="auto" class="ml-3" style="position: relative">
                <v-switch
                    v-model="shopping_cart"
                    :label="
                        shopping_cart
                            ? translations.on[lang]
                            : translations.off[lang]
                    "
                    :readonly="readonly"
                    color="secondary"
                    class="mt-0 pt-0"
                    hide-details="auto"
                ></v-switch>

                <div v-if="readonly" class="b-not-allowed"></div>
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
        shopping_cart: null
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        loading() {
            return this.$store.state.storePanel.profile.loading.shoppingCart;
        },

        errorMessage() {
            return this.$store.state.storePanel.profile.errorMessage
                .shoppingCart;
        },

        readonly() {
            return !this.$store.state.storePanel.store.flags.reward
                .orders_allowed;
        }
    },

    methods: {
        ...mapActions("storePanel/profile", ["updateShoppingCart"])
    },

    watch: {
        ["$store.state.storePanel.store.shopping_cart"]: {
            immediate: true,
            handler(val) {
                this.shopping_cart = val;
            }
        }
    }
};
</script>

<style scoped>
.b-not-allowed {
    cursor: no-drop;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
</style>
