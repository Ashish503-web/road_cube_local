<template>
    <b-standard-card
        title="Initial Online/Offline points upon registration"
        title-color="white"
        submit-text="save"
    >
        Set the online / offline points to be given to new users when
        registering, as well as the limits of users who will receive them. If
        you want to be unlimited uncheck 'Unlimited users online / offline'
        respectively.
        <br />
        <div class="mt-3">
            Totally sent to
            <span class="font-weight-bold secondary--text">718</span>
            Users.
        </div>

        <div class="mt-3 red--text">
            Users have exceeded the limit.
        </div>

        <v-row no-gutters>
            <v-col cols="12">
                <v-checkbox
                    v-model="unlimitedOnline"
                    :disabled="wholeUsers"
                    color="secondary"
                    class="mt-3 pt-0"
                    hide-details
                >
                    <template v-slot:label>
                        <h4 class="subtitle-2 secondary--text">
                            Unlimited users online
                        </h4>
                    </template>
                </v-checkbox>
            </v-col>

            <v-col cols="6" class="pr-2">
                <b-text-field
                    :disabled="wholeUsers"
                    type="number"
                    label="Online Points"
                ></b-text-field>
            </v-col>
            <v-col cols="6" class="pl-2">
                <b-text-field
                    v-if="!unlimitedOnline"
                    :disabled="wholeUsers"
                    type="number"
                    label="Online How many users in total"
                ></b-text-field>
            </v-col>

            <v-col cols="12">
                <v-checkbox
                    v-model="unlimitedOffline"
                    :disabled="wholeUsers"
                    color="secondary"
                    class="mt-3 pt-0"
                    hide-details
                >
                    <template v-slot:label>
                        <h4 class="subtitle-2 secondary--text">
                            Unlimited users offline
                        </h4>
                    </template>
                </v-checkbox>
            </v-col>

            <v-col cols="6" class="pr-2">
                <b-text-field
                    :disabled="wholeUsers"
                    type="number"
                    label="Offline Points"
                ></b-text-field>
            </v-col>
            <v-col cols="6" class="pl-2">
                <b-text-field
                    v-if="!unlimitedOffline"
                    :disabled="wholeUsers"
                    type="number"
                    label="Offline How many users in total"
                ></b-text-field>
            </v-col>

            <v-col cols="12">
                <v-checkbox
                    v-model="wholeUsers"
                    color="secondary"
                    class="mt-3 pt-0"
                    hide-details
                >
                    <template v-slot:label>
                        <h4 class="subtitle-2 secondary--text">
                            I want to define users as a whole
                        </h4>
                    </template>
                </v-checkbox>
            </v-col>

            <v-col cols="8" class="pr-2">
                <b-text-field
                    type="number"
                    label="How many users in total"
                ></b-text-field>
            </v-col>
        </v-row>
    </b-standard-card>
</template>

<script>
export default {
    name: "InitialPoints",

    data: () => ({
        unlimitedOnline: false,
        unlimitedOffline: false,
        wholeUsers: false
    })
};
</script>
