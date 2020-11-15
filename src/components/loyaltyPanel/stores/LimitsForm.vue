<template>
    <b-card
        :title="title"
        icon="mdiBankTransfer"
        @cancel="$emit('cancel')"
        @submit="$emit('submit')"
    >
        <v-row no-gutters>
            <v-col cols="3" class="pr-1">
                <v-select
                    v-model="status"
                    :items="['Offline']"
                    menu-props="offsetY"
                    color="secondary"
                    item-color="secondary"
                    outlined
                    dense
                    hide-details
                ></v-select>
            </v-col>
            <v-col cols="6" class="px-1">
                <v-text-field
                    label="Daily Transaction Limits"
                    color="secondary"
                    outlined
                    dense
                    clearable
                    hide-details
                ></v-text-field>
            </v-col>
            <v-col cols="3" class="pl-1">
                <v-select
                    v-model="currency"
                    :items="['Euro', 'Points']"
                    menu-props="offsetY"
                    color="secondary"
                    item-color="secondary"
                    outlined
                    dense
                    hide-details
                ></v-select>
            </v-col>
        </v-row>
    </b-card>
</template>

<script>
import { mdiBankTransfer } from "@mdi/js";
import { mapMutations } from "vuex";

export default {
    name: "LimitsForm",
    props: {
        mode: {
            type: Number
        }
    },
    data: () => ({
        icons: { mdiBankTransfer },
        status: "Offline",
        currency: "Euro",
        company: {
            name: "Vasilis"
        }
    }),

    computed: {
        title() {
            return this.mode === 1
                ? `Change Transaction Limits For All Companies`
                : `Change Transaction Limits For Company ${this.company.name}`;
        }
    },

    methods: {
        ...mapMutations("loyaltyPanel/branches", [])
    }
};
</script>
