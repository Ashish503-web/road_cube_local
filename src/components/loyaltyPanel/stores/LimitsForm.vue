<template>
    <b-card
        :title="title"
        icon="mdiBankTransfer"
        @cancel="$emit('cancel')"
        @submit="mode == 1 ? updateGlobal() : updateLimit(dailyLimit)"
    >
        <v-row no-gutters>
            <v-col cols="3" class="pr-1">
                <v-select
                    v-model="status"
                    :items="['Offline','Online']"
                    menu-props="offsetY"
                    color="secondary"
                    item-color="secondary"
                    outlined
                    dense
                    hide-details
                ></v-select>
            </v-col>
            <v-col cols="6" class="px-1">
                <v-text-field
                    label="Daily Transaction Limits"
                    v-model="limitModel"
                    color="secondary"
                    outlined
                    dense
                    clearable
                    hide-details
                ></v-text-field>
            </v-col>
            <v-col cols="3" class="pl-1">
                <v-select
                    v-model="currency"
                    :items="['Amount', 'Points']"
                    menu-props="offsetY"
                    color="secondary"
                    item-color="secondary"
                    outlined
                    dense
                    hide-details
                ></v-select>
            </v-col>
        </v-row>
    </b-card>
</template>

<script>
import { mdiBankTransfer } from "@mdi/js";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    name: "LimitsForm",
    props: {
        mode: {
            type: Number
        },
        updateStatus: {
            type: String
        }
    },
    data: () => ({
        icons: { mdiBankTransfer },
        status: "Offline",
        currency: "Amount",
        globalOfflineAmountLimit: 0,
        globalOfflinePointsLimit: 0,
        globalOnlineAmountLimit: 0,
        globalOnlinePointsLimit: 0,
    }),

    mounted(){
        if(this.updateStatus == "offline"){
            this.status = "Offline"
        }else{
            this.status = "Online"
        }
    },

    watch: {
        updateStatus(val){
            if(val == "offline"){
                this.status = "Offline"
            }else{
                this.status = "Online"
            }
        }
    },

    computed: {
        ...mapState("loyaltyPanel/stores/dailyLimits", ["dailyLimit"]),

        title() {
            return this.mode === 1
                ? `Change Transaction Limits For All Companies`
                : `Change Transaction Limits For Company ${this.dailyLimit.app_name}`;
        },

        query() {
            let query = "?";

            for (let key in this.$route.query) {
                query += `${key}=${this.$route.query[key]}&`;
            }

            return query.slice(0, query.length - 1);
        },

        limitModel: {
            get() {
                if(this.mode == 1){
                    return this.status == 'Offline' ? this.currency == 'Amount' ? this.globalOfflineAmountLimit : this.globalOfflinePointsLimit : 
                        this.currency == 'Amount' ? this.globalOnlineAmountLimit : this.globalOnlinePointsLimit;
                }else{
                    return this.status == 'Offline' ? this.currency == 'Amount' ? this.dailyLimit.daily_limits.offline.amount : this.dailyLimit.daily_limits.offline.points : 
                        this.currency == 'Amount' ? this.dailyLimit.daily_limits.online.amount : this.dailyLimit.daily_limits.online.points;
                }
                
            },
            set(val) {
                if(this.mode == 1){
                    if(this.status == 'Offline'){
                        if(this.currency == 'Amount'){
                            this.globalOfflineAmountLimit = Number(val)
                        }else{
                            this.globalOfflinePointsLimit = Number(val)
                        }
                    }else{
                        if(this.currency == 'Amount'){
                            this.globalOnlineAmountLimit = Number(val)
                        }else{
                            this.globalOnlinePointsLimit = Number(val)
                        } 
                    }
                }else{
                    if(this.status == 'Offline'){
                        if(this.currency == 'Amount'){
                            this.dailyLimit.daily_limits.offline.amount = Number(val)
                        }else{
                            this.dailyLimit.daily_limits.offline.points = Number(val)
                        }
                    }else{
                        if(this.currency == 'Amount'){
                            this.dailyLimit.daily_limits.online.amount = Number(val)
                        }else{
                            this.dailyLimit.daily_limits.online.points = Number(val)
                        } 
                    }
                }
                
            }
        }
    },

    methods: {
        ...mapActions("loyaltyPanel/stores/dailyLimits", ["updateLimit","updateGlobalLimits"]),

        updateGlobal(){
            let data = {
                query: this.query,
                limits: {
                    "offline": {
                        "amount": this.globalOfflineAmountLimit,
                        "points": this.globalOfflinePointsLimit
                    },
                    "online": {
                        "amount": this.globalOnlineAmountLimit,
                        "points": this.globalOnlinePointsLimit
                    }
                }
            }

            this.updateGlobalLimits(data)
        }
    }
};
</script>
