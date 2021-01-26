<template>
    <section id="simplePricing" class="text-center b-simplePricing">
        <v-container class="py-0">
            <h1 class="b-title">Simple Pricing</h1>
            <p class="b-subtitle">
                Enjoy our pay as you grow model and get grow your business with
                the latest tech.
            </p>

            <v-carousel
                light
                class="theme--light mt-12"
                height="auto"
                show-arrows-on-hover
                hide-delimiters
                :touchless="true"
                :touch="{
                    left: () => model--,
                    right: () => model++
                }"
                v-model="model"
            >
                <v-carousel-item>
                    <v-row no-gutters>
                        <v-col cols="12" md="4" class="pr-0 pr-md-5 pl-1 pb-1">
                            <div class="blue-line"></div>
                            <v-card
                                light
                                class="elevation-1 theme--light"
                                style="padding: 30px 30px 20px"
                            >
                                <div class="b-category">
                                    Small Business Loyalty
                                </div>
                                <h4 class="b-price">$40 / year</h4>
                                <v-divider class="my-5"></v-divider>
                                <v-list subheader light class="ml-12 pl-2">
                                    <v-list-item
                                        v-for="benefit in smallBusinessBenefits"
                                        :key="benefit"
                                        class="pa-0 text-left"
                                    >
                                        <v-list-item-icon class="mr-1">
                                            <v-icon
                                                color="#142752"
                                                v-text="
                                                    icons.mdiCheckCircleOutline
                                                "
                                            ></v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-title
                                            class="b-primary"
                                            v-text="benefit"
                                        ></v-list-item-title>
                                    </v-list-item>
                                </v-list>

                                <v-btn
                                    class="text-capitalize pr-1 pl-0 b-btn-hover"
                                    height="auto"
                                    rounded
                                    :to="`/${lang}/app-providers`"
                                >
                                    <p
                                        class="ma-0"
                                        style="padding: 15px 70px 15px 20px; font-size: 17px; line-height: normal; text-transform: none"
                                    >
                                        Start Now
                                    </p>
                                    <v-avatar size="38" class="b-icon-hover">
                                        <v-icon
                                            size="24"
                                            color="#fff"
                                            v-text="icons.mdiArrowRight"
                                            class="b-right-icon"
                                        ></v-icon>
                                        <v-icon
                                            size="24"
                                            color="#001266"
                                            v-text="icons.mdiArrowRight"
                                            class="b-right-icon"
                                        ></v-icon>
                                    </v-avatar>
                                </v-btn>

                                <v-divider class="my-7"></v-divider>

                                <v-card-actions
                                    class="b-time-info justify-center"
                                >
                                    <v-icon
                                        color="#142752cc"
                                        class="mr-1"
                                        v-text="icons.mdiClockOutline"
                                    ></v-icon>
                                    launch in 5 minutes
                                </v-card-actions>
                            </v-card>
                        </v-col>

                        <v-col cols="12" md="4" class="pb-1 px-0 px-md-3">
                            <div class="blue-line"></div>
                            <v-card
                                light
                                class="elevation-1"
                                style="padding: 30px 30px 20px"
                            >
                                <div class="b-category">
                                    Big Corporate Loyalty
                                </div>
                                <h4 class="b-price">$3600 / month</h4>

                                <v-divider class="my-5"></v-divider>
                                <v-list light subheader class="ml-12 pl-2">
                                    <v-list-item
                                        v-for="benefit in bigCorporateBenefits"
                                        :key="benefit"
                                        class="pa-0 text-left"
                                    >
                                        <v-list-item-icon class="mr-1">
                                            <v-icon
                                                color="#142752"
                                                v-text="
                                                    icons.mdiCheckCircleOutline
                                                "
                                            ></v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-title
                                            class="b-primary"
                                            v-text="benefit"
                                        ></v-list-item-title>
                                    </v-list-item>
                                </v-list>

                                <v-btn
                                    class="text-capitalize pr-1 pl-0 b-btn-hover"
                                    height="auto"
                                    rounded
                                >
                                    <p
                                        class="ma-0"
                                        style="padding: 15px 70px 15px 20px; font-size: 17px; line-height: normal; text-transform: none"
                                    >
                                        Start Now
                                    </p>
                                    <v-avatar size="38" class="b-icon-hover">
                                        <v-icon
                                            size="24"
                                            color="#fff"
                                            v-text="icons.mdiArrowRight"
                                            class="b-right-icon"
                                        ></v-icon>
                                        <v-icon
                                            size="24"
                                            color="#001266"
                                            v-text="icons.mdiArrowRight"
                                            class="b-right-icon"
                                        ></v-icon>
                                    </v-avatar>
                                </v-btn>

                                <v-divider class="my-7"></v-divider>

                                <v-card-actions
                                    class="b-time-info justify-center"
                                >
                                    <v-icon
                                        color="#142752cc"
                                        class="mr-1"
                                        v-text="icons.mdiClockOutline"
                                    ></v-icon>
                                    launch in 2 months
                                </v-card-actions>
                            </v-card>
                        </v-col>

                        <v-col cols="12" md="4" class="pl-0 pl-md-5 pr-1 pb-1">
                            <div class="blue-line"></div>
                            <v-card
                                light
                                class="elevation-1"
                                style="padding: 30px 30px 20px"
                            >
                                <div class="b-category">Join a Synergy</div>
                                <h4 class="b-price">from $200 / year</h4>

                                <v-divider class="my-5"></v-divider>
                                <v-list light subheader class="ml-12 pl-2">
                                    <v-list-item
                                        v-for="benefit in synergyBenefits"
                                        :key="benefit"
                                        class="pa-0 text-left"
                                    >
                                        <v-list-item-icon class="mr-1">
                                            <v-icon
                                                color="#142752"
                                                v-text="
                                                    icons.mdiCheckCircleOutline
                                                "
                                            ></v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-title
                                            class="b-primary"
                                            v-text="benefit"
                                        ></v-list-item-title>
                                    </v-list-item>
                                </v-list>

                                <v-btn
                                    class="text-capitalize pr-1 pl-0 b-btn-hover"
                                    height="auto"
                                    rounded
                                >
                                    <p
                                        class="ma-0"
                                        style="padding: 15px 70px 15px 20px; font-size: 17px; line-height: normal; text-transform: none"
                                    >
                                        Start Now
                                    </p>
                                    <v-avatar size="38" class="b-icon-hover">
                                        <v-icon
                                            size="24"
                                            color="#fff"
                                            v-text="icons.mdiArrowRight"
                                            class="b-right-icon"
                                        ></v-icon>
                                        <v-icon
                                            size="24"
                                            color="#001266"
                                            v-text="icons.mdiArrowRight"
                                            class="b-right-icon"
                                        ></v-icon>
                                    </v-avatar>
                                </v-btn>

                                <v-divider class="my-7"></v-divider>

                                <v-card-actions
                                    class="b-time-info justify-center"
                                >
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
                </v-carousel-item>
                <v-carousel-item>
                    <v-row no-gutters>
                        <v-col cols="12" md="4" class="pr-0 pr-md-5 pl-1 pb-1">
                            <div class="blue-line"></div>
                            <v-card
                                light
                                class="elevation-1 theme--light"
                                style="padding: 30px 30px 20px"
                            >
                                <div class="b-category">
                                    Small Business Loyalty
                                </div>
                                <h4 class="b-price">$40 / year</h4>
                                <v-divider class="my-5"></v-divider>
                                <v-list subheader light class="ml-12 pl-2">
                                    <v-list-item
                                        v-for="benefit in smallBusinessBenefits"
                                        :key="benefit"
                                        class="pa-0 text-left"
                                    >
                                        <v-list-item-icon class="mr-1">
                                            <v-icon
                                                color="#142752"
                                                v-text="
                                                    icons.mdiCheckCircleOutline
                                                "
                                            ></v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-title
                                            class="b-primary"
                                            v-text="benefit"
                                        ></v-list-item-title>
                                    </v-list-item>
                                </v-list>

                                <v-btn
                                    class="text-capitalize pr-1 pl-0 b-btn-hover"
                                    height="auto"
                                    rounded
                                    :to="`/${lang}/app-providers`"
                                >
                                    <p
                                        class="ma-0"
                                        style="padding: 15px 70px 15px 20px; font-size: 17px; line-height: normal; text-transform: none"
                                    >
                                        Start Now
                                    </p>
                                    <v-avatar size="38" class="b-icon-hover">
                                        <v-icon
                                            size="24"
                                            color="#fff"
                                            v-text="icons.mdiArrowRight"
                                            class="b-right-icon"
                                        ></v-icon>
                                        <v-icon
                                            size="24"
                                            color="#001266"
                                            v-text="icons.mdiArrowRight"
                                            class="b-right-icon"
                                        ></v-icon>
                                    </v-avatar>
                                </v-btn>

                                <v-divider class="my-7"></v-divider>

                                <v-card-actions
                                    class="b-time-info justify-center"
                                >
                                    <v-icon
                                        color="#142752cc"
                                        class="mr-1"
                                        v-text="icons.mdiClockOutline"
                                    ></v-icon>
                                    launch in 5 minutes
                                </v-card-actions>
                            </v-card>
                        </v-col>

                        <v-col cols="12" md="4" class="pb-1 px-0 px-md-3">
                            <div class="blue-line"></div>
                            <v-card
                                light
                                class="elevation-1"
                                style="padding: 30px 30px 20px"
                            >
                                <div class="b-category">
                                    Big Corporate Loyalty
                                </div>
                                <h4 class="b-price">$3600 / month</h4>

                                <v-divider class="my-5"></v-divider>
                                <v-list light subheader class="ml-12 pl-2">
                                    <v-list-item
                                        v-for="benefit in bigCorporateBenefits"
                                        :key="benefit"
                                        class="pa-0 text-left"
                                    >
                                        <v-list-item-icon class="mr-1">
                                            <v-icon
                                                color="#142752"
                                                v-text="
                                                    icons.mdiCheckCircleOutline
                                                "
                                            ></v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-title
                                            class="b-primary"
                                            v-text="benefit"
                                        ></v-list-item-title>
                                    </v-list-item>
                                </v-list>

                                <v-btn
                                    class="text-capitalize pr-1 pl-0 b-btn-hover"
                                    height="auto"
                                    rounded
                                >
                                    <p
                                        class="ma-0"
                                        style="padding: 15px 70px 15px 20px; font-size: 17px; line-height: normal; text-transform: none"
                                    >
                                        Start Now
                                    </p>
                                    <v-avatar size="38" class="b-icon-hover">
                                        <v-icon
                                            size="24"
                                            color="#fff"
                                            v-text="icons.mdiArrowRight"
                                            class="b-right-icon"
                                        ></v-icon>
                                        <v-icon
                                            size="24"
                                            color="#001266"
                                            v-text="icons.mdiArrowRight"
                                            class="b-right-icon"
                                        ></v-icon>
                                    </v-avatar>
                                </v-btn>

                                <v-divider class="my-7"></v-divider>

                                <v-card-actions
                                    class="b-time-info justify-center"
                                >
                                    <v-icon
                                        color="#142752cc"
                                        class="mr-1"
                                        v-text="icons.mdiClockOutline"
                                    ></v-icon>
                                    launch in 2 months
                                </v-card-actions>
                            </v-card>
                        </v-col>

                        <v-col cols="12" md="4" class="pl-0 pl-md-5 pr-1 pb-1">
                            <div class="blue-line"></div>
                            <v-card
                                light
                                class="elevation-1"
                                style="padding: 30px 30px 20px"
                            >
                                <div class="b-category">Join a Synergy</div>
                                <h4 class="b-price">from $200 / year</h4>

                                <v-divider class="my-5"></v-divider>
                                <v-list light subheader class="ml-12 pl-2">
                                    <v-list-item
                                        v-for="benefit in synergyBenefits"
                                        :key="benefit"
                                        class="pa-0 text-left"
                                    >
                                        <v-list-item-icon class="mr-1">
                                            <v-icon
                                                color="#142752"
                                                v-text="
                                                    icons.mdiCheckCircleOutline
                                                "
                                            ></v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-title
                                            class="b-primary"
                                            v-text="benefit"
                                        ></v-list-item-title>
                                    </v-list-item>
                                </v-list>

                                <v-btn
                                    class="text-capitalize pr-1 pl-0 b-btn-hover"
                                    height="auto"
                                    rounded
                                >
                                    <p
                                        class="ma-0"
                                        style="padding: 15px 70px 15px 20px; font-size: 17px; line-height: normal; text-transform: none"
                                    >
                                        Start Now
                                    </p>
                                    <v-avatar size="38" class="b-icon-hover">
                                        <v-icon
                                            size="24"
                                            color="#fff"
                                            v-text="icons.mdiArrowRight"
                                            class="b-right-icon"
                                        ></v-icon>
                                        <v-icon
                                            size="24"
                                            color="#001266"
                                            v-text="icons.mdiArrowRight"
                                            class="b-right-icon"
                                        ></v-icon>
                                    </v-avatar>
                                </v-btn>

                                <v-divider class="my-7"></v-divider>

                                <v-card-actions
                                    class="b-time-info justify-center"
                                >
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
                </v-carousel-item>
                <v-carousel-item>
                    <v-row no-gutters>
                        <v-col cols="12" md="4" class="pr-0 pr-md-5 pl-1 pb-1">
                            <div class="blue-line"></div>
                            <v-card
                                light
                                class="elevation-1 theme--light"
                                style="padding: 30px 30px 20px"
                            >
                                <div class="b-category">
                                    Small Business Loyalty
                                </div>
                                <h4 class="b-price">$40 / year</h4>
                                <v-divider class="my-5"></v-divider>
                                <v-list subheader light class="ml-12 pl-2">
                                    <v-list-item
                                        v-for="benefit in smallBusinessBenefits"
                                        :key="benefit"
                                        class="pa-0 text-left"
                                    >
                                        <v-list-item-icon class="mr-1">
                                            <v-icon
                                                color="#142752"
                                                v-text="
                                                    icons.mdiCheckCircleOutline
                                                "
                                            ></v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-title
                                            class="b-primary"
                                            v-text="benefit"
                                        ></v-list-item-title>
                                    </v-list-item>
                                </v-list>

                                <v-btn
                                    class="text-capitalize pr-1 pl-0 b-btn-hover"
                                    height="auto"
                                    rounded
                                    :to="`/${lang}/app-providers`"
                                >
                                    <p
                                        class="ma-0"
                                        style="padding: 15px 70px 15px 20px; font-size: 17px; line-height: normal; text-transform: none"
                                    >
                                        Start Now
                                    </p>
                                    <v-avatar size="38" class="b-icon-hover">
                                        <v-icon
                                            size="24"
                                            color="#fff"
                                            v-text="icons.mdiArrowRight"
                                            class="b-right-icon"
                                        ></v-icon>
                                        <v-icon
                                            size="24"
                                            color="#001266"
                                            v-text="icons.mdiArrowRight"
                                            class="b-right-icon"
                                        ></v-icon>
                                    </v-avatar>
                                </v-btn>

                                <v-divider class="my-7"></v-divider>

                                <v-card-actions
                                    class="b-time-info justify-center"
                                >
                                    <v-icon
                                        color="#142752cc"
                                        class="mr-1"
                                        v-text="icons.mdiClockOutline"
                                    ></v-icon>
                                    launch in 5 minutes
                                </v-card-actions>
                            </v-card>
                        </v-col>

                        <v-col cols="12" md="4" class="pb-1 px-0 px-md-3">
                            <div class="blue-line"></div>
                            <v-card
                                light
                                class="elevation-1"
                                style="padding: 30px 30px 20px"
                            >
                                <div class="b-category">
                                    Big Corporate Loyalty
                                </div>
                                <h4 class="b-price">$3600 / month</h4>

                                <v-divider class="my-5"></v-divider>
                                <v-list light subheader class="ml-12 pl-2">
                                    <v-list-item
                                        v-for="benefit in bigCorporateBenefits"
                                        :key="benefit"
                                        class="pa-0 text-left"
                                    >
                                        <v-list-item-icon class="mr-1">
                                            <v-icon
                                                color="#142752"
                                                v-text="
                                                    icons.mdiCheckCircleOutline
                                                "
                                            ></v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-title
                                            class="b-primary"
                                            v-text="benefit"
                                        ></v-list-item-title>
                                    </v-list-item>
                                </v-list>

                                <v-btn
                                    class="text-capitalize pr-1 pl-0 b-btn-hover"
                                    height="auto"
                                    rounded
                                >
                                    <p
                                        class="ma-0"
                                        style="padding: 15px 70px 15px 20px; font-size: 17px; line-height: normal; text-transform: none"
                                    >
                                        Start Now
                                    </p>
                                    <v-avatar size="38" class="b-icon-hover">
                                        <v-icon
                                            size="24"
                                            color="#fff"
                                            v-text="icons.mdiArrowRight"
                                            class="b-right-icon"
                                        ></v-icon>
                                        <v-icon
                                            size="24"
                                            color="#001266"
                                            v-text="icons.mdiArrowRight"
                                            class="b-right-icon"
                                        ></v-icon>
                                    </v-avatar>
                                </v-btn>

                                <v-divider class="my-7"></v-divider>

                                <v-card-actions
                                    class="b-time-info justify-center"
                                >
                                    <v-icon
                                        color="#142752cc"
                                        class="mr-1"
                                        v-text="icons.mdiClockOutline"
                                    ></v-icon>
                                    launch in 2 months
                                </v-card-actions>
                            </v-card>
                        </v-col>

                        <v-col cols="12" md="4" class="pl-0 pl-md-5 pr-1 pb-1">
                            <div class="blue-line"></div>
                            <v-card
                                light
                                class="elevation-1"
                                style="padding: 30px 30px 20px"
                            >
                                <div class="b-category">Join a Synergy</div>
                                <h4 class="b-price">from $200 / year</h4>

                                <v-divider class="my-5"></v-divider>
                                <v-list light subheader class="ml-12 pl-2">
                                    <v-list-item
                                        v-for="benefit in synergyBenefits"
                                        :key="benefit"
                                        class="pa-0 text-left"
                                    >
                                        <v-list-item-icon class="mr-1">
                                            <v-icon
                                                color="#142752"
                                                v-text="
                                                    icons.mdiCheckCircleOutline
                                                "
                                            ></v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-title
                                            class="b-primary"
                                            v-text="benefit"
                                        ></v-list-item-title>
                                    </v-list-item>
                                </v-list>

                                <v-btn
                                    class="text-capitalize pr-1 pl-0 b-btn-hover"
                                    height="auto"
                                    rounded
                                >
                                    <p
                                        class="ma-0"
                                        style="padding: 15px 70px 15px 20px; font-size: 17px; line-height: normal; text-transform: none"
                                    >
                                        Start Now
                                    </p>
                                    <v-avatar size="38" class="b-icon-hover">
                                        <v-icon
                                            size="24"
                                            color="#fff"
                                            v-text="icons.mdiArrowRight"
                                            class="b-right-icon"
                                        ></v-icon>
                                        <v-icon
                                            size="24"
                                            color="#001266"
                                            v-text="icons.mdiArrowRight"
                                            class="b-right-icon"
                                        ></v-icon>
                                    </v-avatar>
                                </v-btn>

                                <v-divider class="my-7"></v-divider>

                                <v-card-actions
                                    class="b-time-info justify-center"
                                >
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
                </v-carousel-item>
            </v-carousel>
        </v-container>
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
            mdiClockOutline
        },
        model: 0,

        smallBusinessBenefits: [
            "Free IoT Device",
            "Central Platform",
            "Coupons Creation",
            "Contest & Survey",
            "Mobile Payments",
            "Receipt Scanning",
            "Digital & Analog Cards",
            "E-mail Support"
        ],
        bigCorporateBenefits: [
            "Branded Mobile App",
            "Branded IoT Devices",
            "Support Landline",
            "Start Synergies",
            "Central Management",
            "Mobile Payments",
            "Receipt Scanning",
            "Staff Training"
        ],
        synergyBenefits: [
            "Source New Clients",
            "Common Point System",
            "Get New Partners"
        ]
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        }
    }
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

.b-simplePricing {
    padding: 80px 0;
}

/*Hovered btn*/
.b-btn-hover {
    font-size: 1em;
    background-color: white !important;
    border-radius: 150px;
    transition: all 0.3s ease;
    overflow: hidden;
    box-shadow: none;
    border: 1px solid #e8eaee;
}

.b-btn-hover:hover {
    border: 1px solid #142752;
    background-color: #142752 !important;
}

.b-icon-hover {
    position: absolute;
    right: 0;
    display: flex;
    width: 40px !important;
    height: 40px !important;
    background-color: #c8f2fd !important;
    transition: all 0.3s ease;
    justify-items: center;
    justify-content: flex-end;
}

.b-icon-hover .b-right-icon {
    width: 40px !important;
}

.b-btn-hover:hover .b-icon-hover .b-right-icon {
    transform: translateX(100%);
}

.b-btn-hover:hover .b-icon-hover {
    background-color: #0089f3 !important;
}

.b-btn-hover:hover p {
    color: white;
}

/*Hovered btn*/
</style>
