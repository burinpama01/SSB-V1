<template>
  <v-container pa-0>
    <v-layout column>
      <v-flex mb-2>
        <top-nav/>
      </v-flex>
      <v-flex>
        <list-member/>
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
import ListMember from "../components/ListMember";

export default {
  name: "mapdriver",
  components: {
    TopNav,
    BottomNav,
    ListMember
  }
};
</script>
