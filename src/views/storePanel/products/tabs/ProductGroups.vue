<template>
    <v-tab-item :value="$route.path">
        <v-toolbar flat height="80" class="pt-2">
            <v-btn
                color="secondary"
                class="text-capitalize"
                depressed
                v-text="translations.addProductGroup[lang]"
                @click="open(1, {})"
            ></v-btn>
        </v-toolbar>

        <v-data-table
            :headers="headers"
            :items="productGroups"
            :footer-props="{ itemsPerPageOptions: [12], showCurrentPage: true }"
            :page.sync="page"
            :server-items-length="serverItemsLength"
            class="b-outlined"
        >
            <template v-slot:no-data>
                <v-progress-circular
                    v-if="loading"
                    color="secondary"
                    indeterminate
                ></v-progress-circular>
                <span v-else v-text="translations.noData[lang]"></span>
            </template>

            <template v-slot:item.actions="{ item }">
                <v-tooltip color="secondary" top>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            color="yellow darken-3"
                            icon
                            v-on="on"
                            @click="open(2, item)"
                        >
                            <v-icon v-text="icons.mdiPencilOutline"></v-icon>
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
                            @click="
                                () => {
                                    productGroup = item;
                                    deleteDialog = true;
                                }
                            "
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

        <v-dialog v-model="dialog" max-width="600">
            <ProductGroupForm :mode="mode" @cancel="dialog = false" />
        </v-dialog>

        <v-dialog v-model="deleteDialog" max-width="500">
            <b-card
                type="delete"
                :title="translations.deleteProductGroup[lang]"
                :submit-text="{ el: '', en: 'delete', it: '' }"
                :loading="loading"
                :error-message="errorMessage"
                @cancel="deleteDialog = false"
                @submit="remove"
            >
                <div class="subtitle-1 font-weight-medium pl-2">
                    {{ translations.deleteText[lang] }}
                    <span class="font-weight-bold text--primary">{{
                        productGroup.name[lang]
                    }}</span
                    >?
                </div>
            </b-card>
        </v-dialog>
    </v-tab-item>
</template>

<script>
import { mdiPencilOutline, mdiClose } from "@mdi/js";
import { mapState, mapMutations, mapActions } from "vuex";
import ProductGroupForm from "@/components/storePanel/products/ProductGroupForm.vue";
import translations from "@/utils/translations/storePanel/products";

export default {
    name: "ProductGroups",

    components: { ProductGroupForm },

    mixins: [translations],

    data() {
        return {
            icons: { mdiPencilOutline, mdiClose },
            page: +this.$route.query.page,
            mode: 0
        };
    },

    computed: {
        ...mapState(["loading", "errorMessage", "serverItemsLength"]),
        ...mapState("storePanel/productGroups", ["productGroups"]),

        lang() {
            return this.$route.params.lang;
        },

        headers() {
            return [
                {
                    text: this.translations.productName[this.lang],
                    value: `name[${this.lang}]`
                },
                {
                    text: this.translations.productDescription[this.lang],
                    value: `description[${this.lang}]`
                },
                {
                    text: this.translations.sellingPrice[this.lang],
                    value: "average_price"
                },
                {
                    text: this.translations.actions[this.lang],
                    value: "actions"
                }
            ];
        },

        dialog: {
            get() {
                return this.$store.state.dialog;
            },

            set(val) {
                this.setDialog(val);
            }
        },

        deleteDialog: {
            get() {
                return this.$store.state.deleteDialog;
            },

            set(val) {
                this.setDeleteDialog(val);
            }
        },

        productGroup: {
            get() {
                return this.$store.state.storePanel.productGroups.productGroup;
            },

            set(val) {
                this.setItem(val);
            }
        },

        query() {
            let query = "?";

            for (let key in this.$route.query) {
                query += `${key}=${this.$route.query[key]}&`;
            }

            return query.slice(0, query.length - 1);
        }
    },

    methods: {
        ...mapMutations([
            "setDialog",
            "setDeleteDialog",
            "setResetSuccess",
            "setResetValidation"
        ]),
        ...mapMutations("storePanel/productGroups", [
            "setShowImageUpload",
            "setShowWeekdays",
            "setItem"
        ]),
        ...mapActions("storePanel/productGroups", ["getItems", "remove"]),

        open(mode, item) {
            this.mode = mode;
            this.productGroup = item;
            if (this.productGroup.average_price)
                this.productGroup.average_price = this.productGroup.average_price.slice(
                    1
                );
            if (this.productGroup.image) this.setShowImageUpload(true);
            else this.setShowImageUpload(false);
            if (this.productGroup.availability_days.length)
                this.setShowWeekdays(true);
            else this.setShowWeekdays(false);
            this.dialog = true;
            setTimeout(() => this.setResetSuccess(true), 300);
            this.setResetValidation(true);
        }
    },

    watch: {
        dialog(val) {
            if (!val) {
                this.setResetSuccess(false);
                this.setResetValidation(false);
            }
        },

        $route(val) {
            if (!val.query.page) {
                this.$router.push({
                    query: {
                        page: 1,
                        ...this.$route.query
                    }
                });
            }
            this.getItems(this.query);
        },

        page(page) {
            this.$router.push({ query: { ...this.$route.query, page } });
        }
    },

    beforeCreate() {
        if (!this.$route.query.page) {
            this.$router.push({
                query: {
                    page: 1,
                    ...this.$route.query
                }
            });
        }
    },

    mounted() {
        this.getItems(this.query);
    }
};
</script>
