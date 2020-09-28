<template>
  <div class="home">
    <h2 class="page__title">Add todo:</h2>
    <AddTodoForm></AddTodoForm>
    <TodoList placeholder="You don't have any todo!" :todos="todos"></TodoList>
  </div>
</template>

<script>
import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: { AddTodoForm, TodoList },
  computed: {
    ...mapGetters(["todos"])
  }
};
</script>
