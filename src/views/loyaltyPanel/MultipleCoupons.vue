<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-toolbar flat>
                <v-btn
                    color="secondary"
                    class="text-capitalize px-5"
                    depressed
                    v-text="translations.create[lang]"
                    @click="dialog = true"
                ></v-btn>

                <v-spacer></v-spacer>

                <v-btn
                    color="secondary"
                    class="text-capitalize px-5"
                    depressed
                    v-text="translations.analiticalReport[lang]"
                    @click="analiticsDialog = true"
                ></v-btn>
            </v-toolbar>

            <v-toolbar flat>
                <v-spacer></v-spacer>
                <v-col cols="12" sm="4" class="pa-0">
                    <b-search-field></b-search-field>
                </v-col>
            </v-toolbar>

            <v-data-table
                :headers="headers"
                :items="multipleCoupons"
                :footer-props="{ itemsPerPageOptions }"
                class="b-outlined"
            >
                <template v-slot:item.name="{ item }">
                    <router-link
                        class="navLink"
                        to="/loyaltyPanel/multiple-coupons"
                        >{{ item.name }}</router-link
                    >
                </template>

                <template v-slot:item.actions>
                    <v-tooltip color="secondary" top>
                        <template v-slot:activator="{ on }">
                            <v-btn color="green darken-3" icon v-on="on">
                                <v-icon
                                    v-text="icons.mdiMicrosoftExcel"
                                ></v-icon>
                            </v-btn>
                        </template>

                        <span
                            class="font-weight-bold"
                            v-text="translations.downloadExcel[lang]"
                        ></span>
                    </v-tooltip>

                    <v-tooltip color="secondary" top>
                        <template v-slot:activator="{ on }">
                            <v-btn color="red" icon v-on="on">
                                <v-icon v-text="icons.mdiClose"></v-icon>
                            </v-btn>
                        </template>

                        <span
                            class="font-weight-bold"
                            v-text="translations.delete[lang]"
                        ></span>
                    </v-tooltip>
                </template>
            </v-data-table>

            <v-dialog v-model="dialog" max-width="500">
                <CreateForm @cancel="dialog = false" />
            </v-dialog>

            <v-dialog v-model="analiticsDialog" max-width="420">
                <AnaliticalReportForm @cancel="analiticsDialog = false" />
            </v-dialog>
        </v-sheet>
    </v-container>
</template>

<script>
import { mdiMicrosoftExcel, mdiClose } from "@mdi/js";

import CreateForm from "@/components/loyaltyPanel/multipleCoupons/CreateForm";
import AnaliticalReportForm from "@/components/loyaltyPanel/multipleCoupons/AnaliticalReportForm";
import translations from "@/utils/translations/loyaltyPanel/multipleCoupons";

export default {
    name: "MultipleCoupons",

    components: { CreateForm, AnaliticalReportForm },

    mixins: [translations],

    data: () => ({
        icons: { mdiMicrosoftExcel, mdiClose },
        multipleCoupons: [
            { name: "vasso", count: 10 },
            { name: "testvasso", count: 1 }
        ],
        itemsPerPageOptions: [10, 20, 30, -1],
        dialog: false,
        analiticsDialog: false
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        headers() {
            return [
                { text: this.translations.name[this.lang], value: "name" },
                {
                    text: this.translations.numberOfCoupons[this.lang],
                    value: "count"
                },
                { text: this.translations.actions[this.lang], value: "actions" }
            ];
        }
    }
};
</script>

<style scoped>
.b-outlined {
    border: 1px solid rgba(0, 0, 0, 0.12);
}

.navLink {
    text-decoration: none;
}

.navLink:hover {
    text-decoration: underline;
}
</style>
