<template>
    <v-col cols="12" class="pa-0">
        <v-checkbox
            v-model="formModal.productDisplayDays.active"
            label=" I want the product to be displayed on specific days"
            hide-details
            class="mb-2"
        ></v-checkbox>
        <v-col cols="12" v-if="formModal.productDisplayDays.active">
            <v-checkbox
                class="d-inline-block"
                v-model="week.monday"
                label="monday"
            ></v-checkbox>
            <v-checkbox
                class="d-inline-block"
                v-model="week.tuesday"
                label="tuesday"
            ></v-checkbox>
            <v-checkbox
                class="d-inline-block"
                v-model="week.wednesday"
                label="wednesday"
            ></v-checkbox>
            <v-checkbox
                class="d-inline-block"
                v-model="week.thursday"
                label="thursday"
            ></v-checkbox>
            <v-checkbox
                class="d-inline-block"
                v-model="week.friday"
                label="friday"
            ></v-checkbox>
            <v-checkbox
                class="d-inline-block"
                v-model="week.saturday"
                label="saturday"
            ></v-checkbox>
            <v-checkbox
                class="d-inline-block"
                v-model="week.sunday"
                label="sunday"
            ></v-checkbox>
        </v-col>
    </v-col>
</template>
<script>
export default {
    props: ["formModal"],
    data() {
        return {
            week: {
                monday: 1,
                tuesday: 1,
                wednesday: 1,
                thursday: 1,
                friday: 1,
                saturday: 1,
                sunday: 1
            }
        };
    },
    methods: {
        checkHandler() {
            this.formModal.productDisplayDays.active = !this.formModal
                .productDisplayDays.active;
        }
    }
};
</script>
