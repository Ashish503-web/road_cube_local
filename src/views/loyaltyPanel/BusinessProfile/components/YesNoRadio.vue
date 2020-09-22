<template>
    <v-card
        class="mx-auto"

        outlined
    >

        <div class="dashed_border  mt-6 mr-4 ml-4 mb-4">
            <p class=" ml-4 mt-3">{{question}}</p>
            <v-radio-group
                class=" ml-4 "
                :disabled="disabled"
                :readonly="readonly"
                :mandatory="mandatory"
                :multiple="multiple"
                :error="error"
                :success="success"
                :row="row"
                :color="color"
                v-model="defaultAnswer"
            >
                <v-radio label="Yes" value="1"></v-radio>
                <v-radio label="No" value="0"></v-radio>
            </v-radio-group>
        </div>
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
    props:[
        'question'
    ],
    data: () => ({
        defaultAnswer:'1',
        disabled: false,
        readonly: false,
        loading: false,
        flat: false,
        inset: false,
        error: false,
        success: false,
        mandatory: false,
        multiple: false,
        row: false,
        indeterminate: false,
        color: "accent",
        colors: [
            "accent",
            "teal",
            "blue",
            "error",
            "success"
        ]
    })
};
</script>
<style scoped>
.dashed_border {
    border: 1px dashed grey;
    border-radius: 10px;
}
</style>