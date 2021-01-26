<template>
    <section style="padding-bottom: 100px">
        <!-- v-if="$vuetify.breakpoint.mdAndUp" -->
        <v-row no-gutters justify="center" class="b-tabs">
            <v-col cols="auto" class="b-tab-item">
                <img
                    src="@/assets/pointsPos/services/icon-heart-tab.png"
                    width="25"
                    height="auto"
                    style="vertical-align: middle"
                    class="mr-1"
                />
                All in 1 device
            </v-col>
            <v-divider vertical></v-divider>
            <v-col cols="auto" class="b-tab-item">
                <img
                    src="@/assets/pointsPos/services/icon-plane-tab.png"
                    width="51"
                    height="auto"
                    style="vertical-align: middle"
                    class="mr-1"
                />
                Easy Usage
            </v-col>
            <v-divider vertical></v-divider>
            <v-col cols="auto" class="b-tab-item">
                <img
                    src="@/assets/pointsPos/services/icon-pet-tab.png"
                    width="29"
                    height="auto"
                    style="vertical-align: middle"
                    class="mr-1"
                />
                No process for you
            </v-col>
        </v-row>

        <div style="padding-top: 100px">
            <v-container>
                <v-row
                    no-gutters
                    justify="center"
                    align="center"
                    class="px-2 px-md-4"
                >
                    <v-col
                        data-aos="fade-right"
                        cols="12"
                        md="7"
                        class="px-2 px-md-4"
                    >
                        <v-img
                            src="@/assets/pointsPos/services/machine.png"
                            width="100%"
                            max-width="550px"
                            height="auto"
                        ></v-img>
                    </v-col>
                    <v-col
                        data-aos="fade-left"
                        cols="12"
                        md="5"
                        class="px-2 px-md-4"
                    >
                        <h2 class="b-title">All in 1 device</h2>
                        <p class="b-text">
                            We put the technology and the marketing techniques
                            used by big merchants loyalty systems in 1 simple
                            IoT device that can easily be installed and used
                            into local stores.
                        </p>
                        <div class="b-price">30€</div>
                        <div class="b-text" style="line-height: 1em">
                            +Shipping cost
                        </div>
                        <v-btn
                            color="#0089f3"
                            class="text-capitalize"
                            depressed
                            dark
                            x-large
                            rounded
                            >Order RoadCube POS</v-btn
                        >
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div style="padding-top: 100px">
            <v-container>
                <v-row
                    no-gutters
                    justify="center"
                    align="center"
                    class="px-2 px-md-4"
                >
                    <v-col
                        data-aos="fade-right"
                        cols="12"
                        md="5"
                        class="px-2 px-md-4"
                    >
                        <h2 class="b-title">Easy Usage</h2>
                        <p class="b-text">
                            Consumers just type their phone number and they win
                            points When cosumer wins aa gift he gets notified by
                            the device's screen.No cards or other difficult
                            processes for consumers.
                        </p>
                        <v-btn
                            color="#0089f3"
                            class="text-capitalize"
                            depressed
                            dark
                            x-large
                            rounded
                            >Order RoadCube POS</v-btn
                        >
                    </v-col>
                    <v-col
                        data-aos="fade-left"
                        cols="12"
                        md="7"
                        class="px-2 px-md-4 text-right"
                    >
                        <img
                            src="@/assets/pointsPos/services/img-travelins.png"
                            width="100%"
                            style="max-width: 505px"
                            height="auto"
                        />
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div style="padding-top: 100px">
            <v-container>
                <v-row
                    no-gutters
                    justify="center"
                    align="center"
                    class="px-2 px-md-4"
                >
                    <v-col
                        data-aos="fade-right"
                        cols="12"
                        md="7"
                        class="px-2 px-md-4"
                    >
                        <video width="600" muted autoplay loop>
                            <source
                                src="@/assets/pointsPos/services/video.mp4"
                                autoplay="autoplay"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </v-col>
                    <v-col
                        data-aos="fade-left"
                        cols="12"
                        md="5"
                        class="px-2 px-md-4"
                    >
                        <h2 class="b-title">No process for you</h2>
                        <p class="b-text">
                            You dont need to train the cashier. The consumer can
                            use it without assistance. You just need to setup
                            the device based on the instructions in package and
                            you are ready to go.
                        </p>
                        <v-btn
                            color="#0089f3"
                            class="text-capitalize"
                            depressed
                            dark
                            x-large
                            rounded
                            >Order RoadCube POS</v-btn
                        >
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </section>
</template>

<script>
export default {
    name: "Services",

    data: () => ({})
};
</script>

<style scoped>
.b-tabs {
    border-top: 1px solid #e8eaee;
    border-bottom: 1px solid #e8eaee;
    background-color: white;
    padding: 20px 0;
    position: sticky;
    z-index: 100;
    top: 74px;
}

.b-tab-item {
    cursor: pointer;
    font-size: 17px;
    color: #142752;
    padding: 16px 36px;
    transition: all 0.3s ease-in-out;
}

.b-tab-item:hover {
    color: #007bff;
}

.b-title {
    color: #142752;
    font-size: 2.176em;
    line-height: 1.3em;
    margin-bottom: 24px;
}

.b-text {
    color: rgba(20, 39, 82, 0.8);
    font-size: 17px;
    line-height: 1.9em;
    margin-bottom: 3rem;
}

.b-price {
    color: rgba(20, 39, 82, 0.8);
    font-size: 3.2rem;
    font-weight: 700;
}
</style>
