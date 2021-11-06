<template>
<!-- 登入後，編輯與登出頁面 -->
  <div class="list-group">
    <router-link
      class="list-group-item list-group-item-action"
      to="">
      編輯、新增商品
    </router-link>
    <a
      @click.prevent="logout"
      href="#" class="list-group-item list-group-item-action">
      登出
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_API}logout`
      this.$http.post(api, this.user)
        .then((response) => {
          if (response.data.success) {
            this.$router.push('/login')
          }
        })
    }
  }
}
</script>
