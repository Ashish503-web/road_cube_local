<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="4">
                <v-img src="../assets/logo.png"></v-img>
                <v-btn color="primary" outlined block to="/loyaltypanel">go to loyalty panel</v-btn>
                <v-btn
                    color="primary"
                    class="mt-3"
                    outlined
                    block
                    to="/storepanel"
                >go to store panel</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "Home",
};
</script>
