<template>
  <div class="completed">
    <h2 class="page__title">Completed todos:</h2>
    <TodoList
      placeholder="You don't have any completed todos"
      :todos="completed"
    ></TodoList>
  </div>
</template>

<script>
import TodoList from "../components/TodoList";
import { mapGetters } from "vuex";
export default {
  name: "Completed",
  components: {
    TodoList
  },
  computed: {
    ...mapGetters(["completed"])
  }
};
</script>

<style scoped></style>
