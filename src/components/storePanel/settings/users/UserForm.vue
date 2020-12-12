<template>
    <b-card
        :title="title"
        :loading="loading"
        :error-message="errorMessage"
        :disabled="!formValid"
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
                        v-mask="'##########'"
                        :label="translations.mobile[lang]"
                        no-top-margin
                        :success="success.mobile"
                        :error-messages="error.mobile"
                        @focus="error.mobile = ''"
                        @blur="validateMobile"
                    ></b-text-field>
                </v-col>
                <v-col cols="6" class="pl-2">
                    <b-text-field
                        v-model="user.password"
                        :type="showPassword ? 'text' : 'password'"
                        :label="translations.password[lang]"
                        no-top-margin
                        prepend-inner-icon="mdiLock"
                        append-icon="mdiEye"
                        :success="success.password"
                        :error-messages="error.password"
                        @focus="error.password = ''"
                        @blur="validatePassword"
                        @click-append="showPassword = !showPassword"
                    ></b-text-field>
                </v-col>
            </template>
            <v-col
                cols="12"
                class="subtitle-1 text--primary py-0 mt-0"
                :class="{ 'mt-2': mode === 1, 'mb-2': mode === 2 }"
            >
                <v-row no-gutters align="center">
                    <v-col v-text="translations.permissions[lang]"></v-col>

                    <v-col cols="auto" class="pr-1">
                        <v-checkbox
                            v-model="allPermissions"
                            color="secondary"
                            class="pt-0 mt-0"
                            hide-details
                        >
                            <template v-slot:label>
                                <h4
                                    class="subtitle-2"
                                    v-text="translations.updateAll[lang]"
                                ></h4>
                            </template>
                        </v-checkbox>
                    </v-col>
                </v-row>
            </v-col>

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
    mdiCheckBoxOutline,
} from "@mdi/js";

import { mapState, mapMutations, mapActions } from "vuex";
import translations from "@/utils/translations/storePanel/settings/users/userForm";
import validators from "@/utils/validators/storePanel/user";

export default {
    name: "UserForm",

    props: {
        mode: Number,
    },

    mixins: [translations, validators],

    data() {
        return {
            icons: {
                mdiMenuRight,
                mdiMenuDown,
                mdiCheckboxBlankOutline,
                mdiCheckBoxOutline,
            },
            showPassword: false,
            allPermissions: false,
        };
    },

    computed: {
        ...mapState([
            "loading",
            "errorMessage",
            "resetSuccess",
            "resetValidation",
        ]),
        ...mapState("storePanel/settings/users", ["moderatorPermissions"]),

        lang() {
            return this.$route.params.lang;
        },

        title() {
            return this.mode === 1
                ? this.translations.newUser[this.lang]
                : this.translations.updateUser[this.lang];
        },

        user() {
            return this.$store.state.storePanel.settings.users.user;
        },
    },

    methods: {
        ...mapMutations(["setResetSuccess", "setResetValidation"]),
        ...mapActions("storePanel/settings/users", ["create", "update"]),
    },

    watch: {
        user(val) {
            this.allPermissions = false;
        },

        allPermissions(val) {
            let permissions = this.user.permissions;
            if (val) {
                for (let key in permissions) {
                    if (typeof permissions[key] === "object") {
                        let subPermissions = permissions[key];

                        for (let key in subPermissions) {
                            if (typeof subPermissions[key] === "object") {
                                for (let subKey in subPermissions[key]) {
                                    subPermissions[key][subKey] = true;
                                }
                            } else {
                                subPermissions[key] = true;
                            }
                        }
                    } else {
                        permissions[key] = true;
                    }
                }

                this.user.permissions_enabled = true;
            } else {
                for (let key in permissions) {
                    if (typeof permissions[key] === "object") {
                        let subPermissions = permissions[key];

                        for (let key in subPermissions) {
                            if (typeof subPermissions[key] === "object") {
                                for (let subKey in subPermissions[key]) {
                                    subPermissions[key][subKey] = false;
                                }
                            } else {
                                subPermissions[key] = false;
                            }
                        }
                    } else {
                        permissions[key] = false;
                    }
                }

                this.user.permissions_enabled = false;
            }
        },
    },
};
</script>
