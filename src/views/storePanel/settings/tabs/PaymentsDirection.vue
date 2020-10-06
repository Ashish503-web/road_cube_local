<template>
    <v-tab-item>
        <v-card tile flat>
            <v-card-text>
                Choose how each card will be cleared in your store.
                <v-row>
                    <v-col cols="6">
                        <h4 class="secondary--text subtitle-2">
                            Card From:
                        </h4>
                    </v-col>
                    <v-col cols="6">
                        <h4 class="secondary--text subtitle-2">
                            Clearance From:
                        </h4>
                    </v-col>
                </v-row>

                <v-divider></v-divider>
            </v-card-text>
        </v-card>
    </v-tab-item>
</template>

<script>
export default {
    name: "PaymentsDirection"
};
</script>
