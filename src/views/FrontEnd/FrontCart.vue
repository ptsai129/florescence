<template>
<div class="container py-5">
   <ul class="progressbar mb-5 text-secondary d-flex list-unstyled justify-content-around">
   <li class="bg-warning d-flex flex-column align-items-center"><i class="bi bi-cart-check fs-2"></i>確認購物車</li>
   <li class="border border-success border-2 d-flex flex-column align-items-center"><i class="bi bi-card-list fs-2"></i>填寫訂單</li>
   <li class="border border-success border-2 d-flex flex-column align-items-center"><i class="bi bi-cash-coin fs-2"></i>完成付款</li>
   </ul>
    <div class="row">
        <div class="col-lg-8  col-12">
            <h1 class="fs-3 fw-bold text-light text-center px-4 py-2 bg-success">購物車清單</h1>
            <!-- 商品項目 如果購物車內有資料才執行 -->
            <template v-if="cartLength">
            <div v-for="item in cartData.carts" :key="item.id"  class="d-sm-flex justify-content-between my-4 pb-4 border-bottom">
                <div class="d-sm-flex text-center text-md-start">
                     <div class="mx-auto" :style="{backgroundImage:`url(${ item.product.imageUrl })`}" style="height:240px; width:240px; background-size:cover; background-position:center center"></div>
                    <div class="ms-md-5 pt-3 text-secondary">
                        <h3 class="fs-4 fw-bold">產品: {{ item.product.title }}</h3>
                        <h4 clsss="fs-5 fw-bold" >單價:NT$ {{ item.product.price }}</h4>
                        <p>購買金額:NT${{ item.total }}</p>
                    </div>
                </div>
                <div class="d-flex flex-column pt-2 pt-sm-0 mx-auto mx-sm-0 text-center" style="max-width: 10rem;" >
                      <div class="form-group mb-2">
                        <p class="mb-0 text-secondary">購買數量</p>
                        <select class="form-select text-center" v-model="item.qty" @change="updateCart(item)">
                          <!-- 限制每品項最多數量10個  目前選取到的數值綁定api取得的qty-->
                          <option :value="num" v-for="num in 10" :key="`${ num }${ item.id }`"
                           :selected="item.qty === num">{{ num }}</option>
                        </select>
                        </div>
                    <button class="btn btn-outline-danger btn-sm btn-block mb-2" type="button" @click="deleteCartItem(item.id)">
                    <i class="bi bi-trash-fill"></i>
                    刪除</button>
                </div>
            </div>
            </template>
            <!-- 商品項目 如果購物車內沒有資料顯示 -->
            <template v-else>
            <div class="d-flex flex-column align-items-center justify-content-center mb-3" style="background-Image:url(https://images.unsplash.com/photo-1486306885345-1256d25cd259?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80); height:500px; background-position:bottom center;">
            <p class="fw-bold fs-3 text-light text-center">購物車內沒有商品</p>
            <router-link class="btn btn-light text-secondary" to="/shopflowers">前往購物</router-link>
            </div>
            </template>
        </div>
        <!-- Sidebar-->
        <div class="col-lg-4 col-12 pt-3 pt-md-0">
            <h2 class="fs-3 fw-bold text-light px-4 py-2 bg-success text-center">合計</h2>
            <p class="fs-4 mb-0">商品金額: NT${{ cartData.total }}</p>
            <p class="fs-4 text-dark">運費: 免運費</p>
            <p class="fs-4 fw-bold text-secondary">小計: NT${{ cartData.total }}</p>
            <hr>
             <button class="btn btn-outline-danger me-2 mb-lg-0 mb-md-2" type="button" @click="deleteAll">
               <i class="bi bi-trash-fill"></i>清空購物車
            </button>
            <!--購物車內沒商品不能點擊確認購物車按鈕-->
            <button class="btn btn-secondary btn-block btn-cart" to="/checkorder" :disabled="cartLength==0" @click="toCheckorder()">
            <i class="bi bi-clipboard-check"></i>
             確認購物車</button>
        </div>
    </div>
</div>
</template>

<script>
import emitter from '@/methods/mitt'
export default {
  data () {
    return {
      cartData: {
        carts: []
      },
      productId: '',
      cartLength: ''
    }
  },
  methods: {
    // 取得購物車
    getCarts () {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`).then((res) => {
        this.cartData = res.data.data
        this.cartLength = res.data.data.carts.length
        // 觸發FrontNavbar上購物車圖示數量更新
        emitter.emit('get-cart')
      })
    },
    // 更新購物車 帶入完整品項資料
    updateCart (item) {
    // 定義要帶入api的資訊
      const data = {
        product_id: item.id,
        qty: item.qty
      }
      this.$http.put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`, { data }).then((res) => {
        // 顯示更新購物車提示訊息
        this.$swal('已更新數量')
        // 再重新取得購物車內內容
        this.getCarts()
      })
    },
    // 刪除全部購物車
    deleteAll () {
      this.$http.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`)
        .then((res) => {
          this.getCarts()
          this.$swal('購物車已清空')
        })
    },
    // 刪除購物車內單一品項
    deleteCartItem (id) {
      this.$http.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`)
        .then((res) => {
          this.getCarts()
          this.$swal('已刪除商品')
        })
    },
    toCheckorder () {
      // 購物車內有商品才會可以被點擊並且跳轉到訂單填寫頁面
      this.$swal('完成購物車確認')
      this.$router.push('/checkorder')
    }
  },
  mounted () {
    this.getCarts()
  }
}
</script>

<style lang="scss">
.btn-cart:disabled{
cursor: not-allowed;
}
.progressbar{
  li{
   width:31%;
  }
}
</style>
