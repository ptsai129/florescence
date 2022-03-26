<template>
<h1>付款頁面</h1>
<p>訂單編號:{{orderId}}</p>
<p>訂單產生時間:</p>
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
    getOrderInfo () {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${this.orderId}`)
        .then((res) => {
          console.log(res)
          this.orderData = res.data.order
          console.log(this.orderData)
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
