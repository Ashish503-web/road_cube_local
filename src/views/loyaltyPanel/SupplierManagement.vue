<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-toolbar flat height="90">
                <v-btn
                    color="secondary"
                    class="text-capitalize px-5"
                    depressed
                    v-text="translations.createSupplier[lang]"
                    @click="dialog = true"
                ></v-btn>

                <v-spacer></v-spacer>

                <v-col cols="12" sm="4" class="pa-0">
                    <b-search-field></b-search-field>
                </v-col>
            </v-toolbar>

            <v-data-table
                :headers="headers"
                :items="items"
                :footer-props="{ itemsPerPageOptions }"
                class="b-outlined"
            >
                <template v-slot:item.actions="{ item }">
                    <v-tooltip color="secondary" top>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                color="yellow darken-3"
                                icon
                                v-on="on"
                                @click="myFunc(item)"
                            >
                                <v-icon
                                    v-text="icons.mdiPencilOutline"
                                ></v-icon>
                            </v-btn>
                        </template>

                        <span
                            class="font-weight-bold"
                            v-text="translations.update[lang]"
                        ></span>
                    </v-tooltip>

                    <v-tooltip color="secondary" top>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                color="red"
                                icon
                                v-on="on"
                                @click="deleteDialog = true"
                            >
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
                <SupplierForm @cancel="dialog = false" />
            </v-dialog>
        </v-sheet>
    </v-container>
</template>

<script>
import { mdiPencilOutline, mdiClose } from "@mdi/js";
import { mapMutations } from "vuex";

import SupplierForm from "@/components/loyaltyPanel/supplierManagement/SupplierForm";
import translations from "@/utils/translations/loyaltyPanel/supplierManagement";

export default {
    name: "SupplierManagement",

    components: { SupplierForm },

    mixins: [translations],

    data: () => ({
        icons: { mdiPencilOutline, mdiClose },
        items: [
            { name: "Vasso", email: "vasso.fitrou@gmail.com" },
            { name: "Test Lefko", email: "lefkothea@roadcube.com" },
            { name: "Papadakis Mixail", email: "info@roadcube.com" }
        ],
        itemsPerPageOptions: [10, 20, 30, -1],
        dialog: false,
        deleteDialog: false
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        headers() {
            return [
                { text: this.translations.name[this.lang], value: "name" },
                { text: this.translations.email[this.lang], value: "email" },
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
</style>
