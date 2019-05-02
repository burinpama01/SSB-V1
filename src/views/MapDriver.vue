<template>
  <v-container pa-0>
    <v-layout column>
      <v-flex mb-2>
        <top-nav/>
      </v-flex>
<<<<<<< HEAD
      
        <gmap-driver/>
      
=======
      <v-flex>
        <v-parallax
          dark
          src="https://developers.google.com/maps/documentation/android-sdk/images/zoom-level-14.png"
        ></v-parallax>
      </v-flex>
>>>>>>> master

      <v-flex>
        <bottom-nav/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
<<<<<<< HEAD
import GmapDriver from "../components/GmapDriver"
=======
>>>>>>> master

export default {
  name: "map-driver",
  components: {
    TopNav,
<<<<<<< HEAD
    BottomNav,
    GmapDriver
=======
    BottomNav
>>>>>>> master
  }
};
</script>
