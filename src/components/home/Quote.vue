<template>
    <section id="quote" class="b-quote">
        <v-container class="py-0">
            <v-row class="pa-0">
                <v-col cols="12" md="6" class="b-column b-left-column">
                    <p class="b-quote-title mb-6">Tell us about you</p>
                    <p class="b-quote-text mb-12"> Tell us what you want to build and our experts will instantly give you what you need with certain timeframes and costs. </p>
                    <p class="b-quote-title mb-6">What will be the next step?</p>
                    <v-list class="pa-0 mb-12" dense style="background-color: transparent">
                        <v-list-item-group>
                            <v-list-item class="pa-0 mb-3">
                                <v-list-item-icon class="mr-4">
                                    <v-icon v-text="icons.mdiCheckboxMarkedCircleOutline" color="white"></v-icon>
                                </v-list-item-icon>
                                <v-list-item-content class="pa-0">
                                    <v-list-item-title>
                                        <h6>We'll prepare a proposal</h6>
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item class="pa-0 mb-3">
                                <v-list-item-icon class="mr-4">
                                    <v-icon v-text="icons.mdiCheckboxMarkedCircleOutline" color="white"></v-icon>
                                </v-list-item-icon>
                                <v-list-item-content class="pa-0">
                                    <v-list-item-title>
                                        <h6>Together we discuss it</h6>
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item class="pa-0 mb-3">
                                <v-list-item-icon class="mr-4">
                                    <v-icon v-text="icons.mdiCheckboxMarkedCircleOutline" color="white"></v-icon>
                                </v-list-item-icon>
                                <v-list-item-content class="pa-0">
                                    <v-list-item-title>
                                        <h6>We launch fast</h6>
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                    <p class="b-quote-title mb-6">Talk to an expert:</p>
                    <v-row class="pa-0">
                        <v-col cols="auto" class="py-1">
                            <v-icon v-text="icons.mdiPhoneInTalk" color="white"></v-icon>
                        </v-col>
                        <v-col cols="auto" class="pa-1">
                            <p class="ma-0" style="color: #0089f3; font-size: 19px">210 300 66 33</p>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="6" class="b-column b-right-column">
                    <v-row class="d-flex justify-space-between pa-0 mb-6">
                        <v-col cols="auto" class="py-0">
                            <h2 class="mb-3">Get a free quote</h2>
                            <p class="mb-4" style="font-size: 17px">Upgrade your business today</p>
                        </v-col>
                        <v-col cols="auto" class="py-0">
                            <div class="b-envelope-wrapper">
                                <img src="../../assets/home/open-mail.svg" class="b-envelope-icon" alt="envelope">
                            </div>
                        </v-col>
                    </v-row>
                    <v-form>
                        <v-row class="pa-0">
                            <v-col cols="12" sm="6" class="py-0">
                                <input type="text" class="b-form-input" placeholder="Name">
                            </v-col>
                            <v-col cols="12" sm="6" class="py-0">
                                <input type="text" class="b-form-input" placeholder="Phone">
                            </v-col>
                        </v-row>
                        <input type="email" class="b-form-input" placeholder="Email">
                        <textarea rows="6" class="b-form-input" placeholder="Message"></textarea>
                        <button type="submit" class="b-form-btn">Get a quote</button>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
    import {mdiPhoneInTalk, mdiCheckboxMarkedCircleOutline} from "@mdi/js"
    export default {
        name: "Quote",
        data: () => ({
            icons: {mdiPhoneInTalk, mdiCheckboxMarkedCircleOutline},

        })
    };
</script>

<style scoped>
    .b-quote{
        background-image: url("../../assets/home/section-bg.jpg");
        background-repeat: no-repeat;
        background-position: center bottom;
        background-size: cover;
        padding: 80px 0;
    }
    .b-column{
        padding: 80px 48px;
    }
    .b-left-column{
        background-color: #051665;
        border-radius: 10px 0 0 10px;
        color: #fff;
    }
    .b-right-column{
        background-color: #fff;
        border-radius: 0 10px 10px 0;
        color: #142752;
    }
    .b-quote-title{
        font-size: 32px;
    }
    .b-quote-text{
        font-size: 19px;
    }
    h6{
        color: #fff;
        font-size: 19px;
        font-weight: 700;
        line-height: 22px;
    }
    h2{
        font-size: 37px;
        font-weight: 700;
    }
    .b-form-input{
        width: 100%;
        padding: 10px 20px;
        margin: 0;
        border-width: 1px;
        border-style: solid;
        border-radius: 10px;
        border-color: #e8eaee;
        font-size: 15px;
        font-weight: normal;
        line-height: 25px !important;
        vertical-align: top;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-box-shadow: 0px 0px 20px 0px rgba(20,39,82,0.1);
        box-shadow: 0px 0px 20px 0px rgba(20,39,82,0.1);
        margin-bottom: 20px;
    }
    .b-form-btn{
        width: 100%;
        border-radius: 150px;
        font-size: 17px;
        cursor: pointer;
        text-align: center;
        background-color: #0089f3;
        color: #fff;
        transition: all .3s ease;
        padding: 15px 30px 13px 30px;
        height: auto;
        line-height: 25px;
        box-shadow: 0px 0px 20px 0px rgba(20,39,82,0.1);
    }
    .b-envelope-wrapper{
        background-color: #c8f2fe;
        width: 74px;
        height: 74px;
        position: relative;
        border-radius: 50%;
    }
    .b-envelope-icon{
        width: 56px;
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -40%);
    }
</style>