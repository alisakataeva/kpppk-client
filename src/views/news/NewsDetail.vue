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


//


const route = useRoute()
const store = useGlobalStore()
const { SERVER_BASE_PATH } = storeToRefs(store)

let pageStatus = ref('loading')

let state : any = reactive({
  news: {}
})

async function getNewsDetail(id: number) {
  let response = await restAPI.getNewsDetail(id)
  if (response.ok) {
    let json = await response.json()
    prepareNewsText(json.news_detail)
    Object.assign(state.news, json.news_detail)
    pageStatus.value = 'loaded'
  } else {
    pageStatus.value = 'notfound'
  }
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
      <RouterLink to="/news">Новости</RouterLink>
      <span class="breadcrumbs-divider">/</span>
      <span class="breadcrumbs-current">{{ state.news.title }}</span>
    </div>
  </div>

  <div class="page-wrapper">
    <template v-if="pageStatus == 'loaded'">
      <div class="news-detail page">
        <div class="news-detail-title">
          {{ state.news.title }}
        </div>
        <div class="news-detail-date">
          <IconCalendar /> {{ convertDate(state.news.created_at) }}
        </div>
        <div class="news-detail-img">
          <img :src="SERVER_BASE_PATH+state.news.image" alt="" />
        </div>
        <div class="news-detail-text">
          <span v-html="state.news.html"></span>
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