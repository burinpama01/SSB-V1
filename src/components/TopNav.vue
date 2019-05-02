<template>
  <v-container pa-0>
    <v-toolbar>
      <v-btn icon @click="$router.push('./')">
        <v-icon>arrow_back</v-icon>
      </v-btn>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  name: "top-nav"
};
</script>

<style scoped>
</style>
