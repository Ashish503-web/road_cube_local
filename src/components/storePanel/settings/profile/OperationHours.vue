<template>
    <b-standard-card
        :title="translations.title[lang]"
        no-body-padding
        :loading="loading"
        :error-message="errorMessage"
        @submit="updateTimetable"
    >
        <v-container v-for="weekday in timetable" :key="weekday.day">
            <v-row no-gutters justify="space-between" align="center">
                <v-col class="subtitle-2 font-weight-bold">
                    <v-btn text @click="weekday.open = !weekday.open">
                        <v-icon
                            v-text="
                                weekday.open
                                    ? icons.mdiChevronUp
                                    : icons.mdiChevronDown
                            "
                        ></v-icon>
                    </v-btn>

                    {{ weekdayNames[weekday.day][lang] }}
                </v-col>

                <v-col cols="auto">
                    <v-radio-group
                        v-model="weekday.type"
                        class="mt-0 pt-0"
                        hide-details
                    >
                        <v-row no-gutters>
                            <v-col
                                v-for="type in operationTypes"
                                :key="type.text['en']"
                                cols="auto"
                                class="ma-1"
                            >
                                <v-radio
                                    :label="type.text[lang]"
                                    :value="type.value"
                                    :color="
                                        type.text['en'] === 'Closed'
                                            ? 'red'
                                            : 'secondary'
                                    "
                                    @click="
                                        () => {
                                            if (
                                                type.value === 'regular' ||
                                                type.value === 'break'
                                            ) {
                                                weekday.open = true;
                                            }
                                        }
                                    "
                                ></v-radio>
                            </v-col>
                        </v-row>
                    </v-radio-group>
                </v-col>

                <template v-if="weekday.open">
                    <v-col v-if="weekday.type === 'regular'" cols="12">
                        <v-row no-gutters justify="space-between" class="py-5">
                            <v-col cols="12" sm="6" class="pa-3 pt-0">
                                <b-text-field
                                    v-model="weekday.shifts[0][0]"
                                    :placeholder="translations.start[lang]"
                                    readonly
                                    prepend-inner-icon="mdiClockOutline"
                                    :class="
                                        weekdayNames[weekday.day]['en'] +
                                            'Start'
                                    "
                                    :disabled="menu"
                                    @click="
                                        openMenu(
                                            weekdayNames[weekday.day]['en'] +
                                                'Start',
                                            weekday,
                                            0,
                                            0
                                        )
                                    "
                                ></b-text-field>
                            </v-col>

                            <v-col cols="12" sm="6" class="pa-3 pt-0">
                                <b-text-field
                                    v-model="weekday.shifts[0][1]"
                                    :placeholder="translations.end[lang]"
                                    readonly
                                    prepend-inner-icon="mdiClockOutline"
                                    :class="
                                        weekdayNames[weekday.day]['en'] + 'End'
                                    "
                                    :disabled="menu"
                                    @click="
                                        openMenu(
                                            weekdayNames[weekday.day]['en'] +
                                                'End',
                                            weekday,
                                            0,
                                            1
                                        )
                                    "
                                ></b-text-field>
                            </v-col>
                        </v-row>
                    </v-col>

                    <v-col v-else-if="weekday.type === 'break'" cols="12">
                        <v-row no-gutters justify="space-between" class="py-5">
                            <v-col cols="3" class="pa-3 pt-0">
                                <b-text-field
                                    v-model="weekday.shifts[0][0]"
                                    :placeholder="translations.start[lang]"
                                    readonly
                                    prepend-inner-icon="mdiClockOutline"
                                    :class="
                                        weekdayNames[weekday.day]['en'] +
                                            'FirstStart'
                                    "
                                    :disabled="menu"
                                    @click="
                                        openMenu(
                                            weekdayNames[weekday.day]['en'] +
                                                'FirstStart',
                                            weekday,
                                            0,
                                            0
                                        )
                                    "
                                ></b-text-field>
                            </v-col>

                            <v-col cols="3" class="pa-3 pt-0">
                                <b-text-field
                                    v-model="weekday.shifts[0][1]"
                                    :placeholder="translations.end[lang]"
                                    readonly
                                    prepend-inner-icon="mdiClockOutline"
                                    :class="
                                        weekdayNames[weekday.day]['en'] +
                                            'FirstEnd'
                                    "
                                    :disabled="menu"
                                    @click="
                                        openMenu(
                                            weekdayNames[weekday.day]['en'] +
                                                'FirstEnd',
                                            weekday,
                                            0,
                                            1
                                        )
                                    "
                                ></b-text-field>
                            </v-col>

                            <v-col cols="3" class="pa-3 pt-0">
                                <b-text-field
                                    v-model="weekday.shifts[1][0]"
                                    :placeholder="translations.start[lang]"
                                    readonly
                                    prepend-inner-icon="mdiClockOutline"
                                    :class="
                                        weekdayNames[weekday.day]['en'] +
                                            'SecondStart'
                                    "
                                    :disabled="menu"
                                    @click="
                                        openMenu(
                                            weekdayNames[weekday.day]['en'] +
                                                'SecondStart',
                                            weekday,
                                            1,
                                            0
                                        )
                                    "
                                ></b-text-field>
                            </v-col>

                            <v-col cols="3" class="pa-3 pt-0">
                                <b-text-field
                                    v-model="weekday.shifts[1][1]"
                                    :placeholder="translations.end[lang]"
                                    readonly
                                    prepend-inner-icon="mdiClockOutline"
                                    :class="
                                        weekdayNames[weekday.day]['en'] +
                                            'SecondEnd'
                                    "
                                    :disabled="menu"
                                    @click="
                                        openMenu(
                                            weekdayNames[weekday.day]['en'] +
                                                'SecondEnd',
                                            weekday,
                                            1,
                                            1
                                        )
                                    "
                                ></b-text-field>
                            </v-col>
                        </v-row>
                    </v-col>
                </template>
            </v-row>
            <v-divider></v-divider>
        </v-container>

        <v-menu
            v-model="menu"
            max-width="290"
            nudge-bottom="40"
            origin="center center"
            transition="scale-transition"
            :attach="elemToWrap"
            :close-on-content-click="false"
        >
            <v-card>
                <v-time-picker
                    v-model="timePicker"
                    color="secondary"
                    ampm-in-title
                    scrollable
                ></v-time-picker>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        text
                        @click="menu = false"
                        v-text="translations.cancel[lang]"
                    ></v-btn>
                    <v-btn
                        color="secondary"
                        :disabled="!timePicker"
                        v-text="translations.accept[lang]"
                        @click="saveTime"
                    ></v-btn>
                </v-card-actions>
            </v-card>
        </v-menu>
    </b-standard-card>
