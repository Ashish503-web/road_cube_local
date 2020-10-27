<template>
    <div class="loyaltyWithoutBuildings">
        <v-container>
            <v-row class="d-flex align-center justify-center py-0 px-2 px-md-4">
                <v-col data-aos="fade-right" cols="12" md="7" class="py-0 px-2 px-md-4">
                    <v-img src="../../../../assets/home/img-healthins.png" max-width="530px" width="100%" height="auto"></v-img>
                </v-col>
                <v-col data-aos="fade-left" cols="12" md="5" class="py-0 px-2 px-md-4">
                    <v-img
                            src="../../../../assets/home/icon-heart.png"
                            max-width="60px"
                            width="100%"
                            height="auto"
                            class="mb-6"
                    ></v-img>
                    <h2 class="mb-6">Loyalty Without Building</h2>
                    <p class="mb-12">Customize your loyalty platform without  the development costs and delays. We make your custom loyalty scheme with our ready made modules and you just cover your monthly subscription. </p>
                    <v-btn
                            class="text-capitalize pr-1 pl-0 b-btn-hover"
                            height="auto"
                            rounded
                    >
                        <p class="ma-0" style="padding: 15px 70px 15px 20px; font-size: 17px; line-height: normal; text-transform: none">Get a quote</p>
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
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import { mdiArrowRight } from "@mdi/js";

    export default {
        name: "LoyaltyWithoutBuilding",
        data: () => ({
            icons: {
                mdiArrowRight,
            }
        })
    };
</script>

<style scoped>
    .loyaltyWithoutBuildings{
        padding-top: 100px;
    }
    h2{
        color: #142752;
        font-size: 2.176em;
        line-height: 1.3em;
    }
    p{
        font-size: 17px;
        line-height: 1.9em;
    }
    /*Hovered btn*/
    .b-btn-hover {
        font-size: 1em;
        background-color: white !important;
        border-radius: 150px;
        transition: all .3s ease;
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
        transition: all .3s ease;
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