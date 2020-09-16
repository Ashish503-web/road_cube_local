<template>
    <v-container class="px-4">
        <v-sheet color="#eaedf1" class="pa-4">
            <v-row class="mt-12" no-gutters>
                <v-col cols="auto">
                    <v-tabs v-model="tab">
                        <v-tab class="text-capitalize">products</v-tab>
                        <v-tab class="text-capitalize">product group</v-tab>
                    </v-tabs>
                </v-col>
                <v-col cols="12">
                    <v-tabs-items v-model="tab">
                        <v-tab-item>
                            <v-toolbar flat height="80" class="pt-2">
                                <v-btn
                                    rounded
                                    color="primary"
                                    class="text-capitalize"
                                    @click="productDialog = true"
                                    >add product</v-btn
                                >
                            </v-toolbar>

                            <v-data-table
                                :headers="productHeaders"
                                :items="products"
                                :footer-props="{ itemsPerPageOptions }"
                                class="mt-4 coupon-table"
                            >
                                <template v-slot:item.actions="{ item }">
                                    <v-tooltip top>
                                        <template v-slot:activator="{ on }">
                                            <v-btn
                                                color="yellow darken-3"
                                                icon
                                                v-on="on"
                                                @click="myFunc(item)"
                                            >
                                                <v-icon
                                                    v-text="
                                                        icons.mdiPencilOutline
                                                    "
                                                ></v-icon>
                                            </v-btn>
                                        </template>

                                        <span>Update</span>
                                    </v-tooltip>

                                    <v-tooltip top>
                                        <template v-slot:activator="{ on }">
                                            <v-btn
                                                color="red"
                                                icon
                                                v-on="on"
                                                @click="myFunc(item)"
                                            >
                                                <v-icon
                                                    v-text="icons.mdiClose"
                                                ></v-icon>
                                            </v-btn>
                                        </template>

                                        <span>Delete</span>
                                    </v-tooltip>
                                </template>
                            </v-data-table>

                            <v-dialog
                                v-model="productDialog"
                                scrollable
                                max-width="50%"
                            >
                                <v-card>
                                    <v-card-title class="grey lighten-3"
                                        >New Product or Service</v-card-title
                                    >
                                    <v-divider></v-divider>

                                    <v-card-text class="pt-5">
                                        <h3 class="secondary--text">
                                            Chooce how your product will be
                                            displayed:
                                        </h3>
                                        <v-radio-group
                                            v-model="product.display"
                                        >
                                            <v-row no-gutters>
                                                <v-col cols="6">
                                                    <v-radio>
                                                        <template v-slot:label>
                                                            <h4
                                                                class="secondary--text"
                                                            >
                                                                The product and
                                                                it's price will
                                                                be visible to
                                                                the public
                                                            </h4>
                                                        </template>
                                                    </v-radio>
                                                </v-col>
                                                <v-col cols="6">
                                                    <v-radio>
                                                        <template v-slot:label>
                                                            <h4
                                                                class="secondary--text"
                                                            >
                                                                The product will
                                                                be hidden (it
                                                                will not be
                                                                visible to the
                                                                public)
                                                            </h4>
                                                        </template>
                                                    </v-radio>
                                                </v-col>
                                            </v-row>
                                        </v-radio-group>

                                        <v-text-field
                                            label="Product Name"
                                            rounded
                                            outlined
                                            dense
                                            clearable
                                        ></v-text-field>

                                        <v-textarea
                                            label="Product Description"
                                            rounded
                                            outlined
                                            clearable
                                        ></v-textarea>

                                        <div class="price-container">
                                            <v-text-field
                                                type="number"
                                                label="Selling Price"
                                                rounded
                                                outlined
                                                dense
                                                clearable
                                                :append-outer-icon="
                                                    icons.mdiCurrencyEur
                                                "
                                            ></v-text-field>

                                            <v-text-field
                                                type="number"
                                                label="Wholesale Price"
                                                rounded
                                                outlined
                                                dense
                                                clearable
                                                :append-outer-icon="
                                                    icons.mdiCurrencyEur
                                                "
                                            ></v-text-field>
                                        </div>

                                        <v-sheet
                                            color="grey lighten-3"
                                            class="mt-3 pa-4"
                                        >
                                            <h3 class="secondary--text mb-2">
                                                Define the discount for your
                                                product
                                            </h3>
                                            When the user will gather X ammount
                                            of point moves he will win the
                                            following discount:
                                            <v-row
                                                no-gutters
                                                align="center"
                                                class="mt-5"
                                            >
                                                <v-col cols="5"></v-col>
                                                <v-col cols="7">
                                                    <h3
                                                        class="secondary--text ml-3 mb-2"
                                                        v-text="
                                                            discountType ===
                                                            'Percentage'
                                                                ? 'Percentage'
                                                                : 'Euro'
                                                        "
                                                    ></h3>
                                                </v-col>
                                                <v-col cols="5">
                                                    <v-select
                                                        v-model="discountType"
                                                        :items="discountTypes"
                                                        menu-props="offsetY"
                                                        label="Discount Type"
                                                        rounded
                                                        outlined
                                                        dense
                                                        hide-details
                                                    ></v-select>
                                                </v-col>
                                                <v-col cols="2" class="ml-3">
                                                    <v-text-field
                                                        v-model.number="
                                                            product.discountAmount
                                                        "
                                                        type="number"
                                                        outlined
                                                        dense
                                                        clearable
                                                        hide-details
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="auto">
                                                    <v-sheet
                                                        width="30"
                                                        color="grey lighten-3"
                                                    >
                                                        <v-btn
                                                            icon
                                                            x-small
                                                            @click="
                                                                product.discountAmount += 0.01
                                                            "
                                                        >
                                                            <v-icon
                                                                v-text="
                                                                    icons.mdiMenuUp
                                                                "
                                                            ></v-icon>
                                                        </v-btn>
                                                        <v-btn
                                                            icon
                                                            x-small
                                                            :disabled="
                                                                product.discountAmount <
                                                                    0.01
                                                            "
                                                            @click="
                                                                product.discountAmount -= 0.01
                                                            "
                                                        >
                                                            <v-icon
                                                                v-text="
                                                                    icons.mdiMenuDown
                                                                "
                                                            ></v-icon>
                                                        </v-btn>
                                                    </v-sheet>
                                                </v-col>
                                                <v-col cols="1">
                                                    <v-icon
                                                        v-text="
                                                            discountType ===
                                                            'Percentage'
                                                                ? icons.mdiPercent
                                                                : icons.mdiCurrencyEur
                                                        "
                                                    ></v-icon>
                                                </v-col>
                                            </v-row>
                                        </v-sheet>

                                        <v-checkbox v-model="checkbox">
                                            <template v-slot:label>
                                                <h4 class="secondary--text">
                                                    I want the product to be
                                                    displayed with an image in
                                                    the application
                                                </h4>
                                            </template>
                                        </v-checkbox>

                                        <v-card v-if="checkbox" outlined>
                                            <v-card-title
                                                class="subtitle-1 font-weight-medium"
                                                >Product Image
                                                (optional)</v-card-title
                                            >
                                            <v-row
                                                no-gutters
                                                justify="space-between"
                                            >
                                                <v-col cols="6">
                                                    <v-img
                                                        :src="product.image"
                                                    ></v-img>
                                                </v-col>
                                                <v-col cols="5" class="mr-3">
                                                    <v-file-input
                                                        rounded
                                                        outlined
                                                        dense
                                                        hide-details
                                                        @change="
                                                            onFileSelected(
                                                                product,
                                                                $event
                                                            )
                                                        "
                                                    ></v-file-input>
                                                </v-col>
                                            </v-row>
                                        </v-card>

                                        <v-checkbox v-model="checkbox2">
                                            <template v-slot:label>
                                                <h4 class="secondary--text">
                                                    I want the product to be
                                                    displayed on specific days
                                                </h4>
                                            </template>
                                        </v-checkbox>

                                        <v-card v-if="checkbox2" outlined>
                                            <v-card-title
                                                class="subtitle-1 font-weight-medium"
                                                style="word-break: normal"
                                                >Choose the days you want the
                                                product to be displayed in
                                                public</v-card-title
                                            >
                                            <v-container>
                                                <v-row>
                                                    <v-col
                                                        v-for="(weekday,
                                                        i) in weekdays"
                                                        :key="weekday"
                                                    >
                                                        <v-checkbox
                                                            v-model="
                                                                selectedWeekdays[
                                                                    i
                                                                ]
                                                            "
                                                            class="mt-0"
                                                            :label="weekday"
                                                            :value="weekday"
                                                            hide-details
                                                        ></v-checkbox>
                                                    </v-col>
                                                </v-row>
                                            </v-container>
                                        </v-card>

                                        <v-checkbox v-model="checkbox3">
                                            <template v-slot:label>
                                                <h4 class="secondary--text">
                                                    I want my product to be part
                                                    of a category
                                                </h4>
                                            </template>
                                        </v-checkbox>

                                        <v-select
                                            v-if="checkbox3"
                                            :items="['root', 'katigoria1']"
                                            menu-props="offsetY"
                                            label="Select Category"
                                            class="mt-1"
                                            rounded
                                            outlined
                                            dense
                                            hide-details
                                        ></v-select>
                                    </v-card-text>

                                    <v-divider></v-divider>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            text
                                            @click="productDialog = false"
                                            >cancel</v-btn
                                        >
                                        <v-btn color="primary"
                                            >add product</v-btn
                                        >
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-tab-item>

                        <v-tab-item>
                            <v-toolbar flat height="80" class="pt-2">
                                <v-btn
                                    rounded
                                    color="primary"
                                    class="text-capitalize"
                                    @click="productGroupDialog = true"
                                    >add product group</v-btn
                                >
                            </v-toolbar>

                            <v-data-table
                                :headers="productGroupHeaders"
                                :footer-props="{ itemsPerPageOptions }"
                            ></v-data-table>

                            <v-dialog
                                v-model="productGroupDialog"
                                scrollable
                                max-width="50%"
                            >
                                <v-card>
                                    <v-card-title class="grey lighten-3"
                                        >New Product Group</v-card-title
                                    >
                                    <v-divider></v-divider>

                                    <v-card-text class="pt-5">
                                        <v-text-field
                                            label="Product Group Name"
                                            rounded
                                            outlined
                                            dense
                                            clearable
                                        ></v-text-field>

                                        <v-textarea
                                            label="Product Group Description"
                                            rounded
                                            outlined
                                            clearable
                                        ></v-textarea>

                                        <div class="price-container">
                                            <v-text-field
                                                type="number"
                                                label="Target Price"
                                                rounded
                                                outlined
                                                dense
                                                clearable
                                                :append-outer-icon="
                                                    icons.mdiCurrencyEur
                                                "
                                            ></v-text-field>
                                        </div>

                                        <v-sheet
                                            color="grey lighten-3"
                                            class="mt-3 pa-4"
                                        >
                                            <h3 class="secondary--text mb-2">
                                                Set a discount for the product
                                                group
                                            </h3>
                                            When the user will gather X ammount
                                            of point moves he will win the
                                            following discount:
                                            <v-row
                                                no-gutters
                                                align="center"
                                                class="mt-5"
                                            >
                                                <v-col cols="5"></v-col>
                                                <v-col cols="7">
                                                    <h3
                                                        class="secondary--text ml-3 mb-2"
                                                        v-text="
                                                            discountType ===
                                                            'Percentage'
                                                                ? 'Percentage'
                                                                : 'Euro'
                                                        "
                                                    ></h3>
                                                </v-col>
                                                <v-col cols="5">
                                                    <v-select
                                                        v-model="discountType"
                                                        :items="discountTypes"
                                                        label="Discount Type"
                                                        menu-props="offsetY"
                                                        outlined
                                                        dense
                                                        hide-details
                                                    ></v-select>
                                                </v-col>
                                                <v-col cols="2" class="ml-3">
                                                    <v-text-field
                                                        v-model.number="
                                                            product.discountAmount
                                                        "
                                                        type="number"
                                                        outlined
                                                        dense
                                                        clearable
                                                        hide-details
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="auto">
                                                    <v-sheet
                                                        width="30"
                                                        color="#e9e9e9"
                                                    >
                                                        <v-btn
                                                            icon
                                                            x-small
                                                            @click="
                                                                product.discountAmount += 0.01
                                                            "
                                                        >
                                                            <v-icon
                                                                v-text="
                                                                    icons.mdiMenuUp
                                                                "
                                                            ></v-icon>
                                                        </v-btn>
                                                        <v-btn
                                                            icon
                                                            x-small
                                                            :disabled="
                                                                product.discountAmount <
                                                                    0.01
                                                            "
                                                            @click="
                                                                product.discountAmount -= 0.01
                                                            "
                                                        >
                                                            <v-icon
                                                                v-text="
                                                                    icons.mdiMenuDown
                                                                "
                                                            ></v-icon>
                                                        </v-btn>
                                                    </v-sheet>
                                                </v-col>
                                                <v-col cols="1">
                                                    <v-icon
                                                        v-text="
                                                            discountType ===
                                                            'Percentage'
                                                                ? icons.mdiPercent
                                                                : icons.mdiCurrencyEur
                                                        "
                                                    ></v-icon>
                                                </v-col>
                                            </v-row>
                                        </v-sheet>

                                        <v-checkbox v-model="checkbox">
                                            <template v-slot:label>
                                                <h4 class="secondary--text">
                                                    I want the product group to
                                                    be displayed with an image
                                                    in the application
                                                </h4>
                                            </template>
                                        </v-checkbox>

                                        <v-card v-if="checkbox" outlined>
                                            <v-card-title
                                                class="subtitle-1 font-weight-medium"
                                                >Product Image
                                                (optional)</v-card-title
                                            >
                                            <v-row
                                                no-gutters
                                                justify="space-between"
                                            >
                                                <v-col cols="6">
                                                    <v-img
                                                        :src="
                                                            productGroup.image
                                                        "
                                                    ></v-img>
                                                </v-col>
                                                <v-col cols="5" class="mr-3">
                                                    <v-file-input
                                                        rounded
                                                        outlined
                                                        dense
                                                        hide-details
                                                        @change="
                                                            onFileSelected(
                                                                productGroup,
                                                                $event
                                                            )
                                                        "
                                                    ></v-file-input>
                                                </v-col>
                                            </v-row>
                                        </v-card>

                                        <v-checkbox v-model="checkbox2">
                                            <template v-slot:label>
                                                <h4 class="secondary--text">
                                                    I want the product group to
                                                    be displayed on specific
                                                    days
                                                </h4>
                                            </template>
                                        </v-checkbox>

                                        <v-card v-if="checkbox2" outlined>
                                            <v-card-title
                                                class="subtitle-1 font-weight-medium"
                                                style="word-break: normal"
                                                >Choose the days you want the
                                                product group to be displayed in
                                                public</v-card-title
                                            >
                                            <v-container>
                                                <v-row>
                                                    <v-col
                                                        v-for="(weekday,
                                                        i) in weekdays"
                                                        :key="weekday"
                                                    >
                                                        <v-checkbox
                                                            v-model="
                                                                selectedWeekdays[
                                                                    i
                                                                ]
                                                            "
                                                            class="mt-0"
                                                            :label="weekday"
                                                            :value="weekday"
                                                            hide-details
                                                        ></v-checkbox>
                                                    </v-col>
                                                </v-row>
                                            </v-container>
                                        </v-card>

                                        <v-checkbox v-model="checkbox3">
                                            <template v-slot:label>
                                                <h4 class="secondary--text">
                                                    I want my product group to
                                                    be part of a category
                                                </h4>
                                            </template>
                                        </v-checkbox>

                                        <v-select
                                            v-if="checkbox3"
                                            :items="['root', 'katigoria1']"
                                            menu-props="offsetY"
                                            label="Select Category"
                                            class="mt-1"
                                            rounded
                                            outlined
                                            dense
                                            hide-details
                                        ></v-select>
                                    </v-card-text>

                                    <v-divider></v-divider>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            text
                                            @click="productGroupDialog = false"
                                            >cancel</v-btn
                                        >
                                        <v-btn color="primary">save</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-tab-item>
                    </v-tabs-items>
                </v-col>
            </v-row>
        </v-sheet>
    </v-container>
