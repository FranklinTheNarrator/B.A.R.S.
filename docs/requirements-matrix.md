| Требование ЛР1 | Поле или сущность | Запрос | Критерий |
|---|---|---|---|
| Создать наблюдение | Observation, title, employeeId, description | POST /api/observations | 1 |
| Назначить исполнителя | assigneeUserId | PATCH …/assignee | 2 |
| Перевести в работу | status | PATCH …/status | 3 |
