<template>
  <div class="container mt-md-5 mt-3 mb-7">
    <select class="form-select w-25 mb-5" aria-label="Default select example">
      <option value="全部" selected>全部</option>
      <option value="鮮花">鮮花</option>
      <option value="花束">花束</option>
      <option value="盆花">盆花</option>
    </select>
    <div class="row">
      <div
        class="col-md-6 col-lg-3 mb-3 mb-md-5"
        v-for="product in products"
        :key="product.id"
      >
        <div class="card h-100 border-primary">
          <div :style="{backgroundImage:`url(${product.imageUrl})`}" style="height:300px; background-size:cover; background-position:center center">
          </div>
          <div class="card-body text-secondary">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">{{ product.description }}</p>
              <p class="fs-5 fw-bold mb-0">NT${{ product.price }}</p>
            <div class="d-flex">
              <a href="#" class="btn btn-info text-light me-3"><i class="bi bi-balloon-heart"></i></a>
              <a href="#" class="btn btn-success text-primary fw-bold"><i class="bi bi-basket-fill me-1"></i>加入購物車</a>
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

<script>
export default {
  data () {
    return {
      products: []
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
  mounted () {
    this.getProducts()
  }
}
</script>
