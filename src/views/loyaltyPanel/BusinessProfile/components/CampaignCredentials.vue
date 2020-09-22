<template>
    <v-card
        class="mx-auto"

        outlined
    >
        <v-card-title class="">
            Campaign credentials
        </v-card-title>
        <div class="dashed_border  mr-4 ml-4 mb-4">

            <v-card-text>
                <p class="font-weight-black">Notifications</p>
                <p class="font-weight-regular">
                    Fill out an extra contact email to receive notifications when creating and running any
                    campaign.
                </p>
                <v-row>
                    <v-col cols="12" >
                        <p class="font-weight-medium d-inline-block">
                            1.
                        </p>
                        <v-text-field dense outlined class="ml-2 d-inline-block"></v-text-field>
                    </v-col>

                    <v-col cols="12" >
                        <p class="font-weight-medium d-inline-block">
                            2.
                        </p>
                        <v-text-field dense outlined class="ml-2 d-inline-block"></v-text-field>
                    </v-col>

                    <v-col cols="12">
                        <p class="font-weight-medium d-inline-block">
                            3.
                        </p>
                        <v-text-field dense outlined class="ml-2 d-inline-block"></v-text-field>
                    </v-col>
                    <!--<v-col cols="12" sm="6" md="6">


                        <p class="font-weight-medium">


                        </p>
                        <p class="font-weight-medium">
                            2.
                            <v-text-field dense outlined></v-text-field>
                        </p>
                        <p class="font-weight-medium">
                            3.
                            <v-text-field dense outlined></v-text-field>
                        </p>
                    </v-col>-->
                </v-row>
            </v-card-text>
        </div>
        <div class="dashed_border  mr-4 ml-4 mb-4">

            <v-card-text>
                <p class="font-weight-black">SMS + Εmail

                </p>
                <p class="font-weight-regular">
                    Fill in the name you want to show when sending messages or Email with the first method. The name
                    must be in Latin characters and without spaces.

                </p>
                <p class="font-weight-light">Message Sender Name</p>
                <v-text-field dense outlined></v-text-field>
                <p class="font-weight-black ">
                    1. Email (First method)

                    <v-btn
                        color="light-blue accent-1"
                        class="white--text float-right"
                    >
                        Verify email
                    </v-btn>

                </p>
                <p class="font-weight-regular">
                    Add the email you want to see as the sender of the campaign
                </p>
                <p
                    class="font-weight-thin"
                >
                    The email has not been fully verified. The first method will not be used in campaigns.
                </p>
                <v-row class="mb-6" no-gutters>
                    <v-col cols="4">
                        <p class="font-weight-thin">
                            <v-icon v-text="icons.mdiCancel" size="14"  fillColor="red"></v-icon>
                            testtest@gmail.com
                            <v-icon v-text="icons.mdiReload" size="14"></v-icon>
                        </p>
                    </v-col>
                    <v-col cols="2">
                        <p class="font-weight-thin">
                            <v-icon v-text="icons.mdiCancel" size="14"></v-icon>

                            SPF
                        </p>
                    </v-col>
                    <v-col cols="2">
                        <p class="font-weight-thin">
                            <v-icon v-text="icons.mdiCancel" size="14"></v-icon>

                            DKIM
                        </p>
                    </v-col>
                    <v-col cols="2">
                        <p class="font-weight-thin">
                            <v-icon v-text="icons.mdiCancel" size="14"></v-icon>

                            Tracking
                        </p>
                    </v-col>
                    <v-col cols="1">
                    <p class="font-weight-thin">
                        <v-icon v-text="icons.mdiCheckCircle" size="14"></v-icon>
                        MX
                    </p>
                    </v-col>
                    <v-col cols="1">
                        <p class="font-weight-thin">
                            <v-icon v-text="icons.mdiTrashCanOutline" size="14"></v-icon>
                        </p>
                    </v-col>
                </v-row>
                <p class="font-weight-black ">
                    2. Email (Second method)
                </p>
                <p
                    class="font-weight-thin"
                >
                    Not all data have been completed and the second method will not be used in campaigns.
                </p>
                <p class="font-weight-regular">
                    Enter your email credentials in
                    the table below to send email campaigns
                    through your email provider. Leave this
                    blank and RoadCube's email provider will
                    be used
                </p>
                <p class="font-weight-light">Host</p>
                <v-text-field dense outlined></v-text-field>
                <p class="font-weight-light">Name</p>
                <v-text-field dense outlined></v-text-field>
                <p class="font-weight-light">Email</p>
                <v-text-field dense outlined></v-text-field>
                <p class="font-weight-light">Password</p>
                <v-text-field dense outlined></v-text-field>
                <v-alert
                    text
                    dense
                    color="cyan"
                    border="left"
                >
                    * Sending email by priority.
                    If the first method doesnt exists then the second method will be used.
                    If the second method doesnt exists as well then RoadCube's email provider will be used.
                </v-alert>
            </v-card-text>

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
import { mdiCancel,mdiReload,mdiCheckCircle,mdiTrashCanOutline} from "@mdi/js";
export default {
    data() {
        return {
            icons: {
                mdiCancel,
                mdiReload,
                mdiCheckCircle,
                mdiTrashCanOutline
            }

        }

    },
}
</script>
<style scoped>
.dashed_border {
    border: 1px dashed grey;
    border-radius: 10px;
}
</style>