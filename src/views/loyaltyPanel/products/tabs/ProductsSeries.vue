<template>
    <v-tab-item :value="$route.path" class="pa-3">
        <h2 class="text-center mt-5 mb-5">Change the order</h2>
        <v-card class="mx-auto mt-5 mb-5" max-width="800">
            <div class="mb-5 pt-5 text-right">
                <v-btn class="mr-5" color="primary" @click="updateOrders" depressed>Update</v-btn>
            </div>
            <v-list class="pr-3 pl-3" max-width="70%">
                <v-list-item-group>
                    <draggable v-model="products">
                        <v-list-item
                            class="grey lighten-3 mb-1"
                            v-for="(item, i) in products"
                            :key="i"
                        >
                            <v-list-item-icon>
                                <v-icon v-text="icons.mdiSwapVerticalBold"></v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title
                                    v-text="item.name[lang]"
                                ></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </draggable>
                    
                </v-list-item-group>
            </v-list>
            <!-- <div class="mb-5 pb-5 text-right">
                <v-btn class="mr-5" color="primary" depressed>Update</v-btn>
            </div> -->
        </v-card>
    </v-tab-item>
</template>

<script>
import { mdiSwapVerticalBold } from "@mdi/js";
import draggable from 'vuedraggable'
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    name: "ProductsSeries",
    data: () => ({
        icons: {
            mdiSwapVerticalBold,
        }
    }),

    components: {
        draggable
    },

    computed: {
        // ...mapState("loyaltyPanel/productSeries", ["products"]),

        lang() {
            return this.$route.params.lang;
        },

        products: {
            get() {
                return this.$store.state.loyaltyPanel.productSeries.products
            },
            set(value) {
                this.updateList(value)
            }
        }
    },

    methods: {
        ...mapActions("loyaltyPanel/productSeries", ["getItems","updateSorting"]),

        ...mapMutations("loyaltyPanel/productSeries", ["updateList"]),

        updateOrders(){
            this.updateSorting(this.products)
        }
    },

    mounted(){
        this.getItems(this.lang)
        console.log(this.$store.state,'this.$store.state.myList')
    }
};
</script>
