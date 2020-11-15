<template>
    <b-card
        title="Branch Management"
        icon="mdiAccountTie"
        @cancel="$emit('cancel')"
        @submit="$emit('submit')"
    >
        <h4 class="subtitle-2 secondary--text mb-3">
            Select Companies which you want to be able to Add / Delete
        </h4>

        <v-row no-gutters class="b-outlined pa-3">
            <v-col cols="2">
                <v-checkbox
                    v-model="all"
                    color="secondary"
                    class="mt-0 pt-0"
                    hide-details
                ></v-checkbox>
            </v-col>
            <v-col class="subtitle-2">All</v-col>
        </v-row>

        <v-row
            v-for="company in companies"
            :key="company.name"
            no-gutters
            class="b-outlined pa-3"
        >
            <v-col cols="2">
                <v-checkbox
                    v-model="company.add"
                    color="secondary"
                    class="mt-0 pt-0"
                    hide-details
                ></v-checkbox>
            </v-col>
            <v-col class="subtitle-2" v-text="company.name"></v-col>
        </v-row>
    </b-card>
</template>

<script>
import { mapMutations } from "vuex";

export default {
    name: "RightsForm",
    props: {
        mode: {
            type: Number
        }
    },

    data: () => ({
        all: false,
        companies: [
            { add: false, name: "Test Redeem" },
            { add: true, name: "Test Mail" },
            { add: false, name: "Test Istvan" }
        ]
    }),

    methods: {
        ...mapMutations("loyaltyPanel/branches", []),

        addRegion() {
            this.regions.push(this.region);
            this.region = "";
        }
    },

    watch: {
        all(val) {
            if (val) this.companies.forEach(c => (c.add = true));
            else this.companies.forEach(c => (c.add = false));
        }
    }
};
</script>
