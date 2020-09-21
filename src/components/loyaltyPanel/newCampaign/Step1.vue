<template>
    <v-card outlined width="500" class="mx-auto mt-3">
        <v-card-title class="subtitle-2" style="word-break: normal">
            <v-sheet class="border-grey rounded-circle">
                <v-icon
                    class="ma-1"
                    size="60"
                    v-text="icons.mdiBullhorn"
                ></v-icon>
            </v-sheet>
            <v-col>
                Select in order of priority what means you will contact the
                user. In case of failure of the first option, the second and
                third or third ones will be used.
            </v-col>
        </v-card-title>

        <v-card-text>
            <v-row
                v-for="selection in selections"
                :key="selection.title"
                no-gutters
                class="b-outlined pa-3 mb-3"
            >
                <v-col
                    cols="4"
                    class="subtitle-2"
                    v-text="selection.title"
                ></v-col>
                <v-col cols="8">
                    <v-radio-group class="mt-0 pt-0" hide-details>
                        <v-row no-gutters>
                            <v-col
                                v-for="contactMean in selection.contactMeans"
                                :key="contactMean"
                                cols="auto"
                                class="pr-3"
                            >
                                <v-radio color="secondary">
                                    <template v-slot:label>
                                        <h4
                                            class="subtitle-2"
                                            v-text="contactMean"
                                        ></h4>
                                    </template>
                                </v-radio>
                            </v-col>
                        </v-row>
                    </v-radio-group>
                </v-col>
            </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
            <v-btn color="brown" disabled>
                <v-icon size="20" v-text="icons.mdiArrowLeft"></v-icon>
                back
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="step++">
                next
                <v-icon size="20" v-text="icons.mdiArrowRight"></v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
