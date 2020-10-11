<template>
  <div>
    <Loader v-if="loading"></Loader>
    <div v-else>
      <transition-group v-if="todos.length" name="fade" class="mb-5">
        <TodoItem v-for="todo in todos" :todo="todo" :key="todo.id"></TodoItem>
      </transition-group>
      <p v-else class="text-center mt-5">{{ placeholder }}</p>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
import { mapState } from "vuex";
export default {
  name: "TodoList",
  components: {
    TodoItem
  },
  computed: {
    ...mapState(["loading"])
  },
  props: {
    todos: Array,
    placeholder: String
  },
  mounted() {}
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  transform: translateX(500px);
  opacity: 0;
}
</style>
