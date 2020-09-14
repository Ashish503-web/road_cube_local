<template>
    <v-container fluid class="py-0" style="background: #f8f8fb">
        <v-card-title class="pl-3 pb-2 subtitle-1 font-weight-medium"
            >SAAS</v-card-title
        >

        <v-row no-gutters class="pa-3" cols="12">
            <v-col cols="4">
                <v-card flat>
                    <v-row class="pa-3">
                        <v-col class="ml-3" cols="2">
                            <v-sheet
                                class="avatar-wrapper"
                                width="72"
                                height="72"
                            >
                                <v-avatar size="70">
                                    <v-img
                                        src="@/assets/avatars/avatar-1.jpg"
                                        style="border: 5px solid #f8f8fb"
                                    ></v-img>
                                </v-avatar>
                            </v-sheet>
                        </v-col>
                        <v-col class="ml-3" cols="8">
                            <h6 class="subtitle-2 font-weight-light">
                                Welcome to skote dashboard
                            </h6>
                            <h4 class="subtitle-1 font-weight-medium">
                                Henry Price
                            </h4>
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
                            <h4 class="subtitle-2 font-weight-light">
                                Total projects
                            </h4>
                            <h4 class="subtitle-1 font-weight-medium">48</h4>
                        </v-col>
                        <v-col cols="4">
                            <h4 class="subtitle-2 font-weight-light">
                                Projects
                            </h4>
                            <h4 class="subtitle-1 font-weight-medium">40</h4>
                        </v-col>
                        <v-col cols="4">
                            <h4 class="subtitle-2 font-weight-light">
                                Clients
                            </h4>
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
                            <v-btn
                                class="mt-8 ml-8 text-caption text-capitalize"
                                color="primary"
                                small
                            >
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
                        <v-card
                            flat
                            color="#cfd6f6"
                            class="primary--text welcome-title"
                            style="word-break: normal"
                        >
                            <v-row>
                                <v-col cols="6" class="ma-4 mb-0 pt-0">
                                    <h3
                                        class="ma-0 subtitle-1 font-weight-medium"
                                    >
                                        Welcome Back !
                                    </h3>
                                    <h4
                                        class="ma-0 subtitle-2 font-weight-regular"
                                    >
                                        Skote Dashboard
                                    </h4>
                                    <ul
                                        class="mt-6 pl-4 subtitle-2 font-weight-regular"
                                    >
                                        <li>7 + Layouts</li>
                                        <li>Multiple apps</li>
                                    </ul>
                                </v-col>
                                <v-col class="mt-14 ml-5 pa-0" cols="4">
                                    <v-img
                                        src="@/assets/profile-img.png"
                                        width="160"
                                        height="100"
                                    ></v-img>
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
                                                <v-sheet
                                                    color="#d4dbf9"
                                                    class="rounded-circle mr-0"
                                                    width="35"
                                                    height="35"
                                                >
                                                    <v-icon
                                                        v-text="
                                                            icons.mdiTextBoxMultipleOutline
                                                        "
                                                        color="#556ee6"
                                                        size="18"
                                                        class="ma-2"
                                                    ></v-icon>
                                                </v-sheet>
                                            </v-col>
                                            <v-col cols="8">
                                                <h6
                                                    class="subtitle-1 mt-1 ml-3 font-weight-medium"
                                                >
                                                    Orders
                                                </h6>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" class="mt-5">
                                        <h4
                                            class="title font-weight-bold d-inline-block"
                                            style="vertical-align: middle"
                                        >
                                            1,452
                                        </h4>
                                        <v-icon
                                            v-text="icons.mdiChevronUp"
                                            color="#34c38f"
                                            class="ml-2"
                                        ></v-icon>
                                    </v-col>
                                </v-row>

                                <v-row no-gutters class="pa-5 pt-1">
                                    <v-col cols="12">
                                        <v-sheet
                                            class="rounded-lg d-inline-block"
                                            color="#daf4eb"
                                        >
                                            <h5
                                                class="font-weight-regular pl-2 pr-2 green--text"
                                            >
                                                + 0.2%
                                            </h5>
                                        </v-sheet>
                                        <h4
                                            class="subtitle-2 font-weight-light d-inline-block ml-2"
                                        >
                                            From previous period
                                        </h4>
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
                                                <v-sheet
                                                    color="#d4dbf9"
                                                    class="rounded-circle mr-0"
                                                    width="35"
                                                    height="35"
                                                >
                                                    <v-icon
                                                        v-text="
                                                            icons.mdiPackageDown
                                                        "
                                                        color="#556ee6"
                                                        size="19"
                                                        class="ma-2"
                                                    ></v-icon>
                                                </v-sheet>
                                            </v-col>
                                            <v-col cols="8">
                                                <h6
                                                    class="subtitle-1 mt-1 ml-3 font-weight-medium"
                                                >
                                                    Revenue
                                                </h6>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" class="mt-5">
                                        <h4
                                            class="title font-weight-bold d-inline-block"
                                            style="vertical-align: middle"
                                        >
                                            $ 28,452
                                        </h4>
                                        <v-icon
                                            v-text="icons.mdiChevronUp"
                                            color="#34c38f"
                                            class="ml-2"
                                        ></v-icon>
                                    </v-col>
                                </v-row>

                                <v-row no-gutters class="pa-5 pt-1">
                                    <v-col cols="12">
                                        <v-sheet
                                            class="rounded-lg d-inline-block"
                                            color="#daf4eb"
                                        >
                                            <h5
                                                class="font-weight-regular pl-2 pr-2 green--text"
                                            >
                                                + 0.2%
                                            </h5>
                                        </v-sheet>
                                        <h4
                                            class="subtitle-2 font-weight-light d-inline-block ml-2"
                                        >
                                            From previous period
                                        </h4>
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
                                                <v-sheet
                                                    color="#d4dbf9"
                                                    class="rounded-circle mr-0"
                                                    width="35"
                                                    height="35"
                                                >
                                                    <v-icon
                                                        v-text="
                                                            icons.mdiTagOutline
                                                        "
                                                        color="#556ee6"
                                                        size="20"
                                                        class="ma-2"
                                                    ></v-icon>
                                                </v-sheet>
                                            </v-col>
                                            <v-col cols="8">
                                                <h6
                                                    class="subtitle-1 mt-1 ml-3 font-weight-medium"
                                                >
                                                    Average Price
                                                </h6>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" class="mt-5">
                                        <h4
                                            class="title font-weight-bold d-inline-block"
                                            style="vertical-align: middle"
                                        >
                                            $ 16.2
                                        </h4>
                                        <v-icon
                                            v-text="icons.mdiChevronUp"
                                            color="#34c38f"
                                            class="ml-2"
                                        ></v-icon>
                                    </v-col>
                                </v-row>

                                <v-row no-gutters class="pa-5 pt-1">
                                    <v-col cols="12">
                                        <v-sheet
                                            class="rounded-lg d-inline-block"
                                            color="#fcf1df"
                                        >
                                            <h5
                                                class="font-weight-regular pl-2 pr-2 orange--text"
                                            >
                                                0%
                                            </h5>
                                        </v-sheet>
                                        <h4
                                            class="subtitle-2 font-weight-light d-inline-block ml-2"
                                        >
                                            From previous period
                                        </h4>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>

        <v-row no-gutters>
            <v-row class="pl-5 pr-5">
                <v-col cols="8" class="pa-3 pl-1 pt-0">
                    <v-card flat>
                        <v-row no-gutters class="pa-3">
                            <v-col cols="4">
                                <h3
                                    class="subtitle-1 mt-1 ml-3 font-weight-medium"
                                >
                                    Earning
                                </h3>
                                <h4
                                    class="subtitle-2 mt-4 ml-3 font-weight-light"
                                >
                                    This month
                                </h4>
                                <h3 class="title mt-2 ml-3 font-weight-medium">
                                    $2453.35
                                </h3>
                                <v-sheet
                                    class="rounded-lg d-inline-block ml-3"
                                    color="#daf4eb"
                                >
                                    <h5
                                        class="font-weight-regular pl-2 pr-2 green--text"
                                    >
                                        + 0.2%
                                    </h5>
                                </v-sheet>
                                <h4
                                    class="subtitle-2 font-weight-light d-inline-block ml-2"
                                >
                                    From previous period
                                </h4>
                                <v-btn
                                    class="mt-6 ml-3 pl-5 text-caption text-capitalize"
                                    color="primary"
                                    width="100"
                                    small
                                >
                                    view details
                                    <v-icon
                                        class="body-2"
                                        v-text="icons.mdiChevronRight"
                                        small
                                    ></v-icon>
                                </v-btn>
                                <h4
                                    class="subtitle-2 mt-6 ml-3 font-weight-light"
                                >
                                    Last month
                                </h4>
                                <h4
                                    class="subtitle-1 mt-1 ml-3 font-weight-medium"
                                >
                                    $2281.04
                                </h4>
                            </v-col>
                            <v-col cols="8">
                                <v-row no-gutters class="mt-2">
                                    <v-col cols="8"></v-col>
                                    <v-col cols="2" class="pl-5">
                                        <v-menu
                                            offset-y
                                            transition="slide-y-transition"
                                            bottom
                                            class="d-inline-block"
                                        >
                                            <template v-slot:activator="{ on }">
                                                <v-btn
                                                    class="text-capitalize font-weight-regular pa-0 pl-1"
                                                    text
                                                    v-on="on"
                                                    style="border: 1px solid #b6b6b6; border-right: none; width: 55px; height: 30px; border-radius: 5px 0 0 5px; font-size: 0.875rem"
                                                >
                                                    {{ months.month }}
                                                    <v-icon
                                                        v-text="
                                                            icons.mdiUnfoldMoreHorizontal
                                                        "
                                                    ></v-icon>
                                                </v-btn>
                                            </template>

                                            <v-list dense border="1">
                                                <v-list-item-group
                                                    v-model="months.month"
                                                >
                                                    <v-list-item
                                                        v-for="month in months.items"
                                                        :key="month.title"
                                                        :value="month.title"
                                                    >
                                                        <v-list-item-title
                                                            v-text="month.title"
                                                        ></v-list-item-title>
                                                    </v-list-item>
                                                </v-list-item-group>
                                            </v-list>
                                        </v-menu>
                                        <v-card
                                            flat
                                            outlined
                                            class="pa-1 pl-1 pr-2"
                                            color="#eff2f7"
                                            border="1"
                                            align="center"
                                            style="border: 1px solid #b6b6b6; border-left: none; height: 30px; border-radius: 0 5px 5px 0; font-size: 0.875rem;position: relative; bottom: 30px; left: 55px"
                                            >Month</v-card
                                        >
                                    </v-col>
                                </v-row>
                                <v-sparkline
                                    height="160"
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
                                    :show-labels="showLabels"
                                    :label-size="labelSize"
                                ></v-sparkline>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col cols="4" class="pa-3 pr-1 pt-0">
                    <v-card flat>
                        <v-row no-gutters class="pa-3">
                            <h3 class="subtitle-1 mt-1 ml-3 font-weight-medium">
                                Sales Analytics
                            </h3>
                        </v-row>
                        <v-row no-gutters class="pa-3 mt-3">
                            <v-col cols="12" align="center">
                                <v-progress-circular
                                    :value="46.7"
                                    color="#556ee6"
                                    rotate="-90"
                                    size="200"
                                    width="25"
                                ></v-progress-circular>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="pa-3 mt-5 pb-5">
                            <v-col cols="4" align="center">
                                <h4 class="subtitle-2  font-weight-light">
                                    <v-icon
                                        color="#556ee6"
                                        v-text="icons.mdiCheckboxBlankCircle"
                                        small
                                    ></v-icon>
                                    Product A
                                </h4>
                                <h3 class="subtitle-1 font-weight-medium">
                                    $ 2,132
                                </h3>
                            </v-col>
                            <v-col cols="4" align="center">
                                <h4 class="subtitle-2  font-weight-light">
                                    <v-icon
                                        color="#34c38f"
                                        v-text="icons.mdiCheckboxBlankCircle"
                                        small
                                    ></v-icon>
                                    Product B
                                </h4>
                                <h3 class="subtitle-1 font-weight-medium">
                                    $ 1,763
                                </h3>
                            </v-col>
                            <v-col cols="4" align="center">
                                <h4 class="subtitle-2  font-weight-light">
                                    <v-icon
                                        color="#f46a6a"
                                        v-text="icons.mdiCheckboxBlankCircle"
                                        small
                                    ></v-icon>
                                    Product C
                                </h4>
                                <h3 class="subtitle-1 font-weight-medium">
                                    $ 973
                                </h3>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-row>

        <v-row no-gutters>
            <v-row class="pl-5 pr-5">
                <v-col cols="4" class="pa-3 pl-1">
                    <v-card flat>
                        <v-row no-gutters class="pa-3 pb-0">
                            <v-col cols="12">
                                <v-row no-gutters>
                                    <v-col cols="8">
                                        <h3
                                            class="subtitle-1 mt-1 ml-3 font-weight-medium"
                                        >
                                            Top Selling product
                                        </h3>
                                    </v-col>
                                    <v-col cols="2">
                                        <v-row no-gutters class="mt-2">
                                            <v-menu
                                                offset-y
                                                transition="slide-y-transition"
                                                bottom
                                                class="d-inline-block"
                                            >
                                                <template
                                                    v-slot:activator="{ on }"
                                                >
                                                    <v-btn
                                                        class="text-capitalize font-weight-regular pa-0 pl-1"
                                                        text
                                                        v-on="on"
                                                        style="border: 1px solid #b6b6b6; border-right: none; width: 55px; height: 30px; border-radius: 5px 0 0 5px; font-size: 0.875rem"
                                                    >
                                                        {{ months.month }}
                                                        <v-icon
                                                            v-text="
                                                                icons.mdiUnfoldMoreHorizontal
                                                            "
                                                        ></v-icon>
                                                    </v-btn>
                                                </template>

                                                <v-list dense border="1">
                                                    <v-list-item-group
                                                        v-model="months.month"
                                                    >
                                                        <v-list-item
                                                            v-for="month in months.items"
                                                            :key="month.title"
                                                            :value="month.title"
                                                        >
                                                            <v-list-item-title
                                                                v-text="
                                                                    month.title
                                                                "
                                                            ></v-list-item-title>
                                                        </v-list-item>
                                                    </v-list-item-group>
                                                </v-list>
                                            </v-menu>
                                            <v-card
                                                flat
                                                outlined
                                                class="pa-1 pl-2 pr-2"
                                                color="#eff2f7"
                                                border="1"
                                                align="center"
                                                style="border: 1px solid #b6b6b6; border-left: none; height: 30px; border-radius: 0 5px 5px 0; font-size: 0.875rem;position: relative; bottom: 30px; left: 55px"
                                                >Month</v-card
                                            >
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="12" class="mt-5" align="center">
                                <h4 class="subtitle-2  font-weight-light">
                                    Product A
                                </h4>
                                <h3 class="title font-weight-bold">$ 6385</h3>
                            </v-col>
                        </v-row>

                        <v-row no-gutters class="pa-5">
                            <v-col cols="12" align="center">
                                <v-sheet
                                    class="rounded-lg d-inline-block"
                                    color="#daf4eb"
                                >
                                    <h5
                                        class="font-weight-regular pl-2 pr-1 green--text"
                                    >
                                        0.6%
                                        <v-icon
                                            small
                                            v-text="icons.mdiArrowUp"
                                            color="green"
                                        ></v-icon>
                                    </h5>
                                </v-sheet>
                                <h4
                                    class="subtitle-2 font-weight-light d-inline-block ml-2"
                                >
                                    From previous period
                                </h4>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="pl-5 pr-5">
                            <v-col
                                class="pl-5 pr-5"
                                cols="12"
                                style="border-top: 1px solid #edf0f6"
                            >
                                <v-row>
                                    <v-col cols="7">
                                        <h4
                                            class="subtitle-2 font-weight-medium mt-2"
                                        >
                                            Product A
                                        </h4>
                                        <h3
                                            class="subtitle-2 font-weight-light"
                                        >
                                            Neque quis est
                                        </h3>
                                    </v-col>
                                    <v-col cols="5">
                                        <v-progress-circular
                                            :value="37"
                                            color="#556ee6"
                                            rotate="-90"
                                            size="45"
                                            width="6"
                                            style="position: relative; bottom: 14px"
                                        ></v-progress-circular>
                                        <div class="d-inline-block pl-9">
                                            <h4
                                                class="subtitle-2 font-weight-light mt-2"
                                            >
                                                Sales
                                            </h4>
                                            <h3
                                                class="subtitle-1 font-weight-medium"
                                            >
                                                37 %
                                            </h3>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="pl-5 pr-5">
                            <v-col
                                class="pl-5 pr-5"
                                cols="12"
                                style="border-top: 1px solid #edf0f6"
                            >
                                <v-row>
                                    <v-col cols="7">
                                        <h4
                                            class="subtitle-2 font-weight-medium mt-2"
                                        >
                                            Product B
                                        </h4>
                                        <h3
                                            class="subtitle-2 font-weight-light"
                                        >
                                            Quis autem iure
                                        </h3>
                                    </v-col>
                                    <v-col cols="5">
                                        <v-progress-circular
                                            :value="72"
                                            color="#34c38f"
                                            rotate="-90"
                                            size="45"
                                            width="6"
                                            style="position: relative; bottom: 14px"
                                        ></v-progress-circular>
                                        <div class="d-inline-block pl-9">
                                            <h4
                                                class="subtitle-2 font-weight-light mt-2"
                                            >
                                                Sales
                                            </h4>
                                            <h3
                                                class="subtitle-1 font-weight-medium"
                                            >
                                                72 %
                                            </h3>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="pl-5 pr-5">
                            <v-col
                                class="pl-5 pr-5"
                                cols="12"
                                style="border-top: 1px solid #edf0f6"
                            >
                                <v-row>
                                    <v-col cols="7">
                                        <h4
                                            class="subtitle-2 font-weight-medium mt-2"
                                        >
                                            Product C
                                        </h4>
                                        <h3
                                            class="subtitle-2 font-weight-light"
                                        >
                                            Sed aliquam mauris.
                                        </h3>
                                    </v-col>
                                    <v-col cols="5">
                                        <v-progress-circular
                                            :value="54"
                                            color="#f46a6a"
                                            rotate="-90"
                                            size="45"
                                            width="6"
                                            style="position: relative; bottom: 14px"
                                        ></v-progress-circular>
                                        <div class="d-inline-block pl-9">
                                            <h4
                                                class="subtitle-2 font-weight-light mt-2"
                                            >
                                                Sales
                                            </h4>
                                            <h3
                                                class="subtitle-1 font-weight-medium"
                                            >
                                                54 %
                                            </h3>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col cols="4" class="pa-3">
                    <v-card flat>
                        <v-row no-gutters class="pa-3 pb-0">
                            <h3 class="subtitle-1 mt-1 ml-3 font-weight-medium">
                                Tasks
                            </h3>
                            <v-tabs class="mt-2">
                                <v-tab class="text-capitalize"
                                    >In Process</v-tab
                                >
                                <v-tab class="text-capitalize">Upcoming</v-tab>
                            </v-tabs>
                            <v-card
                                flat
                                width="100%"
                                max-height="400px"
                                class="tasks"
                            >
                                <v-row
                                    no-gutters
                                    class="mt-5"
                                    style="border-top: 1px solid #edf0f6"
                                >
                                    <v-col class="pl-5 pr-5" cols="2">
                                        <v-checkbox></v-checkbox>
                                    </v-col>
                                    <v-col cols="8">
                                        <h4
                                            class="subtitle-2 font-weight-medium mt-2"
                                        >
                                            Skote Saas Dashboard
                                        </h4>
                                        <h3
                                            class="subtitle-2 font-weight-light"
                                        >
                                            Assigned to Mark
                                        </h3>
                                    </v-col>
                                    <v-col cols="1" class="mt-4">
                                        <v-icon
                                            v-text="icons.mdiPencilOutline"
                                            color="green"
                                        ></v-icon>
                                    </v-col>
                                    <v-col cols="1" class="mt-4">
                                        <v-icon
                                            v-text="icons.mdiDelete"
                                            color="red"
                                        ></v-icon>
                                    </v-col>
                                </v-row>
                                <v-row
                                    no-gutters
                                    class=""
                                    style="border-top: 1px solid #edf0f6"
                                >
                                    <v-col class="pl-5 pr-5" cols="2">
                                        <v-checkbox></v-checkbox>
                                    </v-col>
                                    <v-col cols="8">
                                        <h4
                                            class="subtitle-2 font-weight-medium mt-2"
                                        >
                                            Skote Saas Dashboard
                                        </h4>
                                        <h3
                                            class="subtitle-2 font-weight-light"
                                        >
                                            Assigned to Mark
                                        </h3>
                                    </v-col>
                                    <v-col cols="1" class="mt-4">
                                        <v-icon
                                            v-text="icons.mdiPencilOutline"
                                            color="green"
                                        ></v-icon>
                                    </v-col>
                                    <v-col cols="1" class="mt-4">
                                        <v-icon
                                            v-text="icons.mdiDelete"
                                            color="red"
                                        ></v-icon>
                                    </v-col>
                                </v-row>
                                <v-row
                                    no-gutters
                                    class=""
                                    style="border-top: 1px solid #edf0f6"
                                >
                                    <v-col class="pl-5 pr-5" cols="2">
                                        <v-checkbox></v-checkbox>
                                    </v-col>
                                    <v-col cols="8">
                                        <h4
                                            class="subtitle-2 font-weight-medium mt-2"
                                        >
                                            Skote Saas Dashboard
                                        </h4>
                                        <h3
                                            class="subtitle-2 font-weight-light"
                                        >
                                            Assigned to Mark
                                        </h3>
                                    </v-col>
                                    <v-col cols="1" class="mt-4">
                                        <v-icon
                                            v-text="icons.mdiPencilOutline"
                                            color="green"
                                        ></v-icon>
                                    </v-col>
                                    <v-col cols="1" class="mt-4">
                                        <v-icon
                                            v-text="icons.mdiDelete"
                                            color="red"
                                        ></v-icon>
                                    </v-col>
                                </v-row>
                                <v-row
                                    no-gutters
                                    class=""
                                    style="border-top: 1px solid #edf0f6"
                                >
                                    <v-col class="pl-5 pr-5" cols="2">
                                        <v-checkbox></v-checkbox>
                                    </v-col>
                                    <v-col cols="8">
                                        <h4
                                            class="subtitle-2 font-weight-medium mt-2"
                                        >
                                            Skote Saas Dashboard
                                        </h4>
                                        <h3
                                            class="subtitle-2 font-weight-light"
                                        >
                                            Assigned to Mark
                                        </h3>
                                    </v-col>
                                    <v-col cols="1" class="mt-4">
                                        <v-icon
                                            v-text="icons.mdiPencilOutline"
                                            color="green"
                                        ></v-icon>
                                    </v-col>
                                    <v-col cols="1" class="mt-4">
                                        <v-icon
                                            v-text="icons.mdiDelete"
                                            color="red"
                                        ></v-icon>
                                    </v-col>
                                </v-row>
                                <v-row
                                    no-gutters
                                    class=""
                                    style="border-top: 1px solid #edf0f6"
                                >
                                    <v-col class="pl-5 pr-5" cols="2">
                                        <v-checkbox></v-checkbox>
                                    </v-col>
                                    <v-col cols="8">
                                        <h4
                                            class="subtitle-2 font-weight-medium mt-2"
                                        >
                                            Skote Saas Dashboard
                                        </h4>
                                        <h3
                                            class="subtitle-2 font-weight-light"
                                        >
                                            Assigned to Mark
                                        </h3>
                                    </v-col>
                                    <v-col cols="1" class="mt-4">
                                        <v-icon
                                            v-text="icons.mdiPencilOutline"
                                            color="green"
                                        ></v-icon>
                                    </v-col>
                                    <v-col cols="1" class="mt-4">
                                        <v-icon
                                            v-text="icons.mdiDelete"
                                            color="red"
                                        ></v-icon>
                                    </v-col>
                                </v-row>
                                <v-row
                                    no-gutters
                                    class=""
                                    style="border-top: 1px solid #edf0f6"
                                >
                                    <v-col class="pl-5 pr-5" cols="2">
                                        <v-checkbox></v-checkbox>
                                    </v-col>
                                    <v-col cols="8">
                                        <h4
                                            class="subtitle-2 font-weight-medium mt-2"
                                        >
                                            Skote Saas Dashboard
                                        </h4>
                                        <h3
                                            class="subtitle-2 font-weight-light"
                                        >
                                            Assigned to Mark
                                        </h3>
                                    </v-col>
                                    <v-col cols="1" class="mt-4">
                                        <v-icon
                                            v-text="icons.mdiPencilOutline"
                                            color="green"
                                        ></v-icon>
                                    </v-col>
                                    <v-col cols="1" class="mt-4">
                                        <v-icon
                                            v-text="icons.mdiDelete"
                                            color="red"
                                        ></v-icon>
                                    </v-col>
                                </v-row>
                                <v-row
                                    no-gutters
                                    class=""
                                    style="border-top: 1px solid #edf0f6"
                                >
                                    <v-col class="pl-5 pr-5" cols="2">
                                        <v-checkbox></v-checkbox>
                                    </v-col>
                                    <v-col cols="8">
                                        <h4
                                            class="subtitle-2 font-weight-medium mt-2"
                                        >
                                            Skote Saas Dashboard
                                        </h4>
                                        <h3
                                            class="subtitle-2 font-weight-light"
                                        >
                                            Assigned to Mark
                                        </h3>
                                    </v-col>
                                    <v-col cols="1" class="mt-4">
                                        <v-icon
                                            v-text="icons.mdiPencilOutline"
                                            color="green"
                                        ></v-icon>
                                    </v-col>
                                    <v-col cols="1" class="mt-4">
                                        <v-icon
                                            v-text="icons.mdiDelete"
                                            color="red"
                                        ></v-icon>
                                    </v-col>
                                </v-row>
                            </v-card>
                            <v-row
                                style="border-top: 1px solid #edf0f6"
                                class="mt-5"
                            >
                                <v-col cols="12" align="center">
                                    <v-btn
                                        color="#556ee6"
                                        class="white--text text-capitalize"
                                        >Add new task</v-btn
                                    >
                                </v-col>
                            </v-row>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col cols="4" class="pa-3 pr-1">
                    <v-card flat>
                        <v-row no-gutters class="pa-3 pt-0">
                            <v-row
                                style="border-bottom: 1px solid #edf0f6"
                                class="pa-3"
                            >
                                <v-col cols="8" class="pt-1 pb-1">
                                    <h3 class="subtitle-1 font-weight-medium">
                                        Steven Franklin
                                    </h3>
                                    <h4 class="subtitle-2  font-weight-light">
                                        <v-icon
                                            color="#34c38f"
                                            v-text="
                                                icons.mdiCheckboxBlankCircle
                                            "
                                            small
                                        ></v-icon>
                                        Active now
                                    </h4>
                                </v-col>
                                <v-col cols="4" class="pr-3 pa-0">
                                    <v-row>
                                        <v-col cols="4" class="pa-0 pt-3">
                                            <v-sheet
                                                color="#eff2f7"
                                                class="rounded-circle mr-0"
                                                width="35"
                                                height="35"
                                            >
                                                <v-icon
                                                    v-text="icons.mdiMagnify"
                                                    color="#495057"
                                                    size="19"
                                                    class="ma-2"
                                                ></v-icon>
                                            </v-sheet>
                                        </v-col>
                                        <v-col cols="4" class="pa-0 pt-3">
                                            <v-sheet
                                                color="#eff2f7"
                                                class="rounded-circle"
                                                width="35"
                                                height="35"
                                            >
                                                <v-icon
                                                    v-text="icons.mdiCog"
                                                    color="#495057"
                                                    size="19"
                                                    class="ma-2"
                                                ></v-icon>
                                            </v-sheet>
                                        </v-col>
                                        <v-col cols="4" class="pa-0 pt-3">
                                            <v-sheet
                                                color="#eff2f7"
                                                class="rounded-circle"
                                                width="35"
                                                height="35"
                                            >
                                                <v-icon
                                                    v-text="
                                                        icons.mdiDotsHorizontal
                                                    "
                                                    color="#495057"
                                                    size="19"
                                                    class="ma-2"
                                                ></v-icon>
                                            </v-sheet>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-row>
                        <v-row no-gutters class="pa-3 pt-0">
                            <v-row
                                style="border-bottom: 1px solid #edf0f6"
                                class="pa-3"
                            >
                                <v-card
                                    flat
                                    width="100%"
                                    max-height="410px"
                                    class="pa-3 pt-0 chat"
                                >
                                    <v-row no-gutters class="pb-5">
                                        <hr
                                            width="35%"
                                            color="#eff2f7"
                                            class="mt-3"
                                        />
                                        <h4
                                            class="subtitle-2 font-weight-light ma-auto"
                                        >
                                            Today
                                        </h4>
                                        <hr
                                            width="35%"
                                            color="#eff2f7"
                                            class="mt-3"
                                        />
                                    </v-row>
                                    <v-row no-gutters class="pb-5">
                                        <v-card
                                            color="#eff2f7"
                                            class="pa-7 pt-3 pb-3 d-inline-block"
                                            flat
                                            width="fit-content"
                                            max-width="90%"
                                        >
                                            <h4
                                                class="subtitle-2 font-weight-medium primary--text"
                                            >
                                                Steven Franklin
                                            </h4>
                                            <h4
                                                class="subtitle-2 font-weight-light"
                                                max-width="70%"
                                            >
                                                Hello!
                                            </h4>
                                            <v-icon
                                                small
                                                v-text="icons.mdiClockOutline"
                                            ></v-icon>
                                            <h4
                                                class="subtitle-2 font-weight-light d-inline-block pt-4 pl-1"
                                            >
                                                10:00
                                            </h4>
                                        </v-card>
                                        <v-icon
                                            v-text="icons.mdiDotsVertical"
                                            size="19"
                                        ></v-icon>
                                    </v-row>
                                    <v-row no-gutters class="pb-5" align="end">
                                        <v-icon
                                            v-text="icons.mdiDotsVertical"
                                            size="19"
                                            class="ml-auto"
                                        ></v-icon>
                                        <v-card
                                            color="#eff2f7"
                                            class="pa-7 pt-3 pb-3 d-inline-block"
                                            flat
                                            width="fit-content"
                                            max-width="90%"
                                            align="end"
                                        >
                                            <h4
                                                class="subtitle-2 font-weight-medium primary--text"
                                            >
                                                Henry Wells
                                            </h4>
                                            <h4
                                                class="subtitle-2 font-weight-light"
                                                max-width="70%"
                                            >
                                                Hi, How are you? What about our
                                                next meeting?
                                            </h4>
                                            <v-icon
                                                small
                                                v-text="icons.mdiClockOutline"
                                            ></v-icon>
                                            <h4
                                                class="subtitle-2 font-weight-light d-inline-block pt-4 pl-1"
                                            >
                                                10:02
                                            </h4>
                                        </v-card>
                                    </v-row>
                                    <v-row no-gutters class="pb-5">
                                        <v-card
                                            color="#eff2f7"
                                            class="pa-7 pt-3 pb-3 d-inline-block"
                                            flat
                                            width="fit-content"
                                        >
                                            <h4
                                                class="subtitle-2 font-weight-medium primary--text"
                                            >
                                                Steven Franklin
                                            </h4>
                                            <h4
                                                class="subtitle-2 font-weight-light"
                                            >
                                                Yeah everything is fine
                                            </h4>
                                            <v-icon
                                                small
                                                v-text="icons.mdiClockOutline"
                                            ></v-icon>
                                            <h4
                                                class="subtitle-2 font-weight-light d-inline-block pt-4 pl-1"
                                            >
                                                10:06
                                            </h4>
                                        </v-card>
                                        <v-icon
                                            v-text="icons.mdiDotsVertical"
                                            size="19"
                                        ></v-icon>
                                    </v-row>
                                    <v-row no-gutters class="pb-5">
                                        <v-card
                                            color="#eff2f7"
                                            class="pa-7 pt-3 pb-3 d-inline-block"
                                            flat
                                            width="fit-content"
                                        >
                                            <h4
                                                class="subtitle-2 font-weight-medium primary--text"
                                            >
                                                Steven Franklin
                                            </h4>
                                            <h4
                                                class="subtitle-2 font-weight-light"
                                            >
                                                & Next meeting tomorrow 10.00AM
                                            </h4>
                                            <v-icon
                                                small
                                                v-text="icons.mdiClockOutline"
                                            ></v-icon>
                                            <h4
                                                class="subtitle-2 font-weight-light d-inline-block pt-4 pl-1"
                                            >
                                                10:06
                                            </h4>
                                        </v-card>
                                        <v-icon
                                            v-text="icons.mdiDotsVertical"
                                            size="19"
                                        ></v-icon>
                                    </v-row>
                                    <v-row no-gutters class="pb-5">
                                        <v-icon
                                            v-text="icons.mdiDotsVertical"
                                            size="19"
                                            class="ml-auto"
                                        ></v-icon>
                                        <v-card
                                            color="#eff2f7"
                                            class="pa-7 pt-3 pb-3 d-inline-block"
                                            flat
                                            width="fit-content"
                                            max-width="90%"
                                            align="end"
                                        >
                                            <h4
                                                class="subtitle-2 font-weight-medium primary--text"
                                            >
                                                Henry Wells
                                            </h4>
                                            <h4
                                                class="subtitle-2 font-weight-light"
                                                max-width="70%"
                                            >
                                                Wow that's great
                                            </h4>
                                            <v-icon
                                                small
                                                v-text="icons.mdiClockOutline"
                                            ></v-icon>
                                            <h4
                                                class="subtitle-2 font-weight-light d-inline-block pt-4 pl-1"
                                            >
                                                10:02
                                            </h4>
                                        </v-card>
                                    </v-row>
                                </v-card>
                            </v-row>
                        </v-row>
                        <v-row no-gutters class="pa-3 pt-0">
                            <v-col cols="8">
                                <v-text-field
                                    placeholder="Enter Message"
                                    color="white"
                                    flat
                                    rounded
                                    solo-inverted
                                    dense
                                    hide-details
                                    clearable
                                    :append-icon="icons.mdiEmoticonHappyOutline"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="4" align="center">
                                <v-btn
                                    color="#556ee6"
                                    class="white--text text-capitalize"
                                >
                                    Send
                                    <v-icon
                                        v-text="icons.mdiSend"
                                        size="12"
                                        class="ml-2"
                                    ></v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-row>
    </v-container>
