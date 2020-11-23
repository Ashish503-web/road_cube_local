<template>
    <b-card
        :title="translations.title[lang]"
        hide-default-footer
        @cancel="$emit('cancel')"
    >
        <v-row no-gutters justify="space-around" class="py-5">
            <v-btn
                color="secondary"
                class="text-capitalize mb-3 mb-sm-0"
                outlined
                v-text="translations.appointCleaners[lang]"
                @click="
                    () => {
                        setDialog(false);
                        $router.push(
                            `/${lang}/storePanel/settings/payment-providers`
                        );
                    }
                "
            ></v-btn>

            <v-btn
                color="secondary"
                class="text-none"
                outlined
                v-text="translations.paymentDirection[lang]"
                @click="
                    () => {
                        setDialog(false);
                        $router.push(
                            `/${lang}/storePanel/settings/payment-processing`
                        );
                    }
                "
            ></v-btn>
        </v-row>
    </b-card>
</template>

<script>
import { mapMutations } from "vuex";
import translations from "@/utils/translations/storePanel/settings/reward/mobilePayments";

export default {
    name: "MobilePayments",

    mixins: [translations],

    computed: {
        lang() {
            return this.$route.params.lang;
        }
    },

    methods: {
        ...mapMutations(["setDialog"])
    }
};
</script>
