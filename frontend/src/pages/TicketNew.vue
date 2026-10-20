<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { addItem } from '../ticketStore.js'

const router = useRouter()

const form = ref({
  title: '',
  siteId: 0,
  description: ''
})

const errors = ref({
  title: '',
  siteId: '',
  description: ''
})

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

function onCreate() {
  if (!validate()) return

  addItem({
    title: form.value.title.trim(),
    siteId: form.value.siteId,
    description: form.value.description.trim()
  })

  form.value = { title: '', siteId: 0, description: '' }
  router.push('/')
}
</script>

<template>
  <main>
    <h3>Новая заявка</h3>
    <form @submit.prevent="onCreate">
      <p>
        <label for="title">Тема (ФИО и цель проверки)</label>
        <input id="title" name="title" v-model="form.title" autofocus />
        <span v-if="errors.title" class="error">{{ errors.title }}</span>
      </p>
      <p>
        <label for="siteId">ID сотрудника</label>
        <input id="siteId" name="siteId" type="number" v-model.number="form.siteId" />
        <span v-if="errors.siteId" class="error">{{ errors.siteId }}</span>
      </p>
      <p>
        <label for="description">Что проверить</label>
        <textarea id="description" name="description" rows="4" v-model="form.description"></textarea>
        <span v-if="errors.description" class="error">{{ errors.description }}</span>
      </p>
      <button type="submit">Отправить</button>
    </form>
  </main>
</template>

<style scoped>
form p {
  margin: 12px 0;
}

label {
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
  font-size: 14px;
}

input, textarea {
  width: 100%;
  padding: 7px;
  border: 1px solid #aaa;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: inherit;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #5f317a;
}

.error {
  display: block;
  margin-top: 4px;
  color: #b00020;
  font-size: 13px;
}

button {
  padding: 8px 18px;
  background: #5f317a;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>