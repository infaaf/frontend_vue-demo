<template>
<div class="col-md-4">
              <form action="form-horizontal">
                <div class="form-group">
                  <label>用户名</label>
                  <input type="text" class="form-control" placeholder="用户名" v-model="name">
                </div>
                <div class="form-group">
                  <label>评论内容</label>
                  <textarea type="text" class="form-control" placeholder="评论内容" v-model="content"></textarea>
                </div>
                <div class="form-group">
                  <div class="col-sm-offset-2 col-sm-10">
                    <button type="button" class="btn btn-default pull-right" @click="add">提交</button>
                  </div>
                </div>
              </form>
            </div> <!--md4 for Add end    -->
</template>

<script>
export default {

  props: {
    addComment: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      name: '',
      content: ''
    }
  },
  methods: {
    add () {
      const name = this.name.trim()
      const content = this.content
      if (!name || !content) {
        alert('no name or content')
        return
      }
      const comment = {
        name,
        content
      }
      this.addComment(comment)
      // 清除输入
      this.name = ''
      this.content = ''
    }
  }
}

</script>

<style>

</style>
