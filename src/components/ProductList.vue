<template>
<!-- 登入：產品列表 -->
  <div class="container">
    <template v-for="item in products" :key="item.id">
      <div class="border rounded p-3 mb-3">
        <div class="row">
          <div class="col-12 col-md-2">
            <img :src="item.imageUrl" alt="product">
          </div>
          <div class="col-12 col-md-8">
            <h4 class="text-primary mb-0">{{ item.title }}</h4>
            <p class="text-muted">{{ item.category }}</p>
            <p>NT${{ item.price }}</p>
          </div>
          <div class="col-12 col-md-2 d-flex align-items-center">
            <slot name="edit-btn" :item="item">
            </slot>
            <a href="#" class="text-danger">
              <span class="del material-icons md-18">
                delete_forever
              </span>
            </a>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss">
  img {
    border-radius: 1.4rem;
    width: 100%;
    height: auto;
    object-fit: cover;
    aspect-ratio: 1/1;
  }
  .del {
    line-height: 38px;
  }
</style>

<script>
export default {
  data () {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      addIsNew: false
    }
  },
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products`
      this.$http.get(api)
        .then((response) => {
          if (response.data.success) {
            this.products = response.data.products
            this.pagination = response.data.pagination
          }
        })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
