<template>
<!-- 產品列表頁面 -->
  <div @scroll.passive="scrollEvent" class="brands">
    <div class="container">
      <template v-for="item in brands" :key="item.brandName">
        <a href="" class="me-4">{{ item.brandName }}</a>
      </template>
    </div>
  </div>
  <Brands></Brands>
</template>

<style lang="scss">
  .brands {
    height: 35px;
    position: sticky;
    top: 56px;
    line-height: 35px;
    background: #916100fa;
    a {
      color: white;
    }
  }
</style>
<script>
import Brands from '@/views/Brands.vue'

export default {
  name: 'Products',
  components: {
    Brands
  },
  data () {
    return {
      brands: []
    }
  },
  methods: {
    scrollEvent (e) {
      console.log(e)
    }
  }
}
</script>
