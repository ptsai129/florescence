<template>
<Navbar/>
<router-view></router-view>
<Footer/>
</template>

<script>
import Navbar from '@/components/FrontNavbar.vue'
import Footer from '@/components/FrontFooter.vue'
export default {
  components: {
    Navbar, Footer
  }
}
</script>
