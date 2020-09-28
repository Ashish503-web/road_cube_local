<template style="background-color: #f8f8fb">
    <v-card class="pa-0" flat>
        <v-card flat>
            <v-row>
                <v-col cols="auto">
                    <v-card-title>Busines Profile</v-card-title>
                </v-col>
                <v-col cols="auto" class="ml-auto">
                    <v-icon
                            v-text="icons.mdiAccountBox"
                            size="80"
                            color="#eaedf1"
                            class="mr-5"
                    >
                    </v-icon>
                </v-col>
            </v-row>
        </v-card>
            <v-row class="pa-5 pt-3 pb-3" style="background: #eaedf1">
                <v-col class="main-grid" cols="6">
                    <file-upload-standart
                        :card="cards[0]"
                    ></file-upload-standart>
                </v-col>
                <v-col class="main-grid" cols="6">
                    <pin-display
                            :card="cards[1]"></pin-display>
<!--
                    <v-card class="">
                        <v-row
                                no-gutters
                                justify="space-between"
                                class="px-3"
                        >
                            <v-col cols="6">
                                <v-card-title
                                        class="pl-0 text&#45;&#45;secondary"
                                >Pin Display</v-card-title
                                >

                                <v-card-text class="pa-0 relative">
                                    Here you can change the display
                                    of the pin on the map:
                                    <v-img
                                        src="https://www.roadcube.com/images/theBubblesBusi/64651_275419theOnBubble.png"
                                        width="84"
                                    ></v-img>
                                    Press the following button to
                                    choose image:
                                    <choose-file></choose-file>
                                    <update-logo-button ></update-logo-button>
                                </v-card-text>
                            </v-col>
                            <v-col
                                    cols="auto"
                                    class="mt-5 relative"
                            >
                                <v-img
                                        src="@/assets/theMapLogo3.png"
                                        width="260"
                                        style="border: 2px solid gray"
                                        class="rounded-circle"
                                ></v-img>

                            </v-col>
                        </v-row>

                        <v-card-actions class="pl-4">

                        </v-card-actions>
                    </v-card>
-->
                </v-col>
                <v-col class="main-grid" cols="6">
                    <file-upload-standart
                        :card="cards[2]"
                    ></file-upload-standart>
                </v-col>
                <v-col class="main-grid" cols="6">
                    <file-upload-standart
                        :card="cards[3]"
                    ></file-upload-standart>
                </v-col>
                <v-col class="main-grid" cols="6">
                    <file-upload-standart
                        :card="cards[4]"
                    ></file-upload-standart>
                </v-col>
                <v-col class="main-grid" cols="6">
                    <file-upload-standart
                        :card="cards[5]"
                    ></file-upload-standart>
                </v-col>
                <v-col class="main-grid" cols="6">
                    <online-offline-registration></online-offline-registration>
                </v-col>
                <v-col class="main-grid" cols="6">
                    <set-initial-form></set-initial-form>
                    <push-notifications></push-notifications>
                </v-col>
                <v-col class="main-grid" cols="6">
                    <campaign-credentials> </campaign-credentials>
                </v-col>
                <v-col class="main-grid" cols="6">
                    <yes-no-radio :question="question1"></yes-no-radio>
                    <coupon-creation></coupon-creation>
                    <api-authentication></api-authentication>
                    <yes-no-radio :question="question2"></yes-no-radio>

                </v-col>
            </v-row>
        </v-card>
</template>

<script>
    import logo from "@/assets/img.png";
    import bubbleLogo from "@/assets/img.png";
    import FileUploadStandart from './components/FileUploadStandart'
    import ChooseFile from './components/ChooseFile'
    import UpdateLogoButton from './components/UpdateLogoButton'
    import OnlineOfflineRegistration from './components/OnlineOfflineRegistration'
    import SetInitialForm from './components/SetInitialForm'
    import PushNotifications from './components/PushNotifications'
    import CampaignCredentials from './components/CampaignCredentials'
    import YesNoRadio from './components/YesNoRadio'
    import CouponCreation from './components/CouponCreation'
    import ApiAuthentication  from './components/ApiAuthentication'
    import PinDisplay  from './components/PinDisplay'

    import {
        mdiAccountBox, mdiArrowLeft,
        mdiArrowRight, mdiCart, mdiChevronDown, mdiChevronUp,
        mdiClockOutline, mdiClose,
        mdiCloseThick,
        mdiCurrencyEur,
        mdiInformation, mdiMenuDown, mdiPencilOutline, mdiPercent,
        mdiPlus, mdiPound,mdiCloudUpload
    } from "@mdi/js";
