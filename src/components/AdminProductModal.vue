<template>
  <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
           aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
  <div class="modal-dialog modal-xl">
          <div class="modal-content border-0">
            <div class="modal-header bg-dark text-white">
              <h5 id="productModalLabel" class="modal-title">
                <!--判斷要顯示新增還是編輯的modal標題-->
               <span>{{ isNew ? "新增" : "編輯" }}產品</span>
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-sm-4">
                    <div class="mb-3">
                      <label for="imageUrl" class="form-label">主圖網址</label>
                      <input type="text" class="form-control"
                             id="imageUrl" v-model="tempProduct.imageUrl" placeholder="請輸入圖片連結" >
                      <img class="img-fluid" :src="tempProduct.imageUrl" :alt="tempProduct.description">
                  </div>
                   <div class="mb-3">
                     <h3>多圖設置</h3>
                     <!-- 判斷傳入的資料是否為陣列 -->
                     <div v-if="Array.isArray(tempProduct.imagesUrl)">
                       <!-- key需為唯一值 所以加入其他內容避免重複 -->
                       <template v-for="(img , key) in tempProduct.imagesUrl" :key="key + '123'">
                       <input type="text" class="form-control" v-model="tempProduct.imagesUrl[key]" >
                       <img :src="tempProduct.imagesUrl[key]" class="img-fluid" alt="">
                      <button type="button" class="btn btn-danger btn-sm d-block w-100"
                       @click="tempProduct.imagesUrl.splice(key, 1)">刪除圖片</button>
                       </template>
                       <!-- 點擊按鈕就會新增內容到imagesUrl陣列內 如果imagesUrl陣列內沒有輸入內容或不存在第一筆資料 會預設顯示一個新增欄位-->
                       <button v-if="!tempProduct.imagesUrl.length || tempProduct.imagesUrl[tempProduct.imagesUrl.length-1]" type="button" class="btn btn-primary mt-3" @click="tempProduct.imagesUrl.push('')">新增圖片</button>
                     </div>
                   </div>
                  </div>
                <div class="col-sm-8">
                  <div class="mb-3">
                    <label for="title" class="form-label">標題</label>
                    <input id="title" type="text" class="form-control" v-model="tempProduct.title" placeholder="請輸入標題">
                  </div>

                  <div class="row">
                    <div class="mb-3 col-md-6">
                      <label for="category" class="form-label">分類</label>
                      <input id="category" type="text" class="form-control"
                         v-model="tempProduct.category"   placeholder="請輸入分類" >
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="price" class="form-label">單位</label>
                      <input id="unit" type="text" class="form-control" placeholder="請輸入單位"  v-model="tempProduct.unit">
                    </div>
                  </div>

                  <div class="row">
                    <div class="mb-3 col-md-6">
                      <label for="origin_price" class="form-label">原價</label>
                      <input id="origin_price" type="number" min="0" class="form-control" v-model.number="tempProduct.origin_price" placeholder="請輸入原價">
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="price" class="form-label">售價</label>
                      <input id="price" type="number" min="0" class="form-control"
                        v-model.number="tempProduct.price"   placeholder="請輸入售價" >
                    </div>
                  </div>
                  <hr>

                  <div class="mb-3">
                    <label for="description" class="form-label">產品描述</label>
                    <textarea id="description" type="text" class="form-control"
                       v-model="tempProduct.description"  placeholder="請輸入產品描述">
                    </textarea>
                  </div>
                  <div class="mb-3">
                    <label for="content" class="form-label" >說明內容</label>
                    <textarea id="description" type="text" class="form-control"
                       v-model="tempProduct.content"   placeholder="請輸入說明內容" >
                    </textarea>
                  </div>
                  <div class="mb-3">
                    <div class="form-check">
                      <input id="is_enabled" class="form-check-input" type="checkbox"
                             :true-value="1" :false-value="0" v-model="tempProduct.is_enabled">
                      <label class="form-check-label" for="is_enabled">是否啟用</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
              </button>
              <button type="button" class="btn btn-primary" @click="updateProduct()">
                確認
              </button>
            </div>
          </div>
        </div>
</div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  props: ['item', 'isNew', 'currentPage'],
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
    updateProduct () {
      let updateUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`
      let requestMethod = 'post'
      // 如果是編輯商品資料 api網址和請求方法會更改
      if (!this.isNew) {
        updateUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
        requestMethod = 'put'
        console.log('更改')
      }
      this.http[requestMethod](updateUrl, { data: this.tempProduct })
        .then((res) => {
        // 顯示已建立產品
          alert(res.data.message)
          // 重新取得新的資料並渲染到畫面上 update-products(內層事件)emit觸發外層getProductsList方法
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
