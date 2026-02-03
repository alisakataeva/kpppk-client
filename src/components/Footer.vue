<script setup lang="ts">

import IconMap from './icons/IconMap.vue'

</script>

<template>
  <div class="mod-outer footer-wrapper">
    <footer class="mod-inner">
      <div class="footer-top">
        Коми-Пермяцкий профессионально-педагогический колледж
      </div>
      <div class="footer-body">
        <div class="footer-body-left">
          <div class="footer-body-column">
            <ul>
              <li><strong>Разделы сайта:</strong></li>
              <li>
                <a href="/page/commoninfo/index">Сведения об образовательной организации</a>
              </li>
              <li>
                <a href="/page/applicants/admission">Абитуриентам</a>
              </li>
              <li>
                <a href="/page/students/info">Студентам</a>
              </li>
              <li>
                <a href="#">Преподавателям</a>
              </li>
              <li>
                <a href="/prof">Профессионалитет</a>
              </li>
              <li>
                <a href="/news">Новости</a>
              </li>
              <!-- <li>
                <a href="#">Мероприятия</a>
              </li> -->
            </ul>
          </div>
          <div class="footer-body-column">
            <ul>
              <li><strong>Полезные ссылки:</strong></li>
              <li>
                <a href="https://edu.gov.ru/">Министерство просвещения Российской Федерации</a>
              </li>
              <li>
                <a href="http://minobr.permkrai.ru/">Министерство образования и науки Пермского края</a>
              </li>
              <li>
                <a href="http://iro.perm.ru/catalog.html?cid=7">Институт развития образования Пермского края</a>
              </li>
              <li>
                <a href="https://vk.com/minprosvet">Официальное сообщество Минпросвещения России во ВКонтакте</a>
              </li>
              <li>
                <a href="https://t.me/minprosrf">Официальный телеграм-канал Минпросвещения России</a>
              </li>
              <li>
                <a href="https://vk.com/public212833993">Профессиональное сообщество "Учителя" ВКонтакте</a>
              </li>
            </ul>
          </div>
          <div class="footer-body-column">
            <ul>
              <li><strong>Социальные сети:</strong></li>
              <li>
                <a href="https://vk.com/politeh_kud">КПППК в ВК</a>
              </li>
              <li>
                <a href="https://max.ru/id8107000417_gos">КПППК в MAX</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-body-right">
          <div class="other-links">
            <ul>
              <li><a class="site-map-link" href="/sitemap"><IconMap /> Карта сайта</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        © 2014-2026 КПППК
      </div>
    </footer>
  </div>
</template>


<style>

.site-map-link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 8px;
  font-weight: 500;
  background-color: #ffffff20;
  transition: 0.3s all ease-in-out;
}
.site-map-link:hover {
  text-decoration: none;
  background-color: #fff;
  color: #0b387a;
}

.site-map-link svg {
  fill: #fff;
  width: 20px;
  margin-right: 4px;
  transition: 0.3s all ease-in-out;
}
.site-map-link:hover svg {
  fill: #0b387a;
}

</style>