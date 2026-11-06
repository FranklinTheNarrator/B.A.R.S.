<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { createTicket } from '../api/tickets.js'

const router = useRouter()

const form = ref({ title: '', siteId: 0, description: '' })
const errors = ref({ title: '', siteId: '', description: '' })
const serverError = ref('')
const isSubmitting = ref(false)

function validate() {
  errors.value = { title: '', siteId: '', description: '' }
  let ok = true

  const title = form.value.title.trim()
  if (title.length < 5 || title.length > 80) {
    errors.value.title = 'Тема: от 5 до 80 символов'
    ok = false
  }
  if (!Number.isInteger(form.value.siteId) || form.value.siteId <= 0) {
    errors.value.siteId = 'ID сотрудника: целое число больше нуля'
    ok = false
  }
  const description = form.value.description.trim()
  if (description.length < 10 || description.length > 500) {
    errors.value.description = 'Описание: от 10 до 500 символов'
    ok = false
  }
  return ok
}

async function onCreate() {
  if (isSubmitting.value) return
  if (!validate()) return

  isSubmitting.value = true
  serverError.value = ''

  try {
    await createTicket({
      title: form.value.title.trim(),
      siteId: form.value.siteId,
      description: form.value.description.trim()
    })
    form.value = { title: '', siteId: 0, description: '' }
    router.push('/')
  } catch (err) {
    if (err.status === 400) serverError.value = 'Проверьте поля'
    else if (err.status === 500) serverError.value = 'Сервер не смог обработать запрос'
    else serverError.value = 'Нет связи с сервером'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <main>
    <h3>Новая заявка</h3>
    <form @submit.prevent="onCreate">
      <p>
        <label for="title">Тема (ФИО и цель проверки)</label>
        <input id="title" name="title" v-model="form.title" autofocus :disabled="isSubmitting" />
        <span v-if="errors.title" class="error">{{ errors.title }}</span>
      </p>
      <p>
        <label for="siteId">ID сотрудника</label>
        <input id="siteId" name="siteId" type="number" v-model.number="form.siteId" :disabled="isSubmitting" />
        <span v-if="errors.siteId" class="error">{{ errors.siteId }}</span>
      </p>
      <p>
        <label for="description">Что проверить</label>
        <textarea id="description" name="description" rows="4" v-model="form.description" :disabled="isSubmitting"></textarea>
        <span v-if="errors.description" class="error">{{ errors.description }}</span>
      </p>
      <p v-if="serverError" class="server-error">{{ serverError }}</p>
      <button type="submit" :disabled="isSubmitting">
        {{ isSubmitting ? 'Создаём…' : 'Отправить' }}
      </button>
    </form>
  </main>
</template>

<style scoped>
form p { margin: 12px 0; }
label { display: block; margin-bottom: 4px; font-weight: bold; font-size: 14px; }
input, textarea {
  width: 100%; padding: 7px; border: 1px solid #aaa;
  border-radius: 4px; box-sizing: border-box; font-family: inherit;
}
input:focus, textarea:focus { outline: none; border-color: #5f317a; }
.error { display: block; margin-top: 4px; color: #b00020; font-size: 13px; }
.server-error { color: #b00020; font-weight: bold; margin: 12px 0; }
button {
  padding: 8px 18px; background: #5f317a; color: #fff;
  border: none; border-radius: 4px; cursor: pointer;
}
button:disabled { opacity: 0.6; cursor: not-allowed; }
</style>