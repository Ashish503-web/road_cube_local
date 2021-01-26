<template>
    <v-snackbar
        v-model="notification.show"
        :color="notification.type"
        multi-line
    >
        <v-icon
            class="mr-1"
            v-text="
                notification.type === 'success'
                    ? icons.mdiCheckCircle
                    : icons.mdiAlert
            "
        ></v-icon>
        <span class="subtitle-1 font-weight-bold">
            {{ notification.text }}
        </span>
        <template v-slot:action>
            <v-btn
                icon
                @click="
                    setNotification({
                        show: false,
                        type: notification.type,
                        text: notification.text,
                    })
                "
            >
                <v-icon v-text="icons.mdiClose"></v-icon>
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
import { mdiCheckCircle, mdiAlert, mdiClose } from "@mdi/js";
import { mapMutations } from "vuex";

export default {
    name: "Notification",

    data: () => ({
        icons: { mdiCheckCircle, mdiAlert, mdiClose },
    }),

    computed: {
        notification() {
            return this.$store.state.notification;
        },
    },

    methods: {
        ...mapMutations(["setNotification"]),
    },
};
</script>
