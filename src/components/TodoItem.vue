<template>
  <v-card class="mx-auto pl-7 ma-3 text-center" max-width="400">
    <v-row>
      <v-col cols="2" class="pa-0">
        <v-checkbox
          v-model="todo.completed"
          @click="completeTodoHandler"
        ></v-checkbox>
      </v-col>
      <v-col cols="7" class="pt-4">
        <v-list-item-title class="headline mb-1">{{
          todo.title
        }}</v-list-item-title>
      </v-col>
      <v-col cols="3">
        <v-btn @click="deleteTodo(todo.id)" icon color="red">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TodoItem",
  props: {
    todo: Object
  },
  methods: {
    ...mapActions(["deleteTodo", "completeTodo"]),
    completeTodoHandler() {
      setTimeout(() => {
        this.completeTodo(this.todo.id);
      }, 350);
    }
  }
};
</script>

<style scoped></style>
