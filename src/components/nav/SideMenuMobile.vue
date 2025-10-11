<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

import type { AppLink } from '@/interfaces/app_interfaces';

import IconClose from '../icons/IconClose.vue'


//


const route = useRoute()

interface Props {
  navlinks: AppLink[];
}

const props = defineProps<Props>();

const currentPath = computed(() => route.fullPath)

let menuOpened = ref(false)

function openMenu() {
  menuOpened.value = true
}

function closeMenu() {
  menuOpened.value = false
}

</script>

<template>
  <div class="sidemenu-mob-container">
    <div
      class="sidemenu-mob-open-btn"
      @click="openMenu"
    >
      Открыть список ссылок
    </div>
    <div
      class="sidemenu-mob-wrapper"
      :class="{ 'opened' : menuOpened }"
    >
      <IconClose
        class="sidemenu-mob-close-btn"
        @click="closeMenu"
      />
      <aside class="sidemenu-mob">
        
        <RouterLink
          class="sidemenu-mob-link"
          :class="{ 'active' : link.url == currentPath}"
          :to="link.url"
          v-for="(link, ix) in props.navlinks"
          :key="'sidemenumoblink-'+ix"
        >
          {{ link.title }}
        </RouterLink>

      </aside>
    </div>
  </div>
</template>