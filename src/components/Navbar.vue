<template>
  <v-app-bar app color="dark" dark>
    <div class="d-flex align-center">
      <h2>TodoList</h2>
    </div>

    <v-spacer></v-spacer>

    <v-btn exact to="/" text>
      <span class="mr-2">Main</span>
    </v-btn>
    <v-btn exact to="/completed" text>
      <span class="mr-2">Completed</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped></style>
