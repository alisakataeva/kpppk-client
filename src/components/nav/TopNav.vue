<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

import TopNavDesktop from '@/components/nav/TopNavDesktop.vue'
import TopNavMobile from '@/components/nav/TopNavMobile.vue'


//


const route = useRoute()
const currentPath = computed(() => route.path)

</script>

<template>

  <div
    class="desktop-nav"
    :class="{ 'densed' : currentPath != '/' }"
    >
    <TopNavDesktop />
  </div>

  <div class="mobile-nav">
    <TopNavMobile />
  </div>

</template>