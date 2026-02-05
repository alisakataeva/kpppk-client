<script setup lang="ts">
import { ref, reactive, onMounted, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import restAPI from '@/api/restapi'
import { useSideMenuStore } from '@/stores/sidemenu'

import SideMenu from '@/components/nav/SideMenu.vue'
import NotFound from '@/components/NotFound.vue'
import Loading from '@/components/Loading.vue'


//


let loaded = ref(false)
let pageStatus = ref('loading')
let isMounted = ref(false)

const route = useRoute()

const smStore = useSideMenuStore()
const { getSideMenu, updateSideMenu } = smStore

let state : any = reactive({
  pageGroup: undefined,
  pageGroupName: '',
  menu: []
})

let currentPageContents = ref("")
let currentPageTitle = ref("")


async function processSideMenu() {
  let fromState = getSideMenu(state.pageGroup)
  if (fromState.length > 0) {
    state.menu.splice(0, state.menu.length)
    state.menu.push(...fromState)
  } else {
    let response = await restAPI.getSideMenu(state.pageGroup)
    if (response.ok) {
      let json = await response.json()
      let fromServer = json.page_list
      fromServer.sort((a: any, b: any) => a.order > b.order)
      if (getSideMenu(state.pageGroup).length == 0) {
        updateSideMenu(state.pageGroup, fromServer)
        state.menu.splice(0, state.menu.length)
        state.menu.push(...fromServer)
      }
    }
  }
}


async function updatePageContents() {
  pageStatus.value = 'loading'
  loaded.value = false
  state.pageGroup = route.params.page_group

  await processSideMenu()

  let currentPage = state.menu.find((p: any) => p.url == route.path)

  if (currentPage) {
    state.pageGroupName = currentPage.group_name
    currentPageTitle.value = currentPage.title
    document.title = `${currentPage.title} - КПППК`;
  }
  
  if (currentPage && currentPage.content) {
    currentPageContents.value = currentPage.content
    pageStatus.value = 'loaded'
  } else {
    document.title = `Страница не найдена`;
    pageStatus.value = 'notfound'
  }
}


async function updatePageWrapper() {
  isMounted.value = false
  await updatePageContents()
  if (route.hash) {
    location.hash = route.hash;
  }
  isMounted.value = true
}


onMounted(async () => {
  await updatePageWrapper()
})


watch(route, async (to) => {
  if (isMounted.value) {
    await updatePageWrapper()
    if (route.hash) {
      location.hash = route.hash;
    }
  }
}, {flush: 'pre', immediate: true, deep: true})


</script>

<template>

  <div class="breadcrumbs-outer" v-if="pageStatus == 'loaded'">
    <div class="breadcrumbs">
      <RouterLink to="/">Главная</RouterLink>
      <span class="breadcrumbs-divider">/</span>
      <span class="breadcrumbs-current">{{ state.pageGroupName }} - {{ currentPageTitle }}</span>
    </div>
  </div>

  <div class="page-wrapper">
    <template v-if="pageStatus == 'loaded'">
      <SideMenu :navlinks="state.menu" />
      <div class="page" v-html="currentPageContents"></div>
    </template>
    <template v-else-if="pageStatus == 'notfound'">
      <NotFound />
    </template>
    <template v-else>
      <Loading />
    </template>
  </div>
  
</template>