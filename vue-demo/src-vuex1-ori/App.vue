<template>
<div>
  <p>点击次数{{count}}， 奇偶数:{{eventOrOdd}}</p>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
  <button @click="incrementIfOdd">奇数加</button>
  <button @click="incrementAsync">异步加</button>
</div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  computed: {
    eventOrOdd () {
      return this.count % 2 === 0 ? '偶数' : '奇数'
    }
  },
  methods: {
    increment () {
      const count = this.count
      this.count = count + 1
    },
    decrement () {
      const count = this.count
      this.count = count - 1
    },
    incrementIfOdd () {
      const count = this.count
      if (count % 2 === 1) {
        this.count = count + 1
      }
    },
    incrementAsync () {
      setTimeout(() => {
        const count = this.count
        this.count = count + 1
      }, 1000)
    }
  }
}
</script>

<style>

</style>
