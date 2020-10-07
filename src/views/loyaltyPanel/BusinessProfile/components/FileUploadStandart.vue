<template>
    <v-row no-gutters>
        <v-col cols="12" class="pr-2">
            <v-card outlined>
                <v-card-title class="grey lighten-3">{{card.cardTitle}}</v-card-title>
                <v-card-text class="pt-5">
                    {{card.cardDescription}}
                    <dashed-block :card="card"></dashed-block>
                </v-card-text>
                <v-card-actions class="pl-4">
                    <!--<v-btn
                            color="light-blue accent-1"
                            class="white&#45;&#45;text"
                            :disabled="card.save.disabled"
                            v-if="card.save.active"
                    >
                        Save
                    </v-btn>-->
                    <v-btn
                            color="secondary" class="text-capitalize" depressed
                            :disabled="card.save.disabled"
                            v-if="card.save.active"
                    >
                        Save
                    </v-btn>
                    <v-btn
                            color="secondary" class="text-capitalize" depressed
                            v-if="card.deleteBtn.active"
                            :disabled="card.deleteBtn.disabled"
                    >
                        Delete
                    </v-btn>
                    <update-logo-button  v-if="card.update.active"></update-logo-button>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
    <!-- <v-card
         class="mx-auto"

         outlined
     >
         <v-card-title class=""
         >{{card.cardTitle}}
         </v-card-title
         >
         <v-card-text>
             {{card.cardDescription}}
         </v-card-text>
         <dashed-block :card="card"></dashed-block>
         <v-card-actions>

                 <v-btn
                     color="light-blue accent-1"
                     class="white&#45;&#45;text"
                     :disabled="card.save.disabled"
                     v-if="card.save.active"
                 >
                     Save
                 </v-btn>
                 <v-btn
                     class="white&#45;&#45;text"
                     v-if="card.deleteBtn.active"
                     :disabled="card.deleteBtn.disabled"

                     color="orange darken-2"
                 >
                    Delete
                 </v-btn>
             <update-logo-button  v-if="card.update.active"></update-logo-button>
         </v-card-actions>
     </v-card>-->
</template>
<script>
    import {
        mdiAccountBox, mdiArrowLeft,
        mdiArrowRight, mdiCart, mdiChevronDown, mdiChevronUp,
        mdiClockOutline, mdiClose,
        mdiCloseThick,
        mdiCurrencyEur,
        mdiInformation, mdiMenuDown, mdiPencilOutline, mdiPercent,
        mdiPlus, mdiPound, mdiCloudUpload
    } from "@mdi/js";
    import UpdateLogoButton from './UpdateLogoButton'
    import DashedBlock from './DashedBlock'

    export default {
        props: [
            'card'
        ],
        data() {
            return {
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
                }

            }

        },
        components: {
             'update-logo-button':UpdateLogoButton,
            'dashed-block':DashedBlock
        }
    };
</script>
<style scoped>
    .dashed_border {
        border: 1px dashed grey;
        border-radius: 10px;
    }
</style>