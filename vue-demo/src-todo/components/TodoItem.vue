<template>
        <li :style="{background: bgColor}" @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
          <label>
            <input type="checkbox" v-model="todo.complete">
            <span>{{todo.title}}</span>
          </label>
          <button class="btn btn-danger" @click="deleteItem" v-show="isShow">删除</button>
        </li>
</template>

<script>
export default {
  props: {
    todo: Object,
    index: Number,
    deleteTodo: Function
  },
  data () {
    return {
      isShow: false,
      bgColor: 'white'
    }
  },
  methods: {
    deleteItem () {
      const index = this.index
      const todo = this.todo
      const deleteTodo = this.deleteTodo
      if (window.confirm(`删除${todo.title}`)) {
        deleteTodo(index)
      }
    },
    handleEnter (isEnter) {
      if (isEnter) {
        this.isShow = true
        this.bgColor = 'grey'
      } else {
        this.isShow = false
        this.bgColor = 'white'
      }
    }
  }
}

</script>

<style>

</style>
