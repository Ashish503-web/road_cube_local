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
                    <v-card class="">
                        <v-row
                                no-gutters
                                justify="space-between"
                                class="px-3"
                        >
                            <v-col cols="6">
                                <v-card-title
                                        class="pl-0 text--secondary"
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
                </v-col>
                <v-col class="main-grid" cols="6">
                    <file-upload-standart
                        :card="cards[1]"
                    ></file-upload-standart>
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
             <!--   <v-col class="main-grid" cols="6">
                    <v-card class="mt-5 rounded-lg">
                        <v-card-title class="">User manual</v-card-title>
                        <v-card-text>
                            Upload user manual that every business will see (in .pdf format).
                            Select pdf file and then click <b>save</b>.

                            <v-row
                                    class="dashed mt-5 pa-5"
                                    no-gutters
                                    align="center">
                                <v-col
                                        cols="auto"
                                        class="pa-5 ml-12">
                                    <a href="http://www.roadcube.com/pdfManual/user_manual_64651.pdf" target="_blank" style="margin-top: 5%;">Εγχειρίδιο Πλατφόρμας</a>
                                </v-col>
                                <v-col cols="auto" class="ml-12">
                                    Choose pdf file :

                                    <v-file-input
                                            color="secondary"
                                            class="mt-1"
                                            rounded
                                            outlined
                                            dense
                                            hide-details
                                            style="width: 300px"
                                    ></v-file-input>
                                </v-col>
                            </v-row>
                        </v-card-text>

                        <v-card-actions class="pl-4">
                            <v-btn
                                    color="primary"
                                    class="text-capitalize"
                                    rounded
                            >
                               Save
                            </v-btn>
                            <v-btn
                                    color="error"
                                    class="text-capitalize"
                                    rounded
                            >
                                Delete
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col class="main-grid" cols="6">
                    <v-card class="mt-5 rounded-lg">
                        <v-card-title class="">Offline-Online Points Relation</v-card-title>
                        <v-card-text>
                            Please specify the Offline-Online relation for points that will be given to the user (eg: If you select 30%, if the online points are 100, then the offline points will be 30).

                            <v-row
                                    class="dashed mt-5 pa-5"
                                    no-gutters
                                    align="center">

                                <v-col cols="auto" class="ml-12">
                                    <span>Relation :</span>
                                    <v-select
                                            v-model="select"
                                            :items="items"
                                            :rules="[v => !!v || 'Item is required']"
                                            label=""
                                            required
                                            rounded
                                            outlined
                                            dense
                                    ></v-select>
                                </v-col>
                            </v-row>
                        </v-card-text>

                        <v-card-actions class="pl-4">
                            <v-btn
                                    color="primary"
                                    class="text-capitalize"
                                    rounded
                            >
                                Save
                            </v-btn>
                            <v-btn
                                    color="error"
                                    class="text-capitalize"
                                    rounded
                            >
                                Delete
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col class="main-grid" cols="6">
                    <v-card class="mt-5 rounded-lg">
                        <v-card-title class="">Terms of use</v-card-title>
                        <v-card-text>
                            Upload terms of use of business (in .pdf format).
                            Select the pdf file and then click save.

                            <v-row
                                    class="dashed mt-5 pa-5"
                                    no-gutters
                                    align="center">
                                <v-col
                                        cols="auto"
                                        class="pa-5 ml-12">
                                </v-col>
                                <v-col cols="auto" class="ml-12">
                                    Choose pdf file :

                                    <v-file-input
                                            color="secondary"
                                            class="mt-1"
                                            rounded
                                            outlined
                                            dense
                                            hide-details
                                            style="width: 300px"
                                    ></v-file-input>
                                </v-col>
                            </v-row>
                        </v-card-text>

                        <v-card-actions class="pl-4">
                            <v-btn
                                    color="primary"
                                    class="text-capitalize"
                                    rounded
                            >
                                Save
                            </v-btn>
                            <v-btn
                                    color="error"
                                    class="text-capitalize"
                                    rounded
                            >
                                Delete
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col class="main-grid" cols="6">
                    <v-card class="mt-5 rounded-lg">
                        <v-card-title class="">Privacy policy</v-card-title>
                        <v-card-text>
                            Upload the business privacy policy (in .pdf format).
                            Select the pdf file and then click save.

                            <v-row
                                    class="dashed mt-5 pa-5"
                                    no-gutters
                                    align="center">
                                <v-col
                                        cols="auto"
                                        class="pa-5 ml-12">
                                    <a href="https://www.roadcube.com/company_terms/privacy_policy_64651.pdf" target="_blank" style="margin-top: 5%;">Privacy policy</a>
                                </v-col>
                                <v-col cols="auto" class="ml-12">
                                    Choose pdf file :

                                    <v-file-input
                                            color="secondary"
                                            class="mt-1"
                                            rounded
                                            outlined
                                            dense
                                            hide-details
                                            style="width: 300px"
                                    ></v-file-input>
                                </v-col>
                            </v-row>
                        </v-card-text>

                        <v-card-actions class="pl-4">
                            <v-btn
                                    color="primary"
                                    class="text-capitalize"
                                    rounded
                            >
                                Save
                            </v-btn>
                            <v-btn
                                    color="error"
                                    class="text-capitalize"
                                    rounded
                            >
                                Delete
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col class="main-grid" cols="6">
                    <v-card class="mt-5 rounded-lg">
                        <v-card-title class="">Initial Online/Offline points upon registration</v-card-title>
                        <v-card-text>
                            Set the online / offline points to be given to new users when registering, as well as the limits
                            of users who will receive them. If you want to be unlimited uncheck 'Unlimited users online / offline' respectively.
                        <p class="mt-5">Totally sent to 718 Users.</p>
                        <p class="error&#45;&#45;text">Users have exceeded the limit.</p>
                            <v-row
                                    class="dashed mt-5 pa-5"
                                    no-gutters
                                    align="center">
                                <form action="">
                                    <v-row>
                                        <v-checkbox
                                                v-model="unlimitedUserOnline"
                                                value="1"
                                                label="Unlimited users online"
                                                type="checkbox"
                                        ></v-checkbox>
                                        <v-col cols="12"  class="pa-0">
                                            <v-row
                                                    no-gutters
                                                    justify="space-around"
                                            >
                                                <v-col style="min-width: 49%" cols="5">

                                                    <v-text-field
                                                            v-model="online"
                                                            label="Online Points"
                                                            rounded
                                                            outlined
                                                            dense
                                                            clearable
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col style="min-width: 49%" cols="5" >

                                                    <v-text-field
                                                            v-show="!unlimitedUserOnline"
                                                            v-model="totalOnline"
                                                            label="Online How many users in total"
                                                            rounded
                                                            outlined
                                                            dense
                                                            clearable
                                                    ></v-text-field>
                                                </v-col>
                                            </v-row>
                                            <v-checkbox
                                                    v-model="unlimitedUserOffline"
                                                    value="1"
                                                    label="Unlimited users offline"
                                                    type="checkbox"
                                            ></v-checkbox>
                                            <v-row
                                                    no-gutters
                                                    justify="space-around"
                                            >
                                                <v-col cols="5" style="min-width: 49%">

                                                    <v-text-field
                                                            v-model="totalOffline"
                                                            label="Offline Points"
                                                            rounded
                                                            outlined
                                                            dense
                                                            clearable
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="5" style="min-width: 49%" >

                                                    <v-text-field
                                                            v-show="!unlimitedUserOffline"
                                                            v-model="totalOffline"
                                                            label=" Offline How many users in total"
                                                            rounded
                                                            outlined
                                                            dense
                                                            clearable
                                                    ></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </form>
                            </v-row>
                        </v-card-text>

                        <v-card-actions class="pl-4">
                            <v-btn
                                    color="primary"
                                    class="text-capitalize"
                                    rounded
                            >
                                Save
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col class="main-grid" cols="6">
                    <v-card class="mt-5 rounded-lg">
                        <v-card-title class="">Set initial digits in new customer form</v-card-title>
                        <v-card-text>
                            You can set the first digits of the mobile phone when adding new customers from the Customers page. These digits will
                            be automatically filled in the "Add new customer" form on the cellphone field every time you add a new one. This setting is optional.

                            <v-row
                                    class="dashed mt-5 pa-5"
                                    no-gutters
                                    align="center">

                                <v-col cols="auto" class="ml-12">
                                    <v-text-field
                                            v-model="customerDigits"
                                            label="Add the number here"
                                            rounded
                                            outlined
                                            dense
                                            clearable
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-card-text>

                        <v-card-actions class="pl-4">
                            <v-btn
                                    color="primary"
                                    class="text-capitalize"
                                    rounded
                            >
                                Save
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col class="main-grid" cols="6">
                    <v-card class="mt-5 rounded-lg">
                        <v-card-title class="">Campaign credentials</v-card-title>
                        <v-card-text>

                            <v-row
                                    class="dashed mt-5 pa-5"
                                    no-gutters
                                    align="center">

                                <v-col  cols="12">
                                    <h4 class="mb-5">Notifications</h4>
                                    <p>Fill out an extra contact email to receive notifications when creating and running any campaign.</p>
                                    <span>1.</span>
                                    <v-text-field
                                            class="d-inline-block"
                                            v-model="notificationsOne"
                                            label=""
                                            rounded
                                            outlined
                                            dense
                                            clearable
                                            full-width
                                    ></v-text-field>
                                </v-col>
                                <v-col  cols="12">

                                    <span>2.</span>
                                    <v-text-field
                                            class="d-inline-block"
                                            v-model="notificationsTwo"
                                            label=""
                                            rounded
                                            outlined
                                            dense
                                            clearable
                                            full-width
                                    ></v-text-field>
                                </v-col>
                                <v-col  cols="12">

                                    <span>3.</span>
                                    <v-text-field
                                            class="d-inline-block"
                                            v-model="notificationsThree"
                                            label=""
                                            rounded
                                            outlined
                                            dense
                                            clearable
                                            full-width
                                    ></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row
                                    class="dashed mt-5 pa-5"
                                    no-gutters
                                    align="center">
                                <v-col  cols="12">
                                    <h4 class="mb-5">SMS + Εmail</h4>
                                    <p>
                                        Fill in the name you want to show when sending messages or Email with the first method.
                                        The name must be in Latin characters and without spaces.
                                    </p>
                                </v-col>
                                <v-col  cols="12">

                                    <p>Message Sender Name.</p>
                                    <v-text-field
                                            v-model="messageSender"
                                            rounded
                                            outlined
                                            dense
                                            clearable
                                            full-width
                                    ></v-text-field>
                                </v-col>
                              <v-col cols="12">
                                  <v-divider></v-divider>
                              </v-col>
                                <v-col cols="12">
                                    <h5>1. Email (First method)</h5>
                                    <p>Add the email you want to see as the sender of the campaign</p>
                                    <p class="pa-0" style="background: beige">The email has not been fully verified. The first method will not be used in campaigns.</p>
                                    <table style="width: 100%;" class="elastic-table">
                                        <tbody>
                                        <tr>
                                            <td colspan="2">
                                                <i class="fa fa-ban"></i> <span id="elastic_email">testtest@gmail.com</span>
                                                <button class="elastic-button small" data-type="resend" disabled="">
                                                    <i id="fa-repeat" class="fa fa-check" title="Resend Email Verification"></i>
                                                </button>
                                            </td>
                                            <td>
                                                <i class="fa fa-ban"></i>
                                                <span class="records-info" data-toggle="modal" data-target="#spf">SPF</span>
                                            </td>
                                            <td><i class="fa fa-ban"></i>
                                                <span class="records-info" data-toggle="modal" data-target="#dkim">DKIM</span>
                                            </td>
                                            <td><i class="fa fa-ban"></i>
                                                <span class="records-info" data-toggle="modal" data-target="#tracking">Tracking</span>
                                            </td>
                                            <td><i class="fa fa-check-circle"></i>
                                                <span class="records-info" data-toggle="modal" data-target="#mx">MX</span>
                                            </td>
                                            <td>
                                                <button class="elastic-button small" data-type="remove"><i class="fa fa-trash-o"></i></button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </v-col>
                            </v-row>
                        </v-card-text>

                        <v-card-actions class="pl-4">
                            <v-btn
                                    color="primary"
                                    class="text-capitalize"
                                    rounded
                            >
                                Save
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>-->
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
    import ApiAuthentication  from './components/ApiAuthentication '

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
        'choose-file':ChooseFile,
        'update-logo-button':UpdateLogoButton,
        'online-offline-registration':OnlineOfflineRegistration,
        'set-initial-form':SetInitialForm,
        'push-notifications':PushNotifications,
        'campaign-credentials':CampaignCredentials,
        'yes-no-radio':YesNoRadio,
        'coupon-creation':CouponCreation,
        'api-authentication':ApiAuthentication ,


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
<style scoped>
    /*.dashed {
        border: 1px dashed grey;
        border-radius: 10px;
    }

    .relative {
        position: relative;
    }

    .map-pin {
        position: absolute!important;
        top: 25%;
        right: 10%;
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
    }*/
</style>
