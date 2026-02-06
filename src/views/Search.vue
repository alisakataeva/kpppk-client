<script setup lang="ts">
import { onMounted, onUnmounted, ref, reactive } from 'vue';
import { RouterLink, useRoute } from 'vue-router'

import restAPI from '@/api/restapi'
import { type Page } from '@/interfaces/db_interfaces'

import IconSearch from '../components/icons/IconSearch.vue'
import Loading from '@/components/Loading.vue'


//

const route = useRoute()

let searchText = ref("")

let pageStatus = ref('loaded')
let data : Page[] = reactive([])

onMounted(() => {
  document.body.classList.add('on-search-page')
  if (route.query.text !== undefined && typeof route.query.text === 'string') {
    searchText.value = route.query.text
    doSearch()
  }
});

onUnmounted(() => {
  document.body.classList.remove('on-search-page');
});


async function doSearch() {
  pageStatus.value = 'loading'
  data.splice(0, data.length)
  let response = await restAPI.search(searchText.value)
  if (response.ok) {
    let json = await response.json()
    data.push(...json.page_list)
    pageStatus.value = 'loaded'
  }
}

</script>

<template>

  <div class="breadcrumbs-outer">
    <div class="breadcrumbs">
      <RouterLink to="/">Главная</RouterLink>
      <span class="breadcrumbs-divider">/</span>
      <span class="breadcrumbs-current">Поиск</span>
    </div>
  </div>

  <div class="search-page">

    <div class="search-wrapper">
      <input @keyup.enter="doSearch" type="text" class="search-input" v-model="searchText" />
      <button class="search-btn" @click="doSearch"><IconSearch /></button>
    </div>

    <hr />

    <h1>Результаты поиска:</h1>

    <template v-if="pageStatus == 'loaded'">
      <div class="search-results">
          
        <div class="search-result" v-for="(res, ix) in data">
          <div class="search-result-num">{{ ix + 1 }}</div>
          <a :href="res.url" class="search-result-link">{{ res.title }}</a>
          <hr>
        </div>

        <div class="search-empty" v-if="data.length == 0">Ничего не найдено</div>

      </div>
    </template>

    <template v-else-if="pageStatus == 'loading'">
      <Loading />
    </template>

  </div>
</template>