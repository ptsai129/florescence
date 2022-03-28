<template>
  <div
    class="modal fade"
    id="productModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>訂單明細</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-4">
              <h3>用戶資料</h3>
              <table class="table">
                <tbody  v-if="adminOrder.user">
                <!--不懂為什麼少這個判斷會出錯??-->
                  <tr>
                    <th style="width: 100px">姓名</th>
                    <td>{{adminOrder.user.name }}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{{adminOrder.user.email }}</td>
                  </tr>
                  <tr>
                    <th>電話</th>
                    <td>{{ adminOrder.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>地址</th>
                    <td>{{ adminOrder.user.address}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-8">
              <h3>訂單細節</h3>
              <table class="table">
                <tbody>
                  <tr>
                    <th style="width: 100px">訂單編號</th>
                    <td>{{ adminOrder.id }}</td>
                  </tr>
                  <tr>
                    <th>下單時間</th>
                    <td>{{ adminOrder.create_at}}</td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <strong  v-if="adminOrder.is_paid" class="text-success"
                        >已付款</strong
                      >
                      <span v-else class="text-muted">尚未付款</span>
                    </td>
                  </tr>
                  <tr>
                    <th>總金額</th>
                    <td>
                      {{ adminOrder.total }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="table">
                <thead>
                  <tr><h3>選購商品</h3></tr>
                </thead>
                <tbody>
                  <tr v-for="product in adminOrder.products" :key="product.id">
                    <th>
                      {{ product.product.title }}
                    </th>
                    <td>{{ product.qty }} / {{ product.product.unit }}</td>
                    <td class="text-end">
                      NT${{ product.final_total }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-end">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault" v-model="adminOrder.is_paid"
                  />
                  <label class="form-check-label" for="flexCheckDefault" >
                    <span v-if="adminOrder.is_paid">已付款</span>
                    <span v-else>未付款</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary" @click="$emit('change-paid', adminOrder)"
          >
            修改付款狀態
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'

export default {
  data () {
    return {
      adminOrder: {}
    }
  },
  // 接收外層(tempOrder)傳入的值
  props: ['order'],
  // 觸發按鈕 執行外層更改付款狀態函式
  emits: ['change-paid'],
  watch: {
    // 監聽props的order(接收外層(tempOrder)傳入的值)
    order () {
      this.adminOrder = this.order
      console.log(this.adminOrder)
    }
  },
  methods: {
    showModal () {
      this.orderModal.show()
    },
    hideModal () {
      this.orderModal.hide()
    },
    updateOrder () {
    }
  },
  mounted () {
    // 實體化modal運用ref抓到dom 並儲存到modal物件內
    this.orderModal = new Modal(this.$refs.modal)
  }
}
</script>
