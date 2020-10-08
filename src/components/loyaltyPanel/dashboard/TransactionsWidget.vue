<template>
    <v-col cols="12" md="6">
        <v-card tile outlined class="pa-5">
            <v-row no-gutters justify="space-between" align="center">
                <v-col cols="auto">
                    <v-avatar color="accent" size="60">
                        <v-icon dark large v-text="widget.icon"></v-icon>
                    </v-avatar>
                </v-col>
                <v-col cols="auto">
                    <v-card-title
                        class="subtitle-1 font-weight-bold pa-0 justify-end"
                        v-text="widget.title"
                    >
                    </v-card-title>
                    <h4
                        class="subtitle-2 font-weight-regular text--secondary"
                        align="end"
                        v-text="widget.label"
                    ></h4>
                </v-col>
            </v-row>
        </v-card>
    </v-col>
</template>

<script>
export default {
    props: ["widget"],
    name: "TransactionsWidget",
    components: {}
};
</script>
