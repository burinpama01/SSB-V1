<template>
  <v-container pa-0 grid-list-md>
    <center class="mrl-15 mrt-50">
      <v-layout row wrap pa-3>
        <v-flex xs6 v-for="i in categorys" v-bind:key="i.id" >
          <v-card
            class="cardmenu"
            id="card-center"
            color="orange"
            width="100%"
            height="100%"
            @click="$router.push('/mapdriver')"
          >
            <br>
            <v-icon color="white" style="font-size:145px; ">map</v-icon>
            <br>
            <h1 id="wh">MAP</h1>
            <br>
          </v-card>
        </v-flex>
      </v-layout>
    </center>
  </v-container>
</template>

<script>
export default {
  name: "card-menu",
  data: () => ({
    categorys: [
      {
        id: 1,
        
      },
      {
        id: 2
      },
      {
        id: 3
      },
      {
        id: 4
      }
    ]
  })
};
</script>

<style scoped>
</style>
