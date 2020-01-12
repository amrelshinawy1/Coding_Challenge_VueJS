<template lang="html">
  <div>
    <TodoItem 
      v-for="todo in todos"
      :key="todo.id"
      class="mb-3"  
      :todo="todo"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TodoItem from "@/components/todo-item.vue";
import ITodo from '@/interfaces/todo';

@Component({
  components: {
    TodoItem
  },
  data(){
   return{ todos: this.$store.state.todos}
  }
})
export default class TodoList extends Vue {
  private todos!: ITodo[]; // is assigned via mapState
}

</script>

<style lang="css">
</style>
