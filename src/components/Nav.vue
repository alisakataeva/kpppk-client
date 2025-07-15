<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import IconChevronUp from './icons/IconChevronUp.vue'
import IconChevronDown from './icons/IconChevronDown.vue'
</script>

<template>
  <div class="mod-outer nav-wrapper">
    <nav class="mod-inner">
      <RouterLink to="/">Главная</RouterLink>
      <RouterLink to="/blank">
        Пустая
        <div class="navlink-arrow"><IconChevronDown /></div>
      </RouterLink>
      <RouterLink to="/useless">
        Бесполезная
        <div class="navlink-arrow"><IconChevronDown /></div>
      </RouterLink>
      <RouterLink to="/abs">
        Абстрактная
        <div class="navlink-arrow"><IconChevronDown /></div>
      </RouterLink>
      <RouterLink to="/last">Последняя</RouterLink>
    </nav>
  </div>
</template>
