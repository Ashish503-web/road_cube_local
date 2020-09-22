<template>
    <v-card
        class="mx-auto"

        outlined
    >
        <v-card-title class="">
            Set initial digits in new customer form
        </v-card-title>
        <v-card-text>
            You can set the first digits of the mobile phone when adding new customers from the Customers page. These digits will be automatically filled in the "Add new customer" form on the cellphone field every time you add a new one. This setting is optional.
        </v-card-text>

        <v-list-item class="dashed_border mr-4 ml-4 mb-4">
            <v-container>
                <v-row>




                    <v-col cols="12" sm="6" md="6">
                        <v-text-field
                            label="Outlined"
                            placeholder="Placeholder"
                            :value="val"
                            outlined
                        ></v-text-field>
                    </v-col>

                </v-row>
            </v-container>
        </v-list-item>
        <v-card-actions>

        <v-btn
            color="light-blue accent-1"
            class="white--text"
        >
            Save
        </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>


export default {
    data() {
        return {
            val:30,
        };
    },
    methods:{

    }
};
</script>
<style scoped>
.dashed_border {
    border: 1px dashed grey;
    border-radius: 10px;
}
</style>