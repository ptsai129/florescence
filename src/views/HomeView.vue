<template>
<div class="banner container-fluid position-relative">
<!--文字要補輸入文字動畫效果 https://codepen.io/uiswarup/pen/JBMGbb-->
<h1 class="fs-1 text-light position-absolute top-50 start-50 translate-middle">
讓花的香氣和美好，走進你的生活裡</h1>
</div>
<div class="popular-product container-fluid bg-primary">
<div class="container">
<h3 class="py-3 text-light text-center"><i class="bi bi-gift pe-2"></i>熱門產品</h3>
</div>
</div>
<router-view></router-view>
</template>

<style lang="scss">

.banner{
  background:url('https://images.unsplash.com/photo-1554355201-f096c2044135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80') no-repeat center;
  height: 500px;
  background-size:cover;
  object-fit: cover;
}
</style>

<script>
export default {
}
</script>
