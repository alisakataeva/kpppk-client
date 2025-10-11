<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'

import restAPI from '@/api/restapi'
import { useGlobalStore } from '@/stores/global'
import { type Program } from '@/interfaces/db_interfaces'
import Loading from '@/components/Loading.vue'
import InternalServerError from '@/components/InternalServerError.vue'


//


const store = useGlobalStore()
const { SERVER_BASE_PATH } = storeToRefs(store)

let pageStatus = ref('loading')
let data : Program[] = reactive([])

async function getPrograms() {
  let response = await restAPI.getPrograms()
  if (response.ok) {
    let json = await response.json()
    data.push(...json.program_list)
    pageStatus.value = 'loaded'
  } else {
    pageStatus.value = 'internalerror'
  }
}

onMounted(() => {
  getPrograms()
})

</script>

<template>

  <div class="breadcrumbs-outer" v-if="pageStatus == 'loaded'">
    <div class="breadcrumbs">
      <RouterLink to="/">Главная</RouterLink>
      <span class="breadcrumbs-divider">/</span>
      <span class="breadcrumbs-current">Программы</span>
    </div>
  </div>

  <div class="page-wrapper">
    <template v-if="pageStatus == 'loaded'">
      <div class="program-list page">
        <RouterLink :to="'/programs/'+p.id" 
          v-for="(p, ix) in data"
          class="program-block"
        >
          <div class="program-block-img">
            <img :src="SERVER_BASE_PATH+p.image" alt="" />
          </div>
          <div class="program-block-code">
            {{ p.code }}
          </div>
          <div class="program-block-name">
            {{ p.name }}
          </div>
          <div class="program-block-description">
            {{ p.description }}
          </div>
        </RouterLink>
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