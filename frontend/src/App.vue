<script setup>
import { ref } from 'vue'

const screen = ref('list')

const items = ref([
  { id: 1, number: 'FS-104', title: 'Петров И.И. - плановая проверка внимания', siteId: 1042, status: 'InProgress' },
  { id: 2, number: 'FS-105', title: 'Сидорова А.В. - жалоба на усталость', siteId: 2087, status: 'Closed' },
  { id: 3, number: 'FS-106', title: 'Кузнецов Д.С. - допуск к ночной смене', siteId: 3310, status: 'New' }
])

const login = ref('')
const password = ref('')

function onCreate() {
  // плейсхолдер, сейва заявок пока нету
  console.log('Создать заявку')
}
</script>

<template>
  <div class="app">
    <header>
      <h2>B.A.R.S. - проверка функционального состояния</h2>

      <nav class="menu">
        <button type="button" :class="{ active: screen === 'list' }" @click="screen = 'list'">Список</button>
        <button type="button" :class="{ active: screen === 'new' }" @click="screen = 'new'">Создать</button>
        <button type="button" :class="{ active: screen === 'login' }" @click="screen = 'login'">Вход</button>
      </nav>
    </header>

    <main v-if="screen === 'list'">
      <h3>Заявки на проверку</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Номер</th>
              <th>Тема</th>
              <th>ID сотрудника</th>
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
      </div>
    </main>

    <main v-else-if="screen === 'new'">
      <h3>Новая заявка</h3>
      <form @submit.prevent="onCreate">
        <p>
          <label for="title">Тема (ФИО и цель проверки)</label>
          <input id="title" name="title" autofocus />
        </p>
        <p>
          <label for="siteId">ID сотрудника</label>
          <input id="siteId" name="siteId" type="number" />
        </p>
        <p>
          <label for="description">Что проверить</label>
          <textarea id="description" name="description" rows="4"></textarea>
        </p>
        <button type="submit">Отправить</button>
      </form>
    </main>

    <main v-else>
      <h3>Вход</h3>
      <form @submit.prevent class="login-form">
        <p>
          <label for="login">Логин</label>
          <input id="login" name="login" v-model="login" />
        </p>
        <p>
          <label for="password">Пароль</label>
          <input id="password" name="password" type="password" v-model="password" />
        </p>
        <button type="submit">Войти</button>
      </form>
    </main>
  </div>
</template>

<style scoped>
.app {
  max-width: 820px;
  margin: 0 auto;
  padding: 24px 20px;
  font-family: Arial, sans-serif;
  color: #222;
}

header {
  border-bottom: 2px solid #5f317a;
  padding-bottom: 12px;
  margin-bottom: 24px;
}

header h2 {
  margin: 0;
  margin-bottom: 12px;
  color: #5f317a;
}

.menu button {
  margin-right: 6px;
  padding: 7px 14px;
  border: 1px solid #5f317a;
  background: #fff;
  color: #5f317a;
  cursor: pointer;
  border-radius: 4px;
}

.menu button.active {
  background: #5f317a;
  color: #fff;
}

h3 {
  margin: 0 0 14px;
}

.table-wrap {
  border: 1px solid #5f317a;
  border-radius: 8px;
  overflow: hidden;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  border: 1px solid #d6c3e3;
  padding: 8px 10px;
  text-align: left;
}

th {
  background: #e9d8f3;
  color: #4a2563;
}

tbody tr:nth-child(even) {
  background: #faf7fc;
}

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

form button {
  padding: 8px 18px;
  background: #5f317a;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.login-form {
  max-width: 360px;
}
</style>