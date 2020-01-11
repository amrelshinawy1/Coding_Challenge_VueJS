<template lang="html">
  <v-card>
    <v-card-title primary-title>
      <div>
        <h3 
          class="headline mb-0"
          :class="{'done' : todo.status === 'done'}" 
        >
          {{ todo.title }}
        </h3>
      </div>
    </v-card-title>
    <v-btn
      :disabled="todo.status === 'done'" 
      @click="update"
    >
      Complete
    </v-btn>
    <v-btn 
      color="error"
      @click="deleteTodo"        
    >
      Delete
    </v-btn>
  </v-card>
</template>

<script>
export default {
  props: {
    todo: {
      required: true,
      type: Object
    }
  },
  methods: {
    update() {
      this.$store.commit("update", {id: this.todo.id, status: 'done'});
    },
    deleteTodo() {
      this.$store.commit("delete", this.todo.id);
    },
  }
};
</script>

<style lang="css">
.done {
  text-decoration: line-through;
}

</style>
