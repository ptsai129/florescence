<template>
<div class="container">
 <h2 class="fs-3 text-center py-3">後台訂單管理列表</h2>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>購買時間</th>
        <th>Email</th>
        <th>購買品項</th>
        <th>應付金額</th>
        <th>付款狀態</th>
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
                class="btn btn-outline-danger btn-sm me-1"
                type="button"     @click="openDelModal(order)"
              >
                刪除訂單
              </button>
              <button
                class="btn btn-primary btn-sm "
                type="button" @click="openModal(order)"
              >
                檢視訂單
              </button>

            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
    <!-- 頁數元件-->
    <Pagination
      :pages="pagination"
      @get-page="getOrders"
    ></Pagination>
  </div>
  <!--刪除Modal -->
  <DeleteModal :item="tempOrder"
    ref="delModal"  @del-item="deleteOrder"
  ></DeleteModal>
  <!--修改Modal-->
  <OrderModal :order="tempOrder" ref="orderModal" @change-paid="changePaid"></OrderModal>

</template>

<script>
import Pagination from '@/components/PaginationView.vue'
import DeleteModal from '@/components/DelModal.vue'
import OrderModal from '@/components/AdminOrderModal.vue'
export default {
  components: {
    Pagination,
    DeleteModal,
    OrderModal
  },
  data () {
    return {
      orders: {},
      pagination: {},
      tempOrder: {}
    }
  },
  methods: {
    // 取得所有訂單
    getOrders (page = 1) {
      const getOrdersUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      this.$http.get(getOrdersUrl).then((res) => {
        this.orders = res.data.orders
        this.pagination = res.data.pagination
      }).catch((err) => {
        console.log(err.messages)
      })
    },
    // 打開檢視訂單modal
    openModal (order) {
      this.tempOrder = { ...order }
      this.$refs.orderModal.showModal()
    },
    // 打開刪除訂單modal
    openDelModal (order) {
      this.tempOrder = { ...order }
      this.$refs.delModal.showModal()
    },
    // 刪除特定訂單
    deleteOrder () {
      const delOrderUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`
      this.$http.delete(delOrderUrl).then((res) => {
        this.getOrders()
        this.$refs.delModal.hideModal()
        this.$swal('已刪除訂單')
      }).catch((err) => {
        console.log(err)
      })
    },
    // 更新訂單狀態
    changePaid (order) {
      const changeOrderUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`
      // 將目前付款狀態儲存到payStatus變數上
      const payStatus = {
        is_paid: order.is_paid
      }
      this.$http.put(changeOrderUrl, { data: payStatus }).then((res) => {
        console.log(res)
        this.$refs.orderModal.hideModal()
        this.getOrders()
        this.$swal('付款狀態已更新')
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    // 初始化
    this.getOrders()
  }
}
</script>
