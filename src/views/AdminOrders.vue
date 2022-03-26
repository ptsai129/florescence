<template>
<div class="container">
 <h2 class="fs-3 text-center py-3">後台訂單管理列表</h2>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>購買時間</th>
        <th>Email</th>
        <th>購買款項</th>
        <th>應付金額</th>
        <th>是否付款</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <!--把訂單資料一筆一筆帶出來-->
      <template v-for="(order, key) in orders" :key="key">
       <!--如果訂單陣列有內容才跑-->
        <tr v-if="orders.length" >
          <td>{{ order.create_at}}</td>
          <td><span>{{ order.user.email }}</span></td>
          <td>
            <ul class="list-unstyled">
              <!--帶出order.products內的數筆訂購產品資料-->
              <li  v-for="(product, index) in order.products" :key="index">
                {{ product.product.title}} 數量：{{product.qty}}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right">{{ order.total }}</td>
          <td>
            <div class="form-check form-switch">
            <input class="form-check-input rounded" type="checkbox" id="flexSwitchCheckChecked" :checked="order.is_paid == true " @change="order.is_paid = !order.is_paid">
            <label class="form-check-label" for="flexSwitchCheckChecked">{{ order.is_paid ? "已付款" : "未付款" }}</label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                type="button"
              >
                檢視
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                type="button"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
 </div>
</template>

<script>
export default {
  data () {
    return {
      orders: {},
      pagination: {}
    }
  },
  methods: {
    // 取得所有訂單
    getOrders (page = 1) {
      const getOrdersUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      this.$http.get(getOrdersUrl).then((res) => {
        this.orders = res.data.orders
        console.log(this.orders)
        this.pagination = res.data.pagination
        console.log(this.pagination)
      }).catch((err) => {
        console.log(err.messages)
      })
    }
  },
  mounted () {
    // 初始化
    this.getOrders()
  }
}
</script>
