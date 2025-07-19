<script setup lang="ts">
import  IconLogo from './icons/IconLogo.vue'
import  IconLocation from './icons/IconLocation.vue'
import  IconPhone from './icons/IconPhone.vue'
import  IconMail from './icons/IconMail.vue'
import  IconEye from './icons/IconEye.vue'
</script>

<template>
  <div class="mod-outer header-wrapper">
    <header class="mod-inner">
      <div class="header-right">
        <div class="header-logo">
          <IconLogo />
        </div>
        <div class="header-title">
          Коми-Пермяцкий профессионально-педагогический колледж
          <div class="header-title-subtext">
            Ордена знак Почёта
          </div>
        </div>
      </div>
      <div class="header-left">
        <div class="header-contact-info">
          <div class="header-location">
            <IconLocation />
            619000 Пермский край, г. Кудымкар, ул. Плеханова, 24
          </div>
          <div class="header-contact">
            <span class="header-contact-phone">
              <IconPhone />
              8 800 555 35 35
            </span>
            <span>
              <IconMail />
              kppt.kud@mail.ru
            </span>
          </div>
        </div>
        <div class="header-eye">
          <IconEye />
          <a href="#">версия для слабовидящих</a>
        </div>
      </div>
    </header>
  </div>
</template>
