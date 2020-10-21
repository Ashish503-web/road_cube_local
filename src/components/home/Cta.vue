<template>
    <div id="cta" class="cta mx-auto">
        <v-container class="py-0">
            <v-row class="py-0 px-2 px-md-4">
                <v-col cols="12" md="3" class="py-0 px-2 px-md-4">
                    <h2 class="mb-3">We have got you <span style="color: #0089f3">covered</span></h2>
                </v-col>
                <v-col cols="12" md="6" class="py-0 px-2 px-md-4">
                    <h4 class="mb-4">Whatever you need we are here to help you. Please contact us and we will be happy to assist you. </h4>
                    <h3 class="mb-6">Everybody Deserves!</h3>
                </v-col>
                <v-col cols="12" md="3" class="py-0 px-2 px-md-4">
                    <v-btn
                            class="text-capitalize pr-1 pl-0 btn-hover"
                            height="auto"
                            rounded
                    >
                        <p class="ma-0" style="padding: 15px 70px 15px 20px; font-size: 17px; line-height: normal; text-transform: none">Contact Us</p>
                        <v-avatar size="38" class="icon-hover">
                            <v-icon
                                    size="24"
                                    color="#fff"
                                    v-text="icons.mdiEmail"
                                    class="right-icon"
                            ></v-icon>
                            <v-icon
                                    size="24"
                                    color="#001266"
                                    v-text="icons.mdiEmail"
                                    class="right-icon"
                            ></v-icon>
                        </v-avatar>
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import { mdiEmail } from "@mdi/js";
    export default {
        name: "Cta",

        data: () => ({
            icons: {
                mdiEmail
            }
        })
    };
</script>

<style scoped>
    .cta{
        background-color: #001266;
        padding: 80px 0 48px 0;
    }
    .cta h2{
        color: #fff;
        font-size: 37px;
        line-height: 1.3em;
    }
    h4{
        color: #fff;
        font-size: 17px;
        font-weight: 300;
    }
    h3{
        color: #fff;
        font-size: 28px;
        font-weight: normal;
    }
    /*Hovered btn*/
    .btn-hover {
        float: right;
        font-size: 1em;
        background-color: white !important;
        border-radius: 150px;
        transition: all .3s ease;
        overflow: hidden;
        box-shadow: none;
        border: 1px solid #e8eaee;
    }

    .btn-hover:hover {
        border: 1px solid #142752;
        background-color: #142752 !important;
    }

    .icon-hover {
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

    .icon-hover .right-icon {
        width: 40px !important;
    }

    .btn-hover:hover .icon-hover .right-icon {
        transform: translateX(100%);
    }

    .btn-hover:hover .icon-hover {
        background-color: #0089f3 !important;
    }

    .btn-hover:hover p {
        color: white;
    }

    @media (max-width: 960px){
        .btn-hover{
            float: none;
        }
    }
    /*Hovered btn*/
</style>