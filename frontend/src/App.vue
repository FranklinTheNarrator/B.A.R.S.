<script setup>
import { ref } from 'vue'

const screen = ref('list') // 'list' | 'new' | 'login'

const items = ref([
  { id: 1, number: 'A-101', title: 'Насос не запускается', siteId: 2, status: 'New' },
  { id: 2, number: 'A-102', title: 'Проверить вентиль',     siteId: 1, status: 'InProgress' }
])
</script>

<template>
  <header>
    <h1>Заявки</h1>
    <nav>
      <button type="button" @click="screen = 'list'">Список</button>
      <button type="button" @click="screen = 'new'">Создать</button>
      <button type="button" @click="screen = 'login'">Вход</button>
    </nav>
  </header>

  <!-- ЭКРАН 1: СПИСОК -->
  <main v-if="screen === 'list'">
    <h2>Список заявок</h2>
    <table>
      <thead>
        <tr>
          <th>Номер</th>
          <th>Тема</th>
          <th>Участок</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.number }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.siteId }}</td>
          <td>{{ item.status }}</td>
        </tr>
      </tbody>
    </table>
  </main>

  <!-- ЭКРАН 2: СОЗДАНИЕ -->
  <main v-else-if="screen === 'new'">
    <h2>Новая заявка</h2>
    <form @submit.prevent>
      <p>
        <label for="title">Тема, 5–80 символов</label><br>
        <input id="title" name="title" autofocus>
      </p>
      <p>
        <label for="siteId">Номер справочника</label><br>
        <input id="siteId" name="siteId" type="number">
      </p>
      <p>
        <label for="description">Описание, 10–500 символов</label><br>
        <textarea id="description" name="description"></textarea>
      </p>
      <button type="submit">Создать</button>
    </form>
  </main>

  <!-- ЭКРАН 3: ВХОД -->
  <main v-else>
    <h2>Вход</h2>
    <form @submit.prevent>
      <p>
        <label for="login">Логин</label><br>
        <input id="login" name="login">
      </p>
      <p>
        <label for="password">Пароль</label><br>
        <input id="password" name="password" type="password">
      </p>
      <button type="submit">Войти</button>
    </form>
  </main>
</template>

<style scoped>
header { padding: 1rem; }
nav button { margin-right: .5rem; }
main { padding: 1rem; }
table { border-collapse: collapse; }
th, td { border: 1px solid #999; padding: .25rem .5rem; }
label { font-weight: 600; }
</style>