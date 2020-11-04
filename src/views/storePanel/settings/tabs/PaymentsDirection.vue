<template>
    <v-tab-item :value="$route.path" class="pt-5">
        <v-sheet class="pa-3">
            <v-alert type="info" class="font-weight-bold">
                Choose how each card will be cleared in your store.
            </v-alert>

            <v-row no-gutters class="text-center mt-5">
                <v-col cols="12" sm="6" class="subtitle-2 pa-3">
                    Card From:
                </v-col>
                <v-col cols="12" sm="6" class="subtitle-2 pa-3">
                    Clearance From:
                </v-col>
            </v-row>

            <v-sheet outlined class="text-center">
                <v-row
                    v-for="(provider, i) in bankProviders"
                    :key="provider.bank_provider_id"
                    no-gutters
                    class="b-outlined-bottom pa-3"
                >
                    <v-col cols="6" class="pa-3">
                        <v-img
                            :src="$store.state.storePanel.store.logo"
                            width="50"
                            height="50"
                            class="mx-auto"
                        ></v-img>
                        {{ provider.name[lang] }}
                    </v-col>

                    <v-col cols="6">
                        <v-row
                            v-if="storeBankProviders.length"
                            no-gutters
                            align="center"
                            justify="space-around"
                            class="b-outlined pa-3 mx-auto"
                            style="width: 85%"
                        >
                            <v-col cols="auto">
                                <v-img
                                    :src="$store.state.storePanel.store.logo"
                                    width="50"
                                    height="50"
                                    class="mx-auto"
                                ></v-img>
                                {{ provider.bankProvider.name[lang] }}
                            </v-col>
                            <v-col
                                cols="auto"
                                class="blue--text text--darken-3"
                            >
                                {{ provider.bankProvider.description[lang] }}
                            </v-col>
                            <v-col cols="auto">
                                <v-btn
                                    text
                                    :class="provider.bic"
                                    @click="open(provider.bic, i)"
                                >
                                    <v-icon
                                        v-text="
                                            menu
                                                ? icons.mdiMenuUp
                                                : icons.mdiMenuDown
                                        "
                                    ></v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-sheet>
            <v-menu
                v-model="menu"
                nudge-bottom="38"
                nudge-right="64"
                min-width="150"
                left
                :attach="elemToWrap"
            >
                <v-list dense class="text-left">
                    <v-list-item
                        v-for="provider in storeBankProviders"
                        :key="provider.store_bank_provider_id"
                        @click.stop="selectProvider(provider.bank_provider)"
                    >
                        <v-list-item-title
                            v-text="provider.bank_provider.name[lang]"
                        ></v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-sheet>
    </v-tab-item>
</template>

<script>
import { mdiMenuUp, mdiMenuDown } from "@mdi/js";
import { mapState, mapActions } from "vuex";

export default {
    name: "PaymentsDirection",

    data: () => ({
        icons: { mdiMenuUp, mdiMenuDown },
        menu: false,
        elemToWrap: "",
        index: null
    }),

    computed: {
        ...mapState("storePanel/settings/paymentsDirection", [
            "allBankProviders",
            "storeBankProviders"
        ]),

        lang() {
            return this.$route.params.lang;
        },

        bankProviders() {
            let arr = this.allBankProviders.map(b => {
                if (this.storeBankProviders.length)
                    b.bankProvider = this.storeBankProviders[0].bank_provider;
                return b;
            });

            return arr;
        }
    },

    methods: {
        ...mapActions("storePanel/settings/paymentsDirection", [
            "getAllBankProviders",
            "getStoreBankProviders"
        ]),

        open(className, index) {
            this.elemToWrap = "." + className;
            this.index = index;
            this.menu = true;
        },

        selectProvider(bankProvider) {
            this.bankProviders[this.index].bankProvider = bankProvider;
            this.menu = false;
        }
    },

    mounted() {
        this.getAllBankProviders();
        this.getStoreBankProviders();
    }
};
</script>

<style scoped>
.b-outlined-bottom {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.b-outlined-bottom:last-child {
    border-bottom: none;
}
</style>
