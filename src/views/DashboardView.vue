<template>
<nav class="navbar navbar-expand-lg navbar-secondary bg-secondary">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/admin">後台</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <router-link to="/admin/products" class="nav-link">產品</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/order" class="nav-link">訂單</router-link>
        </li>
        <li class="nav-item">
           <a class="nav-link" href="#" @click.prevent="logOut">登出</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<router-view v-if="checkSuccess"></router-view>
</template>

<script>
export default {
  data () {
    return {
      checkSuccess: false
    }
  },
  methods: {
    checkLogin () {
    // https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie(myToken為自訂名稱)
    // 取出token
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      // 如果有token才跑navbar以下的畫面如果沒有就跳轉回到login頁面
      if (token) {
        // Axios預設值
        this.$http.defaults.headers.common.Authorization = `${token}`
        const loginCheckApi = `${process.env.VUE_APP_API}/api/user/check`
        this.$http.post(loginCheckApi, { api_token: this.token })
          .then(() => {
            // 成功登入checkSuccess會被改成true
            this.checkSuccess = true
          })
          .catch((err) => {
            // 登入失敗會跳出失敗訊息並跳回登入頁面
            alert(err.data.message)
            this.$router.push('/login')
          })
      } else {
        alert('您尚未登入')
        this.$router.push('/login')
      }
    },
    logOut () {
      // 清除cookie
      document.cookie = 'myToken=;expires=;'
      alert('已清除cookie')
      this.$router.push('/login')
    }
  },
  mounted () {
    // 初始化
    this.checkLogin()
  }
}
</script>
