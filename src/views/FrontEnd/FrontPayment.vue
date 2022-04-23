<template>
  <div class="container py-5">
    <ul class="progressbar mb-5 text-secondary d-flex list-unstyled justify-content-around">
   <li class="bg-success d-flex flex-column align-items-center"><i class="bi bi-cart-check fs-2"></i>確認購物車</li>
   <li class="bg-success  d-flex flex-column align-items-center"><i class="bi bi-card-list fs-2"></i>填寫訂單</li>
   <li class="bg-warning d-flex flex-column align-items-center"><i class="bi bi-cash-coin fs-2"></i>完成付款</li>
   </ul>
    <div class="row">
      <div class="col-12 col-md-6" >
        <h1 class="fs-3 fw-bold text-light text-center px-4 py-2 bg-success">
          訂單明細
        </h1>
        <ul class="list-unstyled mt-3">
          <li
            class="d-flex"
            v-for="(product, index) in orderData.products"
            :key="index"
          >
            <div  :style="{ backgroundImage: `url(${product.product.imageUrl})` }"
              style="
                height: 170px;
                width: 170px;
                background-size: cover;
                background-position: center center;
              "
            ></div>
            <div class="px-3 text-secondary">
              <p class="fs-5 fw-bold">產品: {{ product.product.title }}</p>
              <p class="fs-5">付款狀態: {{ orderData.is_paid ? "已付款" : "未付款" }}</p>
              <p>購買數量: {{ product.qty}}件</p>
              <p class="fs-5">購買金額: NT${{ product.product.price }}</p>
            </div>
          </li>
          <hr />
        </ul>
        <p class="fs-4 text-secondary fw-bold">合計金額: NT$ {{orderData.total}}</p>
      </div>
      <div class="col-12 col-md-6">
        <h2 class="fs-3 fw-bold text-light px-4 py-2 bg-success text-center">
          訂購資訊
        </h2>
        <ul class="list-unstyled mt-3 bg-light p-3 text-secondary fw-bold">
          <li class="mb-2">訂單編號: &nbsp;{{ orderId }}</li>
          <li class="mb-2">訂單金額: &nbsp;NT${{ orderData.total }}</li>
          <li class="mb-2">訂購時間:&nbsp;{{ orderDate }}</li>
          <li class="mb-2">付款狀態:&nbsp;{{ orderData.is_paid ? "已付款" : "未付款" }}</li>
          <!--要寫判斷不然會跑不出來資料-->
          <li class="mb-2">Email:&nbsp;{{ orderData?.user?.email }}</li>
          <li class="mb-2">收件人姓名:&nbsp;{{ orderData?.user?.name }}</li>
          <li class="mb-2">連絡電話: &nbsp;{{ orderData?.user?.tel }}</li>
          <li class="mb-2">收件人地址:&nbsp;{{ orderData?.user?.address }}</li>
          <li class="mb-2">備註:&nbsp; {{ orderData.message }}</li>
        </ul>
        <button type="submit" class="btn btn-danger" @click="payTheBill()" >{{ orderData.is_paid ? "完成付款" : "確認付款" }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      orderId: '',
      orderData: {},
      orderDate: ''
    }
  },
  methods: {
    // 取得訂單資訊渲染到畫面上
    getOrderInfo () {
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
        )
        .then((res) => {
          this.orderData = res.data.order
          // 轉換unix時間
          this.orderDate = new Date(res.data.order.create_at * 1000)
            .toISOString()
            .substring(0, 10)
        })
        .catch((error) => {
          alert(error.message)
        })
    },
    // 付款按鈕
    payTheBill () {
      this.$http
        .post(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
        )
        .then((res) => {
          this.getOrderInfo()
          this.toCompletedPayment()
        })
        .catch((error) => {
          alert(error.message)
        })
    },
    toCompletedPayment () {
      setTimeout(() => {
        this.$router.push('/completedpayment')
      }, 2000)
    }
  },
  mounted () {
    // 把從確認訂單頁面跳轉過來路由上的orderedId存到data的orderId內
    this.orderId = this.$route.params.orderedId
    this.getOrderInfo()
  }
}
</script>

<style lang="scss">
.progressbar{
  li{
   width:31%;
  }
}
</style>
