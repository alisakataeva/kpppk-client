<script setup lang="ts">
import { ref, computed, watch, reactive } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'

import { useGlobalStore } from '@/stores/global'

import IconChevronUp from '../icons/IconChevronUp.vue'
import IconChevronDown from '../icons/IconChevronDown.vue'


//


const route = useRoute()
const store = useGlobalStore()
const { MAIN_MENU } = storeToRefs(store)

let visibleTab = ref('')

function toggleDropdown(tab: string) {
  if (tab == visibleTab.value) {
    visibleTab.value = ''
  } else {
    visibleTab.value = tab
  }
}

watch(route, (to) => {
  visibleTab.value = ''
}, {flush: 'pre', immediate: true, deep: true})

</script>

<template>

  <div class="nav-dropdown-anchor">
    <div class="mod-outer nav-dropdown-wrapper">

      <!-- DROPDOWN SUBMENUS -->
      <template
        v-for="(link, ix) in MAIN_MENU"
        :key="'desktopnavlink-'+link.key"
      >
        <Transition name="slide-fade">
          <div class="mod-inner nav-dropdown" v-if="visibleTab == link.key">

            <div class="nav-dropdown-column" v-for="(col, jx) in link.sublinks" :key="'column-'+link.key+jx">
              <div class="nav-dropdown-link" v-for="(sublink, kx) in col" :key="'sublink-'+link.key+kx">
                <RouterLink :to="sublink.href">{{ sublink.title }}</RouterLink>
              </div>
            </div>

          </div>
        </Transition>
      </template>

    </div>
  </div>

  <div class="mod-outer nav-wrapper">
    <nav class="mod-inner">
      <div class="nav-contents">

        <!-- NAV LINKS -->
        <template
          v-for="(link, ix) in MAIN_MENU"
          :key="'desktopnavlink-'+link.key"
        >

          <!-- Regular Link -->
          <RouterLink
            v-if="link.href"
            :to="link.href"
          >
            {{ link.title }}
          </RouterLink>

          <!-- Dropdown Link -->
          <div
            class="dropdown-link"
            v-else
            @click="toggleDropdown(link.key)"
          >
            {{ link.title }}
            <div
              v-if="link.sublinks && link.sublinks?.length > 0"
              class="navlink-arrow"
            >
              <div v-show="visibleTab == link.key"><IconChevronUp /></div>
              <div v-show="visibleTab != link.key"><IconChevronDown /></div>
            </div>
          </div>

        </template>

      </div>
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