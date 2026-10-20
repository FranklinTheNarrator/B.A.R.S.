<script setup>
import TicketTable from '../components/TicketTable.vue'
import { items } from '../ticketStore.js'
</script>

<template>
  <main>
    <h3>Заявки на проверку</h3>
    <TicketTable :items="items" />
  </main>
</template>