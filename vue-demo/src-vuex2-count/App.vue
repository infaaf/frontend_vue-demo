<template>
<div>
  <!--<p>点击次数{{count}}， 奇偶数:{{eventOrOdd}}</p>-->
  <p>点击次数{{$store.state.count}}， 奇偶数:{{eventOrOdd}}</p>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
  <button @click="incrementIfOdd">奇数加</button>
  <button @click="incrementAsync">异步加</button>
</div>
</template>

<script>
export default {
//  data () {
//    return {
//      count: 0
//    }
//  },
  computed: {
    eventOrOdd () {
//      return this.count % 2 === 0 ? '偶数' : '奇数'
      return this.$store.getters.eventOrOdd
    }
  },
  methods: {
    increment () {
      this.$store.dispatch('increment')
    },
    decrement () {
//      const count = this.count
//      this.count = count - 1
      this.$store.dispatch('decrement')
    },
    incrementIfOdd () {
      this.$store.dispatch('incrementIfOdd')
//      const count = this.count
//      if (count % 2 === 1) {
//        this.count = count + 1
//      }
    },
    incrementAsync () {
      this.$store.dispatch('incrementAsync')
//      setTimeout(() => {
//        const count = this.count
//        this.count = count + 1
//      }, 1000)
    }
  }
}
</script>

<style>

</style>
