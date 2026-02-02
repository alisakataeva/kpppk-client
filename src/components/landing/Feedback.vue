<script setup lang="ts">

import { ref } from 'vue'

import restAPI from '@/api/restapi'
import Modal from '@/components/Modal.vue'


//


let userName = ref("")
let userEmail = ref("")
let userMessage = ref("")

let errMsg = ref("")
let errVisible = ref(false)

const modalChild = ref<InstanceType<typeof Modal> | null>(null)
let modalChildMsg = ref("")

async function sendFeedback() {
  errVisible.value = false
  if (validateForm()) {
    let response = await restAPI.landingFeedback(userEmail.value, userName.value, userMessage.value)
    if (response.ok) {
      let json = await response.json()

      // показать модальное окно с сообщением об успехе
      modalChildMsg.value = json.message
      modalChild.value?.showModal()

      clearForm()
    }
  }
}

function clearForm() {
  userName.value = ""
  userEmail.value = ""
  userMessage.value = ""
}

function validateForm() {
  if (userName.value.length < 1) {
    errMsg.value = "Поле Имя не заполнено"
    errVisible.value = true
    return false
  }
  if (userEmail.value.length < 1) {
    errMsg.value = "Поле E-mail не заполнено"
    errVisible.value = true
    return false
  }
  if (!validateEmail(userEmail.value)) {
    errMsg.value = "Некорректный E-mail"
    errVisible.value = true
    return false
  }
  if (userMessage.value.length < 1) {
    errMsg.value = "Поле Сообщение не заполнено"
    errVisible.value = true
    return false
  }
  return true
}

function validateEmail(email: string) {
    // A common regex pattern for basic email format validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    // The test() method returns true if the email matches the pattern, false otherwise
    return emailRegex.test(email);
}

</script>

<template>
  <div class="mod-outer feedback-wrapper">
    <div class="mod-inner mtb-40">
      <div class="landing-title">Обратная связь</div>
      <div class="feedback">
        <div class="feedback-left">
          <div class="feedback-form">
            <input v-model="userName" class="mb-10" type="text" name="feedbackName" id="" placeholder="Ваше имя" />
            <input v-model="userEmail" class="mb-10" type="text" name="feedbackEmail" id="" placeholder="Ваш e-mail" />
            <textarea v-model="userMessage" class="mb-20" name="feedbackMsg" id="" cols="30" rows="5" placeholder="Сообщение"></textarea>
            <button class="btn btn-primary" @click="sendFeedback">Отправить</button>
          </div>
          <div class="feedback-errors" :class="{'is-visible': errVisible}">{{ errMsg }}</div>
        </div>
        <div class="feedback-right">
          <iframe src="https://yandex.ru/map-widget/v1/?ll=54.666921%2C59.018497&mode=whatshere&whatshere%5Bpoint%5D=54.666037%2C59.018583&whatshere%5Bzoom%5D=17&z=18.37"  allowfullscreen="true"></iframe>
        </div>
      </div>
      <Modal ref="modalChild" :content="modalChildMsg" />
    </div>
  </div>
</template>
