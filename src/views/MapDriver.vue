<template>
  <v-container pa-0>
    <v-layout column>
      <v-flex mb-2>
        <top-nav/>
      </v-flex>
      
        <gmap-driver/>
      

      <v-flex>
        <bottom-nav/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import GmapDriver from "../components/GmapDriver"

export default {
  name: "map-driver",
  components: {
    TopNav,
    BottomNav,
    GmapDriver
  }
};
</script>
