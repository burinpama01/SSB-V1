<template>
  <v-container pa-0 grid-list-md>
    
    <form>
      <v-text-field
        v-model="name"
        v-validate="'required|max:10'"
        :counter="10"
        :error-messages="errors.collect('name')"
        label="Name"
        data-vv-name="name"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        v-validate="'required|email'"
        :error-messages="errors.collect('email')"
        label="E-mail"
        data-vv-name="email"
        required
      ></v-text-field>
    </form>
  </v-container>
</template>

<script>
export default {
  name: "form-profile",
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
