<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

import type { AppLink } from '@/interfaces/app_interfaces';
import SideMenuDesktop from './SideMenuDesktop.vue';
import SideMenuMobile from './SideMenuMobile.vue';


//


const route = useRoute()

interface Props {
  navlinks: AppLink[];
}

const props = defineProps<Props>();

const currentPath = computed(() => route.fullPath)

</script>

<template>
  <div class="desktop-sidemenu">
    <SideMenuDesktop :navlinks="props.navlinks" />
  </div>
  <div class="mobile-sidemenu">
    <SideMenuMobile :navlinks="props.navlinks" />
  </div>
</template>