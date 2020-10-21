<template>
    <div class="quick-features">
        <v-container class="py-0">
            <v-row class="align-center justify-center d-flex mx-auto text-center">
                <v-col cols="12" md="4" class="text-center mx-auto py-0 px-2 px-md-4">
                    <v-img
                            src="../../assets/home/icon-multicolor-1.png"
                            alt="icon"
                            class="mb-6 mx-auto"
                            max-width="100%"
                            width="70px">
                    </v-img>
                    <h5 class="mb-4"> Loyalty As A Service </h5>
                    <p>Forget the high costs.You only have to pay a simple monthly subscription</p>
                </v-col>
                <v-col cols="12" md="4" class="text-center mx-auto py-0 px-2 px-md-4">
                    <v-img
                            src="../../assets/home/icon-multicolor-2.png"
                            alt="icon"
                            class="mb-6 mx-auto"
                            max-width="100%"
                            width="70px">
                    </v-img>
                    <h5 class="mb-4">Launch First</h5>
                    <p>Crash your competitors and launch your scheme in less than 2 months</p>
                </v-col>
                <v-col cols="12" md="4" class="text-center mx-auto py-0 px-2 px-md-4">
                    <v-img
                            src="../../assets/home/icon-multicolor-3.png"
                            alt="icon"
                            class="mb-6 mx-auto"
                            max-width="100%"
                            width="70px">
                    </v-img>
                    <h5 class="mb-4">Latest Tech </h5>
                    <p>Our proprietory IoT devices make the difference for your business</p>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "Quickfeatures"
    };
</script>

<style scoped>
    h5 {
        font-size: 1.235em;
        line-height: 1.5em;
        color: #142752;
    }

    p {
        line-height: 1.9;
    }

    .quick-features {
        background-color: white;
        margin-top: -1px;
        padding: 64px 0;
    }
</style>