<template>
  <div class="container-fluid login-bg">
    <div class="row justify-content-center pt-5">
      <div class="col-11 col-md-8 col-lg-5">
        <div class="login p-3 d-flex justify-content-center align-items-center">
          <form class="form" @submit.prevent="logIn">
            <h1 class="h3 mb-3 fw-bold">管理員登入</h1>
            <div class="mb-2">
              <label for="inputEmail">帳號</label>
              <input
                type="email"
                id="inputEmail"
                class="form-control rounded"
                placeholder="請輸入電子郵件地址"
                required
                autofocus
                v-model="user.username"
              />
            </div>
            <div class=" mb-2">
              <label for="inputPassword" class="sr-only">密碼</label>
              <input
                type="password"
                id="inputPassword"
                class="form-control rounded"
                placeholder="請輸入密碼"
                required
                v-model="user.password"
              />
            </div>
            <div class="text-end mt-4">
              <router-link to="/" class="btn btn-lg btn-primary btn-block rounded text-secondary me-2" >回到前台</router-link>
              <button class="btn btn-lg btn-secondary btn-block rounded text-primary " type="submit">
                登入
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.login-bg{
height:100vh;
background-image:url(https://images.unsplash.com/photo-1522383225653-ed111181a951?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80)
}

.login{
background-color: rgba(0,0,0,.2);
border-radius: 10px;
border:10px solid #fff;
box-shadow: 0 0 60px #000;
backdrop-filter: blur(2px);
}
.form{
width: 400px;
color: #fff;
}
</style>
<script>
export default {
  data () {
    return {
      user: {}
    }
  },
  methods: {
    logIn () {
      const logInApi = `${process.env.VUE_APP_API}/admin/signin`
      this.$http
        .post(logInApi, this.user)
        .then((response) => {
          const { token, expired } = response.data
          document.cookie = `myToken=${token};expires=${new Date(expired)}`
          this.$router.push('/admin')
        })
        .catch((err) => {
          alert(err.response.data.message)
          this.user.username = ''
          this.user.password = ''
        })
    }
  }
}
</script>
