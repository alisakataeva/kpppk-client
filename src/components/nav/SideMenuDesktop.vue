<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

import type { AppLink } from '@/interfaces/app_interfaces';


//


const route = useRoute()

interface Props {
  navlinks: AppLink[];
}

const props = defineProps<Props>();

const currentPath = computed(() => route.fullPath)

</script>

<template>
  <aside class="sidemenu">
    <RouterLink
      class="sidemenu-link"
      :class="{ 'active' : link.url == currentPath}"
      :to="link.url"
      v-for="(link, ix) in props.navlinks"
      :key="'sidemenulink-'+ix"
    >
      {{ link.title }}
    </RouterLink>
  </aside>
</template>