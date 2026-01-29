<script setup lang="ts">

import { ref, reactive, onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import restAPI from '@/api/restapi'
import { useGlobalStore } from '@/stores/global'
import { type Program } from '@/interfaces/db_interfaces'

import  IconSpec1 from '../icons/IconSpec1.vue'
import  IconSpec2 from '../icons/IconSpec2.vue'
import  IconSpec3 from '../icons/IconSpec3.vue'
import  IconSpec4 from '../icons/IconSpec4.vue'
import  IconSpec5 from '../icons/IconSpec5.vue'
import  IconArrowRight from '../icons/IconArrowRight.vue'


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
  <div class="programs-wrapper mtb-40">
    <div class="mod-outer">
      <div class="mod-inner">
        <div class="programs-title">Мы обучаем по специальностям:</div>
      </div>
    </div>
    <div class="programs">
      <RouterLink to="/programs/1" class="program-item">
        <div class="program-icon-wrapper">
          <div class="program-icon"><IconSpec1 /></div>
        </div>
        <div class="program-name">Мастер отделочных строительных и декоративных работ</div>
      </RouterLink>
      <RouterLink to="/programs/2" class="program-item">
        <div class="program-icon-wrapper">
          <div class="program-icon"><IconSpec2 /></div>
        </div>
        <div class="program-name">Сетевое и системное администрирование</div>
      </RouterLink>
      <RouterLink to="/programs/3" class="program-item">
        <div class="program-icon-wrapper">
          <div class="program-icon"><IconSpec3 /></div>
        </div>
        <div class="program-name">Электромонтажник по силовым сетям и электрооборудования</div>
      </RouterLink>
      <RouterLink to="/programs/4" class="program-item">
        <div class="program-icon-wrapper">
          <div class="program-icon"><IconSpec4 /></div>
        </div>
        <div class="program-name">Дошкольное образование</div>
      </RouterLink>
      <RouterLink to="/programs/5" class="program-item">
        <div class="program-icon-wrapper">
          <div class="program-icon"><IconSpec5 /></div>
        </div>
        <div class="program-name">Поварское и кондитерское дело</div>
      </RouterLink>
      <RouterLink to="/page/applicants/admission2025" class="program-item">
        <div class="program-icon-wrapper all-programs">
          <div class="program-icon"><IconArrowRight /></div>
        </div>
        <div class="program-name">Все программы</div>
      </RouterLink>
    </div>
  </div>
</template>
