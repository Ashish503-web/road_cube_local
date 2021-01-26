<template>
    <b-card
        :title="title"
        :loading="loading"
        :error-message="errorMessage"
        :disabled="!formValid"
        @cancel="$emit('cancel')"
        @submit="
            () => {
                mode === 1 ? create(user) : update(user);
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
                v-for="(value, name1) in user.permissions"
                :key="name1"
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
                                user.permissions[name1] = !user.permissions[name1]
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
                        {{ name1 }}
                    </v-col>
                    <v-col
                        v-for="(val, name2) in value"
                        :key="name2"
                        cols="10"
                        style="margin-left: 36px"
                    >
                        <v-row
                            v-if="value.open && name2 !== 'open'"
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
                                    @click="value[name2] = !value[name2]"
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
                                {{ name2 }}
                            </v-col>

                            <v-col
                                v-for="(va, name3) in val"
                                :key="name3"
                                cols="10"
                                style="margin-left: 36px"
                            >
                                <v-row
                                    v-if="val.open && name3 !== 'open'"
                                    no-gutters
                                    align="center"
                                >
                                    <v-col cols="auto">
                                        <v-btn
                                            icon
                                            @click="val[name3] = !val[name3]"
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
                                        {{ name3 }}
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
import translations from "@/utils/translations/loyaltyPanel/userRights";
import validators from "@/utils/validators/loyaltyPanel/user";
import UIPermissions from "@/models/loyaltyPanel/UIPermissions";

export default {
    name: "UserForm",

    props: {
        mode: Number
    },

    mixins: [translations, validators],

    data() {
        return {
            icons: {
                mdiMenuRight,
                mdiMenuDown,
                mdiCheckboxBlankOutline,
                mdiCheckBoxOutline
            },
            showPassword: false,
            allPermissions: false
        };
    },

    computed: {
        ...mapState([
            "loading",
            "errorMessage",
            "resetSuccess",
            "resetValidation"
        ]),
        ...mapState("loyaltyPanel/userRights", ["moderatorPermissions"]),

        user: {
            get(){
                return this.$store.state.loyaltyPanel.userRights.user
            },
            set(val){
                this.setUser(val)
            }
        },

        lang() {
            return this.$route.params.lang;
        },

        title() {
            return this.mode === 1
                ? this.translations.newUser[this.lang]
                : this.translations.updateUser[this.lang];
        }
    },

    methods: {
        ...mapMutations(["setResetSuccess", "setResetValidation"]),
        ...mapMutations("loyaltyPanel/userRights", ["setUser"]),
        ...mapActions("loyaltyPanel/userRights", ["create", "update"])
    },
    mounted() {
        if(this.mode == 1){
                this.user.permissions = new UIPermissions(this.moderatorPermissions);
            }
    },

    watch: {
        user(val) {
            this.allPermissions = false;
        },

        mode(val) {
            if(val === 1){
                this.user.permissions = new UIPermissions(this.moderatorPermissions);
            }  
            
        },

        allPermissions(val) {
            let { permissions } = this.user;
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
            }
        }
    }
};
</script>
