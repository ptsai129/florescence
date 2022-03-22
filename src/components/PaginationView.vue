<template>
<nav aria-label="Page navigation example">
 <ul class="pagination">
   <!--如果沒有前一頁class要加上disabled-->
   <li class="page-item" :class="{ disabled: !pages.has_pre}">
     <a class="page-link" href="#" aria-label="Previous" @click.prevent="$emit('get-productlist', pages.current_page-1)">
       <span aria-hidden="true">&laquo;</span>
     </a>
   </li>
   <li class="page-item" :class="{active: page === pages.current_page }" v-for="page in pages.total_pages" :key="page +'page'">
   <!--不用定義methods直接定義emit-->
   <a class="page-link" href="#" @click.prevent="$emit('get-productlist', page)">{{ page }}</a>
   </li>
   <li class="page-item"  :class="{ disabled: !pages.has_next}" >
     <a class="page-link" href="#" aria-label="Next"  @click.prevent="$emit('get-productlist', pages.current_page + 1)">
       <span aria-hidden="true">&raquo;</span>
     </a>
   </li>
 </ul>
</nav>
</template>

<script>
export default {
  // 接收外層pagination傳入的值
  props: ['pages']
}
</script>