</template>

<script>
import {
    mdiPencilOutline,
    mdiClose,
    mdiCurrencyEur,
    mdiPercent,
    mdiMenuUp,
    mdiMenuDown
} from "@mdi/js";

export default {
    name: "StoreProducts",

    data: () => ({
        icons: {
            mdiPencilOutline,
            mdiClose,
            mdiCurrencyEur,
            mdiPercent,
            mdiMenuUp,
            mdiMenuDown
        },
        tab: 0,
        itemsPerPageOptions: [10, 20, 30, -1],
        productHeaders: [
            { text: "Product Name", value: "name" },
            { text: "Product Description", value: "description" },
            { text: "Selling Price", value: "price" },
            { text: "Coupon", value: "coupon" },
            { text: "Actions", value: "actions" }
        ],
        products: [
            {
                name: "test lefko",
                description: "test lefko",
                price: "0.01€",
                coupon: "-10%"
            }
        ],
        productDialog: false,
        product: {
            display: "",
            discountAmount: 0,
            image: "",
            imageFile: ""
        },
        discountType: "Percentage",
        discountTypes: ["Percentage", "Euro"],
        checkbox: false,
        checkbox2: false,
        checkbox3: false,
        weekdays: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ],
        selectedWeekdays: [],

        productGroupHeaders: [
            { text: "Product Name", value: "name" },
            { text: "Product Description", value: "description" },
            { text: "Coupon", value: "coupon" },
            { text: "Actions", value: "actions" }
        ],
        productGroupDialog: false,
        productGroup: {
            image: "",
            imageFile: ""
        }
    }),

    methods: {
        onFileSelected(item, event) {
            item.imageFile = event;
            const reader = new FileReader();
            reader.readAsDataURL(item.imageFile);
            reader.onload = e => (item.image = e.target.result);
        }
    }
};
</script>

<style scoped>
.price-container {
    border: 1px dashed black;
    border-radius: 20px;
    padding: 45px 40px 20px;
}
</style>
