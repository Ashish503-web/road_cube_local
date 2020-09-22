<template>
    <v-card class="pa-0" flat>
        <v-card flat>
            <v-row>
                <v-col cols="12" sm="auto">
                    <v-card-title>Branches</v-card-title>
                </v-col>
                <v-col cols="12" sm="auto" class="ml-sm-auto ml-5">
                    <v-icon
                        v-text="icons.mdiTools"
                        size="56"
                        color="#eaedf1"
                        class="mr-sm-5"
                    >
                    </v-icon>
                </v-col>
            </v-row>
        </v-card>

        <v-row class="pa-5 pt-3 pb-3" style="background: #eaedf1">
            <v-col cols="12">
                <v-card flat tile>
                    <v-card tile flat color="#f9fafc" class="pa-1 pb-0">
                        <v-tabs
                            v-model="tab"
                            background-color="#f9fafc"
                            :vertical="$vuetify.breakpoint.md"
                        >
                            <v-tab class="text-capitalize">Branches</v-tab>
                            <v-tab class="text-capitalize"
                                >Financial data</v-tab
                            >
                            <v-tab class="text-capitalize"
                                >Setting of Admin Panel</v-tab
                            >
                            <v-tab class="text-capitalize"
                                >Settings of Application</v-tab
                            >
                            <v-tab class="text-capitalize"
                                >Daily Transaction Limits</v-tab
                            >
                        </v-tabs>
                    </v-card>

                    <v-tabs-items v-model="tab">
                        <v-tab-item>
                            <v-row class="pa-5 pt-2 pb-1">
                                <v-col cols="12" sm="auto">
                                    <v-dialog v-model="addDialog" width="60%">
                                        <template
                                            v-slot:activator="{ on, attrs }"
                                        >
                                            <v-btn
                                                depressed
                                                large
                                                color="primary"
                                                v-bind="attrs"
                                                v-on="on"
                                                rounded
                                                class="text-capitalize"
                                            >
                                                Add Shop
                                            </v-btn>
                                        </template>

                                        <v-card class="pb-5">
                                            <v-card-title
                                                class="primary--text font-weight-medium pa-2 pl-4 pr-0"
                                            >
                                                Add Shop
                                                <v-btn
                                                    color="grey"
                                                    icon
                                                    rounded
                                                    @click="addDialog = false"
                                                    class="ml-auto mr-2 title text-lowercase"
                                                    style="transform: rotate(45deg)"
                                                >
                                                    +
                                                </v-btn>
                                            </v-card-title>
                                            <v-divider></v-divider>

                                            <v-card-text>
                                                <v-form class="pt-5">
                                                    <label
                                                        class="font-weight-bold ml-5"
                                                        >Select Package</label
                                                    >
                                                    <v-select
                                                        v-model="packageValue"
                                                        :items="packages"
                                                        :value="packageValue"
                                                        required
                                                        outlined
                                                        dense
                                                        rounded
                                                    ></v-select>
                                                    <label
                                                        class="font-weight-bold ml-5"
                                                        >Please choose category
                                                        where gifts of company
                                                        will show</label
                                                    >
                                                    <v-select
                                                        v-model="gift_category"
                                                        :items="gift_categories"
                                                        :value="gift_category"
                                                        required
                                                        outlined
                                                        dense
                                                        rounded
                                                    ></v-select>
                                                    <label
                                                        class="font-weight-bold ml-5"
                                                        >Name of Shop</label
                                                    >
                                                    <v-text-field
                                                        placeholder="Name"
                                                        required
                                                        outlined
                                                        dense
                                                        rounded
                                                        class="mt-1 mb-0"
                                                    ></v-text-field>
                                                    <label
                                                        class="font-weight-bold ml-5"
                                                        >Name of Shop(in
                                                        app)</label
                                                    >
                                                    <v-text-field
                                                        placeholder="Name"
                                                        required
                                                        outlined
                                                        dense
                                                        rounded
                                                        class="mt-1 mb-0"
                                                    ></v-text-field>
                                                    <label
                                                        class="font-weight-bold ml-5"
                                                        >Select Region</label
                                                    >
                                                    <v-select
                                                        v-model="region"
                                                        :items="regions"
                                                        :value="region"
                                                        required
                                                        outlined
                                                        dense
                                                        rounded
                                                    ></v-select>
                                                    <v-card
                                                        tile
                                                        flat
                                                        style="position: relative; bottom: 20px"
                                                    >
                                                        <v-card-title>
                                                            <v-btn
                                                                text
                                                                @click="
                                                                    addRegionDialog = !addRegionDialog
                                                                "
                                                                class="text-capitalize pa-0 ml-5 subtitle-2"
                                                            >
                                                                <v-icon
                                                                    v-text="
                                                                        icons.mdiPlusThick
                                                                    "
                                                                    color="primary"
                                                                >
                                                                </v-icon>
                                                                Add Region
                                                            </v-btn>
                                                        </v-card-title>
                                                        <v-card-text
                                                            v-if="
                                                                addRegionDialog
                                                            "
                                                            style="border: 5px solid #e2e2e2"
                                                            class="pa-10 pb-5"
                                                        >
                                                            <h4
                                                                class="subtitle-2 font-weight-medium"
                                                            >
                                                                Add Region
                                                            </h4>
                                                            <v-card
                                                                class="pt-2 d-inline-block"
                                                                flat
                                                                tile
                                                                width="50%"
                                                            >
                                                                <v-text-field
                                                                    v-model="
                                                                        new_region
                                                                    "
                                                                    placeholder="Name"
                                                                    required
                                                                    outlined
                                                                    dense
                                                                    rounded
                                                                    @keypress="
                                                                        writtenRegion = true
                                                                    "
                                                                >
                                                                </v-text-field>
                                                            </v-card>
                                                            <v-icon
                                                                v-text="
                                                                    icons.mdiCheckCircleOutline
                                                                "
                                                                v-if="
                                                                    writtenRegion
                                                                "
                                                                color="primary"
                                                                size="60"
                                                                class="ml-10"
                                                                @click="
                                                                    addRegionDialog = false;
                                                                    writtenRegion = false;
                                                                    regions.push(
                                                                        new_region
                                                                    );
                                                                    new_region =
                                                                        '';
                                                                "
                                                            >
                                                            </v-icon>
                                                        </v-card-text>
                                                    </v-card>
                                                    <label
                                                        class="font-weight-bold d-block ml-5"
                                                        >Password of Shop</label
                                                    >
                                                    <v-text-field
                                                        placeholder="Code"
                                                        required
                                                        outlined
                                                        dense
                                                        rounded
                                                        class="mt-1 mb-0"
                                                    ></v-text-field>
                                                    <label
                                                        class="font-weight-bold ml-5"
                                                        >Email of Shop(in
                                                        app)</label
                                                    >
                                                    <v-text-field
                                                        placeholder="Email"
                                                        required
                                                        outlined
                                                        dense
                                                        rounded
                                                        class="mt-1 mb-0"
                                                    ></v-text-field>
                                                    <label
                                                        class="font-weight-bold ml-5"
                                                        >Address of Shop</label
                                                    >
                                                    <v-text-field
                                                        placeholder="Address"
                                                        required
                                                        outlined
                                                        dense
                                                        rounded
                                                        class="mt-1 mb-0"
                                                    ></v-text-field>
                                                    <label
                                                        class="font-weight-bold ml-5"
                                                        >T.K</label
                                                    >
                                                    <v-text-field
                                                        placeholder="T.K"
                                                        required
                                                        outlined
                                                        dense
                                                        rounded
                                                        class="mt-1 mb-0"
                                                    ></v-text-field>
                                                    <label
                                                        class="font-weight-bold ml-5"
                                                        >Number of Shop</label
                                                    >
                                                    <v-text-field
                                                        placeholder="Number"
                                                        required
                                                        outlined
                                                        dense
                                                        rounded
                                                        class="mt-1 mb-0"
                                                    ></v-text-field>
                                                    <label
                                                        class="font-weight-bold ml-5"
                                                        >Longitude</label
                                                    >
                                                    <v-text-field
                                                        placeholder="x"
                                                        required
                                                        outlined
                                                        dense
                                                        rounded
                                                        class="mt-1 mb-0"
                                                    ></v-text-field>
                                                    <label
                                                        class="font-weight-bold ml-5"
                                                        >Latitude</label
                                                    >
                                                    <v-text-field
                                                        placeholder="y"
                                                        required
                                                        outlined
                                                        dense
                                                        rounded
                                                        class="mt-1 mb-0"
                                                    ></v-text-field>
                                                    <label
                                                        class="font-weight-bold ml-5"
                                                        >ID</label
                                                    >
                                                    <v-text-field
                                                        placeholder="ID"
                                                        required
                                                        outlined
                                                        dense
                                                        rounded
                                                        class="mt-1 mb-0"
                                                    ></v-text-field>
                                                </v-form>
                                            </v-card-text>

                                            <v-card
                                                color="#f9f9f9"
                                                class="pa-5 ma-5 mb-0"
                                                flat
                                                tile
                                                align="end"
                                            >
                                                <v-btn
                                                    color="#dbe1e8"
                                                    @click="addDialog = false"
                                                    class="mr-2 text-capitalize"
                                                    small
                                                    rounded
                                                >
                                                    Cancel
                                                </v-btn>
                                                <v-btn
                                                    color="primary"
                                                    @click="addDialog = false"
                                                    class="text-capitalize"
                                                    small
                                                    rounded
                                                >
                                                    Add Shop
                                                </v-btn>
                                            </v-card>
                                        </v-card>
                                    </v-dialog>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="auto"
                                    class="ml-sm-auto pb-0"
                                >
                                    <v-dialog
                                        v-model="rightsDialog"
                                        width="60%"
                                    >
                                        <template
                                            v-slot:activator="{ on, attrs }"
                                        >
                                            <v-btn
                                                depressed
                                                large
                                                color="primary"
                                                v-bind="attrs"
                                                v-on="on"
                                                rounded
                                                class="text-capitalize"
                                            >
                                                Rights
                                            </v-btn>
                                        </template>

                                        <v-card class="pb-5">
                                            <v-card-title
                                                class="primary--text font-weight-medium pa-2 pl-4 pr-0"
                                            >
                                                Branch Management
                                                <v-btn
                                                    color="grey"
                                                    icon
                                                    @click="
                                                        rightsDialog = false
                                                    "
                                                    class="ml-auto mr-2 title text-lowercase"
                                                    style="transform: rotate(45deg)"
                                                >
                                                    +
                                                </v-btn>
                                            </v-card-title>
                                            <v-divider></v-divider>

                                            <v-card-text>
                                                <h4
                                                    class="subtitle-2 font-weight-bold mt-10"
                                                >
                                                    Select Companies which you
                                                    want to be able to Add /
                                                    Delete
                                                </h4>

                                                <v-data-table
                                                    :headers="companyHeaders"
                                                    :items="companyData"
                                                    class="mt-5"
                                                    show-select
                                                    item-key="company"
                                                >
                                                </v-data-table>
                                            </v-card-text>

                                            <v-card
                                                color="#f9f9f9"
                                                class="pa-5 ma-5 mb-0"
                                                flat
                                                tile
                                                align="end"
                                            >
                                                <v-btn
                                                    color="#dbe1e8"
                                                    @click="
                                                        rightsDialog = false
                                                    "
                                                    class="mr-2 text-capitalize"
                                                    small
                                                    rounded
                                                >
                                                    Cancel
                                                </v-btn>
                                                <v-btn
                                                    color="primary"
                                                    @click="
                                                        rightsDialog = false
                                                    "
                                                    class="text-capitalize"
                                                    small
                                                    rounded
                                                >
                                                    Save
                                                </v-btn>
                                            </v-card>
                                        </v-card>
                                    </v-dialog>
                                </v-col>
                            </v-row>
                            <v-card flat class="pa-5 pt-1 pb-1">
                                <v-card flat class="pa-0" color="#f9fafc">
                                    <v-row class="pa-3 pt-0 pb-0 justify-end">
                                        <v-col cols="4" class="pa-3">
                                            <v-text-field
                                                label="Search"
                                                outlined
                                                dense
                                                clearable
                                                rounded
                                                hide-details
                                                :prepend-inner-icon="
                                                    icons.mdiMagnify
                                                "
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-card>
                                <v-data-table
                                    :headers="branchesHeaders"
                                    :items="branchesData"
                                    :footer-props="{ itemsPerPageOptions }"
                                >
                                    <template v-slot:header.name>
                                        <v-text-field
                                            label="Search"
                                            outlined
                                            dense
                                            rounded
                                            hide-details
                                            :prepend-inner-icon="
                                                icons.mdiMagnify
                                            "
                                        ></v-text-field>
                                        <h4
                                            class="subtitle-2 font-weight-bold d-inline-block mt-2"
                                        >
                                            Name
                                        </h4>
                                    </template>
                                    <template v-slot:header.name_of_shop>
                                        <v-text-field
                                            label="Search"
                                            outlined
                                            dense
                                            rounded
                                            hide-details
                                            :prepend-inner-icon="
                                                icons.mdiMagnify
                                            "
                                            class="pt-10"
                                        ></v-text-field>
                                        <h4
                                            class="subtitle-2 font-weight-bold d-inline-block mt-2"
                                        >
                                            Name of Shop(in app)
                                        </h4>
                                    </template>
                                    <template v-slot:header.map>
                                        <v-sheet height="60px"> </v-sheet>
                                        <h4
                                            class="subtitle-2 font-weight-bold d-inline-block mt-2"
                                        >
                                            Map
                                        </h4>
                                    </template>
                                    <template v-slot:header.payments>
                                        <v-sheet height="60px"> </v-sheet>
                                        <h4
                                            class="subtitle-2 font-weight-bold d-inline-block mt-2"
                                        >
                                            Payments
                                        </h4>
                                    </template>
                                    <template v-slot:header.z>
                                        <v-sheet height="60px"> </v-sheet>
                                        <h4
                                            class="subtitle-2 font-weight-bold d-inline-block mt-2"
                                        >
                                            Z
                                        </h4>
                                    </template>
                                    <template v-slot:header.banks>
                                        <v-text-field
                                            label="Search"
                                            outlined
                                            dense
                                            rounded
                                            hide-details
                                            :prepend-inner-icon="
                                                icons.mdiMagnify
                                            "
                                        ></v-text-field>
                                        <h4
                                            class="subtitle-2 font-weight-bold d-inline-block mt-2"
                                        >
                                            Banks
                                        </h4>
                                    </template>
                                    <template v-slot:header.address>
                                        <v-text-field
                                            label="Search"
                                            outlined
                                            dense
                                            rounded
                                            hide-details
                                            :prepend-inner-icon="
                                                icons.mdiMagnify
                                            "
                                        ></v-text-field>
                                        <h4
                                            class="subtitle-2 font-weight-bold d-inline-block mt-2"
                                        >
                                            Address
                                        </h4>
                                    </template>
                                    <template v-slot:header.phone>
                                        <v-text-field
                                            label="Search"
                                            outlined
                                            dense
                                            rounded
                                            hide-details
                                            :prepend-inner-icon="
                                                icons.mdiMagnify
                                            "
                                        ></v-text-field>
                                        <h4
                                            class="subtitle-2 font-weight-bold d-inline-block mt-2"
                                        >
                                            Phone
                                        </h4>
                                    </template>
                                    <template v-slot:header.registration_date>
                                        <v-text-field
                                            label="Search"
                                            outlined
                                            dense
                                            rounded
                                            hide-details
                                            :prepend-inner-icon="
                                                icons.mdiMagnify
                                            "
                                            class="pt-10"
                                        ></v-text-field>
                                        <h4
                                            class="subtitle-2 font-weight-bold d-inline-block mt-2"
                                        >
                                            Registration Date
                                        </h4>
                                    </template>
                                    <template v-slot:header.active>
                                        <v-sheet height="60px"> </v-sheet>
                                        <h4
                                            class="subtitle-2 font-weight-bold d-inline-block mt-2"
                                        >
                                            Active
                                        </h4>
                                    </template>
                                    <template v-slot:header.enter>
                                        <v-sheet height="60px"> </v-sheet>
                                        <h4
                                            class="subtitle-2 font-weight-bold d-inline-block mt-2"
                                        >
                                            Enter
                                        </h4>
                                    </template>

                                    <template v-slot:item.enter>
                                        <v-dialog
                                            v-model="editDialog"
                                            width="60%"
                                        >
                                            <template
                                                v-slot:activator="{ on, attrs }"
                                            >
                                                <v-btn
                                                    color="primary"
                                                    dark
                                                    depressed
                                                    small
                                                    icon
                                                    class="d-block ma-1"
                                                    v-bind="attrs"
                                                    v-on="on"
                                                >
                                                    <v-icon
                                                        v-text="
                                                            icons.mdiSquareEditOutline
                                                        "
                                                    ></v-icon>
                                                </v-btn>
                                            </template>

                                            <v-card class="pb-5">
                                                <v-card-title
                                                    class="primary--text font-weight-medium pa-2 pl-4 pr-0"
                                                >
                                                    Edit Branch
                                                    <v-btn
                                                        color="grey"
                                                        icon
                                                        @click="
                                                            editDialog = false
                                                        "
                                                        class="ml-auto mr-2 title text-lowercase"
                                                        style="transform: rotate(45deg)"
                                                    >
                                                        +
                                                    </v-btn>
                                                </v-card-title>
                                                <v-divider></v-divider>

                                                <v-card-text>
                                                    <v-form class="pt-5">
                                                        <label
                                                            class="font-weight-bold ml-5"
                                                            >ID</label
                                                        >
                                                        <v-text-field
                                                            placeholder="ID"
                                                            required
                                                            outlined
                                                            dense
                                                            rounded
                                                            class="mt-1 mb-0"
                                                        ></v-text-field>
                                                        <label
                                                            class="font-weight-bold ml-5"
                                                            >Please choose
                                                            category where gifts
                                                            of company will
                                                            show</label
                                                        >
                                                        <v-select
                                                            v-model="
                                                                gift_category
                                                            "
                                                            :items="
                                                                gift_categories
                                                            "
                                                            :value="
                                                                gift_category
                                                            "
                                                            required
                                                            outlined
                                                            dense
                                                            rounded
                                                        ></v-select>
                                                        <label
                                                            class="font-weight-bold ml-5"
                                                            >Select
                                                            Package</label
                                                        >
                                                        <v-select
                                                            v-model="
                                                                packageValue
                                                            "
                                                            :items="packages"
                                                            :value="
                                                                packageValue
                                                            "
                                                            required
                                                            outlined
                                                            dense
                                                            rounded
                                                        ></v-select>
                                                        <label
                                                            class="font-weight-bold ml-5"
                                                            >Name of Shop</label
                                                        >
                                                        <v-text-field
                                                            placeholder="Name"
                                                            required
                                                            outlined
                                                            dense
                                                            rounded
                                                            class="mt-1 mb-0"
                                                        ></v-text-field>
                                                        <label
                                                            class="font-weight-bold ml-5"
                                                            >Name of Shop(in
                                                            app)</label
                                                        >
                                                        <v-text-field
                                                            placeholder="Name"
                                                            required
                                                            outlined
                                                            dense
                                                            rounded
                                                            class="mt-1 mb-0"
                                                        ></v-text-field>
                                                        <label
                                                            class="font-weight-bold ml-5"
                                                            >Select
                                                            Region</label
                                                        >
                                                        <v-select
                                                            v-model="region"
                                                            :items="regions"
                                                            :value="region"
                                                            required
                                                            outlined
                                                            dense
                                                            rounded
                                                        ></v-select>
                                                        <v-card
                                                            tile
                                                            flat
                                                            style="position: relative; bottom: 20px"
                                                        >
                                                            <v-card-title>
                                                                <v-btn
                                                                    text
                                                                    @click="
                                                                        addRegionDialog = !addRegionDialog
                                                                    "
                                                                    class="text-capitalize pa-0 ml-5 subtitle-2"
                                                                >
                                                                    <v-icon
                                                                        v-text="
                                                                            icons.mdiPlusThick
                                                                        "
                                                                        color="primary"
                                                                    >
                                                                    </v-icon>
                                                                    Add Region
                                                                </v-btn>
                                                            </v-card-title>
                                                            <v-card-text
                                                                v-if="
                                                                    addRegionDialog
                                                                "
                                                                style="border: 5px solid #e2e2e2"
                                                                class="pa-10 pb-5"
                                                            >
                                                                <h4
                                                                    class="subtitle-2 font-weight-medium"
                                                                >
                                                                    Add Region
                                                                </h4>
                                                                <v-card
                                                                    class="pt-2 d-inline-block"
                                                                    flat
                                                                    tile
                                                                    width="50%"
                                                                >
                                                                    <v-text-field
                                                                        v-model="
                                                                            new_region2
                                                                        "
                                                                        placeholder="Name"
                                                                        required
                                                                        outlined
                                                                        rounded
                                                                        dense
                                                                        @keypress="
                                                                            writtenRegion = true
                                                                        "
                                                                    >
                                                                    </v-text-field>
                                                                </v-card>
                                                                <v-icon
                                                                    v-text="
                                                                        icons.mdiCheckCircleOutline
                                                                    "
                                                                    v-if="
                                                                        writtenRegion
                                                                    "
                                                                    color="primary"
                                                                    size="60"
                                                                    class="ml-10"
                                                                    @click="
                                                                        addRegionDialog = false;
                                                                        writtenRegion = false;
                                                                        regions.push(
                                                                            new_region2
                                                                        );
                                                                        new_region2 =
                                                                            '';
                                                                    "
                                                                >
                                                                </v-icon>
                                                            </v-card-text>
                                                        </v-card>
                                                        <label
                                                            class="font-weight-bold d-block ml-5"
                                                            >Password of
                                                            Shop</label
                                                        >
                                                        <v-text-field
                                                            placeholder="Code"
                                                            required
                                                            outlined
                                                            dense
                                                            rounded
                                                            class="mt-1 mb-0"
                                                        ></v-text-field>
                                                        <label
                                                            class="font-weight-bold ml-5"
                                                            >Email of Shop(in
                                                            app)</label
                                                        >
                                                        <v-text-field
                                                            placeholder="Email"
                                                            required
                                                            outlined
                                                            dense
                                                            rounded
                                                            class="mt-1 mb-0"
                                                        ></v-text-field>
                                                        <label
                                                            class="font-weight-bold ml-5"
                                                            >Address of
                                                            Shop</label
                                                        >
                                                        <v-text-field
                                                            placeholder="Address"
                                                            required
                                                            outlined
                                                            dense
                                                            rounded
                                                            class="mt-1 mb-0"
                                                        ></v-text-field>
                                                        <label
                                                            class="font-weight-bold ml-5"
                                                            >T.K</label
                                                        >
                                                        <v-text-field
                                                            placeholder="T.K"
                                                            required
                                                            outlined
                                                            dense
                                                            rounded
                                                            class="mt-1 mb-0"
                                                        ></v-text-field>
                                                        <label
                                                            class="font-weight-bold ml-5"
                                                            >Number of
                                                            Shop</label
                                                        >
                                                        <v-text-field
                                                            placeholder="Number"
                                                            required
                                                            outlined
                                                            dense
                                                            rounded
                                                            class="mt-1 mb-0"
                                                        ></v-text-field>
                                                        <label
                                                            class="font-weight-bold ml-5"
                                                            >Longitude</label
                                                        >
                                                        <v-text-field
                                                            placeholder="x"
                                                            required
                                                            outlined
                                                            dense
                                                            rounded
                                                            class="mt-1 mb-0"
                                                        ></v-text-field>
                                                        <label
                                                            class="font-weight-bold ml-5"
                                                            >Latitude</label
                                                        >
                                                        <v-text-field
                                                            placeholder="y"
                                                            required
                                                            outlined
                                                            dense
                                                            rounded
                                                            class="mt-1 mb-0"
                                                        ></v-text-field>
                                                        <v-row>
                                                            <label
                                                                class="font-weight-bold ml-5 mr-1"
                                                            >
                                                                Active
                                                            </label>
                                                            <v-checkbox
                                                                class="d-inline-block ma-0 pa-0"
                                                            ></v-checkbox>
                                                        </v-row>
                                                        <v-row>
                                                            <label
                                                                class="font-weight-bold ml-5 mr-1"
                                                            >
                                                                General Discount
                                                            </label>
                                                            <v-checkbox
                                                                class="d-inline-block ma-0 pa-0"
                                                            ></v-checkbox>
                                                        </v-row>
                                                        <v-row>
                                                            <label
                                                                class="font-weight-bold ml-5 mr-1"
                                                            >
                                                                Ability to
                                                                change product
                                                                range
                                                            </label>
                                                            <v-checkbox
                                                                class="d-inline-block ma-0 pa-0"
                                                            ></v-checkbox>
                                                        </v-row>
                                                        <v-row>
                                                            <label
                                                                class="font-weight-bold ml-5 mr-1"
                                                            >
                                                                Receipt number
                                                            </label>
                                                            <v-checkbox
                                                                class="d-inline-block ma-0 pa-0"
                                                            ></v-checkbox>
                                                        </v-row>
                                                        <v-row>
                                                            <label
                                                                class="font-weight-bold ml-5 mr-1 d-block"
                                                            >
                                                                Loyalty Programs
                                                            </label>
                                                        </v-row>
                                                        <v-row class="ma-2">
                                                            <v-checkbox
                                                                class="d-inline-block ma-0 pa-0"
                                                            ></v-checkbox>
                                                            <h4
                                                                class="d-inline-block ma-0 mr-5 pa-0"
                                                            >
                                                                Επιστροφή
                                                            </h4>
                                                            <v-checkbox
                                                                class="d-inline-block ma-0 pa-0"
                                                            ></v-checkbox>
                                                            <h4
                                                                class="d-inline-block ma-0 mr-5 pa-0"
                                                            >
                                                                go4more
                                                            </h4>
                                                            <v-checkbox
                                                                class="d-inline-block ma-0 pa-0"
                                                            ></v-checkbox>
                                                            <h4
                                                                class="d-inline-block ma-0 mr-5 pa-0"
                                                            >
                                                                Alpha Bank Bonus
                                                            </h4>
                                                        </v-row>
                                                    </v-form>
                                                </v-card-text>

                                                <v-card
                                                    color="#f9f9f9"
                                                    class="pa-5 ma-5 mb-0"
                                                    flat
                                                    tile
                                                    align="end"
                                                >
                                                    <v-btn
                                                        color="#dbe1e8"
                                                        @click="
                                                            editDialog = false
                                                        "
                                                        class="mr-2 text-capitalize"
                                                        small
                                                        rounded
                                                    >
                                                        Cancel
                                                    </v-btn>
                                                    <v-btn
                                                        color="primary"
                                                        @click="
                                                            addDialog = false
                                                        "
                                                        class="text-capitalize"
                                                        small
                                                        rounded
                                                    >
                                                        Change
                                                    </v-btn>
                                                </v-card>
                                            </v-card>
                                        </v-dialog>
                                        <v-dialog
                                            v-model="verificationDialog"
                                            width="50%"
                                        >
                                            <template
                                                v-slot:activator="{ on, attrs }"
                                            >
                                                <v-btn
                                                    color="primary"
                                                    dark
                                                    depressed
                                                    small
                                                    icon
                                                    class="d-block ma-1"
                                                    v-bind="attrs"
                                                    v-on="on"
                                                >
                                                    <v-icon
                                                        v-text="
                                                            icons.mdiNavigation
                                                        "
                                                        style="transform: rotate(45deg)"
                                                    ></v-icon>
                                                </v-btn>
                                            </template>

                                            <v-card>
                                                <v-card-title
                                                    class="primary--text font-weight-medium pa-2 pl-4 pr-0"
                                                >
                                                    Verification
                                                    <v-btn
                                                        color="grey"
                                                        icon
                                                        @click="
                                                            verificationDialog = false
                                                        "
                                                        class="ml-auto mr-2 title text-lowercase"
                                                        style="transform: rotate(45deg)"
                                                    >
                                                        +
                                                    </v-btn>
                                                </v-card-title>
                                                <v-divider></v-divider>

                                                <v-card-text>
                                                    <h4
                                                        class="subtitle-2 font-weight-medium mt-5"
                                                    >
                                                        Want to go to your
                                                        substitute on the road
                                                        {{}}.
                                                    </h4>
                                                    <h4
                                                        class="subtitle-2 font-weight-medium mt-5 mb-5"
                                                    >
                                                        Do you want to continue?
                                                    </h4>
                                                </v-card-text>

                                                <v-divider></v-divider>

                                                <v-card
                                                    color="#f9f9f9"
                                                    class="pa-5"
                                                    flat
                                                    tile
                                                    align="end"
                                                >
                                                    <v-btn
                                                        color="#dbe1e8"
                                                        @click="
                                                            verificationDialog = false
                                                        "
                                                        class="mr-2 text-capitalize"
                                                        small
                                                        rounded
                                                    >
                                                        Cancel
                                                    </v-btn>
                                                    <v-btn
                                                        color="primary"
                                                        @click="
                                                            verificationDialog = false
                                                        "
                                                        class="text-capitalize"
                                                        small
                                                        rounded
                                                    >
                                                        Ok
                                                    </v-btn>
                                                </v-card>
                                            </v-card>
                                        </v-dialog>
                                        <v-dialog
                                            v-model="deleteDialog"
                                            width="50%"
                                        >
                                            <template
                                                v-slot:activator="{ on, attrs }"
                                            >
                                                <v-btn
                                                    color="primary"
                                                    dark
                                                    depressed
                                                    small
                                                    icon
                                                    class="d-block ma-1"
                                                    v-bind="attrs"
                                                    v-on="on"
                                                >
                                                    <v-icon
                                                        v-text="
                                                            icons.mdiBackspace
                                                        "
                                                    ></v-icon>
                                                </v-btn>
                                            </template>

                                            <v-card class="pb-5">
                                                <v-card-title
                                                    class="primary--text font-weight-medium pa-2 pl-4 pr-0"
                                                >
                                                    Delete Company
                                                    <v-btn
                                                        color="grey"
                                                        icon
                                                        @click="
                                                            deleteDialog = false
                                                        "
                                                        class="ml-auto mr-2 title text-lowercase"
                                                        style="transform: rotate(45deg)"
                                                    >
                                                        +
                                                    </v-btn>
                                                </v-card-title>
                                                <v-divider></v-divider>

                                                <v-card-text>
                                                    <h4
                                                        class="subtitle-2 font-weight-medium mt-5"
                                                    >
                                                        Are you sure you want to
                                                        delete {{}}.
                                                    </h4>
                                                    <h4
                                                        class="subtitle-2 font-weight-medium mt-5 mb-4"
                                                    >
                                                        Do you want to continue?
                                                    </h4>
                                                    <v-checkbox
                                                        class="d-inline-block ma-0"
                                                    ></v-checkbox>
                                                    <h4
                                                        class="subtitle-2 font-weight-medium d-inline-block"
                                                        style="position: relative; bottom: 7px"
                                                    >
                                                        Do you want to totally
                                                        delete Company?
                                                    </h4>
                                                </v-card-text>

                                                <v-card
                                                    color="#f9f9f9"
                                                    class="pa-5 ma-5 mb-0"
                                                    flat
                                                    tile
                                                    align="end"
                                                >
                                                    <v-btn
                                                        color="#dbe1e8"
                                                        @click="
                                                            deleteDialog = false
                                                        "
                                                        class="mr-2 text-capitalize"
                                                        small
                                                        rounded
                                                    >
                                                        Cancel
                                                    </v-btn>
                                                    <v-btn
                                                        color="primary"
                                                        @click="
                                                            deleteDialog = false
                                                        "
                                                        class="text-capitalize"
                                                        small
                                                        rounded
                                                    >
                                                        Ok
                                                    </v-btn>
                                                </v-card>
                                            </v-card>
                                        </v-dialog>
                                    </template>
                                </v-data-table>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-row class="pa-5 pt-2 pb-1">
                                <v-col cols="auto pb-0">
                                    <v-dialog v-model="addDialog" width="60%">
                                        <template
                                            v-slot:activator="{ on, attrs }"
                                        >
                                            <v-btn
                                                depressed
                                                large
                                                color="primary"
                                                v-bind="attrs"
                                                v-on="on"
                                                rounded
                                                class="text-capitalize"
                                            >
                                                Add Shop
                                            </v-btn>
                                        </template>

                                        <v-card class="pb-5">
                                            <v-card-title
                                                class="primary--text font-weight-medium pa-2 pl-4 pr-0"
                                            >
                                                Add Shop
                                                <v-btn
                                                    color="grey"
                                                    icon
                                                    rounded
                                                    @click="addDialog = false"
                                                    class="ml-auto mr-2 title text-lowercase"
                                                    style="transform: rotate(45deg)"
                                                >
                                                    +
                                                </v-btn>
                                            </v-card-title>
                                            <v-divider></v-divider>

                                            <v-card-text>
                                                <v-form class="pt-5">
                                                    <label
                                                        class="font-weight-bold ml-5"
                                                        >Select Package</label
                                                    >
                                                    <v-select
                                                        v-model="packageValue"
                                                        :items="packages"
                                                        :value="packageValue"
                                                        required
                                                        outlined
                                                        dense
                                                        rounded
                                                    ></v-select>
                                                    <label
                                                        class="font-weight-bold ml-5"
                                                        >Please choose category
                                                        where gifts of company
                                                        will show</label
                                                    >
                                                    <v-select
                                                        v-model="gift_category"
                                                        :items="gift_categories"
                                                        :value="gift_category"
                                                        required
                                                        outlined
                                                        dense
                                                        rounded
                                                    ></v-select>
                                                    <label
                                                        class="font-weight-bold ml-5"
                                                        >Name of Shop</label
                                                    >
                                                    <v-text-field
                                                        placeholder="Name"
                                                        required
                                                        outlined
                                                        dense
                                                        rounded
                                                        class="mt-1 mb-0"
                                                    ></v-text-field>
                                                    <label
                                                        class="font-weight-bold ml-5"
                                                        >Name of Shop(in
                                                        app)</label
                                                    >
                                                    <v-text-field
                                                        placeholder="Name"
                                                        required
                                                        outlined
                                                        dense
                                                        rounded
                                                        class="mt-1 mb-0"
                                                    ></v-text-field>
                                                    <label
                                                        class="font-weight-bold ml-5"
                                                        >Select Region</label
                                                    >
                                                    <v-select
                                                        v-model="region"
                                                        :items="regions"
                                                        :value="region"
                                                        required
                                                        outlined
                                                        dense
                                                        rounded
                                                    ></v-select>
                                                    <v-card
                                                        tile
                                                        flat
                                                        style="position: relative; bottom: 20px"
                                                    >
                                                        <v-card-title>
                                                            <v-btn
                                                                text
                                                                @click="
                                                                    addRegionDialog = !addRegionDialog
                                                                "
                                                                class="text-capitalize pa-0 ml-5 subtitle-2"
                                                            >
                                                                <v-icon
                                                                    v-text="
                                                                        icons.mdiPlusThick
                                                                    "
                                                                    color="primary"
                                                                >
                                                                </v-icon>
                                                                Add Region
                                                            </v-btn>
                                                        </v-card-title>
                                                        <v-card-text
                                                            v-if="
                                                                addRegionDialog
                                                            "
                                                            style="border: 5px solid #e2e2e2"
                                                            class="pa-10 pb-5"
                                                        >
                                                            <h4
                                                                class="subtitle-2 font-weight-medium"
                                                            >
                                                                Add Region
                                                            </h4>
                                                            <v-card
                                                                class="pt-2 d-inline-block"
                                                                flat
                                                                tile
                                                                width="50%"
                                                            >
                                                                <v-text-field
                                                                    v-model="
                                                                        new_region
                                                                    "
                                                                    placeholder="Name"
                                                                    required
                                                                    outlined
                                                                    dense
                                                                    rounded
                                                                    @keypress="
                                                                        writtenRegion = true
                                                                    "
                                                                >
                                                                </v-text-field>
                                                            </v-card>
                                                            <v-icon
                                                                v-text="
                                                                    icons.mdiCheckCircleOutline
                                                                "
                                                                v-if="
                                                                    writtenRegion
                                                                "
                                                                color="primary"
                                                                size="60"
                                                                class="ml-10"
                                                                @click="
                                                                    addRegionDialog = false;
                                                                    writtenRegion = false;
                                                                    regions.push(
                                                                        new_region
                                                                    );
                                                                    new_region =
                                                                        '';
                                                                "
                                                            >
                                                            </v-icon>
                                                        </v-card-text>
                                                    </v-card>
                                                    <label
                                                        class="font-weight-bold d-block ml-5"
                                                        >Password of Shop</label
                                                    >
                                                    <v-text-field
                                                        placeholder="Code"
                                                        required
                                                        outlined
                                                        dense
                                                        rounded
                                                        class="mt-1 mb-0"
                                                    ></v-text-field>
                                                    <label
                                                        class="font-weight-bold ml-5"
                                                        >Email of Shop(in
                                                        app)</label
                                                    >
                                                    <v-text-field
                                                        placeholder="Email"
                                                        required
                                                        outlined
                                                        dense
                                                        rounded
                                                        class="mt-1 mb-0"
                                                    ></v-text-field>
                                                    <label
                                                        class="font-weight-bold ml-5"
                                                        >Address of Shop</label
                                                    >
                                                    <v-text-field
                                                        placeholder="Address"
                                                        required
                                                        outlined
                                                        dense
                                                        rounded
                                                        class="mt-1 mb-0"
                                                    ></v-text-field>
                                                    <label
                                                        class="font-weight-bold ml-5"
                                                        >T.K</label
                                                    >
                                                    <v-text-field
                                                        placeholder="T.K"
                                                        required
                                                        outlined
                                                        dense
                                                        rounded
                                                        class="mt-1 mb-0"
                                                    ></v-text-field>
                                                    <label
                                                        class="font-weight-bold ml-5"
                                                        >Number of Shop</label
                                                    >
                                                    <v-text-field
                                                        placeholder="Number"
                                                        required
                                                        outlined
                                                        dense
                                                        rounded
                                                        class="mt-1 mb-0"
                                                    ></v-text-field>
                                                    <label
                                                        class="font-weight-bold ml-5"
                                                        >Longitude</label
                                                    >
                                                    <v-text-field
                                                        placeholder="x"
                                                        required
                                                        outlined
                                                        dense
                                                        rounded
                                                        class="mt-1 mb-0"
                                                    ></v-text-field>
                                                    <label
                                                        class="font-weight-bold ml-5"
                                                        >Latitude</label
                                                    >
                                                    <v-text-field
                                                        placeholder="y"
                                                        required
                                                        outlined
                                                        dense
                                                        rounded
                                                        class="mt-1 mb-0"
                                                    ></v-text-field>
                                                    <label
                                                        class="font-weight-bold ml-5"
                                                        >ID</label
                                                    >
                                                    <v-text-field
                                                        placeholder="ID"
                                                        required
                                                        outlined
                                                        dense
                                                        rounded
                                                        class="mt-1 mb-0"
                                                    ></v-text-field>
                                                </v-form>
                                            </v-card-text>

                                            <v-card
                                                color="#f9f9f9"
                                                class="pa-5 ma-5 mb-0"
                                                flat
                                                tile
                                                align="end"
                                            >
                                                <v-btn
                                                    color="#dbe1e8"
                                                    @click="addDialog = false"
                                                    class="mr-2 text-capitalize"
                                                    small
                                                    rounded
                                                >
                                                    Cancel
                                                </v-btn>
                                                <v-btn
                                                    color="primary"
                                                    @click="addDialog = false"
                                                    class="text-capitalize"
                                                    small
                                                    rounded
                                                >
                                                    Add Shop
                                                </v-btn>
                                            </v-card>
                                        </v-card>
                                    </v-dialog>
                                </v-col>
                                <v-col cols="auto" class="ml-auto pb-0">
                                    <v-dialog
                                        v-model="rightsDialog"
                                        width="60%"
                                    >
                                        <template
                                            v-slot:activator="{ on, attrs }"
                                        >
                                            <v-btn
                                                depressed
                                                large
                                                color="primary"
                                                v-bind="attrs"
                                                v-on="on"
                                                rounded
                                                class="text-capitalize"
                                            >
                                                Rights
                                            </v-btn>
                                        </template>

                                        <v-card class="pb-5">
                                            <v-card-title
                                                class="primary--text font-weight-medium pa-2 pl-4 pr-0"
                                            >
                                                Branch Management
                                                <v-btn
                                                    color="grey"
                                                    icon
                                                    @click="
                                                        rightsDialog = false
                                                    "
                                                    class="ml-auto mr-2 title text-lowercase"
                                                    style="transform: rotate(45deg)"
                                                >
                                                    +
                                                </v-btn>
                                            </v-card-title>
                                            <v-divider></v-divider>

                                            <v-card-text>
                                                <h4
                                                    class="subtitle-2 font-weight-bold mt-10"
                                                >
                                                    Select Companies which you
                                                    want to be able to Add /
                                                    Delete
                                                </h4>

                                                <v-data-table
                                                    :headers="companyHeaders"
                                                    :items="companyData"
                                                    class="mt-5"
                                                    show-select
                                                    item-key="company"
                                                >
                                                </v-data-table>
                                            </v-card-text>

                                            <v-card
                                                color="#f9f9f9"
                                                class="pa-5 ma-5 mb-0"
                                                flat
                                                tile
                                                align="end"
                                            >
                                                <v-btn
                                                    color="#dbe1e8"
                                                    @click="
                                                        rightsDialog = false
                                                    "
                                                    class="mr-2 text-capitalize"
                                                    small
                                                    rounded
                                                >
                                                    Cancel
                                                </v-btn>
                                                <v-btn
                                                    color="primary"
                                                    @click="
                                                        rightsDialog = false
                                                    "
                                                    class="text-capitalize"
                                                    small
                                                    rounded
                                                >
                                                    Save
                                                </v-btn>
                                            </v-card>
                                        </v-card>
                                    </v-dialog>
                                </v-col>
                            </v-row>
                            <v-card flat class="pa-5 pt-1 pb-1">
                                <v-card flat class="pa-0" color="#f9fafc">
                                    <v-row class="pa-3 pt-0 pb-0 justify-end">
                                        <v-col cols="4" class="pa-3">
                                            <v-text-field
                                                label="Search"
                                                outlined
                                                dense
                                                clearable
                                                rounded
                                                hide-details
                                                :prepend-inner-icon="
                                                    icons.mdiMagnify
                                                "
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-card>
                                <v-data-table
                                    :headers="financialHeaders"
                                    :items="financialData"
                                    :footer-props="{ itemsPerPageOptions }"
                                >
                                    <template v-slot:header.name>
                                        <v-text-field
                                            label="Search"
                                            outlined
                                            dense
                                            rounded
                                            hide-details
                                            :prepend-inner-icon="
                                                icons.mdiMagnify
                                            "
                                            class="mt-2 mb-2"
                                        ></v-text-field>
                                        <h4
                                            class="subtitle-2 mb-2 font-weight-bold d-inline-block"
                                        >
                                            Name
                                        </h4>
                                    </template>
                                    <template v-slot:header.name_of_shop>
                                        <v-text-field
                                            label="Search"
                                            outlined
                                            dense
                                            rounded
                                            hide-details
                                            :prepend-inner-icon="
                                                icons.mdiMagnify
                                            "
                                            class="mt-2 mb-2"
                                        ></v-text-field>
                                        <h4
                                            class="subtitle-2 mb-2 font-weight-bold d-inline-block"
                                        >
                                            Name of Shop(i app)
                                        </h4>
                                    </template>
                                    <template v-slot:header.customer>
                                        <v-text-field
                                            label="Search"
                                            outlined
                                            dense
                                            rounded
                                            hide-details
                                            :prepend-inner-icon="
                                                icons.mdiMagnify
                                            "
                                            class="mt-2 mb-2"
                                        ></v-text-field>
                                        <h4
                                            class="subtitle-2 mb-2 font-weight-bold d-inline-block"
                                        >
                                            Customer
                                        </h4>
                                    </template>
                                    <template v-slot:header.transaction>
                                        <v-text-field
                                            label="Search"
                                            outlined
                                            dense
                                            rounded
                                            hide-details
                                            :prepend-inner-icon="
                                                icons.mdiMagnify
                                            "
                                            class="mt-2 mb-2"
                                        ></v-text-field>
                                        <h4
                                            class="subtitle-2 mb-2 font-weight-bold d-inline-block"
                                        >
                                            Transaction
                                        </h4>
                                    </template>
                                    <template v-slot:header.total>
                                        <v-text-field
                                            label="Search"
                                            outlined
                                            dense
                                            rounded
                                            hide-details
                                            :prepend-inner-icon="
                                                icons.mdiMagnify
                                            "
                                            class="mt-2 mb-2"
                                        ></v-text-field>
                                        <h4
                                            class="subtitle-2 mb-2 font-weight-bold d-inline-block"
                                        >
                                            Total
                                        </h4>
                                    </template>
                                    <template v-slot:header.points>
                                        <v-text-field
                                            label="Search"
                                            outlined
                                            dense
                                            rounded
                                            hide-details
                                            :prepend-inner-icon="
                                                icons.mdiMagnify
                                            "
                                            class="mt-2 mb-2"
                                        ></v-text-field>
                                        <h4
                                            class="subtitle-2 mb-2 font-weight-bold d-inline-block"
                                        >
                                            Points
                                        </h4>
                                    </template>
                                </v-data-table>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat class="pa-5">
                                <v-card flat class="pa-0" color="#f9fafc">
                                    <v-row class="pa-3 pt-0 pb-0 justify-end">
                                        <v-col cols="4" class="pa-3">
                                            <v-text-field
                                                label="Search"
                                                outlined
                                                dense
                                                clearable
                                                rounded
                                                hide-details
                                                :prepend-inner-icon="
                                                    icons.mdiMagnify
                                                "
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-card>

                                <v-data-table
                                    :headers="adminSetHeaders"
                                    :items="adminSetData"
                                    :footer-props="{ itemsPerPageOptions }"
                                    class="mt-5"
                                >
                                    <template v-slot:header.open_settings>
                                        <h4 class="caption font-weight-bold">
                                            Open Settings
                                        </h4>
                                        <h4
                                            class="caption font-weight-bold d-inline-block mt-4"
                                        >
                                            Update All
                                        </h4>
                                        <v-checkbox class="ma-0"></v-checkbox>
                                    </template>
                                    <template v-slot:header.open_actions>
                                        <h4 class="caption font-weight-bold">
                                            Open Promotional Actions
                                        </h4>
                                        <h4
                                            class="caption font-weight-bold d-inline-block"
                                        >
                                            Update All
                                        </h4>
                                        <v-checkbox
                                            class="d-inline-block ma-0"
                                            style="position: relative; top: 7px"
                                        ></v-checkbox>
                                    </template>
                                    <template
                                        v-slot:header.manual_points_delivery
                                    >
                                        <h4 class="caption font-weight-bold">
                                            Manual Points Delivery
                                        </h4>
                                        <h4
                                            class="caption font-weight-bold d-inline-block"
                                        >
                                            Update All
                                        </h4>
                                        <v-checkbox
                                            class="d-inline-block ma-0"
                                            style="position: relative; top: 7px"
                                        ></v-checkbox>
                                    </template>
                                    <template v-slot:header.body_pricing_file>
                                        <h4 class="caption font-weight-bold">
                                            Body pricing file
                                        </h4>
                                        <h4
                                            class="caption font-weight-bold d-inline-block mt-4"
                                        >
                                            Update All
                                        </h4>
                                        <v-checkbox class="ma-0"></v-checkbox>
                                    </template>
                                    <template v-slot:header.open_add_coupon>
                                        <h4 class="caption font-weight-bold">
                                            Open Add Coupon
                                        </h4>
                                        <h4
                                            class="caption font-weight-bold d-inline-block mt-4"
                                        >
                                            Update All
                                        </h4>
                                        <v-checkbox class="ma-0"></v-checkbox>
                                    </template>
                                    <template v-slot:header.open_selection>
                                        <h4 class="caption font-weight-bold">
                                            Open Redeem Mode Selection
                                        </h4>
                                        <h4
                                            class="caption font-weight-bold d-inline-block"
                                        >
                                            Update All
                                        </h4>
                                        <v-checkbox
                                            class="d-inline-block ma-0"
                                            style="position: relative; top: 7px"
                                        ></v-checkbox>
                                    </template>
                                    <template v-slot:header.open_product>
                                        <h4 class="caption font-weight-bold">
                                            Open Product Insertion /
                                            Modification
                                        </h4>
                                        <h4
                                            class="caption font-weight-bold d-inline-block"
                                        >
                                            Update All
                                        </h4>
                                        <v-checkbox
                                            class="d-inline-block ma-0"
                                            style="position: relative; top: 7px"
                                        ></v-checkbox>
                                    </template>
                                    <template v-slot:header.open_discount>
                                        <h4 class="caption font-weight-bold">
                                            Open General Discount
                                        </h4>
                                        <h4
                                            class="caption font-weight-bold d-inline-block"
                                        >
                                            Update All
                                        </h4>
                                        <v-checkbox
                                            class="d-inline-block ma-0"
                                            style="position: relative; top: 7px"
                                        ></v-checkbox>
                                    </template>

                                    <template v-slot:item.open_settings>
                                        <v-checkbox></v-checkbox>
                                    </template>
                                    <template v-slot:item.open_actions>
                                        <v-checkbox></v-checkbox>
                                    </template>
                                    <template
                                        v-slot:item.manual_points_delivery
                                    >
                                        <v-checkbox></v-checkbox>
                                    </template>
                                    <template v-slot:item.body_pricing_file>
                                        <v-checkbox></v-checkbox>
                                    </template>
                                    <template v-slot:item.open_add_coupon>
                                        <v-checkbox></v-checkbox>
                                    </template>
                                    <template v-slot:item.open_selection>
                                        <v-checkbox></v-checkbox>
                                    </template>
                                    <template v-slot:item.open_product>
                                        <v-checkbox></v-checkbox>
                                    </template>
                                    <template v-slot:item.open_discount>
                                        <v-checkbox></v-checkbox>
                                    </template>
                                </v-data-table>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat class="pa-5">
                                <v-card flat class="pa-0" color="#f9fafc">
                                    <v-row class="pa-3 pt-0 pb-0 justify-end">
                                        <v-col cols="4" class="pa-3">
                                            <v-text-field
                                                label="Search"
                                                outlined
                                                dense
                                                clearable
                                                rounded
                                                hide-details
                                                :prepend-inner-icon="
                                                    icons.mdiMagnify
                                                "
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-card>

                                <v-data-table
                                    :headers="appSetHeaders"
                                    :items="appSetData"
                                    :footer-props="{ itemsPerPageOptions }"
                                    class="mt-5"
                                    :dense="true"
                                >
                                    <template v-slot:header.open_shop>
                                        <h4 class="caption font-weight-bold">
                                            Open shop on Map
                                        </h4>
                                        <h4
                                            class="caption font-weight-bold d-inline-block"
                                        >
                                            Update All
                                        </h4>
                                        <v-checkbox
                                            class="d-inline-block ma-0"
                                            style="position: relative; top: 7px"
                                        ></v-checkbox>
                                    </template>
                                    <template v-slot:header.open_checkin>
                                        <h4 class="caption font-weight-bold">
                                            Open Checkin
                                        </h4>
                                        <h4
                                            class="caption font-weight-bold d-inline-block"
                                        >
                                            Update All
                                        </h4>
                                        <v-checkbox
                                            class="d-inline-block ma-0"
                                            style="position: relative; top: 7px"
                                        ></v-checkbox>
                                    </template>
                                    <template v-slot:header.open_scanning>
                                        <h4 class="caption font-weight-bold">
                                            Open Receipt Scanning
                                        </h4>
                                        <h4
                                            class="caption font-weight-bold d-inline-block"
                                        >
                                            Update All
                                        </h4>
                                        <v-checkbox
                                            class="d-inline-block ma-0"
                                            style="position: relative; top: 7px"
                                        ></v-checkbox>
                                    </template>

                                    <template v-slot:item.open_shop>
                                        <v-checkbox></v-checkbox>
                                    </template>
                                    <template v-slot:item.open_checkin>
                                        <v-checkbox></v-checkbox>
                                    </template>
                                    <template v-slot:item.open_scanning>
                                        <v-checkbox></v-checkbox>
                                    </template>
                                </v-data-table>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-row class="pa-5 pt-2 pb-1">
                                <v-col cols="auto pb-0">
                                    <v-dialog
                                        v-model="generalLimitsDialog"
                                        width="60%"
                                    >
                                        <template
                                            v-slot:activator="{ on, attrs }"
                                        >
                                            <v-btn
                                                depressed
                                                large
                                                color="primary"
                                                v-bind="attrs"
                                                v-on="on"
                                                rounded
                                                class="text-capitalize"
                                            >
                                                General Limits
                                            </v-btn>
                                        </template>

                                        <v-card class="pb-5">
                                            <v-card-title
                                                class="primary--text font-weight-medium pa-2 pl-4 pr-0"
                                            >
                                                Change Transaction Limits for
                                                all companies
                                                <v-btn
                                                    color="grey"
                                                    icon
                                                    rounded
                                                    @click="
                                                        generalLimitsDialog = false
                                                    "
                                                    class="ml-auto mr-2 title text-lowercase"
                                                    style="transform: rotate(45deg)"
                                                >
                                                    +
                                                </v-btn>
                                            </v-card-title>
                                            <v-divider></v-divider>

                                            <v-card-text class="mt-5 pb-0">
                                                <v-row>
                                                    <v-col
                                                        cols="3"
                                                        class="pl-2 pr-2"
                                                    >
                                                        <v-select
                                                            v-model="on_off"
                                                            :items="
                                                                on_off_options
                                                            "
                                                            :value="on_off"
                                                            required
                                                            outlined
                                                            dense
                                                            rounded
                                                        ></v-select>
                                                    </v-col>
                                                    <v-col
                                                        cols="3"
                                                        class="pl-2 pr-2 mt-2"
                                                    >
                                                        <h4
                                                            class="subtitle-2 font-weight-medium"
                                                        >
                                                            Daily Transaction
                                                            Limits
                                                        </h4>
                                                    </v-col>
                                                    <v-col
                                                        cols="3"
                                                        class="pl-2 pr-2"
                                                    >
                                                        <v-text-field
                                                            outlined
                                                            dense
                                                            clearable
                                                            rounded
                                                        ></v-text-field>
                                                    </v-col>
                                                    <v-col
                                                        cols="3"
                                                        class="pl-2 pr-2"
                                                    >
                                                        <v-select
                                                            v-model="money"
                                                            :items="
                                                                money_options
                                                            "
                                                            :value="money"
                                                            required
                                                            outlined
                                                            dense
                                                            rounded
                                                        ></v-select>
                                                    </v-col>
                                                </v-row>
                                            </v-card-text>

                                            <v-card
                                                color="#f9f9f9"
                                                class="pa-5 ma-5 mb-0 mt-0"
                                                flat
                                                tile
                                                align="end"
                                            >
                                                <v-btn
                                                    color="#dbe1e8"
                                                    @click="
                                                        generalLimitsDialog = false
                                                    "
                                                    class="mr-2 text-capitalize"
                                                    small
                                                    rounded
                                                >
                                                    Cancel
                                                </v-btn>
                                                <v-btn
                                                    color="primary"
                                                    @click="
                                                        generalLimitsDialog = false
                                                    "
                                                    class="text-capitalize"
                                                    small
                                                    rounded
                                                >
                                                    Ok
                                                </v-btn>
                                            </v-card>
                                        </v-card>
                                    </v-dialog>
                                </v-col>
                            </v-row>

                            <v-card flat class="pa-5">
                                <v-card flat class="pa-0" color="#f9fafc">
                                    <v-row class="pa-3 pt-0 pb-0 justify-end">
                                        <v-col cols="4" class="pa-3">
                                            <v-text-field
                                                label="Search"
                                                outlined
                                                dense
                                                clearable
                                                rounded
                                                hide-details
                                                :prepend-inner-icon="
                                                    icons.mdiMagnify
                                                "
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-card>

                                <v-data-table
                                    :headers="limitsHeaders"
                                    :items="limitsData"
                                    :footer-props="{ itemsPerPageOptions }"
                                    class="mt-5"
                                    :dense="true"
                                >
                                    <template v-slot:item.offline_limits>
                                        <v-dialog
                                            v-model="limitDialog"
                                            width="60%"
                                        >
                                            <template
                                                v-slot:activator="{ on, attrs }"
                                            >
                                                <v-btn
                                                    color="primary"
                                                    rounded
                                                    class="ma-3 pl-5 pr-5"
                                                    v-bind="attrs"
                                                    v-on="on"
                                                    width="15%"
                                                >
                                                    20
                                                </v-btn>
                                            </template>

                                            <v-card class="pb-5">
                                                <v-card-title
                                                    class="primary--text font-weight-medium pa-2 pl-4 pr-0"
                                                >
                                                    Change Transaction Limits
                                                    for company {{}}
                                                    <v-btn
                                                        color="grey"
                                                        icon
                                                        @click="
                                                            limitDialog = false
                                                        "
                                                        class="ml-auto mr-2 title text-lowercase"
                                                        style="transform: rotate(45deg)"
                                                    >
                                                        +
                                                    </v-btn>
                                                </v-card-title>
                                                <v-divider></v-divider>

                                                <v-card-text class="mt-5 pb-0">
                                                    <v-row>
                                                        <v-col
                                                            cols="3"
                                                            class="pl-2 pr-2 mt-2"
                                                        >
                                                            <h4
                                                                class="subtitle-2 font-weight-medium"
                                                            >
                                                                Daily
                                                                Transaction
                                                                Limits
                                                            </h4>
                                                        </v-col>
                                                        <v-col
                                                            cols="3"
                                                            class="pl-2 pr-2"
                                                        >
                                                            <v-text-field
                                                                outlined
                                                                dense
                                                                clearable
                                                                rounded
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col
                                                            cols="3"
                                                            class="pl-2 pr-2"
                                                        >
                                                            <v-select
                                                                v-model="money"
                                                                :items="
                                                                    money_options
                                                                "
                                                                :value="money"
                                                                required
                                                                outlined
                                                                dense
                                                                rounded
                                                            ></v-select>
                                                        </v-col>
                                                    </v-row>
                                                </v-card-text>

                                                <v-card
                                                    color="#f9f9f9"
                                                    class="pa-5 ma-5 mb-0 mt-0"
                                                    flat
                                                    tile
                                                    align="end"
                                                >
                                                    <v-btn
                                                        color="#dbe1e8"
                                                        @click="
                                                            limitDialog = false
                                                        "
                                                        class="mr-2 text-capitalize"
                                                        small
                                                        rounded
                                                    >
                                                        Cancel
                                                    </v-btn>
                                                    <v-btn
                                                        color="primary"
                                                        @click="
                                                            limitDialog = false
                                                        "
                                                        class="text-capitalize"
                                                        small
                                                        rounded
                                                    >
                                                        Ok
                                                    </v-btn>
                                                </v-card>
                                            </v-card>
                                        </v-dialog>
                                    </template>
                                </v-data-table>
                            </v-card>
                        </v-tab-item>
                    </v-tabs-items>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import {
    mdiTools,
    mdiMagnify,
    mdiSquareEditOutline,
    mdiNavigation,
    mdiBackspace,
    mdiPlusThick,
    mdiCheckCircleOutline
} from "@mdi/js";
export default {
    name: "Branches",
    data: () => ({
        icons: {
            mdiTools,
            mdiMagnify,
            mdiSquareEditOutline,
            mdiNavigation,
            mdiBackspace,
            mdiPlusThick,
            mdiCheckCircleOutline
        },
        tab: 0,
        addDialog: false,
        rightsDialog: false,
        editDialog: false,
        verificationDialog: false,
        deleteDialog: false,
        addRegionDialog: false,
        generalLimitsDialog: false,
        limitDialog: false,
        writtenRegion: false,
        new_region: "",
        new_region2: "",
        itemsPerPageOptions: [10, 20, 30, -1],
        packages: ["Επιλέξτε..", "Single", "Brand", "Intro"],
        packageValue: "Επιλέξτε..",
        gift_categories: [
            "Auto - Moto",
            "Entertainment",
            "Sports, Fitness",
            "Travel, Leisure",
            "Food, Drink",
            "For the House",
            "Clothing, Footwear, Accessories",
            "Health, Care, Beauty",
            "Department Stores",
            "Others",
            "Technology"
        ],
        gift_category: "Auto - Moto",
        regions: [
            "No Region",
            "asdasdas",
            "ewfweaaf",
            "sdsdasd",
            "asdasd",
            "qwsds",
            "bnmvm",
            "ukyukyuk",
            "wdqcdzvbngn",
            "ascafdf",
            "ipoljm",
            "vcnmvnmnsgrg"
        ],
        region: "No Region",
        on_off_options: ["offline"],
        on_off: "offline",
        money_options: ["euro", "points"],
        money: "euro",
        companyHeaders: [{ text: "All", value: "company" }],
        companyData: [
            {
                company: "liopujasdas"
            },
            {
                company: "cvbvcasdas"
            },
            {
                company: "ytujtasdas"
            },
            {
                company: "asdascdasas"
            }
        ],
        branchesHeaders: [
            { text: "Name", value: "name", align: "center" },
            {
                text: "Name of Shop(in app)",
                value: "name_of_shop",
                align: "center"
            },
            { text: "Map", value: "map", align: "center" },
            { text: "Payments", value: "payments", align: "center" },
            { text: "Z", value: "z", align: "center" },
            { text: "Banks", value: "banks", align: "center" },
            { text: "Address", value: "address", align: "center" },
            { text: "Phone", value: "phone", align: "center" },
            {
                text: "Registration Date",
                value: "registration_date",
                align: "center"
            },
            { text: "Active", value: "active", align: "center" },
            { text: "Enter", value: "enter" }
        ],
        branchesData: [
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
                enter: ""
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
                enter: "icons"
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
                enter: "icons"
            }
        ],
        financialHeaders: [
            { text: "Name", value: "name", align: "center" },
            {
                text: "Name of Shop(in app)",
                value: "name_of_shop",
                align: "center"
            },
            { text: "Customer", value: "customer", align: "center" },
            { text: "Transaction", value: "transaction", align: "center" },
            { text: "Total", value: "total", align: "center" },
            { text: "Points", value: "points", align: "center" }
        ],
        financialData: [
            {
                name: "Vasilis",
                name_of_shop: "katerina1",
                customer: "20",
                transaction: "34",
                total: "1905.18",
                points: "3836"
            },
            {
                name: "Vasilis",
                name_of_shop: "katerina1",
                customer: "20",
                transaction: "34",
                total: "1905.18",
                points: "3836"
            },
            {
                name: "Vasilis",
                name_of_shop: "katerina1",
                customer: "20",
                transaction: "34",
                total: "1905.18",
                points: "3836"
            }
        ],
        adminSetHeaders: [
            { text: "Name", value: "name", sortable: false },
            { text: "Open Settings", value: "open_settings", sortable: false },
            {
                text: "Open Promotional Actions",
                value: "open_actions",
                sortable: false
            },
            {
                text: "Manual Points Delivery",
                value: "manual_points_delivery",
                sortable: false
            },
            {
                text: "Body pricing file",
                value: "body_pricing_file",
                sortable: false
            },
            {
                text: "Open Add Coupon",
                value: "open_add_coupon",
                sortable: false
            },
            {
                text: "Open Redeem Mode Selection",
                value: "open_selection",
                sortable: false
            },
            {
                text: "Open Product Insertion / Modification",
                value: "open_product"
            },
            { text: "Open General Discount", value: "open_discount" }
        ],
        adminSetData: [
            {
                name: "Vasilis"
            },
            {
                name: "Vasilis"
            },
            {
                name: "Vasilis"
            }
        ],
        appSetHeaders: [
            { text: "Name", value: "name" },
            { text: "Open shop on Map", value: "open_shop", sortable: false },
            { text: "Open Checkin", value: "open_checkin", sortable: false },
            {
                text: "Open Receipt Scanning",
                value: "open_scanning",
                sortable: false
            }
        ],
        appSetData: [
            {
                name: "Vasilisa"
            },
            {
                name: "Vasilisb"
            },
            {
                name: "Vasilisc"
            }
        ],
        limitsHeaders: [
            { text: "Name", value: "name", align: "center" },
            {
                text: "Offline Transaction Limits",
                value: "offline_limits",
                align: "center"
            }
        ],
        limitsData: [
            {
                name: "Vasilis"
            },
            {
                name: "Vasilis"
            },
            {
                name: "Vasilis"
            }
        ]
    })
};
</script>