<template>
  <v-card
      tile
      flat
      style="position: relative; bottom: 20px"
  >
    <v-card-title>
      <v-btn
          text
          @click="addRegionDialog = !addRegionDialog"
          class="text-capitalize pa-0 ml-5 subtitle-2"
      >
        <v-icon
            v-text="icons.mdiPlusThick"
            color="primary"
        ></v-icon>Add Region
      </v-btn>
    </v-card-title>
    <v-card-text
        v-if="addRegionDialog"
        style="border: 5px solid #e2e2e2"
        class="pa-10 pb-5"
    >
      <h4 class="subtitle-2 font-weight-medium">
        Add Region
      </h4>
      <v-card
        class="pt-2 d-inline-block"
        flat
        tile
        width="50%"
      >
        <v-text-field
          v-model="new_region"
          placeholder="Name"
          required
          outlined
          dense
          rounded
          @keypress="writtenRegion = true"
        ></v-text-field>
      </v-card>
      <v-icon
        v-text="icons.mdiCheckCircleOutline"
        v-if="writtenRegion"
        color="primary"
        size="60"
        class="ml-10"
        @click="
          addRegionDialog = false;
          writtenRegion = false;
          new_region ='';
        "
      ></v-icon>
    </v-card-text>
  </v-card>
</template>

<script>
import {mdiCheckCircleOutline, mdiPlusThick} from "@mdi/js";

export default {
  name: "AddRegionButton",
  data: () => ({
    icons: {
      mdiPlusThick, mdiCheckCircleOutline
    },
    addRegionDialog: false,
    writtenRegion: false,
    new_region: "",
  })
}
</script>

<style scoped>

</style>