<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import IconChevronUp from './icons/IconChevronUp.vue'
import IconChevronDown from './icons/IconChevronDown.vue'

const visibleTab = ref('')

function toggleNav(tab: string) {
  if (tab == visibleTab.value) {
    visibleTab.value = ''
  } else {
    visibleTab.value = tab
  }
}

const visibleNav1 = computed(() => {
  return visibleTab.value == 'tab1'
})
const visibleNav2 = computed(() => {
  return visibleTab.value == 'tab2'
})
const visibleNav3 = computed(() => {
  return visibleTab.value == 'tab3'
})

const route = useRoute()
watch(route, (to) => {
  visibleTab.value = ''
}, {flush: 'pre', immediate: true, deep: true})

</script>

<template>
  <div class="nav-expanded-anchor">
    <div class="mod-outer nav-expanded-wrapper">

      <Transition name="slide-fade">
        <div class="mod-inner nav-expanded" v-if="visibleNav1">
          <div><RouterLink to="/">Приём на 2025-2026 учебный год</RouterLink></div>
          <div><RouterLink to="/">Приёмная комиссия</RouterLink></div>
          <div><RouterLink to="/">Целевое обучение</RouterLink></div>
          <div><RouterLink to="/">Документы</RouterLink></div>
          <div><RouterLink to="/">Полезная информация для поступающих</RouterLink></div>
        </div>
      </Transition>

      <Transition name="slide-fade">
        <div class="mod-inner nav-expanded" v-if="visibleNav2">
          <div><RouterLink to="/">Общежитие</RouterLink></div>
          <div><RouterLink to="/">Заочное обучение</RouterLink></div>
          <div><RouterLink to="/">Специальность и профессии</RouterLink></div>
          <div><RouterLink to="/">Подготовительные курсы для студентов и абитуриентов</RouterLink></div>
        </div>
      </Transition>

      <Transition name="slide-fade">
        <div class="mod-inner nav-expanded" v-if="visibleNav3">
          <div><RouterLink to="/">Часто задаваемые вопросы</RouterLink></div>
        </div>
      </Transition>

    </div>
  </div>
  <div class="mod-outer nav-wrapper">
    <nav class="mod-inner">

      <RouterLink to="/">Главная</RouterLink>

      <a href="#" :class="{ active: visibleNav1 }" @click="toggleNav('tab1')">
        Абитуриентам
        <div class="navlink-arrow">
          <div v-show="visibleNav1"><IconChevronUp /></div>
          <div v-show="!visibleNav1"><IconChevronDown /></div>
        </div>
      </a>

      <a href="#" :class="{ active: visibleNav2 }" @click="toggleNav('tab2')">
        Студентам
        <div class="navlink-arrow">
          <div v-show="visibleNav2"><IconChevronUp /></div>
          <div v-show="!visibleNav2"><IconChevronDown /></div>
        </div>
      </a>

      <a href="#" :class="{ active: visibleNav3 }" @click="toggleNav('tab3')">
        Родителям
        <div class="navlink-arrow">
          <div v-show="visibleNav3"><IconChevronUp /></div>
          <div v-show="!visibleNav3"><IconChevronDown /></div>
        </div>
      </a>

      <RouterLink to="/last">
        Последняя
      </RouterLink>

    </nav>
  </div>
</template>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
</style>