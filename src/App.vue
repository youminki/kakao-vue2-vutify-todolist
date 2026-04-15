<template>
  <v-app>
    <v-main>
      <TodoInput />
      <TodoList />
    </v-main>
  </v-app>
</template>

<script>
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";

export default {
  name: "App",

  components: {
    TodoInput,
    TodoList,
  },

  data: () => ({
    //
  }),
};
</script>
