<template>
<!-- 登入後頁面 -->
  <div class="container my-5">
    <div class="text-end">
      <button
        @click="openModal(true)"
        class="btn btn-primary" type="button">
        增加一個產品
      </button>
    </div>
    <div class="row">
      <div class="col-12 col-md-4">
        <ProductNav></ProductNav>
      </div>
      <div class="col-12 col-md-8">
        <AddProduct
          :product="tempProduct"
          @update="updateProduct"
          ref="productModal">
        </AddProduct>
        <ProductList
          @emitP="emitProductList"
          :product="tempProduct"
          :addIsNew="isNew"
          ref="get">
          <template v-slot:edit-btn="item">
            <button
              @click="openModal(false, item)"
              type="button" class="btn btn-outline-secondary me-2">
              編輯
            </button>
          </template>
        </ProductList>
      </div>
    </div>
  </div>
</template>

<script>
import ProductNav from '@/components/ProductNav.vue'
import AddProduct from '@/components/AddProduct.vue'
import ProductList from '@/components/ProductList.vue'

export default {
  components: {
    ProductNav,
    AddProduct,
    ProductList
  },
  methods: {
    openModal (addIsNew, item) {
      if (addIsNew) {
        this.tempProduct = {}
      } else {
        this.tempProduct = item
      }
      console.log('temp', addIsNew, this.tempProduct)
      this.$refs.productModal.openBtn()
    },
    updateProduct (item) {
      // emit 得到的資料儲存到 tempProduct
      this.tempProduct = item
      console.log('this.tempProduct', this.tempProduct)
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      this.$http.post(api, { data: this.tempProduct })
        .then((response) => {
          console.log(response)
          this.$refs.productModal.closeBtn()
          this.$refs.get.getProducts()
        })
    },
    emitProductList (item) {
      this.tempProduct = { ...item }
      console.log('emitProductList (item)', this.tempProduct)
      this.$refs.productModal.openBtn()
    }
  },
  created () {
    const myToken = document.cookie.replace(/(?:(?:^|.*;\s*)shopToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = myToken

    const api = `${process.env.VUE_APP_API}api/user/check`
    this.$http.post(api, this.user)
      .then((response) => {
        if (!response.data.success) {
          this.$router.push('/login')
        }
      })
  }
}
</script>
