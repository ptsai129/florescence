<template>
  <div class="shop-banner container-fluid position-relative">
  <div class="shopBanner-txt position-absolute bottom-50">
  <h1 class="fs-2 fw-bold text-light">買一束花，送給特別的人。</h1>
  </div>
  </div>
  <div class="container mt-md-5 mt-3 mb-7">
    <select v-model="input.type" class="form-select w-25 mb-5" aria-label="Default select example">
      <option value="全部" selected>全部商品</option>
      <option value="鮮花">鮮花</option>
      <option value="花束">花束</option>
      <option value="盆花">盆花</option>
    </select>
    <div class="row">
      <div
        class="col-md-6 col-lg-3 mb-3 mb-md-5"
        v-for="product in filteredProducts"
        :key="product.id"
      >
        <div class="card h-100 border-primary" data-aos="fade-up">
          <router-link  :to="`/product/${product.id}`"  :style="{backgroundImage:`url(${product.imageUrl})`}" style="height:300px; background-size:cover; background-position:center center" class="position-relative">
             </router-link>
          <span class="badge bg-secondary fs-6 p-2 position-absolute">{{product.category}}</span>
          <div class="card-body bg-light text-secondary ">
            <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text fs-5 fw-bold mb-0">NT${{ product.price }}</p>
            <div class="d-flex">
              <button class="btn btn-info text-light me-3" @click="toggleFavorite(product.id)">
              <span v-if="favorite.includes(product.id)"><i class="bi bi-balloon-heart-fill me-1"></i></span>
              <span v-else><i class="bi bi-balloon-heart me-1"></i></span>
              收藏</button>
              <button class="btn btn-success text-secondary fw-bold"  @click="addToCart(product.id)"><i class="bi bi-basket-fill me-1"></i>加入購物車
          </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<style lang="scss">
.shop-banner{
  background: url("https://images.unsplash.com/photo-1460538512106-37e555b43281?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80") no-repeat center center;
  height:400px;
  background-size: cover;
  object-fit: cover;
}
.shopBanner-txt{
@media (min-width: 576px) {
    right:50%;
  }
}
</style>

<script>
import emitter from '@/methods/mitt'
export default {
  data () {
    return {
      products: [],
      input: {
        type: '全部'
      },
      cartData: {
        carts: []
      },
      // 從localStorage內讀取自定義的favorite欄位內容 並從字串轉型成json格式 設定預設為空陣列
      favorite: JSON.parse(localStorage.getItem('favorite')) || []
    }
  },
  methods: {
    // 取得產品
    getProducts () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url).then((res) => {
        this.products = res.data.products
      })
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
    },
    // 存到收藏
    toggleFavorite (id) {
      console.log(id)
      // 比對是favorite陣列中是否有相同的id的index存在
      const favoriteIndex = this.favorite.findIndex(item => item === id)
      // findIndex()沒有符合會回傳-1
      if (favoriteIndex === -1) {
        // favorite陣列內沒有此id的index 故新增到陣列內
        this.favorite.push(id)
        console.log(this.favorite)
      } else {
        // 如果已經有存在 則移除
        this.favorite.splice(favoriteIndex, 1)
        console.log(this.favorite)
      }
    }
  },
  computed: {
    // 篩選產品
    filteredProducts () {
      if (this.input.type === '全部') {
        return this.products
      } else {
        return this.products.filter(item => {
          return item.category === this.input.type
        })
      }
    }
  },
  watch: {
    // 深層監聽data內的favorite陣列 若有變動會寫入localStorage
    favorite: {
      handler () {
        // 將資料寫入localStorage的自訂欄位favorite localStorage不能存json要轉成字串
        localStorage.setItem('favorite', JSON.stringify(this.favorite))
      },
      deep: true
    }
  },
  mounted () {
    this.getProducts()
    // 把路由上的type存到data的input的type內
    if (this.$route.query.cate === undefined) {
      this.input.type = '全部'
    } else {
      this.input.type = this.$route.query.cate
    }
  }
}
</script>
