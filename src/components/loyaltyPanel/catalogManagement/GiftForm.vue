<template>
    <b-card :title="title" @cancel="$emit('close')" @submit="sendForm">
        <b-text-field
            label="Gift Name of Discount"
            v-model="gift.title"
            no-top-margin
        ></b-text-field>

        <b-textarea label="Description" v-model="gift.description"></b-textarea>

        <b-text-field label="ID Catalog" v-model="gift.catalog_number"></b-text-field>

        <b-text-field label="Gift Code" v-model="gift.code"></b-text-field>

        <b-select 
            :items="giftCategories"
            :item-text="`name[${lang}]`"
            item-value="gift_category_id"
            v-model="gift.gift_category_id"
            label="Gift Category"
        ></b-select>

        <b-text-field label="Gift Price" v-model="gift.cost" type="number"></b-text-field>

        <b-select :items="suppliers" label="Supplier"></b-select>

        <v-checkbox color="secondary" class="mt-3 pt-0" v-model="gift.take_from_store" hide-details>
            <template v-slot:label>
                <h4 class="subtitle-2">
                    Receipt from the store (! supplier must have shop)
                </h4>
            </template>
        </v-checkbox>

        <v-checkbox color="secondary" class="mt-3 pt-0" hide-details v-model="gift.show_on_catalog">
            <template v-slot:label>
                <h4 class="subtitle-2">Appear in catalog</h4>
            </template>
        </v-checkbox>

        <v-checkbox color="secondary" class="mt-3 pt-0" hide-details v-model="gift.redeem_in_store">
            <template v-slot:label>
                <h4 class="subtitle-2">
                    Appear and Redeem on Stores (Only if it is a Gift Voucher)
                </h4>
            </template>
        </v-checkbox>

        <b-text-field label="Points" type="number" v-model="gift.points"></b-text-field>

        <h4 class="subtitle-2 mt-3">Type</h4>

        <v-radio-group v-model="type" class="mt-3 pt-0" hide-details>
            <v-row no-gutters>
                <v-col cols="auto">
                    <v-radio color="secondary" value="Αγαθό">
                        <template v-slot:label>
                            <h4 class="subtitle-2">Αγαθό</h4>
                        </template>
                    </v-radio>
                </v-col>
                <v-col cols="auto" class="ml-3">
                    <v-radio color="secondary" value="Gift Voucher">
                        <template v-slot:label>
                            <h4 class="subtitle-2">
                                Gift voucher
                            </h4>
                        </template>
                    </v-radio>
                </v-col>
            </v-row>
        </v-radio-group>

        <v-row v-if="type === 'Gift Voucher'" no-gutters class="mt-3">
            <v-col cols="6">
                <h4 class="subtitle-2">
                    Select stores to redeem
                </h4>
            </v-col>

            <v-col cols="6">
                <v-checkbox
                    v-model="selectedStores"
                    v-for="store in stores"
                    :key="store"
                    :value="store"
                    hide-details
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
            class="mt-3"
            outlined
            dense
            hide-details
            color="secondary"
        ></v-file-input>
    </b-card>
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
