import { ref } from 'vue'

export const items = ref([
  { id: 1, number: 'FS-104', title: 'Петров И.И. - плановая проверка внимания', siteId: 1042, status: 'InProgress' },
  { id: 2, number: 'FS-105', title: 'Сидорова А.В. - жалоба на усталость', siteId: 2087, status: 'Closed' },
  { id: 3, number: 'FS-106', title: 'Кузнецов Д.С. - допуск к ночной смене', siteId: 3310, status: 'New' }
])