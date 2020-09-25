<template>
  <v-col cols="12" md="6">
    <v-hover v-slot:default="{ hover }">
      <v-card tile class="pa-5" outlined :elevation="hover ? 3 : 0">
        <v-row no-gutters justify="space-between" align="center">
          <v-col cols="auto">
            <CardIcon
              v-bind:color="widget.color"
              v-bind:icon="widget.icon"
            />
          </v-col>
          <v-col cols="auto">
            <CardTitle
                v-bind:title="widget.title"
            />
            <CardLabel
                v-bind:label="widget.label"
            />
          </v-col>
        </v-row>
      </v-card>
    </v-hover>
  </v-col>
</template>

<script>
  import CardIcon from "@/components/loyaltyPanel/Dashboard/CardIcon";
  import CardTitle from "@/components/loyaltyPanel/Dashboard/CardTitle";
  import CardLabel from "@/components/loyaltyPanel/Dashboard/CardLabel";

  export default {
    props: ['widget'],
    name: "TransactionsWidget",
    components: {
      CardIcon, CardTitle, CardLabel
    }
  }
</script>