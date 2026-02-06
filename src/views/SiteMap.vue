<template>

  <div class="breadcrumbs-outer">
    <div class="breadcrumbs">
      <RouterLink to="/">Главная</RouterLink>
      <span class="breadcrumbs-divider">/</span>
      <span class="breadcrumbs-current">Карта сайта</span>
    </div>
  </div>

  <div class="sitemap">
    <div class="sitemap-column">

      <div class="sitemap-block">
        <RouterLink class="sitemap-header-link" to="/">Главная</RouterLink>
      </div>

      <div class="sitemap-block">
        <RouterLink class="sitemap-header-link" to="/news">Новости</RouterLink>
      </div>

      <div class="sitemap-block">

        <div class="sitemap-header">Основные сведения</div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/commoninfo/index">Основные сведения</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/commoninfo/structure">
            Структура и органы управления образовательной организацией
          </RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/commoninfo/docs">Документы</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/commoninfo/edu">Образование</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/commoninfo/management">Руководство</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/commoninfo/teachingstaff">Педагогический состав</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/commoninfo/equipment-and-environment">
            Материально-техническое обеспечение и оснащенность образовательного процесса. Доступная среда
          </RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/commoninfo/paid-services">
            Платные образовательные услуги
          </RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/commoninfo/fin-activities">
            Финансово-хозяйственная деятельность
          </RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/commoninfo/admission-vacancies">
            Вакантные места для приема (перевода) обучающихся
          </RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/commoninfo/scholarship">
            Стипендии и меры поддержки обучающихся
          </RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/commoninfo/international">Международное сотрудничество</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/commoninfo/catering">Организация питания</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/commoninfo/edu-standards">
            Образовательные стандарты и требования
          </RouterLink>
        </div>

      </div>

    </div>
    <div class="sitemap-column">

      <div class="sitemap-block">
        
        <div class="sitemap-header">Поступающим</div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/applicants/admission">Приёмная комиссия</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/applicants/admission-progress">План приёма</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/applicants/dormitory">Общежитие</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/applicants/enrollment-rating">Рейтинг и количество принятых заявлений</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/applicants/enrollment-results">Приказ о зачислении</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/applicants/open-day">День открытых дверей</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/applicants/contract-edu">Целевое обучение</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/applicants/paid-edu">Платное обучение</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/applicants/prof-edu">Профессиональное обучение</RouterLink>
        </div>

      </div>

      <div class="sitemap-block">

        <div class="sitemap-header">Колледж</div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/college/history">История колледжа</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/college/academic">Учебная работа</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/college/methodology">Методическая работа</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/college/educational">Воспитательная работа</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/college/psychological">Психологическая служба</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/college/quality-assessment">Оценка качества образования</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/college/anti-corruption-policy">Антикоррупционная политика</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/college/safety-health">Охрана труда</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/college/information-security">Информационная безопасность</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/college/career-guidance">Профориентационная работа</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/college/graduates-employment">Центр содействия трудоустройству выпускников</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/college/electronic-reception">Электронная приемная</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/college/achievements">Наши достижения</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/college/employee-honor">Доска Почета сотрудников</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/college/student-honor">Доска Почета студентов</RouterLink>
        </div>

      </div>

    </div>
    <div class="sitemap-column">

      <div class="sitemap-block">
        
        <div class="sitemap-header">Студентам</div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/students/info">Информация для обучающихся ГБПОУ "КПППК"</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/students/gia">Государственная итоговая аттестация</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/students/class-schedule">Расписание занятий</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/students/tips">Памятки для студентов</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/students/club-schedule">Расписание кружков и секций</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/students/zvezda">Студенческий спортивный клуб "Звезда" ГБПОУ "КПППК"</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/students/sports">Спортивные секции</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/students/art">Творческие объединения</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/students/library">Библиотека</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/students/museum">Музей</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/students/rddm">Движение Первых</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/students/volonteering">Волонтерское движение</RouterLink>
        </div>
        
        <div class="sitemap-link-wrapper">
          <RouterLink class="sitemap-link" to="/page/students/support">Социальная поддержка</RouterLink>
        </div>

      </div>

      <div class="sitemap-block">
        <RouterLink class="sitemap-header-link" to="/prof">Профессионалитет</RouterLink>
      </div>

      <div class="sitemap-block">
        <RouterLink class="sitemap-header-link" to="/champ">Чемпионат</RouterLink>
      </div>

    </div>
  </div>
</template>