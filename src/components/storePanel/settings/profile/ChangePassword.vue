<template>
    <v-card class="mt-12" outlined>
        <v-card-title class="grey lighten-3">Change Password</v-card-title>

        <v-card-text class="pb-0 pt-8">
            <v-text-field
                type="password"
                label="Password"
                color="secondary"
                outlined
                dense
                clearable
            ></v-text-field>
            <v-text-field
                type="password"
                label="New Password"
                color="secondary"
                outlined
                dense
                clearable
            ></v-text-field>
            <v-text-field
                type="password"
                label="Confirm Password"
                color="secondary"
                outlined
                dense
                clearable
            ></v-text-field>
        </v-card-text>

        <v-card-actions class="pl-4">
            <v-btn color="secondary" class="text-capitalize" depressed
                >verification</v-btn
            >
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "ChangePassword"
};
</script>
