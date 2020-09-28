<template>
  <v-form class="mt-5" @submit.prevent="addTodoHandler">
    <v-row class="d-flex justify-center align-content-center">
      <v-col cols="8">
        <v-text-field v-model="title" outlined label="Add todo"></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-btn
          @click="addTodoHandler"
          large
          class="pa-7 pl-9 pr-9"
          color="primary"
          >Add</v-btn
        >
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodoForm",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    addTodoHandler() {
      if (!this.title.trim()) {
        return;
      }
      const todo = { title: this.title, completed: false };
      this.addTodo(todo);
      this.title = "";
    }
  }
};
</script>

<style scoped></style>
