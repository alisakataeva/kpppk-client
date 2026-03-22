<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const modules = [Navigation];
</script>


<template>
  <div class="scammers-info-wrapper">
    <div class="scammers-info">
      <!-- Swiper -->
      <swiper
        :slides-per-view="4"
        :loop="true"
        :navigation="true"
        :modules="modules"
        :breakpoints="{
          '0': { slidesPerView: 1 },
          '1200': { slidesPerView: 2 },
          '1700': { slidesPerView: 4 },
        }"
      >
        <swiper-slide>
          <img src="../../assets/img/scammersinfo/1.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/scammersinfo/2.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/scammersinfo/3.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/scammersinfo/4.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/scammersinfo/5.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/scammersinfo/6.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/scammersinfo/7.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/scammersinfo/8.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/scammersinfo/9.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/scammersinfo/10.jpg" alt="" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>


<style>

:root .scammers-info {
  --swiper-navigation-color: #000;
}

.scammers-info-wrapper {
  background-color: #eee;
  padding: 5em 0;
}

.swiper-slide {
  text-align: center;
}

.scammers-info .swiper-slide img {
  max-width: 350px;
}

@media only screen and (max-width: 600px) {
  .swiper-slide img {
    max-width: 100%;
  }
}

</style>