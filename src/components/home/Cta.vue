<template>
    <section id="cta" class="b-cta mx-auto">
        <v-container class="py-0">
            <v-row data-aos="fade-up" class="py-0 px-2 px-md-4">
                <v-col cols="12" md="3" class="py-0 px-2 px-md-4">
                    <h2 class="mb-3">
                        We have got you
                        <span style="color: #0089f3">covered</span>
                    </h2>
                </v-col>
                <v-col cols="12" md="6" class="py-0 px-2 px-md-4">
                    <h4 class="mb-4">
                        Whatever you need we are here to help you. Please
                        contact us and we will be happy to assist you.
                    </h4>
                    <h3 class="mb-6">Everybody Deserves!</h3>
                </v-col>
                <v-col cols="12" md="3" class="py-0 px-2 px-md-4 text-right">
                    <b-animating-btn
                        text="Contact Us"
                        icon="mdiEmail"
                        href="mailto:info@roadcube.com"
                    ></b-animating-btn>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    name: "Cta"
};
</script>

<style scoped>
.b-cta {
    background-color: #001266;
    padding: 80px 0 48px 0;
}

.b-cta h2 {
    color: #fff;
    font-size: 37px;
    line-height: 1.3em;
}

h4 {
    color: #fff;
    font-size: 17px;
    font-weight: 400;
}

h3 {
    color: #fff;
    font-size: 28px;
    font-weight: normal;
}
</style>
