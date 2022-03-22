<template>
<div class="container">
    <div class="row align-items-center my-5">
        <div class="col-md-6 col-lg-4">
              <div  :style="{backgroundImage:`url(${product.imageUrl})`}" style="height:300px; background-size:cover; background-position:center center" class="rounded" >
              </div>
        </div>
        <div class="col-md-6 col-lg-8">
          <h2 class="fw-bold h1 mb-1"> {{ product.title }}</h2>
          <p class="mb-0 text-muted text-end"><del>NT$ {{product.origin_price}}</del></p>
          <p class="h4 fw-bold text-end">NT${{product.price}}</p>
          <div class="row align-items-center">
            <div class="col-6">
             <select class="form-control text-center">
             <option value="0" disabled="disabled" selected="selected">選擇購買數量</option>
             <option value="1">1件商品</option>
             <option value="2">2件商品</option>
             <option value="3">3件商品</option>
             <option value="4">4件商品</option>
             <option value="5">5件商品</option>
             </select>
            </div>
            <div class="col-6">
              <button class="text-nowrap btn btn-dark w-100 py-2 rounded" @click="addToCart()">加入購物車</button>
            </div>
          </div>
          <small class="text-info mt-3">如需大量訂購，歡迎透過電話和我們討論</small>
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
