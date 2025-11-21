<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'

import restAPI from '@/api/restapi'
import { useGlobalStore } from '@/stores/global'
import { type News } from '@/interfaces/db_interfaces'
import { convertDate } from '@/utils/helpers'

import NotFound from '@/components/NotFound.vue'
import Loading from '@/components/Loading.vue'

import IconCalendar from '@/components/icons/IconCalendar.vue'
import IconClock from '@/components/icons/IconClock.vue'


//


const route = useRoute()
const store = useGlobalStore()
const { SERVER_BASE_PATH } = storeToRefs(store)

let pageStatus = ref('loaded')

let state : any = reactive({
  event: {
    title: "Название мероприятия",
    html: "Описание мероприятия",
    date: "21 ноября 2024",
    time: "16:30",
  }
})

async function getNewsDetail(id: number) {
  // let response = await restAPI.getNewsDetail(id)
  // if (response.ok) {
  //   let json = await response.json()
  //   prepareNewsText(json.news_detail)
  //   Object.assign(state.news, json.news_detail)
  //   pageStatus.value = 'loaded'
  // } else {
  //   pageStatus.value = 'notfound'
  // }
}

function prepareNewsText(news : News) {
    news.html = news.text?.replace(/\n/g, '<br />')
}

onMounted(() => {
  const newsId = parseInt(route.params.id as string)
  getNewsDetail(newsId)
})


</script>

<template>

  <div class="breadcrumbs-outer" v-if="pageStatus == 'loaded'">
    <div class="breadcrumbs">
      <RouterLink to="/">Главная</RouterLink>
      <span class="breadcrumbs-divider">/</span>
      <RouterLink to="/events">Мероприятия</RouterLink>
      <span class="breadcrumbs-divider">/</span>
      <span class="breadcrumbs-current">{{ state.event.title }}</span>
    </div>
  </div>

  <div class="page-wrapper">
    <template v-if="pageStatus == 'loaded'">
      <div class="event-detail page">
        <div class="event-detail-title">
          {{ state.event.title }}
        </div>
        <div class="event-detail-date">
          <IconCalendar /> {{ state.event.date }}
        </div>
        <div class="event-detail-time">
          <IconClock /> {{ state.event.time }}
        </div>
        <!-- <div class="event-detail-img">
          <img :src="SERVER_BASE_PATH+state.event.image" alt="" />
        </div> -->
        <div class="event-detail-text">
          <span v-html="state.event.html"></span>
        </div>
      </div>
    </template>
    <template v-else-if="pageStatus == 'notfound'">
      <NotFound />
    </template>
    <template v-else>
      <Loading />
    </template>
  </div>

</template>