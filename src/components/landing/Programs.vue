<script setup lang="ts">

import { ref, reactive } from 'vue'

const data = reactive({
  programs: [
    {
      id: 1,
      name: '23.01.17 Мастер по ремонту и обслуживанию автомобилей',
      img: '/src/assets/img/program1.png',
    },
    {
      id: 2,
      name: '23.01.17 Мастер по ремонту и обслуживанию автомобилей',
      img: '/src/assets/img/program2.png',
    },
    {
      id: 3,
      name: '23.01.17 Мастер по ремонту и обслуживанию автомобилей',
      img: '/src/assets/img/program1.png',
    },
    {
      id: 4,
      name: '23.01.17 Мастер по ремонту и обслуживанию автомобилей',
      img: '/src/assets/img/program2.png',
    },
    {
      id: 6,
      name: '23.01.17 Мастер по ремонту и обслуживанию автомобилей',
      img: '/src/assets/img/program2.png',
    },
    {
      id: 7,
      name: '23.01.17 Мастер по ремонту и обслуживанию автомобилей',
      img: '/src/assets/img/program1.png',
    },
    {
      id: 8,
      name: '23.01.17 Мастер по ремонту и обслуживанию автомобилей',
      img: '/src/assets/img/program2.png',
    },
    {
      id: 5,
      name: '23.01.17 Мастер по ремонту и обслуживанию автомобилей',
      img: '/src/assets/img/program1.png',
    },
  ]
})

</script>

<template>
  <div class="mod-outer programs-wrapper">
    <div class="mod-inner mtb-40">
      <div class="landing-title">Программы обучения</div>
      <div class="programs">
        <RouterLink to="/" v-for="(n, ix) in data.programs" :key="'program'+ix" class="program-item">
          <img :src="n.img" alt="" class="program-pic" />
          <div class="program-name">{{ n.name }}</div>
        </RouterLink>
      </div>
      <button class="btn btn-primary align-right">Показать все</button>
    </div>
  </div>
</template>
