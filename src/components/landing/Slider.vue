<script setup lang="ts">
import { ref, computed, reactive, onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import restAPI from '@/api/restapi'
import { useGlobalStore } from '@/stores/global'
import { type Slider } from '@/interfaces/db_interfaces'

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


//

const store = useGlobalStore()
const { SERVER_BASE_PATH } = storeToRefs(store)

let loaded = ref(false)
let data : Slider[] = reactive([])

async function getSliders() {
  let response = await restAPI.getSliders()
  if (response.ok) {
    let json = await response.json()
    data.push(...json.slider_list)
  }
}

onMounted(() => {
  getSliders()
  loaded.value = true
})


const modules = [Pagination, Autoplay];

</script>

<template>
  <div class="slider-wrapper">
    <div class="slider">
      <swiper
        :slides-per-view="1"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
      >

      <swiper-slide v-for="slideItem in data">
        <a :href="slideItem.url">
          <img class="slide-desktop" :src="SERVER_BASE_PATH+slideItem.image_desktop" alt="" />
          <img class="slide-mobile" :src="SERVER_BASE_PATH+slideItem.image_mobile" alt="" />
        </a>
      </swiper-slide>

      </swiper>
      
    </div>
  </div>
</template>
