<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'

import restAPI from '@/api/restapi'
import { useGlobalStore } from '@/stores/global'
import NotFound from '@/components/NotFound.vue'
import Loading from '@/components/Loading.vue'


//


const route = useRoute()
const store = useGlobalStore()
const { SERVER_BASE_PATH } = storeToRefs(store)

let pageStatus = ref('loading')

let state : any = reactive({
  program: {}
})

async function getProgramDetail(id: number) {
  let response = await restAPI.getProgramDetail(id)
  if (response.ok) {
    let json = await response.json()
    Object.assign(state.program, json.program_detail)
    pageStatus.value = 'loaded'
  } else {
    pageStatus.value = 'notfound'
  }
}

onMounted(() => {
  const programId = parseInt(route.params.id as string)
  getProgramDetail(programId)
})

</script>

<template>

  <div class="breadcrumbs-outer" v-if="pageStatus == 'loaded'">
    <div class="breadcrumbs">
      <RouterLink to="/">Главная</RouterLink>
      <span class="breadcrumbs-divider">/</span>
      <RouterLink to="/programs">Программы</RouterLink>
      <span class="breadcrumbs-divider">/</span>
      <span class="breadcrumbs-current">{{ state.program.code }} - {{ state.program.name }}</span>
    </div>
  </div>

  <div class="page-wrapper">
    <template v-if="pageStatus == 'loaded'">
      <div class="program-detail page">
        <div class="program-detail-code">
          {{ state.program.code }}
        </div>
        <div class="program-detail-name">
          {{ state.program.name }}
        </div>
        <div class="program-detail-img">
          <img :src="SERVER_BASE_PATH+state.program.image" alt="" />
        </div>
        <div class="program-detail-description">
          {{ state.program.description }}
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