<template>
  <v-container pa-0 grid-list-md>
    <v-list>
      <v-list-tile v-for="item in items" :key="item.title" avatar>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-avatar>
          <img :src="item.avatar">
        </v-list-tile-avatar>
      </v-list-tile>
    </v-list>
  </v-container>
</template>

<script>
export default {
  name: "list-member",
  data() {
    return {
      items: [
        {
          title: "Jason Oner",
          avatar: "https://thienhoanguyenkim.com/upload/product/00ff00-4523.png"
        },
        {
          title: "Travis Howard",
          avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UW_jiBGWXHvcSs55ol7ITFt0l0lQGesuH2btzfiyAqun8xob"
        },
        {
          title: "Ali Connors",
          avatar: "https://thienhoanguyenkim.com/upload/product/00ff00-4523.png"
        },
        {
          title: "Cindy Baker",
          avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UW_jiBGWXHvcSs55ol7ITFt0l0lQGesuH2btzfiyAqun8xob"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
