<template>
    <fragment>
        <v-row class="pr-4 pb-3 pt-7" no-gutters>
            <v-menu
                v-model="menu.status"
                max-height="300"
                offset-y
                :close-on-content-click="false"
                nudge-bottom="2"
            >
                <template v-slot:activator="{ on }">
                    <v-btn
                        color="secondary"
                        class="text-capitalize"
                        text
                        v-on="on"
                    >
                        {{ translations.filterStatus[lang] }}
                        <v-icon
                            v-text="
                                menu.status
                                    ? icons.mdiChevronUp
                                    : icons.mdiChevronDown
                            "
                        ></v-icon>
                    </v-btn>
                </template>

                <v-list dense>
                    <v-list-item
                        v-for="status in transactionStatuses"
                        :key="status.name"
                        class="pl-3"
                        :class="{ 'b-list-active': status.selected }"
                        @click="statusSelect(status)"
                    >
                        <v-list-item-icon class="mr-2">
                            <v-icon
                                :color="status.selected ? 'secondary' : ''"
                                v-text="
                                    status.selected
                                        ? icons.mdiCheckBoxOutline
                                        : icons.mdiCheckboxBlankOutline
                                "
                            ></v-icon>
                        </v-list-item-icon>

                        <v-list-item-title
                            v-text="status.name"
                        ></v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-menu
                v-model="menu.type"
                max-height="300"
                offset-y
                :close-on-content-click="false"
                nudge-bottom="2"
            >
                <template v-slot:activator="{ on }">
                    <v-btn
                        color="secondary"
                        class="text-capitalize"
                        text
                        v-on="on"
                    >
                        {{ translations.filterType[lang] }}
                        <v-icon
                            v-text="
                                menu.type
                                    ? icons.mdiChevronUp
                                    : icons.mdiChevronDown
                            "
                        ></v-icon>
                    </v-btn>
                </template>

                <v-list dense>
                    <v-list-item
                        v-for="type in transactionTypes"
                        :key="type.name"
                        class="pl-3"
                        :class="{ 'b-list-active': type.selected }"
                        @click="typeSelect(type)"
                    >
                        <v-list-item-icon class="mr-2">
                            <v-icon
                                :color="type.selected ? 'secondary' : ''"
                                v-text="
                                    type.selected
                                        ? icons.mdiCheckBoxOutline
                                        : icons.mdiCheckboxBlankOutline
                                "
                            ></v-icon>
                        </v-list-item-icon>
                        <v-list-item-title
                            v-text="type.name"
                        ></v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-spacer></v-spacer>

            <v-col cols="4" class="pl-12">
                <b-search-field></b-search-field>
            </v-col>
        </v-row>

        <v-row v-if="selectedStatuses.length > 0" no-gutters class="px-2 py-2">
            <v-col cols="12">
                <v-chip
                    v-for="(status, i) in selectedStatuses"
                    :key="status.name"
                    color="secondary"
                    class="ml-2 mb-1 font-weight-medium"
                    close
                    @click:close="deleteStatus(status, i)"
                    >{{ status.name }}</v-chip
                >
            </v-col>
        </v-row>

        <v-row v-if="selectedTypes.length > 0" no-gutters class="px-2 py-2">
            <v-col cols="12">
                <v-chip
                    v-for="(type, i) in selectedTypes"
                    :key="type.name"
                    color="secondary"
                    class="ml-2 mb-1 font-weight-medium"
                    close
                    @click:close="deleteType(type, i)"
                    >{{ type.name }}</v-chip
                >
            </v-col>
        </v-row>
    </fragment>
</template>

<script>
import {
    mdiChevronUp,
    mdiChevronDown,
    mdiCheckboxBlankOutline,
    mdiCheckBoxOutline
} from "@mdi/js";
import { mapState, mapActions } from "vuex";

import { Fragment } from "vue-fragment";

export default {
    name: "Filters",

    components: { Fragment },

    data: () => ({
        icons: {
            mdiChevronUp,
            mdiChevronDown,
            mdiCheckboxBlankOutline,
            mdiCheckBoxOutline
        },
        translations: {
            filterStatus: {
                el: "",
                en: "Filter By Status",
                it: ""
            },
            filterType: {
                el: "",
                en: "Filter By Type",
                it: ""
            }
        },
        menu: {
            status: false,
            type: false
        },
        selectedStatuses: [],
        selectedTypes: []
    }),

    computed: {
        ...mapState("storePanel/transactions", [
            "transactionStatuses",
            "transactionTypes"
        ]),

        lang() {
            return this.$route.params.lang;
        }
    },

    methods: {
        ...mapActions("storePanel/transactions", [
            "getTransactionStatuses",
            "getTransactionTypes"
        ]),

        statusSelect(item) {
            item.selected = !item.selected;

            let index = this.selectedStatuses.findIndex(
                s => s.name === item.name
            );

            if (index === -1) {
                this.selectedStatuses.push(item);
            } else {
                this.selectedStatuses.splice(index, 1);
            }
        },

        deleteStatus(item, index) {
            this.selectedStatuses.splice(index, 1);
            this.transactionStatuses.find(
                s => s.name === item.name
            ).selected = false;
        },

        typeSelect(item) {
            item.selected = !item.selected;

            let index = this.selectedTypes.findIndex(t => t.name === item.name);

            if (index === -1) {
                this.selectedTypes.push(item);
            } else {
                this.selectedTypes.splice(index, 1);
            }
        },

        deleteType(item, index) {
            this.selectedTypes.splice(index, 1);
            this.transactionTypes.find(
                t => t.name === item.name
            ).selected = false;
        }
    },

    watch: {
        transactionStatuses(val) {
            if (val.length) {
                if (this.$route.query["transaction-status-id"]) {
                    let statuses = this.$route.query[
                        "transaction-status-id"
                    ].split(",");

                    statuses.forEach(s => {
                        let status = val.find(
                            t => t.transaction_status_id === +s
                        );

                        status.selected = true;

                        this.selectedStatuses.push(status);
                    });
                }
            }
        },

        transactionTypes(val) {
            if (val.length) {
                if (this.$route.query["transaction-type"]) {
                    let types = this.$route.query["transaction-type"].split(
                        ","
                    );

                    types.forEach(t => {
                        let type = val.find(s => s.transaction_type_id === +t);

                        type.selected = true;

                        this.selectedTypes.push(type);
                    });
                }
            }
        },

        selectedStatuses(val) {
            let str = "";

            if (val.length) {
                val.forEach(s => (str += `,${s.transaction_status_id}`));
                str = str.slice(1);
            } else {
                str = undefined;
            }

            if (str !== this.$route.query["transaction-status-id"]) {
                this.$router.push({
                    query: {
                        ...this.$route.query,
                        "transaction-status-id": str
                    }
                });
            }
        },

        selectedTypes(val) {
            let str = "";

            if (val.length) {
                val.forEach(t => (str += `,${t.transaction_type_id}`));
                str = str.slice(1);
            } else {
                str = undefined;
            }

            if (str !== this.$route.query["transaction-type"]) {
                this.$router.push({
                    query: { ...this.$route.query, "transaction-type": str }
                });
            }
        }
    },

    mounted() {
        this.getTransactionStatuses();
        this.getTransactionTypes();
    }
};
</script>

<style scoped>
.b-list-active {
    background-color: rgba(42, 48, 66, 0.12);
    color: rgb(42, 48, 66);
}
</style>
