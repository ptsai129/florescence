<template>
<div class="container">
  <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb" class="border-bottom">
  <ol class="breadcrumb mt-3">
    <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
     <li class="breadcrumb-item"><router-link to="/shopflowers">選購花禮</router-link></li>
    <li class="breadcrumb-item active fw-bold" aria-current="page">{{product.title}}</li>
   </ol>
   </nav>
    <div class="row align-items-center my-5">
        <div class="col-12 col-md-6">
              <div  :style="{backgroundImage:`url(${product.imageUrl})`}" style="height:500px; background-size:cover; background-position:center center" class="rounded" >
              </div>
        </div>
        <div class="col-12 col-md-6">
          <h1 class="fw-bold h1 mb-1"> {{ product.title }}</h1>
          <p class="mb-0 text-muted text-end"><del>原價 NT$ {{product.origin_price}}</del></p>
          <p class="h4 fw-bold text-end">特價 NT${{product.price}}</p>
          <p>{{product.description}}</p>
          <div class="row align-items-center">
            <div class="col-6">
             <select class="form-select text-center border-primary" v-model="qty">
             <option value="" selected>選擇購買數量</option>
             <option value="1">1件商品</option>
             <option value="2">2件商品</option>
             <option value="3">3件商品</option>
             <option value="4">4件商品</option>
             <option value="5">5件商品</option>
             </select>
            </div>
            <div class="col-6">
              <button class="text-nowrap btn btn-secondary w-100 py-2 rounded" @click="addToCart(qty)"  :disabled="isClicked===true">加入購物車</button>
            </div>
          </div>
          <small class="text-info mt-3">如需大量訂購，歡迎透過電話和我們討論</small>
        </div>
      </div>
      </div>
<div class="container-fluid bg-info">
<div class="container">
<div class="row">
<div class="col-12 col-md-6 p-5">
<h2 class="fs-5 text-primary fw-bold mb-3">注意事項</h2>
<ul class="list-unstyled text-primary fs-6">
<li class="mb-2 "><i class="bi bi-chat-heart me-1"></i>全系列商品皆為手工製作，實際商品尺寸可能會與標示有些微誤差。</li>
<li class="mb-2"><i class="bi bi-chat-heart me-1"></i>商品圖片僅供參考，鮮花花材、植栽、乾燥花材...等天然植物，其顏色及大小會隨季節和氣候變化。</li>
<li class="mb-2"><i class="bi bi-chat-heart me-1"></i>遇臨時性的花材缺貨或品質不佳的情形，將以等值新鮮花材設計調整。</li>
<li class="mb-2"><i class="bi bi-chat-heart me-1"></i>商品圖片中花器或配飾缺貨時，會以等值之花器、配飾替代。</li>
<li class="mb-2"><i class="bi bi-chat-heart me-1"></i>特殊節日（如母親節、情人節），若花材價格高漲，商品售價將隨之調整。</li>
</ul>
</div>
<div class="col-md-6 notice-bg d-none d-md-block">
</div>
</div>
</div>
</div>
</template>

<script>
import emitter from '@/methods/mitt'
export default {
  data () {
    return {
      product: [],
      id: '',
      qty: '',
      cartData: {
        carts: []
      },
      isClicked: false
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
    addToCart (qty) {
      if (qty === '') {
        this.$swal('請選擇商品數量')
        return
      }
      const num = parseInt(qty)
      // 定義要帶入api的資訊
      const data = {
        product_id: this.id,
        qty: num
      }
      this.$http.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, { data })
        .then((res) => {
          // 觸發購物車圖示數字變動
          emitter.emit('get-cart')
          this.$swal('商品已加入購物車')
          this.isClicked = true
          this.setClickableBtn()
        }).catch((err) => {
          console.log(err.response)
        })
    },
    // 避免使用者連續點擊，瘋狂 call API
    setClickableBtn () {
      setTimeout(() => {
        this.isClicked = false
      }, 2000)
    }
  },
  mounted () {
    // 把路由上的id存到data的id內
    this.id = this.$route.params.id
    this.getProduct()
  }
}
</script>

<style lang="scss">
.notice-bg{
background-image: url(https://images.unsplash.com/photo-1587317997367-3d47566f9528?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80);
background-position: center center;
}
</style>
