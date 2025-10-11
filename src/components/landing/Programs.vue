<script setup lang="ts">

import { ref, reactive, onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import restAPI from '@/api/restapi'
import { useGlobalStore } from '@/stores/global'
import { type Program } from '@/interfaces/db_interfaces'


//


const store = useGlobalStore()
const { SERVER_BASE_PATH } = storeToRefs(store)

let loaded = ref(false)
let data : Program[] = reactive([])

async function getPrograms() {
  let response = await restAPI.getLandingPrograms()
  if (response.ok) {
    let json = await response.json()
    data.push(...json.program_list)
  }
}

onMounted(() => {
  getPrograms()
  loaded.value = true
})

</script>

<template>
  <div class="mod-outer programs-wrapper">
    <div class="mod-inner mtb-40">
      <div class="landing-title">Программы обучения</div>
      <div class="programs">
        <RouterLink :to="'/programs/'+p.id" v-for="(p, ix) in data" :key="'program'+ix" class="program-item">
          <img :src="SERVER_BASE_PATH+p.image" alt="" class="program-pic" />
          <div class="program-name">{{ p.code }} {{ p.name }}</div>
        </RouterLink>
      </div>
      <RouterLink to="/programs" class="btn btn-primary align-right">Показать все</RouterLink>
    </div>
  </div>
</template>
