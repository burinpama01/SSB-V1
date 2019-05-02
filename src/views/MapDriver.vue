<template>
  <v-container pa-0>
    <v-layout column>
      <v-flex mb-2>
        <top-nav/>
      </v-flex>
      <v-flex>
        <v-parallax
          dark
          src="https://developers.google.com/maps/documentation/android-sdk/images/zoom-level-14.png"
        ></v-parallax>
      </v-flex>

      <v-flex>
        <bottom-nav/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";

export default {
  name: "map-driver",
  components: {
    TopNav,
    BottomNav
  }
};
</script>
