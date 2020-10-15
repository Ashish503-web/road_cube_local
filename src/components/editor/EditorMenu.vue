<template>
    <b-card title="Update Text Field">
        <v-row no-gutters class="px-5" align="center">
            <v-col cols="3" class="text-right">
                <h4 class="subtitle-2 secondary--text mt-3 mr-3">
                    Required
                </h4>
            </v-col>
            <v-col cols="9">
                <v-checkbox
                    :input-value="required"
                    color="secondary"
                    class="mt-3 pt-0"
                    hide-details
                    @change="$emit('update:required', $event)"
                ></v-checkbox>
            </v-col>

            <v-col cols="3" class="text-right">
                <h4 class="subtitle-2 secondary--text mt-3 mr-3">
                    Label
                </h4>
            </v-col>
            <v-col cols="9">
                <b-text-field
                    :value="label"
                    @input="$emit('update:label', $event)"
                    class="ml-1"
                ></b-text-field>
            </v-col>

            <v-col cols="3" class="text-right">
                <h4 class="subtitle-2 secondary--text mt-3 mr-3">
                    Help Text
                </h4>
            </v-col>
            <v-col cols="9">
                <b-text-field
                    :value="helpText"
                    @input="$emit('update:helpText', $event)"
                    class="ml-1"
                ></b-text-field>
            </v-col>

            <v-col cols="3" class="text-right">
                <h4 class="subtitle-2 secondary--text mt-3 mr-3">
                    Access
                </h4>
            </v-col>
            <v-col cols="9">
                <v-checkbox
                    v-model="showRoles"
                    color="secondary"
                    class="mt-3 pt-0"
                    hide-details
                >
                    <template v-slot:label>
                        <h4 class="subtitle-2 secondary--text">
                            Limit access to one or more of the following roles:
                        </h4>
                    </template>
                </v-checkbox>
            </v-col>

            <v-col v-if="showRoles" cols="3"></v-col>
            <v-col v-if="showRoles" cols="9" class="mt-3">
                <v-checkbox
                    v-for="role in roles"
                    :key="role"
                    :input-value="access"
                    :value="role"
                    color="secondary"
                    class="mt-0"
                    hide-details
                    @change="$emit('update:access', $event)"
                >
                    <template v-slot:label>
                        <h4
                            class="subtitle-2 secondary--text"
                            v-text="role"
                        ></h4>
                    </template>
                </v-checkbox>
            </v-col>

            <v-col cols="3" class="text-right">
                <h4 class="subtitle-2 secondary--text mt-3 mr-3">
                    Value
                </h4>
            </v-col>
            <v-col cols="9">
                <b-text-field
                    v-model="innerValue"
                    v-mask="mask"
                    @input="$emit('input', $event)"
                    class="ml-1"
                ></b-text-field>
            </v-col>

            <v-col cols="3" class="text-right">
                <h4 class="subtitle-2 secondary--text mt-3 mr-3">
                    Type
                </h4>
            </v-col>
            <v-col cols="9">
                <b-select
                    :value="type"
                    :items="types"
                    @input="$emit('update:type', $event)"
                    class="ml-1"
                ></b-select>
            </v-col>

            <v-col cols="3" class="text-right">
                <h4 class="subtitle-2 secondary--text mt-3 mr-3">
                    Max Length
                </h4>
            </v-col>
            <v-col cols="3">
                <b-text-field
                    :value="maxLength"
                    @input="$emit('update:maxLength', $event)"
                    type="number"
                    class="ml-1"
                ></b-text-field>
            </v-col>
        </v-row>
    </b-card>
</template>

<script>
export default {
    name: "EditorMenu",

    props: {
        required: Boolean,
        helpText: String,
        label: String,
        type: String,
        value: String,
        access: Array,
        maxLength: String
    },

    data: () => ({
        showRoles: false,
        roles: ["Administrator"],
        innerValue: "",
        types: ["Text", "Password", "Email", "Date/Time Local"]
    }),

    computed: {
        mask() {
            let str = "";

            for (let i = 0; i < this.maxLength; i++) {
                str += "X";
            }

            return str;
        }
    }
};
</script>
