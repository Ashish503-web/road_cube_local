<template>
  <v-row justify="end" no-gutters class="py-3 px-4">
    <v-col  cols="10" sm="8" md="6" lg="4">
      <v-menu v-model="menu" offset-y>
        <template v-slot:activator="{ attrs }">
          <v-text-field
              :label="
                selectedSearchType === 'All Fields'
                    ? 'Search'
                    : selectedSearchType
                    ? 'Search by ' + selectedSearchType
                    : 'Search'
                "
              rounded
              outlined
              dense
              clearable
              hide-details
              :aria-expanded="attrs['aria-expanded']"
              :prepend-inner-icon="icons.mdiMagnify"
              :append-icon="searchTypes? icons.mdiChevronDown: ''"
              @click:append="menu = true"
          ></v-text-field>
        </template>

        <v-list dense v-if="searchTypes">
          <v-list-item-group v-model="selectedSearchType" color="primary">
            <v-list-item
                v-for="searchType in searchTypes"
                :key="searchType"
                :value="searchType"
            >
              <v-list-item-title v-text="searchType"></v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
    </v-col>
  </v-row>
</template>

<script>
import { mdiMagnify, mdiChevronDown } from '@mdi/js'
  export default {
    props: ['searchTypes', 'selectedSearchType'],
    name: "SearchField",
    data: () => ({
      menu: false,
      icons: {
        mdiMagnify,
        mdiChevronDown
      }
    })
  }
</script>