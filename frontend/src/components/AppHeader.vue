<template>
  <header>
    <h2>B.A.R.S. - проверка функционального состояния</h2>

    <nav class="menu">
      <router-link to="/">Список</router-link>
      <router-link to="/new">Создать</router-link>
      <router-link to="/login">Вход</router-link>
    </nav>
  </header>
</template>

<style scoped>
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

.menu a {
  display: inline-block;
  margin-right: 6px;
  padding: 7px 14px;
  border: 1px solid #5f317a;
  background: #fff;
  color: #5f317a;
  text-decoration: none;
  border-radius: 4px;
}

.menu a.router-link-active {
  background: #5f317a;
  color: #fff;
}
</style>