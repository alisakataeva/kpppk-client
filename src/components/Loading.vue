<template>
  <div class="loader-wrapper">
    <div class="loader"></div>
  </div>
</template>

<style>

.loader-wrapper {
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media only screen and (max-width: 1000px) {
  .loader-wrapper {
    height: unset;
    margin: 84px 0;
  }
}

.loader {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid #eee;
  border-right-color: var(--color-2);
  animation: l2 1s infinite linear;
}
@keyframes l2 {to{transform: rotate(1turn)}}

</style>