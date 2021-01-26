<template>
    <v-card flat>
        <v-col v-if="loading">
            <v-skeleton-loader
                class="mx-auto"
                max-width="500"
                type="heading"
                tile
            ></v-skeleton-loader>
            <v-skeleton-loader
                class="mx-auto"
                max-width="500"
                type="heading"
                tile
            ></v-skeleton-loader>
            <v-skeleton-loader
                class="mx-auto mt-3"
                max-width="500"
                type="image"
            ></v-skeleton-loader>
        </v-col>

        <v-card v-else width="500" class="mx-auto" outlined>
            <v-card-title class="subtitle-1 font-weight-bold">
                <v-icon
                    class="mr-3 text--primary"
                    v-text="icons.mdiAccountOutline"
                ></v-icon>
                {{ translations.userProfile[lang] }}
                <v-spacer></v-spacer>
                <v-btn icon @click="$emit('cancel')">
                    <v-icon v-text="icons.mdiClose"></v-icon>
                </v-btn>
            </v-card-title>

            <v-divider></v-divider>

            <v-card-text>
                <v-sheet
                    color="rgba(234, 237, 241, 0.57)"
                    outlined
                    class="pa-3 mb-3"
                >
                    {{ translations.userMobile[lang] }}:
                    {{ userProfile.mobile }}
                </v-sheet>

                <v-sheet
                    color="rgba(234, 237, 241, 0.57)"
                    outlined
                    class="pa-3 mb-3"
                >
                    {{ translations.smsCount[lang] }}:
                    {{ userProfile.sms_count }}
                </v-sheet>

                <v-sheet
                    color="rgba(234, 237, 241, 0.57)"
                    outlined
                    class="pa-3 mb-3"
                >
                    {{ translations.TOS[lang] }}: {{ userProfile.tos }}
                </v-sheet>
            </v-card-text>
        </v-card>
    </v-card>
</template>

<script>
import { mdiAccountOutline, mdiClose } from "@mdi/js";
import { mapActions } from "vuex";
import translations from "@/utils/translations/storePanel/settings/users/userProfile";

export default {
    name: "UserProfile",

    props: {
        userId: [String, Number]
    },

    mixins: [translations],

    data: () => ({
        icons: { mdiAccountOutline, mdiClose }
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        loading() {
            return this.$store.state.loading;
        },

        userProfile() {
            return this.$store.state.storePanel.users.userProfile;
        }
    },

    methods: {
        ...mapActions("storePanel/users", ["getItem"])
    },

    watch: {
        userId: {
            immediate: true,
            handler(val) {
                this.getItem(val);
            }
        }
    }
};
</script>

<style scoped>
.b-goback-btn {
    position: absolute;
    top: 12px;
    left: 12px;
}
</style>
