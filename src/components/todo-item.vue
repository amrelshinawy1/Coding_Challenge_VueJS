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

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ITodo from '@/interfaces/todo';
@Component
export default class TodoItem extends Vue {
  @Prop() private todo: ITodo = {id: 0, title: '', status:'open'};
  update(): void {
    this.$store.commit("update", {id: this.todo.id, status: 'done'});
  }
  deleteTodo(): void {
    this.$store.commit("delete", this.todo.id);
  }
}
</script>

<style lang="css">
.done {
  text-decoration: line-through;
}

</style>
