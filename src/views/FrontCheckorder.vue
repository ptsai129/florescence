<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-12 col-md-6">
        <h1 class="fs-3 fw-bold text-light text-center px-4 py-2 bg-success">
          訂單明細
        </h1>
        <ul class="list-unstyled mt-3" v-for="item in cartData.carts" :key="item.id">
          <li class="d-flex">
            <div
              :style="{ backgroundImage: `url(${item.product.imageUrl})` }"
              style="
                height: 120px;
                width: 120px;
                background-size: cover;
                background-position: center center;
              "
            ></div>
            <div class="px-3 text-secondary">
              <p class="fs-5 fw-bold">產品: {{ item.product.title }}</p>
              <p>購買數量: {{ item.qty }}件</p>
              <p class="fs-5">購買金額: NT${{ item.total }}</p>
            </div>
          </li>
          <hr>
        </ul>
        <p class="fs-4 text-secondary fw-bold">合計金額: NT$ {{ cartData.total}}</p>
      </div>
      <div class="col-12 col-md-6">
        <h2 class="fs-3 fw-bold text-light px-4 py-2 bg-success text-center">
          訂購資訊填寫
        </h2>
    <v-form ref="form" class="mt-3 bg-light p-3" v-slot="{ errors }" @submit="onSubmit" >
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <v-field id="email" name="email" type="email" class="form-control"
                       :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email"
                       v-model="form.user.email" ></v-field>
              <error-message name="email" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3">
              <label for="name" class="form-label">收件人姓名</label>
              <v-field id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
                       placeholder="請輸入姓名" rules="required" v-model="form.user.name"></v-field>
              <error-message name="姓名" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3">
              <label for="tel" class="form-label">收件人電話</label>
              <v-field id="tel" name="電話" type="text" class="form-control" :class="{ 'is-invalid': errors['電話'] }"
                       placeholder="請輸入電話" v-model="form.user.tel"  :rules="isPhone"></v-field>
              <error-message name="電話" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="address" class="form-label">收件人地址</label>
              <v-field id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }"
                       placeholder="請輸入地址" rules="required" v-model="form.user.address" ></v-field>
              <error-message name="地址" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">留言</label>
              <textarea id="message" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
            </div>
            <div class="text-end">
              <button type="submit" class="btn btn-danger"
                      >送出訂單</button>
            </div>
          </v-form>
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
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      orderedId: ''
    }
  },
  methods: {
    // 取得購物車
    getCarts () {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.cartData = res.data.data
          // 觸發FrontNavbar上購物車圖示數量更新
          emitter.emit('get-cart')
        })
    },
    // 驗證電話號碼
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    },
    // 送出表單
    onSubmit () {
      const order = this.form
      this.$http.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`, { data: order })
        .then((res) => {
          this.orderedId = res.data.orderId
          this.$swal('已送出訂單')
          // 清空表單
          this.$refs.form.resetForm()
          // 清空textarea
          this.form.message = ''
          // 重新渲染購物車並更新購物車上icon數字
          this.getCarts()
          // 跳轉到付款頁面
          this.toPayment()
        })
        .catch((error) => {
          alert(error.message)
        })
    },
    toPayment () {
      this.$router.push(`/payment/${this.orderedId}`)
    }
  },
  mounted () {
    this.getCarts()
  }
}
</script>
