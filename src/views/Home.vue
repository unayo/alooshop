<template>
  <div class="banner mb-5">
    <div class="container row justify-content-end align-items-center w-100 h-100">
      <div class="col-12 col-md-4 text-white">
        <h3>Perfume your day</h3>
        <p>
          A perfume is like a piece of clothing,
          a message, a way of presenting oneself a costume that according to the
          person who wears it.
        </p>
        <div class="d-grid gap-2 col-md-9">
          <button type="button" class="btn btn-outline-light">Shop Now</button>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="order-2 order-md-1 col-12 col-md-3 m-auto">
        <h2>Gabrielle CHANEL</h2>
        <p>全新嗅覺體驗，花香四溢、明亮馥郁。結合茉莉、依蘭依蘭、橙花和最迷人的格拉斯晚香玉之花香，
          呈現出夢幻花香氣息。 極具女性特質的香奈兒嘉柏麗香水，專為光芒四射的她而生。
        </p>
        <a href="#">查看更多</a>
      </div>
      <div class="order-1 order-md-2 imgGabrielle col-12 col-md-6"></div>
    </div>
    <div class="row">
      <div class="img50 col-12 col-md-6"></div>
      <div class="col-12 col-md-3 m-auto">
        <h2>Five O’clock Au Gingembre</h2>
        <p>全新嗅覺體驗，花香四溢、明亮馥郁。結合茉莉、依蘭依蘭、橙花和最迷人的格拉斯晚香玉之花香，
          呈現出夢幻花香氣息。 極具女性特質的香奈兒嘉柏麗香水，專為光芒四射的她而生。
        </p>
        <a href="#">查看更多</a>
      </div>
    </div>
    <div class="row">
      <div class="order-2 order-md-1 col-12 col-md-3 m-auto">
        <h2>CHANEL N°5</h2>
        <p>
          N°5，女性魅力的極致精髓。散發柔美澄透的乙醛花束香氣。經典傳奇香氛，蘊藏於極簡設計的獨特瓶身。
        </p>
        <a href="#">查看更多</a>
      </div>
      <div class="order-1 order-md-2 imgN5 col-12 col-md-6"></div>
    </div>
    <div class="row">
      <div class="imgTech col-12 col-md-6"></div>
      <div class="intro col-12 col-md-4 m-auto">
        <h3>1.<br>Levels of Preventive Maintenance Compliance</h3>
        <small>
          The core idea of preventative maintenance is the performance of
          proactive actions against unscheduled downtime in order to identify
          potential defects before they evolve into something more severe.
        </small>
        <h3 class="pt-5">2.<br>Percentage of Planned Maintenance</h3>
        <small>The planned maintenance percentage is the total planned maintenance
          time in your CMMS software over a date range over the total number
          of hours of a service performed by the technicians.
        </small>
        <h3 class="pt-5">3.<br>Critical percentage of planned maintenance</h3>
        <small>Calculating the critical percentage of planned maintenance will
          help you prioritize the most important operations that should
          be performed immediately.
        </small>
        <div class="d-grid gap-2 col-md-9 pt-5">
          <button type="button" class="btn btn-outline-dark">
            Plan a free online training
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="product bg-light py-4 my-5">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4">
          <img src="../assets/images/banner.jpg" alt="image">
          <h4 class="pt-1">Poppy & Barley</h4>
          <p>Jo Malone</p>
          <p>
            NT$1,380
            <span class="text-decoration-line-through">NT$1,380</span>
          </p>
        </div>
        <div class="col-12 col-md-4">
          <img src="../assets/images/banner.jpg" alt="image">
          <h4 class="pt-1">Body Wash</h4>
          <p>Curology</p>
          <p>
            NT$1,580
          </p>
        </div>
        <div class="col-12 col-md-4">
          <img src="../assets/images/banner.jpg" alt="image">
          <h4 class="pt-1">Apple Cider Vinegar Capsule</h4>
          <p>Tonik</p>
          <p>
            NT$1,580
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="img50 col-12 col-md-7"></div>
      <div class="col-12 col-md-4 m-auto">
        <h2>Bottle-Recycling</h2>
        <p class="pb-2">Recycle your used empty bottles and be rewarded!</p>
        <small>For the past 10 years, we have collected over 800,000 bottles
          through Empty Bottle Recycling Campaign and planted more than 860
          pine trees for a better environment.For the past 10 years, we have
          collected over 800,000 bottles through Empty Bottle Recycling Campaign
          and planted more than 860 pine trees for a better environment.
        </small>
        <br>
        <a class="pt-2" href="#">查看更多</a>
      </div>
    </div>
  </div>
  <Cta></Cta>
</template>

<style lang="scss">
  .banner {
    background-image: url('../assets/images/banner.jpg');
    height: calc(100vh - 56px);
    background-size: cover;
  }
  .imgGabrielle {
    background-image: url('../assets/images/imgGabrielle.jpg');
    background-size: cover;
    height: 33rem;
  }
  .img50 {
    background-image: url('../assets/images/img50.png');
    background-size: cover;
    height: 33rem;
  }
  .imgN5 {
    background-image: url('../assets/images/imgN5.jpg');
    background-size: cover;
    height: 33rem;
  }
  .imgTech {
    background-image: url('../assets/images/imgTech.jpg');
    background-size: cover;
  }
  .intro {
    padding-top: 6.2rem;
    padding-bottom: 6.2rem;
  }
  .product {
    img {
      height: 33rem;
      width: 100%;
      object-fit: cover;
    }
  }
  .subscribe {
    margin-top: 11rem;
    margin-bottom: 7rem;
  }
</style>

<script>
import Cta from '@/components/Cta.vue'

export default {
  name: 'Home',
  components: {
    Cta
  },
  created () {
    console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH)
  }
}
</script>
