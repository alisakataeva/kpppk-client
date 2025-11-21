<script setup lang="ts">
import { ref, reactive, onMounted, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

import restAPI from '@/api/restapi'
import { useGlobalStore } from '@/stores/global'
import { type Event } from '@/interfaces/db_interfaces'

import Loading from '@/components/Loading.vue'
import InternalServerError from '@/components/InternalServerError.vue'

import IconChevronLeft from '@/components/icons/IconChevronLeft.vue'
import IconChevronRight from '@/components/icons/IconChevronRight.vue'
import IconCalendar from '@/components/icons/IconCalendar.vue'


//


const store = useGlobalStore()
const router = useRouter()
const route = useRoute()
const { SERVER_BASE_PATH } = storeToRefs(store)

let pageStatus = ref('loaded')
let isMounted = ref(false)
let data : Event[] = reactive([
  {
    id: 1,
    title: "Открытый семинар по образованию: «Ребенок для утопии. Опыт воспитания в 1920-1930-х гг.»",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse placeat eius eligendi obcaecati explicabo incidunt minima culpa alias, harum fugit rerum impedit nostrum corporis facere quam? Rerum pariatur libero unde.",
    date: "18 ноября 2025",
    time: "16:30"
  }
])

let pagination = reactive({
  current_page: 1,
  num_pages: 1,
  object_list: [],
})


async function getNews() {
  // pageStatus.value = 'oading'
  // let response = await restAPI.getNews()
  // if (response.ok) {
  //   let json = await response.json()
  //   let pagination_data = json.news_pagination
  //   pagination.current_page = pagination_data.current_page
  //   pagination.num_pages = pagination_data.num_pages
  //   prepareNewsText(pagination_data.news_list)
  //   data = []
  //   data.push(...pagination_data.news_list)
  //   pageStatus.value = 'loaded'
  // } else {
  //   pageStatus.value = 'internalerror'
  // }
}

onMounted(async () => {
  await getNews()
  isMounted.value = true
})

watch(route, (to) => {
  if (isMounted.value) {
    getNews()
  }
}, {flush: 'pre', immediate: true, deep: true})

</script>

<template>

  <div class="breadcrumbs-outer" v-if="pageStatus == 'loaded'">
    <div class="breadcrumbs">
      <RouterLink to="/">Главная</RouterLink>
      <span class="breadcrumbs-divider">/</span>
      <span class="breadcrumbs-current">Мероприятия</span>
    </div>
  </div>

  <div class="page-wrapper">
    <template v-if="pageStatus == 'loaded'">
      <div class="event-list page">

        <div class="event-list-title">Ближайшие мероприятия:</div>

        <div class="event-block-wrapper">
          <div class="event-block" v-for="event in data">
            <div class="event-datetime">
              <div class="event-date">{{ event.date }}</div>
              <div class="event-time">{{ event.time }}</div>
            </div>
            <div class="event-title">{{ event.title }}</div>
            <div class="event-content">{{ event.text }}</div>
          </div>
        </div>

      </div>
    </template>
  </div>

</template>