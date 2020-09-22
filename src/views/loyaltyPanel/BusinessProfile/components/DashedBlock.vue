<template>
    <Fragment>
        <!--File upload-->
        <v-list-item class="dashed_border mr-4 ml-4" v-if="card.fileUpload.active">
            <v-list-item-avatar
                tile
                size="80"

            >
                <img v-if="card.img" :src="card.img" alt="img">
                <a v-if="card.pdf" :href="card.pdf" target="_blank">{{ card.pdf }}</a>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-subtitle> {{ card.uploadDescription }}
                </v-list-item-subtitle>
                <choose-file></choose-file>
            </v-list-item-content>


        </v-list-item>
        <!--Select-->
        <v-list-item class="dashed_border mr-4 ml-4" v-if="card.select.active">
            <v-list-item-content>
                <v-col class="main-grid" cols="2">

                    <v-list-item-subtitle>
                        Relation :
                    </v-list-item-subtitle>
                </v-col>
                <v-col class="main-grid" cols="3">

                    <v-select
                        v-model="relation"
                        :items="items"
                        outlined

                        dense
                    ></v-select>
                </v-col>
                <v-col class="main-grid" cols="7">
                    %
                </v-col>
            </v-list-item-content>
        </v-list-item>
    </Fragment>


</template>
<script>
import ChooseFile from "@/views/loyaltyPanel/BusinessProfile/components/ChooseFile";
import { Fragment } from 'vue-fragment'

export default {
    data() {
        return {
            relation: 10,
            items: [
                10, 20, 30, 40, 50, 60, 70
            ]

        };
    },
    props: [
        "card"
    ],
    components: {
        "choose-file": ChooseFile,
        Fragment

    }
};
</script>
<style scoped>
.dashed_border {
    border: 1px dashed grey;
    border-radius: 10px;
}
</style>