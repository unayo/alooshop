<template>
  <div class="container">
    <div class="login row">
      <div class="col-12 col-md-8">
        <img src="../assets/images/login.jpg" alt="Login Image">
      </div>
      <div class="col-12 col-md-4">
        <form
          @submit.prevent="signin"
          class="account">
          <h2>Log in</h2>
          <div class="form-floating mb-3">
            <input
              v-model="user.username"
              type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">帳號</label>
          </div>
          <div class="form-floating mb-3">
            <input
              v-model="user.password"
              type="password" class="form-control" id="floatingPassword" placeholder="Password"
            >
            <label for="floatingPassword">密碼</label>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <a href="#">忘記密碼</a>
            <div>
              <button type="submit" class="btn btn-outline-primary me-3">註冊</button>
              <button type="submit" class="btn btn-primary">登入</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .login {
    img {
      width: 100%;
      object-fit: cover;
      height: calc(100vh - 134px);
      padding: 3rem 0;
    }
    .account {
      padding: 10rem 0;
    }
  }
</style>

<script>
export default {
  data () {
    return {
      user: {
        username: 'user@email.com',
        password: ''
      }
    }
  },
  methods: {
    signin () {
      console.log('login')
      const api = `${process.env.VUE_APP_API}admin/signin`
      this.$http.post(api, this.user)
        .then((response) => {
          if (response.data.success) {
            const { token, expired } = response.data
            document.cookie = `shopToken=${token};expires=${new Date(expired)}`
            this.$router.push('/dashboard')
          }
        })
    }
  }
}
</script>
