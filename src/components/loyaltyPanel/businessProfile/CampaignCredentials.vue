<template>
    <b-standard-card
        title="Campaign Credentials"
        title-color="white"
        submit-text="save"
    >
        <h4 class="secondary--text font-weight-bold subtitle-1">
            Notifications
        </h4>
        Fill out an extra contact email to receive notifications when creating
        and running any campaign.
        <v-row v-for="n in 3" :key="n" no-gutters align="baseline">
            <v-col
                cols="auto"
                class="subtitle-1 font-weight-bold secondary--text"
            >
                {{ n }}.
            </v-col>
            <v-col cols="7" class="pl-3">
                <b-text-field></b-text-field>
            </v-col>
        </v-row>

        <h4 class="secondary--text font-weight-bold subtitle-1 mt-7">
            SMS + Εmail
        </h4>
        Fill in the name you want to show when sending messages or Email with
        the first method. The name must be in Latin characters and without
        spaces.

        <b-text-field label="Message Sender Name"></b-text-field>

        <v-divider class="my-7"></v-divider>

        <v-row
            no-gutters
            justify="space-between"
            align="baseline"
            class="mt-3 mb-1"
        >
            <v-col cols="auto">
                <h4 class="secondary--text font-weight-bold subtitle-1">
                    1. Email (First method)
                </h4>
            </v-col>

            <v-col cols="auto">
                <v-btn color="secondary" class="text-capitalize" small depressed
                    >verify email</v-btn
                >
            </v-col>
        </v-row>

        Add the email you want to see as the sender of the campaign

        <v-alert type="warning">
            The email has not been fully verified. The first method will not be
            used in campaigns.
        </v-alert>

        <v-divider class="mt-7 mb-4"></v-divider>

        <h4 class="secondary--text font-weight-bold subtitle-1">
            2. Email (Second method)
        </h4>

        <v-alert type="warning" class="mt-3">
            Not all data have been completed and the second method will not be
            used in campaigns.
        </v-alert>

        Enter your email credentials in the table below to send email campaigns
        through your email provider. Leave this blank and RoadCube's email
        provider will be used.

        <b-text-field label="Host" class="mt-7"></b-text-field>
        <b-text-field label="Name"></b-text-field>
        <b-text-field type="email" label="Email"></b-text-field>
        <b-text-field type="password" label="Password"></b-text-field>

        <v-alert color="blue darken-2" text dense border="left" class="mt-7">
            * Sending email by priority. If the first method doesnt exists then
            the second method will be used. If the second method doesnt exists
            as well then RoadCube's email provider will be used.
        </v-alert>
    </b-standard-card>
</template>

<script>
export default {
    name: "CampaignCredentials"
};
</script>
