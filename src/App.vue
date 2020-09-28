<template>
  <v-app>
    <Navbar />
    <v-main class="mt-15">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
@import url("./assets/style.scss");
</style>
