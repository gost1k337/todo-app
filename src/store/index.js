import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
    completed: state => state.todos.filter(todo => todo.completed),
    todos: state => state.todos.filter(todo => !todo.completed)
  },
  mutations: {
    addTodo: (state, todo) => {
      state.todos.push(todo);
    },
    deleteTodo: (state, id) => {
      state.todos = state.todos.filter(todo => todo.id !== id);
    }
    // completeTodo: (state, id) => {
    //   const todo = state.todos.find(todo => todo.id === id);
    // }
  },
  actions: {
    addTodo: ({ commit }, todo) => {
      todo.id = Date.now();
      commit("addTodo", todo);
    },
    deleteTodo: ({ commit }, id) => {
      commit("deleteTodo", id);
    },
    completeTodo: () => {
      console.log("Todo completed");
    }
  },
  modules: {}
});
