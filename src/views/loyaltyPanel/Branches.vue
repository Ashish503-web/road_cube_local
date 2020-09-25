<template>
  <v-card class="pa-0" flat>
    <v-card flat>
      <v-row>
        <PageTitle
          v-bind:title="pageTitle"
        />
        <PageIcon
          v-bind:icon="icons.mdiTools"
          v-bind:iconSize="iconSize"
        />
      </v-row>
    </v-card>

    <v-row class="pa-5 pt-3 pb-3" style="background: #eaedf1">
      <v-col cols="12">
        <v-card flat tile>
          <Tab/>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import {
    mdiTools,
} from "@mdi/js";

import PageTitle from "@/components/loyaltyPanel/PageTitle";
import PageIcon from "@/components/loyaltyPanel/PageIcon";
import Tab from "@/components/loyaltyPanel/Branches/Tab";

export default {
  name: "Branches",
  components: {
    PageTitle,
    PageIcon,
    Tab
  },
  data: () => ({
    pageTitle: 'Branches',
    iconSize: '60',
    icons: {
      mdiTools,
    },
  }),
};
</script>