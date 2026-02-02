<script setup lang="ts">

import { ref } from 'vue'


//


const props = defineProps({
  content: String,
});

let isOpened = ref(false)

function showModal() {
  isOpened.value = true
}

function hideModal() {
  isOpened.value = false
}

defineExpose({
  showModal
});

</script>

<template>
  <div class="modal-wrapper" :class="{'is-opened': isOpened}">
    <div class="modal">
      <div class="modal-content">{{ content }}</div>
      <div class="modal-actions">
        <button class="modal-ok" @click="hideModal">OK</button>
      </div>
    </div>
  </div>
</template>