<template>
    <b-standard-card title="Change Password" submit-text="verification">
        <b-text-field
            type="password"
            label="Password"
            no-top-margin
        ></b-text-field>
        <b-text-field type="password" label="New Password"></b-text-field>
        <b-text-field type="password" label="Confirm Password"></b-text-field>
    </b-standard-card>
</template>

<script>
export default {
    name: "ChangePassword"
};
</script>
