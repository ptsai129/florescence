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
                :src="product.imagesUrl"
                alt="productPicture"
              />
            </div>
            <div class="col-sm-6">
              <span class="badge bg-primary rounded-pill">{{
                product.category
              }}</span>
              <p>商品描述：{{ product.description }}</p>
              <p>商品內容：{{ product.content }}</p>
              <div class="h5">{{ product.price }} 元</div>
              <del class="h6">原價 {{ product.origin_price }} 元</del>
              <div class="h5">現在只要 {{ product.price }} 元</div>
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
      // 數量預設一個
      qty: 1
    }
  },
  // 監聽props的item是否有變動
  watch: {
    item () {
      this.getProdcutDetails()
    }
  },
  methods: {
    showModal () {
      this.productModal.show()
    },
    hideModal () {
      this.productModal.hide()
    },
    getProdcutDetails () {
      // 觸發 getProdcutDetails 的時， qty 要變成初始值
      this.qty = 1
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${this.id}`)
        .then((res) => {
          this.product = res.data.product
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
