<template>
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
           aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <!--判斷要顯示新增還是編輯的modal標題-->
            <span>{{ isNew ? "新增" : "編輯" }}產品</span>
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
            <div class="col-sm-6">
              <img
                class="img-fluid"
                :src="tempProduct.imagesUrl"
                alt="productPicture"
              />
            </div>
            <div class="col-sm-6">
              <span class="badge bg-primary rounded-pill">{{
                product.category
              }}</span>
              <p>商品描述：{{ tempProduct.description }}</p>
              <p>商品內容：{{ tempProduct.content }}</p>
              <div class="h5">{{ tempProduct.price }} 元</div>
              <del class="h6">原價 {{ tempProduct.origin_price }} 元</del>
              <div class="h5">現在只要 {{ tempProduct.price }} 元</div>
              <div>
                <div class="input-group">
                  <input
                    type="number"
                    class="form-control"
                    min="1"
                    v-model="qty"
                  />
                  <button
                    type="button"
                    class="btn btn-primary"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
            <!-- col-sm-6 end -->
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  props: {
    // 接收外層AdminProducts.vue傳入的tempProduct
    item: {
      type: Object,
      default () {
        return {}
      }
    },
    isNew: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      modal: {},
      product: {},
      tempProduct: {
        imagesUrl: []
      },
      qty: 1
    }
  },
  // 監聽props的item是否有變動
  watch: {
    item () {
      this.tempProduct = JSON.parse(JSON.stringify(this.item))
    }
  },
  methods: {
    showModal () {
      this.productModal.show()
    },
    hideModal () {
      this.productModal.hide()
    },
    updateProducts () {
      let updateUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`
      let requestMethod = 'post'
      // 如果是編輯商品資料 api網址和請求方法會更改
      if (!this.isNew) {
        updateUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.item.id}`
        requestMethod = 'put'
        console.log('更改')
      }
      this.http[requestMethod](updateUrl, { data: this.item })
        .then((res) => {
        // 顯示已建立產品
          alert(res.data.message)
          // 重新取得新的資料並渲染到畫面上
          this.$emit('update-products')
          // 關閉modal
          this.hideModal()
          console.log('顯示已建立商品')
        })
        .catch((err) => {
          alert(err.data.message)
        })
    }
  },
  mounted () {
    this.tempProduct = JSON.parse(JSON.stringify(this.item))
    // 實體化modal運用ref抓到dom 並儲存到modal物件內
    this.productModal = new Modal(this.$refs.modal)
  }
}
</script>
