<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'

import restAPI from '@/api/restapi'
import { useGlobalStore } from '@/stores/global'
import { type News } from '@/interfaces/db_interfaces'
import Loading from '@/components/Loading.vue'
import InternalServerError from '@/components/InternalServerError.vue'


//


const store = useGlobalStore()
const { SERVER_BASE_PATH } = storeToRefs(store)

let pageStatus = ref('loading')
let data : News[] = reactive([])

async function getNews() {
  let response = await restAPI.getNews()
  if (response.ok) {
    let json = await response.json()
    prepareNewsText(json.news_list)
    data.push(...json.news_list)
    pageStatus.value = 'loaded'
  } else {
    pageStatus.value = 'internalerror'
  }
}

function prepareNewsText(news : News[]) {
  for (let i = 0; i < news.length; i++) {
    let truncated = news[i].text?.substring(0, 600)
    news[i].html = truncated?.replace(/\n/g, '<br />')
  }
}

onMounted(() => {
  getNews()
})

</script>

<template>

  <div class="breadcrumbs-outer" v-if="pageStatus == 'loaded'">
    <div class="breadcrumbs">
      <RouterLink to="/">Главная</RouterLink>
      <span class="breadcrumbs-divider">/</span>
      <span class="breadcrumbs-current">Новости</span>
    </div>
  </div>

  <div class="page-wrapper">
    <template v-if="pageStatus == 'loaded'">
      <div class="news-list page">
        <div
          class="news-block"
          v-for="(n, ix) in data"
          :key="'news-'+ix"
        >
          <div class="news-block-img">
            <img :src="SERVER_BASE_PATH+n.image" alt="" />
          </div>
          <div class="news-block-content">
            <div class="news-block-title">
              <RouterLink :to="'/news/'+n.id">{{ n.title }}</RouterLink>
            </div>
            <div class="news-block-text">
              <span v-html="n.html"></span>...
              <RouterLink :to="'/news/'+n.id">Читать далее</RouterLink>
            </div>
            <div class="news-block-date">
              Опубликовано: {{ n.created_at }}
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="pageStatus == 'internalerror'">
      <InternalServerError />
    </template>
    <template v-else>
      <Loading />
    </template>
  </div>

</template>