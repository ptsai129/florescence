<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-12 col-md-6">
        <h1 class="fs-3 fw-bold text-light text-center px-4 py-2 bg-success">
          訂單明細
        </h1>
        <ul class="list-unstyled mt-3">
          <li
            class="d-flex"
            v-for="(product, index) in orderData.products"
            :key="index"
          >
            <div
              style="
                height: 120px;
                width: 120px;
                background-size: cover;
                background-position: center center;
              "
            ></div>
            <div class="px-3 text-secondary">
              <p class="fs-5 fw-bold">產品: {{ product.product.title }}</p>
              <p class="fs-5">付款狀態: {{ orderData.is_paid }}</p>
              <p>購買數量: {{ product.product.num }}件</p>
              <p class="fs-5">購買金額: NT${{ orderData.total }}</p>
            </div>
          </li>
          <hr />
        </ul>
        <p class="fs-4 text-secondary fw-bold">合計金額: NT$ {{}}</p>
      </div>
      <div class="col-12 col-md-6">
        <h2 class="fs-3 fw-bold text-light px-4 py-2 bg-success text-center">
          訂購資訊
        </h2>
        <ul class="list-unstyled mt-3 bg-light p-3 text-secondary fw-bold">
          <li class="mb-2">訂單編號:編號{{ orderId }}</li>
          <li class="mb-2">訂單金額: NT${{ orderData.total }}</li>
          <li class="mb-2">訂購時間:年月日轉換{{ orderData.create_at }}</li>
          <li class="mb-2">付款狀態:{{ orderData.is_paid }}</li>
          <li class="mb-2">Email:{{ orderData.user.email }}</li>
          <li class="mb-2">收件人姓名:{{ orderData.user.name }}</li>
          <li class="mb-2">連絡電話: {{ orderData.user.tel }}</li>
          <li class="mb-2">收件人地址:{{ orderData.user.address }}</li>
          <li class="mb-2">備註: {{ orderData.message }}</li>
        </ul>
        <button type="submit" class="btn btn-danger" @click="payTheBill()">確認付款</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      orderId: '',
      orderData: {}
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
          console.log(res)
          this.orderData = res.data.order
          console.log(this.orderData)
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
          console.log(res)
          this.$swal('付款完成')
        })
        .catch((error) => {
          alert(error.message)
        })
    }
  },
  mounted () {
    // 把路由上的orderedId存到data的orderId內
    this.orderId = this.$route.params.orderedId
    this.getOrderInfo()
  }
}
</script>
