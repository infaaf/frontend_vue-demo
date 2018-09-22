<template>
<div class="todo-container">
    <div  class="todo-wrap">
      <TodoHeader></TodoHeader>
      <TodoList></TodoList>
      <TodoFooter></TodoFooter>
    </div>
  </div>
</template>

<script>
import TodoHeader from './TodoHeader.vue'
import TodoList from './TodoList.vue'
import TodoFooter from './TodoFooter.vue'
// import storageUtil from '../util/storageUtil.js'
export default {
  mounted () {
    // 发送命令到acitong，模拟异步获取todos数据，由action处理
    this.$store.dispatch('reqTodos')
  },
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  }
//  methods: {
//
//  },
//  watch: {
//    todos: {
//      deep: true,
//      handler: storageUtil.saveTodos
//    }
//
//  }
}
</script>

<style>
 .todo-container {
    width: 600px;
    margin: 0 auto;
    }
    .todo-container .todo-wrap {
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
</style>
