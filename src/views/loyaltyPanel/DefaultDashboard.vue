<template>
    <v-container fluid class="py-0" style="background: #f8f8fb">
        <v-card-title class="pl-3 pb-2">DASHBOARD</v-card-title>
        <v-row no-gutters>
            <v-col cols="4" class="pa-3">
                <v-row no-gutters>
                    <v-col cols="12">
                        <v-card flat class="pb-5">
                            <v-card-title
                                class="primary--text welcome-title"
                                style="word-break: normal"
                            >
                                <v-col cols="7" align-self="start">
                                    Welcome Back !
                                    <div class="subtitle-2">Skote Dashboard</div>
                                </v-col>
                                <v-col cols="5" class="pa-0">
                                    <v-img src="@/assets/profile-img.png" cover></v-img>
                                </v-col>
                            </v-card-title>

                            <v-sheet class="avatar-wrapper" width="72" height="72">
                                <v-avatar size="64" class="ma-1">
                                    <v-img src="@/assets/avatars/avatar-1.jpg"></v-img>
                                </v-avatar>
                            </v-sheet>

                            <v-row no-gutters>
                                <v-col cols="4" class="pl-5 pr-1 mt-12">
                                    <h4 class="subtitle-1 font-weight-medium">Henry Price</h4>
                                    <div
                                        class="text--secondary subtitle-2 text-truncate"
                                    >UI/UX Designer</div>
                                </v-col>
                                <v-col cols="8" class="pl-3">
                                    <v-row no-gutters class="mt-3">
                                        <v-col cols="6">
                                            <h4 class="subtitle-1 font-weight-medium">125</h4>
                                            <div class="text--secondary text-caption">Projects</div>
                                        </v-col>
                                        <v-col cols="6">
                                            <h4 class="subtitle-1 font-weight-medium">$1245</h4>
                                            <div class="text--secondary text-caption">Revenue</div>
                                        </v-col>
                                        <v-col cols="12" class="mt-7">
                                            <v-btn color="primary" small>
                                                view profile
                                                <v-icon
                                                    class="ml-2"
                                                    v-text="icons.mdiArrowRight"
                                                    small
                                                ></v-icon>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>

                    <v-col cols="12" class="mt-6">
                        <v-card flat>
                            <v-card-title class="subtitle-1 font-weight-medium pb-3">Monthly Earning</v-card-title>
                            <v-row no-gutters>
                                <v-col cols="6">
                                    <div class="text--secondary subtitle-2 pl-4">This month</div>
                                    <h4 class="text-h5 font-weight-medium pl-4 mt-1">$34,252</h4>

                                    <div class="pl-4">
                                        <span class="success--text subtitle-2">12%</span>
                                        <v-icon color="success" small v-text="icons.mdiArrowUp"></v-icon>
                                        <span
                                            class="text--secondary ml-2 subtitle-2"
                                        >From previous period</span>
                                    </div>

                                    <v-btn color="primary" small class="ml-4 mt-4">
                                        view more
                                        <v-icon class="ml-2" v-text="icons.mdiArrowRight" small></v-icon>
                                    </v-btn>
                                </v-col>
                                <v-col cols="6"></v-col>
                                <v-col
                                    cols="12"
                                    class="text--secondary subtitle-2 px-4 pt-10"
                                >We craft digital, graphic and dimensional thinking.</v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="8">
                <v-container class="pt-0">
                    <v-row>
                        <v-col cols="4">
                            <v-card outlined tile>
                                <v-row no-gutters align="center" justify="space-between">
                                    <v-col cols="auto">
                                        <h6 class="text--secondary subtitle-2 pa-4 pb-0">Orders</h6>
                                        <v-card-title class="pt-3">1,235</v-card-title>
                                    </v-col>
                                    <v-col cols="auto">
                                        <v-sheet color="primary" class="mr-4 rounded-circle">
                                            <v-icon
                                                v-text="icons.mdiTextBoxMultipleOutline"
                                                color="white"
                                                size="20"
                                                class="ma-3"
                                            ></v-icon>
                                        </v-sheet>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                        <v-col cols="4">
                            <v-card outlined tile>
                                <v-row no-gutters align="center" justify="space-between">
                                    <v-col cols="auto">
                                        <h6 class="text--secondary subtitle-2 pa-4 pb-0">Revenue</h6>
                                        <v-card-title class="pt-3">$35,723</v-card-title>
                                    </v-col>
                                    <v-col cols="auto">
                                        <v-sheet color="primary" class="mr-4 rounded-circle">
                                            <v-icon
                                                v-text="icons.mdiPackageDown"
                                                color="white"
                                                size="20"
                                                class="ma-3"
                                            ></v-icon>
                                        </v-sheet>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                        <v-col cols="4">
                            <v-card outlined tile>
                                <v-row no-gutters align="center" justify="space-between">
                                    <v-col cols="auto">
                                        <h6
                                            class="text--secondary subtitle-2 pa-4 pb-0"
                                        >Average Price</h6>
                                        <v-card-title class="pt-3">$16.2</v-card-title>
                                    </v-col>
                                    <v-col cols="auto">
                                        <v-sheet color="primary" class="mr-4 rounded-circle">
                                            <v-icon
                                                v-text="icons.mdiTagOutline"
                                                color="white"
                                                size="20"
                                                class="ma-3"
                                            ></v-icon>
                                        </v-sheet>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>

                        <v-col cols="12">
                            <v-card flat tile>
                                <v-card-title class="subtitle-1 font-weight-medium">
                                    <v-col>Email Sent</v-col>
                                    <v-col>
                                        <v-tabs right>
                                            <v-tab class="text-capitalize">week</v-tab>
                                            <v-tab class="text-capitalize">month</v-tab>
                                            <v-tab class="text-capitalize">year</v-tab>
                                        </v-tabs>
                                    </v-col>
                                </v-card-title>

                                <v-sparkline
                                    height="118"
                                    :value="value"
                                    :gradient="gradient"
                                    :smooth="radius || false"
                                    :padding="padding"
                                    :line-width="width"
                                    :stroke-linecap="lineCap"
                                    :gradient-direction="gradientDirection"
                                    :fill="fill"
                                    :type="type"
                                    :auto-line-width="autoLineWidth"
                                    auto-draw
                                ></v-sparkline>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>

        <v-row no-gutters>
            <v-col cols="4" class="pa-3">
                <v-card flat outlined>
                    <v-card-title class="subtitle-1 font-weight-medium">
                        <v-col>Social Source</v-col>
                    </v-card-title>
                </v-card>
            </v-col>
            <v-col cols="4" class="pa-3">
                <v-card flat outlined>
                    <v-card-title class="subtitle-1 font-weight-medium">
                        <v-col>Activity</v-col>
                    </v-card-title>
                </v-card>
            </v-col>
            <v-col cols="4" class="pa-3">
                <v-card flat outlined>
                    <v-card-title class="subtitle-1 font-weight-medium">
                        <v-col>Top Cities Selling Product</v-col>
                    </v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mdiArrowRight } from "@mdi/js";
import { mdiArrowUp } from "@mdi/js";
import { mdiTextBoxMultipleOutline } from "@mdi/js";
import { mdiTagOutline } from "@mdi/js";
import { mdiPackageDown } from "@mdi/js";

const gradients = [
    ["#222"],
    ["#42b3f4"],
    ["red", "orange", "yellow"],
    ["purple", "violet"],
    ["#00c6ff", "#F0F", "#FF0"],
    ["#f72047", "#ffd200", "#1feaea"],
];

export default {
    name: "DefaultDashboard",

    data: () => ({
        icons: {
            mdiArrowRight,
            mdiArrowUp,
            mdiTextBoxMultipleOutline,
            mdiTagOutline,
            mdiPackageDown,
        },
        width: 2,
        radius: 10,
        padding: 8,
        lineCap: "round",
        gradient: gradients[5],
        value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
        gradientDirection: "top",
        gradients,
        fill: false,
        type: "trend",
        autoLineWidth: false,
    }),
};
</script>

<style scoped>
.welcome-title {
    background: rgba(85, 110, 230, 0.25);
    word-break: normal;
    padding: 0;
}

.avatar-wrapper {
    position: absolute;
    top: 72px;
    left: 20px;
    border-radius: 50%;
}
</style>