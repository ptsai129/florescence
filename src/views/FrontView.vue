<template>
<Navbar></Navbar>
<router-view></router-view>
<footer class="container-fluid bg-primary">
  <div class="container d-flex flex-column flex-md-row align-items-md-center align-items-end justify-content-md-between">
  <p class="text-center text-secondary pt-3">© 2022 Florescence All Rights Reserved.</p>
  <router-link class="btn btn-sm btn-outline-secondary" to="/login">管理員登入</router-link>
  </div>
  </footer>
</template>

<style lang="scss">
@import "src/assets/all.scss";
</style>

<script>
import Navbar from '@/components/FrontNavbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>
