<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

import  IconLogo from './icons/IconLogoLatest.vue'
import  IconLocation from './icons/IconLocation.vue'
import  IconPhone from './icons/IconPhone.vue'
import  IconMail from './icons/IconMail.vue'
import  IconEye from './icons/IconEye.vue'
import  IconSearch from './icons/IconSearch.vue'


//


const route = useRoute()
const currentPath = computed(() => route.fullPath)

</script>

<template>
  <div
    class="header-wrapper"
    :class="{ 'densed' : currentPath != '/' }"
  >
    <header>
      <div class="header-left">
        <RouterLink to="/" class="header-logo">
          <IconLogo />
        </RouterLink>
        <RouterLink to="/" class="header-title">
          Коми-Пермяцкий профессионально-педагогический колледж
          <div class="header-title-subtext">
            Ордена знак Почёта
          </div>
        </RouterLink>
      </div>
      <div class="header-middle">
        <div class="header-search-wrapper">
          <input type="text" class="search-input" />
          <button class="search-btn"><IconSearch /></button>
        </div>
      </div>
      <div class="header-right">
        <div class="header-info">
          <div class="header-location">
            <div class="header-location-inner"><IconLocation /> 619000 Пермский край, г. Кудымкар, ул. Плеханова, 24</div>
          </div>
          <div class="header-contact">
            <span class="header-contact-phone">
              <IconPhone />
              <a href="tel:+7342041108">+7 342 604 11 08</a>
            </span>
            <span class="header-contact-mail">
              <IconMail />
              <a href="mailto:kppt.kud@mail.ru">kppt.kud@mail.ru</a>
            </span>
          </div>
        </div>
        <!-- <div class="header-eye">
          <a href="#" class="header-eye-link">
            <IconEye />
            <div class="mobile-label">Версия для слабовидящих</div>
          </a>
        </div> -->
      </div>
    </header>
  </div>
</template>
