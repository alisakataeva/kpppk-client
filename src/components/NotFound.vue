<template>
  <div class="not-found">
    <div class="not-found-code">404</div>
    <div class="not-found-text">Страница не найдена</div>
    <RouterLink to="/" class="not-found-btn">На главную</RouterLink>
  </div>
</template>

<style>

.not-found {
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media only screen and (max-width: 1000px) {
  .not-found {
    height: unset;
    margin: 84px 0;
  }
}

.not-found-code {
  font-size: 120px;
  font-weight: 900;
  color: #333;
  line-height: 1;
}

.not-found-text {
  font-size: 18px;
  color: #777;
  line-height: 5;
}

a.not-found-btn {
  background-color: #ddd;
  color: #333;
  padding: 8px 24px;
  border-radius: 18px;
  font-size: 14px;
  transition: 0.3s ease-in-out;
  text-decoration: none;
}

a.not-found-btn:hover,
a.not-found-btn:focus,
a.not-found-btn:active {
  background-color: #eee;
}

</style>