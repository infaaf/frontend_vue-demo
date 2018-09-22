<template>
      <ul class="todo-main">
        <TodoItem v-for="(todo,index) in todos" :todo="todo" :key="index" :index="index" :deleteTodo="deleteTodo"></TodoItem>
      </ul>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
  props: {
    todos: Array,
    deleteTodo: Function
  },
  components: {
    TodoItem
  }

}

</script>

<style>

</style>
