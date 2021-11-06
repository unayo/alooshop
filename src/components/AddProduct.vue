<template>
  <!-- 新增產品彈出視窗 -->
  <!-- Modal -->
  <div
    ref="modal"
    class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">新增產品</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="image" class="form-label">輸入圖片網址</label>
                <input
                v-model="productModal.imageUrl"
                type="text" class="form-control" id="image" placeholder="請輸入圖片連結">
              </div>
              <div class="mb-3">
                <label for="customFile" class="form-label">或 上傳圖片
                  <i class="fas fa-spinner fa-spin"></i>
                </label>
                <input type="file" id="customFile" class="form-control">
              </div>
              <img
                :src="productModal.imageUrl"
                class="img-fluid" alt="">
              <!-- 延伸技巧，多圖 -->
              <div class="mt-5">
                <div class="mb-3 input-group" >
                  <input type="url" class="form-control form-control" placeholder="請輸入連結">
                  <button type="button" class="btn btn-outline-danger">
                    移除
                  </button>
                </div>
                <div>
                  <button class="btn btn-outline-primary btn-sm d-block w-100">
                    新增圖片
                  </button>
                </div>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  v-model="productModal.title"
                  type="text" class="form-control" id="title" placeholder="請輸入標題">
              </div>
              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input
                    v-model="productModal.category"
                    type="text" class="form-control" id="category" placeholder="請輸入分類">
                </div>
                <div class="mb-3 col-md-6">
                  <label for="unit" class="form-label">單位</label>
                  <input
                    v-model="productModal.unit"
                    type="text" class="form-control" id="unit" placeholder="請輸入單位">
                </div>
              </div>
              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input
                    v-model="productModal.origin_price"
                    type="number" class="form-control" id="origin_price" placeholder="請輸入原價">
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input
                    v-model="productModal.price"
                    type="number" class="form-control" id="price" placeholder="請輸入售價">
                </div>
              </div>
              <hr>
              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea
                  v-model="productModal.description"
                  type="text" class="form-control" id="description" placeholder="請輸入產品描述"></textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea
                  v-model="productModal.content"
                  type="text" class="form-control" id="content" placeholder="請輸入產品說明內容"></textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    id="is_enabled">
                  <label class="form-check-label" for="is_enabled">
                    是否啟用
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
          <button
            @click="$emit('update', productModal)"
            type="button" class="btn btn-primary">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @media (min-width: 576px){
    .modal-dialog {
      max-width: 911px;
    }
  }
</style>

<script>
import Modal from 'bootstrap/js/dist/modal.js'

export default {
  prop: {
    // 內層接收 tempProduct
    product: {
      type: Object,
      default () {
        return {}
      }
    },
    addIsNew: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  watch: {
    product () {
      this.productModal = this.product
    },
    addIsNew () {
      this.isNew = this.addIsNew
      console.log('watch', this.isNew)
    }
  },
  data () {
    return {
      modal: {},
      productModal: {},
      isNew: false
    }
  },
  methods: {
    openBtn () {
      this.modal.show()
    },
    closeBtn () {
      this.modal.hide()
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
  }
}
</script>