</template>

<script>
import {
    mdiCog,
    mdiTextBoxMultipleOutline,
    mdiPackageDown,
    mdiTagOutline,
    mdiChevronUp,
    mdiArrowUp,
    mdiChevronRight,
    mdiUnfoldMoreHorizontal,
    mdiCheckboxBlankCircle,
    mdiPencilOutline,
    mdiDelete,
    mdiMagnify,
    mdiDotsHorizontal,
    mdiDotsVertical,
    mdiClockOutline,
    mdiSend,
    mdiEmoticonHappyOutline
} from "@mdi/js";

const gradients = [
    ["#222"],
    ["#6c82e8"],
    ["red", "orange", "yellow"],
    ["purple", "violet"],
    ["#00c6ff", "#F0F", "#FF0"],
    ["#f72047", "#ffd200", "#1feaea"]
];

export default {
    name: "SaasDashboard",
    data: () => ({
        icons: {
            mdiCog,
            mdiTextBoxMultipleOutline,
            mdiPackageDown,
            mdiTagOutline,
            mdiChevronUp,
            mdiArrowUp,
            mdiChevronRight,
            mdiUnfoldMoreHorizontal,
            mdiCheckboxBlankCircle,
            mdiPencilOutline,
            mdiDelete,
            mdiMagnify,
            mdiDotsHorizontal,
            mdiDotsVertical,
            mdiClockOutline,
            mdiSend,
            mdiEmoticonHappyOutline
        },
        width: 2,
        radius: 10,
        padding: 8,
        lineCap: "round",
        gradient: gradients[1],
        value: [2, 5, 3, 8, 5, 10, 7, 12, 8, 9, 14],
        gradientDirection: "top",
        gradients,
        fill: false,
        type: "trend",
        autoLineWidth: false,
        showLabels: true,
        labelSize: 10,
        months: {
            items: [
                { title: "Jan" },
                { title: "Dec" },
                { title: "Nov" },
                { title: "Oct" }
            ],
            month: "Jan"
        }
    })
};
</script>

<style>
.tasks,
.chat {
    overflow-y: auto;
}
.tasks::-webkit-scrollbar-track,
.chat::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(83, 81, 81, 0.3);
    background-color: #f5f5f5;
    border-radius: 1000px;
}
.tasks::-webkit-scrollbar,
.chat::-webkit-scrollbar {
    width: 5px;
    background-color: #f5f5f5;
}
.tasks::-webkit-scrollbar-thumb,
.chat::-webkit-scrollbar-thumb {
    background-color: #c4c4c4;
    border-radius: 10px;
}
</style>
