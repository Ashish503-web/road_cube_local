<template>
    <v-tab-item :value="$route.path">
        <v-toolbar class="toolbar-content" flat dense height="80">
            <v-btn
                color="secondary"
                class="text-capitalize"
                depressed
                @click="
                    () => {
                        shopDialog = true;
                        mode = 1;
                    }
                "
                >add shop</v-btn
            >

            <v-spacer></v-spacer>

            <v-btn
                color="secondary"
                class="text-capitalize"
                depressed
                @click="rightsDialog = true"
                >Rights</v-btn
            >
        </v-toolbar>

        <v-toolbar flat>
            <v-spacer></v-spacer>
            <v-col cols="4">
                <b-search-field
                    :selectedSearchType="selectedSearchType"
                    :searchTypes="searchTypes"
                ></b-search-field>
            </v-col>
        </v-toolbar>

        <v-sheet outlined style="overflow: auto">
            <v-sheet width="1400px">
                <v-data-table
                    :headers="headers"
                    :items="items"
                    :footer-props="{ itemsPerPageOptions }"
                >
                    <template v-slot:item.actions>
                        <v-tooltip color="secondary" top>
                            <template v-slot:activator="{ on }">
                                <v-btn
                                    color="yellow darken-3"
                                    icon
                                    v-on="on"
                                    @click="
                                        () => {
                                            shopDialog = true;
                                            mode = 2;
                                        }
                                    "
                                >
                                    <v-icon
                                        v-text="icons.mdiPencilOutline"
                                    ></v-icon>
                                </v-btn>
                            </template>

                            <span>Update</span>
                        </v-tooltip>

                        <v-tooltip color="secondary" top>
                            <template v-slot:activator="{ on }">
                                <v-btn
                                    color="secondary"
                                    icon
                                    v-on="on"
                                    @click="redirectDialog = true"
                                >
                                    <v-icon
                                        v-text="icons.mdiOpenInNew"
                                    ></v-icon>
                                </v-btn>
                            </template>

                            <span>Redirect</span>
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

                            <span>Delete</span>
                        </v-tooltip>
                    </template>
                </v-data-table>
            </v-sheet>
        </v-sheet>

        <v-dialog v-model="shopDialog" max-width="600" scrollable>
            <ShopForm
                :mode="mode"
                @cancel="shopDialog = false"
                @submit="myFunc"
            />
        </v-dialog>

        <v-dialog v-model="rightsDialog" max-width="500" scrollable>
            <RightsForm
                :mode="mode"
                @cancel="rightsDialog = false"
                @submit="myFunc"
            />
        </v-dialog>

        <v-dialog v-model="redirectDialog" max-width="500" scrollable>
            <b-card
                title="Verification"
                icon="mdiCheckCircleOutline"
                @cancel="redirectDialog = false"
                @submit="myFunc"
            >
                <p>
                    Want to go to your substitute on the road
                    <span class="text--primary font-italic">dieuth.</span>
                </p>

                Do you want to continue?
            </b-card>
        </v-dialog>

        <v-dialog v-model="deleteDialog" max-width="500" scrollable>
            <b-card
                type="delete"
                title="Delete Company"
                icon="mdiDelete"
                submit-text="delete"
                @cancel="deleteDialog = false"
                @submit="myFunc"
            >
                <p>
                    Are you sure you want to delete
                    <span class="font-weight-bold text--primary font-italic"
                        >dieuth.</span
                    >
                </p>

                <v-checkbox color="secondary" class="pt-0" hide-details>
                    <template v-slot:label>
                        <h4 class="subtitle-1 font-weight-bold">
                            Do you want to totally delete Company?
                        </h4>
                    </template>
                </v-checkbox>
            </b-card>
        </v-dialog>
    </v-tab-item>
</template>

<script>
import { mdiPencilOutline, mdiOpenInNew, mdiClose } from "@mdi/js";
import { mapMutations } from "vuex";
import ShopForm from "@/components/loyaltyPanel/branches/ShopForm";
import RightsForm from "@/components/loyaltyPanel/branches/RightsForm";

export default {
    name: "BranchesTab",
    components: {
        ShopForm,
        RightsForm,
    },
    data: () => ({
        icons: { mdiPencilOutline, mdiOpenInNew, mdiClose },
        searchTypes: [
            "All Fields",
            "Name",
            "Name of Shop(in app)",
            "Banks",
            "Address",
            "Phone",
            "Registration Date",
        ],
        selectedSearchType: "All Fields",
        headers: [
            { text: "Name", value: "name" },
            {
                text: "Name of Shop(in app)",
                value: "name_of_shop",
            },
            { text: "Map", value: "map" },
            { text: "Payments", value: "payments" },
            { text: "Z", value: "z" },
            { text: "Banks", value: "banks" },
            { text: "Address", value: "address" },
            { text: "Phone", value: "phone" },
            {
                text: "Registration Date",
                value: "registration_date",
            },
            { text: "Active", value: "active" },
            { text: "Actions", value: "actions" },
        ],
        items: [
            {
                name: "Vasilis",
                name_of_shop: "katerina1",
                map: "OFF",
                payments: "OFF",
                z: "ON",
                banks: "ethniki",
                address: "Agias Glikerias 10",
                phone: "545648989478",
                registration_date: "2019/06/27",
                active: "ON",
            },
            {
                name: "Vasilis",
                name_of_shop: "katerina1",
                map: "OFF",
                payments: "OFF",
                z: "ON",
                banks: "ethniki",
                address: "Agias Glikerias 10",
                phone: "545648989478",
                registration_date: "2019/06/27",
                active: "ON",
            },
            {
                name: "Vasilis",
                name_of_shop: "katerina1",
                map: "OFF",
                payments: "OFF",
                z: "ON",
                banks: "ethniki",
                address: "Agias Glikerias 10",
                phone: "545648989478",
                registration_date: "2019/06/27",
                active: "ON",
            },
        ],
        itemsPerPageOptions: [10, 20, 30, -1],
        mode: 0,
        shopDialog: false,
        rightsDialog: false,
        redirectDialog: false,
        deleteDialog: false,
    }),

    computed: {},

    methods: {
        ...mapMutations("loyaltyPanel/branches", []),

        myFunc() {
            alert(5);
        },
    },
};
</script>
<style scoped>
.toolbar-content {
    padding: 0 !important;
}
</style>
