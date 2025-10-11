<template>
  <div class="schedule">
    <iframe
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQiOEDEzy9CWdWSF2QZEdRjK9yQKnAQjKSkp10fDjoYI4ZV1CfsDgVWYzYIPJQm8MAvdMWL-n02zx7z/pubhtml?widget=true&amp;headers=false"
      range="A1:A10"
      width="1400" height="700"
      frameborder="0"
    ></iframe>
  </div>
</template>

<style>

.schedule {
  display: flex;
  justify-content: center;
}

iframe {
  border: 2px solid #ccc; /* Adds a border */
  
  margin: 1em 0;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); /* Adds a subtle shadow */
  border-radius: 8px; /* Rounds the corners */
}

</style>