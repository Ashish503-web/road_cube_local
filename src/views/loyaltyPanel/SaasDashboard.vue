<template>
    <v-container fluid class="py-0" style="background: #f8f8fb">
        <v-card-title class="pl-3 pb-2 subtitle-1 font-weight-medium">SAAS</v-card-title>
        <v-row no-gutters class="pa-3" cols="12">
            <v-col cols="4">
                <v-card flat>
                    <v-row class="pa-3">
                        <v-col class="ml-3" cols="2">
                            <v-sheet class="avatar-wrapper" width="72" height="72">
                                <v-avatar size="70">
                                    <v-img src="@/assets/avatars/avatar-1.jpg" style="border: 5px solid #f8f8fb"></v-img>
                                </v-avatar>
                            </v-sheet>
                        </v-col>
                        <v-col class="ml-3" cols="8">
                            <h6 class="subtitle-2 font-weight-light">Welcome to skote dashboard</h6>
                            <h4 class="subtitle-1 font-weight-medium">Henry Price</h4>
                            <div
                                    class="text--secondary subtitle-2 text-truncate"
                            >
                                UI/UX Designer
                            </div>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-col cols="4">
                <v-card flat>
                    <v-row class="pa-6 text-center">
                        <v-col cols="4">
                            <h4 class="subtitle-2 font-weight-light">Total projects</h4>
                            <h4 class="subtitle-1 font-weight-medium">48</h4>
                        </v-col>
                        <v-col cols="4">
                            <h4 class="subtitle-2 font-weight-light">Projects</h4>
                            <h4 class="subtitle-1 font-weight-medium">40</h4>
                        </v-col>
                        <v-col cols="4">
                            <h4 class="subtitle-2 font-weight-light">Clients</h4>
                            <h4 class="subtitle-1 font-weight-medium">18</h4>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-col cols="4">
                <v-card flat>
                    <v-row class="pb-16 text-left" no-gutters>
                        <v-col cols="7"></v-col>
                        <v-col cols="5">
                            <v-btn class="mt-8 ml-8" color="primary" small>
                                <v-icon
                                        small
                                        v-text="icons.mdiCog"
                                        class="mr-2"
                                ></v-icon>
                                Settings
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col class="pa-3" cols="4">
                <v-row no-gutters>
                    <v-col cols="12">
                        <v-card flat color="#cfd6f6" class="primary--text welcome-title" style="word-break: normal">
                            <v-row>
                                <v-col cols="6" class="ma-4 mb-0 pt-0">
                                    <h3 class="ma-0 subtitle-1 font-weight-medium">Welcome Back !</h3>
                                    <h4 class="ma-0 subtitle-2 font-weight-regular">Skote Dashboard</h4>
                                    <ul class="mt-6 pl-4 subtitle-2 font-weight-regular">
                                        <li>7 + Layouts</li>
                                        <li>Multiple apps</li>
                                    </ul>
                                </v-col>
                                <v-col class="mt-14 ml-5 pa-0" cols="4">
                                    <v-img src="@/assets/profile-img.png" width="160" height="100"></v-img>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="8">
                <v-container class="pt-0">
                    <v-row>
                        <v-col cols="4">
                            <v-card flat>
                                <v-row no-gutters class="pa-5 pb-0">
                                    <v-col cols="12">
                                        <v-row no-gutters>
                                            <v-col cols="2">
                                                <v-sheet color="#d4dbf9" class="rounded-circle mr-0" width="35" height="35">
                                                    <v-icon
                                                            v-text="icons.mdiTextBoxMultipleOutline"
                                                            color="#556ee6"
                                                            size="18"
                                                            class="ma-2"
                                                    ></v-icon>
                                                </v-sheet>
                                            </v-col>
                                            <v-col cols="8" >
                                                <h6 class="subtitle-1 mt-1 ml-3 font-weight-medium">Orders</h6>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" class="mt-5">
                                        <h4 class="title font-weight-bold d-inline-block" style="vertical-align: middle">1,452</h4>
                                        <v-icon
                                                v-text="icons.mdiChevronUp"
                                                color="#34c38f"
                                                class="ml-2"
                                        ></v-icon>
                                    </v-col>
                                </v-row>

                                <v-row no-gutters class="pa-5 pt-1">
                                    <v-col cols="12">
                                        <v-sheet class="rounded-lg d-inline-block" color="#daf4eb">
                                            <h5 class="font-weight-regular pl-2 pr-2 green--text">+ 0.2%</h5>
                                        </v-sheet>
                                        <h4 class="subtitle-2 font-weight-light d-inline-block ml-2">From previous period</h4>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                        <v-col cols="4">
                            <v-card flat>
                                <v-row no-gutters class="pa-5 pb-0">
                                    <v-col cols="12">
                                        <v-row no-gutters>
                                            <v-col cols="2">
                                                <v-sheet color="#d4dbf9" class="rounded-circle mr-0" width="35" height="35">
                                                    <v-icon
                                                            v-text="icons.mdiPackageDown"
                                                            color="#556ee6"
                                                            size="19"
                                                            class="ma-2"
                                                    ></v-icon>
                                                </v-sheet>
                                            </v-col>
                                            <v-col cols="8" >
                                                <h6 class="subtitle-1 mt-1 ml-3 font-weight-medium">Revenue</h6>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" class="mt-5">
                                        <h4 class="title font-weight-bold d-inline-block" style="vertical-align: middle">$ 28,452</h4>
                                        <v-icon
                                                v-text="icons.mdiChevronUp"
                                                color="#34c38f"
                                                class="ml-2"
                                        ></v-icon>
                                    </v-col>
                                </v-row>

                                <v-row no-gutters class="pa-5 pt-1">
                                    <v-col cols="12">
                                        <v-sheet class="rounded-lg d-inline-block" color="#daf4eb">
                                            <h5 class="font-weight-regular pl-2 pr-2 green--text">+ 0.2%</h5>
                                        </v-sheet>
                                        <h4 class="subtitle-2 font-weight-light d-inline-block ml-2">From previous period</h4>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                        <v-col cols="4">
                            <v-card flat>
                                <v-row no-gutters class="pa-5 pb-0">
                                    <v-col cols="12">
                                        <v-row no-gutters>
                                            <v-col cols="2">
                                                <v-sheet color="#d4dbf9" class="rounded-circle mr-0" width="35" height="35">
                                                    <v-icon
                                                            v-text="icons.mdiTagOutline"
                                                            color="#556ee6"
                                                            size="20"
                                                            class="ma-2"
                                                    ></v-icon>
                                                </v-sheet>
                                            </v-col>
                                            <v-col cols="8" >
                                                <h6 class="subtitle-1 mt-1 ml-3 font-weight-medium">Average Price</h6>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" class="mt-5">
                                        <h4 class="title font-weight-bold d-inline-block" style="vertical-align: middle">$ 16.2</h4>
                                        <v-icon
                                                v-text="icons.mdiChevronUp"
                                                color="#34c38f"
                                                class="ml-2"
                                        ></v-icon>
                                    </v-col>
                                </v-row>

                                <v-row no-gutters class="pa-5 pt-1">
                                    <v-col cols="12">
                                        <v-sheet class="rounded-lg d-inline-block" color="#fcf1df">
                                            <h5 class="font-weight-regular pl-2 pr-2 orange--text">0%</h5>
                                        </v-sheet>
                                        <h4 class="subtitle-2 font-weight-light d-inline-block ml-2">From previous period</h4>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>

        <v-row no-gutters>
            <v-row class="pa-5">
                <v-col cols="8" class="pa-3 pl-1">
                    <v-card flat>
                        <h2>Earning</h2>
                    </v-card>
                </v-col>
                <v-col cols="4" class="pa-3 pr-1">
                    <v-card flat>
                        <h2>Sales Analytics</h2>
                    </v-card>
                </v-col>
            </v-row>
        </v-row>

        <v-row no-gutters>
            <v-row class="pa-5">
                <v-col cols="4" class="pa-3 pl-1">
                    <v-card flat>
                        <v-row no-gutters class="pa-3 pb-0">
                            <v-col cols="12">
                                <v-row no-gutters>
                                    <v-col cols="8">
                                        <h3 class="subtitle-1 mt-1 ml-3 font-weight-medium">Top Selling product</h3>
                                    </v-col>
                                    <v-col cols="2">
                                        <h4>calendar</h4>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="12" class="mt-5" align="center">
                                <h4 class="subtitle-2  font-weight-light">Product A</h4>
                                <h3 class="title font-weight-bold">$ 6385</h3>
                            </v-col>
                        </v-row>

                        <v-row no-gutters class="pa-5">
                            <v-col cols="12" align="center">
                                <v-sheet class="rounded-lg d-inline-block" color="#daf4eb">
                                    <h5 class="font-weight-regular pl-2 pr-1 green--text">
                                        0.6%
                                        <v-icon
                                                small
                                                v-text="icons.mdiArrowUp"
                                                color="green"
                                        ></v-icon>
                                    </h5>
                                </v-sheet>
                                <h4 class="subtitle-2 font-weight-light d-inline-block ml-2">From previous period</h4>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="pl-5 pr-5">
                            <v-col class="pl-5 pr-5" cols="12" style="border-top: 1px solid #edf0f6">
                                <v-row>
                                    <v-col cols="7">
                                        <h4 class="subtitle-2 font-weight-medium mt-2">Product A</h4>
                                        <h3 class="subtitle-2 font-weight-light">Neque quis est</h3>
                                    </v-col>
                                    <v-col cols="5">
                                        <v-progress-circular :value="37" color="#556ee6" rotate="-90" size="45" width="6" style="position: relative; bottom: 14px"></v-progress-circular>
                                        <div class="d-inline-block pl-10">
                                            <h4 class="subtitle-2 font-weight-light mt-2">Sales</h4>
                                            <h3 class="subtitle-1 font-weight-medium">37 %</h3>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="pl-5 pr-5">
                            <v-col class="pl-5 pr-5" cols="12" style="border-top: 1px solid #edf0f6">
                                <v-row>
                                    <v-col cols="7">
                                        <h4 class="subtitle-2 font-weight-medium mt-2">Product B</h4>
                                        <h3 class="subtitle-2 font-weight-light">Quis autem iure</h3>
                                    </v-col>
                                    <v-col cols="5">
                                        <v-progress-circular :value="72" color="#34c38f" rotate="-90" size="45" width="6" style="position: relative; bottom: 14px"></v-progress-circular>
                                        <div class="d-inline-block pl-10">
                                            <h4 class="subtitle-2 font-weight-light mt-2">Sales</h4>
                                            <h3 class="subtitle-1 font-weight-medium">72 %</h3>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="pl-5 pr-5">
                            <v-col class="pl-5 pr-5" cols="12" style="border-top: 1px solid #edf0f6">
                                <v-row>
                                    <v-col cols="7">
                                        <h4 class="subtitle-2 font-weight-medium mt-2">Product C</h4>
                                        <h3 class="subtitle-2 font-weight-light">Sed aliquam mauris.</h3>
                                    </v-col>
                                    <v-col cols="5">
                                        <v-progress-circular :value="54" color="#f46a6a" rotate="-90" size="45" width="6" style="position: relative; bottom: 14px"></v-progress-circular>
                                        <div class="d-inline-block pl-10">
                                            <h4 class="subtitle-2 font-weight-light mt-2">Sales</h4>
                                            <h3 class="subtitle-1 font-weight-medium">54 %</h3>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col cols="4" class="pa-3">
                    <v-card flat>
                        <h2>Tasks</h2>
                    </v-card>
                </v-col>
                <v-col cols="4" class="pa-3 pr-1">
                    <v-card flat>
                        <h2>Chat</h2>
                    </v-card>
                </v-col>
            </v-row>
        </v-row>
    </v-container>
</template>

<script>
    import { mdiCog, mdiTextBoxMultipleOutline, mdiPackageDown, mdiTagOutline, mdiChevronUp, mdiArrowUp } from "@mdi/js";

    export default {
    name: "SaasDashboard",

    data: () => ({
        icons: {
            mdiCog,
            mdiTextBoxMultipleOutline,
            mdiPackageDown,
            mdiTagOutline,
            mdiChevronUp,
            mdiArrowUp
        },
    }),
};
</script>
