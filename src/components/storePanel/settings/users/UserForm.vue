<template>
    <b-card
        :title="title"
        :loading="loading"
        :error-message="errorMessage"
        :reset-validation="resetValidation"
        @cancel="$emit('cancel')"
        @submit="
            () => {
                mode === 1 ? create() : update();
            }
        "
    >
        <v-row no-gutters>
            <template v-if="mode === 1">
                <v-col cols="6" class="pr-2">
                    <b-text-field
                        v-model="user.mobile"
                        label="Username"
                    ></b-text-field>
                </v-col>
                <v-col cols="6" class="pl-2">
                    <b-text-field
                        v-model="user.password"
                        :type="showPassword ? 'text' : 'password'"
                        label="Password"
                        append-icon="mdiEye"
                        @click-append="showPassword = !showPassword"
                    ></b-text-field>
                </v-col>
            </template>
            <v-col cols="12" class="subtitle-1 text--primary py-0 mt-2"
                >Permissions</v-col
            >

            <v-col
                v-for="(value, name) in user.permissions"
                :key="name"
                cols="12"
                class="text-capitalize"
            >
                <v-row no-gutters align="center">
                    <v-col v-if="typeof value === 'object'" cols="auto">
                        <v-btn icon @click="value.open = !value.open">
                            <v-icon
                                v-text="
                                    value.open
                                        ? icons.mdiMenuDown
                                        : icons.mdiMenuRight
                                "
                            ></v-icon>
                        </v-btn>
                    </v-col>
                    <v-col v-else cols="auto">
                        <v-btn
                            :color="value ? 'secondary' : ''"
                            icon
                            @click="
                                user.permissions[name] = !user.permissions[name]
                            "
                        >
                            <v-icon
                                v-text="
                                    value
                                        ? icons.mdiCheckBoxOutline
                                        : icons.mdiCheckboxBlankOutline
                                "
                            ></v-icon>
                        </v-btn>
                    </v-col>
                    <v-col>
                        {{ name }}
                    </v-col>
                    <v-col
                        v-for="(val, name) in value"
                        :key="name"
                        cols="10"
                        style="margin-left: 36px"
                    >
                        <v-row
                            v-if="value.open && name !== 'open'"
                            no-gutters
                            align="center"
                        >
                            <v-col v-if="typeof val === 'object'" cols="auto">
                                <v-btn icon @click="val.open = !val.open">
                                    <v-icon
                                        v-text="
                                            val.open
                                                ? icons.mdiMenuDown
                                                : icons.mdiMenuRight
                                        "
                                    ></v-icon>
                                </v-btn>
                            </v-col>

                            <v-col v-else cols="auto">
                                <v-btn
                                    :color="val ? 'secondary' : ''"
                                    icon
                                    @click="value[name] = !value[name]"
                                >
                                    <v-icon
                                        v-text="
                                            val
                                                ? icons.mdiCheckBoxOutline
                                                : icons.mdiCheckboxBlankOutline
                                        "
                                    ></v-icon>
                                </v-btn>
                            </v-col>

                            <v-col>
                                {{ name }}
                            </v-col>

                            <v-col
                                v-for="(va, name) in val"
                                :key="name"
                                cols="10"
                                style="margin-left: 36px"
                            >
                                <v-row
                                    v-if="val.open && name !== 'open'"
                                    no-gutters
                                    align="center"
                                >
                                    <v-col cols="auto">
                                        <v-btn
                                            icon
                                            @click="val[name] = !val[name]"
                                        >
                                            <v-icon
                                                :color="va ? 'secondary' : ''"
                                                v-text="
                                                    va
                                                        ? icons.mdiCheckBoxOutline
                                                        : icons.mdiCheckboxBlankOutline
                                                "
                                            ></v-icon>
                                        </v-btn>
                                    </v-col>

                                    <v-col>
                                        {{ name }}
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </b-card>
</template>

<script>
import {
    mdiMenuRight,
    mdiMenuDown,
    mdiCheckboxBlankOutline,
    mdiCheckBoxOutline
} from "@mdi/js";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    name: "UserForm",
    props: {
        mode: Number
    },

    data() {
        return {
            icons: {
                mdiMenuRight,
                mdiMenuDown,
                mdiCheckboxBlankOutline,
                mdiCheckBoxOutline
            },
            lang: "el",
            showPassword: false
        };
    },

    computed: {
        ...mapState([
            "loading",
            "errorMessage",
            "resetSuccess",
            "resetValidation"
        ]),
        ...mapState("storePanel/settings/users", ["moderatorPermissions"]),

        title() {
            return this.mode === 1 ? "New User" : "Update User";
        },

        user() {
            return this.$store.state.storePanel.settings.users.user;
        }
    },

    methods: {
        ...mapActions("storePanel/settings/users", ["create", "update"])
    },

    watch: {
        resetSuccess(val) {
            if (val) {
                this.success = {
                    name: false,
                    description: false,
                    sellingPrice: false,
                    wholesalePrice: false,
                    deliveryCost: false,
                    shippingCost: false,
                    category: false
                };
            }
        }
    },

    mounted() {
        console.log(this.user.permissions);
    }
};
</script>
