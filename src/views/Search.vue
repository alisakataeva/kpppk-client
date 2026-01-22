<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

import  IconSearch from '../components/icons/IconSearch.vue'

onMounted(() => {
  document.body.classList.add('on-search-page');
});

onUnmounted(() => {
  document.body.classList.remove('on-search-page');
});

</script>

<template>
  <div class="search-page">

    <div class="search-wrapper">
      <input type="text" class="search-input" />
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