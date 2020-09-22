<template>
    <v-card
        class="mx-auto mt-4"

        outlined
    >
        <v-card-title class="">
            Push Notifications

        </v-card-title>


        <v-list-item class="dashed_border mr-4 ml-4 mb-4">
            <v-container>
                <v-row>




                    <v-col cols="12" >
                        <v-text-field
                            label="REST API KEY"
                            placeholder="Placeholder"
                            :value="val1"
                            outlined
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" >
                        <v-text-field
                            label="One Signal App ID"
                            placeholder="Placeholder"
                            :value="val2"
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
                disabled
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
            val1:'MDc4M2FhNDEtYTkxMy00M2IwLTgyZDktMDdjN2E4Njg3NzU1',
            val2:'969b8c9f-a045-48f9-aff8-f31e365cd1d5',
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