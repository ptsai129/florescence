<template>
<Navbar></Navbar>
<router-view></router-view>
<footer class="front-footer container-fluid bg-primary">
  <p class="text-center text-secondary pt-3">© 2022 Florescence All Rights Reserved.</p>
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
