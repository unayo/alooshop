<template>
<!-- 產品詳細頁 -->
  <div class="container my-5">
    <div class="row">
      wwwwwwww
      <template v-for="item in product" :key="item.name">
        <div class="col-12 col-md-8">
          <img class="w-100" :src="item.image1" :alt="`${item.name} image`">
          <div class="d-flex justify-content-between my-4">
            <img :src="item.image2" :alt="`${item.name} image`" style="width: 48.5%">
            <img :src="item.image3" :alt="`${item.name} image`" style="width: 48.5%">
          </div>
          <img class="w-100" :src="item.image4" :alt="`${item.name} image`">
        </div>
      </template>
      <div class="col-12 col-md-4">
        <h3>
          CHANEL N°5
        </h3>
        <p class="mb-5">N°5，女性魅力的極致精髓。散發柔美澄透的乙醛花束香氣。經典傳奇香氛，蘊藏於極簡設計的獨特瓶身。</p>
        <p>NT$4,980</p>
        <div class="input-group mb-3">
          <input type="number" class="form-control" placeholder="0" aria-label="add Cart" aria-describedby="addCart">
          <button class="btn btn-outline-secondary" type="button" id="addCart">加入購物車</button>
        </div>
        <div class="mb-5">
          <a href="#" @click.prevent="addLike" class="d-flex align-items-center">
            <span class="material-icons me-2">{{ likeIcon }}</span>
            <span>加入我的收藏</span>
          </a>
        </div>
        <div class="mt-3">
          <h5>商品購買須知</h5>
          <p>
            產品因拍攝關係顏色可能略有差異，實際以廠商出貨為主。
            商品情境照為示意用，僅商品主體不包含其他配件，請以規格內容物為主。
            D’Perfume 盡可能確保所列商品備貨充足，但偶爾仍會有產品售罄的情況。
            如您所訂購的商品庫存不足，我們將盡快以電子郵件通知您。任何訂單變動均會在訂單總額
            與出貨訊息內更新。
          </p>
          <h5 class="mt-3">退換貨須知</h5>
          <p>
            依《消費者保護法》的規定，於全站購物皆享有商品到貨【七日猶豫期】（含例假日）之權益。
            若收到的商品有任何問題，可於猶豫期內申請退貨。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      like: false,
      likeIcon: 'favorite_border',
      id: '',
      product: [
        {
          name: 'CHANEL N°5',
          image1: require('@/assets/images/chanelN5-1.jpg'),
          image2: require('@/assets/images/chanelN5-2.jpg'),
          image3: require('@/assets/images/chanelN5-3.jpg'),
          image4: require('@/assets/images/chanelN5-4.jpg')
        }
      ]
    }
  },
  methods: {
    addLike () {
      this.like = !this.like
      if (this.like === false) {
        this.likeIcon = 'favorite_border'
      } else {
        this.likeIcon = 'favorite'
      }
    },
    getProductsId () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/${this.id}`
      this.$http.get(api)
        .then((response) => {
          if (response.data.success) {
            console.log('id', response.data.products)
          }
        })
    }
  },
  created () {
    console.log('w', this.$route.params.id)
    this.id = this.$route.params.id
  }
}
</script>
