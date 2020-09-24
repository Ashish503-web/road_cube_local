<template>
    <v-card class="rounded-lg" outlined>
        <v-card-title class="grey lighten-3">Logo</v-card-title>

        <v-card-text class="pt-5">
            You can upload here the logo of your business which will appear in
            the app and will be on the physical cards. If we think that it can
            be improved we will contact you before publishment.
            <v-row class="dashed mt-8 mb-3" no-gutters align="center">
                <v-col cols="6">
                    <v-img :src="logo.image" width="64" class="mx-auto"></v-img>
                </v-col>
                <v-col cols="6">
                    Press the following button to choose image:
                    <v-file-input
                        color="secondary"
                        class="mt-1"
                        outlined
                        dense
                        hide-details
                        @change="onFileSelected(logo, $event)"
                    ></v-file-input>
                </v-col>
            </v-row>
        </v-card-text>

        <v-card-actions class="pl-4">
            <v-btn color="secondary" class="text-capitalize" depressed
                >update logo</v-btn
            >
        </v-card-actions>
    </v-card>
</template>

<script>
import storeLogo from "@/assets/store-logo.png";

export default {
    name: "Logo",

    data: () => ({
        logo: {
            image: storeLogo,
            imageFile: ""
        }
    }),

    methods: {
        onFileSelected(item, event) {
            item.imageFile = event;
            const reader = new FileReader();
            reader.readAsDataURL(item.imageFile);
            reader.onload = e => (item.image = e.target.result);
        }
    }
};
</script>
