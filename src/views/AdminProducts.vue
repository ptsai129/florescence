<template>
  <h2 class="fs-3 text-center py-3">後台產品管理列表</h2>
  <div class="container">
    <div class="text-end mt-4">
                                                   <!-- 用帶入的字串參數判斷開啟modal類別 -->
      <button class="btn btn-primary" type="button" @click="openModal('new')">
        建立新產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="150">產品</th>
          <th width="100">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="120">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
            <td style="width: 150px">
            <div style="
                height: 150px;
                background-size: cover;
                background-position: center;
              "
              :style="{ backgroundImage: `url(${item.imageUrl})` }"
            ></div></td>
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.origin_price }}</td>
          <td>{{ item.price }}</td>
          <td>
            <div class="form-check form-switch">
            <input class="form-check-input rounded" type="checkbox" id="flexSwitchCheckChecked" :checked="item.is_enabled == true" @change="item.is_enabled = !item.is_enabled">
            <label class="form-check-label" for="flexSwitchCheckChecked">{{ item.is_enabled ? "啟用" : "未啟用" }}</label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-primary btn-sm"  @click="openModal('edit', item )" >
                編輯
              </button>
              <button type="button" class="btn btn-outline-danger btn-sm"  @click="openModal('delete', item)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 頁數元件 前內(update)後外(getProductsList)  -->
    <Pagination
      :pages="pagination"
      @get-productlist="getProductsList"
    ></Pagination>
  </div>
  <!-- 新增&編輯產品元件 -->
  <product-modal :item="tempProduct"  :isNew="isNew"
    ref="productModal" @getProductsList="getProductsList"
    :current-page="pagination.current_page"
  ></product-modal>
  <!--刪除Modal -->
  <DeleteModal :item="tempProduct"
   @getProductList="getProductsList"
    ref="delProductModal"
  ></DeleteModal>
</template>

<script>
import DeleteModal from '@/components/DelProductModal.vue'
import Pagination from '@/components/AdminPagination.vue'
import ProductModal from '@/components/AdminProductModal.vue'
export default {
  components: {
    Pagination,
    ProductModal,
    DeleteModal
  },
  data () {
    return {
      products: [],
      pagination: {},
      isNew: false,
      tempProduct: {
        imagesUrl: []
      }
    }
  },
  methods: {
    // 取得產品列表  //參數預設值
    getProductsList (page = 1) {
      const getProductsUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`
      this.$http.get(getProductsUrl).then((res) => {
        const { products, pagination } = res.data
        this.products = products
        this.pagination = pagination
        console.log('取得產品列表')
      })
    },
    openModal (state, item) {
      // 如果判斷帶入變數顯示狀態是新增 就清空modal內資料
      if (state === 'new') {
        this.tempProduct = {
          imagesUrl: []
        }
        // 並將狀態改為新增
        this.isNew = true
        this.$refs.productModal.showModal()
        // 如果判斷帶入變數顯示狀態是修改
      } else if (state === 'edit') {
        // 避免多圖新增、修改、刪除會傳參考修改到 item.imagesUrl
        this.tempProduct = { ...item }
        this.isNew = false
        // 操控productModal元件內的methods
        this.$refs.productModal.showModal()
        if (!this.tempProduct.imagesUrl) {
          this.tempProduct.imagesUrl = []
        }
      } else if (state === 'delete') {
        this.tempProduct = { ...item }
        this.$refs.delProductModal.showModal()
      }
    }
  },
  mounted () {
    // 初始化
    this.getProductsList()
  }
}
</script>
