<template>
  <div class="shop-banner container-fluid position-relative">
  <div class="shopBanner-txt position-absolute bottom-50">
  <h1 class="fs-2 fw-bold text-light">買一束花，送給特別的人</h1>
  </div>
  </div>
  <div class="container mt-md-5 mt-3 mb-7">
    <select v-model="input.type" class="form-select w-25 mb-5" aria-label="Default select example">
      <option value="全部" selected>全部</option>
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
        <div class="card h-100 border-primary">
          <router-link  :to="`/product/${product.id}`"  :style="{backgroundImage:`url(${product.imageUrl})`}" style="height:300px; background-size:cover; background-position:center center" class="position-relative">
          </router-link>
          <span class="badge bg-secondary fs-6 p-2 position-absolute">{{product.category}}</span>
          <div class="card-body bg-light text-secondary ">
            <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text fs-5 fw-bold mb-0">NT${{ product.price }}</p>
            <div class="d-flex">
              <button class="btn btn-info text-light me-3"><i class="bi bi-balloon-heart-fill me-1"></i>追蹤商品</button>
              <router-link class="btn btn-success text-secondary fw-bold"  :to="`/product/${product.id}`"><i class="bi bi-search me-1"></i>查看更多
          </router-link>
            </div>
          </div>
        </div>
      </div>
      <nav class="d-flex justify-content-center">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item active"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
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
export default {
  data () {
    return {
      products: [],
      input: {
        type: '全部'
      }
    }
  },
  methods: {
    // 取得產品
    getProducts () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url).then((res) => {
        this.products = res.data.products
      })
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
  mounted () {
    this.getProducts()
  }
}
</script>
