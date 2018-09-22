<template>
      <ul class="todo-main">
        <TodoItem v-for="(todo,index) in todos" :todo="todo" :key="index" :index="index"></TodoItem>
      </ul>
</template>

<script>
import {mapState} from 'vuex'
import TodoItem from './TodoItem.vue'
import storeageUtil from '../util/storageUtil'
export default {
  components: {
    TodoItem
  },
  computed: {
    ...mapState(['todos'])
  },
  watch: {
    todos: {
      deep: true,
      handler: storeageUtil.saveTodos
    }
  }
}

</script>

<style>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }
  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
