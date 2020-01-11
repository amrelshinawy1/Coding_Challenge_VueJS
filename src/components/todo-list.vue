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

<script>
import TodoItem from "@/components/todo-item";

export default {
  components: {
    TodoItem
  },
  data(){
    return {
      todos: this.$store.state.todos
    };
  }
};
</script>

<style lang="css">
</style>
