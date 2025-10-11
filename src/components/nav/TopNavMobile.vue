<script setup lang="ts">
import { ref, computed, watch, reactive } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'

import { useGlobalStore } from '@/stores/global'

import IconChevronUp from '../icons/IconChevronUp.vue'
import IconChevronDown from '../icons/IconChevronDown.vue'
import IconMenu from '../icons/IconMenu.vue'
import IconClose from '../icons/IconClose.vue'


//


const route = useRoute()
const store = useGlobalStore()
const { MAIN_MENU } = storeToRefs(store)

// @todo temporary var used for top menu not chaotically sliding when page just loaded
let navNotOpenedYet = ref(true)

let navOpened = ref(false)
let openedTab = ref('')

function toggleNav() {
  navOpened.value = !navOpened.value
  navNotOpenedYet.value = false
}

function toggleDropdown(tab: string) {
  if (tab == openedTab.value) {
    openedTab.value = ''
  } else {
    openedTab.value = tab
  }
}

watch(route, (to) => {
  navOpened.value = false
  openedTab.value = ''
}, {flush: 'pre', immediate: true, deep: true})

</script>

<template>

  <div class="mod-outer mobile-nav-wrapper">
    <nav class="mod-inner">

      <div class="nav-mobile-icon">
        <IconMenu v-if="!navOpened" @click="toggleNav" />
        <IconClose v-if="navOpened" @click="toggleNav" />
      </div>

      <div class="mobile-nav-background" :class="{ 'shown': navOpened }"></div>

      <div
        class="mobile-nav-contents-wrapper"
        :class="{'mobile-nav-contents-closed': navNotOpenedYet, 'element-to-show': navOpened, 'element-to-hide': !navOpened}"
        @click.self="toggleNav"
      >

        <div class="mobile-nav-contents">

          <!-- NAV LINKS -->
          <template
            v-for="(link, ix) in MAIN_MENU"
            :key="'mobilenavlink-'+link.key"
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
                <div v-show="openedTab == link.key"><IconChevronUp /></div>
                <div v-show="openedTab != link.key"><IconChevronDown /></div>
              </div>
            </div>

            <div class="mobile-dropdown" v-show="openedTab == link.key">
              <div class="mobile-dropdown-tab">
                <template v-for="(column, ix) in link.sublinks" :key="'mobpage1col'+ix">
                  <div v-for="(sublink, ix) in column" :key="'mobpage1col'+ix">
                    <RouterLink :to="sublink.href">{{ sublink.title }}</RouterLink>
                  </div>
                </template>
              </div>
            </div>

          </template>
          
        </div>

        <div class="mobile-nav-contents-icon">
          <IconClose v-if="navOpened" @click="toggleNav" />
        </div>

      </div>

    </nav>
  </div>

</template>