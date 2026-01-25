<script setup lang="ts">
import { ref, reactive, onMounted, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

import restAPI from '@/api/restapi'
import { useGlobalStore } from '@/stores/global'
import { type News } from '@/interfaces/db_interfaces'
import { convertDate } from '@/utils/helpers'

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

let pageStatus = ref('loading')
let isMounted = ref(false)
let data : News[] = reactive([])

let pagination = reactive({
  current_page: 1,
  num_pages: 1,
  object_list: [],
})


function paginationGo(page : number) {
  router.push(`?page=${page}`)
}

function paginationGoPrevoius() {
  if (pagination.current_page > 1) {
    router.push(`?page=${pagination.current_page - 1}`)
  }
}

function paginationGoNext() {
  if (pagination.current_page < pagination.num_pages) {
    router.push(`?page=${pagination.current_page + 1}`)
  }
}

function getPageQueryParam() {
  let currentPageQueryParam = route.query.page
  let currentPage = 1
  if (currentPageQueryParam !== undefined && currentPageQueryParam !== null && typeof currentPageQueryParam == 'string') {
    let currentPageQueryParamParsed = parseInt(currentPageQueryParam)
    if (!Number.isNaN(currentPageQueryParamParsed)) {
      currentPage = currentPageQueryParamParsed
    }
  }
  return currentPage
}

async function getNews() {
  pageStatus.value = 'loading'
  let response = await restAPI.getNews(getPageQueryParam())
  if (response.ok) {
    let json = await response.json()
    let pagination_data = json.news_pagination
    pagination.current_page = pagination_data.current_page
    pagination.num_pages = pagination_data.num_pages
    prepareNewsText(pagination_data.news_list)
    data = []
    data.push(...pagination_data.news_list)
    pageStatus.value = 'loaded'
  } else {
    pageStatus.value = 'internalerror'
  }
}

function prepareNewsText(news : News[]) {
  for (let i = 0; i < news.length; i++) {
    let truncated = news[i].text?.substring(0, 200)
    news[i].html = truncated?.replace(/\n/g, '<br />')
  }
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
      <span class="breadcrumbs-current">Новости</span>
    </div>
  </div>

  <div class="page-wrapper">
    <template v-if="pageStatus == 'loaded'">

      <div class="news-list page">

        <div class="news-blocks">
          <div class="news-block"
            v-for="(n, ix) in data" :key="'news-'+ix"
          >
            <div class="news-block-img">
              <img :src="SERVER_BASE_PATH+n.image" alt="" />
            </div>
            <div class="news-block-content">
              <div class="news-block-title">
                <RouterLink :to="'/news/'+n.id">{{ n.title }}</RouterLink>
              </div>
              <div class="news-block-date">
                <IconCalendar /> {{ convertDate(n.created_at) }}
              </div>
              <div class="news-block-text">
                <span v-html="n.html"></span>...
                <RouterLink :to="'/news/'+n.id">Читать далее</RouterLink>
              </div>
            </div>
          </div>
        </div>

        <div class="pagination">

          <div
            v-if="pagination.current_page > 1"
            class="pagination-btn is-prev-btn"
            @click="paginationGoPrevoius">
            <IconChevronLeft />
          </div>

          <!-- FIRST page -->
          <div
            class="pagination-btn is-first"
            :class="{ 'is-active' : pagination.current_page == 1 }"
            @click="paginationGo(1)"
          >1</div>

          <div class="pagination-dots" v-if="pagination.current_page - 1 > 2">...</div>

          <div
            v-if="pagination.current_page - 1 > 1"
            class="pagination-btn is-page"
            @click="paginationGo(pagination.current_page - 1)"
          >
            {{ pagination.current_page - 1 }}
          </div>

          <!-- CURRENT page IF NOT first page OR last page  -->
          <div
            v-if="pagination.current_page > 1 && pagination.current_page < pagination.num_pages"
            class="pagination-btn is-page is-active"
            @click="paginationGo(pagination.current_page)"
          >
            {{ pagination.current_page }}
          </div>

          <div
            v-if="pagination.current_page < pagination.num_pages - 1"
            class="pagination-btn is-page"
            @click="paginationGo(pagination.current_page + 1)"
          >
            {{ pagination.current_page + 1 }}
          </div>

          <div class="pagination-dots" v-if="pagination.current_page + 1 < pagination.num_pages - 1">...</div>

          <!-- LAST page -->
          <div
          v-if="pagination.num_pages > 1"
            class="pagination-btn is-last"
            :class="{ 'is-active' : pagination.current_page == pagination.num_pages }"
            @click="paginationGo(pagination.num_pages)"
          >
            {{ pagination.num_pages}}
          </div>

          <div
            v-if="pagination.current_page < pagination.num_pages"
            class="pagination-btn is-next-btn"
            @click="paginationGoNext">
            <IconChevronRight />
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