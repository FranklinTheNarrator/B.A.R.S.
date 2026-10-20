<script setup>
function onCreate() {
  console.log('Создать заявку')
}
</script>

<template>
  <main>
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

button {
  padding: 8px 18px;
  background: #5f317a;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>