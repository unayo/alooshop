<template>
  <div class="container my-5">
    <div class="row">
      <template v-for="item in brands" :key="item.id">
        <div class="product col-12 col-md-3">
          <a href="#" @click.prevent="getProductsID(item.id)">
            <img src="../assets/images/banner.jpg" alt="product">
            <h4>{{ item.title }}</h4>
            <p class="text-dark">{{ item.description }}</p>
            <p>
              NT${{ item.origin_price}}
              <span class="text-muted text-decoration-line-through">NT${{ item.price}}</span>
            </p>
          </a>
          <div>
            <a href="#" @click.prevent="isLike" class="me-2">
              <span class="material-icons">{{ likeIcon }}</span>
            </a>
            <a href="#" @click.prevent="addShop">
              <span class="material-icons">{{ shopIcon }}</span>
            </a>
          </div>
        </div>
      </template>
    </div>
  </div>
  <Cta></Cta>
</template>

<style lang="scss">
  .product {
    img {
      height: 255px;
    }
  }
</style>

<script>
import Cta from '@/components/Cta.vue'

export default {
  components: {
    Cta
  },
  data () {
    return {
      brands: [],
      pagination: {},
      like: false,
      likeIcon: 'favorite_border',
      shop: false,
      shopIcon: 'add_shopping_cart'
    }
  },
  methods: {
    isLike () {
      this.like = !this.like
      if (this.like === false) {
        this.likeIcon = 'favorite_border'
      } else {
        this.likeIcon = 'favorite'
      }
    },
    addShop () {
      this.shop = !this.shop
      if (this.shop === false) {
        this.shopIcon = 'add_shopping_cart'
      } else {
        this.shopIcon = 'shopping_cart'
      }
    },
    getUserProducts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(api)
        .then((response) => {
          if (response.data.success) {
            this.brands = response.data.products
            this.pagination = response.data.pagination
          }
        })
    },
    getProductsID (id) {
      this.$router.push(`/user-products/product/${id}`)
    }
  },
  created () {
    this.getUserProducts()
  }
}
</script>
