<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-12 col-md-5">
        <h1 class="fs-3 fw-bold text-light text-center px-4 py-2 bg-success">
          確認訂單內容
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
      <div class="col-12 col-md-7">
        <h2 class="fs-3 fw-bold text-light px-4 py-2 bg-success text-center">
          填寫訂購資訊
        </h2>
        <form class="mt-3 bg-light p-3">
        <h3 class="mb-3 text-center text-secondary">訂購人資料</h3>
       <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">訂購人姓名</label>
     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
     </div>
            <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">訂購人手機號碼</label>
     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
     </div>
            <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">訂購人電子郵件</label>
     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
     </div>
           <h3 class="mb-3 text-center text-secondary">收件人資料</h3>
            <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">收件人姓名</label>
     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
     </div>
            <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">收件人手機號碼</label>
     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
     </div>
                 <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">收件人地址</label>
     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
     </div>
     <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">備註</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
  <button type="submit" class="btn btn-secondary w-100 my-3">送出訂單</button>
</form>

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
      }
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
    }
  },
  mounted () {
    this.getCarts()
  }
}
</script>
