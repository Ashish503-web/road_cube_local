<template>
    <div class="pb-5">
        <template v-if="$route.query.status === 'SUCCESS'">
            <v-alert type="success" class="font-weight-bold ma-0" tile>
                <v-row no-gutters justify="space-between">
                    Your payment was successful
                    <v-btn icon small @click="removeStatus">
                        <v-icon v-text="icons.mdiClose"></v-icon>
                    </v-btn>
                </v-row>
            </v-alert>
            <div class="b-success-timer-holder">
                <div class="b-success-timer"></div>
            </div>
        </template>

        <template v-if="$route.query.status === 'FAILURE'">
            <v-alert type="error" class="font-weight-bold ma-0" tile>
                <v-row no-gutters justify="space-between">
                    Sorry, something went wrong with your payment

                    <v-btn icon small @click="removeStatus">
                        <v-icon v-text="icons.mdiClose"></v-icon>
                    </v-btn>
                </v-row>
            </v-alert>
            <div class="b-error-timer-holder">
                <div class="b-error-timer"></div>
            </div>
        </template>
    </div>
</template>

<script>
import { mdiClose } from "@mdi/js";

export default {
    name: "PaymentMessage",

    data: () => ({
        icons: { mdiClose },
        timer: null
    }),

    methods: {
        removeStatus() {
            this.$router.replace({
                query: {
                    ...this.$route.query,
                    status: undefined
                }
            });

            clearTimeout(this.timer);
        }
    },

    mounted() {
        if (this.$route.query.status) {
            this.timer = setTimeout(
                () =>
                    this.$router.replace({
                        query: {
                            ...this.$route.query,
                            status: undefined
                        }
                    }),
                5500
            );
        }
    }
};
</script>

<style scoped>
.b-success-timer-holder {
    height: 4px;
    background-color: #a5d6a7;
}

.b-success-timer {
    height: 4px;
    background-color: #388e3c;
    animation: timer 5s linear;
}

.b-error-timer-holder {
    height: 4px;
    background-color: #ef9a9a;
}

.b-error-timer {
    height: 4px;
    background-color: #d32f2f;
    animation: timer 5s linear;
}

@keyframes timer {
    0% {
        width: 100%;
    }

    100% {
        width: 0;
    }
}
</style>
