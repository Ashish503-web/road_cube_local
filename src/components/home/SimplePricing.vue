<template>
    <section class="text-center">
        <h1 class="b-title">Simple Pricing</h1>
        <p class="b-subtitle">
            Enjoy our pay as you grow model and get grow your business with the
            latest tech.
        </p>

        <v-row no-gutters class="mt-12">
            <v-col cols="4" style="padding-left: 85px">
                <div class="blue-line"></div>
                <v-card class="elevation-1" style="padding: 30px 30px 20px">
                    <div class="b-category">Small Business Loyalty</div>
                    <h4 class="b-price">$40 / year</h4>
                    <v-divider class="my-5"></v-divider>
                    <v-list subheader class="ml-12 pl-2">
                        <v-list-item
                            v-for="benefit in smallBusinessBenefits"
                            :key="benefit"
                            class="pa-0 text-left"
                        >
                            <v-list-item-icon class="mr-1">
                                <v-icon
                                    color="#142752"
                                    v-text="icons.mdiCheckCircleOutline"
                                ></v-icon>
                            </v-list-item-icon>
                            <v-list-item-title
                                class="b-primary"
                                v-text="benefit"
                            ></v-list-item-title>
                        </v-list-item>
                    </v-list>

                    <v-btn
                        color="#142752"
                        class="text-capitalize subtitle-1 font-weight-bold pr-1 mt-5"
                        large
                        outlined
                        rounded
                        to="/app-providers"
                    >
                        start now
                        <v-avatar color="#25ccf740" class="ml-3" size="38">
                            <v-icon
                                size="24"
                                color="#001266"
                                v-text="icons.mdiArrowRight"
                            ></v-icon>
                        </v-avatar>
                    </v-btn>

                    <v-divider class="my-7"></v-divider>

                    <v-card-actions class="b-time-info justify-center">
                        <v-icon
                            color="#142752cc"
                            class="mr-1"
                            v-text="icons.mdiClockOutline"
                        ></v-icon>
                        launch in 5 minutes
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col cols="4" style="padding: 0 42.5px">
                <div class="blue-line"></div>
                <v-card class="elevation-1" style="padding: 30px 30px 20px">
                    <div class="b-category">Big Corporate Loyalty</div>
                    <h4 class="b-price">$3600 / month</h4>

                    <v-divider class="my-5"></v-divider>
                    <v-list subheader class="ml-12 pl-2">
                        <v-list-item
                            v-for="benefit in bigCorporateBenefits"
                            :key="benefit"
                            class="pa-0 text-left"
                        >
                            <v-list-item-icon class="mr-1">
                                <v-icon
                                    color="#142752"
                                    v-text="icons.mdiCheckCircleOutline"
                                ></v-icon>
                            </v-list-item-icon>
                            <v-list-item-title
                                class="b-primary"
                                v-text="benefit"
                            ></v-list-item-title>
                        </v-list-item>
                    </v-list>

                    <v-btn
                        color="#142752"
                        class="text-capitalize subtitle-1 font-weight-bold pr-1 mt-5"
                        large
                        outlined
                        rounded
                    >
                        start now
                        <v-avatar color="#25ccf740" class="ml-3" size="38">
                            <v-icon
                                size="24"
                                color="#001266"
                                v-text="icons.mdiArrowRight"
                            ></v-icon>
                        </v-avatar>
                    </v-btn>

                    <v-divider class="my-7"></v-divider>

                    <v-card-actions class="b-time-info justify-center">
                        <v-icon
                            color="#142752cc"
                            class="mr-1"
                            v-text="icons.mdiClockOutline"
                        ></v-icon>
                        launch in 2 months
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col cols="4" style="padding-right: 85px">
                <div class="blue-line"></div>
                <v-card class="elevation-1" style="padding: 30px 30px 20px">
                    <div class="b-category">Join a Synergy</div>
                    <h4 class="b-price">from $200 / year</h4>

                    <v-divider class="my-5"></v-divider>
                    <v-list subheader class="ml-12 pl-2">
                        <v-list-item
                            v-for="benefit in synergyBenefits"
                            :key="benefit"
                            class="pa-0 text-left"
                        >
                            <v-list-item-icon class="mr-1">
                                <v-icon
                                    color="#142752"
                                    v-text="icons.mdiCheckCircleOutline"
                                ></v-icon>
                            </v-list-item-icon>
                            <v-list-item-title
                                class="b-primary"
                                v-text="benefit"
                            ></v-list-item-title>
                        </v-list-item>
                    </v-list>

                    <v-btn
                        color="#142752"
                        class="text-capitalize subtitle-1 font-weight-bold pr-1 mt-5"
                        large
                        outlined
                        rounded
                    >
                        start now
                        <v-avatar color="#25ccf740" class="ml-3" size="38">
                            <v-icon
                                size="24"
                                color="#001266"
                                v-text="icons.mdiArrowRight"
                            ></v-icon>
                        </v-avatar>
                    </v-btn>

                    <v-divider class="my-7"></v-divider>

                    <v-card-actions class="b-time-info justify-center">
                        <v-icon
                            color="#142752cc"
                            class="mr-1"
                            v-text="icons.mdiClockOutline"
                        ></v-icon>
                        launch in 5 minutes
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </section>
</template>

<script>
import { mdiCheckCircleOutline, mdiArrowRight, mdiClockOutline } from "@mdi/js";

export default {
    name: "SimplePricing",

    data: () => ({
        icons: {
            mdiCheckCircleOutline,
            mdiArrowRight,
            mdiClockOutline,
        },
        smallBusinessBenefits: [
            "Free IoT Device",
            "Central Platform",
            "Coupons Creation",
            "Contest & Survey",
            "Mobile Payments",
            "Receipt Scanning",
            "Digital & Analog Cards",
            "E-mail Support",
        ],
        bigCorporateBenefits: [
            "Branded Mobile App",
            "Branded IoT Devices",
            "Support Landline",
            "Start Synergies",
            "Central Management",
            "Mobile Payments",
            "Receipt Scanning",
            "Staff Training",
        ],
        synergyBenefits: [
            "Source New Clients",
            "Common Point System",
            "Get New Partners",
        ],
    }),
};
</script>

<style scoped>
.b-title {
    color: #142752;
    font-size: 2.176em;
    line-height: 1.3em;
    font-family: "Oxygen", sans-serif;
    margin-bottom: 0.7rem;
}

.b-subtitle {
    margin-top: 0;
    margin-bottom: 1rem;
    color: #142752cc;
    font-family: "Oxygen", sans-serif;
    font-size: 17px;
    line-height: 1.9em;
}

.blue-line {
    border: 2px solid #0089f1;
}

.b-category {
    margin-bottom: 20px;
    color: #142752cc;
    font-family: "Oxygen", sans-serif;
    font-size: 17px;
    line-height: 1.9em;
}

.b-price {
    color: #142752;
    font-size: 1.435em;
    line-height: 1.5em;
    font-family: "Oxygen", sans-serif;
    font-weight: 600;
}

.b-primary {
    color: #142752;
}

.b-time-info {
    color: #142752cc;
    font-family: "Oxygen", sans-serif;
    font-size: 17px;
}
</style>