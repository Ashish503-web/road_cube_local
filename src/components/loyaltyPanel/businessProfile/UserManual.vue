<template>
    <b-standard-card
        title="User Manual"
        title-color="white"
        cancel-text="delete"
        submit-text="save"
    >
        Upload user manual that every business will see (in .pdf format). Select
        pdf file and then click save.

        <v-row no-gutters align="center" class="mt-3">
            <v-col cols="5" class="pr-2">
                <a
                    href="https://www.roadcube.com/pdfManual/user_manual_64651.pdf"
                    >https://www.roadcube.com/pdfManual/user_manual_64651.pdf</a
                >
            </v-col>
            <v-col cols="7" class="pl-2">
                Choose pdf file:
                <v-file-input
                    color="secondary"
                    class="mt-1"
                    outlined
                    dense
                    hide-details="auto"
                ></v-file-input>
            </v-col>
        </v-row>
    </b-standard-card>
</template>

<script>
export default {
    name: "UserManual"
};
</script>
