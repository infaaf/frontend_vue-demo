<template>
  <div>
    <h2 v-if="firstView">输入用户名搜索</h2>
    <h2 v-if="loading">LOADING...</h2>
    <h2 v-if="errorMsg">{{errorMsg}}</h2>
    <div class="row">
      <div class="card" v-for="(user, index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style="width: 100px;">
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
import axios from 'axios'
export default {
  data () {
    return {
      firstView: true,
      loading: false,
      users: null, // [{url: '', avatar_url: '', name: ''}]
      errorMsg: ''
    }
  },
  // 由于请求状态在Main中，ajax写在main中以便同步更新4个状态。 写在search中不便更新状态。

  mounted () {
    PubSub.subscribe('search', (msg, searchName) => {
      const url = `https://api.github.com/search/users?q=${searchName}`
      this.users = null
      this.errorMsg = ''
      this.firstView = false
      this.loading = true
      axios.get(url).then(response => {
        const result = response.data
        const users = result.items.map(item => ({
          url: item.html_url,
          avatar_url: item.avatar_url,
          name: item.login
        }))
        this.loading = false
        this.users = users
      }).catch(error => {
        this.loading = false
        this.errorMsg = '请求失败'
      })
    })
  }
}
</script>

<style>

</style>
