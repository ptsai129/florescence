<template>
  <div class="container mt-md-5 mt-3 mb-7">
    <h1 class="text-center fs-3 text-secondary fw-bold my-3">收藏的商品</h1>
    <div class="row">
      <template v-if="filteredItem">
      <div
        class="col-md-6 col-lg-3 mb-3 mb-md-5"
        v-for="product in filteredItem"
        :key="product[0].id"
      >
        <div class="card h-100 border-primary" data-aos="fade-up">
          <router-link
            :to="`/product/${product[0].id}`"
            :style="{ backgroundImage: `url(${product[0].imageUrl})` }"
            style="
              height: 300px;
              background-size: cover;
              background-position: center center;
            "
            class="position-relative"
          >
          </router-link>
          <span class="badge bg-secondary fs-6 p-2 position-absolute">{{
            product[0].category
          }}</span>
          <div class="card-body bg-light text-secondary">
            <h5 class="card-title">{{ product[0].title }}</h5>
            <p class="card-text fs-5 fw-bold mb-0">NT${{ product[0].price }}</p>
          </div>
        </div>
      </div>
      </template>
      <template v-else>
            <p class="fw-bold fs-3 text-light text-center">沒有收藏商品</p>
            <router-link class="btn btn-outline-primary text-secondary" to="/shopflowers">前往購物</router-link>
       </template>
    </div>
  </div>
</template>

<script>
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
      this.favoriteId.forEach((item) => {
        this.filteredItem.push(
          this.products.filter((product) => {
            return product.id === item
          })
        )
      })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
