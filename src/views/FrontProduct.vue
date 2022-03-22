<template>
<div class="container">
    <div class="row align-items-center my-5">
        <div class="col-md-6">
              <div  :style="{backgroundImage:`url(${product.imageUrl})`}" style="height:500px; background-size:cover; background-position:center center" class="rounded" >
              </div>
        </div>
        <div class="col-md-6">
          <h2 class="fw-bold h1 mb-1"> {{ product.title }}</h2>
          <p class="mb-0 text-muted text-end"><del>NT$ {{product.origin_price}}</del></p>
          <p class="h4 fw-bold text-end">NT${{product.price}}</p>
          <div class="row align-items-center">
            <div class="col-6">
              <div class="input-group my-3 bg-light rounded">
                <div class="input-group-prepend">
                  <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1">
                    <i class="bi bi-dash"></i>
                  </button>
                </div>
                <input type="text" class="form-control border-0 text-center my-auto shadow-none bg-light" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value="1">
                <div class="input-group-append">
                  <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2">
                    <i class="bi bi-plus"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-6">
              <button class="text-nowrap btn btn-dark w-100 py-2 rounded" @click="addToCart()">加入購物車</button>
            </div>
          </div>
          <p>{{product.description}}</p>
        </div>
      </div>
      </div>
</template>

<script>
export default {
  data () {
    return {
      product: [],
      id: ''
    }
  },
  methods: {
    // 取得單一產品
    getProduct () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.$http.get(url).then((res) => {
        this.product = res.data.product
      })
    },
    // 加入購物車
    addToCart (qty = 1) {
      // 定義要帶入api的資訊
      const data = {
        product_id: this.id,
        qty
      }
      this.$http.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, { data })
        .then((res) => {
          console.log(res)
          // 顯示已加入購物車提示訊息
          alert(res.data.message)
        })
    }
  },
  mounted () {
    this.id = this.$route.params.id
    this.getProduct()
  }
}
</script>
