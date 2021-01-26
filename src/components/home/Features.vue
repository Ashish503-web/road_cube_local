<template>
    <section style="padding: 80px 0 48px 0;">
        <v-container class="py-0">
            <h2 data-aos="fade-up" class="b-title">Core Features</h2>
            <p data-aos="fade-up" class="b-subtitle">
                We got more than you need to make your loyalty stand out.
            </p>

            <v-row data-aos="fade-up" class="py-0 px-4 mt-12">
                <v-col
                    v-for="feature in firstFeatures"
                    :key="feature.title"
                    cols="12"
                    md="6"
                    lg="4"
                    class="py-0 px-4 text-center mx-auto"
                >
                    <div class="b-feature-box">
                        <div class="b-feature-box-icon">
                            <v-icon
                                color="white"
                                v-text="feature.icon"
                            ></v-icon>
                        </div>
                        <h5
                            class="b-features-box-title mb-3 text-left"
                            v-text="feature.title"
                        ></h5>
                        <p
                            class="b-features-box-text mb-4 text-left"
                            v-text="feature.text"
                        ></p>
                    </div>
                </v-col>
            </v-row>

            <v-row data-aos="fade-up" class="py-0 px-4">
                <v-col
                    v-for="feature in secondFeatures"
                    :key="feature.title"
                    cols="12"
                    md="6"
                    lg="4"
                    class="py-0 px-4 text-center mx-auto"
                >
                    <div class="b-feature-box">
                        <div class="b-feature-box-icon">
                            <v-icon
                                color="white"
                                v-text="feature.icon"
                            ></v-icon>
                        </div>
                        <h5
                            class="b-features-box-title mb-3 text-left"
                            v-text="feature.title"
                        ></h5>
                        <p
                            class="b-features-box-text mb-4 text-left"
                            v-text="feature.text"
                        ></p>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
import {
    mdiWhiteBalanceSunny,
    mdiShoppingOutline,
    mdiBookmarkOutline,
    mdiAccountCheckOutline,
    mdiMenu,
    mdiBriefcaseOutline
} from "@mdi/js";

export default {
    name: "Features",
    data: () => ({
        firstFeatures: [
            {
                icon: mdiWhiteBalanceSunny,
                title: "100% Customized",
                text: `
                    You dont need to pay development and wait for a long time.
                    You set all your loyalty parameters from your platform
                    settings and when you want to change it you do it for free.
                `
            },
            {
                icon: mdiShoppingOutline,
                title: "We are fast",
                text: `
                    Most of the custom made loyalty schemes need 6-8 months or
                    more for development and testing. We launch in less than 1
                    month in most cases using our ready made modules and our
                    already tested tools.
                `
            },
            {
                icon: mdiBookmarkOutline,
                title: "Pay A Subscription",
                text: `
                    Forget the high costs. We make you feel safe with an affordable
                    monthly fee that will never go up. Avoid the high costs and take
                    advantage of our platform.
                `
            }
        ],
        secondFeatures: [
            {
                icon: mdiAccountCheckOutline,
                title: "Support & Training",
                text: `
                    We deliver all your staff and all your employees trained.
                    We also provide a landline so that they can call us when
                    they need. You dont need to do any other task.
                `
            },
            {
                icon: mdiMenu,
                title: "Synergies",
                text: `
                    Source new clients with the lowest customer acquisition
                    cost via our tested synergy tool. Connect you customer
                    base with your partner and source new clients in less than 5 minutes.
                `
            },
            {
                icon: mdiBriefcaseOutline,
                title: "Latest Tech",
                text: `
                    We use the latest IoT tech for devices next to the cashier, mobile 
                    payments and AI algorithms to create a unique experience for your cients.
                `
            }
        ]
    })
};
</script>

<style scoped>
.b-title {
    color: #142752;
    font-size: 37px;
    text-align: center;
    margin-bottom: 12px;
}

.b-subtitle {
    color: rgba(20, 39, 82, 0.8);
    font-size: 17px;
    text-align: center;
}

.b-feature-box {
    position: relative;
    border-radius: 10px;
    box-shadow: 0px 0px 20px 0px rgba(20, 39, 82, 0.1);
    background-color: #fff;
    padding: 50px 30px 50px 80px;
    margin-bottom: 30px;
}
.b-feature-box-icon {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
    position: absolute;
    top: 50px;
    left: 0;
    border-radius: 0 10px 10px 0;
    font-size: 24px;
    line-height: 50px;
    text-align: center;
    background-color: #0089f3;
    color: #fff;
    transition: all 200ms ease;
}
.b-feature-box:hover .b-feature-box-icon {
    background-color: #142752;
}
.b-features-box-title {
    color: #142752;
    font-size: 21px;
}
.b-features-box-text {
    font-size: 17px;
    line-height: 1.9em;
}
</style>
