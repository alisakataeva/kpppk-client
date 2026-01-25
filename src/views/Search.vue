<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router'

import IconSearch from '../components/icons/IconSearch.vue'


//

const route = useRoute()

let searchText = ref("")

onMounted(() => {
  document.body.classList.add('on-search-page')
  if (route.query.text !== undefined && typeof route.query.text === 'string') {
    searchText.value = route.query.text
  }
});

onUnmounted(() => {
  document.body.classList.remove('on-search-page');
});

</script>

<template>
  <div class="search-page">

    <div class="search-wrapper">
      <input type="text" class="search-input" v-model="searchText" />
      <button class="search-btn"><IconSearch /></button>
    </div>

    <hr />

    <h1>Результаты поиска:</h1>

    <div class="search-results">
      <div class="search-res">
        ...
      </div>
    </div>
  </div>
</template>