<template>
    <v-dialog v-model="productGroupDialog" scrollable max-width="50%">
        <v-card>
            <v-card-title class="grey lighten-3"
                >New Product Group</v-card-title
            >
            <v-divider></v-divider>

            <v-card-text class="pt-5">
                <v-text-field
                    label="Product Group Name"
                    outlined
                    dense
                    clearable
                ></v-text-field>

                <v-textarea
                    label="Product Group Description"
                    outlined
                    clearable
                ></v-textarea>

                <div class="price-container">
                    <v-text-field
                        type="number"
                        label="Target Price"
                        outlined
                        dense
                        clearable
                        :append-outer-icon="icons.mdiCurrencyEur"
                    ></v-text-field>
                </div>

                <v-sheet color="grey lighten-3" class="mt-3 pa-4">
                    <h3 class="secondary--text mb-2">
                        Set a discount for the product group
                    </h3>
                    When the user will gather X ammount of point moves he will
                    win the following discount:
                    <v-row no-gutters align="center" class="mt-5">
                        <v-col cols="5"></v-col>
                        <v-col cols="7">
                            <h3
                                class="secondary--text ml-3 mb-2"
                                v-text="
                                    discountType === 'Percentage'
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
                                v-model.number="product.discountAmount"
                                type="number"
                                outlined
                                dense
                                clearable
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="auto">
                            <v-sheet width="30" color="#e9e9e9">
                                <v-btn
                                    icon
                                    x-small
                                    @click="product.discountAmount += 0.01"
                                >
                                    <v-icon v-text="icons.mdiMenuUp"></v-icon>
                                </v-btn>
                                <v-btn
                                    icon
                                    x-small
                                    :disabled="product.discountAmount < 0.01"
                                    @click="product.discountAmount -= 0.01"
                                >
                                    <v-icon v-text="icons.mdiMenuDown"></v-icon>
                                </v-btn>
                            </v-sheet>
                        </v-col>
                        <v-col cols="1">
                            <v-icon
                                v-text="
                                    discountType === 'Percentage'
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
                            I want the product group to be displayed with an
                            image in the application
                        </h4>
                    </template>
                </v-checkbox>

                <v-card v-if="checkbox" outlined>
                    <v-card-title class="subtitle-1 font-weight-medium">
                        Product Image (optional)
                    </v-card-title>
                    <v-row no-gutters justify="space-between">
                        <v-col cols="6">
                            <v-img :src="productGroup.image"></v-img>
                        </v-col>
                        <v-col cols="5" class="mr-3">
                            <v-file-input
                                outlined
                                dense
                                hide-details
                                @change="onFileSelected(productGroup, $event)"
                            ></v-file-input>
                        </v-col>
                    </v-row>
                </v-card>

                <v-checkbox v-model="checkbox2">
                    <template v-slot:label>
                        <h4 class="secondary--text">
                            I want the product group to be displayed on specific
                            days
                        </h4>
                    </template>
                </v-checkbox>

                <v-card v-if="checkbox2" outlined>
                    <v-card-title
                        class="subtitle-1 font-weight-medium"
                        style="word-break: normal"
                    >
                        Choose the days you want the product group to be
                        displayed in public
                    </v-card-title>
                    <v-container>
                        <v-row>
                            <v-col
                                v-for="(weekday, i) in weekdays"
                                :key="weekday"
                            >
                                <v-checkbox
                                    v-model="selectedWeekdays[i]"
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
                            I want my product group to be part of a category
                        </h4>
                    </template>
                </v-checkbox>

                <v-select
                    v-if="checkbox3"
                    :items="['root', 'katigoria1']"
                    menu-props="offsetY"
                    label="Select Category"
                    class="mt-1"
                    outlined
                    dense
                    hide-details
                ></v-select>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="productGroupDialog = false">cancel</v-btn>
                <v-btn color="primary">save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: "ProductGroupDialog"
};
</script>
