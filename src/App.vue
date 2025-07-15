<script setup lang="ts">
import RouterView from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Nav from './components/Nav.vue'
</script>

<template>
  <Header />
  <Nav />
  <RouterView />
  <Footer />
</template>