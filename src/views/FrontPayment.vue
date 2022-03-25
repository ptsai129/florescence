<template>
<h1>付款頁面</h1>
<p>訂單編號:{{orderId}}</p>
<p>訂單產生時間:</p>
</template>

<script>
import emitter from '@/methods/mitt'
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
    // 接收訂單確認頁面(FrontCheckOrder)的事件觸發
    emitter.on('get-orderId', (order) => {
      console.log('有收到', order)
      this.orderId = order
      console.log(this.orderId)
    })
    // 執行取得特定訂單資料
    this.getOrderInfo()
  }
}
</script>
