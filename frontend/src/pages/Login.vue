<script setup>
import { ref } from 'vue'

const login = ref('')
const password = ref('')
</script>

<template>
  <main>
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
</template>

<style scoped>
.login-form {
  max-width: 360px;
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

input {
  width: 100%;
  padding: 7px;
  border: 1px solid #aaa;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: inherit;
}

input:focus {
  outline: none;
  border-color: #5f317a;
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