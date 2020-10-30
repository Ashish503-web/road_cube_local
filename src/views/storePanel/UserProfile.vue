<template>
    <v-sheet class="pa-6" height="100%" color="rgba(234, 237, 241, 0.57)">
        <v-row class="fill-height" align="center">
            <v-tooltip color="secondary" top>
                <template v-slot:activator="{ on }">
                    <v-btn
                        class="b-goback-btn"
                        icon
                        v-on="on"
                        to="/storePanel/settings/users"
                    >
                        <v-icon v-text="icons.mdiArrowLeft"></v-icon>
                    </v-btn>
                </template>

                <span class="font-weight-bold">Go Back</span>
            </v-tooltip>

            <v-col v-if="loading">
                <v-skeleton-loader
                    class="mx-auto"
                    max-width="500"
                    type="image"
                ></v-skeleton-loader>
                <v-skeleton-loader
                    class="mx-auto"
                    max-width="500"
                    type="image"
                ></v-skeleton-loader>
                <v-skeleton-loader
                    class="mx-auto"
                    max-width="500"
                    type="image"
                ></v-skeleton-loader>
            </v-col>

            <v-card v-else width="500" class="mx-auto" outlined>
                <v-card-title>
                    <v-icon
                        size="28"
                        class="mr-3 text--primary"
                        v-text="icons.mdiAccountOutline"
                    ></v-icon>
                    User Profile
                </v-card-title>

                <v-divider></v-divider>

                <v-card-text>
                    <v-sheet
                        color="rgba(234, 237, 241, 0.57)"
                        outlined
                        class="pa-3 mb-3"
                    >
                        User Mobile: {{ userProfile.mobile }}
                    </v-sheet>

                    <v-sheet
                        color="rgba(234, 237, 241, 0.57)"
                        outlined
                        class="pa-3 mb-3"
                    >
                        SMS Count: {{ userProfile.sms_count }}
                    </v-sheet>

                    <v-sheet
                        color="rgba(234, 237, 241, 0.57)"
                        outlined
                        class="pa-3 mb-3"
                    >
                        TOS: {{ userProfile.tos }}
                    </v-sheet>
                </v-card-text>
            </v-card>
        </v-row>
    </v-sheet>
</template>

<script>
import { mdiArrowLeft, mdiAccountOutline } from "@mdi/js";
import { mapActions } from "vuex";

export default {
    name: "UserProfile",

    data: () => ({
        icons: { mdiArrowLeft, mdiAccountOutline },
    }),

    computed: {
        loading() {
            return this.$store.state.loading;
        },

        userProfile() {
            return this.$store.state.storePanel.settings.users.userProfile;
        },
    },

    methods: {
        ...mapActions("storePanel/settings/users", ["getItem"]),
    },

    mounted() {
        console.log(this.$route.params.id);
        this.getItem(this.$route.params.id);
    },
};
</script>

<style scoped>
.b-goback-btn {
    position: absolute;
    top: 12px;
    left: 12px;
}
</style>