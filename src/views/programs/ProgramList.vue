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
      <span class="breadcrumbs-current">Образование</span>
    </div>
  </div>

  <div class="page-wrapper">
    <div class="page">
    <div class="education-block">
      <h1>Программы подготовки квалифицированных рабочих и служащих</h1>
<br />

<div class="table">
  <table>
    <thead>
      <tr>
        <th>Профессия, специальность и направление подготовки</th>
        <th>Укрупненная группа профессий, специальностей и направлений подготовки профессионального образования</th>
        <th>Форма обучения</th>
        <th>Срок получения образования</th>
      </tr>
      <tr>
        <td><a href="#" class="program-name">08.01.19 Электромонтажник по силовым сетям и электрооборудованию</a></td>
        <td>08.00.00 Техника и технология строительства</td>
        <td>очная</td>
        <td>3 года 10 месяцев</td>
      </tr>
      <tr>
        <td><a href="#" class="program-name">08.01.24 Мастер столярно-плотничных, паркетных и стекольных работ</a></td>
        <td>08.00.00 Техника и технология строительства</td>
        <td>очная</td>
        <td>1 год 10 месяцев</td>
      </tr>
      <tr>
        <td><a href="#" class="program-name">08.01.28 Мастер отделочных строительных и декоративных работ</a></td>
        <td>08.00.00 Техника и технология строительства</td>
        <td>очная</td>
        <td>1 год 10 месяцев</td>
      </tr>
      <tr>
        <td><a href="#" class="program-name">08.01.29 Мастер по ремонту и обслуживанию инженерных систем жилищно-коммунального хозяйства</a></td>
        <td>08.00.00 Техника и технология строительства</td>
        <td>очная</td>
        <td>1 год 10 месяцев</td>
      </tr>
      <tr>
        <td>
          <span class="professionalitet-label">ПРОФЕССИОНАЛИТЕТ</span>
          <a href="#" class="program-name">08.01.31 Электромонтажник электрических сетей и электрооборудования</a>
        </td>
        <td>08.00.00 Техника и технология строительства</td>
        <td>очная</td>
        <td>1 год 10 месяцев</td>
      </tr>
      <tr>
        <td><a href="#" class="program-name">11.01.05 Монтажник связи</a></td>
        <td>11.00.00 Электроника, радиотехника и системы связи</td>
        <td>очная</td>
        <td>1 год 10 месяцев</td>
      </tr>
      <tr>
        <td><a href="#" class="program-name">15.01.05 Сварщик (ручной и частично механизированной сварки (наплавки))</a></td>
        <td>15.00.00 Машиностроение</td>
        <td>очная</td>
        <td>1 год 10 месяцев</td>
      </tr>
      <tr>
        <td>
          <span class="professionalitet-label">ПРОФЕССИОНАЛИТЕТ</span>
          <a href="#" class="program-name">15.01.32 Оператор станков с программным управлением</a>
        </td>
        <td>15.00.00 Машиностроение</td>
        <td>очная</td>
        <td>1 год 10 месяцев</td>
      </tr>
      <tr>
        <td>
          <span class="professionalitet-label">ПРОФЕССИОНАЛИТЕТ</span>
          <a href="#" class="program-name">15.01.38 Оператор-наладчик металлообрабатывающих станков</a>
        </td>
        <td>15.00.00 Машиностроение</td>
        <td>очная</td>
        <td>1 год 10 месяцев</td>
      </tr>
      <tr>
        <td><a href="#" class="program-name">19.01.18 Аппаратчик-оператор производства продуктов питания из растительного сырья</a></td>
        <td>19.00.00 Промышленная экология и биология</td>
        <td>очная</td>
        <td>1 год 10 месяцев</td>
      </tr>
      <tr>
        <td><a href="#" class="program-name">23.01.17 Мастер по ремонту и обслуживанию автомобилей</a></td>
        <td>23.00.00 Техника и технология наземного транспорта</td>
        <td>очная</td>
        <td>1 год 10 месяцев</td>
      </tr>
      <tr>
        <td><a href="#" class="program-name">29.01.33 Мастер по изготовлению швейных изделий</a></td>
        <td>29.00.00 Технология легкой промышленности </td>
        <td>очная</td>
        <td>10 месяцев</td>
      </tr>
      <tr>
        <td><a href="#" class="program-name">35.01.28 Мастер столярного и мебельного производства</a></td>
        <td>35.00.00 Сельское, лесное и рыбное хозяйство</td>
        <td>очная</td>
        <td>1 год 10 месяцев</td>
      </tr>
      <tr>
        <td><a href="#" class="program-name">43.01.09 Повар, кондитер</a></td>
        <td>43.00.00 Сервис и туризм</td>
        <td>очная</td>
        <td>3 года 10 месяцев</td>
      </tr>
      <tr>
        <td>
          <span class="licence-label">ЛИЦЕНЗИРОВАНИЕ</span>
          <a href="#" class="program-name">38.01.02 Продавец</a>
        </td>
        <td>38.00.00 Экономика и управление </td>
        <td>очная</td>
        <td> 10 месяцев</td>
      </tr>
    </thead>
  </table>
</div>




    </div>
    <template v-if="pageStatus == 'loaded'">
      <div class="program-list">
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
  </div>

</template>

<style>

/* .education-block {
  width: 100%;
} */

</style>