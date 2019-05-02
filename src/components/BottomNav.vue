<template>
  <v-container pa-0>
    <v-bottom-nav :active.sync="bottomNav" :value="true" absolute color="transparent">
        <v-btn color="orange" flat @click="$router.push('./')">
          <v-icon>home</v-icon>
        </v-btn>

        <v-btn color="orange" flat @click="$router.push('./mapdriver')">
          <v-icon>place</v-icon>
        </v-btn>

        <v-btn color="orange" flat @click="$router.push('./statusdriver')">
          <v-icon>query_builder</v-icon>
        </v-btn>

        <v-btn color="orange" flat @click="$router.push('./profile')">
          <v-icon>person</v-icon>
        </v-btn>
      </v-bottom-nav>
  </v-container>
</template>

<script>
export default {
  name: "bottom-nav"
};
</script>

<style scoped>
</style>
