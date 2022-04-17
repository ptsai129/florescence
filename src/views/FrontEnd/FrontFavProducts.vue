<template>
<div class="bg-light">
  <div class="container pt-md-5 pt-3 pb-5">
    <h1 class="text-center fs-3 text-secondary fw-bold py-3">收藏的商品</h1>
    <div class="row">
      <template v-if="filteredItem.length !== 0">
        <div
          class="col-md-6 col-lg-3 mb-3 mb-md-5"
          v-for="product in filteredItem"
          :key="product.id"
        >
          <div class="card h-100 border-primary" data-aos="fade-up">
            <router-link
              :to="`/product/${product.id}`"
              :style="{ backgroundImage: `url(${product.imageUrl})` }"
              style="
                height: 300px;
                background-size: cover;
                background-position: center center;
              "
              class="position-relative"
            >
            </router-link>
            <span class="badge bg-secondary fs-6 p-2 position-absolute">{{
              product.category
            }}</span>
            <div class="card-body bg-light text-secondary">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text fs-5 fw-bold mb-0">
                NT${{ product.price }}
              </p>
                <div class="d-flex">
            <button class="btn btn-danger me-2"  @click.prevent="deleteFav(product.id)">刪除收藏</button>
            <button class="btn btn-success text-secondary fw-bold"  @click.prevent="addToCart(product.id)"><i class="bi bi-basket-fill me-1"></i>加入購物車
          </button>
            </div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div
          class="d-flex flex-column align-items-center justify-content-center mb-3"
          style="
            background-image: url(https://images.unsplash.com/photo-1610247673162-4aa582ed741d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80);
            height: 500px;
            background-position: center center;
            background-size:cover;
            background-repeat: no-repeat;
            opacity: .7;
          "
        >
          <p class="fw-bold fs-3 text-secondary text-center">目前沒有收藏商品</p>
          <router-link
            class="btn btn-light text-secondary"
            to="/shopflowers"
            >前往購物</router-link
          >
        </div>
      </template>
    </div>
  </div>
  </div>
  <div class="bg-secondary">
    <div class="container py-5">
      <h2 class="text-light ps-md-5 fw-bold mb-3">我們的堅持</h2>
      <div class="row align-items-center">
        <div class="col-12 offset-md-1 col-md-6">
          <div
            id="carouselExampleCaptions"
            ref="carousel"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://images.unsplash.com/photo-1587316830182-59ca6817ce72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  class="d-block w-100"
                  alt="新鮮採集的花"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>親手採下每一束花</h5>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="https://images.unsplash.com/photo-1630158501847-ba2abdb8b87c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  class="d-block w-100"
                  alt="精心設計的花藝"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>用心設計出充滿美感的花藝</h5>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="https://images.unsplash.com/photo-1587316817222-712aa911f86a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  class="d-block w-100"
                  alt="專送人員"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>親手交付給您花朵的祝福</h5>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div class="col-12 col-md-5">
        <p class="fs-6 text-light mt-5 mt-md-0">Floresence致力於提供高品質的花藝設計服務，除了傳遞花藝融合於生活的信念，每一束花從採集、設計到交付於您手中的每一刻都不馬虎，用心做好每一件小事是我們的堅持，
        對待每個客人如同家人朋友一般，任何花藝設計上的需求，都歡迎您與Floresence討論，您的滿意笑容是我們最大的動力。</p>
        </div>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
import Carousel from 'bootstrap/js/dist/carousel'
import emitter from '@/methods/mitt'
export default {
  data () {
    return {
      products: [],
      // 從localStorage內讀取自定義的favorite欄位內容
      favoriteId: [],
      // 存篩選過後的資料
      filteredItem: []
    }
  },
  methods: {
    // 取得產品
    getProducts () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url).then((res) => {
        this.products = res.data.products
        this.getFavItem()
      })
    },
    getFavItem () {
      this.favoriteId = JSON.parse(localStorage.getItem('favorite')) || []
      this.filteredItem = this.products.filter(product => this.favoriteId.includes(product.id))
    },
    // 加入購物車
    addToCart (id, qty = 1) {
      // 定義要帶入api的資訊
      const data = {
        product_id: id,
        qty
      }
      this.$http.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, { data })
        .then((res) => {
          this.getCarts()
          // 顯示已加入購物車提示訊息
          this.$swal('已加入購物車')
        })
    },
    // 取得購物車
    getCarts () {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`).then((res) => {
        this.cartData = res.data.data
        // 觸發FrontNavbar上購物車圖示數量更新
        emitter.emit('get-cart')
      })
    }
  },
  mounted () {
    this.getProducts()
    this.myCarousel = new Carousel(this.$refs.carousel, {
      interval: 2000,
      wrap: true
    })
  }
}
</script>