export default {
    name: "BusinessProfile",
    data () {
        return {
            cards:[
                {
                    cardTitle:'Logo',
                    cardDescription:'You can upload here the logo of your\n' +
                        '            business which will appear in the app\n' +
                        '            and will be on the physical cards. If we\n' +
                        '            think that it can be improved we will\n' +
                        '            contact you before publishment.',
                    uploadDescription:'Press the following button to\n' +
                        '                    choose image:',
                    buttonType:'update',
                    img:'https://www.roadcube.com/images/businessLogos/64651_118412logo.png',
                    save:{
                        active:false
                    },
                    deleteBtn:{
                        active:false
                    },
                    update: {
                        active:true
                    },
                    fileUpload:{
                        active:true
                    },
                    select:{
                        active:false
                    }
                },
                {
                    cardTitle:'Pin Display',
                    cardDescription:' Here you can change the display of the pin on the map:',
                    uploadDescription:'Press the following button to choose image :',
                    buttonType:'update',
                    img:'https://www.roadcube.com/proadt.png',
                    save:{
                        active:false
                    },
                    deleteBtn:{
                        active:false
                    },
                    update: {
                        active:true
                    },
                    fileUpload:{
                        active:true
                    },
                    select:{
                        active:false
                    }
                },
                {
                    cardTitle:'User manual\n',
                    cardDescription:'Upload user manual that every business will see (in .pdf format).Select pdf file and then click save.',
                    uploadDescription:'Choose pdf file :',
                    buttonType:'save-delete',
                    pdf:'https://www.roadcube.com/pdfManual/user_manual_64651.pdf',
                    save:{
                        active:true
                    },
                    deleteBtn:{
                        active:true
                    },
                    update: {
                        active:false
                    },
                    fileUpload:{
                        active:true
                    },
                    select:{
                        active:false
                    }
                },
                {
                    cardTitle:'Offline-Online Points Relation\n',
                    cardDescription:'Please specify the Offline-Online relation for points that will be given to the user (eg: If you select 30%, if the online points are 100, then the offline points will be 30).',
                    uploadDescription:'Choose pdf file :',
                    buttonType:'save-delete',
                    pdf:'https://www.roadcube.com/pdfManual/user_manual_64651.pdf',
                    save:{
                        active:true
                    },
                    deleteBtn:{
                        active:false
                    },
                    update: {
                        active:false
                    },
                    fileUpload:{
                        active:false
                    },
                    select:{
                        active:true
                    }
                },
                {
                    cardTitle:'Terms of use\n',
                    cardDescription:'Upload terms of use of business (in .pdf format).\n' +
                        'Select the pdf file and then click save.',
                    uploadDescription:'Terms of use :\n',
                    buttonType:'save-delete',
                    save:{
                        active:true,
                        disabled:true
                    },
                    deleteBtn:{
                        active:true,
                        disabled:true
                    },
                    update: {
                        active:false
                    },
                    fileUpload:{
                        active:true
                    },
                    select:{
                        active:false
                    }
                },
                {
                    cardTitle:'Privacy policy\n',
                    cardDescription:'Upload the business privacy policy (in .pdf format).\n' +
                        'Select the pdf file and then click save.',
                    uploadDescription:'Privacy policy :',
                    buttonType:'save-delete',
                    pdf:'https://www.roadcube.com/company_terms/privacy_policy_64651.pdf',
                    save:{
                        active:true,
                        disabled: true

                    },
                    deleteBtn:{
                        active:true,
                        disabled: true
                    },
                    update: {
                        active:false
                    },
                    fileUpload:{
                        active:true
                    },
                    select:{
                        active:false
                    }
                },

            ],
            question1:'Do you want points to be returned to the user after using the coupon?',
            question2:'Show user points in the app',
            select: 0,
            online:"",
            totalOnline:"",
            offline:"",
            totalOffline:"",
            notificationsOne:'',
            notificationsTwo:'',
            notificationsThree:'',
            unlimitedUserOnline:false,
            unlimitedUserOffline:false,
            messageSender:'',
            customerDigits:30,
            items: [
            ],
            bubbleLogo,
            mapPin: {
                image: "",
                imageFile: ""
            },
            logo: {
                image: logo,
                imageFile: ""
            },
            icons: {
                mdiAccountBox,
                mdiArrowRight,
                mdiClockOutline,
                mdiCurrencyEur,
                mdiPlus,
                mdiCloseThick,
                mdiInformation,
                mdiPercent,
                mdiPencilOutline,
                mdiClose,
                mdiMenuDown,
                mdiChevronUp,
                mdiChevronDown,
                mdiPound,
                mdiCart,
                mdiArrowLeft,
                mdiCloudUpload
            },
        }
    },
    components:{
        'file-upload-standart' :FileUploadStandart,
        //'choose-file':ChooseFile,
      //  'update-logo-button':UpdateLogoButton,
        'online-offline-registration':OnlineOfflineRegistration,
        'set-initial-form':SetInitialForm,
        'push-notifications':PushNotifications,
        'campaign-credentials':CampaignCredentials,
        'yes-no-radio':YesNoRadio,
        'coupon-creation':CouponCreation,
        'api-authentication':ApiAuthentication,
        'pin-display':PinDisplay,


    },
    methods: {
        getData(){
            for (let i = 1; i<101; i++){
                this.items.push(i);
            }
        }
    },
    beforeMount() {
        this.getData()
    },
};
</script>
<style>
    .dashed {
        border: 1px dashed grey;
        border-radius: 10px;
    }

    .relative {
        position: relative;
    }

    .map-new-pin {
        width: 50px;
        position: absolute;
        top: 37px;
        left: 14px;
    }

    .category-number {
        position: absolute;
        top: 7px;
        left: -5px;
    }

    .category-remove {
        position: absolute;
        top: -10px;
        right: -10px;
        cursor: pointer;
    }
</style>
