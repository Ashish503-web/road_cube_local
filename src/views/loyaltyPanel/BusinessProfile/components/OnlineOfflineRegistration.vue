<template>
    <v-card
        class="mx-auto"

        outlined
    >
        <v-card-title class="">
            Initial Online/Offline points upon registration
        </v-card-title>
        <v-card-text>
            Set the online / offline points to be given to new users when registering, as well as the limits
            of users who will receive them. If you want to be unlimited uncheck 'Unlimited users online / offline'
            respectively.
        </v-card-text>
        <v-card-text>
            Totally sent to 718 Users.
        </v-card-text>
        <v-card-text class="red--text">
            Users have exceeded the limit.
        </v-card-text>
        <v-list-item class="dashed_border mr-4 ml-4 mb-4">
            <v-container>
                <v-row>


                    <v-col cols="12" sm="12" md="12">
                        <v-checkbox
                            v-model="usersOnline1"
                        >
                            <template #label>Unlimited users online</template>
                        </v-checkbox>
                    </v-col>


                    <v-col cols="12" sm="6" md="6">
                        <v-text-field
                            label="Outlined"
                            placeholder="Placeholder"
                            outlined
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" v-if="usersOnline1">
                        <v-text-field
                            label="Outlined"
                            placeholder="Placeholder"
                            outlined
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                        <v-checkbox
                            v-model="usersOnline2"
                            @input="usersOnline2 = $event.target.value"
                        >
                            <template #label>Unlimited users online</template>
                        </v-checkbox>
                    </v-col>


                    <v-col cols="12" sm="6" md="6">
                        <v-text-field
                            label="Outlined"
                            placeholder="Placeholder"
                            outlined
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" v-if="usersOnline2">
                        <v-text-field
                            label="Outlined"
                            placeholder="Placeholder"
                            outlined
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="12" md="12">
                        <v-checkbox
                            v-model="usersOnline2"
                            @input="usersOnline2 = $event.target.value"
                        >
                            <template #label>I want to define users as a whole</template>
                        </v-checkbox>
                    </v-col>

                </v-row>
            </v-container>
        </v-list-item>
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


export default {
    data() {
        return {
            usersOnline1: true,
            usersOnline2: true
        };
    },
    methods:{

    }
};
</script>
<style scoped>
.dashed_border {
    border: 1px dashed grey;
    border-radius: 10px;
}
</style>