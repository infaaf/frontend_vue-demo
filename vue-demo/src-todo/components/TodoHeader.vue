<template>
      <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="addItem">
      </div>
</template>

<script>
export default {
  props: {
    addTodo: Function
  },
  data () {
    return {
      title: ''
    }
  },
  methods: {
    addItem () {
      const title = this.title.trim()
      const addTodo = this.addTodo
      if (!title) {
        alert('title Kong')
        return
      }
      const todo = {
        title,
        complete: false
      }
      addTodo(todo)
      this.title = '' // 注意这里要操作this对象而不是函数内局部变量title
      // 验证合法性  生成对象  添加  还原
    }
  }
}

</script>

<style>

</style>
