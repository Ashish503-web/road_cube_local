<template>
    <div id="features" class="features">
        <v-container class="py-0">
            <h2 class="text-center mb-3">Core Features</h2>
            <p class="text-center mb-4 we-got">We got more than you need to make your loyalty stand out.</p>
            <v-row class="py-0 px-4 mt-12">
                <v-col cols="12" md="6" lg="4" class="py-0 px-4 text-center mx-auto">
                    <div class="feature-box">
                        <div class="feature-box-icon">
                            <v-icon color="white" v-text="icons.mdiWhiteBalanceSunny"></v-icon>
                        </div>
                        <h5 class="features-box-title mb-3 text-left">100% Customized</h5>
                        <p class="features-box-text mb-4 text-left">You dont need to pay development and wait for a long time. You set all your loyalty parameters from your platform settings and when you want to change it you do it for free.</p>
                    </div>
                </v-col>
                <v-col cols="12" md="6" lg="4" class="py-0 px-4 text-center mx-auto">
                    <div class="feature-box">
                        <div class="feature-box-icon">
                            <v-icon color="white" v-text="icons.mdiShopping"></v-icon>
                        </div>
                        <h5 class="features-box-title mb-3 text-left">We are fast</h5>
                        <p class="features-box-text mb-4 text-left">Most of the custom made loyalty schemes need 6-8 months for coding and testing. We launch in less than 2 months using our ready made modules and our already tested tools.</p>
                    </div>
                </v-col>
                <v-col cols="12" md="6" lg="4" class="py-0 px-4 text-center mx-auto">
                    <div class="feature-box">
                        <div class="feature-box-icon">
                            <v-icon color="white" v-text="icons.mdiBookmarkOutline"></v-icon>
                        </div>
                        <h5 class="features-box-title mb-3 text-left">Pay A Subscription</h5>
                        <p class="features-box-text mb-4 text-left">Forget the high costs. We make you feel safe with an affordable monthly fee that will never go up. Avoid the high costs and take advantage of our platform.</p>
                    </div>
                </v-col>
            </v-row>
            <v-row class="py-0 px-4">
                <v-col cols="12" md="6" lg="4" class="py-0 px-4 text-center mx-auto">
                    <div class="feature-box">
                        <div class="feature-box-icon">
                            <v-icon color="white" v-text="icons.mdiAccountCheck"></v-icon>
                        </div>
                        <h5 class="features-box-title mb-3 text-left">Support & Training</h5>
                        <p class="features-box-text mb-4 text-left">We deliver all your staff and all your employees trained. We also provide a landline so that they can call us when they need. You dont need to do any other task.</p>
                    </div>
                </v-col>
                <v-col cols="12" md="6" lg="4" class="py-0 px-4 text-center mx-auto">
                    <div class="feature-box">
                        <div class="feature-box-icon">
                            <v-icon color="white" v-text="icons.mdiMenu"></v-icon>
                        </div>
                        <h5 class="features-box-title mb-3 text-left">Synergies</h5>
                        <p class="features-box-text mb-4 text-left">Source new clients with the lowest customer acquisition cost via our tested synergy tool. Create synergies without writing code in 5 minutes.</p>
                    </div>
                </v-col>
                <v-col cols="12" md="6" lg="4" class="py-0 px-4 text-center mx-auto">
                    <div class="feature-box">
                        <div class="feature-box-icon">
                            <v-icon color="white" v-text="icons.mdiBriefcase"></v-icon>
                        </div>
                        <h5 class="features-box-title mb-3 text-left">Latest Tech</h5>
                        <p class="features-box-text mb-4 text-left">We use the latest IoT tech for devices next to the cashier, mobile payments and AI algorithms to create a unique experience for your cients.</p>
                    </div>
                </v-col>
            </v-row>

        </v-container>
    </div>
</template>

<script>
    import {
        mdiWhiteBalanceSunny,
        mdiShopping,
        mdiBookmarkOutline,
        mdiAccountCheck,
        mdiMenu,
        mdiBriefcase
    } from "@mdi/js"

    export default {
        name: "Features",
        data:() => ({
            icons: {
                mdiWhiteBalanceSunny,
                mdiShopping,
                mdiBookmarkOutline,
                mdiAccountCheck,
                mdiMenu,
                mdiBriefcase
            }
        })
    };
</script>

<style scoped>
    .features{
        padding: 80px 0 48px 0;
    }
    .features h2{
        color: #142752;
        font-size: 37px;
    }
    .we-got{
        font-size: 17px;
    }
    .feature-box{
        position: relative;
        border-radius: 10px;
        box-shadow: 0px 0px 20px 0px rgba(20,39,82,0.1);
        background-color: #fff;
        padding: 50px 30px 50px 80px;
        margin-bottom: 30px;
    }
    .feature-box-icon{
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
    .feature-box:hover .feature-box-icon{
        background-color: #142752;
    }
    .features-box-title{
        color: #142752;
        font-size: 21px;
    }
    .features-box-text{
        font-size: 17px;
        line-height: 1.9em;
    }
</style>