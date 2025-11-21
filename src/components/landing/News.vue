<script setup lang="ts">

import { ref, reactive, onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import restAPI from '@/api/restapi'
import { useGlobalStore } from '@/stores/global'
import { type News } from '@/interfaces/db_interfaces'


//


const store = useGlobalStore()
const { SERVER_BASE_PATH } = storeToRefs(store)

let loaded = ref(false)
let data : News[] = reactive([])

async function getNews() {
  let response = await restAPI.getLandingNews()
  if (response.ok) {
    let json = await response.json()
    prepareNewsText(json.news_list)
    data.push(...json.news_list)
  }
}

function prepareNewsText(news : News[]) {
  for (let i = 0; i < news.length; i++) {
    let truncated = news[i].text?.substring(0, 250)
    news[i].html = truncated?.replace(/\n/g, '<br />') + '...'
  }
}

onMounted(() => {
  getNews()
  loaded.value = true
})

</script>

<template>
  <div class="mod-outer news-wrapper">
    <div class="mod-inner mtb-40">
      <div class="landing-title">Новости</div>
      <div class="news">
        <RouterLink :to="'/news/'+n.id" v-for="(n, ix) in data" :key="'news'+ix" class="new-item">
          <img :src="SERVER_BASE_PATH+n.image" class="new-pic" alt="" />
          <div class="new-title">{{ n.title }}</div>
          <div class="new-content" v-html="n.html"></div>
        </RouterLink>
      </div>
      <RouterLink to="/news" class="btn btn-primary align-right">Показать больше</RouterLink>
    </div>
  </div>
</template>
  