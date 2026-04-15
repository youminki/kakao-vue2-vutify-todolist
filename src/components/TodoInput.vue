<template>
  <v-container fluid>
    <v-row class="mt-6" justify="center">
      <v-col cols="4">
        <v-text-field v-model="todoText" outlined></v-text-field>
      </v-col>
      <v-col cols="1">
        <v-btn @click="actionsAddTodo(todoText)" block x-large color="primary"
          >Add</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      todoText: "",
    };
  },
  methods: {
    ...mapActions(["actionsAddTodo"]),
  },
};
</script>

<style></style>
