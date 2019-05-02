<template>
  <v-container pa-0>
    <GmapMap
  :center="{lat:10, lng:10}"
  :zoom="7"
  map-type-id="terrain"
  style="height: 500px"
>
  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
  />
</GmapMap>
  </v-container>
</template>

<script>

export default {
  name: "gmap-driver",
  components:{
   
  },

  data() {
    return {
      mapConfig: mapConfig,
      apiKey: apiKey
    };
  },
};
</script>

<style scoped>
</style>
