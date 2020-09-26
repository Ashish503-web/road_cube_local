<template>
  <v-card tile flat color="#f9fafc" class="pa-1 pb-0">
    <v-tabs
      v-model="tab"
      color="secondary"
      :vertical="$vuetify.breakpoint.mdAndDown"
    >
      <v-tab
        class="text-capitalize"
        v-for="tab in tabs"
        v-bind:key="tab.label"
      >
        {{ tab.label }}
      </v-tab>

      <AddTabButton/>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <TabItem/>
    </v-tabs-items>
  </v-card>
</template>

<script>
  import AddTabButton from "@/components/loyaltyPanel/Customer/AddTabButton";
  import TabItem from "@/components/loyaltyPanel/Customer/TabItem";

  export default {
    name: "Tab",
    components: {
      TabItem,
      AddTabButton
    },
    data: () => ({
      tab: 0,
      tabs: [
        {label: 'All'},
      ],
    })
  }
</script>