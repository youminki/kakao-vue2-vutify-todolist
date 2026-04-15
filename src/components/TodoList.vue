<template>
  <v-container>
    <TodoItem />
    <TodoItem />
    <TodoItem />
  </v-container>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {
  components: {
    TodoItem,
  },
};
</script>

<style></style>
