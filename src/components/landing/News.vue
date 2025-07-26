<script setup lang="ts">

import { ref, reactive } from 'vue'

const data = reactive({
  news: [
    {
      id: 1,
      title: 'Коронованный герцог графства станет частью наших традиций',
      content: 'Вот вам яркий пример современных тенденций - укрепление и развитие внутренней структуры говорит о возможности переосмысления внешнеэкономических политик'
    },
    {
      id: 2,
      title: 'Коронованный герцог графства станет частью наших традиций',
      content: 'Вот вам яркий пример современных тенденций - укрепление и развитие внутренней структуры говорит о возможности переосмысления внешнеэкономических политик'
    },
    {
      id: 3,
      title: 'Коронованный герцог графства станет частью наших традиций',
      content: 'Вот вам яркий пример современных тенденций - укрепление и развитие внутренней структуры говорит о возможности переосмысления внешнеэкономических политик'
    },
    {
      id: 4,
      title: 'Коронованный герцог графства станет частью наших традиций',
      content: 'Вот вам яркий пример современных тенденций - укрепление и развитие внутренней структуры говорит о возможности переосмысления внешнеэкономических политик'
    },
  ]
})

</script>

<template>
  <div class="mod-outer news-wrapper">
    <div class="mod-inner mtb-40">
      <div class="landing-title">Новости</div>
      <div class="news">
        <RouterLink to="/" v-for="(n, ix) in data.news" :key="'news'+ix" class="new-item">
          <img src="../../assets/img/news.png" alt="" class="new-pic" />
          <div class="new-title">{{ n.title }}</div>
          <div class="new-content">{{ n.content }}</div>
        </RouterLink>
      </div>
      <button class="btn btn-primary align-right">Показать все</button>
    </div>
  </div>
</template>
  