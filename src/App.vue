<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Home from "./views/Home";
import MapDriver from "./views/MapDriver";

export default {
  name: "App",
  components: {
    Home,
    MapDriver
  },
  data() {
    return {
      //
    };
  }
};
</script>
