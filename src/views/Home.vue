<template>
  <v-container pa-0>
    <v-layout column>
      <v-flex mb-2>
        <titlebar-Home/>
      </v-flex>

      <vflex>
        <card-menu/>
      </vflex>
      
      <v-flex>
        <bottom-nav/>
      </v-flex>
      
    </v-layout>
    
  </v-container>
</template>

<script>
import TitlebarHome from "../components/TitlebarHome";
import BottomNav from "../components/BottomNav";
import CardMenu from "../components/CardMenu"

export default {
  name: "home",
  components: {
    TitlebarHome,
    BottomNav,
    CardMenu,
  }
};
</script>
