<template>
<div class="container py-5">
    <div class="row">
        <div class="col-lg-8  col-12">
            <h1 class="fs-3 fw-bold text-light text-center px-4 py-3 bg-success">購物車清單</h1>
            <!-- 商品項目 如果購物車內有資料才執行 -->
            <template v-if="cartData.carts">
            <div v-for="item in cartData.carts" :key="item.id"  class="d-sm-flex justify-content-between my-4 pb-4 border-bottom">
                <div class="d-sm-flex text-center text-md-start">
                     <div class="mx-auto" :style="{backgroundImage:`url(${item.product.imageUrl})`}" style="height:240px; width:240px; background-size:cover; background-position:center center"></div>
                    <div class="ms-md-5 pt-3 text-secondary">
                        <h3 class="fs-4 fw-bold">產品名稱: {{item.product.title}}</h3>
                        <h4 clsss="fs-5 fw-bold" >產品金額:NT$ {{item.product.price}}</h4>
                        <p class="fs-6 pt-2">產品描述: {{item.product.description}}</p>
                    </div>
                </div>
                <div class="d-flex flex-column pt-2 pt-sm-0 mx-auto mx-sm-0 text-center" style="max-width: 10rem;" >
                    <div class="form-group mb-2">
                        <label for="quantity">購買數量</label>
                        <input class="form-control form-control-sm" type="number" id="quantity" value="1">
                    </div>
                    <button class="btn btn-secondary btn-sm btn-block mb-2" type="button">
                      <i class="bi bi-arrow-repeat"></i>更新購物車</button>
                    <button class="btn btn-outline-danger btn-sm btn-block mb-2" type="button">
                    <i class="bi bi-trash-fill"></i>
                    刪除</button>
                </div>
            </div>
            </template>
        </div>
        <!-- Sidebar-->
        <div class="col-lg-4 col-12 pt-3 pt-md-0">
            <h2 class="fs-3 fw-bold text-light px-4 py-3 bg-success text-center">合計</h2>
            <p class="h3 py-3">NT${{ cartData.total}}</p>
            <hr>
             <button class="btn btn-outline-danger me-2 mb-lg-0 mb-md-2" type="button" @click="deleteAll">
              清空購物車
            </button>
            <a class="btn btn-secondary btn-block" href="#">
            <i class="bi bi-card-heading"></i>
             建立訂單</a>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      cartData: {},
      productId: '',
      isLoadingItem: ''
    }
  },
  methods: {
    // 取得購物車
    getCarts () {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`).then((res) => {
        this.cartData = res.data.data
      })
    },
    // 更新購物車 帶入完整品項資料
    updateCart (item) {
    // 定義要帶入api的資訊
      const data = {
        product_id: item.id,
        qty: item.qty
      }
      // 加入購物車的品項id的值賦予到isLoadingItem變數上 用來做後續判斷
      this.isLoadingItem = item.id
      this.$http.put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`, { data }).then((res) => {
        // 顯示更新購物車提示訊息
        alert(res.data.message)
        // 再重新取得購物車內內容
        this.getCarts()
        // 完成購物車內容渲染後 將isLoadingItem狀態改為預設
        this.isLoadingItem = ''
      })
    }
  },
  mounted () {
    this.getCarts()
  }
}
</script>
