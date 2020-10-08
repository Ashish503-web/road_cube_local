<template>
    <b-standard-card
        title="Push Notifications"
        title-color="white"
        submit-text="save"
        height="auto"
        class="mt-5"
    >
        <v-row no-gutters justify="center">
            <v-col cols="11">
                <b-text-field label="REST API Key" no-top-margin></b-text-field>
                <b-text-field label="One Signal App ID"></b-text-field>
            </v-col>
        </v-row>
    </b-standard-card>
</template>

<script>
export default {
    name: "PushNotifications"
};
</script>
