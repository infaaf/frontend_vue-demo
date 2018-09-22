<template>
<div>
  <!--<p>点击次数{{count}}， 奇偶数:{{eventOrOdd}}</p>-->
  <!--<p>点击次数{{$store.state.count}}， 奇偶数:{{eventOrOdd}}</p>-->
  <p>点击次数{{count}}， 奇偶数:{{eventOrOdd}}</p>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
  <button @click="incrementIfOdd">奇数加</button>
  <button @click="incrementAsync">异步加</button>
</div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'


export default {
  computed: {
    ...mapState(['count']),
    ...mapGetters(['evenOrOdd'])
//    count () {
//      return this.$store.state.count
//    },
//    evenOrOdd () {
//      return this.$store.getters.eventOrOdd
//    }


  },
  methods: {
    ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
  }


//  methods: {
//    increment () {
//      this.$store.dispatch('increment')
//    },
//    decrement () {
//      this.$store.dispatch('decrement')
//    },
//    incrementIfOdd () {
//      this.$store.dispatch('incrementIfOdd')
//    },
//    incrementAsync () {
//      this.$store.dispatch('incrementAsync')
//    }
//  }
}
</script>

<style>

</style>
