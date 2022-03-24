<template>
  <div class="sticky-top">
    <nav
      class="navbar fixed-top navbar-expand-md navbar-light bg-primary box-shadow position-relative"
    >
      <div class="container">
        <router-link to="/" class="navbar-brand me-5">
          <img src="../assets/images/logo.png" class="nav-logo" alt="logo" />
        </router-link>
        <div class="d-flex">
          <i
            class="bi bi-balloon-heart fs-3 text-secondary me-3 d-lg-none d-md-none"
          ></i>
          <router-link to="/cart"
            ><i
              class="bi bi-basket fs-3 text-secondary me-1 d-lg-none d-md-none position-relative"
              ><span
                class="position-absolute top-0 start-50 fs-sm translate-middle rounded-circle badge bg-danger"
              >
                 {{ cartData?.carts?.length }}
                <span class="visually-hidden">unread messages</span>
              </span></i
            ></router-link
          >
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item me-2">
              <router-link class="nav-link" aria-current="page" to="/about"
                >關於Florescence</router-link
              >
            </li>
            <li class="nav-item me-2">
              <router-link
                class="nav-link"
                aria-current="page"
                to="/shopflowers"
                >選購花禮</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/faq"
                >訂花需知</router-link
              >
            </li>
          </ul>
          <a href="#"
            ><i
              class="bi bi-balloon-heart fs-2 text-secondary mx-4 d-none d-md-block"
            ></i
          ></a>
          <router-link to="/cart"
            ><i
              class="bi bi-basket fs-2 text-secondary me-4 d-none d-md-block position-relative"
              ><span
                class="position-absolute top-0 start-50 fs-6 translate-middle rounded-circle badge bg-danger"
              >
                {{ cartData?.carts?.length }}
                <span class="visually-hidden">unread messages</span>
              </span></i
            ></router-link
          >
          <div></div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
@import "src/assets/all.scss";
.box-shadow {
  box-shadow: 0px 0px 15px rgba(232, 219, 211, 0.9);
}
.nav-logo {
  height: 50px;
  width: 130px;
  @media (min-width: 576px) {
    height: 70px;
    width: 190px;
  }
}
.nav-item:hover {
  background-color: $success;
  color: $light;
  font-weight: bold;
}

.fs-sm{
font-size:10px;
}
</style>

<script>
import emitter from '@/methods/mitt'
export default {
  data () {
    return {
      cartData: {
        carts: []
      }
    }
  },
  methods: {
    // 取得購物車
    getCarts () {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`).then((res) => {
        this.cartData = res.data.data
      })
    }
  },
  mounted () {
    // 接受產品列表(FrontProducts),購物車頁面(FrontCart),單一產品(FrontProduct)的事件觸發
    emitter.on('get-cart', () => {
      this.getCarts()
    })
  }
}
</script>
