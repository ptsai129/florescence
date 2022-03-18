<template>
<Navbar></Navbar>
<router-view></router-view>
<footer class="front-footer  bg-primary">
  <div class="container d-flex align-items-center justify-content-between ">
  <p class="text-center text-secondary pt-3">© 2022 Florescence All Rights Reserved.</p>
  <router-link class="btn btn-outline-secondary" to="/login">管理員登入</router-link>
  </div>
  </footer>
</template>

<style lang="scss">
@import "src/assets/all.scss";
.front-footer{
height:60px;
}
</style>

<script>
import Navbar from '@/components/FrontNavbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>
