<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const modules = [Navigation];
</script>


<template>
  <div class="cyber-security-wrapper">
    <div class="cyber-security">
      <!-- Swiper -->
      <swiper
        :slides-per-view="3"
        :loop="true"
        :navigation="true"
        :modules="modules"
        :breakpoints="{
          '0': { slidesPerView: 1 },
          '1200': { slidesPerView: 2 },
          '1700': { slidesPerView: 3 },
        }"
      >
        <swiper-slide>
          <img src="../../assets/img/cybersecurity/1.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/cybersecurity/2.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/cybersecurity/3.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/cybersecurity/4.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/cybersecurity/5.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/cybersecurity/6.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/cybersecurity/7.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/cybersecurity/8.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/cybersecurity/9.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/cybersecurity/10.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/cybersecurity/11.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/cybersecurity/12.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/cybersecurity/13.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/cybersecurity/14.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/cybersecurity/15.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/cybersecurity/16.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/cybersecurity/17.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/cybersecurity/18.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/cybersecurity/19.jpg" alt="" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>


<style>

:root .cyber-security {
  --swiper-navigation-color: #fff;
}

.cyber-security-wrapper {
  background-color: #4299fe;
  padding: 5em 0;
}

.swiper-slide {
  text-align: center;
}

.cyber-security .swiper-slide img {
  max-width: 500px;
}

@media only screen and (max-width: 600px) {
  .swiper-slide img {
    max-width: 100%;
  }
}

</style>