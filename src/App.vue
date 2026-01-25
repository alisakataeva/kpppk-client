<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Nav from './components/nav/TopNav.vue'
import CookieBanner from './components/CookieBanner.vue'
</script>

<template>
  <CookieBanner />
  <Header />
  <Nav />
  <RouterView />
  <Footer />
</template>