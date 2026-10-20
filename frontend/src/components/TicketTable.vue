<script setup>
defineProps({
  items: { type: Array, required: true }
})
</script>

<template>
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
</template>

<style scoped>
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
</style>