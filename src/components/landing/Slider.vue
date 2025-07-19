<script setup lang="ts">
import { ref, computed } from 'vue'

const visibleSlide = ref('slide1')

function changeSlide(slide: string) {
  visibleSlide.value = slide
}

const visibleSlide1 = computed(() => {
  return visibleSlide.value == 'slide1'
})
const visibleSlide2 = computed(() => {
  return visibleSlide.value == 'slide2'
})
const visibleSlide3 = computed(() => {
  return visibleSlide.value == 'slide3'
})
const visibleSlide4 = computed(() => {
  return visibleSlide.value == 'slide4'
})

</script>

<template>
  <div class="mod-outer slider-wrapper">
    <div class="mod-inner slider">
      <div class="slider-imgs">
        <Transition name="slide-fade">
          <img v-show="visibleSlide1" src="../../assets/img/slider.png" alt="" />
        </Transition>
        <Transition name="slide-fade">
          <img v-show="visibleSlide2" src="../../assets/img/slider2.jpg" alt="" />
        </Transition>
        <Transition name="slide-fade">
          <img v-show="visibleSlide3" src="../../assets/img/slider3.jpg" alt="" />
        </Transition>
        <Transition name="slide-fade">
          <img v-show="visibleSlide4" src="../../assets/img/slider4.jpg" alt="" />
        </Transition>
      </div>
        <!-- <div class="slide"></div> -->
      <div class="slider-controls">
        <div class="slider-control" :class="{ active: visibleSlide1 }" @click="changeSlide('slide1')"></div>
        <div class="slider-control" :class="{ active: visibleSlide2 }" @click="changeSlide('slide2')"></div>
        <div class="slider-control" :class="{ active: visibleSlide3 }" @click="changeSlide('slide3')"></div>
        <div class="slider-control" :class="{ active: visibleSlide4 }" @click="changeSlide('slide4')"></div>
      </div>
    </div>
  </div>
</template>

<style>
.slider .slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slider .slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slider .slide-fade-enter-from,
.slider .slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>