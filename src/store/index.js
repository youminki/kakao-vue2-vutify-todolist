import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        title: "One",
      },
      {
        id: 2,
        title: "Two",
      },
      {
        id: 3,
        title: "Three",
      },
    ],
  },
  getters: {
    allTodos: (state) => state.todos,
  },
  mutations: {
    mutationsAddTodo(state, todo) {
      state.todos.push(todo);
      console.log(state.todos);
    },
  },
  actions: {
    actionsAddTodo({ commit }, todo) {
      console.log(todo);

      const nextTodo = {
        id: Date.now(),
        title: todo,
      };

      commit("mutationsAddTodo", nextTodo);
    },
  },

  modules: {},
});
