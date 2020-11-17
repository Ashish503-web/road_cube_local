<template>
    <v-card>
        <v-card-title class="secondary white--text">
            {{ title }}
            <v-spacer></v-spacer>
            <v-icon large dark v-text="icons.mdiPlus"></v-icon>
        </v-card-title>

        <v-card-text class="pt-7">
            <v-text-field
                label="Gift Name of Discount"
                v-model="gift.title"
                color="secondary"
                hide-details
                outlined
                dense
                clearable
                class="mb-3"
            ></v-text-field>

            <v-textarea
                label="Description"
                v-model="gift.description"
                hide-details
                outlined
                dense
                clearable
                class="mb-3"
                color="secondary"
            ></v-textarea>

            <v-text-field
                label="ID Catalog"
                v-model="gift.catalog_number"
                hide-details
                outlined
                dense
                clearable
                class="mb-3"
                color="secondary"
            ></v-text-field>

            <v-text-field
                label="Gift Code"
                v-model="gift.code"
                hide-details
                outlined
                dense
                clearable
                class="mb-3"
                color="secondary"
            ></v-text-field>

            <v-select
                :items="giftCategories"
                :item-text="`name[${lang}]`"
                item-value="gift_category_id"
                v-model="gift.gift_category_id"
                menu-props="offsetY"
                label="Gift Category"
                hide-details
                outlined
                dense
                class="mb-3"
                color="secondary"
            ></v-select>

            <v-text-field
                type="number"
                v-model="gift.cost"
                label="Gift Price"
                hide-details
                outlined
                dense
                clearable
                class="mb-3"
                color="secondary"
            ></v-text-field>

            <v-select
                :items="suppliers"
                menu-props="offsetY"
                v-model="gift.supplier_id"
                label="Supplier"
                hide-details
                outlined
                dense
                class="mb-3"
                color="secondary"
            ></v-select>

            <v-checkbox class="mt-0" v-model="gift.take_from_store">
                <template v-slot:label>
                    <h4 class="subtitle-2">
                        Receipt from the store (! supplier must have shop)
                    </h4>
                </template>
            </v-checkbox>

            <v-checkbox class="mt-0" v-model="gift.show_on_catalog">
                <template v-slot:label>
                    <h4 class="subtitle-2">Appear in catalog</h4>
                </template>
            </v-checkbox>

            <v-checkbox class="mt-0" v-model="gift.redeem_in_store">
                <template v-slot:label>
                    <h4 class="subtitle-2">
                        Appear and Redeem on Stores (Only if it is a Gift
                        Voucher)
                    </h4>
                </template>
            </v-checkbox>

            <v-text-field
                type="number"
                v-model="gift.points"
                label="Points"
                hide-details
                outlined
                dense
                clearable
                class="mb-3"
                color="secondary"
            ></v-text-field>

            <h4 class="subtitle-2 secondary--text">Type</h4>

            <v-radio-group v-model="type">
                <v-row no-gutters>
                    <v-col cols="auto">
                        <v-radio value="Αγαθό">
                            <template v-slot:label>
                                <h4 class="subtitle-2">Αγαθό</h4>
                            </template>
                        </v-radio>
                    </v-col>
                    <v-col cols="auto" class="ml-3">
                        <v-radio value="Gift Voucher">
                            <template v-slot:label>
                                <h4 class="subtitle-2">
                                    Gift voucher
                                </h4>
                            </template>
                        </v-radio>
                    </v-col>
                </v-row>
            </v-radio-group>

            <v-row v-if="type === 'Gift Voucher'" no-gutters>
                <v-col cols="6">
                    <h3 class="subtitle-1 secondary--text">
                        Select stores to redeem
                    </h3>
                </v-col>

                <v-col cols="6">
                    <v-checkbox
                        v-model="selectedStores"
                        v-for="store in stores"
                        :key="store"
                        :value="store"
                        class="mt-0"
                    >
                        <template v-slot:label>
                            <h4 class="subtitle-2" v-text="store"></h4>
                        </template>
                    </v-checkbox>
                </v-col>
            </v-row>

            <v-file-input
                label="Send Gift"
                class="mt-3 mb-3"
                hide-details
                outlined
                dense
                clearable
                color="secondary"
            ></v-file-input>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="$emit('close')">cancel</v-btn>
            <v-btn color="secondary" class="px-5" @click="sendForm">save</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mdiPlus } from "@mdi/js";
import { mapMutations, mapState, mapActions } from "vuex";

export default {
    name: "GiftForm",

    props: {
        giftId: Number,
    },

    data: () => ({
        icons: {
            mdiPlus
        },
        suppliers: ["YOU.GR", "PLAISIO", "PUBLIC", "COOKSHOP", "TESCOSMETICS"],
        type: "Αγαθό",
        stores: [
            "All",
            "Katerina",
            "Pelataki",
            "Kainouria",
            "Neo Meo",
            "Dimitris",
            "Larouti",
            "Nikniknik",
            "Arguris Epipla"
        ],
        selectedStores: []
    }),
    computed:{
        giftCategories: {
            get() {
                return this.$store.state.loyaltyPanel.catalogManagement.giftCategories;
            }
        },

        gift: {
            get() {
                return this.giftId == null ? {} : this.$store.state.loyaltyPanel.catalogManagement.gift;
            }
        },

        lang() {
            return this.$route.params.lang;
        },

        mode() {
            return this.giftId == null ? 1 : 2
        },

        title() {
            return this.mode === 1
                ? "New Gift"
                : "Update Gift";
        }
    },
    watch: {
        giftId: function (val){
            if(val != null){
                this.getGiftData(val)
            }
        }
    },
    methods: {
        ...mapActions("loyaltyPanel/catalogManagement", [
            "getGiftCategories",
            "getGiftData",
            "create",
            "update"
            ]),

        sendForm(){
            if(this.mode == 1){
                this.create(this.gift)
            }else{
                this.update(this.gift)
            }
            
        }
    },
    mounted(){
        this.getGiftCategories()
        if(this.giftId != null){
            this.getGiftData(this.giftId)
        }
    }
};
</script>

<style scoped></style>
