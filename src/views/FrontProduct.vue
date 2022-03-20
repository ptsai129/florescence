<template>
  <h2>單一產品</h2>
  <div class="container">
    {{ product.title }}
    <img :src="product.imageUrl" alt="產品圖片">
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: [],
      id: ''
    }
  },
  methods: {
    // 取得單一產品
    getProduct () {
      const { id } = this.$route.params
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`
      this.$http.get(url).then((res) => {
        this.product = res.data.product
      })
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
