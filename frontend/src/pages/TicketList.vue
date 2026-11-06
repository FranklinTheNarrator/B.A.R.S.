<script setup>
import { ref, onMounted } from 'vue'
import TicketTable from '../components/TicketTable.vue'
import { getTickets } from '../api/tickets.js'

const screen = ref('loading')
const items = ref([])
const errorMessage = ref('')

async function load() {
  screen.value = 'loading'
  errorMessage.value = ''
  try {
    const data = await getTickets()
    items.value = data
    screen.value = data.length === 0 ? 'empty' : 'data'
  } catch (err) {
    errorMessage.value =
      err.status === 500
        ? 'Сервер не смог обработать запрос'
        : err.status
          ? 'Ошибка ' + err.status
          : 'Нет связи с сервером'
    screen.value = 'error'
  }
}

onMounted(load)
</script>

<template>
  <main>
    <h3>Заявки на проверку</h3>

    <p v-if="screen === 'loading'">Загрузка…</p>
    <p v-else-if="screen === 'empty'">Записей пока нет</p>
    <div v-else-if="screen === 'error'" class="error-box">
      <p>{{ errorMessage }}</p>
      <button type="button" @click="load">Повторить</button>
    </div>
    <TicketTable v-else :items="items" />
  </main>
</template>

<style scoped>
.error-box {
  padding: 12px;
  border: 1px solid #b00020;
  border-radius: 4px;
  color: #b00020;
}
.error-box button {
  padding: 6px 14px;
  background: #5f317a;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>