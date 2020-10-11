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
        <v-list-item-title
          v-show="!isChanging"
          @dblclick="dblClickHandler"
          class="headline mb-1"
        >
          {{ todo.title }}
        </v-list-item-title>
        <input
          v-model="title"
          class="title__input"
          ref="input"
          v-show="isChanging"
          @blur="changeTitle"
          @keydown.enter="changeTitle"
        />
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
  data() {
    return {
      isChanging: false,
      title: ""
    };
  },
  methods: {
    ...mapActions(["deleteTodo", "changeTodo"]),
    completeTodoHandler() {
      setTimeout(() => {
        this.changeTodo({ params: this.todo, id: this.todo.id });
      }, 350);
    },
    dblClickHandler() {
      this.isChanging = true;
      setTimeout(() => {
        this.$refs.input.focus();
      }, 0);
    },
    changeTitle() {
      if (!this.title.trim()) {
        return;
      }
      this.isChanging = false;
      this.changeTodo({ params: this.todo, id: this.todo.id }).then(() => {
        this.todo.title = this.title;
      });
    }
  }
};
</script>

<style scoped lang="scss">
.title__input {
  border-bottom: 2px solid #fff;
  outline: none;
  color: #fff;
  transition: all 0.3s linear;
  &:focus,
  &:active {
    border-bottom-color: #2196f3;
  }
}
</style>
