<template>
  <v-container fluid>
    <v-row class="mb-3" justify="center" align="center">
      <v-col cols="4">
        {{ todo.title }}
      </v-col>
      <v-col cols="1">
        <v-btn block color="primary">Edit</v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn block color="error" @click="actionsDelTodo(todo.id)"
          >Delete</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    todo: {},
  },
  methods: {
    ...mapActions(["actionsDelTodo"]),
  },
};
</script>
