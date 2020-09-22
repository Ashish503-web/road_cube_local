<template>
    <v-card
        class="mx-auto mt-4 pr-4 pl-4 mb-4"
        outlined
    >
        <v-card-title>API Authentication
        </v-card-title>

        <v-textarea
            outlined
            name="input-7-4"
            value=""></v-textarea>
        <v-row>
            <v-col cols="5">
                <v-text-field
                    placeholder="Password"
                    outlined
                    dense
                ></v-text-field>
            </v-col>
            <v-col cols="4">
                <p>
                    You can find detailed documentation
                    <a href="">here</a>
                </p>
            </v-col>
            <v-col cols="2">
                <v-btn depressed>Get Token</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <label class="d-inline-block mr-3">Reset all previously created tokens:


                </label>
                <v-switch v-model="switch1" inset  class="d-inline-block"></v-switch>
            </v-col>

        </v-row>
    </v-card>
</template>
<script>
export default {
    data() {
        return {
            switch1: false
        };
    }
};
</script>