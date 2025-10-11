<script setup lang="ts">
import { ref, reactive, onMounted, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'

import { useGlobalStore } from '@/stores/global'

import SideMenu from '@/components/nav/SideMenu.vue'


//

const route = useRoute()

const store = useGlobalStore()
const { APPLICANTS_MENU } = storeToRefs(store)

let currentPage = APPLICANTS_MENU.value.find((p) => p.href == route.fullPath)
let currentPageContents = "<strong>404 page not found</strong>"
if (currentPage) {
  currentPageContents = currentPage.content
}

watch(route, (to) => {
  let currentPage = APPLICANTS_MENU.value.find((p) => p.href == route.fullPath)
  if (currentPage) {
    currentPageContents = currentPage.content
  }
}, {flush: 'pre', immediate: true, deep: true})


</script>

<template>
  <div class="breadcrumbs-outer">
    <div class="breadcrumbs">
      <RouterLink to="/">Главная</RouterLink>
      <span class="breadcrumbs-divider">/</span>
      <span class="breadcrumbs-current">Абитуриентам</span>
    </div>
  </div>
  <div class="page-wrapper">
    <!-- <SideMenu :navlinks="APPLICANTS_MENU" /> -->
    <div class="page" v-html="currentPageContents"></div>
  </div>
</template>