<template>
    <v-container fluid class="b-container">
        <v-row
            no-gutters
            style="min-height: calc(100vh - 88px);"
            align="center"
        >
            <v-card flat max-width="500" class="mx-auto mb-12">
                <v-card-title class="red--text">
                    Forbidden Gateway
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text class="pt-4">
                    <div class="subtitle-1 font-weight-bold text--primary">
                        You don’t have the rights to access this resource.
                        <br />
                        Please contact a service admin.
                    </div>
                </v-card-text>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "ForbiddenGateway"
};
</script>
