<template>
  <div>
    <transition-group v-if="todos.length" name="fade" class="mb-5">
      <TodoItem v-for="todo in todos" :todo="todo" :key="todo.id"></TodoItem>
    </transition-group>
    <p v-else class="text-center mt-5">{{ placeholder }}</p>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "TodoList",
  components: {
    TodoItem
  },
  props: {
    todos: Array,
    placeholder: String
  }
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
