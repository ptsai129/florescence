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
              :to="`/product/${ product.id }`"
              :style="{ backgroundImage: `url(${ product.imageUrl })` }"
              style="
                height: 300px;
                background-size: cover;
                background-position: center center;
              "
              class="position-relative"
            >
            </router-link>
            <span class="badge bg-secondary fs-6 p-2 position-absolute">{{ product.category }}</span>
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
    <CarouselView></CarouselView>
  </div>
  <router-view></router-view>
</template>

<script>
import CarouselView from '@/components/CarouselView.vue'
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
  components: {
    CarouselView
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
    deleteFav (id) {
      const favIndex = this.favoriteId.findIndex(item => item === id)
      this.favoriteId.splice(favIndex, 1)
      // 將資料寫入localStorage的自訂欄位favorite localStorage不能存json要轉成字串
      localStorage.setItem('favorite', JSON.stringify(this.favoriteId))
      this.getFavItem()
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
  }
}
</script>
