<script setup lang="ts">

import IconCalendar from '@/components/icons/IconCalendar.vue'
import IconClock from '@/components/icons/IconClock.vue'



</script>

<template>
  <div class="mod-outer events-wrapper">
    <div class="mod-inner mtb-40">
      <div class="landing-title is-white">Мероприятия</div>
      <div class="events">
        <RouterLink to="/events/1" class="event-item">
          <div class="event-datetime">
            <div class="event-date"><IconCalendar />Сегодня</div>
            <div class="event-time"><IconClock /> 16:00</div>
          </div>
          <div class="event-title">Открытый семинар по образованию: «Ребенок для утопии. Опыт воспитания в 1920-1930-х гг.»</div>
        </RouterLink>
        <RouterLink to="/events/2" class="event-item">
          <div class="event-datetime">
            <div class="event-date"><IconCalendar />Завтра</div>
            <div class="event-time"><IconClock /> 16:00</div>
          </div>
          <div class="event-title">ХI Международная научно–практическая конференция по спортивному менеджменту и праву «Сохранение целостности международной ...</div>
        </RouterLink>
        <RouterLink to="/events/3" class="event-item">
          <div class="event-datetime">
            <div class="event-date"><IconCalendar />19 ноября</div>
            <div class="event-time"><IconClock /> 16:00</div>
          </div>
          <div class="event-title">Семинар Центра трансфера и управления социально-экономической информацией: «Презентация ALGOPACK: инновационного ...</div>
        </RouterLink>
        <RouterLink to="/events/4" class="event-item">
          <div class="event-datetime">
            <div class="event-date"><IconCalendar />19 ноября</div>
            <div class="event-time"><IconClock /> 16:00</div>
          </div>
          <div class="event-title">Лекция «Портфельное риск-моделирование на практике: как Data Science помогает управлять портфельными рисками»</div>
        </RouterLink>
      </div>
      <RouterLink to="/events" class="btn btn-light align-right">Показать больше</RouterLink>
    </div>
  </div>
</template>