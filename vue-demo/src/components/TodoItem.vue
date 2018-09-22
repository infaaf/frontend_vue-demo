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
    index: Number
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
      if (window.confirm(`删除${todo.title}`)) {
        this.$store.dispatch('deleteTodo', index)
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
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }
  li label {
    /*float: left;*/
    cursor: pointer;
  }
  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }
  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }
  li:before {
    content: initial;
  }
  li:last-child {
    border-bottom: none;
  }
</style>
