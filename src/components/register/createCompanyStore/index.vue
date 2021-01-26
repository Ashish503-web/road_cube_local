<template>
    <v-window-item :value="3" class="pa-0">
        <v-tabs v-model="tab" color="secondary" centered>
            <!-- <v-tab class="text-capitalize">company</v-tab> -->
            <v-tab class="text-capitalize">store</v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
            <!-- <CreateCompany /> -->
            <CreateStore />
        </v-tabs-items>
    </v-window-item>
</template>

<script>
import axios from "axios";
// import CreateCompany from "./CreateCompany.vue";
import CreateStore from "./CreateStore.vue";

export default {
    name: "CreateCompanyStore",

    components: { CreateStore },

    data() {
        return {
            tab: 0
        };
    }
};
</script>
