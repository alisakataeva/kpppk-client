<script setup lang="ts">
import { ref, computed } from 'vue'

const visibleSlide = ref(1)
const MAX_SLIDES = 2

function changeSlide(slide: number) {
  visibleSlide.value = slide
}

function changeSlideToRight() {
  let curSlide = visibleSlide.value
  if (curSlide < MAX_SLIDES) {
    changeSlide(curSlide+1)
  } else {
    changeSlide(1)
  }
}

function changeSlideToLeft() {
  let curSlide = visibleSlide.value
  if (curSlide > 1) {
    changeSlide(curSlide-1)
  } else {
    changeSlide(MAX_SLIDES)
  }
}

const visibleSlide1 = computed(() => {
  return visibleSlide.value == 1
})
const visibleSlide2 = computed(() => {
  return visibleSlide.value == 2
})
const visibleSlide3 = computed(() => {
  return visibleSlide.value == 3
})
const visibleSlide4 = computed(() => {
  return visibleSlide.value == 4
})




// swipe behavior

const touchStartX = ref(0);
const touchEndX = ref(0);
const minSwipeDistance = 50;


function handleTouchStart(event: TouchEvent) {
  touchStartX.value = event.changedTouches[0].clientX;
}

function handleTouchEnd(event: TouchEvent) {
  touchEndX.value = event.changedTouches[0].clientX;
  handleSwipeGesture();
}

function handleSwipeGesture() {
  const distance = touchEndX.value - touchStartX.value;

  if (Math.abs(distance) > minSwipeDistance) {
    if (distance > 0) {
      // right swipe
      console.log("right swipe")
      changeSlideToLeft()
    } else {
      // left swipe
      console.log("left swipe")
      changeSlideToRight()
    }
  }
}

</script>

<template>
  <div class="slider-wrapper">
    <div class="slider">
      <div class="slider-imgs">

        <Transition name="slide-fade">
          <img class="slider-slide slide-desktop" v-show="visibleSlide1" src="../../assets/img/slider.png" alt="" />
        </Transition>

        <Transition name="slide-fade">
          <img
            class="slider-slide slide-mobile"
            v-show="visibleSlide1" src="../../assets/img/mb_slider_1.png" alt=""
            @touchstart="handleTouchStart" @touchend="handleTouchEnd"
          />
        </Transition>

        <Transition name="slide-fade">
          <img class="slider-slide slide-desktop" v-show="visibleSlide2" src="../../assets/img/slider.png" alt="" />
        </Transition>

        <Transition name="slide-fade">
          <img
            class="slider-slide slide-mobile" v-show="visibleSlide2"
            src="../../assets/img/mb_slider_2.png" alt=""
            @touchstart="handleTouchStart" @touchend="handleTouchEnd"
          />
        </Transition>

        <img class="slider-bg slide-desktop" src="../../assets/img/slider_bg.png" alt="" />
        <img class="slider-bg slide-mobile" src="../../assets/img/mob_slider_bg.png" alt="" />
      </div>
        <!-- <div class="slide"></div> -->
      <div class="slider-controls">
        <div class="slider-control" :class="{ active: visibleSlide1 }" @click="changeSlide(1)"></div>
        <div class="slider-control" :class="{ active: visibleSlide2 }" @click="changeSlide(2)"></div>
        <!-- <div class="slider-control" :class="{ active: visibleSlide3 }" @click="changeSlide('slide3')"></div>
        <div class="slider-control" :class="{ active: visibleSlide4 }" @click="changeSlide('slide4')"></div> -->
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