<template>
<div class="todo-container">
    <div  class="todo-wrap">
      <TodoHeader :addTodo="addTodo"></TodoHeader>
      <TodoList :todos="todos" :deleteTodo="deleteTodo"></TodoList>
      <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"></TodoFooter>
    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
import storageUtil from './util/storageUtil.js'
export default {
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  data () {
    return {
      todos: storageUtil.readTodos()
    }
  },
  methods: {
    addTodo (todo) {
      this.todos.unshift(todo)
    },
    deleteTodo (index) {
      this.todos.splice(index, 1)
    },
    deleteCompleteTodos () {
      this.todos = this.todos.filter(todo => !todo.complete)
    },
    selectAllTodos (check) {
      this.todos.forEach(todo => (todo.complete = check))
    }
  },
  watch: {
    todos: {
      deep: true,
//      handler: function (value) {
////        window.localStorage.setItem('todos_key', JSON.stringify(value))
////        storageUtil.saveTodos(value)
//      }
      handler: storageUtil.saveTodos
    }

  }
}

</script>

<style>

</style>
