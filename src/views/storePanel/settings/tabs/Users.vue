<template>
    <v-tab-item>
        <v-toolbar flat height="90">
           <v-row class="d-flex align-center">
               <cols cols="12" sm="auto">
                   <v-btn
                           color="secondary"
                           class="text-capitalize ml-3 ml-sm-0"
                           depressed
                           @click="userDialog = true"
                   >register user</v-btn>
               </cols>
               <v-spacer></v-spacer>
               <v-col cols="12" sm="4" class="pb-0">
                   <v-text-field
                           label="Search"
                           color="secondary"
                           rounded
                           outlined
                           dense
                           clearable
                           hide-details
                           :prepend-inner-icon="icons.mdiMagnify"
                   ></v-text-field>
               </v-col>
           </v-row>
        </v-toolbar>

        <v-data-table
            :headers="userHeaders"
            :items="users"
            :footer-props="{
                itemsPerPageOptions: [10, 25, 50, 100]
            }"
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
                            <v-icon v-text="icons.mdiPencilOutline"></v-icon>
                        </v-btn>
                    </template>

                    <span>Update</span>
                </v-tooltip>

                <v-tooltip color="secondary" top>
                    <template v-slot:activator="{ on }">
                        <v-btn color="red" icon v-on="on" @click="myFunc(item)">
                            <v-icon v-text="icons.mdiClose"></v-icon>
                        </v-btn>
                    </template>

                    <span>Delete</span>
                </v-tooltip>
            </template>
        </v-data-table>

        <v-dialog v-model="userDialog" max-width="500" scrollable>
            <v-card>
                <v-card-title class="grey lighten-3"
                    >Register User</v-card-title
                >

                <v-divider></v-divider>

                <v-card-text class="pt-5">
                    <v-row no-gutters>
                        <v-col cols="6" class="pr-2">
                            <v-text-field
                                label="Username"
                                outlined
                                dense
                                clearable
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="6" class="pl-2">
                            <v-text-field
                                label="Password"
                                outlined
                                dense
                                clearable
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            class="subtitle-1 text--primary py-0 mt-2"
                            >Rights</v-col
                        >

                        <v-col cols="6">
                            <v-checkbox
                                v-for="right in rights"
                                :key="right"
                                color="secondary"
                                class="mt-0 pt-0"
                                hide-details
                            >
                                <template v-slot:label>
                                    <h4 class="subtitle-2" v-text="right"></h4>
                                </template>
                            </v-checkbox>
                        </v-col>
                        <v-col cols="6">
                            <v-checkbox
                                v-for="right in rights2"
                                :key="right"
                                color="secondary"
                                class="mt-0"
                                hide-details
                            >
                                <template v-slot:label>
                                    <h4 class="subtitle-2" v-text="right"></h4>
                                </template>
                            </v-checkbox>
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        text
                        class="text-capitalize"
                        @click="userDialog = false"
                        >cancel</v-btn
                    >
                    <v-btn color="secondary" class="text-capitalize px-5"
                        >add</v-btn
                    >
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-tab-item>
</template>

<script>
import { mdiMagnify, mdiPencilOutline, mdiClose } from "@mdi/js";

export default {
    name: "Users",

    data: () => ({
        icons: { mdiMagnify, mdiPencilOutline, mdiClose },
        userDialog: false,
        userHeaders: [
            { text: "Username", value: "username" },
            { text: "User Password", value: "password" },
            { text: "Rights", value: "rights" },
            { text: "Actions", value: "actions" }
        ],
        users: [
            {
                username: "Lefko",
                password: "Dia12345",
                rights: "Press edit..."
            }
        ],
        rights: ["Dashboard", "Sales", "Points", "Redeem Vouchers", "Settings"],
        rights2: [
            "Products & Services",
            "Point Management",
            "Creating Coupons",
            "Contest & Survey"
        ]
    })
};
</script>
