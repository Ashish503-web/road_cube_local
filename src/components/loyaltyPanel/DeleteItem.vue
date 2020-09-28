<template>
    <v-dialog v-model="deleteModal.active" max-width="500">
        <v-card>
            <v-card-title class="red white--text">
                {{deleteModal.title}}
                <v-spacer></v-spacer>
                <v-icon dark large v-text="icons.mdiDelete"></v-icon>
            </v-card-title>

            <v-divider></v-divider>

            <v-card-text class="pt-5 subtitle-1 font-weight-bold">
                <p>
                    {{deleteModal.subTitle}}
                </p>

                <v-checkbox color="secondary">
                    <template v-slot:label>
                        <h4 class="subtitle-1 font-weight-bold">
                            {{deleteModal.description}}
                        </h4>
                    </template>
                </v-checkbox>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn text @click="deleteModal.active = false">cancel</v-btn>
                <v-btn color="red" dark class="px-5" depressed>
                    delete
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import { mdiDelete } from "@mdi/js";
    import { mapMutations } from "vuex";

    export default {
        name: "DeleteItem",
        props:['deleteModal'],
        data: () => ({
            icons: { mdiDelete }
        }),
        computed: {

        },

        methods: {
        }
    };
</script>