</template>

<script>
import { mdiChevronUp, mdiChevronDown, mdiClockOutline } from "@mdi/js";
import { mapMutations, mapActions, mapGetters } from "vuex";
import translations from "@/utils/translations/storePanel/settings/profile/operationHours";

export default {
    name: "OperationHours",

    mixins: [translations],

    data: () => ({
        icons: {
            mdiChevronUp,
            mdiChevronDown,
            mdiClockOutline
        },
        menu: false,
        elemToWrap: "",
        timePicker: "",
        selectedWeekday: {},
        array: null,
        index: null,
        operationTypes: [
            { text: { el: "", en: "Regular", it: "" }, value: "regular" },
            { text: { el: "", en: "Split Hours", it: "" }, value: "break" },
            { text: { el: "", en: "24 Hours", it: "" }, value: "24h" },
            { text: { el: "", en: "Closed", it: "" }, value: "closed" }
        ],
        weekdayNames: [
            { el: "", en: "Monday", it: "" },
            { el: "", en: "Tuesday", it: "" },
            { el: "", en: "Wednesday", it: "" },
            { el: "", en: "Thursday", it: "" },
            { el: "", en: "Friday", it: "" },
            { el: "", en: "Saturday", it: "" },
            { el: "", en: "Sunday", it: "" }
        ]
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        loading() {
            return this.$store.state.storePanel.profile.loading.operationHours;
        },

        errorMessage() {
            return this.$store.state.storePanel.profile.errorMessage
                .operationHours;
        },

        timetable() {
            return this.$store.state.storePanel.store.timetable;
        }
    },

    methods: {
        ...mapActions("storePanel/profile", ["updateTimetable"]),

        openMenu(className, weekday, array, index) {
            this.elemToWrap = "." + className;
            this.menu = true;
            this.selectedWeekday = weekday;
            this.array = array;
            this.index = index;
        },

        saveTime() {
            this.selectedWeekday.shifts[this.array][
                this.index
            ] = this.timePicker;

            const { shifts } = this.selectedWeekday;

            if (shifts[this.array][0] > shifts[this.array][1]) {
                const holder = shifts[this.array][0];
                shifts[this.array][0] = shifts[this.array][1];
                shifts[this.array][1] = holder;
            }

            this.menu = false;
        }
    }
};
</script>
