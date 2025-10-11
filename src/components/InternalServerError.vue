<template>
    <div class="internal-server-error">
      <div class="internal-server-error-code">500</div>
      <div class="internal-server-error-header">Ошибка обращения к странице</div>
      <div class="internal-server-error-text">Сервер временно не может отобразить запрашиваемую страницу, попробуйте обновить страницу через некоторое время</div>
      <RouterLink to="/" class="internal-server-error-btn">На главную</RouterLink>
    </div>
  </template>
  
  <style>
  
  .internal-server-error {
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  @media only screen and (max-width: 1000px) {
    .internal-server-error {
      height: unset;
      margin: 84px 0;
    }
  }
  
  .internal-server-error-code {
    font-size: 120px;
    font-weight: 900;
    color: var(--color-5);
    line-height: 1;
  }
  
  .internal-server-error-header {
    font-size: 18px;
    color: #777;
    line-height: 3;
  }

  .internal-server-error-text {
    /* display: flex; */
    font-size: 12px;
    color: #888;
    line-height: 1.5;
    padding: 0 24px;
    text-align: center;
    margin-bottom: 24px;
  }
  
  a.internal-server-error-btn {
    background-color: #ddd;
    color: #333;
    padding: 8px 24px;
    border-radius: 18px;
    font-size: 14px;
    transition: 0.3s ease-in-out;
    text-decoration: none;
  }
  
  a.internal-server-error-btn:hover,
  a.internal-server-error-btn:focus,
  a.internal-server-error-btn:active {
    background-color: #eee;
  }
  
  </style>