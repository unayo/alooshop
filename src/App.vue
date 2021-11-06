<template>
  <nav class="header">
    <div class="container navbar">
      <router-link to="/">
        <img class="logo" alt="logo" src="@/assets/logo.png">
      </router-link>
      <div class="d-flex">
        <router-link to="/user-products" class="materialIcon">
          <span class="material-icons">account_balance_wallet</span>
          product
        </router-link>
        <router-link to="/login" class="materialIcon">
          <span class="material-icons">person</span>
          <span>log in</span>
        </router-link>
        <router-link to="/login" class="materialIcon">
          <span class="material-icons">favorite</span>
          Favorite
        </router-link>
        <router-link to="/login" class="materialIcon">
          <span class="material-icons">shopping_basket</span>
          Cart
        </router-link>
      </div>
    </div>
  </nav>
  <router-view/>
  <div class="footer bg-primary nav justify-content-between align-items-center px-md-5">
    <div class="d-flex align-items-center">
      <router-link to="/">
        <img class="logo pe-2" alt="logo" src="@/assets/logo.png">
      </router-link>
      <small class="text-white">© 2020. All Rights Reserved.</small>
    </div>
    <div>
      <router-link to="/user-products" class="materialIcon pe-2">
          <span>Product</span>
      </router-link>
      <router-link to="/" class="materialIcon pe-2">
          <span>Blog</span>
      </router-link>
      <router-link to="/" class="materialIcon">
          <span>Contact</span>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
@import "assets/main.scss";

.header {
  height: 56px;
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.9);
  .logo {
    height: 38px;
  }
  .materialIcon {
    display: flex;
    align-items: center;
    padding: 0 0.6rem;
  }
}
.footer {
  height: 80px;
  a {
    color: white;
  }
  img {
    filter: brightness(10);
    height: 38px;
  }
  small {
    opacity: 0.6;
  }
}
</style>
