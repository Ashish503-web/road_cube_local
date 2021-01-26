<template>
    <v-tab-item :value="$route.fullPath" class="pa-3">
        <v-toolbar flat height="90">
            <v-btn
                :color="permissions.create ? 'secondary' : 'grey'"
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
            disable-sort
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

            <template v-slot:item.retail_price="{ item }">
                {{
                    new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "EUR",
                        minimumFractionDigits: 2
                    }).format(item.retail_price)
                }}
            </template>

            <template v-slot:item.published="{ item }">
                <v-icon
                    v-if="item.published"
                    color="green"
                    v-text="icons.mdiCheckCircleOutline"
                ></v-icon>
                <v-icon
                    v-else
                    color="red"
                    v-text="icons.mdiMinusCircleOutline"
                ></v-icon>
            </template>

            <template v-slot:item.actions="{ item }">
                <v-tooltip color="secondary" top>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            :color="
                                permissions.update ? 'yellow darken-3' : 'grey'
                            "
                            icon
                            v-on="on"
                            @click="
                                permissions.update
                                    ? open(2, item)
                                    : setPermissionDialog(true)
                            "
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
                            :color="permissions.delete ? 'red' : 'grey'"
                            icon
                            v-on="on"
                            @click="
                                () => {
                                    if (permissions.delete) {
                                        productGroup = item;
                                        deleteDialog = true;
                                    } else {
                                        setPermissionDialog(true);
                                    }
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
                <div class="subtitle-1 font-weight-medium py-3 px-2">
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
import productGroups from "@/store/modules/storePanel/productGroups";

import {
    mdiCheckCircleOutline,
    mdiMinusCircleOutline,
    mdiPencilOutline,
    mdiClose
} from "@mdi/js";

import { mapState, mapMutations, mapActions } from "vuex";
import ProductGroupForm from "@/components/storePanel/products/ProductGroupForm.vue";
import translations from "@/utils/translations/storePanel/products";

export default {
    name: "ProductGroups",

    components: { ProductGroupForm },

    mixins: [translations],

    data() {
        return {
            icons: {
                mdiCheckCircleOutline,
                mdiMinusCircleOutline,
                mdiPencilOutline,
                mdiClose
            },
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

        permissions() {
            return this.$store.state.permissions.products
                ? this.$store.state.permissions.products.group
                : {};
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
                    value: "retail_price"
                },
                {
                    text: this.translations.points[this.lang],
                    value: "reward_points"
                },
                {
                    text: this.translations.category[this.lang],
                    value: `product_category.name[${this.lang}]`
                },
                {
                    text: this.translations.published[this.lang],
                    value: "published",
                    align: "center"
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
            "setResetValidation",
            "setPermissionDialog"
        ]),
        ...mapMutations("storePanel/productGroups", [
            "setShowImageUpload",
            "setShowWeekdays",
            "setItem"
        ]),
        ...mapActions("storePanel/productGroups", ["getItems", "remove"]),

        open(mode, item) {
            if (mode === 2) {
                item.product_category_id =
                    item.product_category.product_category_id;
            }
            this.mode = mode;
            this.productGroup = item;
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
        ["permissions.read"]: {
            immediate: true,
            handler(val) {
                if (!val) {
                    this.$router.replace(
                        `/${this.lang}/storePanel/forbidden-gateway`
                    );
                }
            }
        },

        $route(val) {
            if (!val.query.page) {
                this.$router.replace({
                    query: {
                        page: 1,
                        ...this.$route.query
                    }
                });
            }
            this.getItems(this.query);
        },

        page(page) {
            this.$router.replace({ query: { ...this.$route.query, page } });
        }
    },

    beforeCreate() {
        if (!this.$store.state.storePanel.productGroups) {
            this.$store.registerModule(
                ["storePanel", "productGroups"],
                productGroups
            );
        }

        if (!this.$route.query.page) {
            this.$router.replace({
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
