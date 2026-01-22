<script setup lang="ts">
import { ref, onMounted } from 'vue'

// https://zakon.ru/blog/2025/9/1/forma_na_sajte_kuki_i_politika_za_chto_mozhno_poluchit_shtraf_uzhe_na_pervom_ekran
let text1 = "На нашем сайте используются cookie–файлы, в том числе сервисов веб–аналитики. Используя сайт, вы соглашаетесь на обработку персональных данных при помощи cookie–файлов. Подробнее об обработке персональных данных вы можете узнать в Политике конфиденциальности"

// https://черноусовъ.рф/agreement-cookies/
let text2 = "Мы используем файлы cookies. Оставаясь на нашем сайте, вы соглашаетесь на их использование."

// https://pmkspo.ru/
let text3 = "Мы используем файлы cookies для улучшения работы сайта. Оставаясь на нашем сайте, вы соглашаетесь с условиями использования файлов cookies. Чтобы ознакомиться с нашими Положениями о конфиденциальности и об использовании файлов cookie, нажмите здесь."

let final = "Мы используем файлы cookies для улучшения работы сайта. Используя сайт, вы соглашаетесь на обработку персональных данных при помощи cookie–файлов."


let consentGiven = ref(false);


function checkConsent() {
  if (localStorage.getItem('cookie_consent') === 'given') {
    consentGiven.value = true;
  }
}

function acceptCookies() {
  localStorage.setItem('cookie_consent', 'given');
  consentGiven.value = true;
}

onMounted(() => {
  checkConsent()
})


</script>

<template>
  <div class="cookie-banner" v-if="!consentGiven">
    <div class="cookie-text">{{ final }}</div>
    <button class="accept-cookie" @click="acceptCookies">OK</button>
  </div>
</template>