<template>
    <v-sheet height="100%">
        <v-row no-gutters align="center" class="fill-height">
            <v-col class="text-center mb-12">
                <h1 class="blue--text text-h3 font-weight-medium">
                    Whoops, 404
                </h1>
                <div class="mt-3">
                    The page you were looking for does not exist
                </div>
                <v-btn color="secondary" outlined class="mt-5" large :to="lang"
                    >get me out of here !</v-btn
                >
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script>
export default {
    name: "NotFound",

    computed: {
        lang() {
            return this.$route.path.slice(0, 4);
        }
    },

    beforeCreate() {
        const lang = this.$route.path.slice(0, 4);

        if (lang !== "/el/" && lang !== "/en/" && lang !== "/it/") {
            this.$router.push("/en" + this.$route.fullPath);
        }
    }
};
</script>
