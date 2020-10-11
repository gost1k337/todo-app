import Vue from "vue";
import Vuex from "vuex";
import { TodosService } from "../common/api.service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    loading: false
  },
  getters: {
    completed: state => state.todos.filter(todo => todo.completed),
    todos: state => state.todos.filter(todo => !todo.completed)
  },
  mutations: {
    setTodos: (state, todos) => {
      state.todos = todos;
    },
    addTodo: (state, todo) => {
      state.todos.push(todo);
    },
    deleteTodo: (state, id) => {
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
    setLoading: (state, payload) => {
      state.loading = payload;
    }
  },
  actions: {
    fetchTodos: async ({ commit }) => {
      commit("setLoading", true);
      const { data } = await TodosService.get();
      commit("setTodos", data);
      commit("setLoading", false);
    },
    addTodo: async ({ commit }, todo) => {
      const { data } = await TodosService.post(todo);
      commit("addTodo", data);
    },
    deleteTodo: async ({ commit }, id) => {
      await TodosService.delete(id);
      commit("deleteTodo", id);
    },
    changeTodo: async (context, { params, id }) => {
      await TodosService.put(id, params);
    }
  }
});
